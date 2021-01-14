import jss, { createGenerateId } from 'jss';

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
        },
        title: {
            color: 'white',
           ' align-self': 'flex-start',
            top: '-1rem',
            position: 'relative'
        },
        piechart: { 
            display: 'block',
            position: 'absolute',
            width: 'calc(80% * 0.75)',
            height: '80%',
            'border-radius': '50%',
            'background-image': `conic-gradient(${cssArgs.radiusString})`
        } 

    }

    console.log(cssArgs.radiusSting);

    const styleSheet = jss.createStyleSheet(styles).toString();

    return styleSheet;
}