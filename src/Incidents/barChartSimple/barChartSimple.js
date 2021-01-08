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
        this.title = this.attrs.data.title;
        this.subtitle = this.attrs.data.subtitle;
        this.maxPoint = 0;
        this.gridLinesNum = this.attrs.gridLines ? 
            this.attrs.gridLines : 11;

        let title = [];
        for (let i in this.title) {
            let letter = [];
            if (this.title[i] === " ") {
                letter.push(<div class="space-char letter-wrapper">-</div>);
            } else {
                letter.push(<div class="fontColorOn letter-wrapper">{this.title[i]}</div>);
            }
            
            title.push(<div id={"letter-" + i} class="letter-container">{letter}</div>);
        }
        
        let subtitle = [];
        for (let i in this.subtitle) {
            let letter = [];
            if (this.subtitle[i] === " ") {
                letter.push(<div class="space-char letter-wrapper">-</div>);
            } else {
                letter.push(<div class="fontColorOn letter-wrapper">{this.subtitle[i]}</div>);
            }
            
            subtitle.push(<div id={"letter-" + i} class="letter-container">{letter}</div>);
        }

        let gridLines = [];
        if (this.attrs.grid) {
            for (let i = 0; i < this.gridLinesNum; i++) {
                gridLines.push(
                    <div class="gridLine" id={"gridLine" + i}></div>
                );
            };
        }

        let bars = this.data.map( (datum) => {
            this.maxPoint = (this.maxPoint < datum.value) ? 
                datum.value : this.maxPoint;

            return (
                <div class="bar-container" id={datum.name + "bar"}>
                    <div class="bar-fill" id={datum.name + "-bar-fill"}></div>
                </div>
            );
        });

        let xLabels = [];
        for (let i in this.data) {
            let label = [];
            for (let z in this.data[i].name) {
                label.push(
                    <div id={"letter-" + i + "-" + z} class="letter-container">
                        <div class="letter-wrapper fontColorOn">{this.data[i].name[z]}</div>
                    </div>
                );
            }

            xLabels.push(
                <div class="label-container" id={"label-" + i}>{label}</div>
            );
        }

        let barGraphHTML = (
            <div class="container">
                <div id="title-container">
                    <div id="title-wrapper">{title}</div>
                    <div id="subtitle-position-end">
                        <div id="subtitle-wrapper">{subtitle}</div>
                    </div>
                </div>
                <div id="title-back-wrapper">
                    <div id="title-background"></div>
                </div>
                <div id="graph-container">
                    <div id="graph">{bars}</div>
                    <div id="gridlines">{gridLines}</div>
                </div>
                <div id="y-axis"></div>
                <div id="x-axis"></div>
                <div id="x-labels-container">{xLabels}</div>
                <div id="x-labels-back-wrapper">
                    <div id="x-labels-background"></div>
                </div>
            </div>
        );
        
        return barGraphHTML;
    }

    get css() {
        const primaryC = this.attrs.palette.primary ? 
            this.attrs.palette.primary : colorPalette.gray;
        const secondaryC = this.attrs.palette.secondary ? 
            this.attrs.palette.secondary : colorPalette.lightGray;
        const tertiaryC = this.attrs.palette.tertiary ? 
            this.attrs.palette.tertiary : colorPalette.darkGray;
        const fontC = this.attrs.palette.font ? 
            this.attrs.palette.font : colorPalette.font;
        const accentC = this.attrs.palette.accent ? 
            this.attrs.palette.accent : colorPalette.accent;
        const backgroundC = this.attrs.palette.background ? 
            this.attrs.palette.background : colorPalette.background;
        
        let axisStyles = `
            #y-axis {
                width: 4px;
                height: 70%;
                left: 14%;
                top: 15%;
                background-color: ${tertiaryC};
                position: absolute;
            }
            
            #x-axis {
                width: 74%;
                height: 4px;
                top: 85%;
                left: 14%;
                background-color: ${tertiaryC};
                position: absolute;
            }
        `;
        
        let gridStyles = `
            #gridlines {
                width: 100%;
                height: calc(100% + 3px);
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }

            .gridLine {
                height: 3px;
                width: 100%;
                background-color: ${secondaryC};
                align-self: flex-end;
            }
        `;

        let barSizings = ``;
        let barFills = ``;
        this.data.map( (datum)=> {
            barSizings += `
                #${datum.name}bar {
                    height: ${(datum.value.toFixed(2)/this.maxPoint)*100}%;
                }`;
            barFills += `
                .${datum.name}-bar-fill {
                    height: 100%;
                }`;
        });
        
        

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
                width: ${(100/this.data.length)}%;
                margin: 0% ${(10/this.data.length)+1}%;
                height: 100%;
                display: flex;
            }

            .bar-fill {
                width: 100%;
                background-color: ${primaryC};
                align-self: center;
            }

            ${barSizings}
            ${barFills}
        `;

        let fontFamily = this.attrs.font.fontFamily ? 
            this.attrs.font.fontFamily : "'Staatliches', cursive";
        let fontSize = this.attrs.font.size ? this.attrs.font.size : "1.6rem";

        let xLabels = `
            #x-labels-background {
                width: 100%;
                height: 100%;
                background-color: ${accentC};
                position: relative;
            }

            #x-labels-back-wrapper {
                width: 70%;
                height: 5%;
                top: 87%;
                left: 16%;
                position: absolute;
                display: flex;
                flex-direction: row-reverse;
            }

            #x-labels-container {
                font-family: ${fontFamily};
                background-color: transparent;
                width: 70%;
                height: 5%;
                top: 87%;
                left: 16%;
                position: absolute;
                display: flex;
                align-items: center;
                z-index: 1;
                justify-content: space-around;
            }


            .label-container {
                display: flex;
                flex-direction: row;
                overflow: hidden;
            }

            .letter-wrapper {
                font-size: ${fontSize};
                display: flex;
                flex-direction: column;
                position: relative;
            }
            
            .letter-container {
                overflow: hidden;
                position: relative;
            }
        `;
        
        let title = `
            #title-background {
                width: 100%;
                height: 100%;
                background-color: ${accentC};
                position: relative;
            }

            #title-back-wrapper {
                width: 70%;
                height: 5%;
                top: 8%;
                left: 16%;
                position: absolute;
                display: flex;
                flex-direction: row-reverse;
            }

            #title-container {
                font-family: ${fontFamily};
                background-color: transparent;
                width: 70%;
                height: 5%;
                top: 8%;
                left: 16%;
                position: absolute;
                display: flex;
                align-items: center;
                z-index: 1;
                justify-content: space-around;
            }

            #title-wrapper {
                display: flex;
                flex-grow: 2;
                flex-wrap: nowrap;
                overflow: hidden;
                padding-left: 6px;
            }

            #subtitle-wrapper {
                display: flex;
            }

            #subtitle-position-end {
                display: flex;
                flex-grow: 1;
                padding-right: 6px;
                flex-wrap: nowrap;
                overflow: hidden;
                justify-content: flex-end;
            }   

            .label-container {
                display: flex;
                flex-direction: row;
                overflow: hidden;
            }

            .letter-wrapper {
                font-size: ${fontSize};
                display: flex;
                flex-direction: column;
            }

            .letter-container {
                position: relative;
            }
        `;

        let shared = `
            .fontColorOn {
                color: ${fontC};
            }

            .space-char {
                visibility: hidden;
            }
        `;
        
        let mainStyleBlock = `
            .container {
                width: 100%;
                height: 100%;
                background-color: ${backgroundC};
                display: flex;
            }

            #graph-container {
                left: 16%;
                top: 17%;
                width: 70%;
                height: 63%;
                position: absolute;
            }

            ${title}
            ${axisStyles}
            ${gridStyles}
            ${barStyles}
            ${xLabels}
            ${shared}
        `;

        return mainStyleBlock;
    } 

    get fonts() {
        return [{
            type: "google-font",
            src: `${this.attrs.font.url ? this.attrs.font.url : "https://fonts.googleapis.com/css2?family=Staatliches&display=swap"}`
        }];
    }

    buildTree() {
        this.introDur = this.attrs.timings.intro ? 
            this.attrs.timings.intro : 0;
        this.outtroDur = this.attrs.timings.outtro ? 
            this.attrs.timings.outtro : 0;
        this.staticDur = (this.attrs.timings.static !== null) ? 
            this.attrs.timings.static : 1000;

        // !!! INTRO !!!
        if (this.attrs.timings.intro) {
            let textAnimDur = this.introDur * 0.75;
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

            const titlesAnim = new MotorCortex.Group();
            titlesAnim.addIncident(
                new Anime.Anime(
                    {
                        animatedAttrs: {
                            width: "100%"
                        },
                        
                        initialValues: {
                            width: "0%"
                        },
                    },
                    {
                        selector: "#title-background",
                        duration: this.introDur * 0.25,
                        easing: "easeInOutQuad",
                    }
                ),
                0
            );

            let titleDur = this.introDur * 0.7;
            let titleLetterDur = titleDur * 2 / (this.title.length + 1)
            let titleIncidents = [];
            for (let i in this.title) {
                titleIncidents.push({
                    incidentClass: Anime.Anime,
                    attrs: {
                        animatedAttrs: {
                            left: '0px',
                            opacity: 1
                        },
                        initialValues: {
                            left: '20px',
                            opacity: 0
                        },
                    },
                    props: {
                        selector: `#letter-${i}`,
                        duration: titleLetterDur,
                        easing: "easeOutQuart",
                    },
                    position: Math.trunc(titleLetterDur * i / 2)
                });
            }

            let titleCombo = new MotorCortex.Combo(
                {
                    incidents: titleIncidents
                },
                {
                    selector: "#title-wrapper",
                }
            );
            titlesAnim.addIncident(titleCombo, this.introDur * 0.25);

            let subtitleDur = this.introDur * 0.8;
            let subLetterDur = subtitleDur * 2 / (this.subtitle.length + 1);
            let subIncidents = [];
            for (let i in this.subtitle) {
                subIncidents.push({
                    incidentClass: Anime.Anime,
                    attrs: {
                        animatedAttrs: {
                            left: '0px',
                            opacity: 1
                        },
                        initialValues: {
                            left: '20px',
                            opacity: 0
                        },
                    },
                    props: {
                        selector: `#letter-${i}`,
                        duration: subLetterDur,
                        easing: "easeOutQuart",
                    },
                    position: Math.trunc(subLetterDur * i / 2)
                });
            }

            let subtitleCombo = new MotorCortex.Combo(
                {
                    incidents: subIncidents
                },
                {
                    selector: "#subtitle-wrapper",
                }
            );
            titlesAnim.addIncident(subtitleCombo, this.introDur * 0.1);

            introGroup.addIncident(titlesAnim, this.introDur * 0.05);

            const xLabelsAnim = new MotorCortex.Group();
            xLabelsAnim.addIncident(
                new Anime.Anime(
                    {
                        animatedAttrs: {
                            width: "70%"
                        },
                        initialValues: {
                            width: "0%"
                        },
                    },
                    {
                        selector: "#x-labels-back-wrapper",
                        duration: this.introDur * 0.25,
                        easing: "easeInOutCubic",
                    }
                ),
                0
            );

            let labelDur = textAnimDur * 2 / (this.data.length + 1);
            
            for (let i in this.data) {
                let labelLength = this.data[i].name.length;
                let letterDur = labelDur * 2 / (labelLength + 1)
                
                let incidents = [];
                for (let z in this.data[i].name) {
                    incidents.push({
                        incidentClass: Anime.Anime,
                        attrs: {
                            animatedAttrs: {
                                top: '0px',
                                opacity: 1
                            },
                            initialValues: {
                                top: '-30px',
                                opacity: 0
                            },
                        },
                        props: {
                            selector: `#letter-${i}-${z}`,
                            duration: Math.trunc(letterDur),
                            easing: "easeOutQuart",
                        },
                        position: Math.trunc(letterDur * z / 2)
                    });
                }
                
                let datumCombo = new MotorCortex.Combo(
                    {
                        incidents: incidents
                    },
                    {
                        selector: ".label-container",
                    }
                );
                xLabelsAnim.addIncident(
                    datumCombo, 
                    (textAnimDur / (this.data.length + 1)) * i
                );
            }
            introGroup.addIncident(xLabelsAnim, this.introDur * 0.05)

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
            let textAnimDur = this.outtroDur * 0.75;
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
                                easing: 'easeInQuad'
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
                                easing: 'easeOutQuad'
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
            
            const titlesOuttro = new MotorCortex.Group();
            titlesOuttro.addIncident(
                new Anime.Anime(
                    {
                        animatedAttrs: {
                            width: "0%"
                        },
                        initialValues: {
                            width: "70%"
                        },
                    },
                    {
                        selector: "#title-back-wrapper",
                        duration: this.outtroDur * 0.45,
                        easing: "easeInOutQuad",
                    }
                ),
                this.outtroDur * 0.4
            );

            let titleDur = this.outtroDur * 0.8;
            let letterDur = titleDur * 2 / (this.title.length + 1)
            let titleIncidents = [];
            for (let i in this.title) {
                titleIncidents.push({
                    incidentClass: Anime.Anime,
                    attrs: {
                        animatedAttrs: {
                            left: '20px',
                            opacity: 0
                        },
                        initialValues: {
                            left: '0px',
                            opacity: 1
                        },
                    },
                    props: {
                        selector: `#letter-${i}`,
                        duration: letterDur,
                        easing: "easeOutQuart",
                    },
                    position: Math.trunc(letterDur * (this.title.length-i-1) / 2)
                });
            }
            let titleCombo = new MotorCortex.Combo(
                {
                    incidents: titleIncidents
                },
                {
                    selector: "#title-wrapper",
                }
            );
            titlesOuttro.addIncident(titleCombo, this.outtroDur * 0.1);

            let subtitleDur = this.outtroDur * 0.4;
            let subLetterDur = subtitleDur * 2 / (this.subtitle.length + 1);
            let subIncidents = [];
            for (let i in this.subtitle) {
                
                subIncidents.push({
                    incidentClass: Anime.Anime,
                    attrs: {
                        animatedAttrs: {
                            left: '20px',
                            opacity: 0
                        },
                        initialValues: {
                            left: '0px',
                            opacity: 1
                        },
                    },
                    props: {
                        selector: `#letter-${i}`,
                        duration: subLetterDur,
                        easing: "easeOutQuart",
                    },
                    position: Math.trunc(subLetterDur * (this.subtitle.length-i-1) / 2)
                });
            }

            let subtitleCombo = new MotorCortex.Combo(
                {
                    incidents: subIncidents
                },
                {
                    selector: "#subtitle-wrapper",
                }
            );
            titlesOuttro.addIncident(subtitleCombo, this.outtroDur * 0);
            
            outtroGroup.addIncident(titlesOuttro, this.outtroDur * 0.05);

            const xLabelsOuttro = new MotorCortex.Group();
            xLabelsOuttro.addIncident(
                new Anime.Anime(
                    {
                        animatedAttrs: {
                            width: "0%"
                        },
                        initialValues: {
                            width: "100%"
                        },
                    },
                    {
                        selector: "#x-labels-background",
                        duration: this.outtroDur * 0.45,
                        easing: "easeInOutCubic"
                    }
                ),
                this.outtroDur * 0.4
            );
            
            let labelDur = textAnimDur * 2 / (this.data.length + 1);
            for (let i in this.data) {
                let labelLength = this.data[i].name.length;
                let letterDur = labelDur * 2 / (labelLength + 1)

                let incidents =[];
                for (let z in this.data[i].name) {
                    incidents.push({
                        incidentClass: Anime.Anime,
                        attrs: {
                            animatedAttrs: {
                                opacity: 0,
                                top: '-30px'
                            },
                            initialValues: {
                                opacity: 1,
                                top: '0px'
                            },
                        },
                        props: {
                            selector: `#letter-${i}-${z}`,
                            duration: Math.trunc(letterDur),
                            easing: "easeInQuart",
                        },
                        position: Math.trunc(letterDur * z / 2)
                    });
                }
                
                let datumCombo = new MotorCortex.Combo(
                    {
                        incidents: incidents
                    },
                    {
                        selector: ".label-container",
                    }
                );
                xLabelsOuttro.addIncident(
                    datumCombo, 
                    (textAnimDur / (this.data.length + 1)) * i
                );
            }
            outtroGroup.addIncident(xLabelsOuttro, this.outtroDur * 0.05);

            let barOuttroDur = this.outtroDur * 0.7;
            let barDur = barOuttroDur * 2 / (this.data.length + 1)
            let barIncidents = [];
            for (let i in this.data) {
                barIncidents.push(
                    {
                        incidentClass: Anime.Anime,
                        attrs: {
                            animatedAttrs: {
                                height: '0%'
                            },
                            initialAttrs: {
                                height: '100%'
                            },
                        },
                        props: {
                            duration: this.outtroDur * 0.3,
                            easing: "easeInOutCubic",
                            selector: `#${this.data[i].name}-bar-fill`,
                        },
                        position: Math.trunc(subLetterDur * (this.data.length-i-1) / 2)
                    }
                )
            }
            const barAnimationOuttro = new MotorCortex.Combo(
                {
                    incidents: barIncidents
                },
                {
                    selector: "#graph",
                }
            );
            outtroGroup.addIncident(barAnimationOuttro, this.outtroDur * 0);

            this.addIncident(outtroGroup, 0 + this.introDur + this.staticDur);
        }

        // !!!STATIC CONTROL!!!
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