import MotorCortex from '@kissmybutton/motorcortex';
import AnimePlugin from '@kissmybutton/motorcortex-anime';
const Anime = MotorCortex.loadPlugin(AnimePlugin);

/**
 * The purpose of extending the HTMLClip is to full, parametric 
 * HTMLClips with both context and Incidents.
 * 
 * HTMLClip allows you to set your html, css, fonts and audioSources
 * upfront by the corresponding getter methods. You can use the this.attrs
 * reference on these methods so you can generate dynamic content.
 * Overwrite ONLY the ones you are interested in, ignore the rest.
 * The buildTree method allows developers to define Incidents (of any plugin)
 * dynamically and position them on the Clip.
 */
export default class BarChartSimple extends MotorCortex.HTMLClip{
    get html(){
        this.data = this.attrs.data.data;
        let bars = ``;
        this.dataPointsNum = 0;
        this.maxPoint = 0;

        for (let datum in this.data) {
            bars += `
                <div class="bar-container" id="${datum}bar">
                    <div class="bar-fill"></div>
                </div>
            `;
            this.dataPointsNum++;

            this.maxPoint = (this.maxPoint < this.data[datum]) ? 
                this.data[datum] : this.maxPoint;
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
        const axisColor = this.attrs.axisColor ? 
            this.attrs.axisColor : "black";
        const backColor = this.attrs.backgroundColor ? 
            this.attrs.backgroundColor : "grey";

        let axisStyles = `
            #y-axis {
                width: 4px;
                height: 70%;
                left: 14%;
                top: 15%;
                background-color: ${axisColor};
                position: absolute;
            }
            
            #x-axis {
                width: 74%;
                height: 4px;
                top: 85%;
                left: 14%;
                background-color: ${axisColor};
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
                background-color: #999999;
                align-self: flex-end;
            }

            #gridLine${this.gridLinesNum - 1} {
                visibility: hidden;
            }
        `;

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
                background-color: ${this.attrs.barColor};
                align-self: flex-end;
            }

            ${this.processData()}
        `;
        
        let styleBlock = `
            .container {
                width: 100%;
                height: 100%;
                background-color: ${backColor};
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

    processData() {
        let barSizings = ``;

        for (let datum in this.data) {
            barSizings += `
                #${datum}bar {
                    height: ${(this.data[datum]/this.maxPoint)*100}%;
                }
            `;
        }

        return barSizings;
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
                            duration: 400,
                            easing: 'easeInQuad'
                        },
                        position: 0
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
                            duration: 400,
                            easing: 'easeOutQuad'
                        },
                        position: 400
                    },
                ]
            },
            {
                selector: ".container",
            }
        );
        introGroup.addIncident(axisCombo, 0);

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
                duration: 800,
                easing: "easeOutQuad"
            }
        );
        introGroup.addIncident(gridLinesAnim, 300);
        
        // let barIncidents = [];
        // for (let datum in this.data) {
        //     barIncidents.push(
        //         {
        //             incidentClass: Anime.Anime,
        //             attrs: {
        //                 animatedAttrs: {
        //                     height: '100%'
        //                 },
        //                 initialValues: {
        //                     height: '0%'
        //                 },
        //             },
        //             props: {
        //                 selector: `#${datum}bar.bar-fill`,
        //                 duration: 10000,
        //                 easing: 'easeOutQuad'
        //             },
        //             position: 0
        //         }
        //     )
        // }
        // const barCombo = new MotorCortex.Combo(
        //     {
        //         incidents: barIncidents
        //     },
        //     {
        //         selector: "#graph",
        //     }
        // );
        // introGroup.addIncident(barCombo, 400);
        

        const barAnimation = new Anime.Anime(
            {
                animatedAttrs: {
                    height: '100%'
                },
                initialValues: {
                    height: '0%'
                },
            },
            {
                selector: ".bar-fill",
                duration: 800,
                easing: "easeOutQuad"
            }
        );
        introGroup.addIncident(barAnimation, 300);

        this.addIncident(introGroup, 0);
        console.log(introGroup)

    }

}