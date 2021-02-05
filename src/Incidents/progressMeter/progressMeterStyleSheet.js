import jss, { createGenerateId } from 'jss';

export default function buildCSS(progressMeter) {
    const createGenerateId = () => {
        return rule => rule.key
    }
    jss.setup({createGenerateId});

    const styles = { 
        "container-progressMeter": {
            width: "100%",
            height: "100%",
            display: "flex",
            "justify-content": "center",
            "align-items": "center",
            "flex-direction": "column",
            "font-family": progressMeter.fontFamily,
            "font-size": progressMeter.fontSize,
        },
        "svg-container": {
            width: `${progressMeter.boxSize}px`,
            height: `${progressMeter.boxSize}px`,
            position: "relative",
        },
        "svg-viewbox": {
            width: `100%`,
            height: `100%`,
        },
        "meter-general": {
            "stroke-width": progressMeter.boxSize * 0.06,
            r: progressMeter.boxSize * 0.46, 
            "stroke-linecap": "round",
            "fill-opacity": 0,
            "transform-origin": "center",
            transform: "rotate(-90deg)",
        },
        "meter-track": {
            stroke: progressMeter.accentC,
            opacity: 0.3,
            "stroke-dasharray": (progressMeter.introDur > 0) ? 0 : 10000,
            "stroke-dashoffset": 0,
        },
        "meter-path": {
            stroke: progressMeter.accentC,
            "stroke-dasharray": (progressMeter.introDur > 0) ? 0 : 10000,
            "stroke-dashoffset": 10000 - (10000 * progressMeter.data.value / 100),
        },
        "indicator-general": {
            width: `${progressMeter.boxSize}px`,
            display: "flex",
            "justify-content": "center",
            "align-items": "center",
            color: progressMeter.fontC
        },
        "indicator-label": {
            "align-items": "center",
        },
        "indicator-center": {
            position: "absolute",
            "font-size": "180%",
        },
        "inner-svg-container": {
            width: `100%`,
            height: `100%`,
            position: "absolute",
            top: 0,
            left: 0,
        },
        "track-container": {
            width: `100%`,
            height: `100%`,
            position: "absolute",
            top: 0,
            left: 0,    
            display: "flex",
            "justify-content": "center",
            "align-items": "center",
        },
        "path-container": {
            width: `100%`,
            height: `100%`,
            position: "absolute",
            top: 0,
            left: 0,
            display: "flex",
            "justify-content": "center",
            "align-items": "center",
        },
        "svg-preset": {
            width: `${progressMeter.boxSize * 0.5}px`,
            height: `${progressMeter.boxSize * 0.5}px`,
            fill: progressMeter.accentC,
        },
        "svg-preset-track": {
            opacity: 0.3,
        },
        "svg-preset-path": {
           
        },
        
    };

    const styleSheet = jss.createStyleSheet(styles).toString();

    return styleSheet;
}
