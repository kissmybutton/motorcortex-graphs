import MotorCortex from '@kissmybutton/motorcortex';
import MCAnimeDefinition from "@kissmybutton/motorcortex-anime";

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
        let list = "";
        const barCount = this.attrs.data.length;

        for (let i=0; i < barCount;i++) {
            list += `<div class ="row row-${i}">
            <div class="bar-header">${this.attrs.data[i].name}</div>
            <div class="container-bar container-bar-${i}">
                <div class="inner-bar inner-bar-${i}"></div>
            </div>
            <div class="text text-${i}">${this.attrs.data[i].value}</div>
        </div>`
        }
        return `
        <div class="container">
            ${list}
        </div>
        `
    }

    get css(){
        // just return the CSS you want to apply. It's totally isolated by 
        // its environment.
        return `
            .container{
                height: 100%;
                background-color: transparent;
                display: flex;
                font-family: 'Noto Sans', sans-serif;
                color: white;
            }
            .row{
                display: flex;
                flex-direction: row;
                position: absolute;
                left: 50%;
                margin-left: -10rem;
            }
            .container-bar{
                position: absolute;
                height: 2rem;
                background: lightgray;
                border-radius: 2rem;
                width: 20rem;
                box-shadow: 2px 2px 5px gray;
            }
            .inner-bar{
                position: relative;
                background-color: blue;
                height: 60%;
                top: 21%;
                border-radius: 2rem;
                width: 95%;
                margin-left: 0.5rem;
                box-shadow: 2px 2px 5px gray;
            }
            .text{
                position: absolute;
                top: 0.25rem;
                z-index: -1;
            }
            .text::after{
                content: "%";
            }
            .bar-header{
                position: absolute;
                top: 0.25rem;
                left: -26rem;
                display: flex;
                justify-content: flex-end;
                width: 25rem;
            }
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
            src: 'https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap'
        }];
    }

    get audioSources(){
        // You can load sounds here to use on your Clip. Check documentation for details
        return [];
    }

    buildTree(){
        const barCount = this.attrs.data.length;
        let sum = 0;
        for (let i=1; i <= barCount;i++) {
            sum += i;
        }
        const avg = sum / barCount;
        for (let i=0; i < barCount;i++) {
            const slideIn = new MCAnime.Anime({
                animatedAttrs: {
                    bottom: `${50 + (avg - i) * 5 - 3.4}%`
                    
                },
                initialValues: {
                    bottom: `-${i * 2}rem`,
                }
                },
                {
                duration: this.attrs.duration.slideInDuration ? this.attrs.duration.slideInDuration : 1,
                selector: `.row-${i}`,
                easing: 'linear'
                });

                const expand_base = new MCAnime.Anime({
                    animatedAttrs: {
                        width: '20rem'
                        
                    },
                    initialValues: {
                        width:'0.2rem',
                    }
                    },
                    {
                    duration: this.attrs.duration.expandBaseDuration ? this.attrs.duration.expandBaseDuration : 1,
                    delay: 200 * i,
                    selector: `.container-bar-${i}`,
                    easing: 'linear'
                    });


                const expand_bar = new MCAnime.Anime({
                    animatedAttrs: {
                        width: `${this.attrs.data[i].value * 0.95}%`
                            
                    },
                    initialValues: {
                        width:'0%',
                    }
                    },
                        {
                        duration: this.attrs.duration.expandBarDuration ? this.attrs.duration.expandBarDuration : 1,
                        delay: 200 * i,
                        selector: `.inner-bar-${i}`,
                        easing: 'linear'
                        });                

            this.addIncident(slideIn, 0);
            this.addIncident(expand_base, this.attrs.duration.slideInDuration);
            this.addIncident(expand_bar, this.attrs.duration.slideInDuration + this.attrs.duration.expandBaseDuration);
        }

        const expand_text = new MCAnime.Anime({
                animatedAttrs: {
                    left: '21rem',
                    opacity: 1
                        
                },
                initialValues: {
                    left:'15rem',
                    opacity: 0
                }
                },
                    {
                      duration: this.attrs.duration.showTextDuration ? this.attrs.duration.showTextDuration : 1,
                      delay: 200 * barCount, 
                      selector: `.text`,
                      easing: 'linear'
                    });

                
            const collapse_all = new MCAnime.Anime({
                animatedAttrs: {
                    opacity: 0,
                },
                },
                {
                    duration: this.attrs.duration.collapseDuration ? this.attrs.duration.collapseDuration : 1,
                    selector: `.container`,
                    easing: 'linear'
                });
        
        this.addIncident(expand_text, this.attrs.duration.slideInDuration + this.attrs.duration.expandBaseDuration + this.attrs.duration.expandBarDuration);
        this.addIncident(collapse_all, this.attrs.duration.slideInDuration + 
            this.attrs.duration.expandBaseDuration +
            this.attrs.duration.expandBarDuration +
            this.attrs.duration.showTextDuration + 
            this.attrs.duration.staticGraphDuration);
        
    }
}