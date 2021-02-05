import MotorCortex from '@kissmybutton/motorcortex';
import AnimePlugin from '@kissmybutton/motorcortex-anime';
const Anime = MotorCortex.loadPlugin(AnimePlugin);

import { colorPalette } from '../../shared/colorPalette';
import { opacityControl } from '../../shared/opacityControl';
import buildCSS  from './progressMeterStyleSheet'; 
import config from '../../incident_config';
import { svgPresets } from '../../shared/presetsExports';



/**
 * BAR CHART SIMPLE GRAPH: MotorCortex Implementation
 */
export default class ProgressMeter extends MotorCortex.HTMLClip{
    // Building HTML tree for incident
    get html(){
        this.buildVars();
        
        // Building Inner SVG
        let initialSVG = svgPresets[this.innerSVG];
        let insertPos = initialSVG.indexOf('<svg ') + 5;
        let customTrackClass = `class="svg-preset svg-preset-track ${this.innerSVG}"`;
        let svgTrack = [initialSVG.slice(0, insertPos), customTrackClass, initialSVG.slice(insertPos)].join('');
        let customPathClass = `class="svg-preset svg-preset-path ${this.innerSVG}"`;
        let svgPath = [initialSVG.slice(0, insertPos), customPathClass, initialSVG.slice(insertPos)].join('');

        let innerImage = (this.innerSVG === null) ? 
            null :
            (
                <div class="inner-svg-container">
                    <div class="track-container">
                        {svgTrack}
                    </div>
                    <div class="path-container">
                        {svgPath}
                    </div>
                </div>
            );

        // Bulding SVG for meter circle
        let svgViewBox = (
            <div class="svg-container">
                <svg 
                    class="svg-viewbox" 
                    viewbox={`0 0 ${this.boxSize} ${this.boxSize}`}> 
                    <circle 
                        class="meter-track meter-general" 
                        cx={`${this.boxSize * 0.5}`} cy={`${this.boxSize * 0.5}`} 
                        stroke-width={`${this.boxSize * 0.05}`}
                        pathLength={10000}
                        >
                    </circle>
                    <circle 
                        class="meter-path meter-general" 
                        cx={`${this.boxSize * 0.5}`} cy={`${this.boxSize * 0.5}`} 
                        stroke-width={`${this.boxSize * 0.05}`}
                        pathLength={10000}
                        >
                    </circle>
                </svg>
                {innerImage}
            </div>
        );

        // Building Meter Indicator
        let indicatorClass = (this.innerSVG === null) ? 
            "indicator-center" :
            "indicator-label";

        console.log(indicatorClass)

        let indicator = (
            <div class={indicatorClass}>
                {`${this.data.value}${this.data.unit}`}
            </div>
        );

        // Complete HTML tree construction
        let progressMeterHTML = (
            <div class="container-progressMeter">
                {svgViewBox}
                {indicator}
            </div>
        );
        
        return progressMeterHTML;
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
        // opacityControl(this, `.container-progressMeter`);

        
        // INTRO CONTROL
        if (this.attrs.timings.intro) {
            const introGroup = new MotorCortex.Group();
    


            this.addIncident(introGroup, this.introDur * 0);
        }

        // OUTRO CONTROL
        if (this.attrs.timings.outro) {
            const outroGroup = new MotorCortex.Group();



            this.addIncident(outroGroup, 0 + this.introDur + this.staticDur);
        }

        // STATIC DURATION CONTROL
        const staticIncident = new Anime.Anime(
            { animatedAttrs: {} },
            {
                selector: ".container-progressMeter",
                duration: this.staticDur,
            }
        );
        this.addIncident(staticIncident, this.introDur);
    }

    buildVars() {
        this.data = this.attrs.data;
        this.innerSVG = this.data.innerImage ? this.data.innerImage : null;
        this.originalDims = config.progressMeter.originalDims;
        this.boxSize = (this.originalDims.width < this.originalDims.height) ? 
            this.originalDims.width * 0.65 :
            this.originalDims.height * 0.65;

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
        this.fontSize = this.attrs.font.size ? 
            this.attrs.font.size : "1.7rem";
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