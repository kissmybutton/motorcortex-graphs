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
export default class PieChart extends MotorCortex.HTMLClip{

    get html() {
        return <div class="container">
            <h1 class="title">{this.attrs.data.title}</h1> 
            <div class="piechart"></div> 
        </div>
    }

    get css(){
        return `
        .container{
            background-color: transparent;
            width: 100%;
            height: 100%;
            display:flex;
            justify-content: center; 
            align-items: center; 
            flex:direction: column;
            font-family: ${this.attrs.font?.fontFamily? this.attrs.font.fontFamily : 'Staatliches, cursive'};
            font-size: ${this.attrs.font?.size ? this.attrs?.font.size : '1.6rem'};
        }
        .title{
            color: white;
            align-self: flex-start;
            top: -1rem;
            position: relative;
        }
        .piechart { 
            display: block; 
            position: absolute; 
            width: calc(80% * 0.75); 
            height: 80%; 
            border-radius: 50%; 
            background-image: conic-gradient(${this.createRadiusString()}); 
        } 
        `
    }

    get fonts(){
        return [{
            type: 'google-font',
            src: this.attrs.font?.url? this.attrs.font.url : 'https://fonts.googleapis.com/css2?family=Staatliches&display=swap'
        }];
    }

    buildTree(){
        if (this.attrs.timings?.intro) {
            const fadeInDuration = Math.round(this.attrs.timings?.intro * 0.2);
            const rotateDuration = Math.round(this.attrs.timings?.intro * 0.8);

            const fadein = new MCAnime.Anime({
                animatedAttrs: {
                    opacity: 1, 
                },
                initialValues: {
                opacity: 0,
                }
            },
            {
                duration: fadeInDuration,
                selector: `.container`,
                easing: 'linear'
            }
            )

            this.addIncident(fadein, 0)


            const rotateIn = new MCAnime.Anime({
                animatedAttrs: {
                    "background-image": `conic-gradient(${this.createRadiusString()})`, 
                },
                initialValues: {
                "background-image": `conic-gradient(black 0deg)`,
                }
            },
            {
                duration: rotateDuration,
                selector: `.piechart`,
                easing: 'easeOutCubic'
            }
            );

            this.addIncident(rotateIn, fadeInDuration);
        }

        const staticPie = new MCAnime.Anime({
            animatedAttrs: {}
        },
        {
            duration: this.attrs.timings?.static ? this.attrs.timings?.static : 1000,
            selector: ".container"
        });

        this.addIncident(staticPie, this.attrs.timings?.intro ? this.attrs.timings?.intro : 0);
    }

    createRadiusString() {
        let gradientString = '';
        this.radiusValues.forEach((elem, i) => {
            gradientString += `${DefaultStyle.colorPalette.pieColors[i]} 0 ${elem}deg ${this.attrs.data.data.length - 1 === i ? '' : ', '}`
        });
        return gradientString;
    }

    calculateRadius(elem, index) {
            if (index === 0 ) {
                return (elem.value/100) * 360;
            }
            return this.calculateRadius(this.attrs.data.data[index-1], index-1) + (elem.value/100) * 360;
    }

    get radiusValues() {
        return this.attrs.data.data.map((elem, index) =>  this.calculateRadius(elem, index));
    }
}