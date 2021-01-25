import jss, { createGenerateId } from 'jss';
import * as DefaultStyle from '../../Defaults/colorPalette';


export default function buildCSS(cssArgs) {
    const createGenerateId = () => {
        return rule => rule.key
    }
    jss.setup({createGenerateId});

    const styles = {
        container: {
            height: "100%",
            background: cssArgs.palette.background ? cssArgs.palette.background : DefaultStyle.colorPalette.background,
            display: "flex",
            color: cssArgs.palette.font ? cssArgs.palette.font : DefaultStyle.colorPalette.font,
            "font-family": cssArgs.font.fontFamily? cssArgs.font.fontFamily : "'Staatliches', cursive",
        },
        row: {
            display: "flex",
            "flex-direction": "row",
            position: "absolute",
            left: "20%",
            "align-items": "center",
            height: `${60/cssArgs.barCount}%`,
            width: "100%",
        },
        "container-bar": {
            position: "absolute",
            height: "100%",
            background: cssArgs.palette.secondary ? cssArgs.palette.secondary : DefaultStyle.colorPalette.darkGray,
            "border-radius": "4rem",
            width: "60%",
            "box-shadow": "2px 2px 5px gray",
            border: `0.2rem solid ${cssArgs.palette.accent ? cssArgs.palette.accent : DefaultStyle.colorPalette.accent}`,
            "z-index": "1",
            overflow: "hidden",
        },
        "inner-bar": {
            position: "relative",
            background: cssArgs.palette.primary ? cssArgs.palette.primary : DefaultStyle.colorPalette.lightGray,
            height: "102%",
            "border-radius": "4rem",
            bottom: "-1px",
            "z-index": "2px",
            top: "-0.5px",  
        },
        "text": {
            position: "relative",
            "z-index": "0",
            opacity: "1",
            left: "62%",
            "font-size": cssArgs.font.size ? cssArgs.font.size : '1.2rem',
        },
        "bar-header": {
            position: "absolute",
            left: "-21%",
            "text-align": "right",
            width: "20%",
            "font-size": cssArgs.font.size ? cssArgs.font.size : '1.2rem',
        },
    };

    const avg = cssArgs.barSum / cssArgs.barCount;
    cssArgs.data.forEach( (elem, index) => {
        styles[`row-${index}`] = {
            bottom: `${50 + (avg - index) * 100/cssArgs.barCount - 60/cssArgs.barCount * 2.15}%`,
        }
        styles[`inner-bar-${index}`] = {
            width: `${elem.value.toFixed(2)}%`,
        }
    });
    const styleSheet = jss.createStyleSheet(styles).toString();
    
    return styleSheet;
}
