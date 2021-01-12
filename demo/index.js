import MotorCortex from '@kissmybutton/motorcortex';
import Player from "@kissmybutton/motorcortex-player";
import MotorCortexGraph from "../dist/bundle.umd";
import * as barChartData from './data/barChartData.json';
import * as progressBarData from './data/progressBarData.json';

const MCGraphs = MotorCortex.loadPlugin(MotorCortexGraph);


const clip = new MotorCortex.HTMLClip({
    html: `<div class="container">
        <div id="htmlclip"></div>
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

const barChart1 = new MCGraphs.BarChartSimple({
    data: barChartData,  
    timings: {
        intro: 2000,
        static: 1500,
        outtro: 2000,
    },
    palette: {
        background: "#D3CDCD", 
    },
}, {
    selector: '#htmlclip',
    containerParams: {
        width: '1024px', 
        height: '768px'
    }
});
clip.addIncident(barChart1, 0);

const progressBar = new MCGraphs.ProgressBar({
    data: require('./data/progressBarData.json'),
    timings: {
        intro: 2000,
        static: 1500,
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
clip.addIncident(progressBar, 5500);


clip.play();
const player = new Player({clip, timeFormat: "ms", pointerEvents: true});
