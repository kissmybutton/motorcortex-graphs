import MotorCortex from '@kissmybutton/motorcortex';
import Player from "@kissmybutton/motorcortex-player";
import MotorCortexGraph from "../dist/bundle.umd";
const MCGraphs = MotorCortex.loadPlugin(MotorCortexGraph);
import * as data from './data/barChartData.json';



const clip = new MotorCortex.HTMLClip({
    html: `
        <div class="container">
            <div id="barGraph"></div>
        </div>`,
    css: `
        .container{
            width: 960px,
            height: 720px,
        }
    `,
    host: document.getElementById('clip'),
    containerParams: {
        width: '960px',
        height: '720px'
    }
});



const newGraph = new MCGraphs.BarChartSimple({
    data: data,
    backgroundColor: "#bdbdbd",
    axisColor: "black",
    barColor: "#5c5c5c",
    grid: true,
    introDur: 1500,
}, {
    selector: '#barGraph',
});


clip.addIncident(newGraph, 0);
clip.play();
const player = new Player({clip});