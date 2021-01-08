import MotorCortex from '@kissmybutton/motorcortex';
import MotorCortexGraph from "../dist/bundle.umd";
const MCGraphs = MotorCortex.loadPlugin(MotorCortexGraph);

import Player from "@kissmybutton/motorcortex-player";


const clip = new MotorCortex.HTMLClip({
    html: `<div class="container">
        <div id="effect"></div>
        <div id="htmlclip"></div>
        <div id="combo"></div>
        <div id="myclip"></div>
    </div>`,
    css: `
        .container{
            width: 600px,
            height: 400px
        }
        .container>div{
            width: 50%;
            height: 50%;
        }
    `,
    host: document.getElementById('clip'),
    containerParams: {
        width: '1024px',
        height: '768px'
    }
});



const newGraph = new MCGraphs.ProgressBar({
    // here goes your attrs
    data: require('./data.json'),
    timings: {
        intro: 0,
        static: 0,
        outro: 0,
    },
    palette: {
        primary: "",
        secondary: "", 
        tertiary: "",
        font: "",
        accent: "", 
        background: "#D3CDCD", 
    },
    font: {
        url: 'https://fonts.googleapis.com/css2?family=Righteous&display=swap',
        fontFamily: 'Righteous, cursive',
        size: '1.2rem'
    }
}, {
    selector: '#htmlclip',
    containerParams: {
        width: '1024px',
        height: '768px'
    },
});

clip.addIncident(newGraph, 0);

const player = new Player({clip});