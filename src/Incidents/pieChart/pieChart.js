import MotorCortex from '@kissmybutton/motorcortex';
import MCAnimeDefinition from "@kissmybutton/motorcortex-anime";
import * as DefaultStyle from '../../Defaults/colorPalette';
import buildCSS from './pieChartStylesheet';

const MCAnime = MotorCortex.loadPlugin(MCAnimeDefinition);

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
export default class PieChart extends MotorCortex.HTMLClip{

    get html() {
        return <div class="container-pieChart">
            <h1 class="title">{this.buildTitle()}</h1> 
            <div class='columns'>
            <div class="col-1">
            <div class="piechart"></div> 
            </div>
            <div class="col-2">
                <div class="legend">{this.buildLegend()}</div>
            </div>
            </div>
        </div>
    }

    get css(){
        let cssArgs = {
            data: this.attrs.data,
            palette: this.attrs.palette ? this.attrs.palette : {},
            font: this.attrs.font ? this.attrs.font : {},
            radiusString: this.createRadiusString(false)
        }
        return buildCSS(cssArgs);
    }

    get fonts(){
        return [{
            type: 'google-font',
            src: this.attrs.font?.url? this.attrs.font.url : 'https://fonts.googleapis.com/css2?family=Staatliches&display=swap'
        }];
    }

    buildTree(){
        this.opacityControl();
        
        if (this.attrs.timings?.intro) {
            const fadeInDuration = Math.round(this.attrs.timings?.intro * 0.2);
            const rotateDuration = Math.round(this.attrs.timings?.intro * 0.8);
            const titleInDuration = Math.round(this.attrs.timings?.intro * 0.4);

            const fadeIn = new MCAnime.Anime({
                animatedAttrs: {
                    opacity: 1, 
                },
                initialValues: {
                    opacity: 0,
                }
            },
            {
                duration: fadeInDuration,
                selector: '.container-pieChart',
                easing: 'linear'
            }
            )

            this.addIncident(fadeIn, 0);

            if (this.attrs.data.title) {
                [...this.attrs.data.title].forEach((char, index) => {
                    const titleIn = new MCAnime.Anime({
                        animatedAttrs: {
                            right: '0%',
                            opacity: 1
                            
                        },
                        initialValues: {
                            right: '-102%',
                            opacity: 0,
                            position: 'relative'
                        }
                        },
                        {
                        duration: Math.round(titleInDuration/this.attrs.data.title.length),
                        selector: `.char-${index}`,
                        easing: 'easeOutCubic'
                        });
                    this.addIncident(titleIn, Math.round(titleInDuration/this.attrs.data.title.length) * index);
                })
            }

            const rotateIn = new MCAnime.Anime({
                animatedAttrs: {
                    "background-image": `conic-gradient(${this.createRadiusString(false)})` 
                },
                initialValues: {
                "background-image": `conic-gradient(black 0deg)`,

                }
            },
            {
                duration: rotateDuration,
                selector: `.piechart`,
                easing: 'linear'
            }
            );
            this.addIncident(rotateIn, titleInDuration);

            const legendIn = new MCAnime.Anime({
                animatedAttrs: {
                    'width': '75%',
                    'min-width': '50%',
                    opacity: 1
                },
                initialValues: {
                    width: '0%',
                    'min-width': '0%',
                    opacity: 0,
                }
            },{
                    duration: rotateDuration,
                    selector: '.legend',
                    easing: 'linear'
                }
            );

            this.addIncident(legendIn, titleInDuration);
        } else {
        }

        const staticPie = new MCAnime.Anime({
            animatedAttrs: {},
        },
        {
            duration: this.attrs.timings?.static ? this.attrs.timings?.static : 1000,
            selector: ".container-pieChart"
        });

        this.addIncident(staticPie, this.attrs.timings?.intro ? this.attrs.timings?.intro : 0);


        if (this.attrs.timings?.outro) {
            const fadeOutDuration = Math.round(this.attrs.timings?.outro);
    
            const fadeOut = new MCAnime.Anime({
                animatedAttrs: {
                    opacity: 0
                },
                initialValues: {
                    opacity: 1
                }
            },{
                selector: '.container-pieChart',
                duration: fadeOutDuration,
                easing: 'linear'
            })

            this.addIncident(fadeOut, (this.attrs.timings?.intro ? this.attrs.timings?.intro : 0) + this.attrs.timings?.static)
        }
    }

    createRadiusString(outro) {
        let gradientString = '';
        this.radiusValues.forEach((elem, i) => {
            gradientString += `${this.attrs.data.data[i].color? this.attrs.data.data[i].color : this.generateColor(i)} 0 ${elem}deg ${(this.attrs.data.data.length - 1 === i) && outro ? '' : ', '}`
        });
        gradientString = outro? 'rgba(0,0,0,0) 0 360deg, ' + gradientString  : gradientString + 'rgba(0,0,0,0) 0 360deg';
        return gradientString;
    }

    calculateRadius(elem, index) {
            if (index === 0 ) {
                return (elem.value/100) * 360;
            }
            return this.calculateRadius(this.attrs.data.data[index-1], index-1) + (elem.value/100) * 360;
    }

    generateColor(index) {
        if (index > DefaultStyle.colorPalette.pieColors.length - 1) {
            return DefaultStyle.colorPalette.pieColors[Math.floor(Math.random() * Math.floor(DefaultStyle.colorPalette.pieColors.length))];
        }
        return DefaultStyle.colorPalette.pieColors[index];
    }

    get radiusValues() {
        return this.attrs.data.data.map((elem, index) =>  this.calculateRadius(elem, index));
    }

    // Static control
    // Making the contents of this animation invisible before timestamp:0 
    // and after timestamp: {totalDuration}
    opacityControl() {
        this.addIncident(
            new MCAnime.Anime(
                {
                    animatedAttrs: {
                        opacity: 1,
                    },
                    initialValues: {
                        opacity: 0,
                    }
                }, {
                    selector: `.container-pieChart`,
                    duration: 1,
                }
            ),
            0    
        );
        if (!this.attrs.timings.outro) {
            this.addIncident(
                new MCAnime.Anime(
                    {
                        animatedAttrs: {
                            opacity: 0,
                        },
                    }, {
                        selector: `.container-pieChart`,
                        duration: 1,
                    }
                ),
                this.attrs.timings.intro + this.attrs.timings.static + this.attrs.timings.outro - 1
            );
        }
    }

    buildTitle() {
        return [...this.attrs.data.title].map((char, index) => {
            return <div class="char"><div class={'char-' + index + (char === ' '? ' space' : '')}>{char}</div></div>
        })
    }

    buildLegend() {
        return this.attrs.data.data.map((elem, index) => {
            return <div class="legend-row" ><div class={'indicator-'+index}></div><div class="legend-text">{elem.name}</div></div>
        })
    }
}