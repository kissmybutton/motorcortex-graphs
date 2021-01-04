import MotorCortex from '@kissmybutton/motorcortex';
import AnimePlugin from '@kissmybutton/motorcortex-anime';
const Anime = MotorCortex.loadPlugin(AnimePlugin);
import { colorPalette } from '../../Defaults/colorPalette';

/**
 * BAR CHART SIMPLE GRAPH: MotorCortex Implementation
 */
export default class BarChartSimple extends MotorCortex.HTMLClip{
    get html(){
        this.data = this.attrs.data.data;
        let bars = ``;
        this.dataPointsNum = 0;
        this.maxPoint = 0;

        for (let datum in this.data) {
            bars += `
                <div class="bar-container" id="${this.data[datum].name}bar">
                    <div class="bar-fill"></div>
                </div>
            `;
            this.dataPointsNum++;
            this.maxPoint = (this.maxPoint < this.data[datum].value) ? 
                this.data[datum].value : this.maxPoint;
        }

        this.gridLinesNum = this.attrs.gridLines ? 
            this.attrs.gridLines : 11;
        
        let gridLines = ``;
        if (this.attrs.grid) {
            for (let i = 0; i < this.gridLinesNum; i++) {
                gridLines += `
                    <div class="gridLine" id="gridLine${i}"></div>
                `;
            };
        }

        let barGraphHTML = `
            <div class="container">
                <div id="graph-container">
                    <div id="graph">${bars}</div>
                    <div id="gridlines">${gridLines}</div>
                </div>
                <div id="y-axis"></div>
                <div id="x-axis"></div>
            </div>
        `;
        
        return barGraphHTML
    }

    get css() {
        const primary = this.attrs.palette.primary ? 
            this.attrs.palette.primary : colorPalette.gray;
        const secondary = this.attrs.palette.secondary ? 
            this.attrs.palette.secondary : colorPalette.lightGray;
        const tertiary = this.attrs.palette.tertiary ? 
            this.attrs.palette.tertiary : colorPalette.darkGray;
        const font = this.attrs.palette.font ? 
            this.attrs.palette.font : colorPalette.font;
        const accent = this.attrs.palette.accent ? 
            this.attrs.palette.accent : colorPalette.accent;
        const background = this.attrs.palette.background ? 
            this.attrs.palette.background : colorPalette.background;
        
        let axisStyles = `
            #y-axis {
                width: 4px;
                height: 70%;
                left: 14%;
                top: 15%;
                background-color: ${tertiary};
                position: absolute;
            }
            
            #x-axis {
                width: 74%;
                height: 4px;
                top: 85%;
                left: 14%;
                background-color: ${tertiary};
                position: absolute;
            }
        `;
        
        let gridStyles = `
            #gridlines {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }

            .gridLine {
                height: 3px;
                width: 100%;
                background-color: ${secondary};
                align-self: flex-end;
            }

            #gridLine${this.gridLinesNum - 1} {
                visibility: hidden;
            }
        `;

        let barSizings = ``;
        for (let datum in this.data) {
            barSizings += `
                #${this.data[datum].name}bar {
                    height: ${(this.data[datum].value/this.maxPoint)*100}%;
                }
            `;
        }

        let barStyles = `
            #graph {
                top: 0;
                left: 0;
                position: absolute;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: space-around;
            }

            .bar-container{ 
                align-self: flex-end;
                width: ${(100/this.dataPointsNum)}%;
                margin: 0% ${(10/this.dataPointsNum)+1}%;
                height: 100%;
                display: flex;
            }

            .bar-fill {
                width: 100%;
                height: 100%;
                background-color: ${primary};
                align-self: flex-end;
            }

            ${barSizings}
        `;
        
        let styleBlock = `
            .container {
                width: 100%;
                height: 100%;
                background-color: ${background};
                display: flex;
            }

            #graph-container {
                left: 16%;
                top: 17%;
                width: 70%;
                height: 68%;
                position: absolute;
            }
            
            ${axisStyles}
            ${gridStyles}
            ${barStyles}
        `;

        return styleBlock;
    } 

    get fonts() {
        // you can load google fonts on your clip by adding objects on the
        // array it returns. Each object must have two keys:
        // type: "google-font" and
        // src: the src of the google font e.g.:
        // https://fonts.googleapis.com/css2?family=Ubuntu:wght@500;700&display=swap
        return [];
    }

    get audioSources() {
        // You can load sounds here to use on your Clip. Check documentation for details
        return [];
    }

    buildTree() {
        
        this.introDur = this.attrs.timings.intro ? 
            this.attrs.timings.intro : 0;
        this.outtroDur = this.attrs.timings.outtro ? 
            this.attrs.timings.outtro : 0;
        this.staticDur = this.attrs.timings.staticDur ? 
            this.attrs.timings.staticDur : 1000;

        // !!! INTRO !!!
        if (this.attrs.timings.intro) {
            const introGroup = new MotorCortex.Group();

            const axisCombo = new MotorCortex.Combo(
                {
                    incidents: [
                        {
                            incidentClass: Anime.Anime,
                            attrs: {
                                animatedAttrs: {
                                    height: '70%'
                                },
                                initialValues: {
                                    height: '0%'
                                },
                            },
                            props: {
                                selector: '#y-axis',
                                duration:  this.introDur * 0.2,
                                easing: 'easeInQuad'
                            },
                            position: this.introDur * 0
                        }, {
                            incidentClass: Anime.Anime,
                            attrs: {
                                animatedAttrs: {
                                    width: '74%'
                                },
                                initialValues: {
                                    width: '0%'
                                },
                            },
                            props: {
                                selector: '#x-axis',
                                duration: this.introDur * 0.3,
                                easing: 'easeOutQuad'
                            },
                            position: this.introDur * 0.2
                        },
                    ]
                },
                {
                    selector: ".container",
                }
            );
            introGroup.addIncident(axisCombo, this.introDur * 0);
    
            const gridLinesAnim = new Anime.Anime(
                {
                    animatedAttrs: {
                        width: '100%'
                    },
                    initialValues: {
                        width: '0%'
                    },
                },
                {
                    selector: ".gridLine",
                    duration: this.introDur * 0.5,
                    easing: "easeOutQuad"
                }
            );
            introGroup.addIncident(gridLinesAnim, this.introDur * 0.2);

            const barAnimation = new MotorCortex.Combo(
                {
                    incidents: [
                        {
                            incidentClass: Anime.Anime,
                            attrs: {
                                animatedAttrs: {
                                    height: '100%'
                                },
                                initialValues: {
                                    height: '0%'
                                },
                            },
                            props: {
                                duration: this.introDur * 0.3,
                                easing: "easeInOutQuad"

                            },
                            position: 0
                        }
                    ]
                },
                {
                    selector: ".bar-fill",
                    delay: `@stagger(0, ${this.introDur * 0.4})`
                }
            );
            introGroup.addIncident(barAnimation, this.introDur * 0.3);
    
            this.addIncident(introGroup, this.introDur * 0);
        }

        // !!! OUTRO !!!
        if (this.attrs.timings.outtro) {
            console.log("in here")
            const outtroGroup = new MotorCortex.Group();

            const axisComboOuttro = new MotorCortex.Combo(
                {
                    incidents: [
                        {
                            incidentClass: Anime.Anime,
                            attrs: {
                                animatedAttrs: {
                                    width: '0%'
                                },
                                initialValues: {
                                    width: '74%'
                                },
                            },
                            props: {
                                selector: '#x-axis',
                                duration:  this.outtroDur * 0.2,
                                easing: 'easeInQuart'
                            },
                            position: this.outtroDur * 0
                        }, {
                            incidentClass: Anime.Anime,
                            attrs: {
                                animatedAttrs: {
                                    height: '0%'
                                },
                                initialValues: {
                                    height: '70%'
                                },
                            },
                            props: {
                                selector: '#y-axis',
                                duration:  this.outtroDur * 0.3,
                                easing: 'easeOutQuart'
                            },
                            position: this.outtroDur * 0.2
                        }
                    ]
                },
                {
                    selector: ".container",
                }
            );
            outtroGroup.addIncident(axisComboOuttro, this.outtroDur * 0.5);
    
            const gridLinesOuttro = new Anime.Anime(
                {
                    animatedAttrs: {
                        width : '0%'
                    }, 
                    initialValues: {
                        width: '100%'
                    },
                },
                {
                    selector: "#gridlines",
                    easing: 'easeInOutQuad',
                    duration: this.outtroDur * 0.5,
                }
            );
            outtroGroup.addIncident(gridLinesOuttro, this.outtroDur * 0.2);
    
            
            const barAnimationOuttro = new MotorCortex.Combo(
                {
                    incidents: [
                        {
                            incidentClass: Anime.Anime,
                            attrs: {
                                animatedAttrs: {
                                    height: '0%'
                                },
                                initialValues: {
                                    height: '100%'
                                },
                            },
                            props: {
                                duration: this.outtroDur * 0.3,
                                easing: "easeInOutQuad"

                            },
                            position: 0
                        }
                    ]
                },
                {
                    selector: ".bar-fill",
                    delay: `@stagger(0, ${this.outtroDur * 0.4})`
                }
            );
            outtroGroup.addIncident(barAnimationOuttro, this.outtroDur * 0);
    
            this.addIncident(
                outtroGroup, 
                0 + this.introDur + this.staticDur
            );
        }


        const staticIncident = new Anime.Anime(
            { animatedAttrs: {} },
            {
                selector: ".container",
                duration: this.staticDur,
            }
        );
        this.addIncident(staticIncident, this.introDur);
    }
}