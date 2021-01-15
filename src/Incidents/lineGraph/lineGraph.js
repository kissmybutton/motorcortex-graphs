import MotorCortex from '@kissmybutton/motorcortex';
import AnimePlugin from '@kissmybutton/motorcortex-anime';
import SVGDDef from "@kissmybutton/motorcortex-svgdraw";
const Anime = MotorCortex.loadPlugin(AnimePlugin);
const SVGD = MotorCortex.loadPlugin(SVGDDef);

import { colorPalette } from '../../Defaults/colorPalette';
import buildCSS  from './lineGraphStylesheet'; 



/**
 * LINE GRAPH: MotorCortex Implementation
 */
export default class LineGraph extends MotorCortex.HTMLClip{
    // Building HTML tree for incident
    get html(){
        this.buildVars();

        // Title modal html generation
        let title = [];
        for (let i in this.words) {
            let word = [];
            
            for (let z = 0; z < this.words[i].length; z++) {
                word += this.words[i][z];
            }

            title.push(<div id={"word-" + i} class="fontColorOn letter-wrapper-title">{word}</div>);
            if (i != (this.words.length - 1) ) {
                title.push(<div class="space-char letter-wrapper-title">-</div>);
            }

        }

        // Data stele html generation
        let dataSteles =[];
        for (let i in this.data) {
            let stele = [];
            for (let z = 0; z < this.steleBlockNum; z++) {
                let cssClasses = 
                stele.push(
                    <div class={"stele-block-" + i + " stele-block"}></div>
                );
            }

            dataSteles.push(
                <div id={"stele-" + this.data[i].name}class="data-stele">{stele}</div>
            );
        }

        // Graph Lines SVG hmtl generation
        let graphLines = [];
        graphLines.push(
            <svg class="lines-container">

            </svg>
        )

        // X-axis labels html generation with data parameter as reference
        let xLabels = [];
        for (let i in this.data) {
            let label = [];

            if (this.data[i].name.length > 4) {
                this.data[i].name = this.data[i].name.slice(0, 4);
            }
            for (let z in this.data[i].name) {
                let cssClasses = 
                label.push(
                    <div id={"letter-" + i + "-" + z} class="letter-container">
                        <div class="letter-wrapper-label fontColorOn">{this.data[i].name[z]}</div>
                    </div>
                );
            }

            xLabels.push(
                <div class="label-container" id={"label-" + i}>{label}</div>
            );
        }
       
        // MAIN HTML TREE
        let lineGraphHTML = (
            <div class="container">
                <div class="title-container">
                    <div class="title-wrapper">{title}</div>
                </div>
                <div class="graph-container">
                    {graphLines}
                </div>
                <div class="dataStele-container">{dataSteles}</div>
                <div class="x-labels-container">{xLabels}</div>
                <div class="x-labels-back-wrapper">
                    <div class="block-background"></div>
                </div>
            </div>
        );
        
        return lineGraphHTML;
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
            fontSizeTitle: this.fontSizeTitle,
            fontSizeLabel: this.fontSizeLabel,
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
            const introGroup = new MotorCortex.Group();

            // Background Intro Animation
            introGroup.addIncident(
                new Anime.Anime(
                    {
                        animatedAttrs: {
                            height: "66%"
                        },
                        initialValues: {
                            height: "0%"
                        },
                    },
                    {
                        selector: ".graph-container",
                        duration: Math.trunc(this.introDur * 0.2),
                        easing: "easeInOutQuart",
                    }
                ),
                this.introDur * 0
            );

            // Main Title Intro Animation
            const titlesAnim = new MotorCortex.Group();
            let titleDur = this.introDur * 0.13;
            let titleIncidents = [];
            for (let i in this.words) {
                titleIncidents.push({
                    incidentClass: Anime.Anime,
                    attrs: {
                        animatedAttrs: {
                            top: '0px',
                            opacity: 1
                        },
                        initialValues: {
                            top: '-50px',
                            opacity: 0
                        },
                    },
                    props: {
                        selector: `#word-${i}`,
                        duration: Math.trunc(titleDur / this.words.length),
                        easing: "easeInOutQuart",
                    },
                    position: Math.trunc(titleDur / this.words.length * i)
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
            introGroup.addIncident(titleCombo, Math.trunc(this.introDur * 0.14));

            // Label Intro Animation
            const xLabelsAnim = new MotorCortex.Group();

            // Label Background intro animation
            xLabelsAnim.addIncident(
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
                        selector: ".block-background",
                        duration: Math.trunc(this.introDur * 0.25),
                        easing: "easeInOutQuart",
                    }
                ),
                0
            );

            // Labels Intro Animation
            let textAnimDur = this.introDur * 0.2;
            let labelDur = textAnimDur * 3 / (this.data.length + 2);
            for (let i in this.data) {
                let remainingDur = labelDur / 2;
                let incidents = [];
                for (let z in this.data[i].name) {
                    incidents.push({
                        incidentClass: Anime.Anime,
                        attrs: {
                            animatedAttrs: {
                                opacity: 1
                            },
                            initialValues: {
                                opacity: 0
                            },
                        },
                        props: {
                            selector: `#letter-${i}-${z}`,
                            duration: Math.trunc(this.introDur * 0.015),
                            easing: "easeInOutQuart",
                        },
                        position: Math.trunc(labelDur-remainingDur)
                    });
                    remainingDur = remainingDur / 2;
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
                    Math.trunc((this.introDur*0.14) + (textAnimDur / (this.data.length + 1)) * (this.data.length-i-1))
                );
            }
            introGroup.addIncident(xLabelsAnim, Math.trunc(this.introDur * 0.18));

            // Data Stele intro animation
            const stelesIntro = new MotorCortex.Group();

            let stelesFullDur = this.introDur * 0.3;
            let steleOverlapIndex = 5;
            let blockOverlapIndex = 3;
            let steleDur = (stelesFullDur * steleOverlapIndex) / (this.data.length + 1);
            let steleDelay = steleDur / steleOverlapIndex;
            let blockDur = (steleDur * blockOverlapIndex) / (this.steleBlockNum + 1);
            for (let i in this.data) {
                let steleGroup = new MotorCortex.Group({
                    selector: `#stele-${this.data[i].name}`
                });
                let blockCombo = new MotorCortex.Combo(
                    {
                        incidents: [
                            {
                                incidentClass: Anime.Anime,
                                attrs: {
                                    animatedAttrs: {
                                        opacity: 1
                                    },
                                    initialValues: {
                                        opacity: 0
                                    },
                                },
                                props: {
                                    duration: Math.trunc(blockDur),
                                },
                                position: 0
                            }
                        ],
                    },
                    {
                        selector: `.stele-block-${i}`,
                        delay: `@stagger(0, ${Math.trunc(steleDur - blockDur)}, 0, easeOutCubic)`,
                    }
                );

                steleGroup.addIncident(blockCombo, 0);
                stelesIntro.addIncident(steleGroup,  Math.trunc(i * steleDelay));
            }
            introGroup.addIncident(stelesIntro, Math.trunc(this.introDur * 0.45));

            this.addIncident(introGroup, 0);
        }

       
        // OUTRO CONTROL
        if (this.attrs.timings.outro) {
            const outroGroup = new MotorCortex.Group();

            // Background Outro Animation
            outroGroup.addIncident(
                new Anime.Anime(
                    {
                        animatedAttrs: {
                            height: "0%"
                        },
                        initialValues: {
                            height: "66%"
                        },
                    },
                    {
                        selector: ".graph-container",
                        duration: Math.trunc(this.outroDur * 0.2),
                        easing: "easeInOutQuart",
                    }
                ),
                Math.trunc(this.outroDur * 0.8)
            );

            // Main Title Intro Animation
            const titlesAnim = new MotorCortex.Group();
            let titleDur = this.outroDur * 0.13;
            let titleIncidents = [];
            for (let i in this.words) {
                titleIncidents.push({
                    incidentClass: Anime.Anime,
                    attrs: {
                        animatedAttrs: {
                            top: '-50px',
                            opacity: 0
                        },
                        initialValues: {
                            top: '0px',
                            opacity: 1
                        },
                    },
                    props: {
                        selector: `#word-${i}`,
                        duration: Math.trunc(titleDur / this.words.length),
                        easing: "easeInOutQuart",
                    },
                    position: Math.trunc(titleDur / this.words.length * (this.words.length-1-i))
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
            outroGroup.addIncident(titleCombo, Math.trunc(this.outroDur * 0.76));


            // Label Outro Animation
            const xLabelsAnim = new MotorCortex.Group();
            const labelsDur = this.outroDur * 0.55;

            // Label Background outro animation
            xLabelsAnim.addIncident(
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
                        selector: ".block-background",
                        duration: Math.trunc(labelsDur * 0.55),
                        easing: "easeInOutQuart",
                    }
                ),
                labelsDur * 0
            );

            // Labels Intro Animation
            let textAnimDur = this.outroDur * 0.2;
            let labelDur = textAnimDur * 3 / (this.data.length + 2);
            for (let i in this.data) {
                let remainingDur = labelDur / 2;
                let incidents = [];
                for (let z in this.data[i].name) {
                    incidents.push({
                        incidentClass: Anime.Anime,
                        attrs: {
                            animatedAttrs: {
                                opacity: 0
                            },
                            initialValues: {
                                opacity: 1
                            },
                        },
                        props: {
                            selector: `#letter-${i}-${z}`,
                            duration: Math.trunc(this.outroDur * 0.015),
                            easing: "easeInOutQuart",
                        },
                        position: Math.trunc(labelDur - (labelDur-remainingDur))
                    });
                    remainingDur = remainingDur / 2;
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
                    Math.trunc(textAnimDur * i / (this.data.length + 1))
                );
            }
            outroGroup.addIncident(xLabelsAnim, this.outroDur - labelsDur);

            // Data Stele outro animation
            const stelesOutro = new MotorCortex.Group();

            let stelesFullDur = this.outroDur * 0.3;
            let steleOverlapIndex = 5;
            let blockOverlapIndex = 3;
            let steleDur = (stelesFullDur * steleOverlapIndex) / (this.data.length + 1);
            let steleDelay = steleDur / steleOverlapIndex;
            let blockDur = (steleDur * blockOverlapIndex) / (this.steleBlockNum + 1);
            for (let i in this.data) {
                let steleGroup = new MotorCortex.Group({
                    selector: `#stele-${this.data[i].name}`
                });
                let blockCombo = new MotorCortex.Combo(
                    {
                        incidents: [
                            {
                                incidentClass: Anime.Anime,
                                attrs: {
                                    animatedAttrs: {
                                        opacity: 0
                                    },
                                    initialValues: {
                                        opacity: 1
                                    },
                                },
                                props: {
                                    duration: Math.trunc(blockDur),
                                },
                                position: 0
                            }
                        ],
                    },
                    {
                        selector: `.stele-block-${i}`,
                        delay: `@stagger(0, ${Math.trunc(steleDur - blockDur)}, 0, easeOutCubic, omni, true)`,
                    }
                );

                steleGroup.addIncident(blockCombo, 0);
                stelesOutro.addIncident(steleGroup,  (this.data.length - 1 - i) * steleDelay);
            }
            outroGroup.addIncident(stelesOutro, this.outroDur * 0.25);

            this.addIncident(outroGroup, 0 + this.introDur  + this.staticDur);
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
            this.introDur + this.staticDur + this.outroDur - 1
        );
    }

    buildVars() {
        this.data = this.attrs.data.data;
        this.title = this.attrs.data.title;
        this.words = this.title.split(" ");
        this.maxPoint = 0;
        this.steleBlockNum = 26;

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
        this.fontSizeLabel = this.attrs.font.size ? 
            this.attrs.font.size : "1.7rem";
        
        this.fontSizeTitle = "200%"
        this.url = this.attrs.font.url ? 
            this.attrs.font.url : "https://fonts.googleapis.com/css2?family=Staatliches&display=swap";

        this.attrs.timings = this.attrs.timings ? 
            this.attrs.timings : {};
        this.introDur = this.attrs.timings.intro ? 
            this.attrs.timings.intro : 0;
        this.outroDur = this.attrs.timings.outro ? 
            this.attrs.timings.outro : 0;
        if (this.attrs.timings.static === 0) {
            this.staticDur = 0;
        } else {
            this.staticDur = this.attrs.timings.static ?
                this.attrs.timings.static : 1000;
        }
    }
}