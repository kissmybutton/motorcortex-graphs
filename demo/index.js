import MotorCortex from '@kissmybutton/motorcortex';
import Player from "@kissmybutton/motorcortex-player";
import MotorCortexGraph from "../dist/bundle.umd";
import * as barChartData from './data/barChartData.json';
import * as lineGraphData from './data/lineGraphData.json';
import * as pieChartData from './data/pieChartData.json';
import * as progressBarData from './data/progressBarData.json';
import * as progressMeterData from './data/progressMeterData.json';

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

// const barChart = new MCGraphs.BarChartSimple({
//     data: barChartData,  
//     timings: {
//         intro: 2000,
//         static: 1500,
//         outro: 2000,
//     },
//     palette: {
//         background: "#D3CDCD"
//     },
// }, {
//     selector: '#htmlclip',
//     containerParams: {
//         width: '1024px',
//         height: '768px'
//     }
// });
// // clip.addIncident(barChart, 0);

// const lineGraph = new MCGraphs.LineGraph({
//     data: lineGraphData, 
//     trace: { 
//         toggle: false,
//         toggle: true,
//         scale: 1.45,
//     },
//     legend: true,
//     timings: {
//         intro: 7000,
//         static: 1000,
//         outro: 7000,
//     },
//     font: {
//         size: '1.7rem'
//     }
// }, {
//     selector: '#html-hoverclip',
//     containerParams: {
//         width: '1024px',
//         height: '768px'
//     }
// });
// // clip.addIncident(lineGraph, 5500);

// const pieChart = new MCGraphs.PieChart({
//     data: pieChartData,
//     timings: {
//         intro: 2000,
//         static: 1500,
//         outro: 2000,
//     },
//     font: {
//         size: '1.6rem'
//     }
// },{
//     selector: '#htmlclip',
//     containerParams: {
//         width: '1024px',
//         height: '768px'
//     },
// });
// // clip.addIncident(pieChart, 20500);

// const progressBar = new MCGraphs.ProgressBar({
//     data: progressBarData,
//     timings: {
//         intro: 2000,
//         static: 1500,
//         outro: 2000,
//     },
//     palette: {
//         background: "#D3CDCD"
//     },
//     font: {
//         size: '1.6rem'
//     },
// }, {
//     selector: '#htmlclip',
//     containerParams: {
//         width: '1024px',
//         height: '768px'
//     },
// });
// // clip.addIncident(progressBar, 26000);

const progressMeter = new MCGraphs.ProgressMeter({
    data: progressMeterData,
	innerImage: `<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 502.2" width="2500" height="2051"><style>.st0{fill:#c6c6c6}</style><ellipse class="st0" cx="283.5" cy="422.2" rx="259" ry="80"/><path id="bird" d="M210.3 0C104.4.8-12.3 85.3 1.1 211.1c4.3 40.4 18.5 63.7 52.2 79 36.3 16.5 57 54.6 50.4 113-9.9 4.9-17.4 11-19.1 20 7.5-.2 14.9-.3 22.6 4.3 20.3 12.4 31.3 27.4 43 51.7 1.7 3.6 8.2 2.8 8.3-3.1.2-8.5-1.9-17.5-5.2-26.9-3-8.3 3.1-8 6.9-6.1 6.4 3.1 16.3 9.4 30.4 13.1 5.4 1.4 6-3.9 5.2-7-1.9-7.5-11-10.9-24.5-19.2-4.8-3-.9-9.7 5.2-8.4l20.2 2.4c3.4.8 4.6-6.1.9-7.9-14.2-6.8-28.9-10.1-53.9-7.8-11.6-29.3-29.8-61.6-15.7-81.7 12.6-17.9 31.2-20.7 39.1 43.5-5 3.1-11.2 5-11.3 13 7.2-2.8 11.2-1.4 14.8 0 17.9 7 35.5 21.8 53 37.3 3.7 3.3 8.4-1.7 7-6-2.1-6.5-8.1-10.7-14.8-20-3.2-4.5 5-7 10.9-6.9 13.8.4 22.9 8.3 35.2 11.2 4.5 1.1 9.7-2 6.9-6.9-3.5-6.1-13-9.1-19.2-13.4-4.4-3-3-7.1 2.7-6.6 3.9.4 8.5 2.3 13.9 1.8 9.9-.9 7.7-7.2-.9-9.6-19-5.3-39.9-6.3-61.7-5.2-43.8-8.4-31.6-84.9 0-90.4 29.6-5.1 63-13.3 99.9-32.2 32.7-5.4 64.8-12.4 92.9-33.9 48.1-14.5 111.9 16.1 204.2 149.7 3.9 5.7 15.8 9.9 9.5-6.4-15.9-41.1-68.2-93.3-92.1-132.1-24.6-39.8-14.3-61.2-40-91.2-21.3-25-47.5-25.8-77.3-17.4-23.5 6.6-39.2-7.1-53-31.3C318.4 22.2 265.8-.4 210.3 0zm235.4 137.7c6.1 0 11.1 4.9 11.1 11s-5 11.1-11.1 11.1-11-5-11-11.1 4.9-11 11-11z"/></svg>`,
	// innerImage: `battery`,
    timings: {
        intro: 3000,
        static: 1000,
        outro: 3000,
        // static: 0,
    },
    palette: {
        background: "#D3CDCD"
    },
    font: {
        size: '8rem'
    },
}, {
    selector: '#htmlclip',
    containerParams: {
        width: '1024px',
        height: '768px'
    },
});

clip.addIncident(progressMeter, 0);
// clip.addIncident(progressMeter, 31500);

clip.play();
const player = new Player({clip, timeFormat: 'ms', scaleToFit: true, pointerEvents: true});
