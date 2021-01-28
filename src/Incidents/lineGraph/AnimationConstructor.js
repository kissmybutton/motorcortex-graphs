import MotorCortex from '@kissmybutton/motorcortex';
import AnimePlugin from '@kissmybutton/motorcortex-anime';
import SVGDDef from "@kissmybutton/motorcortex-svgdraw";
import TDCAMDef from "@kissmybutton/motorcortex-2dcam";
const Anime = MotorCortex.loadPlugin(AnimePlugin);
const SVGD = MotorCortex.loadPlugin(SVGDDef);
const TDCAM = MotorCortex.loadPlugin(TDCAMDef);
import config from '../../incident_config'


export default class AnimationConstructor {
    constructor(instance) {
        this.instance = instance;
    }

    buildStaticControl() {
        return (
            new Anime.Anime(
                { animatedAttrs: {} },
                {
                    selector: ".container-lineGraph",
                    duration: this.instance.staticDur,
                }
            )
        );
    }

    buildBackgroundIntro() {
        return (
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
                    duration: Math.trunc(this.instance.introDur * 0.2),
                    easing: "easeInOutQuart",
                }
            )
        );
    }

    buildBackgroundOutro() {
        return (
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
                    duration: Math.trunc(this.instance.outroDur * 0.2),
                    easing: "easeInOutQuart",
                }
            )
        );
    }

    buildTitleIntroCombo() {
        const titlesAnim = new MotorCortex.Group();
        let titleDur = this.instance.introDur * 0.13;
        let titleIncidents = [];
        for (let i in this.instance.words) {
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
                    duration: Math.trunc(titleDur / this.instance.words.length),
                    easing: "easeInOutQuart",
                },
                position: Math.trunc(titleDur / this.instance.words.length * i)
            });
        }

        return (
            new MotorCortex.Combo(
                {
                    incidents: titleIncidents
                },
                {
                    selector: ".title-wrapper-lineGraph",
                }
            )
        );
    }

    buildTitleOutroCombo() {
        const titlesAnim = new MotorCortex.Group();
        let titleDur = this.instance.outroDur * 0.13;
        let titleIncidents = [];
        for (let i in this.instance.words) {
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
                    duration: Math.trunc(titleDur / this.instance.words.length),
                    easing: "easeInOutQuart",
                },
                position: Math.trunc(titleDur / this.instance.words.length * (this.instance.words.length-1-i))
            });
        }
        return (
            new MotorCortex.Combo(
                {
                    incidents: titleIncidents
                },
                {
                    selector: ".title-wrapper-lineGraph",
                }
            )
        );
    }

    buildIntroLegend() {
        let colorsDur = this.instance.introDur * 0.25;
        let colorDur = colorsDur / this.instance.dataSetsNum;
        let delay = this.instance.dataSetsNum === 1 ?
            null : `@stagger(0, ${colorsDur - colorDur})`;
        let legendIncidents = [
            {
                incidentClass: Anime.Anime,
                attrs: {
                    animatedAttrs: {
                        height: `${this.instance.legendHeight}%`
                    },
                    initialValues: {
                        height: "0%"
                    },
                },
                props: {
                    duration: Math.trunc(this.instance.introDur * 0.2),
                    easing: "easeInOutQuart",
                },
                position: 0,
            },
            {
                incidentClass: Anime.Anime,
                attrs: {
                    animatedAttrs: {
                        opacity: "1"
                    },
                    initialValues: {
                        opacity: "0"
                    },
                },
                props: {
                    selector: ".color-wrapper",
                    duration: Math.trunc(this.instance.introDur * 0.1),
                    delay: delay,
                    easing: "easeInOutQuad",
                },
                position: Math.trunc(this.instance.introDur * 0.15),
            },
            {
                incidentClass: Anime.Anime,
                attrs: {
                    animatedAttrs: {
                        opacity: "1",
                    },
                    initialValues: {
                        opacity: "0",
                    },
                },
                props: {
                    selector: ".line-title",
                    duration: Math.trunc(this.instance.introDur * 0.1),
                    delay: delay,
                    easing: "easeInOutQuad",
                },
                position: Math.trunc(this.instance.introDur * 0.15),
            }
        ];

        return (
            new MotorCortex.Combo(
                {
                    incidents: legendIncidents
                },
                {
                    selector: ".legend-wrapper",
                }
            )
        );
    }

    buildOutroLegend() {
        let colorsDur = this.instance.outroDur * 0.25;
        let colorDur = colorsDur / this.instance.dataSetsNum;
        let delay = this.instance.dataSetsNum === 1 ?
            null : `@stagger(0, ${colorsDur - colorDur}, 0, linear, linear, true)`;
        let legendIncidents = [
            {
                incidentClass: Anime.Anime,
                attrs: {
                    animatedAttrs: {
                        height: "0%"
                    },
                    initialValues: {
                        height: `${this.instance.legendHeight}%`
                    },
                },
                props: {
                    duration: Math.trunc(this.instance.introDur * 0.2),
                    easing: "easeInOutQuart",
                },
                position: colorsDur,
            },
            {
                incidentClass: Anime.Anime,
                attrs: {
                    animatedAttrs: {
                        opacity: "0"
                    },
                    initialValues: {
                        opacity: "1"
                    },
                },
                props: {
                    selector: ".color-wrapper",
                    duration: Math.trunc(this.instance.introDur * 0.1),
                    delay: delay,
                    easing: "easeInOutQuad",
                },
                position: Math.trunc(colorsDur - this.instance.introDur * 0.15),
            },
            {
                incidentClass: Anime.Anime,
                attrs: {
                    animatedAttrs: {
                        opacity: "0",
                    },
                    initialValues: {
                        opacity: "1",
                    },
                },
                props: {
                    selector: ".line-title",
                    duration: Math.trunc(this.instance.introDur * 0.1),
                    delay: delay,
                    easing: "easeInOutQuad",
                },
                position: Math.trunc(colorsDur - this.instance.introDur * 0.15),
            }
        ];

        return (
            new MotorCortex.Combo(
                {
                    incidents: legendIncidents
                },
                {
                    selector: ".legend-wrapper",
                }
            )
        );
    }

    buildIntroLabels() {
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
                    duration: Math.trunc(this.instance.introDur * 0.25),
                    easing: "easeInOutQuart",
                }
            ),
            0
        );

        // Labels Intro Animation
        let textAnimDur = this.instance.introDur * 0.2;
        let labelDur = textAnimDur * 3 / (this.instance.data.length + 2);
        for (let i in this.instance.data) {
            let remainingDur = labelDur / 2;
            let incidents = [];
            for (let z in this.instance.data[i].name) {
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
                        duration: Math.trunc(this.instance.introDur * 0.015),
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
                Math.trunc((this.instance.introDur*0.14) + (textAnimDur / (this.instance.data.length + 1)) * (this.instance.data.length-i-1))
            );
        }

        return xLabelsAnim;
    }

    buildOutroLabels() {
        const xLabelsAnim = new MotorCortex.Group();
        const labelsDur = this.instance.outroDur * 0.55;

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
        let textAnimDur = this.instance.outroDur * 0.2;
        let labelDur = textAnimDur * 3 / (this.instance.data.length + 2);
        for (let i in this.instance.data) {
            let remainingDur = labelDur / 2;
            let incidents = [];
            for (let z in this.instance.data[i].name) {
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
                        duration: Math.trunc(this.instance.outroDur * 0.015),
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
                Math.trunc(textAnimDur * i / (this.instance.data.length + 1))
            );
        }

        return xLabelsAnim;
    }

    buildIntroStele() {
        const stelesIntro = new MotorCortex.Group();
        let stelesFullDur = this.instance.introDur * 0.3;
        let steleOverlapIndex = 5;
        let blockOverlapIndex = 3;
        let steleDur = (stelesFullDur * steleOverlapIndex) / (this.instance.data.length + 1);
        let steleDelay = steleDur / steleOverlapIndex;
        let blockDur = (steleDur * blockOverlapIndex) / (this.instance.steleBlockNum + 1);
        for (let i in this.instance.data) {
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

        return stelesIntro;
    }

    buildOutroStele() {
        const stelesOutro = new MotorCortex.Group();
        let stelesFullDur = this.instance.outroDur * 0.3;
        let steleOverlapIndex = 5;
        let blockOverlapIndex = 3;
        let steleDur = (stelesFullDur * steleOverlapIndex) / (this.instance.data.length + 1);
        let steleDelay = steleDur / steleOverlapIndex;
        let blockDur = (steleDur * blockOverlapIndex) / (this.instance.steleBlockNum + 1);
        for (let i in this.instance.data) {
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
            stelesOutro.addIncident(steleGroup,  (this.instance.data.length - 1 - i) * steleDelay);
        }
        return stelesOutro;
    }

    buildIntroGraph(targetGroup) {
        let segmentDur = (this.instance.introDur / this.instance.data.length);
        let pointDur = segmentDur * 0.35;
        let pathDur = segmentDur * 0.8;

        let pathAnimGroup = new MotorCortex.Group();
        let pointAnimGroup = new MotorCortex.Group();
        for (let l = 0; l < this.instance.dataSetsNum; l++) {
            for (let i = 0; i < this.instance.data.length; i++) {
                // Path Intro Animation
                if (i !== this.instance.data.length-1) {
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
                            r: this.instance.r,
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
                let targetTop = this.instance.findPointY(i, l) - (this.instance.linesHeight * 0.083);
                let topOffset = targetTop + this.instance.linesHeight * 0.07 / 2;
            
                let targetWidth = ((10 / 2 * this.instance.data.length) > 10) ?
                    10 : (10 / 2 * this.instance.data.length);
                    targetWidth = (targetWidth < 6) ? 6 : targetWidth;
                
                let targetLeft = this.instance.findPointX(i) 
                    - ((targetWidth * this.instance.linesWidth / 100) * 0.5);
                let leftOffset = targetLeft + this.instance.linesWidth * (targetWidth/100) / 2;
                        
                let gLabelAnimation = new Anime.Anime(
                    {
                        animatedAttrs: {
                            opacity: 0.6,
                            width: `${targetWidth}%`,
                            "min-width": `${targetWidth}%`,
                            height: `7%`,
                            top: `${targetTop}px`,
                            left: `${targetLeft}px`,
                            "font-size": this.instance.fontSizeInner,
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
                        selector: `.label-${l}-${this.instance.data[i].name}`,
                        duration: Math.trunc(pointDur),
                        easeing: "easeInOutCubic",
                    }
                );
                targetGroup.addIncident(
                    gLabelAnimation, 
                    Math.trunc((segmentDur * i) + (pointDur * 0.2))
                );

                if (this.instance.trace) {
                    let [entry, duration, xInit, yInit, zoomInit, xTarget, yTarget, zoomTarget] = 
                        [...this.buildSvgIntroParams(i, pointDur, segmentDur)];

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
                        selector: '.viewport-lineGraph',
                        duration: Math.trunc(duration),
                        easing: 'easeInOutQuad',
                    });
                    targetGroup.addIncident(zoomIncident, Math.trunc(entry));
                }
            }
        }

        return [targetGroup, pathAnimGroup, pointAnimGroup];
    }

    buildSvgIntroParams(index, pointDur, segmentDur) {
        let entry = 0;
        let duration = 0;
        let xTarget = this.instance.findPointX(index) + 
            ((1-this.instance.graphScale.width) / 2) * 
            config.lineGraph.originalDims.width;     
        let yTarget = this.instance.findPointY(index, 0) + 
            ((1-this.instance.graphScale.height) / 2) * 
            config.lineGraph.originalDims.height;    
        let zoomTarget = this.instance.traceScale;
        
        let xInit, yInit, zoomInit;
        if (index === 0) {
            xInit = config.lineGraph.originalDims.width * 0.5;
            yInit = config.lineGraph.originalDims.height * 0.5; 
            zoomInit = this.instance.traceScale;
            duration = pointDur - (segmentDur * 0.15);
            entry = 0;
        } else if ( index === this.instance.data.length - 1) {
            xInit = this.instance.findPointX(index-1) + 
                ((1-this.instance.graphScale.width) / 2) * 
                config.lineGraph.originalDims.width;
            yInit = this.instance.findPointY(index-1, 0) + 
                ((1-this.instance.graphScale.height) / 2) * 
                config.lineGraph.originalDims.height;
            zoomInit = this.instance.traceScale;
            xTarget = config.lineGraph.originalDims.width * 0.5;
            yTarget = config.lineGraph.originalDims.height * 0.5; 
            zoomTarget = 1;
            entry = (segmentDur * (index-1)) + (pointDur);
            duration = segmentDur + pointDur - (segmentDur * 0.15);
        } else {
            xInit = this.instance.findPointX(index-1) + 
                ((1-this.instance.graphScale.width) / 2) * 
                config.lineGraph.originalDims.width;
            yInit = this.instance.findPointY(index-1, 0) + 
                ((1-this.instance.graphScale.height) / 2) * 
                config.lineGraph.originalDims.height; 
            zoomInit = this.instance.traceScale;
            duration = segmentDur;
            entry = segmentDur * (index - 1) + pointDur ;
        }

        return [entry, duration, xInit, yInit, zoomInit, xTarget, yTarget, zoomTarget];
    }

    buildOutroGraph(targetGroup) {
        let segmentDur = (this.instance.outroDur / (this.instance.data.length + 1));
        let pointDur = segmentDur * 0.25;
        let pathDur = segmentDur * 0.8;
        let zoomOffset = this.instance.trace ? 1 : 0;

        let pathAnimGroup = new MotorCortex.Group();
        let pointAnimGroup = new MotorCortex.Group();
        for (let l = 0; l < this.instance.dataSetsNum; l++) {
            let gLabelGroup = new MotorCortex.Group();
            for (let i = 0; i < this.instance.data.length; i++) {
                // Path outro Animation
                if (i !== this.instance.data.length-1) {
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
                        Math.trunc((segmentDur * (this.instance.data.length  + zoomOffset - i - 2)) + (segmentDur * 0.2))
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
                            r: this.instance.r,
                        },
                    }, {
                        selector: `#point-${l}-${i}`,
                        duration: Math.trunc(pointDur),
                        easeing: "easeOutCubic",
                    }
                );
                pointAnimGroup.addIncident(
                    pointAnimation, 
                    Math.trunc(segmentDur * (this.instance.data.length  + zoomOffset - i - 1))
                );

                // Graph Label Outro Animation
                let targetTop = this.instance.findPointY(i, l) - (this.instance.linesHeight * 0.083);
                let topOffset = targetTop + this.instance.linesHeight * 0.07 / 2;
            
                let targetWidth = ((10 / 2 * this.instance.data.length) > 10) ?
                    10 : (10 / 2 * this.instance.data.length);
                    targetWidth = (targetWidth < 6) ? 6 : targetWidth;
                
                let targetLeft = this.instance.findPointX(i) 
                    - ((targetWidth * this.instance.linesWidth / 100) * 0.5);
                let leftOffset = targetLeft + this.instance.linesWidth * (targetWidth/100) / 2;
                
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
                            "font-size": this.instance.fontSizeInner,
                        }, 
                    }, {
                        selector: `.label-${l}-${this.instance.data[i].name}`,
                        duration: Math.trunc(pointDur),
                        easeing: "easeInOutCubic",
                    }
                );
                gLabelGroup.addIncident(
                    gLabelAnimation, 
                    Math.trunc((segmentDur * (this.instance.data.length  + zoomOffset - i - 1)) + (pointDur * 0.2))
                );
            }
            targetGroup.addIncident(gLabelGroup, 0);
        }
        return [targetGroup, pathAnimGroup, pointAnimGroup];
    }
}