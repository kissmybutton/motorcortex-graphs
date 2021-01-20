import MotorCortex from '@kissmybutton/motorcortex';
import Player from "@kissmybutton/motorcortex-player";
import MotorCortexGraph from "../dist/bundle.umd";
import * as barChartData from './data/barChartData.json';

const MCGraphs = MotorCortex.loadPlugin(MotorCortexGraph);

const clip = new MotorCortex.HTMLClip({
    html: `<div class="container">
        <div id="htmlclip"></div>
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
}, {
    selector: '#htmlclip',
    containerParams: {
        width: '1024px',
        height: '768px'
    },
});
clip.addIncident(progressBar, 5500);

const pieChart = new MCGraphs.PieChart({
    data: require('./data/pieChartData.json'),
    timings: {
        intro: 2000,
        static: 1500,
        outro: 2000
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

clip.addIncident(pieChart, 11000);



const player = new Player({clip, timeFormat: "ms", pointerEvents: true});
