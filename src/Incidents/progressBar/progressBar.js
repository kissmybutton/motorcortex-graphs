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

        for (let i=0; i < this.attrs.barCount;i++) {
            list += `<div class ="row row-${i}">
            <div class="container-bar container-bar-${i}">
                <div class="inner-bar inner-bar-${i}"></div>
            </div>
            <div class="text text-${i}"></div>
        </div>`
        }
        console.log(list)
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
                width: 100%;
                height: 100%;
                background-color: transparent;
                display: flex;
                flex-direction: column;
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
                height: 1rem;
                background: lightgray;
                border-radius: 2rem;
                padding-bottom: 1rem;
                width: 20rem;
                box-shadow: 2px 2px 5px gray;
            }
            .inner-bar{
                position: relative;
                background-color: blue;
                height: 98%;
                top: 50%;
                border-radius: 2rem;
                width: 95%;
                margin-left: 0.5rem;
                box-shadow: 2px 2px 5px gray;
            }
            .text{
                position: absolute;
                top: 0.5rem;
                left: 21rem;
                color: white;
            }
            .text::before{
                content: "0%";
            }
        `;
    }

    get fonts(){
        // you can load google fonts on your clip by adding objects on the
        // array it returns. Each object must have two keys:
        // type: "google-font" and
        // src: the src of the google font e.g.:
        // https://fonts.googleapis.com/css2?family=Ubuntu:wght@500;700&display=swap
        return [];
    }

    get audioSources(){
        // You can load sounds here to use on your Clip. Check documentation for details
        return [];
    }

    buildTree(){
        for (let i=0; i < this.attrs.barCount;i++) {
        const slideIn = new MCAnime.Anime({
            animatedAttrs: {
                bottom: `${50 - (i * 5)}%`
                
              },
              initialValues: {
                bottom: `-${i * 4}rem`,
              }
            },
            {
              duration: 2000,
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
                  duration: 1500,
                  delay: 200 * i,
                  selector: `.container-bar-${i}`,
                  easing: 'linear'
                });


            const expand = new MCAnime.Anime({
                animatedAttrs: {
                    width: '95%'
                        
                },
                initialValues: {
                    width:'0%',
                }
                },
                    {
                      duration: 2000,
                      delay: 200 * i,
                      selector: `.inner-bar-${i}`,
                      easing: 'linear'
                    });

        this.addIncident(slideIn, 1);
        this.addIncident(expand_base, 2000);
        this.addIncident(expand, 3500);
        
                }
        
    }
}