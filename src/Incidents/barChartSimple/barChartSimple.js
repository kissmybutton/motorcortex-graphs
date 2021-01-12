import MotorCortex from '@kissmybutton/motorcortex';
import AnimePlugin from '@kissmybutton/motorcortex-anime';
const Anime = MotorCortex.loadPlugin(AnimePlugin);
import { colorPalette } from '../../Defaults/colorPalette';
import buildCSS  from './barChartStylesheet'; 



/**
 * BAR CHART SIMPLE GRAPH: MotorCortex Implementation
 */
export default class BarChartSimple extends MotorCortex.HTMLClip{
    // Building HTML tree for incident
    get html(){
        this.buildVars();
        
        // Title modal html generation
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

        // Subtitle modal html generation
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

        // Gridlines conditional html generation
        let gridLines = [];
        for (let i = 0; i < this.gridLinesNum; i++) {
            gridLines.push(
                <div class="gridLine" id={"gridLine" + i}></div>
            );
        };

        //  Bars html generation with data parameter as reference
        let bars = this.data.map( (datum) => {
            this.maxPoint = (this.maxPoint < datum.value) ? 
                datum.value : this.maxPoint;

            return (
                <div class="bar-container" id={datum.name + "bar"}>
                    <div class="bar-fill" id={datum.name + "-bar-fill"}></div>
                </div>
            );
        });
        this.maxPoint = this.attrs.data.maxValue ? this.attrs.data.maxValue : this.maxPoint;

        // X-axis labels html generation with data parameter as reference
        let xLabels = [];
        for (let i in this.data) {
            let label = [];
            for (let z in this.data[i].name) {
                let cssClasses = 
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

        // MAIN HTML TREE
        let barGraphHTML = (
            <div class="container">
                <div class="title-container">
                    <div class="title-wrapper">{title}</div>
                    <div class="subtitle-position-end">
                        <div class="subtitle-wrapper">{subtitle}</div>
                    </div>
                </div>
                <div class="title-back-wrapper">
                    <div class="title-background"></div>
                </div>
                <div class="graph-container">
                    <div class="graph">{bars}</div>
                    <div class="gridlines">{gridLines}</div>
                </div>
                <div class="y-axis"></div>
                <div class="x-axis"></div>
                <div class="x-labels-container">{xLabels}</div>
                <div class="x-labels-back-wrapper">
                    <div class="x-labels-background"></div>
                </div>
            </div>
        );
        
        return barGraphHTML;
    }

    // Build CSS rules for incident
    get css() {
        return buildCSS({
            data: this.data,
            maxPoint: this.maxPoint,
            primaryC: this.primaryC,
            secondaryC: this.secondaryC,
            tertiaryC: this.tertiaryC,
            accentC: this.accentC,
            backgroundC: this.backgroundC,
            fontC: this.fontC,
            fontFamily: this.fontFamily,
            fontSize: this.fontSize
        });
    } 

    // Font API call (only google fonts API supported)
    get fonts() {
        return [{
            type: "google-font",
            src: `${this.url}`
        }];
    }

    // MotorCortex Animation generation and
    buildTree() {
        this.opacityControl();
        
        // INTRO CONTROL
        if (this.attrs.timings.intro) {
            let textAnimDur = this.introDur * 0.75;
            const introGroup = new MotorCortex.Group();

            // Axis Intro Control
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
                                selector: '.y-axis',
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
                                selector: '.x-axis',
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
    
            // GridLines Intro Control
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

            // Title Bar Intro Control
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
                        selector: ".title-background",
                        duration: this.introDur * 0.25,
                        easing: "easeInOutQuad",
                    }
                ),
                0
            );

            // Main Title Intro: letter animation control
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
                    selector: ".title-wrapper",
                }
            );
            titlesAnim.addIncident(titleCombo, this.introDur * 0.25);

            // Subtitle Intro: letter animation control
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
                    selector: ".subtitle-wrapper",
                }
            );
            titlesAnim.addIncident(subtitleCombo, this.introDur * 0.1);
            introGroup.addIncident(titlesAnim, this.introDur * 0.05);

            // Labels (xAxis) Intro Control
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
                        selector: ".x-labels-back-wrapper",
                        duration: this.introDur * 0.25,
                        easing: "easeInOutCubic",
                    }
                ),
                0
            );

            // Labels (xAxis) Intro: letter animation control
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

            // Bar Intro Control
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

        // OUTRO CONTROL
        if (this.attrs.timings.outtro) {
            let textAnimDur = this.outtroDur * 0.75;
            const outtroGroup = new MotorCortex.Group();

            // Axis Outro Control
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
                                selector: '.x-axis',
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
                                selector: '.y-axis',
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

            // GridLines Outro Control
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
                    selector: ".gridlines",
                    easing: 'easeInOutQuad',
                    duration: this.outtroDur * 0.5,
                }
            );
            outtroGroup.addIncident(gridLinesOuttro, this.outtroDur * 0.2);
            
            // Title Bar Outro Control
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
                        selector: ".title-back-wrapper",
                        duration: this.outtroDur * 0.45,
                        easing: "easeInOutQuad",
                    }
                ),
                this.outtroDur * 0.4
            );
            
            // Main Title Outro: letter animation control
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
                    selector: ".title-wrapper",
                }
            );
            titlesOuttro.addIncident(titleCombo, this.outtroDur * 0.1);

            // Subtitle Outro: letter animation control
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
                    selector: ".subtitle-wrapper",
                }
            );
            titlesOuttro.addIncident(subtitleCombo, this.outtroDur * 0);            
            outtroGroup.addIncident(titlesOuttro, this.outtroDur * 0.05);

            // Labels (xAxis) Outro Control
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
                        selector: ".x-labels-background",
                        duration: this.outtroDur * 0.45,
                        easing: "easeInOutCubic"
                    }
                ),
                this.outtroDur * 0.4
            );
            
            // Labels (xAxis) Outro: letter animation control
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

            // Bar Outtro Control
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
                            initialValues: {
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
                    selector: ".graph",
                }
            );
            outtroGroup.addIncident(barAnimationOuttro, this.outtroDur * 0);

            this.addIncident(outtroGroup, 0 + this.introDur + this.staticDur);
        }

        // STATIC DURATION CONTROL
        const staticIncident = new Anime.Anime(
            { animatedAttrs: {} },
            {
                selector: ".container",
                duration: this.staticDur,
            }
        );
        this.addIncident(staticIncident, this.introDur);
    }

    // Static control
    // Making the contents of this animation invisible before timestamp:0 
    // and after timestamp: {totalDuration}
    opacityControl() {
        this.addIncident(
            new Anime.Anime(
                {
                    animatedAttrs: {
                        opacity: 1,
                    },
                    initialValues: {
                        opacity: 0,
                    }
                }, {
                    selector: `.container`,
                    duration: 1,
                }
            ),
            0    
        );
        this.addIncident(
            new Anime.Anime(
                {
                    animatedAttrs: {
                        opacity: 0,
                    },
                }, {
                    selector: `.container`,
                    duration: 1,
                }
            ),
            this.introDur + this.staticDur + this.outtroDur 
        );
    }

    buildVars() {
        this.data = this.attrs.data.data;
        this.title = this.attrs.data.title;
        this.subtitle = this.attrs.data.subtitle;
        this.maxPoint = 0;
        this.gridLinesNum = this.attrs.data.showGrid ? 11 : 0;

        this.attrs.palette = this.attrs.palette ? 
            this.attrs.palette : {};
        this.primaryC = this.attrs.palette.primary ? 
            this.attrs.palette.primary : colorPalette.gray;
        this.secondaryC = this.attrs.palette.secondary ? 
            this.attrs.palette.secondary : colorPalette.lightGray;
        this.tertiaryC = this.attrs.palette.tertiary ? 
            this.attrs.palette.tertiary : colorPalette.darkGray;
        this.fontC = this.attrs.palette.font ? 
            this.attrs.palette.font : colorPalette.font;
        this.accentC = this.attrs.palette.accent ? 
            this.attrs.palette.accent : colorPalette.accent;
        this.backgroundC = this.attrs.palette.background ? 
            this.attrs.palette.background : colorPalette.background;

        this.attrs.font = this.attrs.font ? 
            this.attrs.font : {};
    
        this.fontFamily = this.attrs.font.fontFamily ? 
            this.attrs.font.fontFamily : "'Staatliches', cursive";
        this.fontSize = this.attrs.font.size ? 
            this.attrs.font.size : "1.7rem";
        this.url = this.attrs.font.url ? 
            this.attrs.font.url : "https://fonts.googleapis.com/css2?family=Staatliches&display=swap";

        this.attrs.timings = this.attrs.timings ? 
            this.attrs.timings : {};
        this.introDur = this.attrs.timings.intro ? 
            this.attrs.timings.intro : 0;
        this.outtroDur = this.attrs.timings.outtro ? 
            this.attrs.timings.outtro : 0;
        if (this.attrs.timings.static === 0) {
            this.staticDur = 0;
        } else {
            this.staticDur = this.attrs.timings.static ?
                this.attrs.timings.static : 1000;
        }
    }
}