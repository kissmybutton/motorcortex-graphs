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
        }
        .title{
            color: white;
            align-self: flex-start;
        }
        .piechart { 
            margin-top: 300px; 
            display: block; 
            position: absolute; 
            width: calc(80% * 0.75); 
            top:-25%;
            height: 80%; 
            border-radius: 50%; 
            background-image: conic-gradient(${this.create_radius_table()}); 
        } 
        `
    }

    get fonts(){
        return [];
    }

    buildTree(){
        this.create_radius_table();
    }

    create_radius_table() {
        let values = this.attrs.data.data.map((elem, index) =>  this.calculate_radius(elem, index));
        let gradientString = '';
        values.forEach((elem, i) => {
            gradientString += `${DefaultStyle.colorPalette.pieColors[i]} 0 ${elem}deg ${this.attrs.data.data.length - 1 === i ? '' : ', '}`
        });
        return gradientString;
    }

    calculate_radius(elem, index) {
            if (index === 0 ) {
                return (elem.value/100) * 360;
            }
            return this.calculate_radius(this.attrs.data.data[index-1], index-1) + (elem.value/100) * 360;
    }
}