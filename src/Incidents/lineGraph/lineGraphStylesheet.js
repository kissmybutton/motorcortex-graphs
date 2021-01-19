import jss, { createGenerateId } from 'jss';

export default function buildCSS(cssArgs) {
    const createGenerateId = () => {
        return rule => rule.key
    }
    jss.setup({createGenerateId});
    const styles = {
        "title-container": {
            background: "transparent",
            width: "70%",
            height: "10%",
            top: "10%",
            left: "8%",
            position: "absolute",
            display: "flex",
            "align-items": "center",
            "z-index": "1",
            "justify-content": "space-around",
        },
        "title-wrapper": {
            display: "flex",
            "flex-grow": "2",
            "flex-wrap": "nowrap",
            overflow: "hidden",
            "padding-left": "6px",
        },
        "letter-wrapper-title": {
            display: "flex",
            "flex-direction": "column",
            position: "relative",
            "font-size": "190%",
        },
        "graph-background": {
            left: "10%",
            top: "15%",
            width: "80%",
            height: "66%",
            position: "absolute",
            background: cssArgs.secondaryC,
        },
        "svg-container": {
            width: `76%`,
            height: `58%`,
            top: "19%",
            left: "12%",
            position: "relative",
            "z-index": "1",
            overflow: "visible"
        },
        "lines-container": {
            width: `100%`,
            height: `100%`,
            "min-height": "100%",
            "min-width": "100%",
            overflow: "visible"
        },
        datapoint: {
            r: "0.65%"
        },
        "dataStele-container": {
            width: `76%`,
            height: "58%",
            top: "19%",
            left: "12%",
            position: "absolute",
            display: "flex",
            "align-items": "center",
            "justify-content": "space-around",
            "z-index": "0",
        },
        "data-stele": {
            height: "100%",
            width: "1%",
            display: "flex",
            "flex-direction": "column-reverse",
            "justify-content": "space-between",
        },
        "stele-block": {
            width: "100%",
            height: "5px",
            opacity: "0.8",
            background: cssArgs.primaryC,
        },
        "graph-labels-container": {
            width: `76%`,
            height: "58%",
            top: "19%",
            left: "12%",
            position: "absolute",
            "z-index": "2",
        },
        "inner-label-container": {
            background: cssArgs.quaternaryC,
            display: "inline-block",
            opacity: "0.6",
            width: "10%",
            left: "50%",
            display: "flex",
            "justify-content": "center",
        },
        "inner-label": {
            "font-size": cssArgs.fontSizeInner,
            opacity: "1",
        },
        "x-labels-back-wrapper": {
            width: `76%`,
            height: "6%",
            top: "78%",
            left: "12%",
            position: "absolute",
            display: "flex",
            "justify-content": "flex-end",
        },
        "block-background": {
            width: "100%",
            height: "100%",
            background: cssArgs.accentC,
            position: "relative",
        },
        "x-labels-container": {
            background: "transparent",
            width: `76%`,
            height: "6%",
            top: "78%",
            left: "12%",
            position: "absolute",
            display: "flex",
            "align-items": "center",
            "z-index": "1",
            "justify-content": "space-around",
        },
        "label-container": {
            display: "flex",
            "flex-direction": "row",
            overflow: "hidden",
        },
        "letter-container": {
            overflow: "hidden",
            position: "relative",
        },
        "letter-wrapper-label": {
            "font-size": "100%",
            display: "flex",
            "flex-direction": "column",
            position: "relative",
        },
        fontColorOn: {
            color: cssArgs.fontC,
        },
        "space-char": {
            visibility: "hidden",
        },
        "line-segment": {
            // "stroke-dasharray": "100", 
            // "stroke-dashoffset": "0",
        },
        container: {
            width: "100%",
            height: "100%",
            // display: "flex",
            // background: cssArgs.backgroundC,
            background: "transparent",
            "font-family": cssArgs.fontFamily,
            "font-size": cssArgs.fontSizeTitle,
        }
    };

    // cssArgs.data.map( (datum) => {
    //     styles[`${datum.name}-bar`] = {
    //         "align-self": "flex-end",
    //         width: `${(100/cssArgs.data.length)}%`,
    //         margin: `0% ${(10/cssArgs.data.length)+1}%`,
    //         height: "100%",
    //         display: "flex",
    //     };
    //     // styles[`${datum.name}-bar`].height = `${(datum.value.toFixed(2)/cssArgs.maxPoint)*100}%`;

    // });
    const styleSheet = jss.createStyleSheet(styles).toString();

    return styleSheet;
}
