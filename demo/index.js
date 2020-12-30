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
        width: '1200px',
        height: '900px'
    }
});



const newGraph = new MCGraphs.ProgressBar({
    // here goes your attrs
    data: require('./data.json'),
    duration: {
        slideInDuration: 2000,
        expandBaseDuration: 1500,
        expandBarDuration: 2000,
        showTextDuration: 500,
        staticGraphDuration: 4000,
        collapseDuration: 2000
    },

}, {
    selector: '#htmlclip'
});

clip.addIncident(newGraph, 0);

const player = new Player({clip});