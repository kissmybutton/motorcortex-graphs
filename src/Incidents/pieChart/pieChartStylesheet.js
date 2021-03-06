import jss, { createGenerateId } from "jss";
import * as DefaultStyle from "../../shared/colorPalette";

export default function buildCSS(cssArgs) {
  const createGenerateId = () => {
    return (rule) => rule.key;
  };
  jss.setup({ createGenerateId });

  const styles = {
    "container-pieChart": {
      opacity: 1,
      "background-color": "transparent",
      width: "100%",
      height: "100%",
      display: "flex",
      "align-items": "center",
      "flex-direction": "column",
      "font-family": `${
        cssArgs.font?.fontFamily
          ? cssArgs.font.fontFamily
          : "Staatliches, cursive"
      }`,
      "font-size": `${cssArgs.font?.size ? cssArgs.font.size : "1.6rem"}`,
      color: cssArgs.palette.font
        ? cssArgs.palette.font
        : DefaultStyle.colorPalette.font,
    },
    title: {
      top: "-1rem",
      position: "relative",
      display: "flex",
      "justify-content": "center",
      "align-items": "center",
      "flex:direction": "row",
      overflow: "hidden",
    },
    columns: {
      width: "100%",
      height: "100%",
      display: "flex",
    },
    "col-1": {
      width: "65%",
      height: "100%",
      display: "flex",
      "justify-content": "center",
      "align-items": "center",
    },
    "col-2": {
      width: "35%",
      height: "100%",
      display: "flex",
      "justify-content": "center",
      "align-items": "center",
    },
    piechart: {
      display: "block",
      width: "95%",
      height: "95%",
      "border-radius": "50%",
      "background-image": `conic-gradient(${cssArgs.radiusString})`,
      "margin-left": "2rem",
    },
    legend: {
      display: "flex",
      "flex-direction": "column",
      padding: "1rem",
      "max-width": "75%",
      "min-width": "50%",
      background: cssArgs.palette.primary
        ? cssArgs.palette.primary
        : "rgba(0,0,0, 0.2)",
      position: "relative",
      top: "22.5%",
      overflow: "hidden",
    },
    "legend-row": {
      display: "flex",
      "flex-direction": "row",
      "align-items": "center",
      "align-self": "flex-start",
    },
    "legend-text": {
      " white-space": "nowrap",
    },
    space: {
      "min-width": cssArgs.font?.size
        ? `calc(${cssArgs.font.size} * 0.5)`
        : "0.8rem",
    },
    char: {
      position: "relative",
    },
  };

  cssArgs.data.data.forEach((elem, i) => {
    styles["meter-" + i] = {
      background: elem.color ? elem.color : generateColor(i),
      width: "1rem",
      height: "1rem",
      display: "block",
      "margin-right": "0.5rem",
      "margin-bottom": "0.25rem",
    };
  });

  const styleSheet = jss.createStyleSheet(styles).toString();

  return styleSheet;
}

function generateColor(index) {
  if (index > DefaultStyle.colorPalette.dataColors.length - 1) {
    return DefaultStyle.colorPalette.dataColors[
      Math.floor(
        Math.random() * Math.floor(DefaultStyle.colorPalette.dataColors.length)
      )
    ];
  }
  return DefaultStyle.colorPalette.dataColors[index];
}
