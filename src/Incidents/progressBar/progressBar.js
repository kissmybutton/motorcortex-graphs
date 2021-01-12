import MotorCortex from '@kissmybutton/motorcortex';
import MCAnimeDefinition from "@kissmybutton/motorcortex-anime";
import * as DefaultStyle from '../../Defaults/colorPalette';

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
            <div class={"text text-"+index}>{elem.value.toFixed(2)}</div>
        </div>
        });

        return <div class="container">{list}</div>
    }

    get css(){
        let rows = '';

        const avg = this.barSum / this.barCount;

        this.attrs.data.forEach((elem, index) => {
           rows += `.row-${index}{
                bottom: ${50 + (avg - index) * 100/this.barCount - 60/this.barCount * 2.15}%;
                }
                .inner-bar-${index}{
                    width: ${elem.value.toFixed(2)}%;
                }`
        });

        return `
            .container{
                height: 100%;
                background-color: ${this.attrs.palette.background ? this.attrs.palette.background : DefaultStyle.colorPalette.background};
                display: flex;
                color: ${this.attrs.palette.font ? this.attrs.palette.font : DefaultStyle.colorPalette.font};
                font-family: ${this.attrs.font.fontFamily? this.attrs.font.fontFamily : 'Staatliches, cursive'};
                font-size: ${this.attrs.font.size ? this.attrs.font.size : '1.2rem'};
            }
            .row{
                display: flex;
                flex-direction: row;
                position: absolute;
                left: 20%;
                align-items: center;
                height: ${60/this.barCount}%;
                width: 100%;
            }
            .container-bar{
                position: absolute;
                height: 100%;
                background: ${this.attrs.palette.secondary ? this.attrs.palette.secondary : DefaultStyle.colorPalette.darkGray};
                border-radius: 16rem;
                width: 60%;
                box-shadow: 2px 2px 5px gray;
                border: 0.2rem solid ${this.attrs.palette.accent ? this.attrs.palette.accent : DefaultStyle.colorPalette.accent};
                z-index: 1;
            }
            .inner-bar{
                position: relative;
                background-color: ${this.attrs.palette.primary ? this.attrs.palette.primary : DefaultStyle.colorPalette.lightGray};
                height: 102%;
                border-radius: 16rem;
                bottom: -1px;
                z-index: 2;
                top: -0.5px;
                
            }
            .text{
                position: relative;
                z-index: 0;
                opacity: 1;
                left: 62%;
            }
            .text::after{
                content: "%";
            }
            .bar-header{
                position: absolute;
                left: -21%;
                text-align: right;
                width: 20%;
            }
            ${rows}
        `;
    }

    get fonts(){
        // you can load google fonts on your clip by adding objects on the
        // array it returns. Each object must have two keys:
        // type: "google-font" and
        // src: the src of the google font e.g.:
        // https://fonts.googleapis.com/css2?family=Ubuntu:wght@500;700&display=swap
        return [{
            type: 'google-font',
            src: this.attrs.font.url? this.attrs.font.url : 'https://fonts.googleapis.com/css2?family=Staatliches&display=swap'
        }];
    }

    get audioSources(){
        // You can load sounds here to use on your Clip. Check documentation for details
        return [];
    }

    buildTree(){
        const avg = this.barSum / this.barCount;
        this.opacityControl();

        if (this.attrs.timings.intro) {
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

        const staticGraph = new MCAnime.Anime({animatedAttrs: {}},{duration: this.attrs.timings.static ? this.attrs.timings.static : 1000, selector: '.container' });
        this.addIncident(staticGraph, this.attrs.timings.intro)
                
        if (this.attrs.timings.outro) {    
            const collapse_all = new MCAnime.Anime({
                    animatedAttrs: {
                        opacity: 0,
                    },
                    },
                    {
                        duration: this.attrs.timings.outro,
                        selector: `.container`,
                        easing: 'linear'
                    });
        
            this.addIncident(collapse_all, this.attrs.timings.intro + (this.attrs.timings.static ? this.attrs.timings.static : 1000));
        }
        
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
                    selector: `.container`,
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
                        selector: `.container`,
                        duration: 1,
                    }
                ),
                this.attrs.timings.intro + this.attrs.timings.static - 1
            );
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