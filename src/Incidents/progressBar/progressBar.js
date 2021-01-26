import MotorCortex from '@kissmybutton/motorcortex';
import MCAnimeDefinition from "@kissmybutton/motorcortex-anime";
import buildCSS from './progressBarStyleSheet'; 
import { fadeOutOpacityControl } from '../../shared/opacityControl';

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
export default class ProgressBar extends MotorCortex.HTMLClip{
    get html(){
        let list = this.attrs.data.map((elem, index) => {
            return <div class ={"row row-"+index}>
            <div class="bar-header">{elem.name}</div>
            <div class={"container-bar container-bar-"+index}>
                <div class={"inner-bar inner-bar-"+ index + " " + (elem.value < this.criticalValue ? "extra-rounded-"+index : null)}></div>
            </div>
            <div class={"text text-"+index}>{!this.attrs.options?.hidePercentage ? ((elem.value > 0 ? elem.value.toFixed(2) : 0)+"%") : null}</div>
        </div>
        });

        return <div class="container-progressBar">{list}</div>
    }

    get css(){
        let cssArgs = {
            barSum: this.barSum,
            barCount: this.barCount,
            data: this.attrs.data,
            palette: this.attrs.palette ? this.attrs.palette : {},
            font: this.attrs.font ? this.attrs.font : {},
            options: this.attrs.options ? this.attrs.options : {},
        }
        return buildCSS(cssArgs)
    }

    get fonts(){
        return [{
            type: 'google-font',
            src: this.attrs.font?.url? this.attrs.font.url : 'https://fonts.googleapis.com/css2?family=Staatliches&display=swap'
        }];
    }

    buildTree(){
        const avg = this.barSum / this.barCount;
        fadeOutOpacityControl(this, `.container-progressBar`);

        if (this.attrs.timings?.intro) {
            const slideInDuration = Math.floor(this.attrs.timings.intro * 0.33);
            const expandBaseDuration = Math.floor(this.attrs.timings.intro * 0.25);
            const expandBarDuration = Math.floor(this.attrs.timings.intro * 0.33);
            const showTextDuration = Math.floor(this.attrs.timings.intro * 0.09);


            for (let i=0; i < this.barCount;i++) {
                const slideIn = new MCAnime.Anime({
                    animatedAttrs: {
                        bottom: `${50 + (avg - i) * 100/this.barCount - 60/this.barCount * 2.15}%`
                        
                    },
                    initialValues: {
                        bottom: `-${65/this.barCount}%`,
                    }
                    },
                    {
                    duration: slideInDuration,
                    selector: `.row-${i}`,
                    easing: 'linear'
                    });

                    const expand_base = new MCAnime.Anime({
                        animatedAttrs: {
                            width: '60%'
                            
                        },
                        initialValues: {
                            width:'0.2%',
                        }
                        },
                        {
                        duration: expandBaseDuration,
                        delay: Math.round(200/this.attrs.timings.intro) * i,
                        selector: `.container-bar-${i}`,
                        easing: 'linear'
                        });


                    const expand_bar = new MCAnime.Anime({
                        animatedAttrs: {
                            width: `${this.attrs.data[i].value.toFixed(2)}%`
                                
                        },
                        initialValues: {
                            width:'0px',
                        }
                        },
                            {
                            duration: expandBarDuration,
                            delay: Math.round(200/this.attrs.timings.intro) * i,
                            selector: `.inner-bar-${i}`,
                            easing: 'linear'
                            });                

                this.addIncident(slideIn, 0);
                this.addIncident(expand_base, slideInDuration);
                this.addIncident(expand_bar, slideInDuration + expandBaseDuration);
            }

            const expand_text = new MCAnime.Anime({
                animatedAttrs: {
                    left: '62%',
                    opacity: 1
                        
                },
                initialValues: {
                    left:'58%',
                    opacity: 0
                }
                },
                    {
                    duration: showTextDuration,
                    delay: Math.round(200/this.attrs.timings.intro) * this.barCount, 
                    selector: `.text`,
                    easing: 'linear'
                    });

            this.addIncident(expand_text, slideInDuration + expandBaseDuration + expandBarDuration);
        }

        const staticGraph = new MCAnime.Anime({animatedAttrs: {}},{duration: this.attrs.timings.static ? this.attrs.timings.static : 1000, selector: '.container-progressBar' });
        this.addIncident(staticGraph, this.attrs.timings.intro)
                
        if (this.attrs.timings.outro) {    
            const collapse_all = new MCAnime.Anime({
                    animatedAttrs: {
                        opacity: 0,
                    },
                    },
                    {
                        duration: this.attrs.timings.outro,
                        selector: `.container-progressBar`,
                        easing: 'linear'
                    });
        
            this.addIncident(collapse_all, this.attrs.timings.intro + (this.attrs.timings.static ? this.attrs.timings.static : 1000));
        }
        
    }

    get barSum() {
        let sum = 0;
        for (let i=1; i <= this.barCount;i++) {
            sum += i;
        }
        return sum;
    }

    get barCount() {
        return this.attrs.data.length;
    }

    get criticalValue() {
        if (this.barCount/10 === 1) {
            return (this.barCount/10) * 10 
        } else if (this.barCount/10 > 1) {
            return ((this.barCount/10) - 1) * 10;
        } else {
            return ((this.barCount/10) + 1) * 10;
        }
        
    }
}