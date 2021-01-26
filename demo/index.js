import MotorCortex from '@kissmybutton/motorcortex';
import Player from "@kissmybutton/motorcortex-player";
import MotorCortexGraph from "../dist/bundle.umd";
import * as barChartData from './data/barChartData.json';
import * as progressBarData from './data/progressBarData.json';
import * as lineGraphData from './data/lineGraphData.json';
import * as pieChartData from './data/pieChartData.json';


const MCGraphs = MotorCortex.loadPlugin(MotorCortexGraph);

const clip = new MotorCortex.HTMLClip({
    html: `<div class="container">
        <div id="htmlclip"></div>
        <div id="html-hoverclip"></div>
    </div>`,
    css: `
        .container{
            width: 1024px;
            height: 768px;
            background: #D3CDCD;
        }
        .container>div{
            width: 50%;
            height: 50%;
            position: absolute;
        }
        #htmlclip {
            z-index: 0;
        }   
        #html-hoverclip {
            z-index: 1;
        }
    `,
    host: document.getElementById('clip'),
    containerParams: {
        width: '1024px',
        height: '768px'
    }
});

const barChart = new MCGraphs.BarChartSimple({
    data: barChartData,  
    timings: {
        intro: 2000,
        static: 1500,
        outro: 2000,
    },
    palette: {
        background: "#D3CDCD"
    },
}, {
    selector: '#htmlclip',
    containerParams: {
        width: '1024px',
        height: '768px'
    }
});
clip.addIncident(barChart, 0);

const lineGraph = new MCGraphs.LineGraph({
    data: lineGraphData, 
    trace: { 
        toggle: false,
        toggle: true,
        scale: 1.45,
    },
    legend: true,
    timings: {
        intro: 7000,
        static: 1000,
        outro: 7000,
    },
    font: {
        size: '1.7rem'
    }
}, {
    selector: '#html-hoverclip',
    containerParams: {
        width: '1024px',
        height: '768px'
    }
});
clip.addIncident(lineGraph, 5500);

const pieChart = new MCGraphs.PieChart({
    data: pieChartData,
    timings: {
        intro: 2000,
        static: 1500,
        outro: 2000,
    },
    font: {
        size: '1.6rem'
    }
},{
    selector: '#htmlclip',
    containerParams: {
        width: '1024px',
        height: '768px'
    },
});
clip.addIncident(pieChart, 20500);

const progressBar = new MCGraphs.ProgressBar({
    data: require('./data/progressBarData.json'),
    timings: {
        intro: 2000,
        static: 1500,
        outro: 2000,
    },
    palette: {
        background: "#D3CDCD"
    },
    font: {
        size: '1.6rem'
    },
}, {
    selector: '#htmlclip',
    containerParams: {
        width: '1024px',
        height: '768px'
    },
});
clip.addIncident(progressBar, 26000);

clip.play();
const player = new Player({clip, scaleToFit: true, pointerEvents: true});
