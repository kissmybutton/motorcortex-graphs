export default function buildCSS() {
    const cssArgs = arguments[0];

    let axisStyles = `
        .y-axis {
            width: 4px;
            height: 70%;
            left: 14%;
            top: 15%;
            background-color: ${cssArgs.tertiaryC};
            position: absolute;
        }
        
        .x-axis {
            width: 74%;
            height: 4px;
            top: 85%;
            left: 14%;
            background-color: ${cssArgs.tertiaryC};
            position: absolute;
        }
    `;
    
    let gridStyles = `
        .gridlines {
            width: 100%;
            height: calc(100% + 3px);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .gridLine {
            height: 3px;
            width: 100%;
            background-color: ${cssArgs.secondaryC};
            align-self: flex-end;
        }
    `;

    let barSizings = ``;
    let barFills = ``;
    cssArgs.data.map( (datum)=> {
        barSizings += `
            #${datum.name}bar {
                height: ${(datum.value.toFixed(2)/cssArgs.maxPoint)*100}%;
            }`;
        barFills += `
            .${datum.name}-bar-fill {
                height: 100%;
            }`;
    });
    
    let barStyles = `
        .graph {
            top: 0;
            left: 0;
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-around;
            overflow: hidden;
        }

        .bar-container{ 
            align-self: flex-end;
            width: ${(100/cssArgs.data.length)}%;
            margin: 0% ${(10/cssArgs.data.length)+1}%;
            height: 100%;
            display: flex;
        }

        .bar-fill {
            width: 100%;
            height: 100%;
            background-color: ${cssArgs.primaryC};
            align-self: center;
        }

        ${barSizings}
        ${barFills}
    `;

    let xLabels = `
        .x-labels-background {
            width: 100%;
            height: 100%;
            background-color: ${cssArgs.accentC};
            position: relative;
        }

        .x-labels-back-wrapper {
            width: 70%;
            height: 5%;
            top: 87%;
            left: 16%;
            position: absolute;
            display: flex;
            flex-direction: row-reverse;
        }

        .x-labels-container {
            font-family: ${cssArgs.fontFamily};
            background-color: transparent;
            width: 70%;
            height: 5%;
            top: 87%;
            left: 16%;
            position: absolute;
            display: flex;
            align-items: center;
            z-index: 1;
            justify-content: space-around;
        }


        .label-container {
            display: flex;
            flex-direction: row;
            overflow: hidden;
        }

        .letter-wrapper {
            font-size: ${cssArgs.fontSize};
            display: flex;
            flex-direction: column;
            position: relative;
        }
        
        .letter-container {
            overflow: hidden;
            position: relative;
        }
    `;
    
    let title = `
        .title-background {
            width: 100%;
            height: 100%;
            background-color: ${cssArgs.accentC};
            position: relative;
        }

        .title-back-wrapper {
            width: 70%;
            height: 5%;
            top: 8%;
            left: 16%;
            position: absolute;
            display: flex;
            flex-direction: row-reverse;
        }

        .title-container {
            font-family: ${cssArgs.fontFamily};
            background-color: transparent;
            width: 70%;
            height: 5%;
            top: 8%;
            left: 16%;
            position: absolute;
            display: flex;
            align-items: center;
            z-index: 1;
            justify-content: space-around;
        }

        .title-wrapper {
            display: flex;
            flex-grow: 2;
            flex-wrap: nowrap;
            overflow: hidden;
            padding-left: 6px;
        }

        .subtitle-wrapper {
            display: flex;
        }

        .subtitle-position-end {
            display: flex;
            flex-grow: 1;
            padding-right: 6px;
            flex-wrap: nowrap;
            overflow: hidden;
            justify-content: flex-end;
        }   

        .label-container {
            display: flex;
            flex-direction: row;
            overflow: hidden;
        }

        .letter-wrapper {
            font-size: ${cssArgs.fontSize};
            display: flex;
            flex-direction: column;
        }

        .letter-container {
            position: relative;
        }
    `;

    let shared = `
        .fontColorOn {
            color: ${cssArgs.fontC};
        }

        .space-char {
            visibility: hidden;
        }

        .accent-background {
            width: 100%;
            height: 100%;
            background-color: ${cssArgs.accentC};
            position: relative;
        }
    `;
    
    let mainStyleBlock = `
        .container {
            width: 100%;
            height: 100%;
            background-color: ${cssArgs.backgroundC};
            display: flex;
        }

        .graph-container {
            left: 16%;
            top: 17%;
            width: 70%;
            height: 63%;
            position: absolute;
        }

        ${title}
        ${axisStyles}
        ${gridStyles}
        ${barStyles}
        ${xLabels}
        ${shared}
    `;
    return mainStyleBlock;
}

