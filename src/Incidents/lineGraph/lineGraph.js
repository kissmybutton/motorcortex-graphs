import { colorPalette } from '../../Defaults/colorPalette';
import buildCSS  from './lineGraphStylesheet'; 
import config from '../../incident_config'
import MotorCortex from '@kissmybutton/motorcortex';
import AnimePlugin from '@kissmybutton/motorcortex-anime';
import SVGDDef from "@kissmybutton/motorcortex-svgdraw";
import TDCAMDef from "@kissmybutton/motorcortex-2dcam";
const Anime = MotorCortex.loadPlugin(AnimePlugin);
const SVGD = MotorCortex.loadPlugin(SVGDDef);
const TDCAM = MotorCortex.loadPlugin(TDCAMDef);

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
                <div id={"stele-" + i}class="data-stele">{stele}</div>
            );
        }

        // Graph Lines SVG hmtl generation
        let lineGroups = [];
        for (let l = 0; l < this.dataSetsNum; l++) {
            let linePaths = [];
            for (let i = 0; i < this.data.length; i++) {
                let lineSegment = [];
                let xPoint1 = this.findPointX(i);     
                let yPoint1 = this.findPointY(i, l);     

                if (i !== this.data.length-1) {
                    let xPoint2 = this.findPointX(i + 1);     
                    let yPoint2 = this.findPointY(i + 1, l); 
                    
                    // Dataline Generation
                    lineSegment.push(
                        <path 
                            id={`line-${l}-${i}`}
                            class={`line-${l}`}
                            d={
                                `M ${xPoint1} ${yPoint1}` + 
                                `L ${xPoint2} ${yPoint2}`
                            } 
                            stroke={this.tertiaryC} 
                            stroke-width={`0.65%`}
                            stroke-linecap="round"
                            fill="none"
                        />
                    );
                } 

                // Datapoint Generation
                lineSegment.push(
                    <circle
                        id={`point-${l}-${i}`}
                        class={`point-${l} datapoint`}
                        cx={`${xPoint1}`} cy={`${yPoint1}`} 
                        r={`${this.r}%`}
                        fill={this.accentC} 
                        stroke={this.accentC} 
                    />
                );
                linePaths.push(<g>{lineSegment}</g>);
            }
            lineGroups.push(<g>{linePaths}</g>);
        }

        let lines = [];
        lines.push(
            <svg 
                class="lines-container"
                viewbox={`0 0 ${this.linesWidth} ${this.linesHeight}`}> 
                {lineGroups}
            </svg>
        );

        // Graph labels html generation with data parameters as reference
        let labelGroups = [];
        for (let l = 0; l < this.dataSetsNum; l++) {
            let graphLabels = [];
            for (let i = 0; i < this.data.length; i++) {
                graphLabels.push (
                    <div>
                        <div class={`hoverPoint-${l}-${this.data[i].name} hoverPoint`}></div>
                        <div 
                            class={`label-${l}-${this.data[i].name} inner-label-container`}
                            id={`label-${l}-${this.data[i].name}`}>
                            <div class="inner-label">
                                {`${parseFloat(this.data[i].values[l].toFixed(2))} ${this.unit}`}
                            </div>
                        </div>
                    </div>
                );
            }
            labelGroups.push(
                <div class={`line-${l}-label-container`}>
                    {graphLabels}
                </div>
            );
        }

        // X-axis labels html generation with data parameter as reference
        let xLabels = [];
        for (let i in this.data) {
            let labelX = [];

            if (this.data[i].name.length > 4) {
                this.data[i].name = this.data[i].name.slice(0, 4);
            }
            for (let z in this.data[i].name) {
                labelX.push(
                    <div id={"letter-" + i + "-" + z} class="letter-container">
                        <div class="letter-wrapper-label fontColorOn">{this.data[i].name[z]}</div>
                    </div>
                );
            }
            xLabels.push(
                <div class="label-container" id={"label-" + i}>{labelX}</div>
            );
        }
       
        // MAIN HTML TREE
        let lineGraphHTML = (
            <div class="container">
                <div class="viewport">
                    <div class="title-container-lineGraph">
                        <div class="title-wrapper-lineGraph">{title}</div>
                    </div>
                    <div class="graph-background"></div>
                    <div class="dataStele-container">{dataSteles}</div>
                    <div class="svg-container">{lines}</div>
                    <div class="graph-labels-container">{labelGroups}</div>
                    <div class="x-labels-container-lineGraph">{xLabels}</div>
                    <div class="x-labels-back-wrapper-lineGraph">
                        <div class="block-background"></div>
                    </div>
                </div>
                
            </div>
        );
        
        return lineGraphHTML;
    }

    // Build CSS rules for incident
    get css() {
        return buildCSS(this);
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
                            height: "70%"
                        },
                        initialValues: {
                            height: "0%"
                        },
                    },
                    {
                        selector: ".graph-background",
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
                    selector: ".title-wrapper-lineGraph",
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
                    selector: `#stele-${i}`
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
                        delay: `@stagger(0, ${Math.trunc(steleDur - blockDur)}, 0, easeOutQuad)`,
                    }
                );

                steleGroup.addIncident(blockCombo, 0);
                stelesIntro.addIncident(steleGroup,  Math.trunc(i * steleDelay));
            }
            introGroup.addIncident(stelesIntro, Math.trunc(this.introDur * 0.45));

            // Graph SVG & Labels Intro Animation
            let segmentDur = (this.introDur / this.data.length);
            let pointDur = segmentDur * 0.35;
            let pathDur = segmentDur * 0.8;

            let pathAnimGroup = new MotorCortex.Group();
            let pointAnimGroup = new MotorCortex.Group();
            for (let l = 0; l < this.dataSetsNum; l++) {
                let gLabelGroup = new MotorCortex.Group();
                for (let i = 0; i < this.data.length; i++) {
                    // Path Intro Animation
                    if (i !== this.data.length-1) {
                        let pathAnimation = new SVGD.Draw(
                            {
                                animatedAttrs: {
                                    cover: 1
                                }, 
                                initialValues: {
                                    cover: 0
                                },
                            }, {
                                selector: `#line-${l}-${i}`,
                                duration: Math.trunc(pathDur),
                                easing: "easeInOutQuad",
                            }
                        );
                        pathAnimGroup.addIncident(pathAnimation, Math.trunc((segmentDur * i) + (segmentDur * 0.2)));
                    }
    
                    // Points Intro Animation
                    let pointAnimation = new Anime.Anime(
                        {
                            animatedAttrs: {
                                opacity: 1,
                                r: this.r,
                            }, 
                            initialValues: {
                                opacity: 0,
                                r: 0,
                            },
                        }, {
                            selector: `#point-${l}-${i}`,
                            duration: Math.trunc(pointDur),
                            easing: "easeInQuart",
                        }
                    );
                    pointAnimGroup.addIncident(
                        pointAnimation,
                        Math.trunc(segmentDur * i)
                    );
                
                    // Graph Label Intro Animation
                    let targetTop = this.findPointY(i, l) - (this.linesHeight * 0.083);
                    let topOffset = targetTop + this.linesHeight * 0.07 / 2;
                
                    let targetWidth = ((10 / 2 * this.data.length) > 10) ?
                        10 : (10 / 2 * this.data.length);
                        targetWidth = (targetWidth < 6) ? 6 : targetWidth;
                    
                    let targetLeft = this.findPointX(i) 
                        - ((targetWidth * this.linesWidth / 100) * 0.5);
                    let leftOffset = targetLeft + this.linesWidth * (targetWidth/100) / 2;
                          
                    let gLabelAnimation = new Anime.Anime(
                        {
                            animatedAttrs: {
                                opacity: 0.6,
                                width: `${targetWidth}%`,
                                "min-width": `${targetWidth}%`,
                                height: `7%`,
                                top: `${targetTop}px`,
                                left: `${targetLeft}px`,
                                "font-size": this.fontSizeInner,
                            }, 
                            initialValues: {
                                opacity: 0,
                                width: "0%",
                                "min-width": `0%`,
                                height: `0%`,
                                top: `${topOffset}px`,
                                left: `${leftOffset}px`,
                                "font-size": 0,
                            },
                        }, {
                            selector: `.label-${l}-${this.data[i].name}`,
                            duration: Math.trunc(pointDur),
                            easeing: "easeInOutCubic",
                        }
                    );
                    gLabelGroup.addIncident(
                        gLabelAnimation, 
                        Math.trunc((segmentDur * i) + (pointDur * 0.2))
                    );

                    if (this.trace) {
                        let entry = 0;
                        let duration = 0;
                        let xTarget = this.findPointX(i) + 
                            ((1-this.graphScale.width) / 2) * 
                            config.lineGraph.originalDims.width;     
                        let yTarget = this.findPointY(i, l) + 
                            ((1-this.graphScale.height) / 2) * 
                            config.lineGraph.originalDims.height;    
                        let zoomTarget = 1.4;
                        
                        let xInit, yInit, zoomInit;
                        if (i === 0) {
                            xInit = config.lineGraph.originalDims.width * 0.5;
                            yInit = config.lineGraph.originalDims.height * 0.5; 
                            zoomInit = 1.4;
                            duration = pointDur - (segmentDur * 0.15);
                            entry = 0;
                        } else if ( i === this.data.length - 1) {
                            xInit = this.findPointX(i-1) + 
                                ((1-this.graphScale.width) / 2) * 
                                config.lineGraph.originalDims.width;
                            yInit = this.findPointY(i-1, l) + 
                                ((1-this.graphScale.height) / 2) * 
                                config.lineGraph.originalDims.height;
                            zoomInit = 1.4;
                            xTarget = config.lineGraph.originalDims.width * 0.5;
                            yTarget = config.lineGraph.originalDims.height * 0.5; 
                            zoomTarget = 1;
                            entry = (segmentDur * (i-1)) + (pointDur);
                            duration = segmentDur + pointDur - (segmentDur * 0.15);
                        } else {
                            xInit = this.findPointX(i-1) + 
                                ((1-this.graphScale.width) / 2) * 
                                config.lineGraph.originalDims.width;
                            yInit = this.findPointY(i-1, l) + 
                                ((1-this.graphScale.height) / 2) * 
                                config.lineGraph.originalDims.height; 
                            zoomInit = 1.4;
                            duration = segmentDur;
                            entry = segmentDur * (i - 1) + pointDur ;
                        }
    
                        let zoomIncident = new TDCAM.ZoomTo({
                            animatedAttrs: {
                                position: {
                                    x: xTarget, 
                                    y: yTarget, 
                                    zoom: zoomTarget,
                                },
                            },
                            initialValues: {
                                position: {
                                    x: xInit, 
                                    y: yInit, 
                                    zoom: zoomInit, 
                                },
                            },
                        }, {
                            selector: '.viewport',
                            duration: Math.trunc(duration),
                            easing: 'easeInOutQuad',
                        });
                        introGroup.addIncident(zoomIncident, Math.trunc(entry));
                    }
                }
                introGroup.addIncident(gLabelGroup, 0);
            }
            introGroup.addIncident(pathAnimGroup, Math.trunc(pointDur));
            introGroup.addIncident(pointAnimGroup, 0);

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
                            height: "70%"
                        },
                    },
                    {
                        selector: ".graph-background",
                        duration: Math.trunc(this.outroDur * 0.2),
                        easing: "easeInOutQuart",
                    }
                ),
                Math.trunc(this.outroDur * 0.8)
            );

            // Main Title Outro Animation
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
                    selector: ".title-wrapper-lineGraph",
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

            // Labels Outro Animation
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

            // Data Stele Outro Animation
            const stelesOutro = new MotorCortex.Group();

            let stelesFullDur = this.outroDur * 0.3;
            let steleOverlapIndex = 5;
            let blockOverlapIndex = 3;
            let steleDur = (stelesFullDur * steleOverlapIndex) / (this.data.length + 1);
            let steleDelay = steleDur / steleOverlapIndex;
            let blockDur = (steleDur * blockOverlapIndex) / (this.steleBlockNum + 1);
            for (let i in this.data) {
                let steleGroup = new MotorCortex.Group({
                    selector: `#stele-${i}`
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
                        delay: `@stagger(0, ${Math.trunc(steleDur - blockDur)}, 0, easeOutQuad, omni, true)`,
                    }
                );

                steleGroup.addIncident(blockCombo, 0);
                stelesOutro.addIncident(steleGroup,  (this.data.length - 1 - i) * steleDelay);
            }
            outroGroup.addIncident(stelesOutro, this.outroDur * 0.25);

            // Graph SVG & Labels Outro Animation
            let segmentDur = (this.outroDur / (this.data.length + 1));
            let pointDur = segmentDur * 0.25;
            let pathDur = segmentDur * 0.8;
            let zoomOffset = this.trace ? 1 : 0;

            let pathAnimGroup = new MotorCortex.Group();
            let pointAnimGroup = new MotorCortex.Group();
            for (let l = 0; l < this.dataSetsNum; l++) {
                let gLabelGroup = new MotorCortex.Group();
                for (let i = 0; i < this.data.length; i++) {
                    // Path outro Animation
                    if (i !== this.data.length-1) {
                        let pathAnimation = new SVGD.Draw(
                            {
                                animatedAttrs: {
                                    cover: 0
                                }, 
                                initialValues: {
                                    cover: 1
                                },
                            }, {
                                selector: `#line-${l}-${i}`,
                                duration: Math.trunc(pathDur),
                                easing: "easeInOutQuad",
                            }
                        );
                        pathAnimGroup.addIncident(
                            pathAnimation, 
                            Math.trunc((segmentDur * (this.data.length  + zoomOffset - i - 2)) + (segmentDur * 0.2))
                        );
                    }
    
                    // Points outro Animation
                    let pointAnimation = new Anime.Anime(
                        {
                            animatedAttrs: {
                                opacity: 0,
                                r: 0,
                            },
                            initialValues: {
                                opacity: 1,
                                r: this.r,
                            },
                        }, {
                            selector: `#point-${l}-${i}`,
                            duration: Math.trunc(pointDur),
                            easeing: "easeOutCubic",
                        }
                    );
                    pointAnimGroup.addIncident(
                        pointAnimation, 
                        Math.trunc(segmentDur * (this.data.length  + zoomOffset - i - 1))
                    );

                    // Graph Label Outro Animation
                    let targetTop = this.findPointY(i, l) - (this.linesHeight * 0.083);
                    let topOffset = targetTop + this.linesHeight * 0.07 / 2;
                
                    let targetWidth = ((10 / 2 * this.data.length) > 10) ?
                        10 : (10 / 2 * this.data.length);
                        targetWidth = (targetWidth < 6) ? 6 : targetWidth;
                    
                    let targetLeft = this.findPointX(i) 
                        - ((targetWidth * this.linesWidth / 100) * 0.5);
                    let leftOffset = targetLeft + this.linesWidth * (targetWidth/100) / 2;
                    
                    let gLabelAnimation = new Anime.Anime(
                        {
                            animatedAttrs: {
                                opacity: 0,
                                width: "0%",
                                "min-width": `0%`,
                                height: `0%`,
                                top: `${topOffset}px`,
                                left: `${leftOffset}px`,
                                "font-size": 0,
                            },
                            initialValues: {
                                opacity: 0.6,
                                width: `${targetWidth}%`,
                                "min-width": `${targetWidth}%`,
                                height: `7%`,
                                top: `${targetTop}px`,
                                left: `${targetLeft}px`,
                                "font-size": this.fontSizeInner,
                            }, 
                        }, {
                            selector: `.label-${l}-${this.data[i].name}`,
                            duration: Math.trunc(pointDur),
                            easeing: "easeInOutCubic",
                        }
                    );
                    gLabelGroup.addIncident(
                        gLabelAnimation, 
                        Math.trunc((segmentDur * (this.data.length  + zoomOffset - i - 1)) + (pointDur * 0.2))
                    );

                    if (this.trace) {
                        let entry = 0
                        let duration = 0;
                        let xTarget = this.findPointX(i) + 
                            ((1-this.graphScale.width) / 2) * 
                            config.lineGraph.originalDims.width;     
                        let yTarget = this.findPointY(i, l) + 
                            ((1-this.graphScale.height) / 2) * 
                            config.lineGraph.originalDims.height;    
                        let zoomTarget = 1.4;
                        
                        let xInit, yInit, zoomInit;
                        if (i === 0) {
                            xInit = this.findPointX(i+1) + 
                                ((1-this.graphScale.width) / 2) * 
                                config.lineGraph.originalDims.width;
                            yInit = this.findPointY(i+1, l) + 
                                ((1-this.graphScale.height) / 2) * 
                                config.lineGraph.originalDims.height;
                            xTarget = config.lineGraph.originalDims.width * 0.5;
                            yTarget = config.lineGraph.originalDims.height * 0.5;    
                            zoomInit = 1.4;
                            zoomTarget = 1;
                            duration = segmentDur + pointDur - (segmentDur * 0.15);
                            entry = (segmentDur * (this.data.length - 1)) + (pointDur);
                        } else if ( i === this.data.length - 1) {
                            xInit = config.lineGraph.originalDims.width * 0.5;
                            yInit = config.lineGraph.originalDims.height * 0.5; 
                            
                            zoomInit = 1;
                            xTarget = this.findPointX(i) + 
                                ((1-this.graphScale.width) / 2) * 
                                config.lineGraph.originalDims.width;
                            yTarget = this.findPointY(i, l) + 
                                ((1-this.graphScale.height) / 2) * 
                                config.lineGraph.originalDims.height;
                            zoomTarget = 1.4;
                            entry = 0;
                            duration = pointDur - (segmentDur * 0.15) + segmentDur;
                        } else {
                            xInit = this.findPointX(i+1) + 
                                ((1-this.graphScale.width) / 2) * 
                                config.lineGraph.originalDims.width;     
                            yInit = this.findPointY((i + 1), l) + 
                                ((1-this.graphScale.height) / 2) * 
                                config.lineGraph.originalDims.height; 
                            zoomInit = 1.4;
                            duration = segmentDur;
                            entry = segmentDur * (this.data.length - i - 1) + pointDur;
                        }
    
                        let zoomIncident = new TDCAM.ZoomTo({
                            animatedAttrs: {
                                position: {
                                    x: xTarget, 
                                    y: yTarget, 
                                    zoom: zoomTarget,
                                },
                            },
                            initialValues: {
                                position: {
                                    x: xInit, 
                                    y: yInit, 
                                    zoom: zoomInit, 
                                },
                            },
                        }, {
                            selector: '.viewport',
                            id: `zoom-${i}`,
                            duration: Math.trunc(duration),
                            easing: 'easeInOutQuad',
                        });
                        outroGroup.addIncident(zoomIncident, Math.trunc(entry));
                    }

                }
                outroGroup.addIncident(gLabelGroup, 0);
            }
            outroGroup.addIncident(pathAnimGroup, pointDur);
            outroGroup.addIncident(pointAnimGroup, 0);

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
        // Data init
        this.data = this.attrs.data.data;

        // Sizing and position controls
        this.graphScale = {
            width: 0.76,
            height: 0.58,
        }
        this.linesWidth = config.lineGraph.originalDims.width * this.graphScale.width;
        this.linesHeight = config.lineGraph.originalDims.height * this.graphScale.height;
        this.steleWidth = this.linesWidth * 0.01;
        this.spaceAround = (this.linesWidth - (this.steleWidth * this.data.length)) / (this.data.length * 2);
        this.r = 0.65;
    
        // Data processing
        this.title = this.attrs.data.title;
        this.words = this.title.split(" ");
        this.dataSetsNum = 0;
        this.maxPoint = 0;
        for (let datum of this.data) {
            if (datum.values.length > this.dataSetsNum) {
                this.dataSetsNum = datum.values.length;
            }
            if (Math.max(...datum.values) > this.maxPoint) {
                this.maxPoint = Math.max(...datum.values);
            }
        } 
        this.maxPoint = this.attrs.data.maxValue ? 
            this.attrs.data.maxValue : this.maxPoint;
        this.hover = this.attrs.data.hover ? 
            this.attrs.data.hover : false;
        this.hover = (this.dataSetsNum !== 1) ? 
            true : this.hover;
        this.trace = this.attrs.trace ? 
            this.attrs.trace : false;
        this.trace = (this.dataSetsNum === 1) ?
            this.trace : false;
        this.unit = this.attrs.data.unit ? 
            this.attrs.data.unit : "%";
        this.interval = this.attrs.data.interval ? 
            this.attrs.data.interval : 5;
        this.steleBlockNum = (this.maxPoint / this.interval) + 1;
        
        // Global access data process functions 
        this.findPointX = (datapoint) => {
            return (this.steleWidth / 2) + (this.spaceAround) + ((datapoint) * ((2 * this.spaceAround) + this.steleWidth));                
        };
        this.findPointY = (datapoint, line) => {
            return this.linesHeight - ((this.data[datapoint].values[line] * this.linesHeight) / this.maxPoint); 
        };

        // Colors control
        this.attrs.palette = this.attrs.palette ? 
            this.attrs.palette : {};
        this.primaryC = this.attrs.palette.primary ? 
            this.attrs.palette.primary : colorPalette.gray;
        this.secondaryC = this.attrs.palette.secondary ? 
            this.attrs.palette.secondary : colorPalette.lightGray;
        this.tertiaryC = this.attrs.palette.tertiary ? 
            this.attrs.palette.tertiary : colorPalette.darkGray;
        this.quaternaryC = this.attrs.palette.quaternary ? 
            this.attrs.palette.quaternary : colorPalette.whiteBack;
        this.fontC = this.attrs.palette.font ? 
            this.attrs.palette.font : colorPalette.font;
        this.accentC = this.attrs.palette.accent ? 
            this.attrs.palette.accent : colorPalette.accent;
        this.backgroundC = this.attrs.palette.background ? 
            this.attrs.palette.background : colorPalette.background;

        // Fonts control
        this.attrs.font = this.attrs.font ? 
            this.attrs.font : {};
        this.fontFamily = this.attrs.font.fontFamily ? 
            this.attrs.font.fontFamily : "'Staatliches', cursive";
        this.fontSizeLabel = this.attrs.font.size ? 
            this.attrs.font.size : "1.7rem";
        this.fontSizeTitle = "200%";
        this.fontSizeInner = "80%";
        this.url = this.attrs.font.url ? 
            this.attrs.font.url : "https://fonts.googleapis.com/css2?family=Staatliches&display=swap";

        // Timeline control
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