import MotorCortex from '@kissmybutton/motorcortex';
import Player from "@kissmybutton/motorcortex-player";
import MotorCortexGraph from "../dist/bundle.umd";
const MCGraphs = MotorCortex.loadPlugin(MotorCortexGraph);

// ***PROGRESS BAR***

// const clip = new MotorCortex.HTMLClip({
//     html: `<div class="container">
//         <div id="htmlclip"></div>
//     </div>`,
//     css: `
//         .container{
//             width: 1024px;
//             height: 768px;
//         }
//     `,
//     host: document.getElementById('clip'),
//     containerParams: {
//         width: '1200px',
//         height: '900px'
//     }
// });



// const newGraph = new MCGraphs.ProgressBar({
//     // here goes your attrs
//     data: require('./data.json'),
//     timings: {
//         intro: 1000,
//         static: 1000,
//         outro: 1000,
//     },
//     palette: {
//         primary: "",
//         secondary: "", 
//         tertiary: "",
//         font: "",
//         accent: "", 
//         background: "#D3CDCD", 
//     },
//     font: {
//         url: 'https://fonts.googleapis.com/css2?family=Righteous&display=swap',
//         fontFamily: 'Righteous, cursive',
//         size: '1.2rem'
//     },
//     options: {
//         hidePercentage: true,
//     }
// }, {
//     selector: '#htmlclip',
//     containerParams: {
//         width: '1200px',
//         height: '900px'
//     },
// });

// clip.addIncident(newGraph, 0);

// const player = new Player({clip});


// ***BARCHART***

// import * as data from './barChartData.json';



// const clip = new MotorCortex.HTMLClip({
//     html: `
//         <div class="container">
//             <div id="barGraph"></div>
//         </div>`,
//     css: `
//         .container{
//             width: 960px,
//             height: 720px,
//         }
//     `,
//     host: document.getElementById('clip'),
//     containerParams: {
//         width: '960px',
//         height: '720px'
//     }
// });



// const newGraph = new MCGraphs.BarChartSimple({
//     data: data,  
//     palette: {
//         // primary: "",
//         // secondary: "", 
//         // tertiary: "",
//         // font: "", 
//         // accent: "", //default yellow COMMON
//         // background: "#D3CDCD", //default transparent COMMON
//     },
//     grid: true,
//     font: {
//         // url: "https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@200&display=swap",
//         // fontFamily: "'Source Code Pro', monospace",
//         // size: "",
//     },
//     maxVal: 100, // if its 100 it simulates %.
//     timings: {
//         intro: 2000, // if no intro -> appears with no animation, defaults to 0
//         outtro: 2000, // if no outtro -> stays static, defaults to 0
//         static: 0, // defaults to 1000
//     },
// }, {
//     selector: '#barGraph',
//     containerParams: {
//         width: '960px',
//         height: '720px'
//     }
// });


// clip.addIncident(newGraph, 0);
// clip.play();
// const player = new Player({clip, timeFormat: "ms", pointerEvents: true});
