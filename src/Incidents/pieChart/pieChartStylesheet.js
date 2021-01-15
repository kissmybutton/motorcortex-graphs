import jss, { createGenerateId } from 'jss';
import * as DefaultStyle from '../../Defaults/colorPalette';

export default function buildCSS(cssArgs) {
    const createGenerateId = () => {
        return rule => rule.key
    }
    jss.setup({createGenerateId});

    const styles = {
        container: {
            opcaity: 1,
            "background-color": "transparent",
            width: "100%",
            height: "100%",
            display: "flex",
            "justify-content": "center", 
            "align-items": "center",
            "flex:direction": "column",
            "font-family": `${cssArgs.font?.fontFamily? cssArgs.font.fontFamily : 'Staatliches, cursive'}`,
            "font-size": `${cssArgs.font?.size ? cssArgs.font.size : '1.6rem'}`,
            color: cssArgs.palette.font ? cssArgs.palette.font : DefaultStyle.colorPalette.font,
        },
        title: {
           'align-self': 'flex-start',
            top: '-1rem',
            position: 'relative',
            display: 'flex',
            "justify-content": "center", 
            "align-items": "center",
            "flex:direction": "row",
        },
        piechart: { 
            display: 'block',
            position: 'absolute',
            width: 'calc(80% * 0.75)',
            height: '80%',
            'border-radius': '50%',
            'background-image': `conic-gradient(${cssArgs.radiusString})`
        },
        space: {
            "min-width": cssArgs.font?.size ? `calc(${cssArgs.font.size} * 0.5)` : '0.8rem',
        },
        char: {
            position: 'relative'
        }
    };
    
    [...cssArgs.data.title].forEach((char, i) => {
        styles['char-'+i] = {
            position: 'relative'
        }
    });

    const styleSheet = jss.createStyleSheet(styles).toString();

    return styleSheet;
}