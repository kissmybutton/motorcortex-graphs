/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 573:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(444)):0}(this,(function(e){"use strict";function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var r=function(e){return document.querySelectorAll(e)},c=function(e){return document.getElementById(e)},p=function(e){return document.getElementsByTagName(e)},d=function(e){return document.createElement(e)},u=function(){var e;return(e=document).addEventListener.apply(e,arguments)},m=function(){var e;return(e=document).removeEventListener.apply(e,arguments)},h=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];function o(e){return"number"==typeof e&&isFinite(e)}var s=new RegExp("^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)","gi"),i=null,a=null;if(Object.prototype.hasOwnProperty.call(e,"width")){var l=e.width.match(s)[0],r=e.width.substring(l.length);i=!o(Number(l))||"%"!==r&&"px"!==r?null:{number:Number(l),unit:r}}if(Object.prototype.hasOwnProperty.call(e,"height")){var c=e.height.match(s)[0],p=e.height.substring(c.length);a=!o(Number(c))||"%"!==p&&"px"!==p?null:{number:Number(c),unit:p}}var d=1,u=1;null!==i&&"px"===i.unit&&i.number!==t.width&&(d=t.width/i.number),null!==a&&"px"===a.unit&&a.number!==t.height&&(u=t.height/a.number);var m=1;m=n?u>d?u:d:u<=d?u:d;var h={};if(null!==i){var g;g="px"===i.unit?i.number*m:i.number/100*t.width*m;var v=t.width-g;h.left=v/2}if(null!==i){var f;f="px"===a.unit?a.number*m:a.number/100*t.height*m;var b=t.height-f;h.top=b/2}return{scale:m,position:h}},g=function(){var e=(new Date).getTime();return"xxxxxxxx-xxxx".replace(/[xy]/g,(function(t){var n=(e+16*Math.random())%16|0;e=Math.floor(e/16);var o=Math.random()>.5,s=("x"==t?n:3&n|8).toString(16);return o?s.toUpperCase():s}))};var v=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){var t=e.exports={};t.playSVG='\n  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20">\n    <path fill="#999" fill-rule="nonzero" d="M16.224 8.515L2.582.245A1.7 1.7 0 0 0 0 1.702V18.24a1.7 1.7 0 0 0 2.582 1.455l13.642-8.27a1.7 1.7 0 0 0 0-2.91z"/>\n</svg>\n\n',t.dcSVG='\n  <svg class="svg" style="transform:scale(0.55)" version="1.0" xmlns="http://www.w3.org/2000/svg"\n width="1705.000000pt" height="1903.000000pt" viewBox="0 0 1705.000000 1903.000000"\n preserveAspectRatio="xMidYMid meet">\n<metadata>\nCreated by potrace 1.15, written by Peter Selinger 2001-2017\n</metadata>\n<g transform="translate(0.000000,1903.000000) scale(0.100000,-0.100000)"\nfill="#000000" stroke="none">\n<path d="M0 9515 l0 -9515 1583 0 1582 0 4430 4655 c2437 2561 4457 4687 4490\n4726 33 38 1164 1227 2513 2642 l2452 2572 0 2192 c0 1206 -2 2193 -4 2193 -3\n0 -1597 -1652 -3542 -3671 l-3538 -3671 -31 35 c-16 20 -1497 1683 -3290 3696\nl-3260 3661 -1692 0 -1693 0 0 -9515z m5504 2412 c1253 -1413 2279 -2574 2282\n-2580 3 -9 -3274 -3438 -4597 -4811 -5 -6 -9 1968 -9 4999 l0 5010 24 -25 c13\n-14 1048 -1181 2300 -2593z"/>\n<path d="M13924 7584 c-34 -17 -2029 -2158 -2029 -2178 0 -15 5121 -5400 5141\n-5404 12 -3 14 295 14 2241 l0 2245 -1478 1543 c-813 849 -1490 1550 -1505\n1557 -38 16 -105 15 -143 -4z"/>\n</g>\n</svg>\n',t.pauseSVG='\n  <svg class="svg" style="transform:scale(1.5)" width="100%" height="100%" viewBox="0 0 36 36" >\n    <path id="pause-icon" data-state="playing" d="M11,10 L17,10 17,26 11,26 M20,10 L26,10 26,26 20,26" />\n  </svg>\n',t.replaySVG='\n  <svg class="svg" width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">\n    <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>\n    <g><g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">\n      <path d="M5356.3,4203.8c-1247.8-153.1-2324.2-811.3-3000.7-1839.7c-379.4-578.2-596.5-1209-660.5-1933.4l-27.4-294.8H883.9c-431.9,0-783.9-6.9-783.9-18.3c0-9.2,477.6-493.7,1062.7-1078.7l1062.7-1062.7L3288.1-961.1C3873.1-376,4350.8,108.5,4350.8,117.6c0,11.4-356.5,18.3-790.7,18.3h-793l18.3,189.7C2831,876.3,2991,1338,3288.1,1779.1C4122.3,3026.9,5706,3472.5,7065.8,2841.8C7639.4,2578.9,8197,2035,8487.3,1461.4C8581,1274,8709,896.9,8754.7,666.1c48-246.8,54.8-811.3,9.1-1055.8C8567.3-1491.3,7788-2394,6720.7-2750.5c-315.4-107.4-541.6-139.4-941.6-139.4c-287.9,0-415.9,11.4-598.8,50.3c-523.3,112-973.6,335.9-1371.2,681c-75.4,68.6-148.5,123.4-160,123.4c-9.1,0-187.4-169.1-393.1-374.8c-434.2-434.2-420.5-363.4-105.1-628.5c852.4-710.7,1972.3-1055.8,3046.4-937c1627.2,176,2977.8,1257,3489.8,2790.4c457.1,1368.9,169.1,2843-777,3969.7C8322.7,3484,7417.8,4000.4,6503.6,4160.4C6197.4,4213,5619.2,4235.8,5356.3,4203.8z"/>\n      <path d="M4990.7,124.5c0-1503.8,4.6-1794,32-1778c16,9.1,505.1,413.6,1085.6,895.8C7113.8,78.8,7161.8,122.2,7122.9,161c-80,75.4-2109.4,1757.5-2120.8,1757.5C4995.3,1918.5,4990.7,1111.8,4990.7,124.5z"/>\n    </g></g>\n  </svg>\n',t.volumeSVG='\n  <svg class="svg" width="100%" height="100%" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n   viewBox="0 0 286.374 286.374" enable-background="new 0 0 286.374 286.374" xml:space="preserve">\n    <g id="Volume_2">\n      <path style="fill-rule:evenodd;clip-rule:evenodd;" d="M233.636,26.767l-33.372,28.5c25.659,21.07,42.006,52.616,42.006,87.92\n        c0,35.305-16.347,66.851-42.006,87.921l33.372,28.499c32.324-28.869,52.738-70.268,52.738-116.421\n        C286.374,97.034,265.96,55.635,233.636,26.767z M177.737,74.513l-34.69,29.64c15.14,6.818,27.19,21.681,27.19,39.034\n        s-12.05,32.216-27.19,39.034l34.69,29.64c21.294-15.717,36.051-40.586,36.051-68.674C213.788,115.099,199.03,90.23,177.737,74.513z\n         M108.672,48.317L44.746,98.441H17.898C4.671,98.441,0,103.268,0,116.34v53.695c0,13.072,4.951,17.898,17.898,17.898h26.848\n        l63.926,50.068c7.668,4.948,16.558,6.505,16.558-7.365V55.683C125.23,41.813,116.34,43.37,108.672,48.317z"/>\n    </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>\n  </svg>\n',t.volumeMuteSVG='\n  <svg class="svg" width="100%" height="100%" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n   viewBox="0 0 286.277 286.277" enable-background="new 0 0 286.277 286.277" xml:space="preserve">\n    <g id="Volume_none">\n      <path style="fill-rule:evenodd;clip-rule:evenodd;" d="M245.102,143.151l36.98-37.071c5.593-5.605,5.593-14.681,0-20.284\n        l-10.124-10.142c-5.593-5.604-14.655-5.604-20.247,0l-36.98,37.071l-36.977-37.043c-5.594-5.603-14.654-5.603-20.247,0\n        l-10.124,10.143c-5.594,5.603-5.594,14.679,0,20.282l36.987,37.053l-36.961,37.051c-5.591,5.604-5.591,14.681,0,20.284\n        l10.126,10.141c5.593,5.604,14.654,5.604,20.247,0l36.96-37.05l36.97,37.035c5.592,5.605,14.654,5.605,20.247,0l10.124-10.141\n        c5.593-5.603,5.593-14.68,0-20.282L245.102,143.151z M108.674,48.296L44.747,98.42H17.9c-13.228,0-17.899,4.826-17.899,17.898\n        L0,142.719l0.001,27.295c0,13.072,4.951,17.898,17.899,17.898h26.847l63.927,50.068c7.667,4.948,16.557,6.505,16.557-7.365V55.662\n        C125.23,41.792,116.341,43.349,108.674,48.296z"/>\n    </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>\n  </svg>\n',t.settingsSVG='\n  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19">\n    <path fill="#999" fill-rule="nonzero" d="M17.812 7.52h-1.474a7.09 7.09 0 0 0-.604-1.456l1.043-1.042a1.187 1.187 0 0 0 0-1.68l-1.12-1.118a1.188 1.188 0 0 0-1.68 0l-1.043 1.042a7.05 7.05 0 0 0-1.455-.604V1.188C11.48.531 10.948 0 10.292 0H8.708c-.656 0-1.187.532-1.187 1.188v1.474a7.1 7.1 0 0 0-1.456.604L5.022 2.224a1.187 1.187 0 0 0-1.68 0l-1.12 1.12a1.188 1.188 0 0 0 0 1.68l1.044 1.042c-.256.46-.458.949-.604 1.455H1.188C.531 7.52 0 8.052 0 8.708v1.584c0 .656.532 1.187 1.188 1.187h1.474c.146.507.348.995.604 1.456L2.22 13.979a1.188 1.188 0 0 0 0 1.68l1.12 1.119a1.223 1.223 0 0 0 1.68 0l1.043-1.043c.462.255.95.458 1.457.605v1.472c0 .656.531 1.188 1.187 1.188h1.584c.656 0 1.187-.532 1.187-1.188V16.34c.506-.147.995-.35 1.456-.604l1.043 1.043a1.188 1.188 0 0 0 1.68 0l1.119-1.12a1.187 1.187 0 0 0 0-1.679l-1.043-1.043c.256-.461.458-.95.604-1.456h1.474A1.188 1.188 0 0 0 19 10.29V8.709c0-.656-.532-1.187-1.188-1.187zM9.5 13.459a3.958 3.958 0 1 1 0-7.916 3.958 3.958 0 0 1 0 7.916z"/>\n</svg>\n\n',t.arrowRightSVG='\n  <svg class="svg arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%" viewBox="0 0 50 80" xml:space="preserve">\n    <polyline fill="none" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "/>\n  </svg>\n',t.arrowLeftSVG='\n  <svg class="svg arrow" class="svg" width="100%" height="100%" viewBox="0 0 50 80" xml:space="preserve">\n    <polyline fill="none" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" points="45.63,75.8 0.375,38.087 45.63,0.375 "/>\n  </svg> \n',t.fullScreenSVG='\n <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19">\n    <g fill="#999" fill-rule="nonzero">\n        <path d="M18.802 1.942A1.746 1.746 0 0 0 17.06.2h-4.537a.99.99 0 1 0 0 1.98h4.102c.11 0 .198.088.198.197v2.588a.99.99 0 1 0 1.98 0V1.942zM.198 4.965a.99.99 0 0 0 1.98 0v-2.59a.198.198 0 0 1 .197-.199h4.102a.99.99 0 0 0 0-1.979H1.944C.983.2.204.978.202 1.94L.198 4.965zM18.802 17.056v-3.023a.99.99 0 1 0-1.98 0v2.592c0 .11-.088.198-.197.198h-4.102a.99.99 0 1 0 0 1.98h4.533c.964-.001 1.746-.783 1.746-1.747zM.198 17.056a1.746 1.746 0 0 0 1.746 1.742h4.533a.99.99 0 1 0 0-1.979H2.375a.198.198 0 0 1-.198-.194v-2.592a.99.99 0 1 0-1.98 0v3.023z"/>\n        <rect width="10.651" height="6.117" x="4.174" y="6.441" rx="1.954"/>\n    </g>\n</svg>\n\n',t.loopSVG='\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22">\n    <g fill="#999" fill-rule="nonzero">\n        <path d="M16.773 15.476H16.3a1.25 1.25 0 0 0 0 2.5h.478a6.944 6.944 0 0 0 .98-13.823.251.251 0 0 1-.208-.246V1.93A1.25 1.25 0 0 0 15.584.906l-4.778 3.341a1.25 1.25 0 0 0 .717 2.274h4.764c2.829 0 4.963 1.925 4.963 4.478a4.482 4.482 0 0 1-4.477 4.477zM6.247 17.845c.12.02.208.124.208.246v1.976a1.249 1.249 0 0 0 1.966 1.024l4.773-3.34a1.251 1.251 0 0 0-.717-2.275H7.713c-2.829 0-4.963-1.925-4.963-4.476a4.482 4.482 0 0 1 4.477-4.479h.478a1.25 1.25 0 1 0 0-2.5h-.478a6.945 6.945 0 0 0-.98 13.824z"/>\n    </g>\n</svg>\n',t.loadingSVG='<svg class="lds-spinner" style="transform:scale(.3)" width="200px"  height="200px"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style="background: none;"><g transform="rotate(0 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(30 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(60 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(90 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(120 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(150 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(180 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(210 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(240 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(270 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(300 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(330 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>\n  </rect>\n</g></svg>'})),f={name:"mc-player",set playerName(e){this.name+="-"+e}},b=function(e,t){var n={default:{"settings-background-color":"whitesmoke","hms-background-color":"whitesmoke","background-color":"whitesmoke","grad-height":"0px",color:"black","svg-color":"black","loopbar-color":"#808086","speedbar-color":"#999","runningbar-color":"red","cursor-color":"red","speedbar-cursor-color":"red","button-opacity":"1","hover-color":"rgba(200, 200, 200, 0.5)","slider-off-color":"#ccc","slider-on-color":"red","preview-border":"2px solid #fff",border:"1px solid rgba(255,255,255,0.2)","controls-border":"none","svg-selected-color":"red","loopbar-boundaries-style::before":"","loopbar-boundaries-style::after":"","theme-style":"","loopbar-boundaries-color":"#808086"},dark:{"settings-background-color":"black","hms-background-color":"black","background-color":"black","grad-height":"0px",color:"white","svg-color":"white","loopbar-color":"#808086","speedbar-color":"#999","runningbar-color":"red","cursor-color":"red","speedbar-cursor-color":"red","button-opacity":"1","hover-color":"rgba(90, 90, 90, 0.5)","slider-off-color":"#ccc","slider-on-color":"red","preview-border":"2px solid rgba(0,0,0,1)",border:"1px solid rgba(255,255,255,0.2)","controls-border":"none","svg-selected-color":"red","loopbar-boundaries-style::before":"","loopbar-boundaries-style::after":"","theme-style":"","loopbar-boundaries-color":"#808086"},whiteGold:{"settings-background-color":"white","hms-background-color":"white","background-color":"white","grad-height":"0px",color:"#a17f1a","svg-color":"#a17f1a","loopbar-color":"#808086","speedbar-color":"#999","runningbar-color":"#a17f1a","cursor-color":"#a17f1a","speedbar-cursor-color":"#a17f1a","button-opacity":"1","hover-color":"rgba(200, 200, 200, 0.5)","slider-off-color":"#ccc","slider-on-color":"#a17f1a","preview-border":"2px solid #808086",border:"1px solid rgba(255,255,255,0.2)","controls-border":"none","svg-selected-color":"red","loopbar-boundaries-style::before":"","loopbar-boundaries-style::after":"","theme-style":"","loopbar-boundaries-color":"#808086"},darkGold:{"settings-background-color":"black","hms-background-color":"black","background-color":"black","grad-height":"0px",color:"#a17f1a","svg-color":"#a17f1a","loopbar-color":"#808086","speedbar-color":"#999","runningbar-color":"#a17f1a","cursor-color":"#a17f1a","speedbar-cursor-color":"#a17f1a","button-opacity":"1","hover-color":"rgba(90, 90, 90, 0.5)","slider-off-color":"#ccc","slider-on-color":"#a17f1a","preview-border":"2px solid #808086",border:"1px solid rgba(255,255,255,0.2)","controls-border":"none","svg-selected-color":"red","loopbar-boundaries-style::before":"","loopbar-boundaries-style::after":"","theme-style":"","loopbar-boundaries-color":"#808086"},transparent:{"background-color":"transparent","settings-background-color":"rgba(0,0,0,0.9)","hms-background-color":"rgba(0,0,0,0.5)","preview-border":"2px solid #fff",color:"#e8eaeb","grad-height":"200px","svg-color":"#e8eaeb","loopbar-color":"#cfcfd0","totalbar-color":"#797979","speedbar-color":"#999","runningbar-color":"red","cursor-color":"#9e2d11","cursor-style::before":'\n        box-shadow: 0px 0px 6px 6px red;\n        width: 6px;\n        height: 6px;\n        border-radius: 100%;\n        display: block;\n        content: "";\n        background-color: red;\n        position: relative;\n        left: -2px;\n        top: -2px;\n    ',"cursor-style::after":'\n        width: 6px;\n        height: 6px;\n        border-radius: 100%;\n        box-shadow: 0px 0px 6px 6px red;\n        content: "";\n        display: block;\n        position: absolute;\n        background-color: red;\n        right: -2px;\n        bottom: -2px;\n    ',"speedbar-cursor-color":"red","button-opacity":"1","hover-color":"rgba(200, 200, 200, 0.5)","slider-off-color":"#ccc","slider-on-color":"red",border:"1px solid rgba(255,255,255,0.1)","svg-selected-color":"red","loopbar-boundaries-style":"\n        transform: translate(-50%,-37%);\n        position: absolute;\n        width: 18px;\n        background-color: #ff0000;\n        height: 18px;\n        border-radius: 10px;\n        z-index: 40;\n        position: absolute;\n        width: 18px;\n        background-color: #ff0000;\n        height: 18px;\n        border-radius: 10px;\n        z-index: 40;\n        width: 18px;\n        height: 9px;\n        border-radius: 100%;\n        top: 1.5px;\n    ","loopbar-boundaries-style::before":'\n            width: 16px;\n        height: 5px;\n        background: #ff0000;\n        border-radius: 100%;\n        display: block;\n        content: "";\n        position: relative;\n        left: -2px;\n        top: 2px;\n    ',"loopbar-boundaries-style::after":'\n        width: 14px;\n        height: 11px;\n        border-radius: 100%;\n        background: #ff0000;\n        content: "";\n        display: block;\n        position: relative;\n        top: -6px;\n        left: 5px;\n    ',"theme-style":"\n        #".concat(t,"-loopbar-start {\n            left: -9px !important;\n            transform: rotate(180deg);\n            top: -2px;\n        }\n    ")},"mc-green":{"background-color":"#141416","settings-background-color":"rgba(0,0,0,0.9)","hms-background-color":"rgba(0,0,0,0.5)","preview-border":"2px solid #254a42",color:"#999","grad-height":"0px","svg-color":"#999","loopbar-color":"rgba(0,184,139,0.2)","loopbar-boundaries-color":"#00b88b","totalbar-color":"rgba(255, 255, 255, 0.11)","speedbar-color":"#999","runningbar-color":"#00b88b","cursor-color":"#00b88b","speedbar-cursor-color":"#00b88b","button-opacity":"1","hover-color":"rgba(0,184,139,0.2)","slider-off-color":"#ccc","slider-on-color":"#00b88b",border:"1px solid rgba(255,255,255,0.1)","controls-border":"1px solid #151515","svg-selected-color":"#00b88b","loopbar-boundaries-style":"\n        transform: translate(-50%,-37%);\n        position: absolute;\n        width: 18px;\n        background-color: #00b88b;\n        height: 18px;\n        border-radius: 10px;\n        z-index: 40;\n        position: absolute;\n        width: 18px;\n        background-color: #00b88b;\n        height: 18px;\n        border-radius: 10px;\n        z-index: 40;\n        width: 18px;\n        height: 9px;\n        border-radius: 100%;\n        top: 1.5px;\n    ","loopbar-boundaries-style::before":'\n            width: 16px;\n        height: 5px;\n        background: #00b88b;\n        border-radius: 100%;\n        display: block;\n        content: "";\n        position: relative;\n        left: -2px;\n        top: 2px;\n    ',"loopbar-boundaries-style::after":'\n        width: 14px;\n        height: 11px;\n        border-radius: 100%;\n        background: #00b88b;\n        content: "";\n        display: block;\n        position: relative;\n        top: -6px;\n        left: 5px;\n    ',"theme-style":"\n        #".concat(t,"-loopbar-start {\n            left: -9px !important;\n            transform: rotate(180deg);\n            top: -2px;\n        }\n    ")},"mc-blue":{"background-color":"#141416","settings-background-color":"rgba(0,0,0,0.9)","hms-background-color":"rgba(0,0,0,0.5)","preview-border":"2px solid #254453",color:"#999","grad-height":"0px","svg-color":"#999","loopbar-color":"rgba(0,153,225,0.2)","loopbar-boundaries-color":"#0099e1","totalbar-color":"rgba(255, 255, 255, 0.11)","speedbar-color":"#999","runningbar-color":"#0099e1","cursor-color":"#0099e1","speedbar-cursor-color":"#0099e1","button-opacity":"1","hover-color":"rgba(0,153,225,0.2)","slider-off-color":"#ccc","slider-on-color":"#0099e1",border:"1px solid rgba(255,255,255,0.1)","controls-border":"1px solid #151515","svg-selected-color":"#0099e1","loopbar-boundaries-style":"\n        transform: translate(-50%,-37%);\n        position: absolute;\n        width: 18px;\n        background-color: #0099e1;\n        height: 18px;\n        border-radius: 10px;\n        z-index: 40;\n        position: absolute;\n        width: 18px;\n        background-color: #0099e1;\n        height: 18px;\n        border-radius: 10px;\n        z-index: 40;\n        width: 18px;\n        height: 9px;\n        border-radius: 100%;\n        top: 1.5px;\n    ","loopbar-boundaries-style::before":'\n            width: 16px;\n        height: 5px;\n        background: #0099e1;\n        border-radius: 100%;\n        display: block;\n        content: "";\n        position: relative;\n        left: -2px;\n        top: 2px;\n    ',"loopbar-boundaries-style::after":'\n        width: 14px;\n        height: 11px;\n        border-radius: 100%;\n        background: #0099e1;\n        content: "";\n        display: block;\n        position: relative;\n        top: -6px;\n        left: 5px;\n    ',"theme-style":"\n        #".concat(t,"-loopbar-start {\n            left: -9px !important;\n            transform: rotate(180deg);\n            top: -2px;\n        }\n    ")},"on-top":{"background-height":"100%","pointer-event-panel-height":"calc(100% - 44px)","controls-bottom":"0px","settings-panel-bottom":"48px","controls-position":"0px"},"position-bottom":{"background-height":"calc(100% - 44px)","pointer-event-panel-height":"calc(100% - 44px)","controls-bottom":"-0px","settings-panel-bottom":"48px","controls-position":"40px"}};return n[e]},y=c,x=d,w=u,B=m,k=c,L=function(e,t,n){if(void 0!==o(n)){if(!1===n){e.elements.volumeBarActive.style.width=100*e.settings.previousVolume+"%",e.clip.setVolume(e.settings.previousVolume),e.settings.volumeMute=!1;var s=document.createElement("span");s.innerHTML=v.volumeSVG,e.elements.volumeBtn.getElementsByTagName("svg")[0].replaceWith(s)}else if(!0===n){e.settings.volumeMute=!0,e.elements.volumeBarActive.style.width="0%",e.clip.setVolume(0);var i=document.createElement("span");i.innerHTML=v.volumeMuteSVG,e.elements.volumeBtn.getElementsByTagName("svg")[0].replaceWith(i)}e.options.muted=e.settings.volumeMute,e.eventBroadcast("mute-change",e.settings.volumeMute)}if(void 0!==o(t)){if(e.settings.volume=t,e.settings.volume>0&&(e.settings.previousVolume=t),e.elements.volumeBarActive.style.width=100*e.settings.volume+"%",e.clip.setVolume(e.settings.volume),e.settings.volume>0){e.settings.volumeMute=!1;var a=document.createElement("span");a.innerHTML=v.volumeSVG,e.elements.volumeBtn.getElementsByTagName("svg")[0].replaceWith(a)}else if(0===e.settings.volume){e.settings.volumeMute=!0;var l=document.createElement("span");l.innerHTML=v.volumeMuteSVG,e.elements.volumeBtn.getElementsByTagName("svg")[0].replaceWith(l)}e.options.volume=e.settings.volume,e.eventBroadcast("volume-change",e.settings.volume),e.eventBroadcast("mute-change",e.settings.volumeMute)}},M=function(e){var t=!1;e.elements.volumeBtn.onclick=function(){if(e.settings.volumeMute){e.elements.volumeBarActive.style.width=100*e.settings.previousVolume+"%",e.clip.setVolume(e.settings.previousVolume),e.settings.volumeMute=!1;var t=document.createElement("span");t.innerHTML=v.volumeSVG,e.elements.volumeBtn.getElementsByTagName("svg")[0].replaceWith(t)}else{e.settings.volumeMute=!0,e.elements.volumeBarActive.style.width="0%",e.clip.setVolume(0);var n=document.createElement("span");n.innerHTML=v.volumeMuteSVG,e.elements.volumeBtn.getElementsByTagName("svg")[0].replaceWith(n)}e.eventBroadcast("volume-change",e.settings.previousVolume),e.eventBroadcast("mute-change",e.settings.volumeMute)};var n=!1;e.elements.volumeBtn.onmouseover=function(){n=!0,e.elements.volumeCursor.classList.add("".concat(e.name,"-volume-cursor-transition")),e.elements.volumeBar.classList.add("".concat(e.name,"-volume-width-transition")),e.elements.volumeBarHelper.classList.add("".concat(e.name,"-volume-width-transition")),e.elements.timeDisplay.classList.add("".concat(e.name,"-time-width-transition"))},k("".concat(e.name,"-left-controls")).onmouseout=function(){if(n&&!t){var o=event.toElement||event.relatedTarget||event.target;(function(e,t){var n=t.parentNode;for(;null!=n;){if(n==e)return!0;n=n.parentNode}return!1})(k("".concat(e.name,"-left-controls")),o)||o===k("".concat(e.name,"-left-controls"))||(n=!1,e.elements.volumeCursor.classList.remove("".concat(e.name,"-volume-cursor-transition")),e.elements.volumeBar.classList.remove("".concat(e.name,"-volume-width-transition")),e.elements.volumeBarHelper.classList.remove("".concat(e.name,"-volume-width-transition")),e.elements.timeDisplay.classList.remove("".concat(e.name,"-time-width-transition")))}},e.listeners.onCursorMoveVolumeBar=function(t){t.preventDefault();var n=(t.clientX||((t.touches||[])[0]||{}).clientX)-e.elements.volumeBarHelper.getBoundingClientRect().left;if(n<0?n=0:n>e.elements.volumeBarHelper.offsetWidth&&(n=e.elements.volumeBarHelper.offsetWidth),e.settings.volume=Number((n/e.elements.volumeBarHelper.offsetWidth).toFixed(2)),e.elements.volumeBarActive.style.width=100*e.settings.volume+"%",e.clip.setVolume(e.settings.volume),e.settings.volume>0){e.settings.volumeMute=!1;var o=document.createElement("span");o.innerHTML=v.volumeSVG,e.elements.volumeBtn.getElementsByTagName("svg")[0].replaceWith(o)}else if(0===e.settings.volume){e.settings.volumeMute=!0;var s=document.createElement("span");s.innerHTML=v.volumeMuteSVG,e.elements.volumeBtn.getElementsByTagName("svg")[0].replaceWith(s)}e.eventBroadcast("volume-change",e.settings.volume),e.eventBroadcast("mute-change",e.settings.volumeMute)},e.listeners.onMouseUpVolumeBar=function(n){t=!1,e.elements.listenerHelper.style.pointerEvents="none",n.preventDefault(),e.settings.volume>0&&(e.settings.previousVolume=e.settings.volume),B("mouseup",e.listeners.onMouseUpVolumeBar,!1),B("touchend",e.listeners.onMouseUpVolumeBar,!1),B("mousemove",e.listeners.onCursorMoveVolumeBar,!1),B("touchmove",e.listeners.onCursorMoveVolumeBar,!1)},e.listeners.onMouseDownVolumeBar=function(n){t=!0,e.elements.listenerHelper.style.pointerEvents="auto",n.preventDefault(),e.listeners.onCursorMoveVolumeBar(n),w("mouseup",e.listeners.onMouseUpVolumeBar,!1),w("touchend",e.listeners.onMouseUpVolumeBar,!1),w("mousemove",e.listeners.onCursorMoveVolumeBar,!1),w("touchmove",e.listeners.onCursorMoveVolumeBar,!1)},e.elements.volumeBarHelper.addEventListener("mousedown",e.listeners.onMouseDownVolumeBar,!1),e.elements.volumeCursor.addEventListener("mousedown",e.listeners.onMouseDownVolumeBar,!1),e.elements.volumeBarHelper.addEventListener("touchstart",e.listeners.onMouseDownVolumeBar,{passive:!1},!1),e.elements.volumeCursor.addEventListener("touchstart",e.listeners.onMouseDownVolumeBar,{passive:!1},!1)};var E=u,T=m,S=u,C=m,V=u,P=m,z=c,H=u,D=m,N=function(e,t){t&&t.preventDefault();var n=z("".concat(e.name,"-show-indicator-checkbox"));n.checked?(n.checked=!1,e.elements.indicator.style.visibility="hidden"):(n.checked=!0,e.elements.indicator.style.visibility="visible"),e.eventBroadcast("show-indicator-change",n.checked)},W=function(e,t){t&&t.preventDefault();var n=z("".concat(e.name,"-pointer-events-checkbox"));n.checked?(n.checked=!1,e.elements.mcPlayer.style.pointerEvents="none",e.elements.pointerEventPanel.style.pointerEvents="auto",z("".concat(e.name,"-controls")).style.pointerEvents="auto",e.elements.settingsPanel.style.pointerEvents="auto"):(n.checked=!0,e.options.pointerEvents=!1,e.elements.mcPlayer.style.pointerEvents="none",e.elements.pointerEventPanel.style.pointerEvents="none",z("".concat(e.name,"-controls")).style.pointerEvents="auto",e.elements.settingsPanel.style.pointerEvents="auto"),e.eventBroadcast("show-pointer-events-change",n.checked)},F=function(e,t){t&&t.preventDefault(),e.elements.volumeControl.classList.toggle("".concat(e.name,"-volume-width-transition")),e.elements.volumeControl.classList.toggle("".concat(e.name,"-hide"));var n=z("".concat(e.name,"-show-volume-checkbox"));n.checked?(n.checked=!1,e.elements.volumeControl.style.visibility="hidden",e.elements.timeDisplay.style.left="45px"):(n.checked=!0,e.elements.volumeControl.style.visibility="visible",e.elements.timeDisplay.style.left=""),e.eventBroadcast("show-volume-change",n.checked)},I=function(e,t){t&&t.preventDefault();var n=z("".concat(e.name,"-show-preview-checkbox"));n.checked?(n.checked=!1,z("".concat(e.name,"-hover-display")).style.visibility="hidden",z("".concat(e.name,"-hover-display")).style.display="none",e.options.preview=!1):(e.previewClip||e.createPreviewDisplay(),n.checked=!0,z("".concat(e.name,"-hover-display")).style.visibility="visible",z("".concat(e.name,"-hover-display")).style.display="flex",e.options.preview=!0),e.eventBroadcast("show-preview-change",n.checked)},O=function(e){e.elements.settingsShowIndicator.onclick=function(t){return N(e,t)},e.elements.settingsPointerEvents.onclick=function(t){return W(e,t)},e.elements.settingsShowVolume.onclick=function(t){return F(e,t)},e.elements.settingsShowPreview.onclick=function(t){return I(e,t)},e.elements.settingsButton.onclick=function(t){t.preventDefault();var n=z("".concat(e.name,"-controls")),o=function t(n){if(e.elements.settingsPanel.contains(n.target))return!0;e.elements.settingsPanel.classList.toggle("".concat(e.name,"-hide")),e.elements.settingsPanel.classList.toggle("m-fadeOut"),e.elements.settingsPanel.classList.toggle("m-fadeIn"),e.elements.settingsPanel.className.includes("m-fadeOut")&&(D("click",t,!1),e.eventBroadcast("state-change",e.state))};e.elements.settingsPanel.className.includes("m-fadeOut")?(n.classList.value.includes("force-show-controls")||n.classList.toggle("force-show-controls"),H("click",o,!1)):D("click",o,!1)}},A=function(e,t){"showIndicator"===t?N(e):"showPointerEvents"===t?W(e):"showVolume"===t?F(e):"showPreview"===t&&I(e)},G=c,U=u,R=m,j=function(e){e.elements.settingsSpeedButtonShow.onclick=e.elements.settingsSpeedButtonHide.onclick=function(t){t.preventDefault(),e.elements.settingsPanel.classList.toggle("".concat(e.name,"-settings-speed-panel")),e.elements.settingsPanel.className.includes("".concat(e.name,"-settings-speed-panel"))?(e.elements.settingsMainPanel.style.display="none",e.elements.settingsSpeedPanel.style.display="block"):(e.elements.settingsSpeedPanel.style.display="none",e.elements.settingsMainPanel.style.display="block")};var t=function(t){t.preventDefault();var n=e.elements.speedBar.getBoundingClientRect(),o=(t.clientY||((t.touches||[])[0]||{}).clientY)-n.top;(o-=8)<0?o=0:o>e.elements.speedBar.offsetHeight-16&&(o=e.elements.speedBar.offsetHeight-16);var s=-1*((o=Math.floor(o))/(16*(e.options.speedValues.length-1))-1),i=1/(e.options.speedValues.length-1),a=e.calculateSpeed(i,e.options.speedValues,s);G("".concat(e.name,"-speed-runtime")).innerHTML=a+"0",G("".concat(e.name,"-speed-cursor")).style.top=o+"px",e.clip.executionSpeed=a,e.eventBroadcast("speed-change",e.clip.executionSpeed)},n=function n(o){var s;e.elements.listenerHelper.style.pointerEvents="none",o.preventDefault(),R("mouseup",n,!1),R("touchend",n,!1),R("mousemove",t,!1),R("touchmove",t,!1),G("".concat(e.name,"-speed-runtime")).innerHTML="Speed",s=1==e.clip.speed?"Normal":e.clip.speed,e.elements.speedCurrent.innerHTML=s},o=function(o){e.elements.listenerHelper.style.pointerEvents="auto",o.preventDefault(),t(o),U("mouseup",n,!1),U("touchend",n,!1),U("mousemove",t,!1),U("touchmove",t,!1)};e.elements.speedBarHelper.addEventListener("mousedown",o,!1),e.elements.speedBarHelper.addEventListener("touchstart",o,{passive:!1},!1)},X=function(e,t){var n;t=parseFloat(t)||1,e.eventBroadcast("speed-change",t),n=1==t?"Normal":t,e.clip.executionSpeed=t,e.elements.speedCurrent.innerHTML=n},J=c,q=function(e){e.settings.loopActivated=!e.settings.loopActivated,e.eventBroadcast("loop-change",e.settings.loopActivated),e.elements.loopButton.classList.toggle("svg-selected"),e.elements.loopBarStart.classList.toggle("m-fadeOut"),e.elements.loopBarEnd.classList.toggle("m-fadeOut"),e.elements.loopBarStart.classList.toggle("m-fadeIn"),e.elements.loopBarStart.classList.toggle("".concat(e.name,"-hide")),e.elements.loopBarEnd.classList.toggle("m-fadeIn"),e.elements.loopBarEnd.classList.toggle("".concat(e.name,"-hide")),J("".concat(e.name,"-loop-time")).classList.toggle("m-fadeOut"),J("".concat(e.name,"-loop-time")).classList.toggle("m-fadeIn"),J("".concat(e.name,"-loop-time")).classList.toggle("".concat(e.name,"-hide")),e.elements.loopEndTime.innerHTML=e.settings.loopEndMillisecond,e.elements.loopStartTime.innerHTML=e.settings.loopStartMillisecond,e.settings.needsUpdate=!0,e.settings.loopActivated||(e.elements.loopBar.style.left="0%",e.elements.loopBar.style.width="100%",e.settings.loopStartMillisecond=0,e.settings.loopEndMillisecond=e.clip.duration,e.settings.loopLastPositionXPxls=0,e.settings.loopLastPositionXPercentage=0,e.elements.runningBar.style.width=e.clip.runTimeInfo.currentMillisecond/e.clip.duration*100+"%")},Y=q,_=function(e){e.elements.loopButton.onclick=function(){return q(e)}},K=c;function Q(e,t){for(var n=t.parentNode;null!=n;){if(n==e)return!0;n=n.parentNode}return!1}var Z=function(e){var t=e.clip.props.host.className.includes("full-screen");e.clip.props.host!==e.options.host&&!t&&e.clip.props.host.appendChild(e.elements.mcPlayer),e.clip.props.host!==e.options.host&&t&&e.options.host.appendChild(e.elements.mcPlayer),t?e.exitFullscreen():e.launchIntoFullscreen(e.clip.props.host)},$=Z,ee=function(e){e.elements.fullScreenButton.onclick=function(){return Z(e)}},te=g,ne=c,oe=u,se=m,ie=r,ae=c,le=new n.default.TimeCapsule,re=c,ce=p,pe=d,de=h;return function(){function e(t){var n,o=this;for(var s in function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t.id=t.id||Date.now(),t.preview=t.preview||!1,t.showVolume=t.showVolume||!1,t.showIndicator=t.showIndicator||!1,t.theme=t.theme||"transparent on-top",t.host=t.host||t.clip.props.host,t.buttons=t.buttons||{},t.timeFormat=t.timeFormat||"ss",t.backgroundColor=t.backgroundColor||"black",t.fullscreen=t.fullscreen||!1,t.scaleToFit=null===(n=t.scaleToFit)||void 0===n||n,void 0===t.pointerEvents||null===t.pointerEvents?t.pointerEvents=!1:t.pointerEvents=Boolean(t.pointerEvents),t.onMillisecondChange=t.onMillisecondChange||null,t.speedValues=t.speedValues||[-2,-1,-.5,0,.5,1,2],t.muted=t.muted||!1,t.controls=0!=t.controls,t.loop=t.loop||!1,t.volume=void 0!==t.volume?t.volume:1,t.currentScript=t.currentScript||null,t.speedValues)isFinite(t.speedValues[s])||t.speedValues.splice(s,1);t.speedValues.sort((function(e,t){return e-t})),this.className=f.name,f.playerName=t.id,this.options=t,this.id=this.options.id,this.name=f.name,this.previewClip=null,this.clip=t.clip,this.clipClass=t.clipClass,this.state=this.clip.runTimeInfo.state,this.listeners={},this.previewScale=.25,this.settings={volume:1,journey:null,previousVolume:1,volumeMute:!1,needsUpdate:!0,resizeLoop:!1,loopJourney:!1,previewJourney:null,loopActivated:!1,requestingLoop:!1,playAfterResize:!1,loopStartMillisecond:0,loopLastPositionXPxls:0,loopLastPositionXPercentage:0,loopEndMillisecond:this.clip.duration,controls:!0},function(e){e.elements={};var t=e.clip.props.host;t.offsetWidth||(t.style.width=e.clip.props.containerParams.width),t.offsetHeight||(t.style.height=e.clip.props.containerParams.height);var n=document.createElement("link");n.rel="preconnect",n.href="https://fonts.gstatic.com";var o=document.createElement("link");o.rel="stylesheet",o.href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap";var s=document.getElementsByTagName("head")[0];if(s.appendChild(n),s.appendChild(o),t.style.display="flex",t.style.justifyContent="center",t.style.alignItems="center",t.style.overflow="hidden",e.clip.props.host.style.position="relative",e.clip.props.host.style.zIndex="0",e.elements.mcPlayer=x("div"),e.elements.mcPlayer.id="".concat(e.name),e.elements.mcPlayer.className="".concat(e.className),e.elements.mcPlayer.innerHTML=function(e){return'\n  <div\n    class="pointer-event-panel"\n    id="'.concat(e.name,'-pointer-event-panel"\n  ></div>\n  <div\n    class="pointer-event-panel"\n    id="').concat(e.name,'-listener-helper"\n  ></div>\n  <div class="background"></div>\n  <div id="').concat(e.name,'-controls">\n    <div class="grad"></div>\n    <div id="').concat(e.name,'-totalbar">\n      <div id="').concat(e.name,'-hover-display">\n        <div id="').concat(e.name,'-hover-display-border"> </div>\n        <div id="').concat(e.name,'-hover-display-clip"> </div>\n        <div id="').concat(e.name,'-hover-millisecond"></div>\n      </div>\n      <div id="').concat(e.name,'-loopbar">\n        <div\n          class="').concat(e.name,'-loop-boundaries"\n          id="').concat(e.name,'-loopbar-start"\n        ></div>\n        <div\n          class="').concat(e.name,'-loop-boundaries"\n          id="').concat(e.name,'-loopbar-end"\n        ></div>\n        <div id="').concat(e.name,'-helperbar"></div>\n        <div id="').concat(e.name,'-runningbar">\n          <div id="').concat(e.name,'-cursor"></div>\n        </div>\n      </div>\n    </div>\n    <div id="').concat(e.name,'-left-controls">\n      <div id="').concat(e.name,'-status-btn">\n        ').concat(e.svg.playSVG,'\n        <span id="').concat(e.name,'-indicator"></span>\n      </div>\n      <div id="').concat(e.name,'-volume">\n        <div id="').concat(e.name,'-volume-btn">\n          ').concat(e.svg.volumeSVG,'\n        </div>\n        <div id="').concat(e.name,'-volumebar-helper"></div>\n        <div id="').concat(e.name,'-volumebar">\n            <div id="').concat(e.name,'-volumebar-active">\n              <div id="').concat(e.name,'-volume-cursor"></div>\n            </div>\n        </div>\n      </div>\n      <div id="').concat(e.name,'-time-display">\n        <span id="').concat(e.name,'-time-current"></span>\n        <span id="').concat(e.name,'-time-separator"></span>\n        <span id="').concat(e.name,'-time-total"></span>\n      </div>\n    </div>\n    <div id="').concat(e.name,'-right-controls">\n      <div\n        id="').concat(e.name,'-loop-btn-container"\n      >\n        <div\n          id="').concat(e.name,'-loop-btn"\n        >').concat(e.svg.loopSVG,'</div>\n        <div\n          id="').concat(e.name,'-loop-time"\n        >\n          <span\n            id="').concat(e.name,'-loopbar-start-time"\n            class="').concat(e.name,'-loopbar-time"\n          ></span>\n          <span>:</span>\n          <span\n            id="').concat(e.name,'-loopbar-end-time"\n            class="').concat(e.name,'-loopbar-time"\n          ></span>\n        </div>\n      </div>\n      <div\n        id="').concat(e.name,'-settings-btn"\n      >').concat(e.svg.settingsSVG,'</div>\n      <div\n        id="').concat(e.name,'-dc-btn"\n      >\n        ').concat(e.svg.dcSVG,'\n      </div>\n      \n      <div\n        id="').concat(e.name,'-full-screen-btn"\n      >').concat(e.svg.fullScreenSVG,'</div>\n    </div>\n    \n\n  </div>\n  <div id="').concat(e.name,'-settings-panel">\n    <ul id="').concat(e.name,'-main-settings">\n      <li id="').concat(e.name,'-settings-pointer-events">\n        <label>Pointer Events</label>\n        <label class="switch settings-switch">\n          <input id="').concat(e.name,'-pointer-events-checkbox" type="checkbox">\n          <span class="slider round"></span>\n        </label>\n      </li>\n      <li id="').concat(e.name,'-settings-preview">\n        <label>Show Preview</label>\n        <label class="switch settings-switch">\n          <input id="').concat(e.name,'-show-preview-checkbox" type="checkbox">\n          <span class="slider round"></span>\n        </label>\n      </li>\n      <li id="').concat(e.name,'-settings-indicator">\n        <label>Show Indicator</label>\n        <label class="switch settings-switch">\n          <input id="').concat(e.name,'-show-indicator-checkbox" type="checkbox">\n          <span class="slider round"></span>\n        </label>\n      </li>\n      <li id="').concat(e.name,'-settings-volume">\n        <label>Show Volume</label>\n        <label class="switch settings-switch">\n          <input id="').concat(e.name,'-show-volume-checkbox" type="checkbox">\n          <span class="slider round"></span>\n        </label>\n      </li>\n      <li id="').concat(e.name,'-settings-speed-show">\n        <label>Speed</label>\n        <div class="').concat(e.name,'-speed-btn">').concat(e.svg.arrowRightSVG,'</div>\n        <span id="').concat(e.name,'-speed-current"></span>\n      </li>\n    </ul>\n    <ul id="').concat(e.name,'-speed-settings">\n      <li id="').concat(e.name,'-settings-speed-hide">\n        <div class="').concat(e.name,'-speed-btn">').concat(e.svg.arrowLeftSVG,"</div>\n        <label id=").concat(e.name,'-speed-runtime>Speed</label>\n      </li>\n      <li>\n        <div id="').concat(e.name,'-speed-value-helperbar"></div>\n        <div id="').concat(e.name,'-speed-value-bar">\n          <div\n            class="').concat(e.name,'-speed-value-step"\n            id="').concat(e.name,'-speed-cursor"\n          >\n            <div></div>\n          </div>\n        </div>\n        <div id="').concat(e.name,'-speed-value">\n        </div>\n      </li>\n    </ul>\n  </div>\n')}({svg:v,name:e.name}),"string"==typeof e.options.host){var i=document.querySelectorAll(e.options.host);for(var a in i)isNaN(a)||i[a].appendChild(e.elements.mcPlayer)}else e.options.host.appendChild(e.elements.mcPlayer);for(var l in e.elements.pointerEventPanel=y("".concat(e.name,"-pointer-event-panel")),e.elements.listenerHelper=y("".concat(e.name,"-listener-helper")),e.elements.loopBar=y("".concat(e.name,"-loopbar")),e.elements.totalBar=y("".concat(e.name,"-totalbar")),e.elements.indicator=y("".concat(e.name,"-indicator")),e.elements.loopButton=y("".concat(e.name,"-loop-btn")),e.elements.volumeBar=y("".concat(e.name,"-volumebar")),e.elements.totalTime=y("".concat(e.name,"-time-total")),e.elements.volumeControl=y("".concat(e.name,"-volume")),e.elements.volumeBtn=y("".concat(e.name,"-volume-btn")),e.elements.runningBar=y("".concat(e.name,"-runningbar")),e.elements.loopBarEnd=y("".concat(e.name,"-loopbar-end")),e.elements.statusButton=y("".concat(e.name,"-status-btn")),e.elements.speedBar=y("".concat(e.name,"-speed-value-bar")),e.elements.currentTime=y("".concat(e.name,"-time-current")),e.elements.timeDisplay=y("".concat(e.name,"-time-display")),e.elements.speedCurrent=y("".concat(e.name,"-speed-current")),e.elements.loopBarStart=y("".concat(e.name,"-loopbar-start")),e.elements.volumeCursor=y("".concat(e.name,"-volume-cursor")),e.elements.settingsButton=y("".concat(e.name,"-settings-btn")),e.elements.donkeyclipButton=y("".concat(e.name,"-dc-btn")),e.elements.timeSeparator=y("".concat(e.name,"-time-separator")),e.elements.settingsPanel=y("".concat(e.name,"-settings-panel")),e.elements.settingsMainPanel=y("".concat(e.name,"-main-settings")),e.elements.fullScreenButton=y("".concat(e.name,"-full-screen-btn")),e.elements.volumeBarHelper=y("".concat(e.name,"-volumebar-helper")),e.elements.volumeBarActive=y("".concat(e.name,"-volumebar-active")),e.elements.settingsSpeedPanel=y("".concat(e.name,"-speed-settings")),e.elements.settingsShowVolume=y("".concat(e.name,"-settings-volume")),e.elements.settingsShowPreview=y("".concat(e.name,"-settings-preview")),e.elements.settingsPointerEvents=y("".concat(e.name,"-settings-pointer-events")),e.elements.speedBarHelper=y("".concat(e.name,"-speed-value-helperbar")),e.elements.settingsShowIndicator=y("".concat(e.name,"-settings-indicator")),e.elements.settingsSpeedButtonShow=y("".concat(e.name,"-settings-speed-show")),e.elements.settingsSpeedButtonHide=y("".concat(e.name,"-settings-speed-hide")),e.elements.volumeBarActive.style.width=100*e.settings.volume+"%",e.elements.currentTime.innerHTML=e.timeFormat(0),e.elements.totalTime.innerHTML=e.timeFormat(e.clip.duration),e.elements.timeSeparator.innerHTML="/",e.elements.settingsPanel.classList.add("m-fadeOut","".concat(e.name,"-hide")),e.options.showIndicator?(e.elements.indicator.style.visibility="visible",e.elements.statusButton.style.width="35px",e.elements.statusButton.style.height="20px",e.elements.statusButton.style.bottom="5px"):e.elements.indicator.style.visibility="hidden",e.elements.indicator.innerHTML=e.clip.runTimeInfo.state,e.elements.settingsSpeedPanel.style.display="none",e.elements.settingsSpeedPanel.getElementsByTagName("li")[1].classList.add("no-hover"),e.elements.loopBarStart.style.left="0%",e.elements.loopBarStart.classList.add("m-fadeOut","".concat(e.name,"-hide")),e.elements.loopBarEnd.style.left="100%",e.elements.loopBarEnd.classList.add("m-fadeOut","".concat(e.name,"-hide")),e.elements.loopStartTime=y("".concat(e.name,"-loopbar-start-time")),e.elements.loopEndTime=y("".concat(e.name,"-loopbar-end-time")),e.elements.editableLoopStartTime=document.createElement("input"),e.elements.editableLoopStartTime.type="text",e.elements.editableLoopStartTime.size=y("".concat(e.name,"-time-total")).innerHTML.length+1,e.elements.editableLoopStartTime.maxLength=y("".concat(e.name,"-time-total")).innerHTML.length,e.elements.editableLoopStartTime.style.height=y("".concat(e.name,"-time-total")).offsetHeight,e.elements.editableLoopStartTime.value=y("".concat(e.name,"-loopbar-start-time")).innerHTML,e.elements.editableLoopStartTime.style.fontSize="8px",e.elements.editableLoopEndTime=document.createElement("input"),e.elements.editableLoopEndTime.type="text",e.elements.editableLoopEndTime.size=y("".concat(e.name,"-time-total")).innerHTML.length+1,e.elements.editableLoopEndTime.maxLength=y("".concat(e.name,"-time-total")).innerHTML.length,e.elements.editableLoopEndTime.style.height=y("".concat(e.name,"-time-total")).offsetHeight,e.elements.editableLoopEndTime.value=y("".concat(e.name,"-loopbar-start-time")).innerHTML,e.elements.editableLoopEndTime.pattern="d*",e.elements.editableLoopEndTime.style.fontSize="8px",y("".concat(e.name,"-loop-time")).classList.add("m-fadeOut","".concat(e.name,"-hide")),y("".concat(e.name,"-hover-display")).classList.add("m-fadeOut"),y("".concat(e.name,"-show-volume-checkbox")).checked=e.options.showVolume,y("".concat(e.name,"-show-indicator-checkbox")).checked=e.options.showIndicator,y("".concat(e.name,"-show-preview-checkbox")).checked=e.options.preview,y("".concat(e.name,"-pointer-events-checkbox")).checked=e.options.pointerEvents,e.options.pointerEvents?(e.elements.mcPlayer.style.pointerEvents="none",e.elements.pointerEventPanel.style.pointerEvents="none",y("".concat(e.name,"-controls")).style.pointerEvents="auto",e.elements.settingsPanel.style.pointerEvents="auto"):(e.elements.mcPlayer.style.pointerEvents="none",e.elements.pointerEventPanel.style.pointerEvents="auto",y("".concat(e.name,"-controls")).style.pointerEvents="auto",e.elements.settingsPanel.style.pointerEvents="auto"),e.elements.listenerHelper.style.pointerEvents="none",e.options.showVolume?(e.elements.timeDisplay.style.left="",e.elements.volumeControl.style.visibility="visible"):(e.elements.timeDisplay.style.left="45px",e.elements.volumeControl.style.visibility="hidden",e.elements.volumeControl.classList.toggle("".concat(e.name,"-hide")),e.elements.volumeControl.classList.toggle("".concat(e.name,"-volume-width-transition"))),e.options.speedValues){var r=x("div");r.className="".concat(e.name,"-speed-value-step");var c=x("div");c.className="".concat(e.name,"-speed-value"),c.dataset.speedValue=e.options.speedValues[l],c.innerHTML=e.options.speedValues[l],c.dataset.zone=l,y("".concat(e.name,"-speed-value")).prepend(c),e.elements.speedBar.prepend(r)}!1===e.options.buttons.fullScreen&&e.elements.fullScreenButton.remove(),!1===e.options.buttons.settings&&e.elements.settingsButton.remove(),!1===e.options.buttons.donkeyclip&&e.elements.donkeyclipButton.remove(),!1===e.options.buttons.loop&&e.elements.loopButton.remove()}(this),this.setTheme(),this.setSpeed(),this.subscribeToTimer(),this.subscribeToDurationChange(),this.addEventListeners(),this.scaleClipHost(),this.eventBroadcast("state-change",this.state),this.options.preview&&this.createPreviewDisplay(),this.resizeTimeout=setTimeout((function(){}),20),window.addEventListener("resize",(function(){clearTimeout(o.resizeTimeout),o.resizeTimeout=setTimeout((function(){o.options.preview&&o.setPreviewDimentions(),o.options.scaleToFit&&o.scaleClipHost()}),20)})),this.changeSettings(t,!0)}var t,n,o;return t=e,(n=[{key:"changeSettings",value:function(e,t){e.theme=e.theme||"transparent on-top",e.speed=e.speed||1,e.volume=e.volume||1,e.clip=e.clip||this.clip,e.clip!==this.options.clip&&(t=!0,this.clip=e.clip,this.options.clip=e.clip),!1===e.controls?re(this.name).style.display="none":!0===e.controls&&(re(this.name).style.display="unset"),void 0!==e.loop&&(this.options.loop!==e.loop||t&&this.options.loop)&&Y(this),void 0!==e.fullscreen&&(this.options.fullscreen!==e.fullscreen||t&&this.options.fullscreen)&&$(this),void 0!==e.muted&&(this.options.muted!==e.muted||t&&this.options.muted)&&L(this,void 0,e.mute),void 0!==e.volume&&(this.options.volume!==e.volume||t&&this.options.volume)&&L(this,e.volume,void 0),void 0!==e.speed&&(this.options.speed!==e.speed||t&&this.options.speed)&&X(this,e.speed),void 0!==e.scaleToFit&&(this.options.scaleToFit!==e.scaleToFit||t&&this.options.scaleToFit)&&(this.options.scaleToFit=e.scaleToFit,this.scaleClipHost()),void 0!==e.showVolume&&this.options.showVolume!==e.showVolume&&A(this,"showVolume"),void 0!==e.preview&&this.options.preview!==e.preview&&A(this,"showPreview"),void 0!==e.theme&&this.options.theme!==e.theme&&(this.options.theme=e.theme,this.setTheme()),this.options=l(l({},this.options),e)}},{key:"scaleClipHost",value:function(){if(this.options.scaleToFit){var e=this.clip.props.containerParams.width,t=this.clip.props.containerParams.height,n=de({width:e,height:t},{width:this.clip.props.host.offsetWidth,height:this.clip.props.host.offsetHeight},"cover"===this.options.scaleToFit);this.clip.realClip.rootElement.style.transform="scale(".concat(n.scale),this.clip.realClip.rootElement.style.left=n.position.left+"px",this.clip.realClip.rootElement.style.top=n.position.top+"px"}else this.clip.realClip.rootElement.style.transform="scale(1)",this.clip.realClip.rootElement.style.left="0px",this.clip.realClip.rootElement.style.top="0px";this.eventBroadcast("scale-change",this.options.scaleToFit)}},{key:"createLoop",value:function(e,t){this.settings.loopStartMillisecond=e,this.settings.loopEndMillisecond=t,this.elements.loopBar.style.left=e/this.clip.duration*100+"%",this.elements.loopBar.style.width=(t-e)/this.clip.duration*100+"%",this.createJourney(e),this.elements.runningBar.style.width="0%",!this.settings.loopActivated&&Y(this)}},{key:"createJourney",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=this.clip;setTimeout((function(){var s=n.before,i=void 0===s?null:s,a=n.after,l=void 0===a?null:a;i&&o[i](),t.settings.journey=le.startJourney(o),t.settings.journey.station(e),t.settings.journey.destination(),l&&o[l]()}),0)}},{key:"millisecondChange",value:function(e,t,n,o){var s=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];if(this.state!==t&&(this.state=t,this.eventBroadcast("state-change",t)),!this.settings.needsUpdate)return this.clip.pause(),1;var i=this.settings,a=i.loopActivated,l=i.loopEndMillisecond,r=i.loopStartMillisecond,c=this.clip.duration,p=this.elements,d=p.totalBar,u=p.loopBar,m=u.offsetWidth,h=u.offsetLeft/d.offsetWidth,g=e-c*h,v=c/d.offsetWidth*m;return e>=l&&a&&this.clip.speed>=0?(this.createJourney(r+1,{after:this.settings.playAfterResize||"playing"==this.clip.runTimeInfo.state?"play":null}),1):e>=l&&a&&this.clip.speed<0?(this.createJourney(l-1,{after:this.settings.playAfterResize||"playing"==this.clip.runTimeInfo.state?"play":null}),1):e<=r&&a&&this.clip.speed>=0?(this.createJourney(r+1,{after:this.settings.playAfterResize||"playing"==this.clip.runTimeInfo.state?"play":null}),1):e<=r&&a&&this.clip.speed<0?(this.createJourney(l-1,{after:this.settings.playAfterResize||"playing"==this.clip.runTimeInfo.state?"play":null}),1):(o&&this.createJourney(e,{after:this.settings.playAfterResize?"play":null}),this.elements.runningBar.style.width=g/v*100+"%",this.elements.currentTime.innerHTML=this.timeFormat(e),void(this.options.onMillisecondChange&&s&&this.options.onMillisecondChange(e)))}},{key:"eventBroadcast",value:function(e,t){var n=re("".concat(this.name,"-controls"));"state-change"===e?(this.options.currentScript&&(this.options.currentScript.dataset.status=t),"paused"===t||"idle"===t||"transitional"===t||"armed"===t||"blocked"===t?(n.classList.value.includes("force-show-controls")||n.classList.toggle("force-show-controls"),this.elements.statusButton.innerHTML=v.playSVG,this.elements.statusButton.appendChild(this.elements.indicator),this.elements.indicator.innerHTML="".concat(t.charAt(0).toUpperCase()+t.slice(1)),this.elements.pointerEventPanel.innerHTML="blocked"===t?'\n            <div style="width:100%;height:100%;background:rgba(0,0,0,0.5);display:flex;justify-content:center;align-items:center;">'.concat(v.loadingSVG,"</div>"):""):(n.classList.value.includes("force-show-controls")&&n.classList.toggle("force-show-controls"),this.elements.statusButton.innerHTML=v.pauseSVG,this.elements.statusButton.appendChild(this.elements.indicator),this.elements.indicator.innerHTML="Playing",this.elements.pointerEventPanel.innerHTML="","playing"===t&&this.clip.runTimeInfo.currentMillisecond===this.clip.duration&&this.clip.speed>=0?this.createJourney(1,{after:"play"}):("playing"===t&&0===this.clip.runTimeInfo.currentMillisecond&&this.clip.speed<0||"playing"===t&&this.clip.runTimeInfo.currentMillisecond===this.clip.duration&&this.clip.speed<0)&&this.createJourney(this.clip.duration-1,{after:"play"}))):"duration-change"===e?(this.elements.totalTime.innerHTML=this.timeFormat(this.clip.duration),this.settings.loopEndMillisecond=this.clip.duration,this.elements.pointerEventPanel.innerHTML="",this.millisecondChange(this.clip.runTimeInfo.currentMillisecond)):this.options.currentScript&&("volume-change"===e?(this.options.volume=t,this.options.currentScript.dataset.volume=t):"speed-change"===e?(this.options.speed=t,this.options.currentScript.dataset.speed=t):"mute-change"===e?t?(this.options.muted=!0,this.options.currentScript.dataset.muted=""):(this.options.muted=!1,delete this.options.currentScript.dataset.muted):"loop-change"===e?t?(this.options.loop=!0,this.options.currentScript.dataset.loop=""):(this.options.loop=!1,delete this.options.currentScript.dataset.loop):"scale-change"===e?t?(this.options.scaleToFit=!0,this.options.currentScript.dataset.scaleToFit=""):(this.options.scaleToFit=!1,delete this.options.currentScript.dataset.scaleToFit):"show-volume-change"===e?t?(this.options.showVolume=!0,this.options.currentScript.dataset.showVolume=""):(this.options.showVolume=!1,delete this.options.currentScript.dataset.showVolume):"show-preview-change"===e&&(t?(this.options.preview=!0,this.options.currentScript.dataset.preview=""):(this.options.preview=!1,delete this.options.currentScript.dataset.preview)))}},{key:"subscribeToDurationChange",value:function(){this.clip.subscribeToDurationChange(this.subscribeToDurationChangeCallback.bind(this))}},{key:"subscribeToDurationChangeCallback",value:function(){this.eventBroadcast("duration-change")}},{key:"subscribeToTimer",value:function(){this.clip.subscribe(this.id,this.millisecondChange.bind(this))}},{key:"handleDragStart",value:function(){this.settings.needsUpdate=!0,this.settings.journey=le.startJourney(this.clip)}},{key:"timeFormat",value:function(e){if("ss"===this.options.timeFormat){var t=e/1e3/60/60,n=t%1*60,o=n%1*60,s=("0"+parseInt(t)).slice(-2),i=("0"+parseInt(n)).slice(-2),a=("0"+parseInt(o)).slice(-2);return"".concat("00"===s?"":s+":").concat(i,":").concat(a)}return e}},{key:"handleDrag",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];isFinite(e)||(e=0);var n=this.clip.duration,o=this.settings.journey,s=this.elements,i=s.loopBar,a=s.totalBar,l=s.runningBar,r=s.currentTime,c=e+i.offsetLeft,p=Math.round(n*c/a.offsetWidth);r.innerHTML=this.timeFormat(p),l.style.width=e/i.offsetWidth*100+"%",o.station(p),this.options.onMillisecondChange&&t&&this.options.onMillisecondChange(p)}},{key:"handleDragEnd",value:function(){this.settings.journey.destination()}},{key:"createProgressDrag",value:function(e){this.handleDragStart(),this.handleDrag(e),this.handleDragEnd()}},{key:"addEventListeners",value:function(){var e;(e=this).listeners.onCursorMoveLoopEnd=function(t){t.preventDefault();var n=(t.clientX||((t.touches||[])[0]||{}).clientX)-e.elements.totalBar.getBoundingClientRect().left;n<0?n=0:n>e.elements.totalBar.offsetWidth&&(n=e.elements.totalBar.offsetWidth),e.elements.runningBar.offsetWidth>=e.elements.loopBar.offsetWidth&&(e.elements.runningBar.style.width=e.elements.loopBar.offsetWidth+"px"),e.settings.loopLastPositionXPxls-n<0?e.elements.loopBar.style.width=Math.abs(e.settings.loopLastPositionXPxls-n)+"px":(e.elements.loopBar.style.left=n+"px",e.settings.loopLastPositionXPxls=n),e.settings.loopEndMillisecond=Math.round(e.clip.duration*((parseFloat(e.elements.loopBar.style.left)||0)+parseFloat(e.elements.loopBar.style.width))/e.elements.totalBar.offsetWidth),e.settings.loopEndMillisecond<e.clip.runTimeInfo.currentMillisecond&&(e.settings.loopJourney=!0),e.settings.loopStartMillisecond>e.settings.loopEndMillisecond&&(e.settings.loopStartMillisecond=e.settings.loopEndMillisecond,e.settings.loopJourney=!0),e.elements.loopEndTime.innerHTML=e.settings.loopEndMillisecond,e.elements.loopStartTime.innerHTML=e.settings.loopStartMillisecond},e.listeners.onMouseUpLoopEnd=function(t){if(e.elements.listenerHelper.style.pointerEvents="none",e.settings.resizeLoop=!1,t.preventDefault(),e.elements.runningBar.style.width=e.elements.runningBar.offsetWidth/e.elements.loopBar.offsetWidth*100+"%",e.elements.loopBar.style.left=e.elements.loopBar.offsetLeft/e.elements.totalBar.offsetWidth*100+"%",e.elements.loopBar.style.width=e.elements.loopBar.offsetWidth/e.elements.totalBar.offsetWidth*100+"%",e.settings.loopJourney&&(e.createProgressDrag(e.elements.runningBar.offsetWidth),e.settings.loopJourney=!1),C("mouseup",e.listeners.onMouseUpLoopEnd,!1),C("touchend",e.listeners.onMouseUpLoopEnd,!1),C("mousemove",e.listeners.onCursorMoveLoopEnd,!1),C("touchmove",e.listeners.onCursorMoveLoopEnd,!1),e.elements.loopBar.addEventListener("mousedown",e.listeners.onMouseDown,!1),e.elements.loopBar.addEventListener("touchstart",e.listeners.onMouseDown,{passive:!0},!1),e.settings.playAfterResize){var n;if("idle"===e.clip.runTimeInfo.state)n=e.clip.speed>=0?e.settings.loopStartMillisecond+1:e.settings.loopEndMillisecond-1,e.settings.needsUpdate=!0,e.createJourney(n,{before:"pause",after:"play"});else if("completed"===e.clip.runTimeInfo.state){var o;o=e.clip.speed>=0?e.settings.loopStartMillisecond+1:e.settings.loopEndMillisecond-1,e.settings.needsUpdate=!0,e.createJourney(o,{before:"pause",after:"play"})}else e.clip.play();e.settings.playAfterResize=!1}},e.listeners.onMouseDownLoopEnd=function(t){e.elements.listenerHelper.style.pointerEvents="auto",e.settings.resizeLoop=!0,e.settings.needsUpdate=!0,"playing"===e.clip.runTimeInfo.state&&(e.clip.pause(),e.settings.playAfterResize=!0),t.preventDefault(),e.elements.runningBar.style.width=e.elements.runningBar.offsetWidth+"px",e.elements.loopBar.style.left=e.elements.loopBar.offsetLeft+"px",e.elements.loopBar.style.width=e.elements.loopBar.offsetWidth+"px",e.elements.loopBar.removeEventListener("mousedown",e.listeners.onMouseDown,!1),e.elements.loopBar.removeEventListener("touchstart",e.listeners.onMouseDown,!1),e.listeners.onCursorMoveLoopEnd(t),S("mouseup",e.listeners.onMouseUpLoopEnd,!1),S("touchend",e.listeners.onMouseUpLoopEnd,!1),S("mousemove",e.listeners.onCursorMoveLoopEnd,!1),S("touchmove",e.listeners.onCursorMoveLoopEnd,!1)},e.elements.loopBarEnd.addEventListener("mousedown",e.listeners.onMouseDownLoopEnd,!1),e.elements.loopBarEnd.addEventListener("touchstart",e.listeners.onMouseDownLoopEnd,{passive:!1},!1),function(e){e.listeners.onCursorMove=function(t){t.preventDefault();var n=(t.clientX||((t.touches||[])[0]||{}).clientX)-e.elements.loopBar.getBoundingClientRect().left;n<0?n=0:n>e.elements.loopBar.offsetWidth&&(n=e.elements.loopBar.offsetWidth),e.handleDrag(n)},e.listeners.onMouseUp=function(){e.elements.listenerHelper.style.pointerEvents="none",P("mouseup",e.listeners.onMouseUp,!1),P("touchend",e.listeners.onMouseUp,!1),P("mousemove",e.listeners.onCursorMove,!1),P("touchmove",e.listeners.onCursorMove,!1),e.handleDragEnd(e.settings)},e.listeners.onMouseDown=function(t){e.elements.listenerHelper.style.pointerEvents="auto","playing"===e.clip.runTimeInfo.state&&(e.settings.playAfterResize=!0),e.handleDragStart(e.clip),e.listeners.onCursorMove(t),V("mouseup",e.listeners.onMouseUp,!1),V("touchend",e.listeners.onMouseUp,!1),V("mousemove",e.listeners.onCursorMove,!1),V("touchmove",e.listeners.onCursorMove,!1)},e.elements.loopBar.addEventListener("mousedown",e.listeners.onMouseDown,!1),e.elements.loopBar.addEventListener("touchstart",e.listeners.onMouseDown,{passive:!1},!1)}(this),function(e){e.listeners.onCursorMoveLoopStart=function(t){t.preventDefault();var n=t.clientX||((t.touches||[])[0]||{}).clientX,o=e.elements.totalBar.getBoundingClientRect(),s=Math.round(n-o.left),i=Math.round(e.settings.loopEndMillisecond/e.clip.duration*e.elements.totalBar.offsetWidth);s<0?s=0:s>e.elements.totalBar.offsetWidth&&(s=e.elements.totalBar.offsetWidth);var a=e.clip.runTimeInfo.currentMillisecond/e.clip.duration*e.elements.totalBar.offsetWidth-s;e.elements.loopBar.style.left=s+"px",e.elements.loopBar.style.width=i-s+"px",e.elements.runningBar.style.width=a+"px",e.settings.loopLastPositionXPxls=s,e.settings.loopStartMillisecond=Math.round(e.clip.duration*e.elements.loopBar.offsetLeft/e.elements.totalBar.offsetWidth),e.settings.loopEndMillisecond<e.settings.loopStartMillisecond&&(e.settings.loopEndMillisecond=e.settings.loopStartMillisecond,e.elements.loopBar.style.width="0px",e.elements.runningBar.style.width="0px"),e.elements.loopEndTime.innerHTML=e.settings.loopEndMillisecond,e.elements.loopStartTime.innerHTML=e.settings.loopStartMillisecond,e.settings.loopStartMillisecond>e.clip.runTimeInfo.currentMillisecond&&(e.settings.loopJourney=!0)},e.listeners.onMouseUpLoopStart=function(t){var n;e.elements.listenerHelper.style.pointerEvents="none",e.settings.resizeLoop=!1,t.preventDefault(),e.settings.loopJourney&&(e.createProgressDrag(e.elements.runningBar.offsetWidth),e.settings.loopJourney=!1),e.elements.loopBar.style.left=e.elements.loopBar.offsetLeft/e.elements.totalBar.offsetWidth*100+"%",e.elements.loopBar.style.width=e.elements.loopBar.offsetWidth/e.elements.totalBar.offsetWidth*100+"%",e.settings.loopStartMillisecond=Math.round(e.clip.duration*e.elements.loopBar.offsetLeft/e.elements.totalBar.offsetWidth),e.elements.runningBar.style.width=e.elements.runningBar.offsetWidth/e.elements.loopBar.offsetWidth*100+"%",T("mouseup",e.listeners.onMouseUpLoopStart,!1),T("touchend",e.listeners.onMouseUpLoopStart,!1),T("mousemove",e.listeners.onCursorMoveLoopStart,!1),T("touchmove",e.listeners.onCursorMoveLoopStart,!1),e.elements.loopBar.addEventListener("mousedown",e.listeners.onMouseDown,!1),e.elements.loopBar.addEventListener("touchstart",e.listeners.onMouseDown,{passive:!0},!1),e.settings.playAfterResize&&("idle"===e.clip.runTimeInfo.state?(n=e.clip.speed>=0?e.settings.loopStartMillisecond+1:e.settings.loopEndMillisecond-1,e.settings.needsUpdate=!0,e.createJourney(n,{before:"pause",after:"play"})):e.clip.play(),e.settings.playAfterResize=!1)},e.listeners.onMouseDownLoopStart=function(t){e.elements.listenerHelper.style.pointerEvents="auto",e.settings.resizeLoop=!0,t.preventDefault(),e.settings.needsUpdate=!0,"playing"===e.clip.runTimeInfo.state&&(e.clip.pause(),e.settings.playAfterResize=!0),e.elements.loopBar.removeEventListener("mousedown",e.listeners.onMouseDown,!1),e.elements.loopBar.removeEventListener("touchstart",e.listeners.onMouseDown,!1),e.listeners.onCursorMoveLoopStart(t),E("mouseup",e.listeners.onMouseUpLoopStart,!1),E("touchend",e.listeners.onMouseUpLoopStart,!1),E("mousemove",e.listeners.onCursorMoveLoopStart,!1),E("touchmove",e.listeners.onCursorMoveLoopStart,!1)},e.elements.loopBarStart.addEventListener("mousedown",e.listeners.onMouseDownLoopStart,!1),e.elements.loopBarStart.addEventListener("touchstart",e.listeners.onMouseDownLoopStart,{passive:!1},!1)}(this),function(e){e.listeners.editableLoopStartTime=function(){e.elements.editableLoopStartTime.value=e.elements.loopStartTime.innerHTML,e.elements.loopStartTime.replaceWith(e.elements.editableLoopStartTime),e.elements.editableLoopStartTime.focus()},e.listeners.editableLoopEndTime=function(){e.elements.editableLoopEndTime.value=e.elements.loopEndTime.innerHTML,e.elements.loopEndTime.replaceWith(e.elements.editableLoopEndTime),e.elements.editableLoopEndTime.focus()},e.elements.editableLoopEndTime.onkeydown=e.elements.editableLoopStartTime.onkeydown=function(t){t.preventDefault(),13===t.keyCode&&(e.elements.editableLoopStartTime.onfocusout(),e.elements.editableLoopEndTime.onfocusout()),8===t.keyCode&&(t.target.value=t.target.value.toString().substring(0,t.target.value.toString().length-1)),13===t.keyCode&&t.target.blur();var n=parseFloat((t.target.value||0).toString()+t.key);if(!(n>e.clip.duration))if(t.target.value=n,t.target===e.elements.editableLoopStartTime){var o=e.elements.totalBar.getBoundingClientRect(),s={preventDefault:function(){},clientX:e.elements.totalBar.offsetWidth/e.clip.duration*t.target.value+o.left};e.listeners.onMouseDownLoopStart(s),e.listeners.onCursorMoveLoopStart(s),e.listeners.onMouseUpLoopStart(s)}else if(t.target===e.elements.editableLoopEndTime){var i=e.elements.totalBar.getBoundingClientRect(),a={preventDefault:function(){},clientX:e.elements.totalBar.offsetWidth/e.clip.duration*t.target.value+i.left};e.listeners.onMouseDownLoopEnd(a),e.listeners.onCursorMoveLoopEnd(a),e.listeners.onMouseUpLoopEnd(a)}},e.elements.loopStartTime.onclick=e.listeners.editableLoopStartTime,e.elements.loopEndTime.onclick=e.listeners.editableLoopEndTime,e.elements.editableLoopStartTime.onfocusout=function(){e.elements.editableLoopStartTime.replaceWith(e.elements.loopStartTime)},e.elements.editableLoopEndTime.onfocusout=function(){e.elements.editableLoopEndTime.replaceWith(e.elements.loopEndTime)}}(this),M(this),function(e){e.elements.statusButton.onclick=function(t){return t.preventDefault(),"playing"===e.clip.runTimeInfo.state?e.clip.pause():"paused"!==e.clip.runTimeInfo.state&&"idle"!==e.clip.runTimeInfo.state&&"transitional"!==e.clip.runTimeInfo.state&&"armed"!==e.clip.runTimeInfo.state||e.clip.play(),!1}}(this),O(this),j(this),_(this),function(e){K("".concat(e.name,"-controls")).onmouseover=function(){e.settings.loopActivated&&(e.elements.loopBarStart.classList.remove("m-fadeOut"),e.elements.loopBarEnd.classList.remove("m-fadeOut"),e.elements.loopBarStart.classList.add("m-fadeIn"),e.elements.loopBarEnd.classList.add("m-fadeIn"))},K("".concat(e.name,"-controls")).onmouseout=function(t){var n=t.toElement||t.relatedTarget||t.target;Q(this,n)||n===this||e.settings.loopActivated&&(e.elements.loopBarStart.classList.add("m-fadeOut"),e.elements.loopBarEnd.classList.add("m-fadeOut"),e.elements.loopBarStart.classList.remove("m-fadeIn"),e.elements.loopBarEnd.classList.remove("m-fadeIn"))};var t=!1;K("".concat(e.name,"-controls")).ontouchstart=function(n){var o=n.toElement||n.relatedTarget||n.target;Q(e.elements.statusButton,o)||o===e.elements.statusButton||Q(e.elements.settingsButton,o)||o===e.elements.settingsButton||Q(e.elements.fullScreenButton,o)||o===e.elements.fullScreenButton||Q(e.elements.loopButton,o)||o===e.elements.loopButton||Q(e.elements.totalBar,o)||o===e.elements.totalBar||(e.elements.settings.showVolume&&(e.elements.volumeControl.className="".concat(e.name,"-volume-width-transition"),e.elements.volumeBar.className="".concat(e.name,"-volume-width-transition"),e.elements.volumeBarHelper.className="".concat(e.name,"-volume-width-transition")),e.elements.timeDisplay.className="".concat(e.name,"-time-width-transition"),e.elements.volumeCursor.className="".concat(e.name,"-volume-cursor-transition"),t=!0)},window.addEventListener("touchstart",(function(n){var o=n.toElement||n.relatedTarget||n.target;Q(K("".concat(e.name,"-controls")),o)||o===K("".concat(e.name,"-controls"))||t&&(e.elements.volumeControl.className="",e.elements.volumeBar.className="",e.elements.volumeBarHelper.className="",e.elements.timeDisplay.className="",e.elements.volumeCursor.className="")}))}(this),ee(this),function(e){e.elements.donkeyclipButton.addEventListener("click",(function(){var t=te(),n=window.open("https://donkeyclip.com?u=".concat(t)),o=e.clip.exportDefinition(),s=e.clipClass;window.addEventListener("message",(function(e){e.data===t&&n.postMessage(JSON.stringify({definition:o,clipClass:s,u:t}),"*")}),!1)}))}(this),function(e){if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){var t=function(){e.options.preview&&(ne("".concat(e.name,"-hover-display")).classList.toggle("m-fadeIn"),ne("".concat(e.name,"-hover-display")).classList.toggle("m-fadeOut"),e.elements.loopBar.onmousemove=o)},n=function n(){e.options.preview&&(t(),e.elements.loopBar.onmouseover=e.elements.loopBar.onmouseout=t,e.elements.loopBar.onmousemove=o,se("mouseup",n,!1),se("touchend",n,!1),se("mousemove",o,!1),se("touchmove",o,!1))};e.elements.loopBar.onmouseover=e.elements.loopBar.onmouseout=t,e.elements.loopBar.onmousedown=function(){e.options.preview&&(e.elements.loopBar.onmouseover=e.elements.loopBar.onmouseout=null,e.elements.loopBar.onmousemove=null,oe("mouseup",n,!1),oe("touchend",n,!1),oe("mousemove",o,!1),oe("touchmove",o,!1))},e.elements.loopBar.onmouseup=function(){e.options.preview&&(se("mouseup",n,!1),se("touchend",n,!1),se("mousemove",o,!1),se("touchmove",o,!1),e.elements.loopBar.onmouseover=e.elements.loopBar.onmouseout=t,e.elements.loopBar.onmousemove=o)};var o=function(t){var n=t.clientX,o=e.elements.loopBar.getBoundingClientRect();if(n-o.left+e.settings.loopLastPositionXPxls>e.settings.loopLastPositionXPxls+e.elements.loopBar.offsetWidth&&!e.settings.resizeLoop)ne("".concat(e.name,"-hover-millisecond")).innerHTML=e.timeFormat(e.settings.loopEndMillisecond);else if(n-o.left<0&&!e.settings.resizeLoop)ne("".concat(e.name,"-hover-millisecond")).innerHTML=e.timeFormat(e.settings.loopStartMillisecond);else{var s=n-o.left+e.settings.loopLastPositionXPxls;s<0&&(s=0);var i=ne("".concat(e.name,"-hover-display")).offsetWidth/2,a=ne("".concat(e.name,"-hover-display")).offsetWidth/2,l=s-a;s-i<0?l=0:s+i>e.elements.totalBar.offsetWidth&&(l=e.elements.totalBar.offsetWidth-a-i);var r=Math.round(s/e.elements.totalBar.offsetWidth*e.clip.duration);if(e.options.preview){var c=r/e.clip.duration;e.previewClip.onProgress(c,r)}ne("".concat(e.name,"-hover-millisecond")).innerHTML=e.timeFormat(r),ne("".concat(e.name,"-hover-display")).style.left=l+"px"}}}}(this),function(e){document.addEventListener("fullscreenchange",(function(){e.elements.mcPlayer.classList.toggle("full-screen"),e.clip.props.host.classList.toggle("full-screen"),e.options.preview&&e.setPreviewDimentions()})),document.addEventListener("webkitfullscreenchange",(function(){e.elements.mcPlayer.classList.toggle("full-screen"),e.clip.props.host.classList.toggle("full-screen"),e.options.preview&&e.setPreviewDimentions()})),document.addEventListener("mozfullscreenchange",(function(){e.elements.mcPlayer.classList.toggle("full-screen"),e.clip.props.host.classList.toggle("full-screen"),e.options.preview&&e.setPreviewDimentions()})),document.addEventListener("MSFullscreenChange",(function(){e.elements.mcPlayer.classList.toggle("full-screen"),e.clip.props.host.classList.toggle("full-screen"),e.options.preview&&e.setPreviewDimentions()})),ie("body")[0].addEventListener("click",(function(t){if(t.target.className==="".concat(e.name,"-speed-value")){var n=t.target.dataset.speedValue-0;e.clip.executionSpeed=t.target.dataset.speedValue,n=1==e.clip.speed?"Normal":e.clip.speed,e.elements.speedCurrent.innerHTML=n;var o=1/(e.options.speedValues.length-1),s=-1*(t.target.dataset.zone*o-1)*(16*(e.options.speedValues.length-1));ae("".concat(e.name,"-speed-cursor")).style.top=s+"px"}}))}(this)}},{key:"launchIntoFullscreen",value:function(e){this.options.preview&&this.setPreviewDimentions(),e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}},{key:"exitFullscreen",value:function(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()}},{key:"setTheme",value:function(){re(this.name+"-style")&&ce("head")[0].removeChild(re(this.name+"-style")),this.options.theme.replace(/\s\s+/g," "),this.options.theme.trim(),this.options.theme.includes("on-top")||this.options.theme.includes("position-bottom")||(this.options.theme+=" on-top");var e={};for(var t in this.options.theme.split(" ")){var n=b(this.options.theme.split(" ")[t],this.name);for(var o in n||{})e[o]=n[o]}var s=function(e,t,n){return"\n#".concat(t,", #").concat(t," *{\n  font-family:'Ubuntu' !important;\n}\n#").concat(t," .background {\n  background-color: ").concat(n.backgroundColor,";\n  width:100%;\n  height:").concat(e["background-height"],";;\n  position:absolute;\n  top:0px;\n  left:0px;\n  z-index:-2000;\n}\n\n#").concat(t," .full-screen #").concat(t,"-controls {\n  position:fixed;\n  left:0px;\n  bottom:0px;\n}\n\n#").concat(t," .full-screen #").concat(t,"-settings-panel {\n  position:fixed;\n  bottom: 45px;\n}\n\n#").concat(t," .svg,#").concat(t," .svg *,#").concat(t," svg,#").concat(t," svg *  {\n  fill: ").concat(e["svg-color"],";\n}\n\n#").concat(t," .svg.arrow * {\n  stroke: ").concat(e["svg-color"],";\n  fill: transparent;\n}\n\n#").concat(t," .pointer-event-panel {\n  height: ").concat(e["pointer-event-panel-height"],";\n  display:flex;\n  align-items:center;\n  justify-content:center;\n}\n#").concat(t,"-pointer-event-panel{\n  width:100%;\n  position:absolute;\n  z-index:100;\n}\n#").concat(t,"-listener-helper{\n  width:100%;\n  height:calc( 100% - 45px );\n  position:absolute;\n  z-index:110;\n}\n#").concat(t," .svg-selected svg{\n  fill: ").concat(e["svg-selected-color"],";\n  stroke: ").concat(e["svg-selected-color"],";\n}\n#").concat(t,"-hover-display{\n  display: flex;\n  visibility:hidden;\n  opacity:0;\n  background-color: black;\n  position: absolute;\n  bottom: 30px;\n  left: 0px;\n  align-items: flex-end;\n  justify-content: center;\n}\n#").concat(t,"-hover-display-clip{\n  width:100%;\n  height:100%;\n  overflow:hidden;\n  position:relative;\n}\n#").concat(t,"-hover-display-border{\n  border: ").concat(e["preview-border"],";\n  position:absolute;\n  width:calc(100% - 4px);\n  height:calc(100% - 4px);\n  z-index:2;\n}\n\n#").concat(t,"-hover-millisecond {\n  font-weight:bold;\n  padding:3px;\n  height:18px;\n  margin:0px;\n  line-height:12px;\n  font-size:10px;\n  text-align: center;\n  min-width:20px;\n  max-width:100px;\n  z-index:2;\n  position:absolute;\n  bottom:-25px;\n}\n#").concat(t,",\n#").concat(t," ::before,\n#").concat(t," :::after,\n#").concat(t," div,\n#").concat(t," p,\n#").concat(t," span,\n#").concat(t," ul,\n#").concat(t," li {\n  font-weight: 400;\n  line-height: 1.9 !important;\n  color: ").concat(e.color,';\n  font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif;\n  box-sizing:border-box;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n#').concat(t," {\n  line-height: 1.9;\n  font-size: 12px;\n  overflow:hidden;\n  height: calc(100% + ").concat(e["controls-position"],");\n  width:100%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  color: ").concat(e.color,";\n  pointer-events:auto;\n}\n\n#").concat(t," .force-show-controls {\n  opacity:1 !important;\n}\n\n").concat(n.theme.includes("position-bottom")?"\n    #".concat(t,"-controls {\n      opacity:1 !important;\n    }\n    "):"#".concat(t,":hover #").concat(t,"-controls {\n  opacity:1 !important;\n}\n"),"\n\n#").concat(t,":hover {\n  pointer-events:none;\n}\n\n#").concat(t,"-settings-speed-hide {\n  text-align:right;\n}\n\n#").concat(t," .grad {\n  pointer-events:none !important;\n  background-image: linear-gradient(\n    rgba(0,0,0,00.001),\n    rgba(0,0,0,00.004),\n    rgba(0,0,0,00.007),\n    rgba(0,0,0,00.01),\n    rgba(0,0,0,0.04),\n    rgba(0,0,0,0.07),\n    rgba(0,0,0,0.1),\n    rgba(0,0,0,0.15),\n    rgba(0,0,0,0.2),\n    rgba(0,0,0,0.25),\n    rgba(0,0,0,0.3),\n    rgba(0,0,0,0.35),\n    rgba(0,0,0,0.4),\n    rgba(0,0,0,0.45),\n    rgba(0,0,0,0.5),\n    rgba(0,0,0,0.55),\n    rgba(0,0,0,0.6),\n    rgba(0,0,0,0.65),\n    rgba(0,0,0,0.7),\n    rgba(0,0,0,0.75),\n    rgba(0,0,0,0.8),\n    rgba(0,0,0,0.88)\n  );\n  position:absolute;\n  width:100%;\n  height:").concat(e["grad-height"],";\n  left:0px;\n  bottom:0px;\n  z-index:-1;\n}\n\n#").concat(t," #").concat(t,"-controls {\n  touch-action: none;\n  background-color: ").concat(e["background-color"],";\n  border: ").concat(e["controls-border"],";\n  position: absolute;\n  bottom: ").concat(e["controls-bottom"],";\n  left: 0px;\n  width: 100%;\n  z-index:100;\n  height: 44px;\n  opacity:0;\n  display:flex;\n  border-radius: 6px;\n  align-items:center;\n  -webkit-transition: opacity 0.2s ease;\n  -moz-transition: opacity 0.2s ease;\n  transition: opacity 0.2s ease;\n}\n\n#").concat(t," #").concat(t,"-totalbar {\n  width: calc(100% - 20px);\n  height: 5px;\n  margin: 0px 10px 0px 10px;\n  background-color: ").concat(e["totalbar-color"],";\n  position: absolute;\n  top: 0px;\n  left: 0px;\n}\n\n#").concat(t," #").concat(t,"-loopbar {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0px;\n  left: 0px;\n  background-color: ").concat(e["loopbar-color"],";\n}\n\n#").concat(t," .").concat(t,"-loop-boundaries::before {\n  ").concat(e["loopbar-boundaries-style::before"],"\n\n}\n#").concat(t," .").concat(t,"-loop-boundaries {\n  transform:translate(-50%,-37%);\n  position:absolute;\n  width:18px;\n  background-color:").concat(e["loopbar-boundaries-color"],";\n  height:18px;\n  border-radius:10px;\n  z-index:40;\n  ").concat(e["loopbar-boundaries-style"],"\n}\n\n#").concat(t," .").concat(t,"-loop-boundaries::after {\n  ").concat(e["loopbar-boundaries-style::after"],"\n\n}\n\n#").concat(t," #").concat(t,"-helperbar {\n  position: absolute;\n  height: 20px;\n  top: -10px;\n  left: 0px;\n  right: 0px;\n  z-index:2;\n}\n\n#").concat(t," #").concat(t,"-runningbar {\n  position: relative;\n  width: 0px;\n  max-width:100%;\n  height: 100%;\n  background-color: ").concat(e["runningbar-color"],";\n}\n\n#").concat(t," #").concat(t,"-cursor {\n  transform:translate(50%,-36%);\n  right: 0px;\n  overflow:hidden;\n  top: 0px;\n  width: 0px;\n  height: 0px;\n  position: absolute;\n  background-color: ").concat(e["cursor-color"],";\n  border-radius: 10px;\n  z-index: 5;\n}\n\n#").concat(t," #").concat(t,"-cursor::before {\n  ").concat(e["cursor-style::before"],"\n}\n\n#").concat(t," #").concat(t,"-cursor::after {\n  ").concat(e["cursor-style::after"],"\n}\n\n#").concat(t," #").concat(t,"-left-controls,#").concat(t," #").concat(t,"-right-controls {\n    display: flex;\n    align-items:center;\n    height: 100%;\n    padding: 5px 5px 0px;\n}\n#").concat(t," #").concat(t,"-right-controls {\n  position:absolute;\n  right:0px;\n}\n\n\n#").concat(t," #").concat(t,"-left-controls > div,#").concat(t," #").concat(t,"-right-controls > div {\n  display: inline-flex;\n  align-items:center;\n  margin:0 10px 0 10px;\n  overflow:hidden;\n}\n\n\n#").concat(t," #").concat(t,"-time-display span {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n#").concat(t," #").concat(t,"-status-btn {\n  opacity: ").concat(e["button-opacity"],";\n}\n#").concat(t," #").concat(t,"-status-btn svg{\n  width:20px;\n  height:18px;\n}\n#").concat(t," #").concat(t,"-volume {\n  opacity: ").concat(e["button-opacity"],";\n  position: relative;\n}\n#").concat(t," #").concat(t,"-volume-btn {\n  width: 20px;\n  height: 15px;\n}\n\n#").concat(t," #").concat(t,"-volumebar {\n  width: 0px;\n  height: 3px;\n  background-color: ").concat(e["loopbar-color"],";\n  -webkit-transition: left 0.1s ease;\n  -moz-transition: left 0.1s ease;\n  transition: left 0.1s ease;\n  position:relative;\n  left:5px;\n}\n\n#").concat(t," #").concat(t,"-volumebar-helper {\n  position: absolute;\n    width: 0px;\n    height: 15px;\n    bottom: 0px;\n    z-index: 10;\n    left: 25px;\n}\n\n#").concat(t," #").concat(t,"-volumebar-active {\n  position: relative;\n  width: 0%;\n  height: 100%;\n  background-color: ").concat(e.color,";\n  position:relative;\n  bottom:0px;\n}\n\n#").concat(t," #").concat(t,"-volume-cursor {\n  transform:translate(50%,-36%);\n  right: 0px;\n  top: 0px;\n  width: 0px;\n  height: 0px;\n  position: absolute;\n  background-color: ").concat(e.color,";\n  border-radius: 10px;\n  z-index: 5;\n}\n\n#").concat(t," .").concat(t,"-loopbar-time {\n  width:auto;\n  height:12px;\n  background-color:").concat(e["background-color"],";\n  line-height:10px;\n  font-size:10px;\n}\n\n#").concat(t," #").concat(t,"-loop-time {\n  margin: 7px;\n}\n\n#").concat(t," #").concat(t,"-dc-btn {\n    background-repeat: no-repeat;\n    background-size: 100% 100%;\n    width: 20px;\n    height: 15px;\n    margin: 7px 10px 5px 0px;\n    transform: scale(1.5,1.5);\n}\n\n#").concat(t," #").concat(t,"-loop-btn {\n  opacity: ").concat(e["button-opacity"],";\n  display:flex;\n  align-items:center;\n}\n\n\n#").concat(t," #").concat(t,"-settings-btn {\n  overflow:hidden;\n  opacity: ").concat(e["button-opacity"],";\n}\n\n#").concat(t," #").concat(t,"-full-screen-btn {\n  opacity: ").concat(e["button-opacity"],";\n}\n\n#").concat(t," .").concat(t,"-speed-btn {\n  opacity: ").concat(e["button-opacity"],";\n  height: 14px;\n}\n\n#").concat(t," #").concat(t,"-settings-panel {\n  touch-action: none;\n  box-sizing: border-box;\n  position: absolute;\n  z-index:102;\n  background-color: ").concat(e["settings-background-color"],";\n  bottom: ").concat(e["settings-panel-bottom"],";\n  border: ").concat(e.border,";\n  right: 8px;\n  width: 167px;\n  padding: 5px;\n  margin: 0px;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n#").concat(t," .").concat(t,"-hide {\n  display:none !important;\n}\n\n#").concat(t," #").concat(t,"-speed-value-bar {\n  position: relative;\n  width: 5px;\n  background-color: ").concat(e["speedbar-color"],";\n  display: inline-block;\n  box-sizing: border-box;\n  height: ").concat(16*n.speedValues.length,"px;\n  float: left;\n  margin-right:15px;\n}\n\n#").concat(t," #").concat(t,"-speed-value-helperbar {\n  position: absolute;\n  width: 25px;\n  height: ").concat(16*n.speedValues.length,"px;\n  float: left;\n  left: 18px;\n  z-index:10;\n}\n\n\n#").concat(t," #").concat(t,"-speed-value-bar:hover,\n#").concat(t," #").concat(t,"-speed-value-helperbar {\n  cursor: pointer;\n}\n\n#").concat(t," #").concat(t,"-volumebar:hover,\n#").concat(t," #").concat(t,"-volumebar-helper:hover,\n#").concat(t," #").concat(t,"-volume-btn:hover,\n#").concat(t," #").concat(t,"-volumebar:active,\n#").concat(t," #").concat(t,"-volumebar-helper:active,\n#").concat(t," #").concat(t,"-volume-btn:active {\n  cursor:pointer;\n}\n\n#").concat(t," #").concat(t,"-speed-cursor {\n  position: absolute;\n  background-color: ").concat(e["speedbar-cursor-color"],";\n  top: 0px;\n  left: 0px;\n}\n\n#").concat(t," #").concat(t,"-speed-cursor div {\n  position: absolute;\n  background-color: ").concat(e["speedbar-cursor-color"],";\n  left: -2.5px;\n  top: -4px;\n  width: 10px;\n  height: 10px;\n  border-radius: 5px;\n}\n\n#").concat(t," #").concat(t,"-time-separator{\n  margin:0 3px;\n}\n#").concat(t," #").concat(t,"-speed-cursor:hover {\n  cursor: pointer;\n}\n\n#").concat(t," .").concat(t,"-speed-value-step {\n  width: 16px;\n  background-color: ").concat(e["speedbar-color"],";\n  display: inline-block;\n  box-sizing: border-box;\n  height: 2px;\n  margin-top: 7px;\n  margin-bottom: 7px;\n  float: left;\n}\n\n#").concat(t," #").concat(t,"-speed-value {\n  display: inline-block;\n  box-sizing: border-box;\n  height: ").concat(16*n.speedValues.length,"px;\n  text-align: left;\n}\n\n#").concat(t," .").concat(t,"-speed-value {\n  box-sizing: border-box;\n  height: 16px;\n  font-size: 12px;\n}\n\n#").concat(t," #").concat(t,"-indicator {\n  font-size: 8px !important;\n  position: absolute;\n  bottom: -3px;\n  color: ").concat(e.color,";\n}\n\n\n#").concat(t," #").concat(t,"-speed-settings li.no-hover { \n  height: ").concat(16*n.speedValues.length+10-2,"px !important; \n}\n\n#").concat(t," #").concat(t,"-settings-panel.").concat(t,"-settings-speed-panel {\n  overflow: hidden;\n  width: 92px;\n  position:absolute;\n  z-index:120;\n  /*height: ").concat(16*n.speedValues.length+32+20,"px;*/\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n#").concat(t," #").concat(t,"-settings-panel.").concat(t,"-settings-speed-panel .").concat(t,"-speed-btn {\n  float: left;\n}\n\n#").concat(t," .").concat(t,"-settings-speed-panel ul:first-child {\n  text-align: right;\n}\n\n#").concat(t," #").concat(t,"-speed-current {\n  float: right;\n  padding-right: 10px\n}\n\n#").concat(t," #").concat(t,"-settings-panel .").concat(t,"-speed-btn {\n  float: right;\n}\n\n#").concat(t," #").concat(t,"-settings-panel ul {\n  width: 100%;\n  margin: 0px;\n  padding: 0px;\n  overflow: hidden;\n}\n\n#").concat(t," #").concat(t,"-settings-panel.").concat(t,"-settings-speed-panel ul li {\n  min-width: 70px;\n  display: flex;\n  height: 32px;\n  align-items: center;\n  justify-content:center;\n}\n\n#").concat(t," #").concat(t,"-settings-panel ul li.no-hover:hover {\n  background-color: transparent;\n  cursor: default;\n}\n\n#").concat(t," div.").concat(t,"-speed-value:hover {\n  background-color: ").concat(e["hover-color"],";\n  cursor: pointer;\n}\n\n#").concat(t," #").concat(t,"-settings-panel ul li {\n  /*position: relative;\n  width: 100%;\n  min-width: 154px;*/\n  list-style-type: none;\n  margin: 0px;\n  padding: 5px;\n  display: flex;\n  height:32px;\n  align-items:center;\n}\n\n#").concat(t," #").concat(t,"-settings-panel ul li label {\n  margin: 0px;\n}\n\n#").concat(t," .switch {\n  position: relative;\n  display: inline-block;\n  width: 32px;\n  height: 18px;\n}\n\n#").concat(t," .switch input {\n  display: none;\n}\n\n#").concat(t," .settings-switch {\n  position: absolute;\n  right: 24px;\n}\n\n#").concat(t," .settings-switch::after {\n  clear: both;\n}\n\n#").concat(t," .slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: ").concat(e["slider-off-color"],";\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\n#").concat(t,' .slider:before {\n  position: absolute;\n  content: "";\n  height: 16px;\n  width: 16px;\n  left: 1px;\n  bottom: 1px;\n  background-color: white;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\n#').concat(t," input:checked+.slider {\n  background-color: ").concat(e["slider-on-color"],";\n}\n\n#").concat(t," input:focus+.slider {\n  box-shadow: 0 0 1px ").concat(e["slider-on-color"],";\n}\n\n#").concat(t," input:checked+.slider:before {\n  -webkit-transform: translateX(16px);\n  -ms-transform: translateX(16px);\n  transform: translateX(16px);\n}\n\n\n/* Rounded sliders */\n\n#").concat(t," .slider.round {\n  border-radius: 34px;\n}\n\n#").concat(t," .slider.round:before {\n  border-radius: 50%;\n}\n\n\n#").concat(t," .m-fadeOut {\n  visibility: hidden !important;\n  opacity: 0 !important;\n}\n\n#").concat(t," .m-fadeIn {\n  visibility: visible !important;\n  opacity: 1 !important;\n}\n\n#").concat(t," #").concat(t,"-settings-panel ul li:hover {\n  background-color: ").concat(e["hover-color"],";\n  cursor: pointer;\n}\n\n#").concat(t," #").concat(t,"-settings-panel ul li label:hover {\n  cursor: pointer;\n}\n\n#").concat(t," #").concat(t,"-loopbar:hover {\n  cursor: pointer;\n}\n\n#").concat(t," #").concat(t,"-status-btn:hover {\n  cursor: pointer;\n}\n\n#").concat(t," #").concat(t,"-controls:active #").concat(t,"-cursor,\n#").concat(t," #").concat(t,"-controls:hover #").concat(t,"-cursor  {\n  width: 16px;\n  height: 16px;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n#").concat(t," #").concat(t,"-volume .").concat(t,"-volume-cursor-transition {\n  width: 12px;\n  height: 12px;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n#").concat(t," #").concat(t,"-volume .").concat(t,"-volume-width-transition\n {\n  width: 50px;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n#").concat(t," #").concat(t,"-time-display.").concat(t,"-time-width-transition {\n  position:relative;\n  left: 10px;\n  -webkit-transition: left 0.3s ease;\n  -moz-transition: left 0.3s ease;\n  transition: left 0.3s ease;\n}\n\n#").concat(t," #").concat(t,"-settings-speed:hover .").concat(t,"-speed-btn {\n  opacity: 1;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n#").concat(t," #").concat(t,"-status-btn:hover {\n  opacity: 1;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n#").concat(t," #").concat(t,"-loop-btn:hover,\n#").concat(t," #").concat(t,"-dc-btn:hover\n {\n  cursor: pointer;\n  opacity: 1;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n#").concat(t," #").concat(t,"-settings-btn:hover {\n  cursor: pointer;\n  opacity: 1;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n#").concat(t," #").concat(t,"-full-screen-btn:hover {\n  cursor: pointer;\n  opacity: 1;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n").concat(e["theme-style"],"\n")}(e,this.name,this.options),i=pe("style");i.id=this.name+"-style",i.styleSheet?i.styleSheet.cssText=s:i.appendChild(document.createTextNode(s)),ce("head")[0].appendChild(i),this.eventBroadcast("theme-change",this.options.theme)}},{key:"setSpeed",value:function(){var e,t=this;e=1==this.clip.speed?"Normal":this.clip.speed,this.elements.speedCurrent.innerHTML=e;var n=-1*(function(){for(var e=0;e<t.options.speedValues.length-1;e++)if(t.options.speedValues[e]<=t.clip.speed&&t.options.speedValues[e+1]>t.clip.speed)return e+Math.abs((t.clip.speed-t.options.speedValues[e])/(t.options.speedValues[e]-t.options.speedValues[e+1]))}()*(1/(this.options.speedValues.length-1))-1)*(this.options.speedValues.length-1)*16;re("".concat(this.name,"-speed-cursor")).style.top=n+"px"}},{key:"calculateSpeed",value:function(e,t,n){var o=Math.floor(n/e);if(o===t.length-1)return t[o].toFixed(1);var s=(n/e%1*Math.abs(t[o]-t[o+1])+t[o]).toFixed(1);return 0==s?"0.0":s}},{key:"createPreviewDisplay",value:function(){this.previewClip=this.clip.paste(re("".concat(this.name,"-hover-display-clip")));var e=re("".concat(this.name,"-hover-display"));window.previewClip=this.previewClip,e.style.position="absolute",e.style.background=this.options.backgroundColor,e.style.zIndex=1,this.setPreviewDimentions()}},{key:"setPreviewDimentions",value:function(){var e=this.clip.props.host,t=this.previewClip.ownClip.props.host,n=e.offsetWidth,o=e.offsetHeight,s=n*this.previewScale;s>300&&(s=300,this.previewScale=s/n);var i=n*this.previewScale,a=o*this.previewScale,l=de({width:this.clip.props.containerParams.width,height:this.clip.props.containerParams.height},{width:i,height:a},"cover"===this.options.scaleToFit);this.previewClip.ownClip.rootElement.style.transform="scale(".concat(l.scale),this.previewClip.ownClip.rootElement.style.left=l.position.left+"px",this.previewClip.ownClip.rootElement.style.top=l.position.top+"px",re("".concat(this.name,"-hover-display")).style.width=i+"px",re("".concat(this.name,"-hover-display")).style.height=a+"px",t.style.boxSizing="border-box"}}])&&s(t.prototype,n),o&&s(t,o),e}()}));


/***/ }),

/***/ 444:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

!function(t,e){ true?e(exports,__webpack_require__(705),__webpack_require__(346)):0}(this,(function(t,e,n){"use strict";function i(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var r=i(e),s=i(n);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){d(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function h(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),t}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function v(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function g(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?v(t):e}function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=f(t);if(e){var r=f(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return g(this,n)}}function k(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=f(t)););return t}function b(t,e,n){return(b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=k(t,e);if(i){var r=Object.getOwnPropertyDescriptor(i,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function x(t,e,n,i){return(x="undefined"!=typeof Reflect&&Reflect.set?Reflect.set:function(t,e,n,i){var r,s=k(t,e);if(s){if((r=Object.getOwnPropertyDescriptor(s,e)).set)return r.set.call(i,n),!0;if(!r.writable)return!1}if(r=Object.getOwnPropertyDescriptor(i,e)){if(!r.writable)return!1;r.value=n,Object.defineProperty(i,e,r)}else d(i,e,n);return!0})(t,e,n,i)}function C(t,e,n,i,r){if(!x(t,e,n,i||t)&&r)throw new Error("failed to set property");return n}function I(t,e){return E(t)||function(t,e){var n=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null==n)return;var i,r,s=[],a=!0,o=!1;try{for(n=n.call(t);!(a=(i=n.next()).done)&&(s.push(i.value),!e||s.length!==e);a=!0);}catch(t){o=!0,r=t}finally{try{a||null==n.return||n.return()}finally{if(o)throw r}}return s}(t,e)||A(t,e)||O()}function w(t){return function(t){if(Array.isArray(t))return _(t)}(t)||P(t)||A(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(t){if(Array.isArray(t))return t}function P(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function A(t,e){if(t){if("string"==typeof t)return _(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(t,e):void 0}}function _(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function O(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function T(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}function D(t,e,n,i){var r=S();if(i)for(var s=0;s<i.length;s++)r=i[s](r);var a=e((function(t){r.initializeInstanceElements(t,o.elements)}),n),o=r.decorateClass(function(t){for(var e=[],n=function(t){return"method"===t.kind&&t.key===s.key&&t.placement===s.placement},i=0;i<t.length;i++){var r,s=t[i];if("method"===s.kind&&(r=e.find(n)))if($(s.descriptor)||$(r.descriptor)){if(N(s)||N(r))throw new ReferenceError("Duplicated methods ("+s.key+") can't be decorated.");r.descriptor=s.descriptor}else{if(N(s)){if(N(r))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+s.key+").");r.decorators=s.decorators}V(s,r)}else e.push(s)}return e}(a.d.map(M)),t);return r.initializeClassElements(a.F,o.elements),r.runClassFinishers(a.F,o.finishers)}function S(){S=function(){return t};var t={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(t,e){["method","field"].forEach((function(n){e.forEach((function(e){e.kind===n&&"own"===e.placement&&this.defineClassElement(t,e)}),this)}),this)},initializeClassElements:function(t,e){var n=t.prototype;["method","field"].forEach((function(i){e.forEach((function(e){var r=e.placement;if(e.kind===i&&("static"===r||"prototype"===r)){var s="static"===r?t:n;this.defineClassElement(s,e)}}),this)}),this)},defineClassElement:function(t,e){var n=e.descriptor;if("field"===e.kind){var i=e.initializer;n={enumerable:n.enumerable,writable:n.writable,configurable:n.configurable,value:void 0===i?void 0:i.call(t)}}Object.defineProperty(t,e.key,n)},decorateClass:function(t,e){var n=[],i=[],r={static:[],prototype:[],own:[]};if(t.forEach((function(t){this.addElementPlacement(t,r)}),this),t.forEach((function(t){if(!N(t))return n.push(t);var e=this.decorateElement(t,r);n.push(e.element),n.push.apply(n,e.extras),i.push.apply(i,e.finishers)}),this),!e)return{elements:n,finishers:i};var s=this.decorateConstructor(n,e);return i.push.apply(i,s.finishers),s.finishers=i,s},addElementPlacement:function(t,e,n){var i=e[t.placement];if(!n&&-1!==i.indexOf(t.key))throw new TypeError("Duplicated element ("+t.key+")");i.push(t.key)},decorateElement:function(t,e){for(var n=[],i=[],r=t.decorators,s=r.length-1;s>=0;s--){var a=e[t.placement];a.splice(a.indexOf(t.key),1);var o=this.fromElementDescriptor(t),u=this.toElementFinisherExtras((0,r[s])(o)||o);t=u.element,this.addElementPlacement(t,e),u.finisher&&i.push(u.finisher);var l=u.extras;if(l){for(var c=0;c<l.length;c++)this.addElementPlacement(l[c],e);n.push.apply(n,l)}}return{element:t,finishers:i,extras:n}},decorateConstructor:function(t,e){for(var n=[],i=e.length-1;i>=0;i--){var r=this.fromClassDescriptor(t),s=this.toClassDescriptor((0,e[i])(r)||r);if(void 0!==s.finisher&&n.push(s.finisher),void 0!==s.elements){t=s.elements;for(var a=0;a<t.length-1;a++)for(var o=a+1;o<t.length;o++)if(t[a].key===t[o].key&&t[a].placement===t[o].placement)throw new TypeError("Duplicated element ("+t[a].key+")")}}return{elements:t,finishers:n}},fromElementDescriptor:function(t){var e={kind:t.kind,key:t.key,placement:t.placement,descriptor:t.descriptor};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===t.kind&&(e.initializer=t.initializer),e},toElementDescriptors:function(t){var e;if(void 0!==t)return(e=t,E(e)||P(e)||A(e)||O()).map((function(t){var e=this.toElementDescriptor(t);return this.disallowProperty(t,"finisher","An element descriptor"),this.disallowProperty(t,"extras","An element descriptor"),e}),this)},toElementDescriptor:function(t){var e=String(t.kind);if("method"!==e&&"field"!==e)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+e+'"');var n=T(t.key),i=String(t.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var r=t.descriptor;this.disallowProperty(t,"elements","An element descriptor");var s={kind:e,key:n,placement:i,descriptor:Object.assign({},r)};return"field"!==e?this.disallowProperty(t,"initializer","A method descriptor"):(this.disallowProperty(r,"get","The property descriptor of a field descriptor"),this.disallowProperty(r,"set","The property descriptor of a field descriptor"),this.disallowProperty(r,"value","The property descriptor of a field descriptor"),s.initializer=t.initializer),s},toElementFinisherExtras:function(t){return{element:this.toElementDescriptor(t),finisher:j(t,"finisher"),extras:this.toElementDescriptors(t.extras)}},fromClassDescriptor:function(t){var e={kind:"class",elements:t.map(this.fromElementDescriptor,this)};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),e},toClassDescriptor:function(t){var e=String(t.kind);if("class"!==e)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+e+'"');this.disallowProperty(t,"key","A class descriptor"),this.disallowProperty(t,"placement","A class descriptor"),this.disallowProperty(t,"descriptor","A class descriptor"),this.disallowProperty(t,"initializer","A class descriptor"),this.disallowProperty(t,"extras","A class descriptor");var n=j(t,"finisher");return{elements:this.toElementDescriptors(t.elements),finisher:n}},runClassFinishers:function(t,e){for(var n=0;n<e.length;n++){var i=(0,e[n])(t);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");t=i}}return t},disallowProperty:function(t,e,n){if(void 0!==t[e])throw new TypeError(n+" can't have a ."+e+" property.")}};return t}function M(t){var e,n=T(t.key);"method"===t.kind?e={value:t.value,writable:!0,configurable:!0,enumerable:!1}:"get"===t.kind?e={get:t.value,configurable:!0,enumerable:!1}:"set"===t.kind?e={set:t.value,configurable:!0,enumerable:!1}:"field"===t.kind&&(e={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===t.kind?"field":"method",key:n,placement:t.static?"static":"field"===t.kind?"own":"prototype",descriptor:e};return t.decorators&&(i.decorators=t.decorators),"field"===t.kind&&(i.initializer=t.value),i}function V(t,e){void 0!==t.descriptor.get?e.descriptor.get=t.descriptor.get:e.descriptor.set=t.descriptor.set}function N(t){return t.decorators&&t.decorators.length}function $(t){return void 0!==t&&!(void 0===t.value&&void 0===t.writable)}function j(t,e){var n=t[e];if(void 0!==n&&"function"!=typeof n)throw new TypeError("Expected '"+e+"' to be a function");return n}var B=[{key:"info",style:"color: #666;",level:5,consoleMethod:"log"},{key:"notice",style:"background: rgba(0, 0, 0, 0.8); color:white; padding:8px;",level:4,consoleMethod:"log"},{key:"warning",style:"color: black; background: orange;",level:2,consoleMethod:"warn"},{key:"error",style:"color: black; background: red;",level:1,consoleMethod:"error"}],L="data-motorcortex2-id",R="closed",F="MotorCortex",z=2,G={staggerPreface:"@stagger",mathExpPreface:"@expression",attibuteValue:"@attribute",patternValue:"@pattern",dynamicDuration:"dynamic",totalElements:"total",elementIndex:"index",initParams:"initParams"};window.AudioContext=window.AudioContext||window.webkitAudioContext;var q=new window.AudioContext;function K(t){return"number"==typeof t&&isFinite(t)}function J(t){return!isNaN(parseFloat(t))&&isFinite(t)}function W(t){return"string"==typeof t||t instanceof String}function H(t){return"object"===u(t)}function U(t){return t&&"[object Function]"==={}.toString.call(t)}function Q(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return null!==e&&(!!H(t)&&Object.prototype.hasOwnProperty.call(t,e))}function X(t){return t.charAt(0).toUpperCase()+t.slice(1)}var Z=new RegExp("^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)","gi");function Y(t){if(null===t&&void 0===t)return{result:!0,analysis:{width:null,height:null}};if(!H(t))return{result:!1,errors:['originalDims should be an object containing the "width" and "height" keys']};if(!Q(t,"width")||!Q(t,"height"))return{result:!1,errors:['originalDims should be an object containing both the "width" and "height" keys']};if(!W(t.width))return{result:!1,errors:["originalDims.width should be defined either on px or %."]};if(!W(t.height))return{result:!1,errors:["originalDims.height should be defined either on px or %."]};var e=t.width.match(Z)[0],n=t.width.substring(e.length);if(!K(Number(e))||"%"!==n&&"px"!==n)return{result:!1,errors:["originalDims.width should be defined either on px or %."]};var i=t.height.match(Z)[0],r=t.height.substring(i.length);return!K(Number(i))||"%"!=r&&"px"!=r?{result:!1,errors:["originalDims.heigth should be defined either on px or %."]}:{result:!0,analysis:tt(t)}}function tt(t){var e=null,n=null;if(H(t)&&null!=t){if(Q(t,"width")&&W(t.width)){var i=t.width.match(Z)[0],r=t.width.substring(i.length);!K(Number(i))||"%"!==r&&"px"!==r||(e={number:Number(i),unit:r})}if(Q(t,"height")&&W(t.height)){var s=t.height.match(Z)[0],a=t.height.substring(s.length);!K(Number(s))||"%"!==a&&"px"!==a||(n={number:Number(s),unit:a})}}return{width:e,height:n}}function et(t){var e=t.replace(/ /g,"");return/.*\((.*)\).*/.exec(e)[1].split(",")}function nt(t,e){return Math.round(t/e)*e}function it(t){var e=t.split("___");return{mcid:e[0],attribute:e[1]}}function rt(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}function st(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=t?"_":"-";return"".concat(rt()).concat(rt()).concat(e).concat(rt()).concat(e).concat(rt())}function at(t,e){return"".concat(t).concat("___").concat(e)}function ot(t,e,n){for(var i=e.split("."),r=t,s=0;s<i.length-1;s++){if(!Q(r,i[s]))return!1;r=r[i[s]]}return!!Q(r,i[i.length-1])&&(r[i[i.length-1]]=n,!0)}var ut=new(function(){function t(e){l(this,t);var n=z;Q(e,"logLevel")&&(n=e.logLevel);for(var i=0;i<B.length;i++){var r=B[i];n>=r.level?this[r.key]=window.console[r.consoleMethod].bind(window.console,"MotorCortex - ".concat(r.key,": ")):this[r.key]=function(){}}this.log=n>=3?window.console.log.bind(window.console,"MotorCortex - "):function(){}}return h(t,[{key:"validateProps",value:function(t,e,n){var i=e(t);if(i.length>0){for(var r="Error on plugin's \"".concat(n.plugin_npm_name,'" "').concat(n.ClassName,'" instantiation. Errors (op props):'),s=0;s<i.length;s++)r+="\n - ".concat(i[s].message,". ").concat(i[s].actual," provided");return this.error(r),{result:!1,errors:i}}return{result:!0}}},{key:"getElementByMCID",value:function(t,e){return t.rootElement.querySelectorAll("[".concat(L,'="').concat(e,'"]'))[0]}},{key:"buildInitialValuesValidationRules",value:function(t){var e=JSON.parse(JSON.stringify(t));return function t(e){if(W(e)&&(e={type:e}),e.optional=!0,"object"===e.type)for(var n in e.props)t(e.props[n])}(e),e}},{key:"systoleDiastoleProjections",value:function(t,e,n){for(var i=[],r=0;r<t.length;r++){var s=t[r],a=s.parentMillisecond-n;a=a*e+n,1!==e&&i.push({id:s.incident.id,start:a,end:a+s.incident.duration*e,startDelta:a-s.millisecond})}return i}}]),t}());function lt(t){return t.result?{result:!0,execute:t.execute}:{result:!1,errors:t.errors}}var ct=function(){function t(e){l(this,t),this.runTimeInfo=e.runTimeInfo,this.context=e.context,this.onInitialise(),this.getIncidentById=e.getIncidentById}return h(t,[{key:"onInitialise",value:function(){}},{key:"_resize",value:function(){ut.log("Please overwite the _resize method of the Channel")}},{key:"addIncidents",value:function(t){return lt(this.checkAddition(t))}},{key:"editIncidents",value:function(t,e){return lt(this.checkEdit(t,e))}},{key:"removeIncidents",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return lt(this.checkDelete(t,e))}},{key:"recalcScratchValues",value:function(t){}},{key:"checkAddition",value:function(t){return{result:!0,execute:function(){}}}},{key:"checkEdit",value:function(t,e){return{result:!0,execute:function(){}}}},{key:"checkDelete",value:function(t){return{result:!0,execute:function(){}}}},{key:"checkResizedIncidents",value:function(t){return{result:!0,execute:function(){}}}},{key:"moveTo",value:function(t,e,n){}}],[{key:"type",get:function(){return"plain"}}]),t}(),ht="up",dt="down",pt="native.tree.bypass",ft=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};l(this,t),this.parentNode=null,this.isNode=!1,Q(e,"id")?this.id=e.id:this.id=st(),this.props=e}return h(t,[{key:"name",get:function(){return Q(this.props,"name")?this.props.name:null},set:function(t){this.props.name=t}},{key:"delay",get:function(){return Q(this.props,"delay")?this.props.delay:0},set:function(t){0!==t&&(this.props.delay=t)}},{key:"hiatus",get:function(){return Q(this.props,"hiatus")?this.props.hiatus:0},set:function(t){0!==t&&(this.props.hiatus=t)}},{key:"repeats",get:function(){return Q(this.props,"repeats")?this.props.repeats:1},set:function(t){this.props.repeats=t}},{key:"duration",get:function(){return this.repeats*(this.delay+this.props.duration+this.hiatus)},set:function(t){var e=t/this.duration;this.props.duration*=e,this.hiatus*=e,this.delay*=e}},{key:"setNewDuration",value:function(t){this.duration=t,this.putMessageOnPipe("recalcDuration",{},"Groups",{selfExecute:!1,direction:ht})}},{key:"systoleDiastole",value:function(t){this.duration*=t}},{key:"hasParent",get:function(){return null!==this.parentNode}},{key:"attachToNode",value:function(t){this.parentNode=t}},{key:"detachFromParent",value:function(){this.parentNode=null}},{key:"putMessageOnPipe",value:function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(Q(i,"direction")||(i.direction=dt),i.direction!==dt||Q(i,"positionDelta")||(i.positionDelta=0),i.selfExecute){var r="handle".concat(X(t)),s="function"==typeof this[r];if(s){var a=this[r](n,e);if(a!==pt){var u={response:a,responder:this};return i.direction===ht?u:[o(o({},u),{},{positionDelta:i.positionDelta})]}}}return i.direction===ht?this.hasParent?this.parentNode.putMessageOnPipe(t,e,n,{selfExecute:!0,direction:ht}):{response:!1,responder:null}:[]}},{key:"bypass",value:function(){return pt}},{key:"positionOnPyramidion",get:function(){return this.getPositionOnPyramidion()}},{key:"getPositionOnPyramidion",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(this.hasParent){var e=this.putMessageOnPipe("getPositionOnPyramidion",{delta:t,id:this.id},"Parent",{selfExecute:!1,direction:ht});return e.response}return t}}]),t}(),mt="Leaf has already been attached to another Node",vt="Negative positioning of childs on nodes is not allowed",gt="The Leaf with the requested id couldn't be found on the Tree",yt=function(t){p(n,t);var e=y(n);function n(){var t,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l(this,n),(t=e.call(this,i)).isNode=!0,t.children={},t.calculatedDuration=0,t}return h(n,[{key:"duration",get:function(){return this.repeats*(this.delay+this.calculatedDuration+this.hiatus)},set:function(t){if(0!==this.duration){var e=t/this.duration;for(var n in this.calculatedDuration*=e,this.hiatus*=e,this.delay*=e,this.children){var i=this.children[n];this.editPosition(i.id,i.position*e,!0),i.leaf.systoleDiastole(e)}}}},{key:"_calculateDuration",value:function(){var t=0;for(var e in this.children){var n=this.children[e];n.position+n.leaf.duration>t&&(t=n.position+n.leaf.duration)}return t!==this.calculatedDuration&&(this.calculatedDuration=t,!0)}},{key:"handleRecalcDuration",value:function(t,e){return!this._calculateDuration()||this.putMessageOnPipe("recalcDuration",{},"Groups",{selfExecute:!1,direction:ht})}},{key:"getLeafById",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(Q(this.children,t))return this.children[t].leaf;if(e)return null;for(var n in this.children){var i=this.children[n].leaf;if(i.isNode){var r=i.getLeafById(t);if(null!=r)return r}}return null}},{key:"getLeafPosition",value:function(t){if(Q(this.children,t))return this.children[t].position;var e=this.putMessageOnPipe("getLeafPosition",{id:t},"Groups",{selfExecute:!1,direction:dt});return e.length>0?e[0].positionDelta+e[0].response:void 0}},{key:"handleGetLeafPosition",value:function(t,e){return this.getLeafPosition(e.id)}},{key:"checkAddition",value:function(t,e){return t.hasParent?{result:!1,reason:mt}:e<0?{result:!1,reason:vt}:{result:!0}}},{key:"addChild",value:function(t,e){return t.hasParent?{result:!1,reason:mt}:(this.children[t.id]={id:t.id,leaf:t,position:e},t.attachToNode(this),this.putMessageOnPipe("recalcDuration",{},"Groups",{selfExecute:!0,direction:ht}),{result:!0})}},{key:"checkRemoveChild",value:function(t){return Q(this.children,t)?{result:!0}:{result:!1,reason:gt}}},{key:"removeChild",value:function(t){return this.children[t].leaf.detachFromParent(),delete this.children[t],this.putMessageOnPipe("recalcDuration",{},"Groups",{selfExecute:!0,direction:ht}),{result:!0}}},{key:"checkEditPosition",value:function(t,e){return e<0?{result:!1,reason:vt}:Q(this.children,t)?{result:!0}:{result:!1,reason:gt}}},{key:"editPosition",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(Q(this.children,t))return this.children[t].position=e,n||this.putMessageOnPipe("recalcDuration",{},"Groups",{selfExecute:!0,direction:ht}),{result:!0}}},{key:"putMessageOnPipe",value:function(t,e,i){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(Q(r,"direction")||(r.direction=dt),r.direction!==dt||Q(r,"positionDelta")||(r.positionDelta=0),r.direction===ht)return b(f(n.prototype),"putMessageOnPipe",this).call(this,t,e,i,r);var s=b(f(n.prototype),"putMessageOnPipe",this).call(this,t,e,i,r);if(s.length>0)return s;for(var a in this.children){var u=this.children[a].leaf,l=o(o({},r),{},{selfExecute:!0,positionDelta:r.positionDelta+this.children[a].position});s.push.apply(s,w(u.putMessageOnPipe(t,e,i,l)))}return s}},{key:"handleGetPositionOnPyramidion",value:function(t,e){var n=e.delta+this.getLeafPosition(e.id);return this.getPositionOnPyramidion(n)}}]),n}(ft);function kt(t){t.descriptor.value=function(t){void 0===this.blockID&&(this.blockID=st()),this.DescriptiveIncident.putMessageOnPipe("setBlock",{id:this.blockID,description:t,incidentId:this.DescriptiveIncident.id,realIncidentId:this.id},"rootClip",{selfExecute:!0,direction:ht})}}function bt(t){t.descriptor.value=function(){this.DescriptiveIncident.putMessageOnPipe("unBlock",{id:this.blockID},"rootClip",{selfExecute:!0,direction:ht})}}var xt=D(null,(function(t,e){var n=function(e){p(i,e);var n=y(i);function i(e,r){var s;return l(this,i),s=n.call(this,r),t(v(s)),s.mc_plugin_npm_name="motor-cortex-js",s.plugin_channel_class=ct,s.hasIncidents=!0,s.onGroupInitialise(),s.calculatedDuration=0,s}return i}(e);return{F:n,d:[{kind:"method",key:"onGroupInitialise",value:function(){}},{kind:"method",key:"handleAddIncident",value:function(t,e){if(this.id===t){var n=(0,e.incidentFromDescription)(e.incident,e.contextData,e.audio);return null===n?this.bypass():n}return this.bypass()}},{kind:"method",key:"handleMoveIncident",value:function(t,e){if(this.id===t){var n=this.getLeafById(e.incidentId,!0);return null===n?this.bypass():n}return this.bypass()}},{kind:"method",key:"handleRemoveIncident",value:function(t,e){if(this.id===t){var n=this.getLeafById(e.incidentId,!0);return null===n?this.bypass():n}return this.bypass()}},{kind:"method",key:"handleResize",value:function(t){return this.id===t?this:this.bypass()}},{kind:"method",key:"removeChild",value:function(t){this.children[t].leaf.lastWish(),b(f(n.prototype),"removeChild",this).call(this,t)}},{kind:"method",key:"getIncidentsByChannel",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n={};for(var i in n["motor-cortex-js"]=[{millisecond:t,parentMillisecond:e,incident:this,id:this.id}],this.children){var r=this.children[i],s=r.leaf.getIncidentsByChannel(t+r.position,t);for(var a in s)Q(n,a)?n[a]=n[a].concat(s[a]):n[a]=s[a]}return n}},{kind:"method",key:"lastWish",value:function(){for(var t in this.children)this.children[t].leaf.lastWish()}},{kind:"method",decorators:[kt],key:"setBlock",value:function(){}},{kind:"method",decorators:[bt],key:"unblock",value:function(){}}]}}),yt),Ct=function(t){p(n,t);var e=y(n);function n(){return l(this,n),e.apply(this,arguments)}return h(n,[{key:"onInitialise",value:function(){this.incidents=[],this.incidentsById={}}},{key:"_incidentById",value:function(t){return this.incidentsById[t]}},{key:"_resize",value:function(t){for(var e=0;e<this.incidents.length;e++)this.incidents[e].millisecond*=t}},{key:"checkAddition",value:function(t){for(var e=[],n={},i=[],r=0;r<t.length;r++)n[t[r].id]=t[r].incident,i.push({id:t[r].id,millisecond:t[r].millisecond}),Q(this.incidentsById,t[r].id)&&(ut.error("Incident with the id ".concat(t[r].id," already exists. Addition is rejected.")),e.push({type:"Already existing id",meta:{id:t[r].id}}));if(e.length>0)return{result:!1,errors:e};var s=this;return{result:!0,execute:function(){var e;s.incidentsById=Object.assign(s.incidentsById,n),(e=s.incidents).push.apply(e,i),s.incidents.sort((function(t,e){return t.millisecond-e.millisecond}));for(var r=0;r<t.length;r++)s._incidentById(t[r].id)._onGetContextOnce(s.context)}}}},{key:"checkEdit",value:function(t,e){var n=this.incidents;return{result:!0,execute:function(){for(var i,r=0;r<t.length;r++){i=t[r].id;for(var s=0;s<n.length;s++)if(n[s].id===i){n[s].millisecond+=e;break}}n.sort((function(t,e){return t.millisecond-e.millisecond}))}}}},{key:"checkDelete",value:function(t){for(var e=this,n=[],i=0;i<t.length;i++)n.push(t[i].id);return{result:!0,execute:function(){var t=e.incidents.filter((function(t){return!n.includes(t.id)}));e.incidents=t;for(var i=0;i<n.length;i++)delete e.incidentsById[n[i]]}}}},{key:"checkResizedIncidents",value:function(t){var e=this.incidents;return{result:!0,execute:function(){for(var n,i=0;i<t.length;i++){n=t[i].id;for(var r=0;r<e.length;r++)if(e[r].id===n){e[r].millisecond+=t[i].startDelta;break}}e.sort((function(t,e){return t.millisecond-e.millisecond}))}}}},{key:"moveTo",value:function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(i)for(var r=0;r<this.incidents.length;r++){var s=this.incidents[r],a=this._incidentById(s.id);e<s.millisecond?a.onProgress(0,0,n,!0):e>s.millisecond+a.duration?a.onProgress(1,a.duration,n,!0):a.onProgress((e-s.millisecond)/a.duration,e-s.millisecond,n,!0)}else{var o,u=this;o=e>t?this.incidents.filter((function(n){return n.millisecond+u._incidentById(n.id).duration>=t&&n.millisecond+u._incidentById(n.id).duration<=e||u._incidentById(n.id).duration+n.millisecond>=e&&n.millisecond<=e})):this.incidents.filter((function(n){return n.millisecond+u._incidentById(n.id).duration>=e&&n.millisecond+u._incidentById(n.id).duration<=t||u._incidentById(n.id).duration+n.millisecond>=t&&n.millisecond<=t}));for(var l=0;l<o.length;l++){var c=o[l],h=this._incidentById(c.id),d=(e-c.millisecond)/h.duration>=1,p=d?1:(e-c.millisecond)/h.duration,f=d?h.duration:e-c.millisecond;h.onProgress(p,f,n,!1)}}}}]),n}(ct);function It(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var wt=.1,Et="function"==typeof Float32Array;function Pt(t,e){return 1-3*e+3*t}function At(t,e){return 3*e-6*t}function _t(t){return 3*t}function Ot(t,e,n){return((Pt(e,n)*t+At(e,n))*t+_t(e))*t}function Tt(t,e,n){return 3*Pt(e,n)*t*t+2*At(e,n)*t+_t(e)}function Dt(t){return t}var St=function(t,e,n,i){if(!(0<=t&&t<=1&&0<=n&&n<=1))throw new Error("bezier x values must be in [0, 1] range");if(t===e&&n===i)return Dt;for(var r=Et?new Float32Array(11):new Array(11),s=0;s<11;++s)r[s]=Ot(s*wt,t,n);function a(e){for(var i=0,s=1;10!==s&&r[s]<=e;++s)i+=wt;--s;var a=i+(e-r[s])/(r[s+1]-r[s])*wt,o=Tt(a,t,n);return o>=.001?function(t,e,n,i){for(var r=0;r<4;++r){var s=Tt(e,n,i);if(0===s)return e;e-=(Ot(e,n,i)-t)/s}return e}(e,a,t,n):0===o?a:function(t,e,n,i,r){var s,a,o=0;do{(s=Ot(a=e+(n-e)/2,i,r)-t)>0?n=a:e=a}while(Math.abs(s)>1e-7&&++o<10);return a}(e,i,i+wt,t,n)}return function(t){return 0===t?0:1===t?1:Ot(a(t),e,i)}};function Mt(t){t.descriptor.value=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n={};return n[this.mc_plugin_npm_name]=[{millisecond:t,parentMillisecond:e,incident:this,id:this.id}],n}}var Vt=D(null,(function(t){return{F:function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0;l(this,e),t(this),this.attrs=n,this.props=i,this.dna=r,this.context=r.context,this.mcid=r.mcid,this.id=i.id||st(),this.modelId=i.modelId,this.gotContext=!1,this.plugin_channel_class=ct,this.mc_plugin_npm_name="motor-cortex-js",Q(i,"plugin_channel_class")&&(this.plugin_channel_class=i.plugin_channel_class),Q(i,"mc_plugin_npm_name")&&(this.mc_plugin_npm_name=i.mc_plugin_npm_name),this.hasIncidents=!1,this.initialValues={},this.userDefinedInitialValues=n.initialValues||{},this.pureInitialValues=null,this.autoGenerated=!1,this.onInitialise()},d:[{kind:"get",key:"selector",value:function(){return this.props.selector}},{kind:"get",key:"animAttributes",value:function(){return this.attrs.animatedAttrs}},{kind:"set",key:"animAttributes",value:function(t){this.attrs.animatedAttrs[this.attributeKey]=t}},{kind:"method",key:"getScratchValue",value:function(){return 0}},{kind:"get",key:"element",value:function(){return null===this.context?[]:this.context.getElementByMCID?this.context.getElementByMCID(this.mcid):this.context.getElements(this.selector)[0]}},{kind:"get",key:"attributeKey",value:function(){return Object.keys(this.attrs.animatedAttrs)[0]}},{kind:"get",key:"targetValue",value:function(){return this.animAttributes[this.attributeKey]}},{kind:"method",key:"getElementAttribute",value:function(t){return this.element.getAttribute(t)}},{kind:"method",decorators:[Mt],key:"getIncidentsByChannel",value:function(){}},{kind:"method",key:"hasUserDefinedInitialValue",value:function(){return Q(this.userDefinedInitialValues,this.attributeKey)}},{kind:"method",key:"setInitialValue",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(e&&(this.pureInitialValues=JSON.parse(JSON.stringify(t))),this.hasUserDefinedInitialValue())if(H(this.targetValue)){for(var n in this.userDefinedInitialValues[this.attributeKey])t[n]=this.userDefinedInitialValues[this.attributeKey][n];this.initialValues[this.attributeKey]=t}else this.initialValues[this.attributeKey]=this.userDefinedInitialValues[this.attributeKey];else this.initialValues[this.attributeKey]=t}},{kind:"get",key:"initialValue",value:function(){return this.initialValues[this.attributeKey]}},{kind:"method",key:"_onGetContextOnce",value:function(){try{if(!0===this.context.fragment)return;this.gotContext||(this.onGetContext(),this.gotContext=!0)}catch(t){ut.error(t),ut.error(this.mcid)}}},{kind:"method",key:"onGetContext",value:function(){ut.info('Overwritte the "onGetContext" method with the code you want to get executed',"info")}},{kind:"method",key:"lastWish",value:function(){}},{kind:"method",key:"onInitialise",value:function(){ut.info('Overwritte the "onInialise" method with the code you want to get executed',"info")}},{kind:"method",key:"onProgress",value:function(t,e){}},{kind:"method",decorators:[kt],key:"setBlock",value:function(){}},{kind:"method",decorators:[bt],key:"unblock",value:function(){}}]}})),Nt=function(t){p(n,t);var e=y(n);function n(t,i,r){var s;return l(this,n),(s=e.call(this,t,i,r)).runTimeInfo={currentMillisecond:0},s}return h(n,[{key:"duration",get:function(){return this.DescriptiveIncident.realClip.duration}},{key:"lastWish",value:function(){this.ownClip&&this.ownClip.context.unmount()}},{key:"onGetContext",value:function(){var t=this,e=this.DescriptiveIncident.realClip.exportConstructionArguments(),n=ut.getElementByMCID(this.context,this.mcid),i=o(o({},e.props),{},{selector:void 0,host:n,containerParams:this.DescriptiveIncident.props.containerParams||{},originalDims:this.DescriptiveIncident.constructor.originalDims||{}});this.ownClip=new this.DescriptiveIncident.constructor.Incident(e.attrs,i),this.ownClip.DescriptiveIncident=this.DescriptiveIncident,this.DescriptiveIncident.realClip.addContext({clipId:this.id,context:this.ownClip.context,unblock:function(){return t.unblock()}},!0)}},{key:"onProgress",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!1!==this.DescriptiveIncident.realClip.context.contextLoaded){for(var i in this.DescriptiveIncident.realClip.instantiatedChannels){var r=this.DescriptiveIncident.realClip.instantiatedChannels[i];r.moveTo(this.runTimeInfo.currentMillisecond,e,this.id,n)}this.runTimeInfo.currentMillisecond=e,this.ownClip.onAfterProgress(t,e)}else this.setBlock()}}]),n}(Vt);function $t(t){var e=new t.Incident(t.attrs,o(o({},t.props),{},{id:t.id||st()}),{context:t.context,mcid:t.mcid});return e.mc_plugin_npm_name=t.plugin_npm_name,e.plugin_channel_class=t.Channel,e.DescriptiveIncident=t.DescriptiveIncident,e}var jt={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:(4-2*t)*t-1},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t},easeInSine:function(t){return-1*Math.cos(t*(Math.PI/2))+1},easeOutSine:function(t){return Math.sin(t*(Math.PI/2))},easeInOutSine:function(t){return-.5*(Math.cos(Math.PI*t)-1)},easeInExpo:function(t){return 0==t?1:1*Math.pow(2,10*(t-1))},easeOutExpo:function(t){return 1==t?1:1*(1-Math.pow(2,-10*t))},easeInOutExpo:function(t){return 0==t||1==t?t:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*--t))},easeInCirc:function(t){return t>=1?t:-(Math.sqrt(1-(t/=1)*t)-1)},easeOutCirc:function(t){return Math.sqrt(1-(t=t/1-1)*t)},easeInOutCirc:function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeInElastic:function(t){if(0==t||1==t)return t;var e=.3/(2*Math.PI)*Math.asin(1);return-Math.pow(2,10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/.3)},easeOutElastic:function(t){if(0==t||1==t)return t;var e=.3/(2*Math.PI)*Math.asin(1);return Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/.3)+1},easeInOutElastic:function(t){if(0==t||1==t)return t;var e=.3*1.5,n=e/(2*Math.PI)*Math.asin(1);return t<1?Math.pow(2,10*(t-=1))*Math.sin((t-n)*(2*Math.PI)/e)*-.5:Math.pow(2,-10*(t-=1))*Math.sin((t-n)*(2*Math.PI)/e)*.5+1},easeInBack:function(t){var e=1.70158;return t*t*((e+1)*t-e)},easeOutBack:function(t){var e=1.70158;return(t-=-1)*t*((e+1)*t+e)+1},easeInOutBack:function(t){var e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},easeInBounce:function(t){return 1-jt.easeOutBounce(1-t)},easeOutBounce:function(t){return t<1/2.75?7.5625*t*t*1:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInOutBounce:function(t){return t<.5?.5*jt.easeInBounce(2*t):.5*(jt.easeOutBounce(2*t-1)+1)}},Bt=D(null,(function(t,e){return{F:function(e){p(i,e);var n=y(i);function i(e,r,s,a){var u;return l(this,i),u=n.call(this,o(o({},e.props),{},{id:"".concat(e.incidentId,"_").concat(s)})),t(v(u)),u.contexts={},u.constructionIngredients=e,u.mcid=s,u.DescriptiveIncident=a,u.mc_plugin_npm_name=e.plugin_npm_name,u.plugin_channel_class=e.Channel,u.addContext(r),u.timeScale=1,a.realClip.duration>0&&(u.timeScale=u.props.duration/a.realClip.duration),a.realClip.subscribeToDurationChange((function(t){u.props.duration=u.timeScale*t,u.putMessageOnPipe("recalcDuration",{},"Groups",{selfExecute:!1,direction:ht})})),u.easing=jt.linear,Q(u.props,"easing")&&(Array.isArray(u.props.easing)?u.easing=St(u.props.easing[0],u.props.easing[1],u.props.easing[2],u.props.easing[3]):u.easing=jt[u.props.easing]),u}return i}(e),d:[{kind:"get",key:"originalContext",value:function(){return this.contexts[this.originalContextKey]}},{kind:"method",key:"onProgress",value:function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=this.delay+this.props.duration+this.hiatus,s=e%r;0!==e&&0===s&&(s=this.delay+this.props.duration);var a=s-this.delay;a<0?a=0:a>this.props.duration&&(a=this.props.duration);var o=0===this.props.duration?0:a/this.props.duration,u=this.easing(o),l=u*this.props.duration*(1/this.timeScale);!1!==this.originalContext.context.contextLoaded&&this.contexts[n].onProgress(u,l,i)}},{kind:"method",key:"addContext",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];0===Object.keys(this.contexts).length&&(this.originalContextKey=t.clipId);var n=o(o({},this.constructionIngredients),{},{context:t.context,mcid:this.mcid,Incident:Nt,DescriptiveIncident:this.DescriptiveIncident});this.contexts[t.clipId]=$t(n),e&&this.contexts[t.clipId]._onGetContextOnce()}},{kind:"method",key:"handleAddContext",value:function(t,e){return this.addContext(e,!0),!0}},{kind:"method",key:"handleContextLoaded",value:function(t,e){this._onGetContextOnce()}},{kind:"method",decorators:[Mt],key:"getIncidentsByChannel",value:function(){}},{kind:"method",key:"gotContext",value:function(){for(var t in this.contexts)this.contexts[t].gotContext()}},{kind:"method",key:"_onGetContextOnce",value:function(){if(!1!==this.originalContext.contextLoaded)for(var t in this.contexts)this.contexts[t]._onGetContextOnce()}},{kind:"method",key:"lastWish",value:function(){for(var t in this.contexts)this.contexts[t].lastWish()}},{kind:"method",key:"onGetContext",value:function(){if(!1!==this.originalContext.contextLoaded)for(var t in this.contexts)this.contexts[t].onGetContext()}}]}}),ft),Lt=D(null,(function(t,e){var n=function(e){p(i,e);var n=y(i);function i(e,r,s,a){var u;if(l(this,i),u=n.call(this,o(o({},e.props),{},{id:null!==a?"".concat(e.incidentId,"_").concat(s,"_").concat(a):"".concat(e.incidentId,"_").concat(s)})),t(v(u)),u.contexts={},u.constructionIngredients=e,u.mcid=s,u.attribute=a,u.mc_plugin_npm_name=e.plugin_npm_name,u.plugin_channel_class=e.Channel,u.DescriptiveIncident=e.DescriptiveIncident,u.addContext(r),null!==a){var c=u.constructionIngredients.attrs.animatedAttrs[u.attribute];Array.isArray(c)?u.originalAnimatedAttributeValue=w(c):H(c)?u.originalAnimatedAttributeValue=o({},c):u.originalAnimatedAttributeValue=c}return u.easing=jt.linear,Q(u.props,"easing")&&(Array.isArray(u.props.easing)?u.easing=St(u.props.easing[0],u.props.easing[1],u.props.easing[2],u.props.easing[3]):u.easing=jt[u.props.easing]),u}return i}(e);return{F:n,d:[{kind:"get",key:"originalContext",value:function(){return this.contexts[this.originalContextKey]}},{kind:"get",key:"duration",value:function(){return b(f(n.prototype),"duration",this)}},{kind:"set",key:"duration",value:function(t){for(var e in C(f(n.prototype),"duration",t,this,!0),this.contexts)this.contexts[e].duration=t}},{kind:"method",key:"addContext",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!1;0===Object.keys(this.contexts).length&&(this.originalContextKey=t.clipId,this.originalClipContext=t.context,n=!0);var i=o(o({},this.constructionIngredients),{},{context:t.context,mcid:this.mcid}),r=$t(i);this.contexts[t.clipId]=r,n||null==this.attribute||this.contexts[t.clipId].setInitialValue(this.initialValue),e&&this.contexts[t.clipId].context.contextLoaded&&this.contexts[t.clipId]._onGetContextOnce()}},{kind:"method",key:"handleAddContext",value:function(t,e){return this.addContext(e,!0),!0}},{kind:"method",key:"handleContextLoaded",value:function(t,e){return this._onGetContextOnce(),!0}},{kind:"method",decorators:[Mt],key:"getIncidentsByChannel",value:function(){}},{kind:"method",key:"onProgress",value:function(t,e,n){var i=e%(this.delay+this.props.duration+this.hiatus);0!==e&&0===i&&(i=this.delay+this.props.duration);var r=i-this.delay;r<0?r=0:r>this.props.duration&&(r=this.props.duration);var s=r/this.props.duration,a=this.easing(s),o=a*this.props.duration;if(null!=n)!1!==this.originalContext.context.contextLoaded&&this.contexts[n].onProgress(a,o);else for(var u in this.contexts)this.originalContextKey===u&&!0===this.originalContext.fragment||this.contexts[u].onProgress(a,o)}},{kind:"get",key:"animatedAttributeValue",value:function(){return this.constructionIngredients.attrs.animatedAttrs[this.attribute]}},{kind:"set",key:"animatedAttributeValue",value:function(t){this.constructionIngredients.attrs.animatedAttrs[this.attribute]=t}},{kind:"method",key:"gotContext",value:function(){for(var t in this.contexts)this.contexts[t].gotContext()}},{kind:"method",key:"_onGetContextOnce",value:function(){if(!1!==this.originalContext.context.contextLoaded)for(var t in this.contexts)this.contexts[t]._onGetContextOnce()}},{kind:"method",key:"lastWish",value:function(){for(var t in this.contexts)this.contexts[t].lastWish()}},{kind:"method",key:"onGetContext",value:function(){if(!1!==this.originalContext.contextLoaded)for(var t in this.contexts)this.contexts[t].context.contextLoaded&&this.contexts[t].onGetContext()}},{kind:"get",key:"initialValue",value:function(){return this.originalContext.initialValue}},{kind:"get",key:"scratchValue",value:function(){return this.originalContext.scratchValue}},{kind:"get",key:"pureInitialValues",value:function(){return this.originalContext.pureInitialValues}},{kind:"method",key:"setInitialValue",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];for(var n in null===t&&(t=this.getScratchValue()),this.contexts)this.contexts[n].setInitialValue(JSON.parse(JSON.stringify(t)),e)}},{kind:"method",key:"getScratchValue",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(!this.originalContext.context.contextLoaded)return 0;if(null!=t)return this.contexts[t].getScratchValue();var e=Object.keys(this.contexts);if(Q(this.originalClipContext,"nonFragmentedContext")){var n=o(o({},this.constructionIngredients),{},{context:this.originalClipContext.nonFragmentedContext,mcid:this.mcid}),i=$t(n);return i.getScratchValue()}return 1===e.length?this.originalContext.getScratchValue():this.contexts[e[1]].getScratchValue()}},{kind:"method",key:"setCompoAttrKeyValue",value:function(t,e){for(var n in this.contexts)this.contexts[n].attrs.animatedAttrs[this.attribute][t]=e,this.contexts[n].lastWish(),this.contexts[n].onGetContext()}},{kind:"method",key:"play",value:function(t,e,n){return this.contexts[n].play(e)}},{kind:"method",key:"stop",value:function(t){this.contexts[t].stop()}}]}}),ft),Rt=function(t){p(n,t);var e=y(n);function n(t,i,r,s,a){var o;return l(this,n),(o=e.call(this,{},{id:"".concat(t.id,"_").concat(r)})).mcid=r,o.selector=s,o.data=a,o.setUp(t,i),o}return h(n,[{key:"setUp",value:function(t,e){for(var n in this.data.attrs.animatedAttrs){var i={};i[n]=this.data.attrs.animatedAttrs[n];var r=o(o({},this.data.attrs),{},{animatedAttrs:i}),s=o(o({},this.data.props),{},{selector:this.selector}),a={incidentId:t.id,attrs:r,props:s,Incident:t.constructor.Incident,plugin_npm_name:t.constructor.plugin_npm_name,Channel:t.constructor.Channel,DescriptiveIncident:t},u=new Lt(a,e,this.mcid,n);this.addChild(u,0)}}}]),n}(xt);var Ft=function(t){p(n,t);var e=y(n);function n(t,i){var r;return l(this,n),(r=e.call(this,{},{id:t.id})).contexts={},r.contexts[i.clipId]=i.context,r.originalContextKey=i.clipId,r.initParams=i.context.initParams,r.instantiatedCopiesContexts=i.instantiatedCopiesContexts,r.descriptiveIncident=t,r.staggerAttrs=[],r.staggerProps=[],r.setUp(t,i),r}return h(n,[{key:"originalContext",get:function(){return this.contexts[this.originalContextKey]}},{key:"parsePropsDynamicValues",value:function(t,e){for(var n=0;n<t.propsStaggers.length;n++)this.staggerProps.push({path:t.propsStaggers[n].path,values:t.propsStaggers[n].stagger.calculateValues(e,this.initParams)})}},{key:"parseAttrsDynamicValues",value:function(t,e){for(var n=0;n<t.attributesStaggers.length;n++)this.staggerAttrs.push({path:t.attributesStaggers[n].path,values:t.attributesStaggers[n].stagger.calculateValues(e,this.initParams)})}},{key:"setUp",value:function(t,e){var n,i,r=this.originalContext.getElements(t.selector());this.parsePropsDynamicValues(t,r),this.parseAttrsDynamicValues(t,r);for(var s=0;s<r.length;s++){for(var a in n=r[s],i=this._getElementMCID(n),this.instantiatedCopiesContexts)this._setElementMCID(this.instantiatedCopiesContexts[a],this.instantiatedCopiesContexts[a].getElements(t.selector())[s],i);this._createElementIncident(n,t,e,s,r.length,i)}}},{key:"handleRecalcDuration",value:function(t,e){var i=b(f(n.prototype),"handleRecalcDuration",this).call(this,t,e);return this.descriptiveIncident.propsStaggers.length>0&&(this.descriptiveIncident.dynamicDurationValue=1*this.duration),i}},{key:"lastWish",value:function(){this.descriptiveIncident.propsStaggers.length>0&&(this.descriptiveIncident.dynamicDurationValue=null,this.descriptiveIncident.putMessageOnPipe("setDurationDynamic",{},"Groups",{selfExecute:!1,direction:ht})),b(f(n.prototype),"lastWish",this).call(this)}},{key:"_getElementMCID",value:function(t){var e=this.originalContext.getMCID(t);return e||(e=st(!0),this.originalContext.setMCID(t,e)),e}},{key:"_setElementMCID",value:function(t,e,n){t.getMCID(e)||t.setMCID(e,n)}},{key:"_prepareAttrsPropsForElement",value:function(t,e){var n=function(t,e){for(var n=[],i=0;i<t.length;i++)n.push({path:t[i].path,value:t[i].values[e]});return n}(this.staggerAttrs,e),i=function(t,e){for(var n=[],i=0;i<t.length;i++)n.push({path:t[i].path,value:t[i].values[e]});return n}(this.staggerProps,e),r=t.attrs,s=t.props;if(n.length>0){r=JSON.parse(JSON.stringify(t.attrs));for(var a=0;a<n.length;a++)ot(r,n[a].path,n[a].value)}if(i.length>0){s=JSON.parse(JSON.stringify(t.props));for(var o=0;o<i.length;o++)ot(s,i[o].path,i[o].value)}return{attrs:r,props:s}}},{key:"_createElementIncident",value:function(t,e,n,i,r,s){var a=this._prepareAttrsPropsForElement(e,i);if(Q(e.attrs,"animatedAttrs")){var o=new Rt(e,n,s,n.context.getElementSelectorByMCID(s),a);this.addChild(o,0)}else{var u=a.attrs,l=a.props,c={incidentId:e.id,attrs:u,props:l,Incident:e.constructor.Incident,plugin_npm_name:e.constructor.plugin_npm_name,Channel:e.constructor.Channel,DescriptiveIncident:e},h=new Lt(c,n,s,null);this.addChild(h,0)}}}]),n}(xt),zt=function(t){p(n,t);var e=y(n);function n(t,i){var r;return l(this,n),(r=e.call(this,t,i)).realClip=t.realClip,r}return h(n,[{key:"_createElementIncident",value:function(t,e,n,i,r,s){var a=e.realClip.exportConstructionArguments(),u=this._prepareAttrsPropsForElement(e,i),l=o(o(o(o({},e.props),{},{duration:e.realClip.duration},a.props),u.props),{},{selector:n.context.getElementSelectorByMCID(s),runTimeInfo:e.runTimeInfo}),c={incidentId:e.id,attrs:a.attrs,props:l,Incident:e.constructor.Incident,plugin_npm_name:e.constructor.plugin_npm_name,Channel:Ct,DescriptiveIncident:e},h=new Bt(c,n,s,e);this.addChild(h,0)}}]),n}(Ft),Gt=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:F,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:window;Q(r,i)||(r[i]={});for(var s=r[i],a=t.split("."),o=0;o<a.length-1;o++)Q(s,a[o])||(s[a[o]]={}),s=s[a[o]];return(!Q(s,a[a.length-1])||!1!==n)&&(s[a[a.length-1]]=e,!0)};function qt(t){var e={},n=[],i=Array.isArray(t),r=i?t.length:0,s=null;return new Proxy(t,{keywords:["setValue","_getFromProxy","__createPathProxies","hasOwnProperty","pushValue","removePathKey","removeKey","restoreKey","getKeys","exportFlattened","isArray","push","sortBy","findIndex"],get:function(a,o){return"length"===o&&i?r:this.keywords.includes(o)?this[o]:n.includes(o)?void 0:(i&&null!==s&&(o=s[o]),Q(e,o)?e[o]:t[o])},isArray:function(){return i},_getFromProxy:function(t){return Q(e,t)?e[t]:void 0},set:function(){return!1},sortBy:function(t){if(s=null,!i)return!1;s=function(t,e){for(var n=[],i=0;i<t.length;i++)n.push([t[i],i]);n.sort((function(t,n){return t[0][e]<n[0][e]?-1:1}));var r=[];for(var s in n)r.push(n[s][1]);return r}(this,t)},__createPathProxies:function(n){for(var r=e,a=t,o=0;o<n.length-1;o++){var u=i&&null!==s?s[n[o]]:n[o];if(0===o?void 0===r[u]:void 0===r._getFromProxy(u)){var l=qt(void 0!==a&&a[u]||{});0===o?r[u]=l:r.setValue(u,l)}r=r[u],a=void 0!==a?a[u]:{}}return{currentObject:r,currentRealObect:a}},findIndex:function(t){if(!i)return null;for(var e=0;e<r;e++)if(t(this[e]))return e;return null},setValue:function(t,e){var i=t.split("."),r=this.__createPathProxies(i).currentObject,s=e;if(H(e)&&(s=qt(e)),1===i.length){r[i[i.length-1]]=s;var a=n.indexOf(i[i.length-1]);a>-1&&n.splice(a,1)}else r.setValue(i[i.length-1],s),r.restoreKey(i[i.length-1]);return!0},pushValue:function(e,n){var i=e.split("."),r=this.__createPathProxies(i),s=r.currentObject;if(void 0===r.currentRealObect)return!1;var a=i[i.length-1],o=s[a],u=t[a];if(""===e&&(o=this,u=t),1!==i.length)return s.pushValue(a,n);var l=!1;if(void 0!==o){if(l=!0,!o.isArray())return!1}else if(!Array.isArray(u))return!1;if(!l){var c=qt(u);s[a]=c,o=s[a]}return o.push(n),!0},push:function(t){return!!this.isArray()&&(e[r]=H(t)?qt(t):t,r+=1,!0)},removePathKey:function(t){var e=t.split(".");return this.__createPathProxies(e).currentObject.removeKey(e[e.length-1]),!0},removeKey:function(t){n.push(t)},restoreKey:function(t){var e=n.indexOf(t);e>-1&&n.splice(e,1)},hasOwnProperty:function(t){return!(n.includes(t)||void 0===this[t])},getKeys:function(){if(i)return[];for(var r=[],s=Object.keys(t),a=Object.keys(e),o=[].concat(w(s),w(a)),u=o.filter((function(t,e){return o.indexOf(t)===e})),l=0;l<u.length;l++)n.includes(u[l])||r.push(u[l]);return r},exportFlattened:function(){var n;if(i)if(n=[],null!==s)for(var r=0;r<s.length;r++){var a=s[r];if(Q(e,a)){var o=e[a];if(H(o))try{n[r]=e[a].exportFlattened()}catch(t){n[r]=o}else n[r]=o}else n[r]=t[a]}else{n=w(t);for(var u=0,l=Object.entries(e);u<l.length;u++){var c=I(l[u],2),h=c[0],d=c[1];if(H(d))try{n[h]=e[h].exportFlattened()}catch(t){n[h]=d}else n[h]=d}}else{n={};for(var p=this.getKeys(),f=0;f<p.length;f++){var m=p[f];void 0!==e[m]?n[m]=H(e[m])?e[m].exportFlattened():e[m]:n[m]=t[m]}}return n}})}var Kt="6.4.3";var Jt={required:"The '{field}' field is required.",string:"The '{field}' field must be a string.",stringEmpty:"The '{field}' field must not be empty.",stringMin:"The '{field}' field length must be greater than or equal to {expected} characters long.",stringMax:"The '{field}' field length must be less than or equal to {expected} characters long.",stringLength:"The '{field}' field length must be {expected} characters long.",stringPattern:"The '{field}' field fails to match the required pattern.",stringContains:"The '{field}' field must contain the '{expected}' text.",stringEnum:"The '{field}' field does not match any of the allowed values.",stringNumeric:"The '{field}' field must be a numeric string.",stringAlpha:"The '{field}' field must be an alphabetic string.",stringAlphanum:"The '{field}' field must be an alphanumeric string.",stringAlphadash:"The '{field}' field must be an alphadash string.",stringHex:"The '{field}' field must be a hex string.",stringSingleLine:"The '{field}' field must be a single line string.",stringBase64:"The '{field}' field must be a base64 string.",number:"The '{field}' field must be a number.",numberMin:"The '{field}' field must be greater than or equal to {expected}.",numberMax:"The '{field}' field must be less than or equal to {expected}.",numberEqual:"The '{field}' field must be equal to {expected}.",numberNotEqual:"The '{field}' field can't be equal to {expected}.",numberInteger:"The '{field}' field must be an integer.",numberPositive:"The '{field}' field must be a positive number.",numberNegative:"The '{field}' field must be a negative number.",array:"The '{field}' field must be an array.",arrayEmpty:"The '{field}' field must not be an empty array.",arrayMin:"The '{field}' field must contain at least {expected} items.",arrayMax:"The '{field}' field must contain less than or equal to {expected} items.",arrayLength:"The '{field}' field must contain {expected} items.",arrayContains:"The '{field}' field must contain the '{expected}' item.",arrayUnique:"The '{actual}' value in '{field}' field does not unique the '{expected}' values.",arrayEnum:"The '{actual}' value in '{field}' field does not match any of the '{expected}' values.",tuple:"The '{field}' field must be an array.",tupleEmpty:"The '{field}' field must not be an empty array.",tupleLength:"The '{field}' field must contain {expected} items.",boolean:"The '{field}' field must be a boolean.",currency:"The '{field}' must be a valid currency format",date:"The '{field}' field must be a Date.",dateMin:"The '{field}' field must be greater than or equal to {expected}.",dateMax:"The '{field}' field must be less than or equal to {expected}.",enumValue:"The '{field}' field value '{expected}' does not match any of the allowed values.",equalValue:"The '{field}' field value must be equal to '{expected}'.",equalField:"The '{field}' field value must be equal to '{expected}' field value.",forbidden:"The '{field}' field is forbidden.",function:"The '{field}' field must be a function.",email:"The '{field}' field must be a valid e-mail.",emailEmpty:"The '{field}' field must not be empty.",emailMin:"The '{field}' field length must be greater than or equal to {expected} characters long.",emailMax:"The '{field}' field length must be less than or equal to {expected} characters long.",luhn:"The '{field}' field must be a valid checksum luhn.",mac:"The '{field}' field must be a valid MAC address.",object:"The '{field}' must be an Object.",objectStrict:"The object '{field}' contains forbidden keys: '{actual}'.",objectMinProps:"The object '{field}' must contain at least {expected} properties.",objectMaxProps:"The object '{field}' must contain {expected} properties at most.",url:"The '{field}' field must be a valid URL.",urlEmpty:"The '{field}' field must not be empty.",uuid:"The '{field}' field must be a valid UUID.",uuidVersion:"The '{field}' field must be a valid UUID version provided.",classInstanceOf:"The '{field}' field must be an instance of the '{expected}' class.",objectID:"The '{field}' field must be an valid ObjectID"},Wt=function(){const t=[];return t.push("\n\t\treturn value;\n\t"),{source:t.join("\n")}},Ht=function({schema:t,messages:e},n,i){const r=[];if(r.push(`\n\t\tif (!Array.isArray(value)) {\n\t\t\t${this.makeError({type:"array",actual:"value",messages:e})}\n\t\t\treturn value;\n\t\t}\n\n\t\tvar len = value.length;\n\t`),!1===t.empty&&r.push(`\n\t\t\tif (len === 0) {\n\t\t\t\t${this.makeError({type:"arrayEmpty",actual:"value",messages:e})}\n\t\t\t}\n\t\t`),null!=t.min&&r.push(`\n\t\t\tif (len < ${t.min}) {\n\t\t\t\t${this.makeError({type:"arrayMin",expected:t.min,actual:"len",messages:e})}\n\t\t\t}\n\t\t`),null!=t.max&&r.push(`\n\t\t\tif (len > ${t.max}) {\n\t\t\t\t${this.makeError({type:"arrayMax",expected:t.max,actual:"len",messages:e})}\n\t\t\t}\n\t\t`),null!=t.length&&r.push(`\n\t\t\tif (len !== ${t.length}) {\n\t\t\t\t${this.makeError({type:"arrayLength",expected:t.length,actual:"len",messages:e})}\n\t\t\t}\n\t\t`),null!=t.contains&&r.push(`\n\t\t\tif (value.indexOf(${JSON.stringify(t.contains)}) === -1) {\n\t\t\t\t${this.makeError({type:"arrayContains",expected:JSON.stringify(t.contains),actual:"value",messages:e})}\n\t\t\t}\n\t\t`),!0===t.unique&&r.push(`\n\t\t\tif(len > (new Set(value)).size) {\n\t\t\t\t${this.makeError({type:"arrayUnique",expected:"Array.from(new Set(value.filter((item, index) => value.indexOf(item) !== index)))",actual:"value",messages:e})}\n\t\t\t}\n\t\t`),null!=t.enum){const n=JSON.stringify(t.enum);r.push(`\n\t\t\tfor (var i = 0; i < value.length; i++) {\n\t\t\t\tif (${n}.indexOf(value[i]) === -1) {\n\t\t\t\t\t${this.makeError({type:"arrayEnum",expected:'"'+t.enum.join(", ")+'"',actual:"value[i]",messages:e})}\n\t\t\t\t}\n\t\t\t}\n\t\t`)}if(null!=t.items){r.push("\n\t\t\tvar arr = value;\n\t\t\tvar parentField = field;\n\t\t\tfor (var i = 0; i < arr.length; i++) {\n\t\t");const e=n+"[]",s=this.getRuleFromSchema(t.items),a='arr[i] = context.fn[%%INDEX%%](arr[i], (parentField ? parentField : "") + "[" + i + "]", parent, errors, context)';r.push(this.compileRule(s,i,e,a,"arr[i]")),r.push("\n\t\t\t}\n\t\t")}return r.push("\n\t\treturn value;\n\t"),{source:r.join("\n")}},Ut=function({schema:t,messages:e},n,i){const r=[];let s=!1;return r.push("\n\t\tvar origValue = value;\n\t"),!0===t.convert&&(s=!0,r.push('\n\t\t\tif (typeof value !== "boolean") {\n\t\t\t\tif (\n\t\t\t\tvalue === 1\n\t\t\t\t|| value === "true"\n\t\t\t\t|| value === "1"\n\t\t\t\t|| value === "on"\n\t\t\t\t) {\n\t\t\t\t\tvalue = true;\n\t\t\t\t} else if (\n\t\t\t\tvalue === 0\n\t\t\t\t|| value === "false"\n\t\t\t\t|| value === "0"\n\t\t\t\t|| value === "off"\n\t\t\t\t) {\n\t\t\t\t\tvalue = false;\n\t\t\t\t}\n\t\t\t}\n\t\t')),r.push(`\n\t\tif (typeof value !== "boolean") {\n\t\t\t${this.makeError({type:"boolean",actual:"origValue",messages:e})}\n\t\t}\n\t\t\n\t\treturn value;\n\t`),{sanitized:s,source:r.join("\n")}},Qt=function({schema:t,messages:e,index:n},i,r){const s=[],a=t.instanceOf.name?t.instanceOf.name:"<UnknowClass>";return r.customs[n]?r.customs[n].schema=t:r.customs[n]={schema:t},s.push(`\n\t\tif (!(value instanceof context.customs[${n}].schema.instanceOf))\n\t\t\t${this.makeError({type:"classInstanceOf",actual:"value",expected:"'"+a+"'",messages:e})}\n\t`),s.push("\n\t\treturn value;\n\t"),{source:s.join("\n")}},Xt=function({schema:t,messages:e,index:n},i,r){const s=[];return s.push(`\n\t\t${this.makeCustomValidator({fnName:"check",path:i,schema:t,messages:e,context:r,ruleIndex:n})}\n\t\treturn value;\n\t`),{source:s.join("\n")}};var Zt=function({schema:t,messages:e},n,i){const r=t.currencySymbol||null,s=t.thousandSeparator||",",a=t.decimalSeparator||".",o=t.customRegex;let u=!t.symbolOptional,l="(?=.*\\d)^(-?~1|~1-?)(([0-9]\\d{0,2}(~2\\d{3})*)|0)?(\\~3\\d{1,2})?$".replace(/~1/g,r?`\\${r}${u?"":"?"}`:"").replace("~2",s).replace("~3",a);const c=[];return c.push(`\n\t\tif (!value.match(${o||new RegExp(l)})) {\n\t\t\t${this.makeError({type:"currency",actual:"value",messages:e})}\n\t\t\treturn value;\n\t\t}\n\n\t\treturn value;\n\t`),{source:c.join("\n")}},Yt=function({schema:t,messages:e},n,i){const r=[];let s=!1;return r.push("\n\t\tvar origValue = value;\n\t"),!0===t.convert&&(s=!0,r.push("\n\t\t\tif (!(value instanceof Date)) {\n\t\t\t\tvalue = new Date(value);\n\t\t\t}\n\t\t")),r.push(`\n\t\tif (!(value instanceof Date) || isNaN(value.getTime()))\n\t\t\t${this.makeError({type:"date",actual:"origValue",messages:e})}\n\n\t\treturn value;\n\t`),{sanitized:s,source:r.join("\n")}};const te=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,ee=/^\S+@\S+\.\S+$/;var ne=function({schema:t,messages:e},n,i){const r=[],s="precise"==t.mode?te:ee;let a=!1;return r.push(`\n\t\tif (typeof value !== "string") {\n\t\t\t${this.makeError({type:"string",actual:"value",messages:e})}\n\t\t\treturn value;\n\t\t}\n\t`),t.empty?r.push("\n\t\t\tif (value.length === 0) return value;\n\t\t"):r.push(`\n\t\t\tif (value.length === 0) {\n\t\t\t\t${this.makeError({type:"emailEmpty",actual:"value",messages:e})}\n\t\t\t\treturn value;\n\t\t\t}\n\t\t`),t.normalize&&(a=!0,r.push("\n\t\t\tvalue = value.trim().toLowerCase();\n\t\t")),null!=t.min&&r.push(`\n\t\t\tif (value.length < ${t.min}) {\n\t\t\t\t${this.makeError({type:"emailMin",expected:t.min,actual:"value.length",messages:e})}\n\t\t\t}\n\t\t`),null!=t.max&&r.push(`\n\t\t\tif (value.length > ${t.max}) {\n\t\t\t\t${this.makeError({type:"emailMax",expected:t.max,actual:"value.length",messages:e})}\n\t\t\t}\n\t\t`),r.push(`\n\t\tif (!${s.toString()}.test(value)) {\n\t\t\t${this.makeError({type:"email",actual:"value",messages:e})}\n\t\t}\n\n\t\treturn value;\n\t`),{sanitized:a,source:r.join("\n")}},ie=function({schema:t,messages:e},n,i){return{source:`\n\t\t\tif (${JSON.stringify(t.values||[])}.indexOf(value) === -1)\n\t\t\t\t${this.makeError({type:"enumValue",expected:'"'+t.values.join(", ")+'"',actual:"value",messages:e})}\n\t\t\t\n\t\t\treturn value;\n\t\t`}},re=function({schema:t,messages:e},n,i){const r=[];return t.field?(t.strict?r.push(`\n\t\t\t\tif (value !== parent["${t.field}"])\n\t\t\t`):r.push(`\n\t\t\t\tif (value != parent["${t.field}"])\n\t\t\t`),r.push(`\n\t\t\t\t${this.makeError({type:"equalField",actual:"value",expected:JSON.stringify(t.field),messages:e})}\n\t\t`)):(t.strict?r.push(`\n\t\t\t\tif (value !== ${JSON.stringify(t.value)})\n\t\t\t`):r.push(`\n\t\t\t\tif (value != ${JSON.stringify(t.value)})\n\t\t\t`),r.push(`\n\t\t\t\t${this.makeError({type:"equalValue",actual:"value",expected:JSON.stringify(t.value),messages:e})}\n\t\t`)),r.push("\n\t\treturn value;\n\t"),{source:r.join("\n")}},se=function({schema:t,messages:e},n,i){const r=[];return r.push("\n\t\tif (value !== null && value !== undefined) {\n\t"),t.remove?r.push("\n\t\t\treturn undefined;\n\t\t"):r.push(`\n\t\t\t${this.makeError({type:"forbidden",actual:"value",messages:e})}\n\t\t`),r.push("\n\t\t}\n\n\t\treturn value;\n\t"),{source:r.join("\n")}},ae=function({schema:t,messages:e},n,i){return{source:`\n\t\t\tif (typeof value !== "function")\n\t\t\t\t${this.makeError({type:"function",actual:"value",messages:e})}\n\n\t\t\treturn value;\n\t\t`}},oe=function({schema:t,messages:e},n,i){const r=[];r.push("\n\t\tvar prevErrLen = errors.length;\n\t\tvar errBefore;\n\t\tvar hasValid = false;\n\t\tvar newVal = value;\n\t");for(let e=0;e<t.rules.length;e++){r.push("\n\t\t\tif (!hasValid) {\n\t\t\t\terrBefore = errors.length;\n\t\t");const s=this.getRuleFromSchema(t.rules[e]);r.push(this.compileRule(s,i,n,"var tmpVal = context.fn[%%INDEX%%](value, field, parent, errors, context);","tmpVal")),r.push("\n\t\t\t\tif (errors.length == errBefore) {\n\t\t\t\t\thasValid = true;\n\t\t\t\t\tnewVal = tmpVal;\n\t\t\t\t}\n\t\t\t}\n\t\t")}return r.push("\n\t\tif (hasValid) {\n\t\t\terrors.length = prevErrLen;\n\t\t}\n\t\t\n\t\treturn newVal;\n\t"),{source:r.join("\n")}},ue=function({schema:t,messages:e},n,i){const r=[];r.push("\n\t\tvar origValue = value;\n\t");let s=!1;return!0===t.convert&&(s=!0,r.push('\n\t\t\tif (typeof value !== "number") {\n\t\t\t\tvalue = Number(value);\n\t\t\t}\n\t\t')),r.push(`\n\t\tif (typeof value !== "number" || isNaN(value) || !isFinite(value)) {\n\t\t\t${this.makeError({type:"number",actual:"origValue",messages:e})}\n\t\t\treturn value;\n\t\t}\n\t`),null!=t.min&&r.push(`\n\t\t\tif (value < ${t.min}) {\n\t\t\t\t${this.makeError({type:"numberMin",expected:t.min,actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`),null!=t.max&&r.push(`\n\t\t\tif (value > ${t.max}) {\n\t\t\t\t${this.makeError({type:"numberMax",expected:t.max,actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`),null!=t.equal&&r.push(`\n\t\t\tif (value !== ${t.equal}) {\n\t\t\t\t${this.makeError({type:"numberEqual",expected:t.equal,actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`),null!=t.notEqual&&r.push(`\n\t\t\tif (value === ${t.notEqual}) {\n\t\t\t\t${this.makeError({type:"numberNotEqual",expected:t.notEqual,actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`),!0===t.integer&&r.push(`\n\t\t\tif (value % 1 !== 0) {\n\t\t\t\t${this.makeError({type:"numberInteger",actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`),!0===t.positive&&r.push(`\n\t\t\tif (value <= 0) {\n\t\t\t\t${this.makeError({type:"numberPositive",actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`),!0===t.negative&&r.push(`\n\t\t\tif (value >= 0) {\n\t\t\t\t${this.makeError({type:"numberNegative",actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`),r.push("\n\t\treturn value;\n\t"),{sanitized:s,source:r.join("\n")}};const le=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/,ce=/["'\\\n\r\u2028\u2029]/g;function he(t){return t.replace(ce,(function(t){switch(t){case'"':case"'":case"\\":return"\\"+t;case"\n":return"\\n";case"\r":return"\\r";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029"}}))}var de=function({schema:t,messages:e},n,i){const r=[];r.push(`\n\t\tif (typeof value !== "object" || value === null || Array.isArray(value)) {\n\t\t\t${this.makeError({type:"object",actual:"value",messages:e})}\n\t\t\treturn value;\n\t\t}\n\t`);const s=t.properties||t.props;if(s){r.push("var parentObj = value;"),r.push("var parentField = field;");const a=Object.keys(s);for(let t=0;t<a.length;t++){const e=a[t],o=he(e),u=le.test(o)?`.${o}`:`['${o}']`,l=`parentObj${u}`,c=(n?n+".":"")+e;r.push(`\n// Field: ${he(c)}`),r.push(`field = parentField ? parentField + "${u}" : "${o}";`),r.push(`value = ${l};`);const h=this.getRuleFromSchema(s[e]),d=`\n\t\t\t\t${l} = context.fn[%%INDEX%%](value, field, parentObj, errors, context);\n\t\t\t`;r.push(this.compileRule(h,i,c,d,l))}if(t.strict){const n=Object.keys(s);r.push(`\n\t\t\t\tfield = parentField;\n\t\t\t\tvar invalidProps = [];\n\t\t\t\tvar props = Object.keys(parentObj);\n\n\t\t\t\tfor (let i = 0; i < props.length; i++) {\n\t\t\t\t\tif (${JSON.stringify(n)}.indexOf(props[i]) === -1) {\n\t\t\t\t\t\tinvalidProps.push(props[i]);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tif (invalidProps.length) {\n\t\t\t`),"remove"==t.strict?r.push("\n\t\t\t\t\tinvalidProps.forEach(function(field) {\n\t\t\t\t\t\tdelete parentObj[field];\n\t\t\t\t\t});\n\t\t\t\t"):r.push(`\n\t\t\t\t\t${this.makeError({type:"objectStrict",expected:'"'+n.join(", ")+'"',actual:"invalidProps.join(', ')",messages:e})}\n\t\t\t\t`),r.push("\n\t\t\t\t}\n\t\t\t")}}return null==t.minProps&&null==t.maxProps||(t.strict?r.push(`\n\t\t\t\tprops = Object.keys(${s?"parentObj":"value"});\n\t\t\t`):r.push(`\n\t\t\t\tvar props = Object.keys(${s?"parentObj":"value"});\n\t\t\t\t${s?"field = parentField;":""}\n\t\t\t`)),null!=t.minProps&&r.push(`\n\t\t\tif (props.length < ${t.minProps}) {\n\t\t\t\t${this.makeError({type:"objectMinProps",expected:t.minProps,actual:"props.length",messages:e})}\n\t\t\t}\n\t\t`),null!=t.maxProps&&r.push(`\n\t\t\tif (props.length > ${t.maxProps}) {\n\t\t\t\t${this.makeError({type:"objectMaxProps",expected:t.maxProps,actual:"props.length",messages:e})}\n\t\t\t}\n\t\t`),s?r.push("\n\t\t\treturn parentObj;\n\t\t"):r.push("\n\t\t\treturn value;\n\t\t"),{source:r.join("\n")}},pe=function({schema:t,messages:e,index:n},i,r){const s=[];return r.customs[n]?r.customs[n].schema=t:r.customs[n]={schema:t},s.push(`\n\t\tconst ObjectID = context.customs[${n}].schema.ObjectID;\n\t\tif (!ObjectID.isValid(value)) {\n\t\t\t${this.makeError({type:"objectID",actual:"value",messages:e})}\n\t\t\treturn;\n\t\t}\n\t`),!0===t.convert?s.push("return new ObjectID(value)"):"hexString"===t.convert?s.push("return value.toString()"):s.push("return value"),{source:s.join("\n")}};const fe=/^-?[0-9]\d*(\.\d+)?$/,me=/^[a-zA-Z]+$/,ve=/^[a-zA-Z0-9]+$/,ge=/^[a-zA-Z0-9_-]+$/,ye=/^[0-9a-fA-F]+$/,ke=/^(?:[A-Za-z0-9+\\/]{4})*(?:[A-Za-z0-9+\\/]{2}==|[A-Za-z0-9+/]{3}=)?$/;var be=function({schema:t,messages:e},n,i){const r=[];let s=!1;if(!0===t.convert&&(s=!0,r.push('\n\t\t\tif (typeof value !== "string") {\n\t\t\t\tvalue = String(value);\n\t\t\t}\n\t\t')),r.push(`\n\t\tif (typeof value !== "string") {\n\t\t\t${this.makeError({type:"string",actual:"value",messages:e})}\n\t\t\treturn value;\n\t\t}\n\n\t\tvar origValue = value;\n\t`),t.trim&&(s=!0,r.push("\n\t\t\tvalue = value.trim();\n\t\t")),t.trimLeft&&(s=!0,r.push("\n\t\t\tvalue = value.trimLeft();\n\t\t")),t.trimRight&&(s=!0,r.push("\n\t\t\tvalue = value.trimRight();\n\t\t")),t.padStart){s=!0;const e=null!=t.padChar?t.padChar:" ";r.push(`\n\t\t\tvalue = value.padStart(${t.padStart}, ${JSON.stringify(e)});\n\t\t`)}if(t.padEnd){s=!0;const e=null!=t.padChar?t.padChar:" ";r.push(`\n\t\t\tvalue = value.padEnd(${t.padEnd}, ${JSON.stringify(e)});\n\t\t`)}if(t.lowercase&&(s=!0,r.push("\n\t\t\tvalue = value.toLowerCase();\n\t\t")),t.uppercase&&(s=!0,r.push("\n\t\t\tvalue = value.toUpperCase();\n\t\t")),t.localeLowercase&&(s=!0,r.push("\n\t\t\tvalue = value.toLocaleLowerCase();\n\t\t")),t.localeUppercase&&(s=!0,r.push("\n\t\t\tvalue = value.toLocaleUpperCase();\n\t\t")),r.push("\n\t\t\tvar len = value.length;\n\t"),!1===t.empty&&r.push(`\n\t\t\tif (len === 0) {\n\t\t\t\t${this.makeError({type:"stringEmpty",actual:"value",messages:e})}\n\t\t\t}\n\t\t`),null!=t.min&&r.push(`\n\t\t\tif (len < ${t.min}) {\n\t\t\t\t${this.makeError({type:"stringMin",expected:t.min,actual:"len",messages:e})}\n\t\t\t}\n\t\t`),null!=t.max&&r.push(`\n\t\t\tif (len > ${t.max}) {\n\t\t\t\t${this.makeError({type:"stringMax",expected:t.max,actual:"len",messages:e})}\n\t\t\t}\n\t\t`),null!=t.length&&r.push(`\n\t\t\tif (len !== ${t.length}) {\n\t\t\t\t${this.makeError({type:"stringLength",expected:t.length,actual:"len",messages:e})}\n\t\t\t}\n\t\t`),null!=t.pattern){let n=t.pattern;"string"==typeof t.pattern&&(n=new RegExp(t.pattern,t.patternFlags));const i=`\n\t\t\tif (!${n.toString()}.test(value))\n\t\t\t\t${this.makeError({type:"stringPattern",expected:`"${n.toString().replace(/"/g,"\\$&")}"`,actual:"origValue",messages:e})}\n\t\t`;r.push(`\n\t\t\tif (${t.empty} === true && len === 0) {\n\t\t\t\t// Do nothing\n\t\t\t} else {\n\t\t\t\t${i}\n\t\t\t}\n\t\t`)}if(null!=t.contains&&r.push(`\n\t\t\tif (value.indexOf("${t.contains}") === -1) {\n\t\t\t\t${this.makeError({type:"stringContains",expected:'"'+t.contains+'"',actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`),null!=t.enum){const n=JSON.stringify(t.enum);r.push(`\n\t\t\tif (${n}.indexOf(value) === -1) {\n\t\t\t\t${this.makeError({type:"stringEnum",expected:'"'+t.enum.join(", ")+'"',actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`)}return!0===t.numeric&&r.push(`\n\t\t\tif (!${fe.toString()}.test(value) ) {\n\t\t\t\t${this.makeError({type:"stringNumeric",actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`),!0===t.alpha&&r.push(`\n\t\t\tif(!${me.toString()}.test(value)) {\n\t\t\t\t${this.makeError({type:"stringAlpha",actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`),!0===t.alphanum&&r.push(`\n\t\t\tif(!${ve.toString()}.test(value)) {\n\t\t\t\t${this.makeError({type:"stringAlphanum",actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`),!0===t.alphadash&&r.push(`\n\t\t\tif(!${ge.toString()}.test(value)) {\n\t\t\t\t${this.makeError({type:"stringAlphadash",actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`),!0===t.hex&&r.push(`\n\t\t\tif(value.length % 2 !== 0 || !${ye.toString()}.test(value)) {\n\t\t\t\t${this.makeError({type:"stringHex",actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`),!0===t.singleLine&&r.push(`\n\t\t\tif(value.includes("\\n")) {\n\t\t\t\t${this.makeError({type:"stringSingleLine",messages:e})}\n\t\t\t}\n\t\t`),!0===t.base64&&r.push(`\n\t\t\tif(!${ke.toString()}.test(value)) {\n\t\t\t\t${this.makeError({type:"stringBase64",actual:"origValue",messages:e})}\n\t\t\t}\n\t\t`),r.push("\n\t\treturn value;\n\t"),{sanitized:s,source:r.join("\n")}},xe=function({schema:t,messages:e},n,i){const r=[];if(null!=t.items){if(!Array.isArray(t.items))throw new Error(`Invalid '${t.type}' schema. The 'items' field must be an array.`);if(0===t.items.length)throw new Error(`Invalid '${t.type}' schema. The 'items' field must not be an empty array.`)}if(r.push(`\n\t\tif (!Array.isArray(value)) {\n\t\t\t${this.makeError({type:"tuple",actual:"value",messages:e})}\n\t\t\treturn value;\n\t\t}\n\n\t\tvar len = value.length;\n\t`),!1===t.empty&&r.push(`\n\t\t\tif (len === 0) {\n\t\t\t\t${this.makeError({type:"tupleEmpty",actual:"value",messages:e})}\n\t\t\t\treturn value;\n\t\t\t}\n\t\t`),null!=t.items){r.push(`\n\t\t\tif (${t.empty} !== false && len === 0) {\n\t\t\t\treturn value;\n\t\t\t}\n\n\t\t\tif (len !== ${t.items.length}) {\n\t\t\t\t${this.makeError({type:"tupleLength",expected:t.items.length,actual:"len",messages:e})}\n\t\t\t\treturn value;\n\t\t\t}\n\t\t`),r.push("\n\t\t\tvar arr = value;\n\t\t\tvar parentField = field;\n\t\t");for(let e=0;e<t.items.length;e++){const s=`${n}[${e}]`,a=this.getRuleFromSchema(t.items[e]),o=`\n\t\t\tarr[${e}] = context.fn[%%INDEX%%](arr[${e}], (parentField ? parentField : "") + "[" + ${e} + "]", parent, errors, context);\n\t\t`;r.push(this.compileRule(a,i,s,o,`arr[${e}]`))}}return r.push("\n\t\treturn value;\n\t"),{source:r.join("\n")}};const Ce=/^https?:\/\/\S+/;var Ie=function({schema:t,messages:e},n,i){const r=[];return r.push(`\n\t\tif (typeof value !== "string") {\n\t\t\t${this.makeError({type:"string",actual:"value",messages:e})}\n\t\t\treturn value;\n\t\t}\n\t`),t.empty?r.push("\n\t\t\tif (value.length === 0) return value;\n\t\t"):r.push(`\n\t\t\tif (value.length === 0) {\n\t\t\t\t${this.makeError({type:"urlEmpty",actual:"value",messages:e})}\n\t\t\t\treturn value;\n\t\t\t}\n\t\t`),r.push(`\n\t\tif (!${Ce.toString()}.test(value)) {\n\t\t\t${this.makeError({type:"url",actual:"value",messages:e})}\n\t\t}\n\n\t\treturn value;\n\t`),{source:r.join("\n")}};const we=/^([0-9a-f]{8}-[0-9a-f]{4}-[1-6][0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}|[0]{8}-[0]{4}-[0]{4}-[0]{4}-[0]{12})$/i;var Ee=function({schema:t,messages:e},n){const i=[];return i.push(`\n\t\tif (typeof value !== "string") {\n\t\t\t${this.makeError({type:"string",actual:"value",messages:e})}\n\t\t\treturn value;\n\t\t}\n\n\t\tvar val = value.toLowerCase();\n\t\tif (!${we.toString()}.test(val)) {\n\t\t\t${this.makeError({type:"uuid",actual:"value",messages:e})}\n\t\t\treturn value;\n\t\t}\n\n\t\tconst version = val.charAt(14) | 0;\n\t`),parseInt(t.version)<7&&i.push(`\n\t\t\tif (${t.version} !== version) {\n\t\t\t\t${this.makeError({type:"uuidVersion",expected:t.version,actual:"version",messages:e})}\n\t\t\t\treturn value;\n\t\t\t}\n\t\t`),i.push(`\n\t\tswitch (version) {\n\t\tcase 0:\n\t\tcase 1:\n\t\tcase 2:\n\t\tcase 6:\n\t\t\tbreak;\n\t\tcase 3:\n\t\tcase 4:\n\t\tcase 5:\n\t\t\tif (["8", "9", "a", "b"].indexOf(val.charAt(19)) === -1) {\n\t\t\t\t${this.makeError({type:"uuid",actual:"value",messages:e})}\n\t\t\t}\n\t\t}\n\n\t\treturn value;\n\t`),{source:i.join("\n")}};const Pe=/^((([a-f0-9][a-f0-9]+[-]){5}|([a-f0-9][a-f0-9]+[:]){5})([a-f0-9][a-f0-9])$)|(^([a-f0-9][a-f0-9][a-f0-9][a-f0-9]+[.]){2}([a-f0-9][a-f0-9][a-f0-9][a-f0-9]))$/i;var Ae=function({schema:t,messages:e},n,i){return{source:`\n\t\t\tif (typeof value !== "string") {\n\t\t\t\t${this.makeError({type:"string",actual:"value",messages:e})}\n\t\t\t\treturn value;\n\t\t\t}\n\n\t\t\tvar v = value.toLowerCase();\n\t\t\tif (!${Pe.toString()}.test(v)) {\n\t\t\t\t${this.makeError({type:"mac",actual:"value",messages:e})}\n\t\t\t}\n\t\t\t\n\t\t\treturn value;\n\t\t`}},_e=function({schema:t,messages:e},n,i){return{source:`\n\t\t\tif (typeof value !== "string") {\n\t\t\t\t${this.makeError({type:"string",actual:"value",messages:e})}\n\t\t\t\treturn value;\n\t\t\t}\n\n\t\t\tif (typeof value !== "string")\n\t\t\t\tvalue = String(value);\n\n\t\t\tval = value.replace(/\\D+/g, "");\n\n\t\t\tvar array = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];\n\t\t\tvar len = val ? val.length : 0,\n\t\t\t\tbit = 1,\n\t\t\t\tsum = 0;\n\t\t\twhile (len--) {\n\t\t\t\tsum += !(bit ^= 1) ? parseInt(val[len], 10) : array[val[len]];\n\t\t\t}\n\n\t\t\tif (!(sum % 10 === 0 && sum > 0)) {\n\t\t\t\t${this.makeError({type:"luhn",actual:"value",messages:e})}\n\t\t\t}\n\n\t\t\treturn value;\n\t\t`}};let Oe,Te,De,Se;var Me=function(t){Oe||(Oe=It("prettier"),Te={parser:"babel",useTabs:!1,printWidth:120,trailingComma:"none",tabWidth:4,singleQuote:!1,semi:!0,bracketSpacing:!0},De=It("cli-highlight"),Se={language:"js",theme:De.fromJson({keyword:["white","bold"],built_in:"magenta",literal:"cyan",number:"magenta",regexp:"red",string:["yellow","bold"],symbol:"plain",class:"blue",attr:"plain",function:["white","bold"],title:"plain",params:"green",comment:"grey"})});const e=Oe.format(t,Te);return De.highlight(e,Se)};const Ve=function t(e,n,i={}){for(let s in n)if("object"==typeof(r=n[s])&&!Array.isArray(r)&&null!=r&&Object.keys(r).length>0)e[s]=e[s]||{},t(e[s],n[s],i);else{if(!0===i.skipIfExist&&void 0!==e[s])continue;e[s]=n[s]}var r;return e};var Ne=class{constructor(t){if(this.opts={},this.defaults={},this.messages=Object.assign({},Jt),this.rules={any:Wt,array:Ht,boolean:Ut,class:Qt,custom:Xt,currency:Zt,date:Yt,email:ne,enum:ie,equal:re,forbidden:se,function:ae,multi:oe,number:ue,object:de,objectID:pe,string:be,tuple:xe,url:Ie,uuid:Ee,mac:Ae,luhn:_e},this.aliases={},this.cache=new Map,t){if(Ve(this.opts,t),t.defaults&&Ve(this.defaults,t.defaults),t.messages)for(const e in t.messages)this.addMessage(e,t.messages[e]);if(t.aliases)for(const e in t.aliases)this.alias(e,t.aliases[e]);if(t.customRules)for(const e in t.customRules)this.add(e,t.customRules[e]);if(t.plugins){const e=t.plugins;if(!Array.isArray(e))throw new Error("Plugins type must be array");e.forEach(this.plugin.bind(this))}}}validate(t,e){return this.compile(e)(t)}wrapRequiredCheckSourceCode(t,e,n,i){const r=[];let s,a=!0===t.schema.optional||"forbidden"===t.schema.type,o=!0===t.schema.optional||!0===t.schema.nullable||"forbidden"===t.schema.type;if(null!=t.schema.default){let e;a=!1,!0!==t.schema.nullable&&(o=!1),"function"==typeof t.schema.default?(n.customs[t.index]||(n.customs[t.index]={}),n.customs[t.index].defaultFn=t.schema.default,e=`context.customs[${t.index}].defaultFn()`):e=JSON.stringify(t.schema.default),s=`\n\t\t\t\tvalue = ${e};\n\t\t\t\t${i} = value;\n\t\t\t`}else s=this.makeError({type:"required",actual:"value",messages:t.messages});return r.push(`\n\t\t\tif (value === undefined) { ${a?"\n// allow undefined\n":s} }\n\t\t\telse if (value === null) { ${o?"\n// allow null\n":s} }\n\t\t\t${e?`else { ${e} }`:""}\n\t\t`),r.join("\n")}compile(t){if(null===t||"object"!=typeof t)throw new Error("Invalid schema.");const e=this,n={index:0,rules:[],fn:[],customs:{}};if(this.cache.clear(),!0!==t.$$root)if(Array.isArray(t)){t=this.getRuleFromSchema(t).schema}else{const e=Object.assign({},t);t={type:"object",strict:e.$$strict,properties:e},delete e.$$strict}const i=["var errors = [];","var field;","var parent = null;"],r=this.getRuleFromSchema(t);i.push(this.compileRule(r,n,null,"context.fn[%%INDEX%%](value, field, null, errors, context);","value")),i.push("if (errors.length) {"),i.push('\n\t\t\treturn errors.map(err => {\n\t\t\t\tif (err.message)\n\t\t\t\t\terr.message = err.message\n\t\t\t\t\t\t.replace(/\\{field\\}/g, err.field || "")\n\t\t\t\t\t\t.replace(/\\{expected\\}/g, err.expected != null ? err.expected : "")\n\t\t\t\t\t\t.replace(/\\{actual\\}/g, err.actual != null ? err.actual : "");\n\n\t\t\t\treturn err;\n\t\t\t});\n\t\t'),i.push("}"),i.push("return true;");const s=i.join("\n"),a=new Function("value","context",s);if(this.opts.debug){let t=function(t){return t};"undefined"==typeof window&&(t=Me),n.fn.forEach(((e,n)=>console.log(t(`// Context.fn[${n}]\n`+e.toString())))),console.log(t("// Main check function\n"+a.toString()))}return this.cache.clear(),function(t){return n.data=t,a.call(e,t,n)}}compileRule(t,e,n,i,r){const s=[],a=this.cache.get(t.schema);if(a)(t=a).cycle=!0,t.cycleStack=[],s.push(this.wrapRequiredCheckSourceCode(t,`\n\t\t\t\tvar rule = context.rules[${t.index}];\n\t\t\t\tif (rule.cycleStack.indexOf(value) === -1) {\n\t\t\t\t\trule.cycleStack.push(value);\n\t\t\t\t\t${i.replace(/%%INDEX%%/g,t.index)}\n\t\t\t\t\trule.cycleStack.pop(value);\n\t\t\t\t}\n\t\t\t`,e,r));else{this.cache.set(t.schema,t),t.index=e.index,e.rules[e.index]=t;const a=null!=n?n:"$$root";e.index++;const o=t.ruleFunction.call(this,t,n,e);o.source=o.source.replace(/%%INDEX%%/g,t.index);const u=new Function("value","field","parent","errors","context",o.source);e.fn[t.index]=u,s.push(this.wrapRequiredCheckSourceCode(t,i.replace(/%%INDEX%%/g,t.index),e,r)),s.push(this.makeCustomValidator({vName:r,path:a,schema:t.schema,context:e,messages:t.messages,ruleIndex:t.index}))}return s.join("\n")}getRuleFromSchema(t){if("string"==typeof t)t=this.parseShortHand(t);else if(Array.isArray(t)){if(0==t.length)throw new Error("Invalid schema.");(t={type:"multi",rules:t}).rules.map((t=>this.getRuleFromSchema(t))).every((t=>1==t.schema.optional))&&(t.optional=!0)}if(t.$$type){const e=t.$$type,n=this.getRuleFromSchema(e).schema;delete t.$$type;const i=Object.assign({},t);for(const e in t)delete t[e];Ve(t,n,{skipIfExist:!0}),t.props=i}const e=this.aliases[t.type];e&&(delete t.type,t=Ve(t,e,{skipIfExist:!0}));const n=this.rules[t.type];if(!n)throw new Error("Invalid '"+t.type+"' type in validator schema.");return{messages:Object.assign({},this.messages,t.messages),schema:Ve(t,this.defaults[t.type],{skipIfExist:!0}),ruleFunction:n}}parseShortHand(t){const e=t.split("|").map((t=>t.trim()));let n,i=e[0];return n=i.endsWith("[]")?this.getRuleFromSchema({type:"array",items:i.slice(0,-2)}).schema:{type:e[0]},e.slice(1).map((t=>{const e=t.indexOf(":");if(-1!==e){const i=t.substr(0,e).trim();let r=t.substr(e+1).trim();"true"===r||"false"===r?r="true"===r:Number.isNaN(Number(r))||(r=Number(r)),n[i]=r}else t.startsWith("no-")?n[t.slice(3)]=!1:n[t]=!0})),n}makeError({type:t,field:e,expected:n,actual:i,messages:r}){const s={type:`"${t}"`,message:`"${r[t]}"`};s.field=e?`"${e}"`:"field",null!=n&&(s.expected=n),null!=i&&(s.actual=i);return`errors.push({ ${Object.keys(s).map((t=>`${t}: ${s[t]}`)).join(", ")} });`}makeCustomValidator({vName:t="value",fnName:e="custom",ruleIndex:n,path:i,schema:r,context:s,messages:a}){const o="rule"+n,u="fnCustomErrors"+n;if("function"==typeof r[e]){if(s.customs[n]?(s.customs[n].messages=a,s.customs[n].schema=r):s.customs[n]={messages:a,schema:r},this.opts.useNewCustomCheckerFunction)return`\n               const ${o} = context.customs[${n}];\n\t\t\t\t\tconst ${u} = [];\n\t\t\t\t\t${t} = ${o}.schema.${e}.call(this, ${t}, ${u} , ${o}.schema, "${i}", parent, context);\n\t\t\t\t\tif (Array.isArray(${u} )) {\n                  ${u} .forEach(err => errors.push(Object.assign({ message: ${o}.messages[err.type], field }, err)));\n\t\t\t\t\t}\n\t\t\t\t`;const l="res_"+o;return`\n\t\t\t\tconst ${o} = context.customs[${n}];\n\t\t\t\tconst ${l} = ${o}.schema.${e}.call(this, ${t}, ${o}.schema, "${i}", parent, context);\n\t\t\t\tif (Array.isArray(${l})) {\n\t\t\t\t\t${l}.forEach(err => errors.push(Object.assign({ message: ${o}.messages[err.type], field }, err)));\n\t\t\t\t}\n\t\t`}return""}add(t,e){this.rules[t]=e}addMessage(t,e){this.messages[t]=e}alias(t,e){if(this.rules[t])throw new Error("Alias name must not be a rule name");this.aliases[t]=e}plugin(t){if("function"!=typeof t)throw new Error("Plugin fn type must be function");return t(this)}},$e="INUMBER",je="IOP1",Be="IOP2",Le="IOP3",Re="IVAR",Fe="IVARNAME",ze="IFUNCALL",Ge="IFUNDEF",qe="IEXPR",Ke="IEXPREVAL",Je="IMEMBER",We="IENDSTATEMENT",He="IARRAY";function Ue(t,e){this.type=t,this.value=null!=e?e:0}function Qe(t){return new Ue(je,t)}function Xe(t){return new Ue(Be,t)}function Ze(t){return new Ue(Le,t)}function Ye(t,e,n,i,r){for(var s,a,o,u,l=[],c=[],h=0;h<t.length;h++){var d=t[h],p=d.type;if(p===$e||p===Fe)Array.isArray(d.value)?l.push.apply(l,Ye(d.value.map((function(t){return new Ue($e,t)})).concat(new Ue(He,d.value.length)),e,n,i,r)):l.push(d);else if(p===Re&&r.hasOwnProperty(d.value))d=new Ue($e,r[d.value]),l.push(d);else if(p===Be&&l.length>1)a=l.pop(),s=l.pop(),u=n[d.value],d=new Ue($e,u(s.value,a.value)),l.push(d);else if(p===Le&&l.length>2)o=l.pop(),a=l.pop(),s=l.pop(),"?"===d.value?l.push(s.value?a.value:o.value):(u=i[d.value],d=new Ue($e,u(s.value,a.value,o.value)),l.push(d));else if(p===je&&l.length>0)s=l.pop(),u=e[d.value],d=new Ue($e,u(s.value)),l.push(d);else if(p===qe){for(;l.length>0;)c.push(l.shift());c.push(new Ue(qe,Ye(d.value,e,n,i,r)))}else if(p===Je&&l.length>0)s=l.pop(),l.push(new Ue($e,s.value[d.value]));else{for(;l.length>0;)c.push(l.shift());c.push(d)}}for(;l.length>0;)c.push(l.shift());return c}function tn(t,e,n){for(var i=[],r=0;r<t.length;r++){var s=t[r],a=s.type;if(a===Re&&s.value===e)for(var o=0;o<n.tokens.length;o++){var u,l=n.tokens[o];u=l.type===je?Qe(l.value):l.type===Be?Xe(l.value):l.type===Le?Ze(l.value):new Ue(l.type,l.value),i.push(u)}else a===qe?i.push(new Ue(qe,tn(s.value,e,n))):i.push(s)}return i}function en(t,e,n){var i,r,s,a,o,u,l=[];if(rn(t))return sn(t,n);for(var c=t.length,h=0;h<c;h++){var d=t[h],p=d.type;if(p===$e||p===Fe)l.push(d.value);else if(p===Be)r=l.pop(),i=l.pop(),"and"===d.value?l.push(!!i&&!!en(r,e,n)):"or"===d.value?l.push(!!i||!!en(r,e,n)):"="===d.value?(a=e.binaryOps[d.value],l.push(a(i,en(r,e,n),n))):(a=e.binaryOps[d.value],l.push(a(sn(i,n),sn(r,n))));else if(p===Le)s=l.pop(),r=l.pop(),i=l.pop(),"?"===d.value?l.push(en(i?r:s,e,n)):(a=e.ternaryOps[d.value],l.push(a(sn(i,n),sn(r,n),sn(s,n))));else if(p===Re)if(d.value in e.functions)l.push(e.functions[d.value]);else if(d.value in e.unaryOps&&e.parser.isOperatorEnabled(d.value))l.push(e.unaryOps[d.value]);else{var f=n[d.value];if(void 0===f)throw new Error("undefined variable: "+d.value);l.push(f)}else if(p===je)i=l.pop(),a=e.unaryOps[d.value],l.push(a(sn(i,n)));else if(p===ze){for(u=d.value,o=[];u-- >0;)o.unshift(sn(l.pop(),n));if(!(a=l.pop()).apply||!a.call)throw new Error(a+" is not a function");l.push(a.apply(void 0,o))}else if(p===Ge)l.push(function(){for(var t=l.pop(),i=[],r=d.value;r-- >0;)i.unshift(l.pop());var s=l.pop(),a=function(){for(var r=Object.assign({},n),s=0,a=i.length;s<a;s++)r[i[s]]=arguments[s];return en(t,e,r)};return Object.defineProperty(a,"name",{value:s,writable:!1}),n[s]=a,a}());else if(p===qe)l.push(nn(d,e));else if(p===Ke)l.push(d);else if(p===Je)i=l.pop(),l.push(i[d.value]);else if(p===We)l.pop();else{if(p!==He)throw new Error("invalid Expression");for(u=d.value,o=[];u-- >0;)o.unshift(l.pop());l.push(o)}}if(l.length>1)throw new Error("invalid Expression (parity)");return 0===l[0]?0:sn(l[0],n)}function nn(t,e,n){return rn(t)?t:{type:Ke,value:function(n){return en(t.value,e,n)}}}function rn(t){return t&&t.type===Ke}function sn(t,e){return rn(t)?t.value(e):t}function an(t,e){for(var n,i,r,s,a,o,u=[],l=0;l<t.length;l++){var c=t[l],h=c.type;if(h===$e)"number"==typeof c.value&&c.value<0?u.push("("+c.value+")"):Array.isArray(c.value)?u.push("["+c.value.map(on).join(", ")+"]"):u.push(on(c.value));else if(h===Be)i=u.pop(),n=u.pop(),s=c.value,e?"^"===s?u.push("Math.pow("+n+", "+i+")"):"and"===s?u.push("(!!"+n+" && !!"+i+")"):"or"===s?u.push("(!!"+n+" || !!"+i+")"):"||"===s?u.push("(function(a,b){ return Array.isArray(a) && Array.isArray(b) ? a.concat(b) : String(a) + String(b); }(("+n+"),("+i+")))"):"=="===s?u.push("("+n+" === "+i+")"):"!="===s?u.push("("+n+" !== "+i+")"):"["===s?u.push(n+"[("+i+") | 0]"):u.push("("+n+" "+s+" "+i+")"):"["===s?u.push(n+"["+i+"]"):u.push("("+n+" "+s+" "+i+")");else if(h===Le){if(r=u.pop(),i=u.pop(),n=u.pop(),"?"!==(s=c.value))throw new Error("invalid Expression");u.push("("+n+" ? "+i+" : "+r+")")}else if(h===Re||h===Fe)u.push(c.value);else if(h===je)n=u.pop(),"-"===(s=c.value)||"+"===s?u.push("("+s+n+")"):e?"not"===s?u.push("(!"+n+")"):"!"===s?u.push("fac("+n+")"):u.push(s+"("+n+")"):"!"===s?u.push("("+n+"!)"):u.push("("+s+" "+n+")");else if(h===ze){for(o=c.value,a=[];o-- >0;)a.unshift(u.pop());s=u.pop(),u.push(s+"("+a.join(", ")+")")}else if(h===Ge){for(i=u.pop(),o=c.value,a=[];o-- >0;)a.unshift(u.pop());n=u.pop(),e?u.push("("+n+" = function("+a.join(", ")+") { return "+i+" })"):u.push("("+n+"("+a.join(", ")+") = "+i+")")}else if(h===Je)n=u.pop(),u.push(n+"."+c.value);else if(h===He){for(o=c.value,a=[];o-- >0;)a.unshift(u.pop());u.push("["+a.join(", ")+"]")}else if(h===qe)u.push("("+an(c.value,e)+")");else if(h!==We)throw new Error("invalid Expression")}return u.length>1&&(u=e?[u.join(",")]:[u.join(";")]),String(u[0])}function on(t){return"string"==typeof t?JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029"):t}function un(t,e){for(var n=0;n<t.length;n++)if(t[n]===e)return!0;return!1}function ln(t,e,n){for(var i=!!(n=n||{}).withMembers,r=null,s=0;s<t.length;s++){var a=t[s];a.type===Re||a.type===Fe?i||un(e,a.value)?null!==r?(un(e,r)||e.push(r),r=a.value):r=a.value:e.push(a.value):a.type===Je&&i&&null!==r?r+="."+a.value:a.type===qe?ln(a.value,e,n):null!==r&&(un(e,r)||e.push(r),r=null)}null===r||un(e,r)||e.push(r)}function cn(t,e){this.tokens=t,this.parser=e,this.unaryOps=e.unaryOps,this.binaryOps=e.binaryOps,this.ternaryOps=e.ternaryOps,this.functions=e.functions}Ue.prototype.toString=function(){switch(this.type){case $e:case je:case Be:case Le:case Re:case Fe:case We:return this.value;case ze:return"CALL "+this.value;case Ge:return"DEF "+this.value;case He:return"ARRAY "+this.value;case Je:return"."+this.value;default:return"Invalid Instruction"}},cn.prototype.simplify=function(t){return t=t||{},new cn(Ye(this.tokens,this.unaryOps,this.binaryOps,this.ternaryOps,t),this.parser)},cn.prototype.substitute=function(t,e){return e instanceof cn||(e=this.parser.parse(String(e))),new cn(tn(this.tokens,t,e),this.parser)},cn.prototype.evaluate=function(t){return t=t||{},en(this.tokens,this,t)},cn.prototype.toString=function(){return an(this.tokens,!1)},cn.prototype.symbols=function(t){t=t||{};var e=[];return ln(this.tokens,e,t),e},cn.prototype.variables=function(t){t=t||{};var e=[];ln(this.tokens,e,t);var n=this.functions;return e.filter((function(t){return!(t in n)}))},cn.prototype.toJSFunction=function(t,e){var n=this,i=new Function(t,"with(this.functions) with (this.ternaryOps) with (this.binaryOps) with (this.unaryOps) { return "+an(this.simplify(e).tokens,!0)+"; }");return function(){return i.apply(n,arguments)}};var hn="TEOF",dn="TOP",pn="TNUMBER",fn="TSTRING",mn="TPAREN",vn="TBRACKET",gn="TCOMMA",yn="TNAME",kn="TSEMICOLON";function bn(t,e,n){this.type=t,this.value=e,this.index=n}function xn(t,e){this.pos=0,this.current=null,this.unaryOps=t.unaryOps,this.binaryOps=t.binaryOps,this.ternaryOps=t.ternaryOps,this.consts=t.consts,this.expression=e,this.savedPosition=0,this.savedCurrent=null,this.options=t.options,this.parser=t}bn.prototype.toString=function(){return this.type+": "+this.value},xn.prototype.newToken=function(t,e,n){return new bn(t,e,null!=n?n:this.pos)},xn.prototype.save=function(){this.savedPosition=this.pos,this.savedCurrent=this.current},xn.prototype.restore=function(){this.pos=this.savedPosition,this.current=this.savedCurrent},xn.prototype.next=function(){return this.pos>=this.expression.length?this.newToken(hn,"EOF"):this.isWhitespace()||this.isComment()?this.next():this.isRadixInteger()||this.isNumber()||this.isOperator()||this.isString()||this.isParen()||this.isBracket()||this.isComma()||this.isSemicolon()||this.isNamedOp()||this.isConst()||this.isName()?this.current:void this.parseError('Unknown character "'+this.expression.charAt(this.pos)+'"')},xn.prototype.isString=function(){var t=!1,e=this.pos,n=this.expression.charAt(e);if("'"===n||'"'===n)for(var i=this.expression.indexOf(n,e+1);i>=0&&this.pos<this.expression.length;){if(this.pos=i+1,"\\"!==this.expression.charAt(i-1)){var r=this.expression.substring(e+1,i);this.current=this.newToken(fn,this.unescape(r),e),t=!0;break}i=this.expression.indexOf(n,i+1)}return t},xn.prototype.isParen=function(){var t=this.expression.charAt(this.pos);return("("===t||")"===t)&&(this.current=this.newToken(mn,t),this.pos++,!0)},xn.prototype.isBracket=function(){var t=this.expression.charAt(this.pos);return!("["!==t&&"]"!==t||!this.isOperatorEnabled("["))&&(this.current=this.newToken(vn,t),this.pos++,!0)},xn.prototype.isComma=function(){return","===this.expression.charAt(this.pos)&&(this.current=this.newToken(gn,","),this.pos++,!0)},xn.prototype.isSemicolon=function(){return";"===this.expression.charAt(this.pos)&&(this.current=this.newToken(kn,";"),this.pos++,!0)},xn.prototype.isConst=function(){for(var t=this.pos,e=t;e<this.expression.length;e++){var n=this.expression.charAt(e);if(n.toUpperCase()===n.toLowerCase()&&(e===this.pos||"_"!==n&&"."!==n&&(n<"0"||n>"9")))break}if(e>t){var i=this.expression.substring(t,e);if(i in this.consts)return this.current=this.newToken(pn,this.consts[i]),this.pos+=i.length,!0}return!1},xn.prototype.isNamedOp=function(){for(var t=this.pos,e=t;e<this.expression.length;e++){var n=this.expression.charAt(e);if(n.toUpperCase()===n.toLowerCase()&&(e===this.pos||"_"!==n&&(n<"0"||n>"9")))break}if(e>t){var i=this.expression.substring(t,e);if(this.isOperatorEnabled(i)&&(i in this.binaryOps||i in this.unaryOps||i in this.ternaryOps))return this.current=this.newToken(dn,i),this.pos+=i.length,!0}return!1},xn.prototype.isName=function(){for(var t=this.pos,e=t,n=!1;e<this.expression.length;e++){var i=this.expression.charAt(e);if(i.toUpperCase()===i.toLowerCase()){if(e===this.pos&&("$"===i||"_"===i)){"_"===i&&(n=!0);continue}if(e===this.pos||!n||"_"!==i&&(i<"0"||i>"9"))break}else n=!0}if(n){var r=this.expression.substring(t,e);return this.current=this.newToken(yn,r),this.pos+=r.length,!0}return!1},xn.prototype.isWhitespace=function(){for(var t=!1,e=this.expression.charAt(this.pos);!(" "!==e&&"\t"!==e&&"\n"!==e&&"\r"!==e||(t=!0,this.pos++,this.pos>=this.expression.length));)e=this.expression.charAt(this.pos);return t};var Cn=/^[0-9a-f]{4}$/i;function In(t,e,n){this.parser=t,this.tokens=e,this.current=null,this.nextToken=null,this.next(),this.savedCurrent=null,this.savedNextToken=null,this.allowMemberAccess=!1!==n.allowMemberAccess}xn.prototype.unescape=function(t){var e=t.indexOf("\\");if(e<0)return t;for(var n=t.substring(0,e);e>=0;){var i=t.charAt(++e);switch(i){case"'":n+="'";break;case'"':n+='"';break;case"\\":n+="\\";break;case"/":n+="/";break;case"b":n+="\b";break;case"f":n+="\f";break;case"n":n+="\n";break;case"r":n+="\r";break;case"t":n+="\t";break;case"u":var r=t.substring(e+1,e+5);Cn.test(r)||this.parseError("Illegal escape sequence: \\u"+r),n+=String.fromCharCode(parseInt(r,16)),e+=4;break;default:throw this.parseError('Illegal escape sequence: "\\'+i+'"')}++e;var s=t.indexOf("\\",e);n+=t.substring(e,s<0?t.length:s),e=s}return n},xn.prototype.isComment=function(){return"/"===this.expression.charAt(this.pos)&&"*"===this.expression.charAt(this.pos+1)&&(this.pos=this.expression.indexOf("*/",this.pos)+2,1===this.pos&&(this.pos=this.expression.length),!0)},xn.prototype.isRadixInteger=function(){var t,e,n=this.pos;if(n>=this.expression.length-2||"0"!==this.expression.charAt(n))return!1;if(++n,"x"===this.expression.charAt(n))t=16,e=/^[0-9a-f]$/i,++n;else{if("b"!==this.expression.charAt(n))return!1;t=2,e=/^[01]$/i,++n}for(var i=!1,r=n;n<this.expression.length;){var s=this.expression.charAt(n);if(!e.test(s))break;n++,i=!0}return i&&(this.current=this.newToken(pn,parseInt(this.expression.substring(r,n),t)),this.pos=n),i},xn.prototype.isNumber=function(){for(var t,e=!1,n=this.pos,i=n,r=n,s=!1,a=!1;n<this.expression.length&&((t=this.expression.charAt(n))>="0"&&t<="9"||!s&&"."===t);)"."===t?s=!0:a=!0,n++,e=a;if(e&&(r=n),"e"===t||"E"===t){n++;for(var o=!0,u=!1;n<this.expression.length;){if(t=this.expression.charAt(n),!o||"+"!==t&&"-"!==t){if(!(t>="0"&&t<="9"))break;u=!0,o=!1}else o=!1;n++}u||(n=r)}return e?(this.current=this.newToken(pn,parseFloat(this.expression.substring(i,n))),this.pos=n):this.pos=r,e},xn.prototype.isOperator=function(){var t=this.pos,e=this.expression.charAt(this.pos);if("+"===e||"-"===e||"*"===e||"/"===e||"%"===e||"^"===e||"?"===e||":"===e||"."===e)this.current=this.newToken(dn,e);else if("∙"===e||"•"===e)this.current=this.newToken(dn,"*");else if(">"===e)"="===this.expression.charAt(this.pos+1)?(this.current=this.newToken(dn,">="),this.pos++):this.current=this.newToken(dn,">");else if("<"===e)"="===this.expression.charAt(this.pos+1)?(this.current=this.newToken(dn,"<="),this.pos++):this.current=this.newToken(dn,"<");else if("|"===e){if("|"!==this.expression.charAt(this.pos+1))return!1;this.current=this.newToken(dn,"||"),this.pos++}else if("="===e)"="===this.expression.charAt(this.pos+1)?(this.current=this.newToken(dn,"=="),this.pos++):this.current=this.newToken(dn,e);else{if("!"!==e)return!1;"="===this.expression.charAt(this.pos+1)?(this.current=this.newToken(dn,"!="),this.pos++):this.current=this.newToken(dn,e)}return this.pos++,!!this.isOperatorEnabled(this.current.value)||(this.pos=t,!1)},xn.prototype.isOperatorEnabled=function(t){return this.parser.isOperatorEnabled(t)},xn.prototype.getCoordinates=function(){var t,e=0,n=-1;do{e++,t=this.pos-n,n=this.expression.indexOf("\n",n+1)}while(n>=0&&n<this.pos);return{line:e,column:t}},xn.prototype.parseError=function(t){var e=this.getCoordinates();throw new Error("parse error ["+e.line+":"+e.column+"]: "+t)},In.prototype.next=function(){return this.current=this.nextToken,this.nextToken=this.tokens.next()},In.prototype.tokenMatches=function(t,e){return void 0===e||(Array.isArray(e)?un(e,t.value):"function"==typeof e?e(t):t.value===e)},In.prototype.save=function(){this.savedCurrent=this.current,this.savedNextToken=this.nextToken,this.tokens.save()},In.prototype.restore=function(){this.tokens.restore(),this.current=this.savedCurrent,this.nextToken=this.savedNextToken},In.prototype.accept=function(t,e){return!(this.nextToken.type!==t||!this.tokenMatches(this.nextToken,e))&&(this.next(),!0)},In.prototype.expect=function(t,e){if(!this.accept(t,e)){var n=this.tokens.getCoordinates();throw new Error("parse error ["+n.line+":"+n.column+"]: Expected "+(e||t))}},In.prototype.parseAtom=function(t){var e=this.tokens.unaryOps;if(this.accept(yn)||this.accept(dn,(function(t){return t.value in e})))t.push(new Ue(Re,this.current.value));else if(this.accept(pn))t.push(new Ue($e,this.current.value));else if(this.accept(fn))t.push(new Ue($e,this.current.value));else if(this.accept(mn,"("))this.parseExpression(t),this.expect(mn,")");else{if(!this.accept(vn,"["))throw new Error("unexpected "+this.nextToken);if(this.accept(vn,"]"))t.push(new Ue(He,0));else{var n=this.parseArrayList(t);t.push(new Ue(He,n))}}},In.prototype.parseExpression=function(t){var e=[];this.parseUntilEndStatement(t,e)||(this.parseVariableAssignmentExpression(e),this.parseUntilEndStatement(t,e)||this.pushExpression(t,e))},In.prototype.pushExpression=function(t,e){for(var n=0,i=e.length;n<i;n++)t.push(e[n])},In.prototype.parseUntilEndStatement=function(t,e){return!!this.accept(kn)&&(!this.nextToken||this.nextToken.type===hn||this.nextToken.type===mn&&")"===this.nextToken.value||e.push(new Ue(We)),this.nextToken.type!==hn&&this.parseExpression(e),t.push(new Ue(qe,e)),!0)},In.prototype.parseArrayList=function(t){for(var e=0;!this.accept(vn,"]");)for(this.parseExpression(t),++e;this.accept(gn);)this.parseExpression(t),++e;return e},In.prototype.parseVariableAssignmentExpression=function(t){for(this.parseConditionalExpression(t);this.accept(dn,"=");){var e=t.pop(),n=[],i=t.length-1;if(e.type!==ze){if(e.type!==Re&&e.type!==Je)throw new Error("expected variable for assignment");this.parseVariableAssignmentExpression(n),t.push(new Ue(Fe,e.value)),t.push(new Ue(qe,n)),t.push(Xe("="))}else{if(!this.tokens.isOperatorEnabled("()="))throw new Error("function definition is not permitted");for(var r=0,s=e.value+1;r<s;r++){var a=i-r;t[a].type===Re&&(t[a]=new Ue(Fe,t[a].value))}this.parseVariableAssignmentExpression(n),t.push(new Ue(qe,n)),t.push(new Ue(Ge,e.value))}}},In.prototype.parseConditionalExpression=function(t){for(this.parseOrExpression(t);this.accept(dn,"?");){var e=[],n=[];this.parseConditionalExpression(e),this.expect(dn,":"),this.parseConditionalExpression(n),t.push(new Ue(qe,e)),t.push(new Ue(qe,n)),t.push(Ze("?"))}},In.prototype.parseOrExpression=function(t){for(this.parseAndExpression(t);this.accept(dn,"or");){var e=[];this.parseAndExpression(e),t.push(new Ue(qe,e)),t.push(Xe("or"))}},In.prototype.parseAndExpression=function(t){for(this.parseComparison(t);this.accept(dn,"and");){var e=[];this.parseComparison(e),t.push(new Ue(qe,e)),t.push(Xe("and"))}};var wn=["==","!=","<","<=",">=",">","in"];In.prototype.parseComparison=function(t){for(this.parseAddSub(t);this.accept(dn,wn);){var e=this.current;this.parseAddSub(t),t.push(Xe(e.value))}};var En=["+","-","||"];In.prototype.parseAddSub=function(t){for(this.parseTerm(t);this.accept(dn,En);){var e=this.current;this.parseTerm(t),t.push(Xe(e.value))}};var Pn=["*","/","%"];function An(t,e){return Number(t)+Number(e)}function _n(t,e){return t-e}function On(t,e){return t*e}function Tn(t,e){return t/e}function Dn(t,e){return t%e}function Sn(t,e){return Array.isArray(t)&&Array.isArray(e)?t.concat(e):""+t+e}function Mn(t,e){return t===e}function Vn(t,e){return t!==e}function Nn(t,e){return t>e}function $n(t,e){return t<e}function jn(t,e){return t>=e}function Bn(t,e){return t<=e}function Ln(t,e){return Boolean(t&&e)}function Rn(t,e){return Boolean(t||e)}function Fn(t,e){return un(e,t)}function zn(t){return(Math.exp(t)-Math.exp(-t))/2}function Gn(t){return(Math.exp(t)+Math.exp(-t))/2}function qn(t){return t===1/0?1:t===-1/0?-1:(Math.exp(t)-Math.exp(-t))/(Math.exp(t)+Math.exp(-t))}function Kn(t){return t===-1/0?t:Math.log(t+Math.sqrt(t*t+1))}function Jn(t){return Math.log(t+Math.sqrt(t*t-1))}function Wn(t){return Math.log((1+t)/(1-t))/2}function Hn(t){return Math.log(t)*Math.LOG10E}function Un(t){return-t}function Qn(t){return!t}function Xn(t){return t<0?Math.ceil(t):Math.floor(t)}function Zn(t){return Math.random()*(t||1)}function Yn(t){return ei(t+1)}In.prototype.parseTerm=function(t){for(this.parseFactor(t);this.accept(dn,Pn);){var e=this.current;this.parseFactor(t),t.push(Xe(e.value))}},In.prototype.parseFactor=function(t){var e=this.tokens.unaryOps;if(this.save(),this.accept(dn,(function(t){return t.value in e}))){if("-"!==this.current.value&&"+"!==this.current.value){if(this.nextToken.type===mn&&"("===this.nextToken.value)return this.restore(),void this.parseExponential(t);if(this.nextToken.type===kn||this.nextToken.type===gn||this.nextToken.type===hn||this.nextToken.type===mn&&")"===this.nextToken.value)return this.restore(),void this.parseAtom(t)}var n=this.current;this.parseFactor(t),t.push(Qe(n.value))}else this.parseExponential(t)},In.prototype.parseExponential=function(t){for(this.parsePostfixExpression(t);this.accept(dn,"^");)this.parseFactor(t),t.push(Xe("^"))},In.prototype.parsePostfixExpression=function(t){for(this.parseFunctionCall(t);this.accept(dn,"!");)t.push(Qe("!"))},In.prototype.parseFunctionCall=function(t){var e=this.tokens.unaryOps;if(this.accept(dn,(function(t){return t.value in e}))){var n=this.current;this.parseAtom(t),t.push(Qe(n.value))}else for(this.parseMemberExpression(t);this.accept(mn,"(");)if(this.accept(mn,")"))t.push(new Ue(ze,0));else{var i=this.parseArgumentList(t);t.push(new Ue(ze,i))}},In.prototype.parseArgumentList=function(t){for(var e=0;!this.accept(mn,")");)for(this.parseExpression(t),++e;this.accept(gn);)this.parseExpression(t),++e;return e},In.prototype.parseMemberExpression=function(t){for(this.parseAtom(t);this.accept(dn,".")||this.accept(vn,"[");){var e=this.current;if("."===e.value){if(!this.allowMemberAccess)throw new Error('unexpected ".", member access is not permitted');this.expect(yn),t.push(new Ue(Je,this.current.value))}else{if("["!==e.value)throw new Error("unexpected symbol: "+e.value);if(!this.tokens.isOperatorEnabled("["))throw new Error('unexpected "[]", arrays are disabled');this.parseExpression(t),this.expect(vn,"]"),t.push(Xe("["))}}};var ti=[.9999999999999971,57.15623566586292,-59.59796035547549,14.136097974741746,-.4919138160976202,3399464998481189e-20,4652362892704858e-20,-9837447530487956e-20,.0001580887032249125,-.00021026444172410488,.00021743961811521265,-.0001643181065367639,8441822398385275e-20,-26190838401581408e-21,36899182659531625e-22];function ei(t){var e,n;if(function(t){return isFinite(t)&&t===Math.round(t)}(t)){if(t<=0)return isFinite(t)?1/0:NaN;if(t>171)return 1/0;for(var i=t-2,r=t-1;i>1;)r*=i,i--;return 0===r&&(r=1),r}if(t<.5)return Math.PI/(Math.sin(Math.PI*t)*ei(1-t));if(t>=171.35)return 1/0;if(t>85){var s=t*t,a=s*t,o=a*t,u=o*t;return Math.sqrt(2*Math.PI/t)*Math.pow(t/Math.E,t)*(1+1/(12*t)+1/(288*s)-139/(51840*a)-571/(2488320*o)+163879/(209018880*u)+5246819/(75246796800*u*t))}--t,n=ti[0];for(var l=1;l<ti.length;++l)n+=ti[l]/(t+l);return e=t+4.7421875+.5,Math.sqrt(2*Math.PI)*Math.pow(e,t+.5)*Math.exp(-e)*n}function ni(t){return Array.isArray(t)?t.length:String(t).length}function ii(){for(var t=0,e=0,n=0;n<arguments.length;n++){var i,r=Math.abs(arguments[n]);e<r?(t=t*(i=e/r)*i+1,e=r):t+=r>0?(i=r/e)*i:r}return e===1/0?1/0:e*Math.sqrt(t)}function ri(t,e,n){return t?e:n}function si(t,e){return void 0===e||0==+e?Math.round(t):(t=+t,e=-+e,isNaN(t)||"number"!=typeof e||e%1!=0?NaN:(t=t.toString().split("e"),+((t=(t=Math.round(+(t[0]+"e"+(t[1]?+t[1]-e:-e)))).toString().split("e"))[0]+"e"+(t[1]?+t[1]+e:e))))}function ai(t,e,n){return n&&(n[t]=e),e}function oi(t,e){return t[0|e]}function ui(t){return 1===arguments.length&&Array.isArray(t)?Math.max.apply(Math,t):Math.max.apply(Math,arguments)}function li(t){return 1===arguments.length&&Array.isArray(t)?Math.min.apply(Math,t):Math.min.apply(Math,arguments)}function ci(t,e){if("function"!=typeof t)throw new Error("First argument to map is not a function");if(!Array.isArray(e))throw new Error("Second argument to map is not an array");return e.map((function(e,n){return t(e,n)}))}function hi(t,e,n){if("function"!=typeof t)throw new Error("First argument to fold is not a function");if(!Array.isArray(n))throw new Error("Second argument to fold is not an array");return n.reduce((function(e,n,i){return t(e,n,i)}),e)}function di(t,e){if("function"!=typeof t)throw new Error("First argument to filter is not a function");if(!Array.isArray(e))throw new Error("Second argument to filter is not an array");return e.filter((function(e,n){return t(e,n)}))}function pi(t,e){if(!Array.isArray(e)&&"string"!=typeof e)throw new Error("Second argument to indexOf is not a string or array");return e.indexOf(t)}function fi(t,e){if(!Array.isArray(e))throw new Error("Second argument to join is not an array");return e.join(t)}function mi(t){return(t>0)-(t<0)||+t}var vi=1/3;function gi(t){return t<0?-Math.pow(-t,vi):Math.pow(t,vi)}function yi(t){return Math.exp(t)-1}function ki(t){return Math.log(1+t)}function bi(t){return Math.log(t)/Math.LN2}function xi(t){this.options=t||{},this.unaryOps={sin:Math.sin,cos:Math.cos,tan:Math.tan,asin:Math.asin,acos:Math.acos,atan:Math.atan,sinh:Math.sinh||zn,cosh:Math.cosh||Gn,tanh:Math.tanh||qn,asinh:Math.asinh||Kn,acosh:Math.acosh||Jn,atanh:Math.atanh||Wn,sqrt:Math.sqrt,cbrt:Math.cbrt||gi,log:Math.log,log2:Math.log2||bi,ln:Math.log,lg:Math.log10||Hn,log10:Math.log10||Hn,expm1:Math.expm1||yi,log1p:Math.log1p||ki,abs:Math.abs,ceil:Math.ceil,floor:Math.floor,round:Math.round,trunc:Math.trunc||Xn,"-":Un,"+":Number,exp:Math.exp,not:Qn,length:ni,"!":Yn,sign:Math.sign||mi},this.binaryOps={"+":An,"-":_n,"*":On,"/":Tn,"%":Dn,"^":Math.pow,"||":Sn,"==":Mn,"!=":Vn,">":Nn,"<":$n,">=":jn,"<=":Bn,and:Ln,or:Rn,in:Fn,"=":ai,"[":oi},this.ternaryOps={"?":ri},this.functions={random:Zn,fac:Yn,min:li,max:ui,hypot:Math.hypot||ii,pyt:Math.hypot||ii,pow:Math.pow,atan2:Math.atan2,if:ri,gamma:ei,roundTo:si,map:ci,fold:hi,filter:di,indexOf:pi,join:fi},this.consts={E:Math.E,PI:Math.PI,true:!0,false:!1}}xi.prototype.parse=function(t){var e=[],n=new In(this,new xn(this,t),{allowMemberAccess:this.options.allowMemberAccess});return n.parseExpression(e),n.expect(hn,"EOF"),new cn(e,this)},xi.prototype.evaluate=function(t,e){return this.parse(t).evaluate(e)};var Ci=new xi;xi.parse=function(t){return Ci.parse(t)},xi.evaluate=function(t,e){return Ci.parse(t).evaluate(e)};var Ii={"+":"add","-":"subtract","*":"multiply","/":"divide","%":"remainder","^":"power","!":"factorial","<":"comparison",">":"comparison","<=":"comparison",">=":"comparison","==":"comparison","!=":"comparison","||":"concatenate",and:"logical",or:"logical",not:"logical","?":"conditional",":":"conditional","=":"assignment","[":"array","()=":"fndef"};xi.prototype.isOperatorEnabled=function(t){var e=function(t){return Ii.hasOwnProperty(t)?Ii[t]:t}(t),n=this.options.operators||{};return!(e in n)||!!n[e]};var wi=function(t){t=t.replace(/ /g,"");var e=/\(([^\(\)]|\(([^\(\)]|\(([^\(\)]|\(([^\(\)])*\))*\))*\))*\)/.exec(t);if(void 0===e)return{result:!1};var n=t.split(")");return{result:!0,unit:n[n.length-1],expression:e[0]}},Ei=function(){function t(e){l(this,t),this.expressionProps=e}return h(t,[{key:"resize",value:function(t){var e=wi(this.expressionProps.expression),n="(".concat(e.expression,"*").concat(t,")");return"".concat(G.mathExpPreface,"(").concat(n,")").concat(this.expressionProps.unit)}},{key:"calculateValues",value:function(t,e){for(var n,i=t.length,r=(new xi).parse(this.expressionProps.expression),s=[],a=(d(n={},G.totalElements,i),d(n,G.initParams,e),n),o=0;o<i;o++){a[G.elementIndex]=o;try{var u=r.evaluate(a);if(null==u){ut.error("".concat(this.expressionProps.expression," is not a valid mathematical expression. Returning 0")),s.push(0);continue}var l="".concat(u).concat(this.expressionProps.unit);"amount"===this.expressionProps.type&&(l=parseFloat(l)),s.push(l)}catch(t){ut.error("".concat(this.expressionProps.expression," is not a valid mathematical expression. Returning 0")),s.push(0)}}return s}}]),t}();function Pi(t){t=t.replace(/ /g,"");return/^@stagger\(([_A-z0-9.%-]+?(,[_A-z0-9.%-]+)?(,[_A-z0-9.%-]+)?(,[_A-z0-9.%-]+)?(,[_A-z0-9.%-]+)?(,[_A-z0-9.%-]+))\)$/.test(t)}var Ai=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(t=t.replace(/ /g,""),e&&!Pi(t))return!1;var n=/.*\((.*)\).*/,i=n.exec(t)[1],r=i.split(",");return{start:r[0],end:r[1],startFraction:1*r[2]||0,easing:r[3]||"linear",mode:r[4]||"linear",reverse:"true"===r[5]}};var _i=function(){function t(e){l(this,t),this.staggerProps=e}return h(t,[{key:"resize",value:function(t){return this.staggerProps.from*=t,this.staggerProps.to*=t,!0===this.staggerProps.integer&&(this.staggerProps.from=Math.round(this.staggerProps.from),this.staggerProps.to=Math.round(this.staggerProps.to)),"@stagger(".concat(this.staggerProps.from).concat(this.staggerProps.unit,", ").concat(this.staggerProps.to).concat(this.staggerProps.unit,", ").concat(this.staggerProps.fraction||0,", ").concat(this.staggerProps.easing||"linear",", ").concat(this.staggerProps.mode||"linear",", ").concat(this.staggerProps.reverse||!1,")")}},{key:"calculateValues",value:function(t){for(var e,n,i,r,s=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"linear",i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=[];if("linear"===n)for(var s=0;s<t;s++){var a=s/(t-1),o=a<e?a+1-e+1/(t-1):a-e;i&&(o=1-o),r.push(o)}else if("omni"===n)for(var u=1-e,l=0;l<t;l++){var c=Math.abs(l/(t-1)-e)/u;i&&(c=1-c),r.push(c)}return r}(t.length,this.staggerProps.fraction,this.staggerProps.mode,this.staggerProps.reverse),a=[],o=0;o<s.length;o++){var u=(e=this.staggerProps.from,n=this.staggerProps.to,i=s[o],(r=this.staggerProps.easing)||(r="linear"),jt[r](i)*(n-e)+e);!0===this.staggerProps.integer&&(u=Math.round(u)),"measurement"===this.staggerProps.type&&(u+=this.staggerProps.unit),a.push(u)}return a}}]),t}(),Oi=Pi,Ti=new RegExp(/^#([\da-f]{3}){1,2}$|^#([\da-f]{4}){1,2}$|(rgb|hsl)a?\((\s*-?\d+%?\s*,){2}(\s*-?\d+%?\s*,?\s*\)?)(,\s*(0?\.\d+)?|1)?\)/,"gi"),Di=new RegExp(/^[-+]?\d+$/),Si=new Ne({messages:{color:"The '{field}' field must be an a valid color! Actual: {actual}",measurement:"The '{field}' must be a measurement with specs that are not met. You've either provided wrong value/units or an invalid @ expression. Actual: {actual}"}});Si.add("amount",(function(t){var e=this,n=t.schema,i=function(t,n){return e.makeError({type:"amount",actual:t,messages:{amount:n}})};return{source:"\n      let startUnits, endUnits, startNumberPart, endNumberPart;\n      const staggerValidation = ".concat(Oi,";\n      const staggerAnalyser = ").concat(Ai,';\n      const easingKeys = "').concat(Object.keys(jt).join(","),"\".split(',');\n      const validateExpression = ").concat(wi,";\n      const attributeRegexp = /^").concat(G.attibuteValue,"\\([_A-z0-9-]*\\)$/;\n      const patternRegexp = /^").concat(G.patternValue,"\\(([_A-z0-9.%-]+?(,[_A-z0-9.%-]+)*?)\\)$/;\n      const extractParenthesisAttrsAsArray = ").concat(et,";\n      const isNumeric = ").concat(J,"\n\n      if(typeof value === 'string' || value instanceof String){\n        if(value.trim().startsWith('").concat(G.staggerPreface,"')){\n          const staggerValid = staggerValidation(value);\n          if(staggerValid === false){\n            ").concat(i("value","The "+G.staggerPreface+" expression is invalid"),";\n            return;\n          } else {\n            const analysis = staggerAnalyser(value, false);\n            if(!isNumeric(analysis.start)){\n              ").concat(i("analysis.start","The provided start "+G.staggerPreface+" value is invalid"),";\n              return;\n            } else {\n              startNumberPart = analysis.start*1;\n              if(").concat(Q(n,"min"),"){\n                if(").concat(n.min," > analysis.start){\n                 ").concat(i("analysis.start","The provided start "+G.staggerPreface+" value is smaller than the minimum accepted value ("+n.min+")"),";\n                  return;\n                }\n              }\n              if(").concat(Q(n,"max"),"){\n                if(").concat(n.max," < analysis.start){\n                  ").concat(i("analysis.start","The provided start "+G.staggerPreface+" value is bigger than the maximum accepted value ("+n.max+")"),";\n                  return;\n                }\n              }\n               if(").concat(Q(n,"integer"),"){\n                if(!analysis.start.match(").concat(Di,")){\n                  ").concat(i("analysis.start","The provided start "+G.staggerPreface+" value is not an integer"),";\n                  return;\n                }\n              }\n            }\n\n            if(!isNumeric(analysis.end)){\n              ").concat(i("analysis.end","The provided end "+G.staggerPreface+" value is invalid"),";\n              return;\n            } else {\n              endNumberPart = analysis.end*1;\n              if(").concat(Q(n,"min"),"){\n                if(").concat(n.min," > analysis.end){\n                  ").concat(i("analysis.end","The provided end "+G.staggerPreface+" value is smaller than the minimum accepted value ("+n.min+")"),";\n                  return;\n                }\n              }\n              if(").concat(Q(n,"max"),"){\n                if(").concat(n.max," < analysis.end){\n                  ").concat(i("analysis.end","The provided end "+G.staggerPreface+" value is bigger than the maximum accepted value ("+n.max+")"),";\n                  return;\n                }\n              }\n               if(").concat(Q(n,"integer"),"){\n                if(!analysis.end.match(").concat(Di,")){\n                  ").concat(i("analysis.end","The provided end "+G.staggerPreface+" value is not an integer"),";\n                  return;\n                }\n              }\n            }\n\n            if(analysis.startFraction < 0 || analysis.startFraction > 1){\n              ").concat(i("analysis.startFraction","The "+G.staggerPreface+" fraction must be a number >=0 and <=1"),";\n              return;\n            }\n\n            if(easingKeys.indexOf(analysis.easing) < 0){\n              ").concat(i("analysis.startFraction","The provided "+G.staggerPreface+" easing is not recognised by the system"),";\n              return;\n            }\n\n            if(analysis.mode !== 'linear' && analysis.mode !== 'omni'){\n              ").concat(i("analysis.mode",G.staggerPreface+" mode can only be either linear or omni"),";\n              return;\n            }\n\n            if(analysis.reverse !== true && analysis.reverse !== false){\n              ").concat(i("analysis.reverse",G.staggerPreface+" reverse needs to be either true or false"),";\n              return;\n            }\n\n            return value;\n          }\n        } else if(value.trim().startsWith('").concat(G.patternValue,"')){\n          if(!patternRegexp.test(value.replace(/ /g, ''))){\n            ").concat(i("value","The "+G.patternValue+" expression is invalid"),";\n            return;\n          }\n          const patternValues = extractParenthesisAttrsAsArray(value);\n          for(let i=0; i<patternValues.length; i++){\n            const valToCheck = patternValues[i];\n            if(!isNumeric(valToCheck)){\n              ").concat(i("valToCheck","The provided value is not a number"),";\n              return;\n            } else {\n              if(").concat(Q(n,"min"),"){\n                if(").concat(n.min," > valToCheck){\n                  ").concat(i("valToCheck","The provided value is smaller than the minimum accepted value ("+n.min+")"),";\n                  return;\n                }\n              }\n              if(").concat(Q(n,"max"),"){\n                if(").concat(n.max," < valToCheck){\n                  ").concat(i("valToCheck","The provided start value is bigger than the maximum accepted value ("+n.max+")"),";\n                  return;\n                }\n              }\n               if(").concat(Q(n,"integer"),"){\n                if(!valToCheck.match(").concat(Di,")){\n                  ").concat(i("valToCheck","The provided value is not an integer"),";\n                  return;\n                }\n              }\n          }\n        }\n        return value;\n      }  else if(value.trim().startsWith('").concat(G.attibuteValue,"')){\n          if(!attributeRegexp.test(value)){\n            ").concat(i("value","The "+G.attibuteValue+" expression is invalid"),";\n            return;\n          }\n\n          return value;\n        } else if(value.trim().startsWith('").concat(G.mathExpPreface,"')){\n          const validity = validateExpression(value);\n          if(validity.result === false){\n            ").concat(i("value","The "+G.expressionPreface+" expression is invalid"),';\n            return;\n          }\n          if(validity.unit !== ""){\n            ').concat(i("value","The "+G.expressionPreface+" expression includes units"),";\n            return;\n          }\n\n          return value;\n        }\n      }\n\n\n      if(typeof value !== 'number'){\n        ").concat(i("value","The provided value is not a number"),";\n        return;\n      }\n      if(").concat(Q(n,"max"),"){\n        if(").concat(n.max," < value){\n          ").concat(i("value","The provided amount is bigger than the maximum accepted value"),";\n          return;\n        }\n      }\n      if(").concat(Q(n,"min"),"){\n        if(").concat(n.min," > value){\n          ").concat(i("value","The provided amount is lower than the minimum accepted value"),";\n          return;\n        }\n      }\n      if(").concat(Q(n,"integer"),"){\n        if(value !== parseInt(value, 10)){\n          ").concat(i("value","The provided amount is not an integer"),";\n          return;\n        }\n      }\n      return value;\n    ")}})),Si.add("measurement",(function(t){var e=this,n=t.schema,i=t.messages,r=function(t,n){return e.makeError({type:"measurement",actual:t,messages:{measurement:n}})},s=new RegExp("^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)("+n.units.join("|")+")$","gi"),a=new RegExp("^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)","gi");return{source:"\n      let startUnits, endUnits, startNumberPart, endNumberPart;\n      const staggerValidation = ".concat(Oi,";\n      const staggerAnalyser = ").concat(Ai,';\n      const easingKeys = "').concat(Object.keys(jt).join(","),"\".split(',');\n      const validateExpression = ").concat(wi,";\n      const validUnits = ['").concat(n.units.join("','"),"'];\n      const attributeRegexp = /^").concat(G.attibuteValue,"\\([_A-z0-9-]*\\)$/;\n      const patternRegexp = /^").concat(G.patternValue,"\\(([_A-z0-9.%-]+?(,[_A-z0-9.%-]+)*?)\\)$/;\n      const extractParenthesisAttrsAsArray = ").concat(et,";\n\n      if(typeof value !== 'string' && !(value instanceof String)){\n        ").concat(r("value",null==i?void 0:i.measurement),"\n        return ;\n      }\n\n      if(value.trim().startsWith('").concat(G.attibuteValue,"')){\n        if(!attributeRegexp.test(value)){\n          ").concat(r("value","The "+G.attibuteValue+" expression is invalid"),";\n          return;\n        }\n\n        return value;\n      } else if(value.trim().startsWith('").concat(G.staggerPreface,"')){\n        const staggerValid = staggerValidation(value);\n        if(staggerValid === false){\n          ").concat(r("value","The "+G.staggerPreface+" expression is invalid"),";\n          return;\n        } else {\n          const analysis = staggerAnalyser(value, false);\n          if(!analysis.start.match(").concat(s,")){\n            ").concat(r("analysis.start","The provided start "+G.staggerPreface+" value is invalid"),";\n            return;\n          } else {\n            var numberPart = analysis.start.match(").concat(a,")[0];\n            startNumberPart = numberPart;\n            startUnits = analysis.start.toString().substring(numberPart.length);\n            if(").concat(Q(n,"min"),"){\n              if(").concat(n.min," > numberPart){\n                ").concat(r("analysis.start","The provided start "+G.staggerPreface+" value is smaller than the minimum accepted value ("+n.min+")"),";\n                return;\n              }\n            }\n            if(").concat(Q(n,"max"),"){\n              if(").concat(n.max," < numberPart){\n                ").concat(r("analysis.start","The provided start "+G.staggerPreface+" value is bigger than the maximum accepted value ("+n.max+")"),";\n                return;\n              }\n            }\n             if(").concat(Q(n,"integer"),"){\n              if(!numberPart.match(").concat(Di,")){\n                ").concat(r("analysis.start","The provided start "+G.staggerPreface+" value is not an integer"),";\n                return;\n              }\n            }\n          }\n\n          if(!analysis.end.match(").concat(s,")){\n            ").concat(r("analysis.end","The provided end "+G.staggerPreface+" value is invalid"),";\n            return;\n          } else {\n            var numberPart = analysis.end.match(").concat(a,")[0];\n            endNumberPart = numberPart;\n            endUnits = analysis.end.toString().substring(numberPart.length);\n            if(").concat(Q(n,"min"),"){\n              if(").concat(n.min," > numberPart){\n                ").concat(r("analysis.end","The provided end "+G.staggerPreface+" value is smaller than the minimum accepted value ("+n.min+")"),";\n                return;\n              }\n            }\n            if(").concat(Q(n,"max"),"){\n              if(").concat(n.max," < numberPart){\n                ").concat(r("analysis.end","The provided end "+G.staggerPreface+" value is bigger than the maximum accepted value ("+n.max+")"),";\n                return;\n              }\n            }\n             if(").concat(Q(n,"integer"),"){\n              if(!numberPart.match(").concat(Di,")){\n                ").concat(r("analysis.end","The provided end "+G.staggerPreface+" value is not an integer"),";\n                return;\n              }\n            }\n          }\n\n          if(startUnits !== endUnits){\n            ").concat(r("analysis.startFraction","The "+G.staggerPreface+" start and end must always have the same units"),";\n            return;\n          }\n\n          if(analysis.startFraction < 0 || analysis.startFraction > 1){\n            ").concat(r("analysis.startFraction","The "+G.staggerPreface+" fraction must be a number >=0 and <=1"),";\n            return;\n          }\n\n          if(easingKeys.indexOf(analysis.easing) < 0){\n            ").concat(r("analysis.startFraction","The provided "+G.staggerPreface+" easing is not recognised by the system"),";\n            return;\n          }\n\n          if(analysis.mode !== 'linear' && analysis.mode !== 'omni'){\n            ").concat(r("analysis.mode",G.staggerPreface+" mode can only be either linear or omni"),";\n            return;\n          }\n\n          if(analysis.reverse !== true && analysis.reverse !== false){\n            ").concat(r("analysis.reverse",G.staggerPreface+" reverse needs to be either true or false"),";\n            return;\n          }\n\n          return value;\n        }\n      } else if(value.trim().startsWith('").concat(G.patternValue,"')){\n        if(!patternRegexp.test(value.replace(/ /g, ''))){\n          ").concat(r("value","The "+G.patternValue+" expression is invalid"),";\n          return;\n        }\n        const patternValues = extractParenthesisAttrsAsArray(value);\n        for(let i=0; i<patternValues.length; i++){\n          const valToCheck = patternValues[i];\n          if(!valToCheck.match(").concat(s,")){\n            ").concat(r("valToCheck","The provided value is invalid"),";\n            return;\n          } else {\n            var numberPart = valToCheck.match(").concat(a,")[0];\n            if(").concat(Q(n,"min"),"){\n              if(").concat(n.min," > numberPart){\n                ").concat(r("valToCheck","The provided value is smaller than the minimum accepted value ("+n.min+")"),";\n                return;\n              }\n            }\n            if(").concat(Q(n,"max"),"){\n              if(").concat(n.max," < numberPart){\n                ").concat(r("valToCheck","The provided value is bigger than the maximum accepted value ("+n.max+")"),";\n                return;\n              }\n            }\n             if(").concat(Q(n,"integer"),"){\n              if(!numberPart.match(").concat(Di,")){\n                ").concat(r("valToCheck","The provided value is not an integer"),";\n                return;\n              }\n            }\n          }\n        }\n        return value;\n      } else if(value.trim().startsWith('").concat(G.mathExpPreface,"')){\n          const validity = validateExpression(value);\n          if(validity.result === false){\n            ").concat(r("value","The "+G.expressionPreface+" expression is invalid"),";\n            return;\n          } else {\n            if(validUnits.indexOf(validity.unit) < 0){\n              ").concat(r("value","The "+G.expressionPreface+" expression has non-supported units"),";\n              return;\n            }\n\n            return value;\n          }\n        }\n\n\n      if(!value.match(").concat(s,")){\n        ").concat(r("value",null==i?void 0:i.measurement),"\n      } else {\n        var numberPart = value.match(").concat(a,")[0];\n        if(").concat(Q(n,"min"),"){\n          if(").concat(n.min," > numberPart){\n            ").concat(r("value",null==i?void 0:i.measurement),"\n          }\n        }\n        if(").concat(Q(n,"max"),"){\n          if(").concat(n.max," < numberPart){\n            ").concat(r("value",null==i?void 0:i.measurement),"\n          }\n        }\n         if(").concat(Q(n,"integer"),"){\n          if(!numberPart.match(").concat(Di,")){\n            ").concat(r("value",null==i?void 0:i.measurement),"\n          }\n        }\n      }\n      return value;\n    ")}})),Si.add("html",(function(t,e,n){t.schema;var i=t.messages;return{source:"\n      if(value === null){\n        ".concat(this.makeError({type:"html",actual:"value",messages:i}),"\n      } else {\n        return value;\n      }\n    ")}})),Si.add("css",(function(t,e,n){t.schema;var i=t.messages;return{source:"\n      if(value === null){\n        ".concat(this.makeError({type:"css",actual:"value",messages:i}),"\n      } else {\n        return value;\n      }\n    ")}}));var Mi=["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgrey","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgrey","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","rebeccapurple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"];Si.add("color",(function(t,e,n){t.schema;var i=t.messages;return{source:'\n      var colors = "'.concat(Mi.join(","),"\".split(',')\n      if(typeof value !== 'string' && !(value instanceof String)){\n        ").concat(this.makeError({type:"measurement",actual:"value",messages:i}),"\n        return ;\n      }\n      if(!value.match(").concat(Ti,") && !colors.includes(value.toLowerCase())){\n        ").concat(this.makeError({type:"color",actual:"value",messages:i}),"\n      }\n      return value;\n    ")}}));var Vi=["cm","mm","in","px","pt","pc","em","ex","ch","rem","vw","vh","vmin","vmax","%"],Ni=[{type:"string",optional:!0,default:"linear",enum:["linear","easeInQuad","easeOutQuad","easeInOutQuad","easeInCubic","easeOutCubic","easeInOutCubic","easeInQuart","easeOutQuart","easeInOutQuart","easeInQuint","easeOutQuint","easeInOutQuint","easeInSine","easeOutSine","easeInOutSine","easeInExpo","easeOutExpo","easeInOutExpo","easeInCirc","easeOutCirc","easeInOutCirc","easeInElastic","easeOutElastic","easeInOutElastic","easeInBack","easeOutBack","easeInOutBack","easeInBounce","easeOutBounce","easeInOutBounce"]},{type:"array",optional:!0,length:4,items:{type:"number"}}],$i={type:"string",empty:!1,trim:!0,optional:!0},ji={type:"string",empty:!1,trim:!0,optional:!0},Bi={type:"string",empty:!1,optional:!1},Li={type:"amount",optional:!1,integer:!0,min:0},Ri={type:"amount",optional:!0,integer:!0,min:0},Fi={type:"amount",integer:!0,min:1,optional:!0},zi={type:"amount",integer:!0,min:0,optional:!0},Gi={type:"amount",integer:!0,min:0,optional:!0},qi={type:"html",optional:!0},Ki={type:"css",optional:!0},Ji={type:"array",optional:!0,items:{type:"object",props:{type:"string",src:"string"}}},Wi={type:"array",items:{type:"object",strict:!0,props:{src:"string",id:"string",mcid:{type:"string",optional:!0},classes:{type:"array",optional:!0,items:"string"},base64:{type:"boolean",optional:!0},startValues:{optional:!0,type:"object",props:{gain:{optional:!0,type:"number"},pan:{optional:!0,type:"number"}}}}},optional:!0},Hi=Si.compile({id:$i,name:ji,selector:o(o({},Bi),{},{optional:!0}),easing:Ni,duration:Li,startFrom:{type:"amount",integer:!0,min:0,optional:!0},repeats:Fi,hiatus:zi,delay:Gi}),Ui={type:"object",optional:!0,props:{width:{type:"measurement",units:Vi,optional:!0},height:{type:"measurement",units:Vi,optional:!0}}},Qi={type:"string",enum:["on","off","only"],optional:!0},Xi=Si.compile({props:[{type:"object",strict:!0,props:{id:$i,name:ji,selector:o(o({},Bi),{},{optional:!0}),repeats:Fi,hiatus:zi,delay:Gi,easing:Ni,duration:Ri,html:qi,css:Ki,audioSources:Wi,audio:Qi,containerParams:Ui,fonts:Ji,initParams:{type:"object",optional:!0}}},{type:"object",strict:!0,props:{id:$i,name:ji,host:{type:"any",optional:!1},duration:Ri,html:qi,css:Ki,audioSources:Wi,audio:Qi,containerParams:Ui,fonts:Ji,initParams:{type:"object",optional:!0}}},{type:"object",strict:!0,props:{root:{type:"boolean",optional:!0},name:ji,id:$i,audioSources:Wi,audio:o(o({},Qi),{},{enum:["on"]})}}]}),Zi=Si.compile({selector:o(o({},Bi),{},{optional:!0,strict:!0}),name:ji}),Yi=Si.compile({selector:o(o({},Bi),{},{strict:!0,optional:!0}),name:ji,repeats:{type:"amount",integer:!0,min:1,optional:!0},hiatus:{type:"amount",integer:!0,min:0,optional:!0},delay:{type:"amount",integer:!0,min:0,optional:!0}});function tr(t){var e=new t.Class(t.attrs,t.props);if(!1===e.result)return e;if(Q(t,"incidents"))for(var n in t.incidents){var i=t.incidents[n],r=tr(i.leaf);if(!1===r.result)return r;var s=e.addIncident(r,i.position);if(!1===s.result)return s}return e}function er(t){t.descriptor.value=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.exportLiveDefinition();for(var i in t)Gt(i,t[i],!0,"attrs",n);for(var r in e)Gt(r,e[r],!0,"props",n);return tr(n)}}Si.compile({selector:Bi,duration:Li});var nr="mc.descriptive.decisionAuthority";function ir(t){t.descriptor.value=function(t){if(null!==this.constructor.attrsValidationRules){var e=this.constructor.attrsValidationMethod(t);if(e.length>0)return{result:!1,errors:e}}return!0===this.putMessageOnPipe("checkForClip",{},nr,{selfExecute:!0,direction:ht}).response?this.manageEditAttrProps(t,"attrs"):(this.attrs=t,{result:!0})}}function rr(t){t.descriptor.value=function(t){var e=ut.validateProps(t,this.constructor.propsValidationRules,this.constructor);return e.result?!0===this.putMessageOnPipe("checkForClip",{},nr,{selfExecute:!0,direction:ht}).response?this.manageEditAttrProps(t,"props"):(this.props=t,{result:!0}):e}}function sr(t){t.descriptor.value=function(){return null!==this.props.host&&void 0!==this.props.host?[this.props.host]:this.hasParent&&this.putMessageOnPipe("checkForClip",{},nr,{selfExecute:!0,direction:ht}).response?this.putMessageOnPipe("getElements",{selector:this.selector()},nr,{selfExecute:!1,direction:ht}).response:[]}}function ar(t){t.descriptor.value=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{check:!0};if("dynamic"===this.duration)return{result:!1,reason:"Incidents with dynamic duration can't be resized. Once the Incident enters a Clip it'll become resizable"};if(t===this.duration)return{result:!0,meta:{unprocessed:!0}};if(t<=0)return{result:!1,reason:"Size must always be > 0"};if(e.check&&this.hasParent){var n=this.putMessageOnPipe("checkResize",{id:this.id,newSize:t,fraction:t/this.duration},nr,{selfExecute:!1,direction:ht});if(!n.response.result)return n.response}return this.setNewDuration(t),{result:!0}}}function or(t){t.descriptor.value=function(){return null===this.inheritedSelector?Q(this.props,"selector")?this.props.selector:null:Q(this.props,"selector")?"&"===this.props.selector.charAt(0)?this.inheritedSelector+this.props.selector.substring(1):"".concat(this.inheritedSelector," ").concat(this.props.selector):this.inheritedSelector}}var ur=function(){function t(e){l(this,t),this.expressionProps=e}return h(t,[{key:"calculateValues",value:function(t){for(var e=[],n=0;n<t.length;n++){var i=t[n].getAttribute(this.expressionProps.attribute);J(i)&&(i=parseFloat(i)),e.push(i)}return e}}]),t}(),lr=function(){function t(e){l(this,t),this.patternProps=e}return h(t,[{key:"calculateValues",value:function(t){for(var e=this.patternProps.pattern.length,n=[],i=0;i<t.length;i++)n.push(this.patternProps.pattern[i%e]);return n}},{key:"resize",value:function(t){if("amount"!==this.patternProps.type)return"".concat(G.patternValue,"(").concat(this.patternProps.pattern.join(),")");for(var e=[],n=0;n<this.patternProps.pattern.length;n++)e.push(t*this.patternProps.pattern[n]);return"".concat(G.patternValue,"(").concat(e.join(),")")}}]),t}(),cr=function t(e){return l(this,t),"expression"===e.dynamicType?new Ei(e):"stagger"===e.dynamicType?new _i(e):"attribute"===e.dynamicType?new ur(e):"pattern"===e.dynamicType?new lr(e):(ut.error('dynamicType must be either "stgger" or "expression". '.concat(e.dynamicType," provided")),!1)},hr=new RegExp("^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)","gi"),dr=function(t){var e=[];return function t(n){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!n)return[];for(var r=0,s=Object.entries(n);r<s.length;r++){var a=I(s[r],2),o=a[0],u=a[1];if(!(u instanceof Element))if(H(u))t(u,"".concat(i).concat(""===i?"":".").concat(o));else if(W(u)){var l=u.trim();if(l.startsWith(G.staggerPreface)){var c=Ai(l,!1),h=c.start.match(hr)[0],d=c.end.match(hr)[0],p=c.start.toString().substring(h.length),f={dynamicType:"stagger",path:"".concat(i).concat(""===i?"":".").concat(o),from:1*h,to:1*d,mode:c.mode,unit:p,fraction:c.startFraction,easing:c.easing,reverse:c.reverse,type:""===p?"amount":"measurement"};e.push(f)}else if(l.startsWith(G.attibuteValue)){var m={dynamicType:"attribute",path:"".concat(i).concat(""===i?"":".").concat(o),unit:"",type:"measurement",attribute:/\(([^\)]+)\)/.exec(l)[1]};e.push(m)}else if(l.startsWith(G.mathExpPreface)){var v=wi(l),g={dynamicType:"expression",path:"".concat(i).concat(""===i?"":".").concat(o),unit:v.unit,type:""===v.unit?"amount":"measurement",expression:v.expression};e.push(g)}else if(l.startsWith(G.patternValue)){for(var y=et(l),k=!0,b=[],x=0;x<y.length;x++){if(!J(y[x])){k=!1;break}b.push(parseFloat(y[x]))}k&&(y=b);var C={dynamicType:"pattern",path:"".concat(i).concat(""===i?"":".").concat(o),unit:"",type:k?"amount":"measurement",pattern:y};e.push(C)}}}}(t),e};function pr(t){t.descriptor.value=function(){for(var t=dr(this.props),e=0;e<t.length;e++)this.propsStaggers.push({path:t[e].path,stagger:new cr(t[e])});for(var n=dr(this.attrs),i=0;i<n.length;i++)this.attributesStaggers.push({path:n[i].path,stagger:new cr(n[i])})}}var fr=D(null,(function(t,e){var n=function(e){p(i,e);var n=y(i);function i(){var e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;l(this,i),null===s?(e=n.call(this,r),t(v(e)),e.attrs={},e.props=r):(e=n.call(this,s),t(v(e)),e.attrs=r,e.props=s);var a=ut.validateProps(e.props,Zi,e.constructor);return a.result?(e._inheritedSelector=null,e.attributesStaggers=[],e.propsStaggers=[],e.setupDynamicValues(),e.passiveAddition=!0,e._buildTree(),e.passiveAddition=!1,g(e)):g(e,a)}return i}(e);return{F:n,d:[{kind:"field",static:!0,key:"Incident",value:function(){return xt}},{kind:"field",static:!0,key:"plugin_npm_name",value:function(){return"motor-cortex-js"}},{kind:"field",static:!0,key:"version",value:function(){return Kt}},{kind:"field",static:!0,key:"Channel",value:function(){return ct}},{kind:"field",static:!0,key:"ClassName",value:function(){return"Group"}},{kind:"field",static:!0,key:"isGroup",value:function(){return!0}},{kind:"field",static:!0,key:"attrsValidationRules",value:function(){return null}},{kind:"field",static:!0,key:"propsValidationRules",value:function(){return Zi}},{kind:"method",decorators:[ir],key:"editAttributes",value:function(){}},{kind:"method",decorators:[rr],key:"editProperties",value:function(){}},{kind:"method",decorators:[ar],key:"resize",value:function(){}},{kind:"method",decorators:[er],key:"clone",value:function(){}},{kind:"method",decorators:[or],key:"selector",value:function(){}},{kind:"method",decorators:[sr],key:"getElements",value:function(){}},{kind:"method",decorators:[pr],key:"setupDynamicValues",value:function(){}},{kind:"method",key:"_buildTree",value:function(){this.buildTree()}},{kind:"method",key:"_calculateDuration",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=0;for(var n in this.children){var i=this.children[n];if(!0===t&&!0===i.leaf.constructor.isGroup&&i.leaf._calculateDuration(!0),"dynamic"===i.leaf.duration){e="dynamic";break}i.position+i.leaf.duration>e&&(e=i.position+i.leaf.duration)}return e!==this.calculatedDuration&&(this.calculatedDuration=e,!0)}},{kind:"method",key:"_rebuildTree",value:function(){for(var t in this.children){var e=this.children[t];!0===e.leaf.passive&&this.removeIncident(e.id)}this.passiveAddition=!0,this.buildTree(),this.passiveAddition=!1}},{kind:"method",key:"buildTree",value:function(){}},{kind:"get",key:"duration",value:function(){return"dynamic"===this.calculatedDuration?this.calculatedDuration:b(f(n.prototype),"duration",this)}},{kind:"set",key:"duration",value:function(t){C(f(n.prototype),"duration",t,this,!0)}},{kind:"method",key:"manageEditAttrProps",value:function(t,e){var n=this.parentNode,i=n.getLeafPosition(this.id),r=JSON.parse(JSON.stringify(this[e]));this[e]=t,n.removeIncident(this.id),this._rebuildTree();var s=n.addIncident(this,i);return s.result||(this[e]=r,this._rebuildTree(),n.addIncident(this,i)),s}},{kind:"method",key:"detachFromParent",value:function(){b(f(n.prototype),"detachFromParent",this).call(this),this.inheritedSelector=null}},{kind:"get",key:"inheritedSelector",value:function(){return this._inheritedSelector}},{kind:"set",key:"inheritedSelector",value:function(t){for(var e in this._inheritedSelector=t,this.children){this.children[e].leaf.inheritedSelector=this.selector()}}},{kind:"get",key:"selectorToPassToChildren",value:function(){return this.selector()}},{kind:"method",key:"exportDefinition",value:function(){var t={ClassName:this.constructor.ClassName,version:this.constructor.version,plugin:this.constructor.plugin||this.constructor.plugin_npm_name,plugin_npm_name:this.constructor.plugin_npm_name,attrs:this.attrs,props:this.props,incidents:{},duration:this.duration};for(var e in this.children){var n=this.children[e];!0!==n.leaf.passive&&(t.incidents[e]={id:n.id,position:n.position,leaf:n.leaf.exportDefinition()})}return t}},{kind:"method",key:"exportLiveDefinition",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=JSON.parse(JSON.stringify(this.props));!1===t&&delete e.id;var n={Class:this.constructor,attrs:JSON.parse(JSON.stringify(this.attrs)),props:e,incidents:{}};for(var i in this.children){var r=this.children[i];!0!==r.leaf.passive&&(n.incidents[i]={position:r.position,leaf:r.leaf.exportLiveDefinition(t)})}return n}},{kind:"method",key:"addIncident",value:function(t,e){var i,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{check:!0};if(t.inheritedSelector=this.selectorToPassToChildren,!0===r.check){var s=b(f(n.prototype),"checkAddition",this).call(this,t,e);if(!s.result)return t.inheritedSelector=null,s;if(!0===(i=this.putMessageOnPipe("checkForClip",{},nr,{selfExecute:!0,direction:ht})).response){var a=t.putMessageOnPipe("checkForInvalidSelectors",{},null,{selfExecute:!0,direction:dt});if(a.length>0){for(var o=[],u=0;u<a.length;u++)o.push(a[u].response);return{result:!1,errors:o}}}var l=this.putMessageOnPipe("checkAddition",{incident:t,millisecond:e,parentGroupId:this.id},nr,{selfExecute:!0,direction:ht});if(!l.response.result)return t.inheritedSelector=null,l.response}!0===this.passiveAddition&&(t.passive=!0);var c=this.addChild(t,e);return c.result||(t.inheritedSelector=null),"dynamic"===t.duration&&i&&this._calculateDuration(!0),c}},{kind:"method",key:"moveIncident",value:function(t,e){var i=t;H(t)&&(i=t.id);var r=b(f(n.prototype),"checkEditPosition",this).call(this,i,e);if(!r.result)return r;var s=e-this.getLeafPosition(i);if(0===s)return{result:!0};var a=this.putMessageOnPipe("checkMove",{id:i,millisecond:e,positionDelta:s,parentGroupId:this.id},nr,{selfExecute:!0,direction:ht});return a.response.result?this.editPosition(i,e):a.response}},{kind:"method",key:"removeIncident",value:function(t){var e=t;H(t)&&(e=t.id);var i=b(f(n.prototype),"checkRemoveChild",this).call(this,e);if(!i.result)return i;var r=this.putMessageOnPipe("checkDeletion",{id:e,parentGroupId:this.id},nr,{selfExecute:!0,direction:ht});return r.response.result?this.removeChild(e):r.response}},{kind:"method",key:"handleCheckForClip",value:function(t,e){return!!this.hasParent&&this.bypass()}},{kind:"method",key:"handleCheckAddition",value:function(t,e){return this.hasParent?this.bypass():{result:!0}}},{kind:"method",key:"handleCheckMove",value:function(t,e){return this.hasParent?this.bypass():{result:!0}}},{kind:"method",key:"handleCheckDeletion",value:function(t,e){return this.hasParent?this.bypass():{result:!0}}},{kind:"method",key:"handleCheckResize",value:function(t,e){return this.hasParent?this.bypass():{result:!0}}},{kind:"method",key:"handleSetDurationDynamic",value:function(t,e){this.calculatedDuration="dynamic",this.putMessageOnPipe("setDurationDynamic",{},"Groups",{selfExecute:!1,direction:ht})}}]}}),yt),mr="-",vr={isCombo:function(t){return t.incidentClass.isCombo},getItem:function(t,e){return function(t){for(var e,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window,i=(t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:F)+"."+t).split("."),r=0;r<i.length;r++){if(!Q(n,i[r]))return;e=n[i[r]],n=n[i[r]]}return e}(e.join("."),"attrs",t)},getRepeatPosition:function(t,e,n,i){return i*(e||0)+(i+1)*(t||0)+i*n},refersToOwnSelector:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=e;!1===Array.isArray(e)&&(i=e.split("."));var r=this.getItem(t,i.slice(0,2+n));return(""===r.props.selector||void 0===r.props.selector||null===r.props.selector)&&("props"===i[2]||(!this.isCombo(r)||this.refersToOwnSelector(t,i,n+3)))},cascadeSelectors:function(t,e){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=[],r=0;r<e.length;r++){var s=e[r],a=void 0;if(a=Q(s.props,"selector")?"".concat(t," ").concat(s.props.selector):t,i.push({path:"".concat(n).concat(""===n?"":".").concat(r,".props.selector"),value:a}),this.isCombo(s)){var o=this.cascadeSelectors(a,s.attrs.incidents,"".concat(n).concat(""===n?"":".").concat(r,".attrs.incidents"));i=i.concat(o)}}return i},createDescriptiveIncidentLikeObject:function(t,e,n,i,r){return{constructor:{Incident:t.incidentClass.targetClass.Incident,plugin_npm_name:t.incidentClass.targetClass.plugin_npm_name,Channel:t.incidentClass.targetClass.Channel,isClip:!1},attrs:i||t.attrs,props:r||t.props,selector:function(){return t.props.selector},id:t.props.id,audioClip:null,audio:"no",dynamicDurationValue:null,putMessageOnPipe:function(){},attributesStaggers:e,propsStaggers:n}},parseElementsDynamics:function(t,e,n,i,r){for(var s="incidents.".concat(r,".attrs"),a="incidents.".concat(r,".props"),o=qt(e),u=qt(n),l=0;l<t.length;l++)if(0===t[l].path.indexOf(s)){var c=t[l].path.substring(s.length+1);o.setValue(c,t[l].values[i])}else if(0===t[l].path.indexOf(a)){var h=t[l].path.substring(a.length+1);u.setValue(h,t[l].values[i])}return{incidentAttrs:o.exportFlattened(),incidentProps:u.exportFlattened()}},getStaggersForChild:function(t,e,n){for(var i=[],r=[],s=0;s<t.length;s++)"position"===n&&0===t[s].path.indexOf("incidents.".concat(e,".").concat(n))?r.push({path:"position",stagger:t[s].stagger}):0===t[s].path.indexOf("incidents.".concat(e,".").concat(n))?r.push({path:t[s].path.substring("incidents.".concat(e,".").concat(n).length+1),stagger:t[s].stagger}):i.push(t[s]);return{identifiedDynamics:r,remainingDynamics:i}},createElementProxy:function(t,e,n,i,r){for(var s=qt(t),a=this.cascadeSelectors(e,t.attrs.incidents,"attrs.incidents"),o=0;o<i.length;o++)s.setValue("attrs.".concat(i[o].path),i[o].values[n]);for(var u=0;u<r.length;u++)s.setValue("props.".concat(r[u].path),r[u].values[n]);for(var l=0;l<a.length;l++)s.setValue(a[l].path,a[l].value);return s}},gr=function(t){p(n,t);var e=y(n);function n(){return l(this,n),e.apply(this,arguments)}return h(n,[{key:"parseAttrsDynamicValues",value:function(t,e){this.childrenStaggers=[];for(var n=0;n<t.attributesStaggers.length;n++)vr.refersToOwnSelector(t,t.attributesStaggers[n].path)?this.staggerAttrs.push({path:t.attributesStaggers[n].path,values:t.attributesStaggers[n].stagger.calculateValues(e,this.initParams)}):this.childrenStaggers.push(t.attributesStaggers[n])}},{key:"handleRecalcDuration",value:function(t,e){var i=b(f(n.prototype),"handleRecalcDuration",this).call(this,t,e);return this.descriptiveIncident.dynamicDurationValue=1*this.duration,i}},{key:"lastWish",value:function(){this.descriptiveIncident.dynamicDurationValue=null,this.descriptiveIncident.putMessageOnPipe("setDurationDynamic",{},"Groups",{selfExecute:!1,direction:ht}),b(f(n.prototype),"lastWish",this).call(this)}},{key:"_createElementIncident",value:function(t,e,n,i,r,s){for(var a=this,o=vr.createElementProxy(e,n.context.getElementSelectorByMCID(s),i,this.staggerAttrs,this.staggerProps),u=0;u<this.staggerAttrs.length;u++)o.setValue("attrs.".concat(this.staggerAttrs[u].path),this.staggerAttrs[u].values[i]);for(var l=$t({id:"".concat(this.id,"_element").concat(mr).concat(i),attrs:{},props:{},Incident:fr.Incident,plugin_npm_name:fr.plugin_npm_name,Channel:fr.Channel,DescriptiveIncident:new fr}),c=function(t){var e=$t({id:"".concat(a.id,"_element").concat(mr).concat(i,"_repeat").concat(mr).concat(t),attrs:{},props:{},Incident:fr.Incident,plugin_npm_name:fr.plugin_npm_name,Channel:fr.Channel,DescriptiveIncident:new fr}),s=a.childrenStaggers;o.attrs.incidents.forEach((function(u,l){var c=vr.parseElementsDynamics(a.staggerAttrs,u.attrs,u.props,i,l),h=c.incidentAttrs,d=c.incidentProps,p=vr.getStaggersForChild(s,l,"attrs"),f=vr.getStaggersForChild(p.remainingDynamics,l,"props"),m=vr.getStaggersForChild(p.remainingDynamics,l,"position");s=f.remainingDynamics,o.setValue("attrs.incidents.".concat(l,".props.id"),"".concat(a.id,"_element").concat(mr).concat(i,"_repeat").concat(mr).concat(t,"_incident").concat(mr).concat(l));var v=yr(vr.createDescriptiveIncidentLikeObject(u,p.identifiedDynamics,f.identifiedDynamics,h,d),n),g=u.position;1===m.identifiedDynamics.length&&(g=m.identifiedDynamics[0].stagger.calculateValues(new Array(r),a.initParams)[i]),e.addChild(v,g)})),l.addChild(e,vr.getRepeatPosition(o.props.delay,o.props.hiatus,e.duration,t))},h=0;h<(o.props.repeats||1);h++)c(h);this.addChild(l,0)}}]),n}(Ft);function yr(t,e){var n,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(i&&"off"===t.audio||!i&&"only"===t.audio)return null;if(Q(t.props,"selector")&&(!i&&"~"===t.props.selector.charAt(0)||i&&"~"!==t.props.selector.charAt(0)&&!t.constructor.isClip))return null;if(t.constructor.isClip){if(!Q(t.props,"selector")||i)return i?t.audioClip:t.realClip;(n=new zt(t,e)).plugin_channel_class=ct}else if(t.constructor.isCombo)n=new gr(t,e);else if(t.constructor.isGroup)for(var r in n=$t({id:t.id,attrs:t.attrs,props:t.props,Incident:t.constructor.Incident,plugin_npm_name:t.constructor.plugin_npm_name,Channel:t.constructor.Channel,DescriptiveIncident:t}),t.children){var s=yr(t.children[r].leaf,e);null!==s&&n.addChild(s,t.children[r].position)}else n=new Ft(t,e);return n}var kr="@kissmybutton/self-contained-incidents",br=function(t){p(n,t);var e=y(n);function n(t,i){var r;return l(this,n),(r=e.call(this,t,i)).attrs=t,r.props=i,r.isTheClip=!0,r.blockingWaitings={},r.instantiatedChannels={},r.isHostedClip=!0,r.instantiatedCopiesContexts={},r.instantiatedCopiesUnblockingMethods=[],r.onClipInitialise(),r.runTimeInfo=r.props.runTimeInfo,r.durationSubs=[],r.audioClip=!1,r}return h(n,[{key:"contextReady",get:function(){return this.context.contextLoaded}},{key:"onClipInitialise",value:function(){}},{key:"contextLoading",value:function(){this.context.contextLoaded=!1}},{key:"contextLoaded",value:function(){for(var t in this.context.contextLoaded=!0,this.putMessageOnPipe("contextLoaded",{},{},{selfExecute:!1,direction:dt}),this.instantiatedChannels)this.instantiatedChannels[t].recalcScratchValues();for(var e=0;e<this.instantiatedCopiesUnblockingMethods.length;e++)this.instantiatedCopiesUnblockingMethods[e]();this.unblock()}},{key:"getElements",value:function(t){if(null!==this.props.host&&void 0!==this.props.host)return this.context.getElements(t);var e=[];for(var n in this.instantiatedCopiesContexts)for(var i=this.instantiatedCopiesContexts[n].getElements(t),r=0;r<i.length;r++)e.push(i[r]);return e}},{key:"addContext",value:function(t){this.instantiatedCopiesContexts[t.clipId]=t.context,t.instantiatedCopiesContexts=this.instantiatedCopiesContexts,this.instantiatedCopiesUnblockingMethods.push(t.unblock);var e=this.putMessageOnPipe("addContext",t,{},{selfExecute:!1,direction:dt});if(1===Object.keys(this.instantiatedCopiesContexts).length){for(var n in this.instantiatedChannels)this.instantiatedChannels[n].recalcScratchValues(t.clipId);this.context.nonFragmentedContext=t.context}return e}},{key:"exportConstructionArguments",value:function(){return{attrs:this.attrs,props:this.props}}},{key:"_resize",value:function(t){for(var e in this.instantiatedChannels)this.instantiatedChannels[e]._resize(t);this.setNewDuration(this.duration*t);for(var n=0;n<this.durationSubs.length;n++)this.durationSubs[n](this.duration)}},{key:"addIncident",value:function(t){for(var e=this,n=this.putMessageOnPipe("addIncident",{incident:t.incident,millisecond:t.millisecond,parentGroupId:t.parentGroupId,incidentFromDescription:yr,contextData:{clipId:this.id,context:this.context,instantiatedCopiesContexts:this.instantiatedCopiesContexts},audio:this.audioClip},t.parentGroupId,{selfExecute:!0,direction:dt}),i={},r=0;r<n.length;r++){var s=n[r].response.getIncidentsByChannel(n[r].positionDelta+t.millisecond);for(var a in s){var o;Q(i,a)||(i[a]=[]),(o=i[a]).push.apply(o,w(s[a]))}}var u=this.checkAddition(i);if(u.result){return{result:!0,execute:function(){u.execute();for(var i=0;i<n.length;i++)for(var r in n[i].responder.addChild(n[i].response,t.millisecond),n[i].responder.putMessageOnPipe("recalcDuration",{},"Groups",{selfExecute:!0,direction:ht}),e.instantiatedCopiesContexts)n[i].responder.putMessageOnPipe("addContext",{clipId:r,context:e.instantiatedCopiesContexts[r]},"ContextAwareIncidents",{selfExecute:!1,direction:dt});e._calculateDuration()}}}return u}},{key:"checkAddition",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all-or-nothing",n=!0,i=[],r=[];for(var s in t){Q(this.instantiatedChannels,s)||(this.instantiatedChannels[s]=new t[s][0].incident.plugin_channel_class({runTimeInfo:this.runTimeInfo,context:this.context,subscribe:this.props.subscribe}));var a=this.instantiatedChannels[s].addIncidents(t[s],e);n=n&&a.result,a.result?r.push(a.execute):i=i.concat(a.errors)}var o=function(){for(var t=0;t<r.length;t++)r[t]()};return{result:n,errors:i,execute:o}}},{key:"moveIncident",value:function(t){for(var e=this.putMessageOnPipe("moveIncident",{incidentId:t.id,millisecond:t.millisecond,parentGroupId:t.parentGroupId,contextData:{clipId:this.id,context:this.context},audio:this.audioClip},t.parentGroupId,{selfExecute:!0,direction:dt}),n={},i=0;i<e.length;i++){var r=e[i].response.getIncidentsByChannel(e[i].positionDelta+t.millisecond);for(var s in r){var a;Q(n,s)||(n[s]=[]),(a=n[s]).push.apply(a,w(r[s]))}}var o=this.checkMove(n,t.positionDelta);if(o.result){return{result:!0,execute:function(){o.execute();for(var n=0;n<e.length;n++)e[n].responder.editPosition(e[n].response.id,t.millisecond),e[n].responder.putMessageOnPipe("recalcDuration",{},"Groups",{selfExecute:!0,direction:ht})}}}return o}},{key:"checkMove",value:function(t,e){var n=!0,i=[],r=[];for(var s in t){var a=this.instantiatedChannels[s].editIncidents(t[s],e);n=n&&a.result,a.result?r.push(a.execute):i=i.concat(a.errors)}return{result:n,errors:i,execute:function(){for(var t=0;t<r.length;t++)r[t]()}}}},{key:"removeIncident",value:function(t){for(var e=this.putMessageOnPipe("removeIncident",{incidentId:t.id,parentGroupId:t.parentGroupId,contextData:{clipId:this.id,context:this.context},audio:this.audioClip},t.parentGroupId,{selfExecute:!0,direction:dt}),n={},i=0;i<e.length;i++){var r=e[i].response.getIncidentsByChannel();for(var s in r){var a;Q(n,s)||(n[s]=[]),(a=n[s]).push.apply(a,w(r[s]))}}var o=this.checkDelete(n);if(o.result){return{result:!0,execute:function(){o.execute();for(var t=0;t<e.length;t++)e[t].responder.removeChild(e[t].response.id),e[t].responder.putMessageOnPipe("recalcDuration",{},"Groups",{selfExecute:!0,direction:ht})}}}return o}},{key:"checkDelete",value:function(t){var e=!0,n=[],i=[];for(var r in t){var s=this.instantiatedChannels[r].removeIncidents(t[r]);e=e&&s.result,s.result?i.push(s.execute):n=n.concat(s.errors)}return{result:e,errors:n,execute:function(){for(var t=0;t<i.length;t++)i[t]()}}}},{key:"resizeIncident",value:function(t){for(var e=this.putMessageOnPipe("resize",{incidentId:t.id,newSize:t.newSize,fraction:t.fraction,contextData:{clipId:this.id,context:this.context},audio:this.audioClip},t.id,{selfExecute:!1,direction:dt}),n={},i=0;i<e.length;i++){var r=e[i].response.getIncidentsByChannel(e[i].positionDelta);for(var s in r){var a;Q(n,s)||(n[s]=[]),(a=n[s]).push.apply(a,w(r[s]))}}var o=0;e.length>0&&(o=e[0].positionDelta);var u=this.checkResize(t.fraction,n,o);if(u.result){return{result:!0,execute:function(){u.execute();for(var n=0;n<e.length;n++)e[n].responder.setNewDuration(t.newSize)}}}return u}},{key:"checkResize",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=!0,r=[],s=[];for(var a in e){var o=ut.systoleDiastoleProjections(e[a],t,n),u=this.instantiatedChannels[a].checkResizedIncidents(o);i=i&&u.result,u.result?s.push(u.execute):r=r.concat(u.errors)}var l=function(){for(var t=0;t<s.length;t++)s[t]()};return{result:i,errors:r,execute:l}}},{key:"context",get:function(){var t,e;return null!==(e=(t=this.ownContext).contextLoaded)&&void 0!==e||(t.contextLoaded=!0),this.ownContext}},{key:"getIncidentsByChannel",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e={};return e[kr]=[{millisecond:t,incident:this,id:this.id}],e}},{key:"setVolume",value:function(t){this.volume=parseFloat(t)}},{key:"_onGetContextOnce",value:function(t){}},{key:"handleRecalcDuration",value:function(t,e){if(this._calculateDuration())for(var n=0;n<this.durationSubs.length;n++)this.durationSubs[n](this.duration);return!0}},{key:"onProgress",value:function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(!1!==this.contextReady){for(var r in n||(n=this.id),this.instantiatedChannels){var s=this.instantiatedChannels[r];s.moveTo(this.runTimeInfo.currentMillisecond,e,n,i)}this.onAfterProgress(t,e)}else this.setBlock()}},{key:"onAfterProgress",value:function(t,e){}},{key:"flash",value:function(){for(var t in this.instantiatedChannels){this.instantiatedChannels[t].moveTo(0,this.runTimeInfo.currentMillisecond,this.id,!0)}}},{key:"subscribeToDurationChange",value:function(t){this.durationSubs.push(t)}},{key:"handleSetBlockingWaiting",value:function(t,e){}},{key:"handleRemoveBlockingWaiting",value:function(t,e){}}]),n}(xt),xr=function(){function t(){l(this,t),this.output=q.createGain(),this.gainNode=q.createGain(),q.createStereoPanner&&(this.pannerNode=q.createStereoPanner()),q.createStereoPanner?(this.pannerNode.connect(this.gainNode),this.gainNode.connect(this.output),this.input=this.pannerNode):(this.gainNode.connect(this.output),this.input=this.gainNode)}return h(t,[{key:"connect",value:function(t){this.output.connect(t)}},{key:"disconnect",value:function(){this.output.disconnect()}}]),t}();function Cr(t){for(var e=window.atob(t),n=e.length,i=new Uint8Array(n),r=0;r<n;r++)i[r]=e.charCodeAt(r);return i.buffer}var Ir=/\[data(-mcid="+\w+")+\]/g,wr=function(){function t(){l(this,t),this.subscribers=[]}return h(t,[{key:"sub",value:function(t,e){this.subscribers.push(e)}},{key:"pub",value:function(t){for(var e=0;e<this.subscribers.length;e++)this.subscribers[e](t)}}]),t}(),Er=function(){function t(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;l(this,t),this.totalSources=n.length,this.audioSources={},this.elementsByMCID={};for(var r=function(t){var r=n[t],s={mcid:r.mcid||st(),id:r.id,src:r.src,classes:r.classes||[],base64:r.base64||!1,pubSub:new wr,soundLoaded:!1,startValues:r.startValues||{}};if(e.audioSources[s.id]=s,e.elementsByMCID[s.mcid]=s,r.base64)q.decodeAudioData(Cr(r.src),(function(t){e._setBuffer(s,t,i)}));else{var a=new XMLHttpRequest;a.open("GET",s.src,!0),a.responseType="arraybuffer",e.soundLoaded=!1,a.onload=function(){q.decodeAudioData(a.response,(function(t){e._setBuffer(s,t,i)}),e.onError)},a.send()}},s=0;s<n.length;s++)r(s);this.context={document:document,window:window,rootElement:document.body,unmount:function(){},masterNode:i,audioContext:q,getElements:this.getElements.bind(this),getMCID:this.getMCID.bind(this),setMCID:this.setMCID.bind(this),getElementSelectorByMCID:this.getElementSelectorByMCID.bind(this),getElementByMCID:this.getElementByMCID.bind(this)}}return h(t,[{key:"_setBuffer",value:function(t,e,n){t.soundLoaded=!0,t.buffer=e,t.effectsAudioNode=new xr,t.effectsAudioNode.connect(n.input),t.pubSub.pub()}},{key:"getElementByMCID",value:function(t){return Q(this.elementsByMCID,t)?this.elementsByMCID[t]:null}},{key:"getElements",value:function(t){if("~"!==t.charAt(0)){if(Ir.exec(t)){var e=t.split('"')[1];return this.elementsByMCID[e]}return[]}if("#"===(t=t.substr(1)).charAt(0))return Q(this.audioSources,t.substr(1))?[this.audioSources[t.substr(1)]]:[];if("."===t.charAt(0)){var n=t.substr(1),i=[];for(var r in this.audioSources)r.classes.indexOf(n)>=0&&i.push(r);return i}}},{key:"getMCID",value:function(t){return t.mcid}},{key:"setMCID",value:function(t,e){t.mcid=e}},{key:"getElementSelectorByMCID",value:function(t){return'[data-mcid="'.concat(t,'"]')}}]),t}(),Pr=function(t){p(n,t);var e=y(n);function n(t,i){var r;l(this,n),(r=e.call(this,t,i)).audioNode=new xr,r.audioNode.connect(q.destination);var s=new Er(r.props.audioSources,r.audioNode);return r.ownContext=o(o({},s.context),{},{isHostedClip:!0}),r.audioClip=!0,r}return h(n,[{key:"onProgress",value:function(t,e,i){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];b(f(n.prototype),"onProgress",this).call(this,t,e,this.id,r)}},{key:"_onGetContextOnce",value:function(t){this.audioNode.disconnect(),this.parentClipContext=t,this.audioNode.connect(t.masterNode.input)}},{key:"lastWish",value:function(){this.audioNode.output.disconnect(),this.audioNode.output.connect(q.destination)}},{key:"setVolume",value:function(t){this.audioNode.output.gain.value=t}}]),n}(br),Ar=function(t){p(n,t);var e=y(n);function n(){return l(this,n),e.apply(this,arguments)}return h(n,[{key:"onProgress",value:function(t){var e=this;if(!this.element.soundLoaded)return this.setBlock("loading sound"),this.element.pubSub.sub(this.id,(function(){e.unblock()})),!1;if("gain"===this.attributeKey){var n=(this.targetValue-this.initialValues)*t+this.initialValues;this.element.effectsAudioNode.gainNode.gain.value=n}else if("pan"===this.attributeKey){var i=(this.targetValue-this.initialValues)*t+this.initialValues;this.element.effectsAudioNode.pannerNode.pan.value=i}}},{key:"getScratchValue",value:function(){return"pan"===this.attributeKey?Q(this.element.startValues,"pan")?this.element.startValues.pan:0:"gain"===this.attributeKey?Q(this.element.startValues,"gain")?this.element.startValues.gain:1:void 0}}]),n}(Vt),_r="|||",Or=function(t){p(n,t);var e=y(n);function n(t){var i;return l(this,n),(i=e.call(this,t)).playingIncidentsIds=[],i.transitioned=!1,t.subscribe(st(),i._stateChange.bind(v(i)),0,1,!0),i}return h(n,[{key:"_stateChange",value:function(t,e){"paused"!==e&&"idle"!==e&&"blocked"!==e||(this._stopPlayingIncidents(),this.transitioned=!0)}},{key:"_stopPlayingIncidents",value:function(){for(var t=0;t<this.playingIncidentsIds.length;t++){var e=this.playingIncidentsIds[t].split(_r);this._incidentById(e[0]).stop(e[1])}this.playingIncidentsIds=[]}},{key:"moveTo",value:function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if("transitional"===this.runTimeInfo.state||i){this.transitioned=!0,this._stopPlayingIncidents();for(var r=0;r<this.incidents.length;r++){var s=this.incidents[r],a=s.id,o=s.millisecond,u=this._incidentById(a),l=void 0,c=void 0;e<o?(l=0,c=0):e>o+u.duration?(l=1,c=u.duration):l=(c=e-o)/u.duration,u.onProgress(l,c,n,!0)}}else{this.transitioned&&(t=0,this.transitioned=!1);for(var h=this.incidents,d=0;d<h.length;d++){var p=h[d],f=p.millisecond,m=this._incidentById(p.id),v=m.duration,g=f+v,y="".concat(p.id).concat(_r).concat(n);if(f>=t&&f<e&&g>e){var k=(e-f)/v>=1,b=k?1:(e-f)/v,x=k?v:e-f,C=m.play(b,x,n);C&&this.playingIncidentsIds.push(y)}else if(g>t&&g<=e){m.stop(n);var I=this.playingIncidentsIds.indexOf(y);I>-1&&this.playingIncidentsIds.splice(I,1)}}this.runTimeInfo.currentMillisecond=e}}}]),n}(Ct),Tr=D(null,(function(t){return{F:function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0;l(this,e),t(this),this.attrs=n,this.props=i,this.dna=r,this.context=r.context,this.mcid=r.mcid,this.id=i.id||st(),this.modelId=i.modelId,this.gotContext=!1,this.plugin_channel_class=Or,this.mc_plugin_npm_name="motor-cortex-js-media-playback",Q(i,"plugin_channel_class")&&(this.plugin_channel_class=i.plugin_channel_class),Q(i,"mc_plugin_npm_name")&&(this.mc_plugin_npm_name=i.mc_plugin_npm_name),this.hasIncidents=!1,this.autoGenerated=!1,this.onInitialise(n,i)},d:[{kind:"get",key:"selector",value:function(){return this.props.selector}},{kind:"get",key:"element",value:function(){return this.context.getElementByMCID(this.mcid)}},{kind:"method",decorators:[Mt],key:"getIncidentsByChannel",value:function(){}},{kind:"method",key:"_onGetContextOnce",value:function(){try{if(!0===this.context.fragment)return;this.gotContext||(this.onGetContext(),this.gotContext=!0)}catch(t){ut.error(t),ut.error(this.mcid)}}},{kind:"method",key:"onGetContext",value:function(){ut.info('Overwritte the "onGetContext" method with the code you want to get executed',"info")}},{kind:"method",key:"lastWish",value:function(){}},{kind:"method",key:"onInitialise",value:function(){ut.info('Overwritte the "onInialise" method with the code you want to get executed',"info")}},{kind:"method",key:"onProgress",value:function(t,e){}},{kind:"method",key:"play",value:function(t){return!0}},{kind:"method",key:"stop",value:function(){}},{kind:"method",decorators:[kt],key:"setBlock",value:function(){}},{kind:"method",decorators:[bt],key:"unblock",value:function(){}}]}})),Dr={npm_name:"@kissmybutton/motorcortex-soundsystem",name:"Internal MotorCortex Soundsystem",incidents:[{exportable:function(t){p(n,t);var e=y(n);function n(){return l(this,n),e.apply(this,arguments)}return h(n,[{key:"play",value:function(t){var e=this;if(!this.element.soundLoaded)return this.setBlock("loading sound"),this.element.pubSub.sub(this.id,(function(){e.unblock()})),!1;var n=0;return Q(this.props,"startFrom")&&(n=this.props.startFrom),this.audioNode=q.createBufferSource(),this.audioNode.buffer=this.element.buffer,this.audioNode.connect(this.element.effectsAudioNode.input),this.audioNode.start(0,(t+n)/1e3),!0}},{key:"stop",value:function(){this.audioNode&&this.audioNode.stop()}}]),n}(Tr),name:"AudioPlayback"},{exportable:Ar,name:"AudioEffect"}],Clip:{exportable:Pr},audio:"only"},Sr=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;l(this,t),this.realArray=[],null!=e&&(this.realArray=e)}return h(t,[{key:"_hasOwnProperty",value:function(t){return Q(this.realArray,t)}},{key:"_get",value:function(t){return this.realArray[t]}},{key:"_set",value:function(t,e){this.realArray[t]=e}},{key:"_keys",value:function(){return Object.keys(this.realArray)}},{key:"_delete",value:function(t){return delete this.realArray[t]}},{key:"_export",value:function(){return this.realArray}}]),t}(),Mr=function(){function t(e){l(this,t),this.originalArray=e,this.extraArray={},this.addedKeys=[],this.removedKeys=[]}return h(t,[{key:"_hasOwnProperty",value:function(t){return Q(this.originalArray,t)||Q(this.extraArray,t)}},{key:"_get",value:function(t){return Q(this.extraArray,t)?this.extraArray[t]:Q(this.originalArray,t)?this.originalArray[t]:void 0}},{key:"_set",value:function(t,e){this.extraArray[t]=e,Q(this.originalArray,t)||this.addedKeys.push(t);var n=this.removedKeys.indexOf(t);n>-1&&this.removedKeys.splice(n,1)}},{key:"_keys",value:function(){for(var t=Object.keys(this.originalArray).concat(this.addedKeys),e=0;e<this.removedKeys.length;e++){var n=this.removedKeys.indexOf(this.removedKeys[e]);t.splice(n,1)}return t}},{key:"_delete",value:function(t){var e=this.addedKeys.indexOf(t);return e>-1?(this.addedKeys.splice(e),delete this.extraArray[t]):this.removedKeys.push(t)}},{key:"_export",value:function(){for(var t in this.extraArray)this.originalArray[t]=this.extraArray[t];for(var e=0;e<this.removedKeys.length;e++)delete this.originalArray[this.removedKeys[e]];return this.originalArray}}]),t}();function Vr(t,e,n,i){var r=!1;for(var s in e)Q(n,s)||(r=!0,i[s]=e[s]);return t.animatedAttributeValue=i,r}function Nr(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]&&arguments[4],s=t[i],a=e._get(s.id);a.setInitialValue(n,r);var o=Vr(a,a.initialValue,a.originalAnimatedAttributeValue,JSON.parse(JSON.stringify(a.animatedAttributeValue)));o&&(a.lastWish(),a.onGetContext()),o&&i<t.length-1&&Nr(t,e,a.animatedAttributeValue,i+1,!1)}var $r=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};l(this,t),this.lanes={},e.lanes&&(this.lanes=e.lanes),this.comboAttributes={},null!=e.comboAttributes&&(this.comboAttributes=e.comboAttributes),this.belongingLaneKeysByAnimationId={},e.belongingLaneKeysByAnimationId&&(this.belongingLaneKeysByAnimationId=e.belongingLaneKeysByAnimationId),this.incidentsById=new Sr({}),e.incidentsById&&(this.incidentsById=e.incidentsById)}return h(t,[{key:"_resize",value:function(t){for(var e=Object.keys(this.lanes),n=0;n<e.length;n++)for(var i=e[n],r=this.lanes[i],s=0;s<r.length;s++)r[s].millisecond=r[s].millisecond*t}},{key:"createTestLanesSanbox",value:function(){var e={lanes:qt(this.lanes),belongingLaneKeysByAnimationId:qt(this.belongingLaneKeysByAnimationId),incidentsById:new Mr(this.incidentsById._export())};return this.comboAttributes&&(e.comboAttributes=this.comboAttributes),new t(e)}},{key:"getLane",value:function(t,e){return this.lanes[at(t,e)]}},{key:"applySandboxChanges",value:function(t){this.lanes=t.lanes.exportFlattened(),this.belongingLaneKeysByAnimationId=t.belongingLaneKeysByAnimationId.exportFlattened(),this.incidentsById=new Sr(t.incidentsById._export())}},{key:"laneExists",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=at(t,e);return!!this.lanes.hasOwnProperty(i)||(n&&this.lanes.setValue(i,[]),!1)}},{key:"getOverlappingAnims",value:function(t,e,n){var i=this,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return Array.from(this.lanes[at(e,n)]||[]).filter((function(e){var n=t.incident.duration;null!=s&&(n=s);var a=i.incidentsById._get(e.id).duration;return e.id!==t.incident.id&&!r.includes(e.id)&&(e.millisecond>=t.millisecond&&e.millisecond<n+t.millisecond||e.millisecond+a>t.millisecond&&e.millisecond+a<=n+t.millisecond||e.millisecond<t.millisecond&&e.millisecond+a>n+t.millisecond)}))}},{key:"addElementToLane",value:function(t,e,n,i){var r=this,s=[],a=at(t,e);this.incidentsById._set(i.id,i);var o={millisecond:n,id:i.id};this.laneExists(t,e,!0),this.lanes.pushValue(a,o),this.lanes[a].sortBy("millisecond");var u=this.lanes[a],l=this.lanes[a].findIndex((function(t){return t.id===i.id}));return Q(i.id)||this.belongingLaneKeysByAnimationId.setValue(i.id,[]),this.belongingLaneKeysByAnimationId.pushValue(i.id,a),0===l?this.lanes[a].length>1?s.push((function(){i.setInitialValue(r.incidentsById._get(u[1].id).pureInitialValues)})):s.push((function(){i.setInitialValue()})):s.push((function(){i.setInitialValue(r.incidentsById._get(u[l-1].id).animatedAttributeValue)})),Q(this.comboAttributes,e)&&s.push((function(){return Nr(u,r.incidentsById,i.initialValue,l)})),l+1<u.length&&s.push((function(){r.incidentsById._get(u[l+1].id).setInitialValue(i.animatedAttributeValue),r.incidentsById._get(u[l+1].id).gotContext&&(r.incidentsById._get(u[l+1].id).lastWish(),r.incidentsById._get(u[l+1].id).onGetContext())})),s}},{key:"updateLane",value:function(t,e){for(var n=this,i={},r=0;r<t.length;r++)for(var s=this.belongingLaneKeysByAnimationId[t[r]],a=0;a<s.length;a++){var o=s[a];Q(i,o)||(i[o]={animations:[],lane:this.lanes[o],laneData:it(s[a])}),i[o].animations.push(t[r])}for(var u in i){var l=i[u],c=l.laneData,h=l.lane,d=l.animations,p=w(h);p.sort((function(t,e){return t.millisecond-e.millisecond}));for(var f=Q(this.comboAttributes,c.attribute),m=0;m<h.length;m++)d.includes(h[m].id)&&(h[m].millisecond+=e);h.sort((function(t,e){return t.millisecond-e.millisecond})),this.lanes[u]=h;for(var v=function(t){var e=d[t],i=p.findIndex((function(t){return t.id===e})),r=h.findIndex((function(t){return t.id===e}));if(i===r&&r<=1)return"continue";var s=n.incidentsById._get(h[r].id);if(i+1<h.length)if(0===i)if(f)Nr(h,n.incidentsById,s.pureInitialValues,0,!0);else{var a=n.incidentsById._get(p[1].id);a.setInitialValue(s.pureInitialValues),a.onGetContext()}else if(f){var o=r>i?i:r;Nr(h,n.incidentsById,n.incidentsById._get(p[i-1].id).animatedAttributeValue,o,!0)}else n.incidentsById._get(p[i+1].id).setInitialValue(n.incidentsById._get(p[i-1].id).animatedAttributeValue),n.incidentsById._get(p[i+1].id).onGetContext();if(0===r?f?Nr(h,n.incidentsById,n.incidentsById._get(p[0].id).pureInitialValues,r,!0):(s.setInitialValue(n.incidentsById._get(p[0].id).pureInitialValues),s.onGetContext()):f?Nr(h,n.incidentsById,n.incidentsById._get(h[r-1].id).animatedAttributeValue,r,!0):(s.setInitialValue(n.incidentsById._get(h[r-1].id).animatedAttributeValue),s.onGetContext()),r+1>=h.length)return"continue";if(f)return Nr(h,n.incidentsById,s.animatedAttributeValue,r+1,!0),"continue";var u=n.incidentsById._get(h[r+1].id);u.setInitialValue(s.animatedAttributeValue),u.onGetContext()},g=0;g<d.length;g++)v(g)}}},{key:"deleteAnimations",value:function(t){for(var e={},n=0;n<t.length;n++){for(var i=t[n],r=this.belongingLaneKeysByAnimationId[i],s=0;s<r.length;s++){for(var a=this.lanes[r[s]],u=-1,l=0;l<a.length;l++)if(a[l].id===i){u=l;break}for(var c=o({},a[u]),h=this.incidentsById._get(c.id),d=it(r[s]),p=[],f=0;f<a.length;f++)a[f].id!==i&&p.push(a[f]);if(this.lanes[r[s]]=p,0!==(a=this.lanes[r[s]]).length){e[r[s]]=it(r[s]);var m=this.incidentsById._get(c.id).pureInitialValues;if(!(u>=a.length||!1===m))if(Q(this.comboAttributes,d.attribute))Nr(a,this.incidentsById,m,u,!0);else{var v=this.incidentsById._get(a[u].id);v.setInitialValue(m),v.onGetContext()}}else h.onProgress(0,0),delete this.lanes[r[s]],Q(e,r[s])&&delete e[r[s]]}delete this.belongingLaneKeysByAnimationId[t[n]]}return e}},{key:"recalcScratchValues",value:function(t){for(var e=Object.keys(this.lanes),n=0;n<e.length;n++){var i=e[n],r=this.lanes[i];if(r.length>0){var s=this.incidentsById._get(r[0].id),a=s.getScratchValue(t),o=it(i);Q(this.comboAttributes,o.attribute)?Nr(r,this.incidentsById,a,0,!0):s.setInitialValue(a),s.lastWish(),s.onGetContext()}}}}]),t}(),jr=function(t){p(n,t);var e=y(n);function n(t){var i;return l(this,n),(i=e.call(this,t)).comboAttributes={},i.fixedAttributeName="_",null!=t.comboAttributes&&(i.comboAttributes=t.comboAttributes),i.LanesHandler=new $r({comboAttributes:i.comboAttributes}),i}return h(n,[{key:"setComboAttributes",value:function(t){this.comboAttributes=t,this.LanesHandler=new $r({comboAttributes:this.comboAttributes})}},{key:"lanes",get:function(){return this.LanesHandler.lanes}},{key:"incidentsById",get:function(){return this.LanesHandler.incidentsById}},{key:"_resize",value:function(t){this.LanesHandler._resize(t)}},{key:"checkAddition",value:function(t){for(var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all-or-nothing",i=this.LanesHandler.createTestLanesSanbox(),r=[],s=[],a=[],o=function(n){var o=!1,u=t[n],l=u.incident,c=l.mcid,h=l.attribute||e.fixedAttributeName;i.laneExists(c,h),r.push({mcid:c,attribute:h});var d=i.getOverlappingAnims(u,c,h);if(d.length>0&&(o=!0,a.push({type:"unauthorised, overlapping incidents on the same element",meta:{element_mcid:c,attribute:h,incident:u,overlappingAnims:d}})),!o){var p=i.addElementToLane(c,h,u.millisecond,l);s.push((function(){for(var t=0;t<p.length;t++)p[t]();l._onGetContextOnce()}))}},u=0;u<t.length;u++)o(u);if(a.length>0&&"all-or-nothing"===n)return{result:!1,errors:a};var l=this.LanesHandler,c=function(){for(var t=0;t<r.length;t++){var e=at(r[t].mcid,r[t].attribute),n=i.lanes[e].exportFlattened();n.sort((function(t,e){return t.millisecond-e.millisecond})),i.lanes.setValue(e,n)}for(var a=0;a<s.length;a++)s[a]();l.applySandboxChanges(i)};return{result:!0,errors:a,execute:c}}},{key:"checkEdit",value:function(t,e){for(var n=[],i=0;i<t.length;i++)n.push(t[i].id);for(var r=this.LanesHandler.createTestLanesSanbox(),s=[],a=0;a<t.length;a++)for(var u=t[a].incident.id,l=t[a].incident.mcid,c=t[a].incident.attribute||this.fixedAttributeName,h=r.getLane(l,c),d=0;d<h.length;d++)if(h[d].id===u){var p=o({},h[d]);p.millisecond+=e,p.incident=r.incidentsById._get(p.id);var f=r.getOverlappingAnims(p,l,c,n);f.length>0&&s.push({type:"anauthorised, overlapping animations on the same element",meta:{element_mcid:l,attribute:c,newAnimation:p,overlappingAnims:f}});break}if(s.length>0)return{result:!1,errors:s};var m=this;return{result:!0,execute:function(){m.LanesHandler.updateLane(n,e)}}}},{key:"checkResizedIncidents",value:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=[],i=0;i<t.length;i++)n.push(t[i].id);for(var r=this.LanesHandler.createTestLanesSanbox(),s=[],a=0;a<t.length;a++)for(var u=this.LanesHandler.incidentsById._get(t[a].id),l=u.mcid,c=u.attribute||this.fixedAttributeName,h=r.getLane(l,c),d={mcid:l,attribute:c},p=t[a].end-t[a].start,f=0;f<h.length;f++)if(h[f].id===t[a].id){if(!e){var m=h[f],v=o({},m);v.millisecond+=t[a].startDelta,v.incident=r.incidentsById._get(v.id);var g=r.getOverlappingAnims(v,d.mcid,d.attribute,n,p);g.length>0&&s.push({type:"anauthorised overlapping animations on the same element",meta:{element_mcid:d.mcid,attribute:d.attribute,newAnimation:v,overlappingAnims:g}})}break}if(s.length>0)return{result:!1,errors:s};var y=this,k=function(){for(var e=0;e<t.length;e++)y.LanesHandler.updateLane([t[e].id],t[e].startDelta)};return{execute:k,result:!0}}},{key:"checkDelete",value:function(t){for(var e=[],n=0;n<t.length;n++)e.push(t[n].id);var i=this;return{result:!0,execute:function(){i.LanesHandler.deleteAnimations(e)}}}},{key:"recalcScratchValues",value:function(t){this.LanesHandler.recalcScratchValues(t)}},{key:"slipIntoLaneForwards",value:function(t,e,n,i){var r=this,s=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a=t.filter((function(t){var i=r.incidentsById._get(t.id).duration+t.millisecond;return i>=e&&i<=n||i>=n&&t.millisecond<=n}));if(0===a.length){if(s&&0===e){var o=this.incidentsById._get(t[0].id);o.onProgress(0,0,i)}return!0}var u=a.length-1,l=this.incidentsById._get(a[u].id),c=a[u].millisecond,h=1,d=l.duration;l.duration+c>n&&(h=(d=n-c)/l.duration),l.onProgress(h,d,i)}},{key:"slipToLaneBackwards",value:function(t,e,n,i){var r=this,s=t.filter((function(t){var i=r.incidentsById._get(t.id).duration+t.millisecond;return i<=n&&i>=e||t.millisecond>=e&&t.millisecond<=n||t.millisecond<e&&i>n}));if(0===s.length)return!0;var a=this.incidentsById._get(s[0].id),o=s[0].millisecond,u=0,l=0;o<n&&(u=(n-o)/a.duration,l=n-o),a.onProgress(u,l,i)}},{key:"moveTo",value:function(t,e,n){for(var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=Object.keys(this.lanes),s=0;s<r.length;s++){var a=this.lanes[r[s]];t<=e?this.slipIntoLaneForwards(a,t,e,n,i):this.slipToLaneBackwards(a,t,e,n,i)}}}]),n}(ct);d(jr,"type","attributes");var Br=function(){function t(){l(this,t),this.customEntities={}}return h(t,[{key:"calcClipDims",value:function(t){var e={use:!1,width:null,height:null};return Q(t,"originalDims")&&null!=t.originalDims.width&&null!=t.originalDims.height?{use:!0,width:t.originalDims.width.number+t.originalDims.width.unit,height:t.originalDims.height.number+t.originalDims.height.unit}:(Q(t,"containerParams")&&(Q(t.containerParams,"width")&&(e.use=!0,e.width=t.containerParams.width),Q(t.containerParams,"height")&&(e.use=!0,e.height=t.containerParams.height)),e)}},{key:"scalingCalculator",value:function(t){if(!Q(t,"containerParams")||!Q(t,"originalDims")||null==t.originalDims.width&&null==t.originalDims.height)return{width:1,height:1};var e=tt(t.containerParams),n=null,i=null;return null!==e.width&&null!==t.originalDims.width&&(e.width.unit===t.originalDims.width.unit?n=e.width.number/t.originalDims.width.number:ut.warning("containerParams and originalDims width of Incident have different dimensions.\n          containerParams.width will be ignored")),null!==e.height&&null!==t.originalDims.height&&(e.height.unit===t.originalDims.height.unit?i=e.height.number/t.originalDims.height.number:ut.warning("containerParams and originalDims height of Incident have different dimensions.\n          containerParams.width will be ignored")),null===n&&null===i?{width:1,height:1}:(null!==n&&null===i?i=n:null!==i&&null===n&&(n=i),{width:n,height:i})}},{key:"getElementByMCID",value:function(t){if(Q(this.customEntities,t))return this.customEntities[t];if(Q(this.elementsByMCID,t))return this.elementsByMCID[t];var e=this.context.rootElement.querySelector(this.getElementSelectorByMCID(t));return this.elementsByMCID[t]=e,e}},{key:"getElements",value:function(t){if(null==t||""===t)return[];if("!"===t.charAt(0)){if("#"===(t=t.substr(1)).charAt(0))return[this.customEntities[t.substr(1)]];if("."===t.charAt(0)){var e=[];for(var n in this.customEntities){var i=this.customEntities[n];i.classes.includes(t.substr(1))&&e.push(i)}return e}}return Array.from(this.context.rootElement.querySelectorAll(t))}},{key:"getMCID",value:function(t){return t.customEntity?t.id:t.getAttribute(L)}},{key:"setMCID",value:function(t,e){t.setAttribute(L,e)}},{key:"getElementSelectorByMCID",value:function(t){return Q(this.customEntities,t)?"!#".concat(t):"[".concat(L,'="').concat(t,'"]')}},{key:"setCustomEntity",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return Q(this.customEntities,t)?(ut.error("Clip ".concat(this.id," already has custom Entity with id: ").concat(t)),!1):(this.customEntities[t]={id:t,entity:e,classes:n,customEntity:!0},!0)}}]),t}(),Lr={},Rr={};!function(t){var e=/[|\\{}()[\]^$+*?.]/g;t.escapeRegExpChars=function(t){return t?String(t).replace(e,"\\$&"):""};var n={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},i=/[&<>'"]/g;function r(t){return n[t]||t}t.escapeXML=function(t){return null==t?"":String(t).replace(i,r)},t.escapeXML.toString=function(){return Function.prototype.toString.call(this)+';\nvar _ENCODE_HTML_RULES = {\n      "&": "&amp;"\n    , "<": "&lt;"\n    , ">": "&gt;"\n    , \'"\': "&#34;"\n    , "\'": "&#39;"\n    }\n  , _MATCH_HTML = /[&<>\'"]/g;\nfunction encode_char(c) {\n  return _ENCODE_HTML_RULES[c] || c;\n};\n'},t.shallowCopy=function(t,e){for(var n in e=e||{})t[n]=e[n];return t},t.shallowCopyFromList=function(t,e,n){for(var i=0;i<n.length;i++){var r=n[i];void 0!==e[r]&&(t[r]=e[r])}return t},t.cache={_data:{},set:function(t,e){this._data[t]=e},get:function(t){return this._data[t]},remove:function(t){delete this._data[t]},reset:function(){this._data={}}},t.hyphenToCamel=function(t){return t.replace(/-[a-z]/g,(function(t){return t[1].toUpperCase()}))}}(Rr);var Fr="3.1.6";function zr(t,e){return U(t)?t(e):Lr.render(t,{initParams:e})}!function(t){var e=r.default,n=s.default,i=Rr,a=!1,o=Fr,u="locals",l=["delimiter","scope","context","debug","compileDebug","client","_with","rmWhitespace","strict","filename","async"],c=l.concat("cache"),h=/^\uFEFF/;function d(n,i){var r;if(i.some((function(i){return r=t.resolveInclude(n,i,!0),e.existsSync(r)})))return r}function p(e,n){var i,r=e.filename,s=arguments.length>1;if(e.cache){if(!r)throw new Error("cache option requires a filename");if(i=t.cache.get(r))return i;s||(n=m(r).toString().replace(h,""))}else if(!s){if(!r)throw new Error("Internal EJS error: no file name or template provided");n=m(r).toString().replace(h,"")}return i=t.compile(n,e),e.cache&&t.cache.set(r,i),i}function f(e,n,i){var r;if(!i){if("function"==typeof t.promiseImpl)return new t.promiseImpl((function(t,i){try{t(r=p(e)(n))}catch(t){i(t)}}));throw new Error("Please provide a callback function")}try{r=p(e)(n)}catch(t){return i(t)}i(null,r)}function m(e){return t.fileLoader(e)}function v(n,r){var s=i.shallowCopy({},r);if(s.filename=function(n,i){var r,s,a=i.views,o=/^[A-Za-z]+:\\|^\//.exec(n);if(o&&o.length)n=n.replace(/^\/*/,""),r=Array.isArray(i.root)?d(n,i.root):t.resolveInclude(n,i.root||"/",!0);else if(i.filename&&(s=t.resolveInclude(n,i.filename),e.existsSync(s)&&(r=s)),!r&&Array.isArray(a)&&(r=d(n,a)),!r&&"function"!=typeof i.includer)throw new Error('Could not find the include file "'+i.escapeFunction(n)+'"');return r}(n,s),"function"==typeof r.includer){var a=r.includer(n,s.filename);if(a&&(a.filename&&(s.filename=a.filename),a.template))return p(s,a.template)}return p(s)}function g(t,e,n,i,r){var s=e.split("\n"),a=Math.max(i-3,0),o=Math.min(s.length,i+3),u=r(n),l=s.slice(a,o).map((function(t,e){var n=e+a+1;return(n==i?" >> ":"    ")+n+"| "+t})).join("\n");throw t.path=u,t.message=(u||"ejs")+":"+i+"\n"+l+"\n\n"+t.message,t}function y(t){return t.replace(/;(\s*$)/,"$1")}function k(e,n){n=n||{};var r={};this.templateText=e,this.mode=null,this.truncate=!1,this.currentLine=1,this.source="",r.client=n.client||!1,r.escapeFunction=n.escape||n.escapeFunction||i.escapeXML,r.compileDebug=!1!==n.compileDebug,r.debug=!!n.debug,r.filename=n.filename,r.openDelimiter=n.openDelimiter||t.openDelimiter||"<",r.closeDelimiter=n.closeDelimiter||t.closeDelimiter||">",r.delimiter=n.delimiter||t.delimiter||"%",r.strict=n.strict||!1,r.context=n.context,r.cache=n.cache||!1,r.rmWhitespace=n.rmWhitespace,r.root=n.root,r.includer=n.includer,r.outputFunctionName=n.outputFunctionName,r.localsName=n.localsName||t.localsName||u,r.views=n.views,r.async=n.async,r.destructuredLocals=n.destructuredLocals,r.legacyInclude=void 0===n.legacyInclude||!!n.legacyInclude,r.strict?r._with=!1:r._with=void 0===n._with||n._with,this.opts=r,this.regex=this.createRegex()}t.cache=i.cache,t.fileLoader=e.readFileSync,t.localsName=u,t.promiseImpl=new Function("return this;")().Promise,t.resolveInclude=function(t,e,i){var r=n.dirname,s=n.extname,a=(0,n.resolve)(i?e:r(e),t);return s(t)||(a+=".ejs"),a},t.compile=function(t,e){return e&&e.scope&&(a||(console.warn("`scope` option is deprecated and will be removed in EJS 3"),a=!0),e.context||(e.context=e.scope),delete e.scope),new k(t,e).compile()},t.render=function(t,e,n){var r=e||{},s=n||{};return 2==arguments.length&&i.shallowCopyFromList(s,r,l),p(s,t)(r)},t.renderFile=function(){var t,e,n,r=Array.prototype.slice.call(arguments),s=r.shift(),a={filename:s};return"function"==typeof arguments[arguments.length-1]&&(t=r.pop()),r.length?(e=r.shift(),r.length?i.shallowCopy(a,r.pop()):(e.settings&&(e.settings.views&&(a.views=e.settings.views),e.settings["view cache"]&&(a.cache=!0),(n=e.settings["view options"])&&i.shallowCopy(a,n)),i.shallowCopyFromList(a,e,c)),a.filename=s):e={},f(a,e,t)},t.Template=k,t.clearCache=function(){t.cache.reset()},k.modes={EVAL:"eval",ESCAPED:"escaped",RAW:"raw",COMMENT:"comment",LITERAL:"literal"},k.prototype={createRegex:function(){var t="(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)",e=i.escapeRegExpChars(this.opts.delimiter),n=i.escapeRegExpChars(this.opts.openDelimiter),r=i.escapeRegExpChars(this.opts.closeDelimiter);return t=t.replace(/%/g,e).replace(/</g,n).replace(/>/g,r),new RegExp(t)},compile:function(){var t,e,r,s=this.opts,a="",o="",u=s.escapeFunction,l=s.filename?JSON.stringify(s.filename):"undefined";if(!this.source){if(this.generateSource(),a+='  var __output = "";\n  function __append(s) { if (s !== undefined && s !== null) __output += s }\n',s.outputFunctionName&&(a+="  var "+s.outputFunctionName+" = __append;\n"),s.destructuredLocals&&s.destructuredLocals.length){for(var c="  var __locals = ("+s.localsName+" || {}),\n",h=0;h<s.destructuredLocals.length;h++){var d=s.destructuredLocals[h];h>0&&(c+=",\n  "),c+=d+" = __locals."+d}a+=c+";\n"}!1!==s._with&&(a+="  with ("+s.localsName+" || {}) {\n",o+="  }\n"),o+="  return __output;\n",this.source=a+this.source+o}t=s.compileDebug?"var __line = 1\n  , __lines = "+JSON.stringify(this.templateText)+"\n  , __filename = "+l+";\ntry {\n"+this.source+"} catch (e) {\n  rethrow(e, __lines, __filename, __line, escapeFn);\n}\n":this.source,s.client&&(t="escapeFn = escapeFn || "+u.toString()+";\n"+t,s.compileDebug&&(t="rethrow = rethrow || "+g.toString()+";\n"+t)),s.strict&&(t='"use strict";\n'+t),s.debug&&console.log(t),s.compileDebug&&s.filename&&(t=t+"\n//# sourceURL="+l+"\n");try{if(s.async)try{r=new Function("return (async function(){}).constructor;")()}catch(t){throw t instanceof SyntaxError?new Error("This environment does not support async/await"):t}else r=Function;e=new r(s.localsName+", escapeFn, include, rethrow",t)}catch(t){throw t instanceof SyntaxError&&(s.filename&&(t.message+=" in "+s.filename),t.message+=" while compiling ejs\n\n",t.message+="If the above error is not helpful, you may want to try EJS-Lint:\n",t.message+="https://github.com/RyanZim/EJS-Lint",s.async||(t.message+="\n",t.message+="Or, if you meant to create an async function, pass `async: true` as an option.")),t}var p=s.client?e:function(t){return e.apply(s.context,[t||{},u,function(e,n){var r=i.shallowCopy({},t);return n&&(r=i.shallowCopy(r,n)),v(e,s)(r)},g])};if(s.filename&&"function"==typeof Object.defineProperty){var f=s.filename,m=n.basename(f,n.extname(f));try{Object.defineProperty(p,"name",{value:m,writable:!1,enumerable:!1,configurable:!0})}catch(t){}}return p},generateSource:function(){this.opts.rmWhitespace&&(this.templateText=this.templateText.replace(/[\r\n]+/g,"\n").replace(/^\s+|\s+$/gm,"")),this.templateText=this.templateText.replace(/[ \t]*<%_/gm,"<%_").replace(/_%>[ \t]*/gm,"_%>");var t=this,e=this.parseTemplateText(),n=this.opts.delimiter,i=this.opts.openDelimiter,r=this.opts.closeDelimiter;e&&e.length&&e.forEach((function(s,a){var o;if(0===s.indexOf(i+n)&&0!==s.indexOf(i+n+n)&&(o=e[a+2])!=n+r&&o!="-"+n+r&&o!="_"+n+r)throw new Error('Could not find matching close tag for "'+s+'".');t.scanLine(s)}))},parseTemplateText:function(){for(var t,e=this.templateText,n=this.regex,i=n.exec(e),r=[];i;)0!==(t=i.index)&&(r.push(e.substring(0,t)),e=e.slice(t)),r.push(i[0]),e=e.slice(i[0].length),i=n.exec(e);return e&&r.push(e),r},_addOutput:function(t){if(this.truncate&&(t=t.replace(/^(?:\r\n|\r|\n)/,""),this.truncate=!1),!t)return t;t=(t=(t=(t=t.replace(/\\/g,"\\\\")).replace(/\n/g,"\\n")).replace(/\r/g,"\\r")).replace(/"/g,'\\"'),this.source+='    ; __append("'+t+'")\n'},scanLine:function(t){var e,n=this.opts.delimiter,i=this.opts.openDelimiter,r=this.opts.closeDelimiter;switch(e=t.split("\n").length-1,t){case i+n:case i+n+"_":this.mode=k.modes.EVAL;break;case i+n+"=":this.mode=k.modes.ESCAPED;break;case i+n+"-":this.mode=k.modes.RAW;break;case i+n+"#":this.mode=k.modes.COMMENT;break;case i+n+n:this.mode=k.modes.LITERAL,this.source+='    ; __append("'+t.replace(i+n+n,i+n)+'")\n';break;case n+n+r:this.mode=k.modes.LITERAL,this.source+='    ; __append("'+t.replace(n+n+r,n+r)+'")\n';break;case n+r:case"-"+n+r:case"_"+n+r:this.mode==k.modes.LITERAL&&this._addOutput(t),this.mode=null,this.truncate=0===t.indexOf("-")||0===t.indexOf("_");break;default:if(this.mode){switch(this.mode){case k.modes.EVAL:case k.modes.ESCAPED:case k.modes.RAW:t.lastIndexOf("//")>t.lastIndexOf("\n")&&(t+="\n")}switch(this.mode){case k.modes.EVAL:this.source+="    ; "+t+"\n";break;case k.modes.ESCAPED:this.source+="    ; __append(escapeFn("+y(t)+"))\n";break;case k.modes.RAW:this.source+="    ; __append("+y(t)+")\n";break;case k.modes.COMMENT:break;case k.modes.LITERAL:this._addOutput(t)}}else this._addOutput(t)}this.opts.compileDebug&&e&&(this.currentLine+=e,this.source+="    ; __line = "+this.currentLine+"\n")}},t.escapeXML=i.escapeXML,t.__express=t.renderFile,t.VERSION=o,t.name="ejs","undefined"!=typeof window&&(window.ejs=t)}(Lr);var Gr=function(t){p(n,t);var e=y(n);function n(){var t,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(l(this,n),t=e.call(this),!H(i))return ut.error("ContextHandler expects an object on its constructor. ".concat(u(i)," passed")),g(t,!1);if(!Q(i,"html"))return ut.error("ContextHandler expects the html key on its constructor properties which is missing"),g(t,!1);if(!Q(i,"css"))return ut.error("ContextHandler expects the css key on its constructor properties which is missing"),g(t,!1);if(Q(i,"initParams")||ut.info("ContextHandler got null initParams"),!Q(i,"host"))return ut.error("ContextHandler expects the host key on its constructor properties which is missing"),g(t,!1);t.isDOM=!0;var r=i.host.ownerDocument;if(!r.getElementById("@kissmybutton/motorcortex/iframeContextHandler/css")){var s="\n            iframe[seamless]{\n                background-color: transparent;\n                border: 0px none transparent;\n                padding: 0px;\n                overflow: hidden;\n            }\n            ",a=r.createElement("style");a.id="@kissmybutton/motorcortex/iframeContextHandler/css",a.type="text/css";var o=r.head||r.getElementsByTagName("head")[0];a.styleSheet?a.styleSheet.cssText=s:a.appendChild(r.createTextNode(s)),o.appendChild(a)}var c=r.createElement("iframe");i.host.appendChild(c);var h=t.scalingCalculator(i),d=t.calcClipDims(i);c.setAttribute("seamless","seamless"),!0===d.use&&(null!==d.width&&c.setAttribute("width",d.width),null!==d.height&&c.setAttribute("height",d.height)),c.style.transform="scale(".concat(h.width,", ").concat(h.height,")"),c.style.transformOrigin="top left",c.style.position="absolute",c.src="";var p=c.contentWindow||c.contentDocument;p.document&&(p=p.document),p.write(zr(i.html,i.initParams));var f="\n        body{\n            padding:0;\n            margin:0;\n        }\n        ",m=p.createElement("style");m.type="text/css",m.styleSheet?m.styleSheet.cssText=zr(i.css,i.initParams)+f:m.appendChild(r.createTextNode(zr(i.css,i.initParams)+f));var y=p.head||p.getElementsByTagName("head")[0];if(y.appendChild(m),Q(i,"fonts"))for(var k=0;k<i.fonts.length;k++){var b=i.fonts[k];if("google-font"===b.type){var x=p.createElement("link");x.setAttribute("rel","stylesheet"),x.setAttribute("href",b.src),y.appendChild(x)}}return t.rootElement=c,p.close(),t.context={document:p,window:c.contentWindow||c,clipContainer:c,rootElement:p.body,unmount:function(){i.host.removeChild(c)},getElements:t.getElements.bind(v(t)),getMCID:t.getMCID.bind(v(t)),setMCID:t.setMCID.bind(v(t)),getElementSelectorByMCID:t.getElementSelectorByMCID.bind(v(t)),getElementByMCID:t.getElementByMCID.bind(v(t)),setCustomEntity:t.setCustomEntity.bind(v(t))},t.elementsByMCID={},t}return n}(Br),qr=function(t){p(n,t);var e=y(n);function n(){var t,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(l(this,n),t=e.call(this),!H(i))return ut.error("ContextHandler expects an object on its constructor. ".concat(u(i)," passed")),g(t,!1);if(!Q(i,"html"))return ut.error("ContextHandler expects the html key on its constructor properties which is missing"),g(t,!1);if(!Q(i,"css"))return ut.error("ContextHandler expects the css key on its constructor properties which is missing"),g(t,!1);if(!Q(i,"host"))return ut.error("ContextHandler expects the host key on its constructor properties which is missing"),g(t,!1);t.isDOM=!0;var r=i.host.shadowRoot;r||(r=i.host.attachShadow({mode:"open"}));var s=document.createElement("div"),a=t.scalingCalculator(i),o=t.calcClipDims(i);s.setAttribute("data-motorocortex-container","true"),!0===o.use&&(null!==o.width&&(s.style.width=o.width),null!==o.height&&(s.style.height=o.height)),s.style.transform="scale(".concat(a.width,", ").concat(a.height,")"),s.style.transformOrigin="top left",s.style.position="absolute",s.style.overflow="hidden",s.innerHTML=zr(i.html,i.initParams),r.appendChild(s);var c=document.createElement("slot");r.appendChild(c);var h=document.createElement("style");if(h.type="text/css",h.styleSheet?h.styleSheet.cssText=zr(i.css,i.initParams):h.appendChild(document.createTextNode("[data-motorocortex-container] { all: initial; }"+zr(i.css,i.initParams))),r.appendChild(h),t.fontTags=[],Q(i,"fonts"))for(var d=0;d<i.fonts.length;d++){var p=i.fonts[d];if("google-font"===p.type){var f=document.createElement("link");f.setAttribute("rel","stylesheet"),f.setAttribute("href",p.src),document.getElementsByTagName("head")[0].appendChild(f),t.fontTags.push(f)}}return s.style.overflow="hidden",t.rootElement=s,t.context={document:document,window:window,clipContainer:t.rootElement,rootElement:s,unmount:function(){try{r.innerHTML="";for(var t=0;t<this.fontTags.length;t++)document.getElementsByTagName("head")[0].removeChild(this.fontTags[t])}catch(t){ut.warning("The element of the Clip to be removed seems not to exist any more")}},getElements:t.getElements.bind(v(t)),getMCID:t.getMCID.bind(v(t)),setMCID:t.setMCID.bind(v(t)),getElementSelectorByMCID:t.getElementSelectorByMCID.bind(v(t)),getElementByMCID:t.getElementByMCID.bind(v(t)),setCustomEntity:t.setCustomEntity.bind(v(t))},t.elementsByMCID={},t}return n}(Br),Kr=function(t){p(n,t);var e=y(n);function n(){var t,i,r,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;l(this,n),null===a?(i={},r=s):(i=s,r=a),t=e.call(this,i,r),r=o(o({},r),{},{html:""!==t.html?t.html:r.html,css:""!==t.css?t.css:r.css,fonts:t.fonts.length>0?t.fonts:r.fonts});var u=R;t.clipType=u;var c=new(document.head.createShadowRoot||document.head.attachShadow?qr:Gr)(r);return t.ownContext=o(o({},c.context),{},{isHostedClip:t.isHostedClip,initParams:r.initParams}),t.iframe=c.iframeElement,t.forceExportIncidents=!0,t.onAfterRender(),t}return h(n,[{key:"onAfterRender",value:function(){}},{key:"html",get:function(){return""}},{key:"css",get:function(){return""}},{key:"fonts",get:function(){return[]}},{key:"rootElement",get:function(){return this.context.clipContainer}},{key:"exportConstructionArguments",value:function(){return{attrs:this.attrs,props:o(o({},this.props),{},{host:void 0,html:!0===this.DescriptiveIncident.constructor.customClip?"":this.context.rootElement.innerHTML})}}},{key:"setCustomEntity",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return this.context.setCustomEntity(t,e,n)}}]),n}(br),Jr=function(t){p(n,t);var e=y(n);function n(){var t,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};l(this,n),t=e.call(this);var r=o({},i);if(!H(r))return ut.error("HTMLFragmentContextHandler expects an object on its constructor. ".concat(u(r)," passed")),g(t,!1);Q(r,"html")||(r.html=""),t.isDOM=!0;var s=document.createDocumentFragment(),a=document.createElement("div");return Q(r,"containerParams")&&(Q(r,"width")&&(a.style.width=r.containerParams.width),Q(r,"height")&&(a.style.height=r.containerParams.height)),a.innerHTML=zr(r.html,r.initParams),s.appendChild(a),a.style.overflow="hidden",t.rootElement=a,t.context={document:document,window:window,clipContainer:t.rootElement,rootElement:a,unmount:function(){r.host.removeChild(s)},getElements:t.getElements.bind(v(t)),getMCID:t.getMCID.bind(v(t)),setMCID:t.setMCID.bind(v(t)),getElementSelectorByMCID:t.getElementSelectorByMCID.bind(v(t)),getElementByMCID:t.getElementByMCID.bind(v(t)),setCustomEntity:t.setCustomEntity.bind(v(t)),fragment:!0},t.elementsByMCID={},t}return n}(Br),Wr=function(t){p(n,t);var e=y(n);function n(){var t,i,r,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;l(this,n),null===a?(i={},r=s):(i=s,r=a),t=e.call(this,i,r);var u=new Jr(o(o({},r),{},{html:Q(r,"html")?r.html:t.html,css:Q(r,"css")?r.css:t.css,fonts:Q(r,"fonts")?r.fonts:t.fonts}));return t.ownContext=o(o({},u.context),{},{isHostedClip:!1}),t.iframe=u.iframeElement,t.forceExportIncidents=!0,t.onDOMCLipInitialise(),t}return h(n,[{key:"exportConstructionArguments",value:function(){return{attrs:this.attrs,props:o(o({},this.props),{},{html:this.context.rootElement.innerHTML})}}},{key:"onDOMCLipInitialise",value:function(){}},{key:"rootElement",get:function(){return this.context.clipContainer}}]),n}(br),Hr=function(){function t(){l(this,t)}return h(t,[{key:"duration",get:function(){return 0}},{key:"addIncident",value:function(){return{result:!0,execute:function(){}}}},{key:"moveIncident",value:function(){return{result:!0,execute:function(){}}}},{key:"removeIncident",value:function(){return{result:!0,execute:function(){}}}},{key:"resizeIncident",value:function(){return{result:!0,execute:function(){}}}},{key:"getIncidentsByChannel",value:function(){return{}}},{key:"flash",value:function(){}},{key:"_resize",value:function(){}},{key:"onProgress",value:function(){}}]),t}(),Ur=function(){function t(e){l(this,t),this.runTimeInfo={currentMillisecond:0,state:"transitional"},this.id=st(),this.realClip=e.descriptiveIncident.realClip;var n=e.descriptiveIncident.realClip.exportConstructionArguments(),i=o(o({},n.props),{},{selector:void 0,host:e.host,id:this.id});this.ownClip=new e.descriptiveIncident.constructor.Incident(n.attrs,i),e.descriptiveIncident.realClip.addContext({clipId:this.id,context:this.ownClip.context,synchronize:e.synchronize,runTimeInfo:this.runTimeInfo},!0)}return h(t,[{key:"onProgress",value:function(t,e){for(var n in this.realClip.instantiatedChannels){this.realClip.instantiatedChannels[n].moveTo(this.runTimeInfo.currentMillisecond,e,this.id,!0)}this.runTimeInfo.currentMillisecond=e}}]),t}(),Qr=D(null,(function(t,e){var n=function(e){p(i,e);var n=y(i);function i(e){var r,s,a,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;l(this,i),null===u?(s={},a=e):(s=e,a=u),r=n.call(this,s,a),t(v(r)),r.initParams=a.initParams||{};var c=r._validateProps();if(!c.result)return g(r,c);r.isTheRootClip=!1,r.isExportableToJSONFormat=!0,Object.prototype.hasOwnProperty.call(a,"html")&&U(a.html)&&(r.isExportableToJSONFormat=!1);var h={id:r.id,attrs:s,props:o(o({},a),{},{html:Object.prototype.hasOwnProperty.call(a,"html")?a.html:r.html,css:Object.prototype.hasOwnProperty.call(a,"css")?a.css:r.css,fonts:Object.prototype.hasOwnProperty.call(a,"fonts")?a.fonts:r.fonts,runTimeInfo:r.runTimeInfo,subscribe:r.subscribe.bind(v(r)),repeats:1,delay:0,hiatus:0}),plugin_npm_name:r.constructor.plugin_npm_name,Channel:r.constructor.Channel,DescriptiveIncident:v(r)};if(r.audio="on",Object.prototype.hasOwnProperty.call(r.constructor,"audio")&&(r.audio=r.constructor.audio),Object.prototype.hasOwnProperty.call(a,"audio")&&(r.audio=a.audio),Object.prototype.hasOwnProperty.call(a,"selector")&&void 0!==a.selector&&!0!==r.constructor.customClip)h.Incident=Wr;else if(Object.prototype.hasOwnProperty.call(a,"selector")&&void 0!==a.selector&&!0===r.constructor.customClip){delete h.props.selector;var d=new Wr({html:'<div id="clip-container"></div>'});h.props.host=d.rootElement,h.Incident=r.constructor.Incident}else"only"===r.audio&&!0!==r.props.root?r.isTheRootClip=!1:(r.isTheRootClip=!0,r.blockingWaitings={},h.Incident=r.constructor.Incident);if("on"===r.audio||"off"===r.audio?r.realClip=$t(h):r.realClip=new Hr,"on"===r.audio||"only"===r.audio){var p={id:r.id,attrs:{},props:{audioSources:Object.prototype.hasOwnProperty.call(a,"audioSources")?a.audioSources:r.audioSources,runTimeInfo:r.runTimeInfo,subscribe:r.subscribe.bind(v(r))},plugin_npm_name:r.constructor.plugin_npm_name,Channel:r.constructor.Channel,Incident:Pr,DescriptiveIncident:v(r)};r.audioClip=$t(p)}else r.audio="off",r.audioClip=new Hr;return r.attributesStaggers=[],r.propsStaggers=[],r.setupDynamicValues(),r.dynamicDurationValue=null,r.passiveAddition=!0,r._buildTree(),r.passiveAddition=!1,r.constructor.isAnimation&&Object.prototype.hasOwnProperty.call(r.props,"duration")&&r.resize(r.duration),r}return i}(e);return{F:n,d:[{kind:"field",static:!0,key:"isClip",value:function(){return!0}},{kind:"field",static:!0,key:"Incident",value:function(){return Kr}},{kind:"field",static:!0,key:"plugin_npm_name",value:function(){return"@kissmybutton/self-contained-incidents"}},{kind:"field",static:!0,key:"version",value:function(){return Kt}},{kind:"field",static:!0,key:"Channel",value:function(){return Ct}},{kind:"field",static:!0,key:"ClassName",value:function(){return"HTMLClip"}},{kind:"field",static:!0,key:"propsValidationRules",value:function(){return Xi}},{kind:"method",key:"_validateProps",value:function(){return ut.validateProps({props:this.props},Xi,this.constructor,this.id)}},{kind:"get",key:"selectorToPassToChildren",value:function(){return null}},{kind:"get",key:"inheritedSelector",value:function(){return this._inheritedSelector}},{kind:"set",key:"inheritedSelector",value:function(t){this._inheritedSelector=t}},{kind:"get",key:"html",value:function(){return""}},{kind:"get",key:"css",value:function(){return""}},{kind:"get",key:"fonts",value:function(){return[]}},{kind:"get",key:"audioSources",value:function(){return[]}},{kind:"method",decorators:[pr],key:"setupDynamicValues",value:function(){}},{kind:"get",key:"duration",value:function(){return null!==this.dynamicDurationValue?this.dynamicDurationValue:this.propsStaggers.length>0?"dynamic":Object.prototype.hasOwnProperty.call(this.props,"duration")?this.repeats*(this.delay+this.props.duration+this.hiatus):b(f(n.prototype),"duration",this)}},{kind:"set",key:"duration",value:function(t){if(0!=this.propsStaggers.length){for(var e=0;e<this.propsStaggers.length;e++)if("repeats"!==this.propsStaggers[e].path){var i=this.propsStaggers[e].stagger.resize(t/this.duration);ot(this.props,this.propsStaggers[e].path,i)}this.dynamicDurationValue=t}else C(f(n.prototype),"duration",t,this,!0)}},{kind:"method",key:"systoleDiastole",value:function(t){this.constructor.isAnimation&&(this.props.duration?this.props.duration*=t:this.props.duration=t*this.calculatedDuration),this.realClip._resize(t),b(f(n.prototype),"systoleDiastole",this).call(this,t)}},{kind:"method",key:"exportLiveDefinition",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=b(f(n.prototype),"exportLiveDefinition",this).call(this,t);return this.constructor.isAnimation&&(e.props.duration=this.props.duration?this.props.duration:this.calculatedDuration),U(this.props.html)&&(e.props.html=this.props.html),U(this.props.css)&&(e.props.css=this.props.css),e}},{kind:"method",key:"_buildTree",value:function(){void 0!==this.realClip&&this.buildTree()}},{kind:"method",key:"resize",value:function(t){if("dynamic"===this.duration)return{result:!1,reason:"Incidents with dynamic duration can't be resized. Once the Incident enters a Clip it'll become resizable"};var e=t/this.duration;return this.realClip._resize(e),this.audioClip._resize(e),this.duration=t,this.constructor.isAnimation&&(this.props.duration?this.props.duration*=e:this.props.duration=this.calculatedDuration),this.putMessageOnPipe("recalcDuration",{},"Groups",{selfExecute:!1,direction:ht}),this.putMessageOnPipe("flash",{},"RootClip",{selfExecute:!0,direction:ht}),{result:!0}}},{kind:"method",key:"manageEditAttrProps",value:function(t,e){return{result:!1,errors:["Clips attributes and properties can not be edited"]}}},{kind:"method",key:"handleCheckForClip",value:function(t,e){return!0}},{kind:"method",key:"handleGetElements",value:function(t,e){return this.realClip.getElements(e.selector)}},{kind:"method",key:"handleCheckAddition",value:function(t,e){var n=this.realClip.addIncident(e),i=this.audioClip.addIncident(e);return!0===n.result&&!0===i.result?(n.execute(),i.execute(),this.putMessageOnPipe("flash",{},"RootClip",{selfExecute:!0,direction:ht}),{result:!0}):n}},{kind:"method",key:"handleCheckMove",value:function(t,e){var n=this.realClip.moveIncident(e),i=this.audioClip.moveIncident(e);return!0===n.result&&!0===i.result?(n.execute(),i.execute(),this.putMessageOnPipe("flash",{},"RootClip",{selfExecute:!0,direction:ht}),{result:!0}):n}},{kind:"method",key:"handleCheckDeletion",value:function(t,e){var n=this.realClip.removeIncident(e),i=this.audioClip.removeIncident(e);return!0===n.result&&!0===i.result?(n.execute(),i.execute(),this.putMessageOnPipe("flash",{},"RootClip",{selfExecute:!0,direction:ht}),{result:!0}):n}},{kind:"method",key:"handleCheckResize",value:function(t,e){var n=this.realClip.resizeIncident(e),i=this.audioClip.resizeIncident(e);return!0===n.result&&!0===i.result?(n.execute(),i.execute(),this.putMessageOnPipe("flash",{},"RootClip",{selfExecute:!0,direction:ht}),{result:!0}):n}},{kind:"method",key:"handleFlash",value:function(t,e){if(!this.isTheRootClip)return this.bypass();this.flash()}},{kind:"method",key:"exportDefinition",value:function(){var t=b(f(n.prototype),"exportDefinition",this).call(this);return this.constructor.isAnimation&&(t.props.duration=this.props.duration?this.props.duration:this.calculatedDuration),t}},{kind:"method",key:"handleSetBlock",value:function(t,e){if(!this.isTheRootClip)return this.bypass();"transitional"!==this.runTimeInfo.state&&("blocked"!==this.runTimeInfo.state&&(this.statusBeforeBlock=this.runTimeInfo.state),this.blockingWaitings[e.id]=e,this.block())}},{kind:"method",key:"handleUnBlock",value:function(t,e){if(!this.isTheRootClip)return this.bypass();Object.prototype.hasOwnProperty.call(this.blockingWaitings,e.id)&&(delete this.blockingWaitings[e.id],0===Object.keys(this.blockingWaitings).length&&("playing"===this.statusBeforeBlock?(this.previousTimeStamp=-1,this.play()):this.arm()))}},{kind:"method",key:"stop",value:function(){b(f(n.prototype),"stop",this).call(this),this.blockingWaitings={}}},{kind:"method",key:"onProgress",value:function(t,e){this.realClip.onProgress(t,e),this.audioClip.onProgress(t,e)}},{kind:"method",key:"paste",value:function(t){return this.isTheRootClip?new Ur({host:t,descriptiveIncident:this}):null}},{kind:"method",key:"flash",value:function(){this.realClip.flash()}},{kind:"method",key:"setVolume",value:function(t){return t<0||t>1?{result:!1,errors:[{type:"invalid volume number"}]}:"off"===this.audio?{result:!1,errors:[{type:"can not set volume of Clip with audio off"}]}:(this.audioClip.setVolume(t),{result:!0})}}]}}),function(t){p(n,t);var e=y(n);function n(t,i){var r;return l(this,n),(r=e.call(this,t,i)).runTimeInfo={currentMillisecond:0,state:"idle"},r.listeners={},r.previousTimeStamp=-1,r.speed=1,r}return h(n,[{key:"_setState",value:function(t){if(t!==this.runTimeInfo.state)for(var e in this.runTimeInfo.state=t,this.putMessageOnPipe("setState",t,"Clips",{selfExecute:!1,direction:dt}),this.listeners){this.listeners[e].funct(this.runTimeInfo.currentMillisecond,t)}}},{key:"handleSetState",value:function(t,e){this._setState(e)}},{key:"play",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if("idle"===this.runTimeInfo.state||"paused"===this.runTimeInfo.state||"armed"===this.runTimeInfo.state||"transitional"===this.runTimeInfo.state||"blocked"===this.runTimeInfo.state){if("paused"===this.runTimeInfo.state){var n=(new Date).getTime()-this.pauseMoment;this.previousTimeStamp+=n}this._setState("playing"),this.onPlay(),e||window.requestAnimationFrame((function(e){t.step(e)}))}}},{key:"pause",value:function(){"playing"===this.runTimeInfo.state&&(this._setState("paused"),this.pauseMoment=(new Date).getTime(),this.onWait())}},{key:"arm",value:function(){"transitional"!==this.runTimeInfo.state&&"blocked"!==this.runTimeInfo.state||this._setState("armed")}},{key:"complete",value:function(){this._setState("idle"),this.previousTimeStamp=-1}},{key:"stop",value:function(){this._setState("transitional"),this.previousTimeStamp=-1}},{key:"block",value:function(){this._setState("blocked"),this.previousTimeStamp=-1}},{key:"onPlay",value:function(){}},{key:"onWait",value:function(){}},{key:"playableProgress",value:function(t,e){if(this.isTheRootClip){for(var n in this.listeners){var i=this.listeners[n];!0!==i.onlyOnStateChange&&(Math.abs(e+i.cavaDelta-this.runTimeInfo.currentMillisecond)>i.threshold?(i.funct(nt(e,i.roundTo),this.runTimeInfo.state),i.cavaDelta=0):i.cavaDelta+=Math.abs(e-this.runTimeInfo.currentMillisecond))}return this.onProgress(t,e),this.runTimeInfo.currentMillisecond=e,!0}return!1}},{key:"executionSpeed",set:function(t){if(!this.isTheRootClip)return!1;this.speed=parseFloat(t)}},{key:"step",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("playing"===this.runTimeInfo.state){var n=this;-1===this.previousTimeStamp&&(this.previousTimeStamp=t);var i={milliseconds:Math.round(this.runTimeInfo.currentMillisecond+(t-this.previousTimeStamp)*this.speed),fraction:(this.runTimeInfo.currentMillisecond+(t-this.previousTimeStamp)*this.speed)/this.duration};if(i.fraction>=1)return this.playableProgress(1,this.duration),void this.complete();if(i.fraction<0)return this.playableProgress(0,0),void this.complete();this.playableProgress(i.fraction,i.milliseconds),this.previousTimeStamp=t,e||window.requestAnimationFrame(n.step.bind(n))}}},{key:"subscribe",value:function(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];n||(n=0),i||(i=1),this.listeners[t]={funct:e,threshold:n,roundTo:i,cavaDelta:0,onlyOnStateChange:r}}},{key:"unsubscribe",value:function(t){Q(this.listeners,t)&&delete this.listeners[t]}},{key:"subscribeToDurationChange",value:function(t){return!!this.isTheRootClip&&(this.realClip.subscribeToDurationChange(t),!0)}}]),n}(fr)),Xr=function(t){p(n,t);var e=y(n);function n(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;l(this,n);var r={audio:"only",audioSources:t};return null!==i&&(r.id=i),e.call(this,r)}return n}(Qr),Zr=Si.compile({incidents:{type:"array",items:{type:"object",props:{position:{type:"amount",integer:!0,min:0,optional:!1},attrs:{type:"object",optional:!1},props:{type:"object",optional:!1},incidentClass:{type:"any",optional:!1}}}}}),Yr=function(t){p(n,t);var e=y(n);function n(t,i){var r;l(this,n),null!==(r=e.call(this,t,i)).incidents&&(r.attrs.incidents=r.incidents,r.attributesStaggers=[],r.propsStaggers=[],r.setupDynamicValues());var s=ut.validateProps(r.props,Yi,r.constructor);if(!s.result)return g(r,s);var a=Zr(r.attrs);if(a.length>0)return ut.error("The provided attributes for Combo Incident are invalid"),g(r,{result:!1,errors:a});for(var o=[],u=0;u<r.attrs.length;u++){var c=r.attrs[u];if(null!==c.incidentClass.attrsValidationRules){var h=c.incidentClass.attrsValidationMethod(c.attrs);h.length>0&&o.concat(h.errors)}var d=ut.validateProps(c.props,c.incidentClass.propsValidationRules,c.incidentClass);!1===d.result&&o.concat(d.errors)}return o.length>0?g(r,{result:!1,errors:o}):(r.dynamicDurationValue=null,r)}return h(n,[{key:"incidents",get:function(){return null}},{key:"duration",get:function(){return null!==this.dynamicDurationValue?this.dynamicDurationValue:"dynamic"}},{key:"addIncident",value:function(){var t="Combos don't accept any Incidents to be added on their timeline externally";return ut.error(t),{result:!1,errors:[t]}}},{key:"moveIncident",value:function(){var t="Combo Incidents don't allow external manipulation of their Incidents";return ut.error(t),{result:!1,errors:[t]}}},{key:"removeIncident",value:function(){var t="Combo Incidents don't allow external manipulation of their Incidents";return ut.error(t),{result:!1,errors:[t]}}},{key:"handleCheckAddition",value:function(t,e){return!1}},{key:"handleCheckMove",value:function(t,e){return!1}},{key:"handleCheckDeletion",value:function(t,e){return!1}},{key:"handleCheckResize",value:function(t,e){return!1}},{key:"exportDefinition",value:function(){var t=o(o({},this.attrs),{},{incidents:function t(e){for(var n=[],i=0;i<e.length;i++){var r=e[i],s=r.attrs;"Combo"===r.incidentClass.ClassName&&(s=o(o({},s),{},{incidents:t(s.incidents)})),n.push({ClassName:r.incidentClass.ClassName||r.incidentClass.targetClass.ClassName,plugin_npm_name:r.incidentClass.plugin_npm_name||r.incidentClass.targetClass.plugin_npm_name,version:r.incidentClass.version||r.incidentClass.targetClass.version,attrs:s,props:JSON.parse(JSON.stringify(r.props)),position:r.position})}return n}(this.attrs.incidents)});return{ClassName:this.constructor.ClassName,version:this.constructor.version,plugin:this.constructor.plugin||this.constructor.plugin_npm_name,plugin_npm_name:this.constructor.plugin_npm_name,attrs:t,props:JSON.parse(JSON.stringify(this.props)),incidents:{},duration:this.duration}}},{key:"exportLiveDefinition",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=this.attrs;null!==this.incidents&&(e=o(o({},this.attrs),{},{incidents:void 0}));var n=JSON.parse(JSON.stringify(this.props));!1===t&&delete n.id;var i={Class:this.constructor,attrs:e,props:n,incidents:{}};return i}}]),n}(fr);d(Yr,"isCombo",!0),d(Yr,"ClassName","Combo"),d(Yr,"attrsValidationRules",null),d(Yr,"propsValidationRules",Yi);var ts=D(null,(function(t,e){var n=function(e){p(i,e);var n=y(i);function i(e,r){var s;l(this,i),void 0===r&&(r=e,e={}),s=n.call(this,r),t(v(s));var a=ut.validateProps(r,Hi,s.constructor,s.id);return a.result?(s.inheritedSelector=null,s.attrs=e,Q(r,"duration")||(r.duration=0),s.props=r,s.attributesStaggers=[],s.propsStaggers=[],s.setupDynamicValues(),s.dynamicDurationValue=null,s.passive=!1,s):g(s,a)}return i}(e);return{F:n,d:[{kind:"field",static:!0,key:"Incident",value:function(){return Vt}},{kind:"field",static:!0,key:"plugin_npm_name",value:function(){return"motor-cortex-js-attribute"}},{kind:"field",static:!0,key:"version",value:function(){return Kt}},{kind:"field",static:!0,key:"Channel",value:function(){return jr}},{kind:"field",static:!0,key:"ClassName",value:function(){return"Incident"}},{kind:"field",static:!0,key:"attrsValidationRules",value:function(){return null}},{kind:"field",static:!0,key:"propsValidationRules",value:function(){return Hi}},{kind:"method",decorators:[ir],key:"editAttributes",value:function(){}},{kind:"method",decorators:[rr],key:"editProperties",value:function(){}},{kind:"method",decorators:[ar],key:"resize",value:function(){}},{kind:"method",decorators:[er],key:"clone",value:function(){}},{kind:"method",decorators:[or],key:"selector",value:function(){}},{kind:"method",decorators:[sr],key:"getElements",value:function(){}},{kind:"method",decorators:[pr],key:"setupDynamicValues",value:function(){}},{kind:"get",key:"duration",value:function(){return null!==this.dynamicDurationValue?this.dynamicDurationValue:this.propsStaggers.length>0?"dynamic":b(f(n.prototype),"duration",this)}},{kind:"set",key:"duration",value:function(t){if(this.propsStaggers.length>0){for(var e=0;e<this.propsStaggers.length;e++)if("repeats"!==this.propsStaggers[e].path){var i=this.propsStaggers[e].stagger.resize(t/this.duration);ot(this.props,this.propsStaggers[e].path,i)}this.dynamicDurationValue=t}else C(f(n.prototype),"duration",t,this,!0)}},{kind:"method",key:"manageEditAttrProps",value:function(t,e){var n=this.parentNode,i=n.getLeafPosition(this.id);n.removeIncident(this.id);var r=JSON.parse(JSON.stringify(this[e]));this[e]=t;var s=n.addIncident(this,i);return s.result||(n.removeIncident(this.id),this[e]=r,n.addIncident(this,i)),s}},{kind:"method",key:"detachFromParent",value:function(){b(f(n.prototype),"detachFromParent",this).call(this),this.inheritedSelector=null}},{kind:"method",key:"handleCheckForInvalidSelectors",value:function(){var t=this.selector();return null===t?{id:this.id,ClassName:this.constructor.ClassName,plugin_npm_name:this.constructor.plugin_npm_name,error:"null selector"}:"&"===t.charAt(0)?{id:this.id,ClassName:this.constructor.ClassName,plugin_npm_name:this.constructor.plugin_npm_name,error:"relative selector with no inherited selector",selector:t}:this.bypass()}},{kind:"method",key:"exportDefinition",value:function(){return{ClassName:this.constructor.ClassName,version:this.constructor.version,plugin:this.constructor.plugin||this.constructor.plugin_npm_name,plugin_npm_name:this.constructor.plugin_npm_name,attrs:this.attrs,props:this.props}}},{kind:"method",key:"exportLiveDefinition",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=JSON.parse(JSON.stringify(this.props));return!1===t&&delete e.id,{Class:this.constructor,attrs:JSON.parse(JSON.stringify(this.attrs)),props:e}}}]}}),ft),es=function(){var t=function(t,e){return t.startsWith("on")&&"function"==typeof e},e=function(t){return t.substr(2).toLowerCase()},n=function(t){return"function"==typeof t};function i(t){var e=document.createElement("div");return e.innerHTML=t.trim(),e.firstChild}function r(n,i){if(!i)return n;for(var r=0,s=Object.entries(i);r<s.length;r++){var a=I(s[r],2),o=a[0],u=a[1];if(t(o))n.addEventListener(e(o),u);else if("class"===o){var l,c=Array.isArray(u)?u:u.split(" ");(l=n.classList).add.apply(l,w(c))}else n.setAttribute(o,u)}return n}return function(t,e){for(var s=arguments.length,a=new Array(s>2?s-2:0),u=2;u<s;u++)a[u-2]=arguments[u];if(n(t))return t(o(o({},e),{},{children:a}));var l=r(document.createElement(t),e);return a.flat().forEach((function(t){if(!1!==t){var e=H(t)?t:i(t.toString());null!==e&&l.appendChild(e)}})),l.outerHTML}}(),ns=function(){function t(e){if(l(this,t),!Q(e,"incident"))return ut.error('Journey constructor expects an Incident on its properties on the key "incident"'),!1;this.memory=e.capsuleMemory,this.stations=[],this.incident=e.incident,this.startMillisecond=1*this.incident.runTimeInfo.currentMillisecond,this.startState="".concat(this.incident.runTimeInfo.state),this.incident.stop()}return h(t,[{key:"station",value:function(t){this.stations.length>0&&this.stations[this.stations.length-1],this.stations.push(t),this.incident.playableProgress(t/this.incident.duration,t)}},{key:"destination",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;null!=t?this.station(t):t=this.stations[this.stations.length-1],this.incident.playableProgress(t/this.incident.duration,t),"playing"===this.startState||"blocked"===this.startState&&"playing"===this.incident.statusBeforeBlock?this.incident.play():t>=this.incident.duration?this.incident.complete():this.incident.arm(),this.memory.push(this.exportJourneyLog)}},{key:"exportJourneyLog",value:function(){return{startMillisecond:this.startMillisecond,startState:this.startState,stations:this.stations}}}]),t}(),is=function(){function t(){l(this,t),this.memory=[]}return h(t,[{key:"startJourney",value:function(t){return t?new ns({incident:t,capsuleMemory:this.memory}):(ut.error("startJourney expects an Incident as an argument"),!1)}}]),t}();function rs(t){if(Q(t,"default")&&(t=t.default),Q(t,"npm_name")||(t.npm_name="plugin_".concat((new Date).getTime())),!function(t){Q(t,"default")&&(t=t.default);var e=t.npm_name,n=!0;if(Q(t,"name")||ut.notice("Notice on plugin ".concat(e,'. A plugin is always good to have its name on\n        its main.js file, under the key "name". It\'s missing from this plugin')),Q(t,"version")||ut.notice("Notice on ".concat(e,". Plugin should always expose its version number on main.js file.\n      Plugin version is missing")),Q(t,"incidents")||Q(t,"Clip")||(ut.error("Error on plugin ".concat(e,'. A plugin must expose at least one Incident or a Clip.\n        Exposed plugin Incidents should be defined on the "incidents" key of the main.js file while Clips on the "Clip".')),n=!1),Q(t,"incidents")&&!Array.isArray(t.incidents))ut.error("Error on plugin ".concat(e,'. thePlugin exposed Incidents are defined on the "incidents" key of the main.js file in array format.\n        Please refer to the documentation')),n=!1;else if(Q(t,"incidents"))for(var i=0;i<t.incidents.length;i++){var r=t.incidents[i];H(r.exportable)&&Q(r.exportable,"default")&&(r.exportable=r.exportable.default);var s=r.exportable.prototype;s instanceof fr||s instanceof Qr||s instanceof Vt||s instanceof Tr||(ut.error("Error on plugin ".concat(e,". Exportable Incidents by any plugin must extend one of the base classes provided by MotorCortex.\n                ").concat(r.exportable.constructor.name," doesn't.\nPlease refer to documentation")),n=!1),s instanceof Qr&&(Q(r,"originalDims")?!1===Y(r.originalDims).result&&(ut.error("Error on plugin ".concat(e,". Invalid originalDims value passed on ").concat(r.name)),n=!1):ut.log("Warning on plugin ".concat(e,'. It\'s always good to provide originalDims\nwhen exposing Incidents extending DOMClip. By defining their original dims the users\nof your plugin will be able to define the desired dimensions of your Incident by\nthe "containerParams object"'))),Q(r,"name")||(ut.error("Error on plugin ".concat(e,'. Exportable Incidents by any plugin must have the "name" key which defines the name of the exported Incident.\nPlease refer to documentation')),n=!1)}return n}(t))return!1;var e={};if(Q(t,"Clip"))if(Q(t.Clip,"exportable")){var n,i,r,s=(i=n=function(t){p(n,t);var e=y(n);function n(){return l(this,n),e.apply(this,arguments)}return n}(Qr),d(n,"Incident",t.Clip.exportable),d(n,"plugin",t.npm_name),d(n,"version",t.version||"*"),d(n,"audio",t.audio||"off"),d(n,"customClip",!0),i);Q(t.Clip,"attributesValidationRules")&&(r=Si.compile(t.Clip.attributesValidationRules));e.Clip=function e(n,i){l(this,e);var a,o=n,u=i;if(void 0===i&&(o={},u=n),Q(t.Clip,"attributesValidationRules")){var c=r(o);if(c.length>0){for(var h="Error on plugin's \"".concat(t.npm_name,'" Clip instantiation. Errors:'),d=0;d<c.length;d++)h+="\n - ".concat(c[d].message,". ").concat(c[d].actual," provided");return ut.error(h),ut.log("breaking"),{result:!1,errors:c}}ut.log("instantiating"),(a=new s(o,u)).attrsValidationRules=t.Clip.attributesValidationRules,a.attrsValidationMethod=r}else ut.log("instantiating"),(a=new s(o,u)).attrsValidationRules=null,ut.warning("It's always good to provide attributesValidationRules to the exported incidents. ".concat(t.npm_name,".").concat(a.constructor.name," doesn't provide it"));return a}}else{var a,o,u=(o=a=function(t){p(n,t);var e=y(n);function n(){return l(this,n),e.apply(this,arguments)}return n}(Qr),d(a,"Incident",t.Clip),d(a,"plugin",t.npm_name),d(a,"version",t.version||"*"),d(a,"audio",t.audio||"off"),d(a,"customClip",!0),o);ut.warning("It's always good to provide attributesValidationRules to the exported incidents. ".concat(t.npm_name,".Clip doesn't provide it")),e.Clip=u}var c=jr;if(Q(t,"compositeAttributes")&&(c=function(e){p(i,e);var n=y(i);function i(e){return l(this,i),e.comboAttributes=t.compositeAttributes,n.call(this,e)}return i}(jr)),Q(t,"incidents"))for(var h=function(n){var i=t.incidents[n].exportable,r=null,s=null,a=!1;if(Q(t.incidents[n],"attributesValidationRules")){a=!0;var o=JSON.parse(JSON.stringify(t.incidents[n].attributesValidationRules));Q(t.incidents[n].attributesValidationRules,"animatedAttrs")&&(o.initialValues=ut.buildInitialValuesValidationRules(o.animatedAttrs)),s=o,r=Si.compile(o)}var u,h,f=void 0;if(i.prototype instanceof Vt)h=u=function(t){p(n,t);var e=y(n);function n(){return l(this,n),e.apply(this,arguments)}return n}(ts),d(u,"Incident",i),d(u,"plugin_npm_name",t.npm_name),d(u,"plugin",t.npm_name),d(u,"version",t.version||"*"),d(u,"ClassName",t.incidents[n].name),d(u,"Channel",c),d(u,"audio",t.audio||"off"),d(u,"attrsValidationRules",s),d(u,"attrsValidationMethod",r),f=h;else if(i.prototype instanceof Tr){var m,v;v=m=function(t){p(n,t);var e=y(n);function n(){return l(this,n),e.apply(this,arguments)}return n}(ts),d(m,"Incident",i),d(m,"plugin_npm_name","@kissmybutton/media-playback"),d(m,"plugin",t.npm_name),d(m,"version",t.version||"*"),d(m,"ClassName",t.incidents[n].name),d(m,"Channel",Or),d(m,"audio",t.audio?t.audio:"off"),d(m,"attrsValidationRules",s),d(m,"attrsValidationMethod",r),f=v}else if(i.prototype instanceof Qr){var g,k;k=g=function(t){p(n,t);var e=y(n);function n(){return l(this,n),e.apply(this,arguments)}return n}(i),d(g,"plugin",t.npm_name),d(g,"version",t.version||"*"),d(g,"ClassName",t.incidents[n].name),d(g,"audio",t.audio?t.audio:"on"),d(g,"originalDims",Y(t.incidents[n].originalDims).analysis),d(g,"attrsValidationRules",s),d(g,"attrsValidationMethod",r),d(g,"isAnimation",!0),f=k}else if(i.prototype instanceof fr){var b,x;x=b=function(t){p(n,t);var e=y(n);function n(){return l(this,n),e.apply(this,arguments)}return n}(i),d(b,"plugin",t.npm_name),d(b,"version",t.version||"*"),d(b,"ClassName",t.incidents[n].name),d(b,"attrsValidationRules",s),d(b,"attrsValidationMethod",r),f=x}Object.defineProperty(e,t.incidents[n].name,{enumerable:!0,get:function(){var e=function e(i,s){var o;if(l(this,e),a){var u=r(i);if(u.length>0){for(var c="Error on plugin's \"".concat(t.npm_name,'" "').concat(t.incidents[n].name,'" instantiation. Errors:'),h=0;h<u.length;h++)c+="\n - ".concat(u[h].message,". ").concat(u[h].actual," provided");return ut.error(c),{result:!1,errors:u}}}return(o=new f(i,s)).result&&!a&&ut.warning("It's always good to provide attributesValidationRules to the exported incidents. ".concat(t.npm_name," doesn't provide it")),o};return d(e,"targetClass",f),e}})},f=0;f<t.incidents.length;f++)h(f);return e}window.fs={};var ss={createDOMElement:es,easings:jt,clipFromDefinition:tr},as=rs(Dr),os=as.Clip,us=as.AudioEffect,ls=as.AudioPlayback,cs=Xr,hs={version:Kt,Effect:Vt,utils:ss,HTMLClip:Qr,Group:fr,Combo:Yr,BrowserClip:Kr,loadPlugin:rs,AudioClip:cs,CoreAudioClip:os,AudioPlayback:ls,AudioEffect:us,MediaPlayback:Tr,TimeCapsule:is};t.AudioClip=cs,t.AudioEffect=us,t.AudioPlayback=ls,t.BrowserClip=Kr,t.Combo=Yr,t.CoreAudioClip=os,t.Effect=Vt,t.Group=fr,t.HTMLClip=Qr,t.MediaPlayback=Tr,t.TimeCapsule=is,t.default=hs,t.loadPlugin=rs,t.utils=ss,Object.defineProperty(t,"__esModule",{value:!0})}));


/***/ }),

/***/ 872:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ../node_modules/@kissmybutton/motorcortex/dist/motorcortex.umd.js
var motorcortex_umd = __webpack_require__(444);
var motorcortex_umd_default = /*#__PURE__*/__webpack_require__.n(motorcortex_umd);
// EXTERNAL MODULE: ../node_modules/@kissmybutton/motorcortex-player/dist/motorcortex-player.umd.js
var motorcortex_player_umd = __webpack_require__(573);
var motorcortex_player_umd_default = /*#__PURE__*/__webpack_require__.n(motorcortex_player_umd);
// EXTERNAL MODULE: ../dist/bundle.umd.js
var bundle_umd = __webpack_require__(34);
var bundle_umd_default = /*#__PURE__*/__webpack_require__.n(bundle_umd);
;// CONCATENATED MODULE: ./data/barChartData.json
const barChartData_namespaceObject = JSON.parse('{"title":"Test Graph","subtitle":"Subtitle 2021","showGrid":true,"maxValue":1800,"data":[{"name":"JAN","value":100},{"name":"FEB","value":200},{"name":"MAR","value":300},{"name":"APR","value":400},{"name":"MAY","value":500},{"name":"JUN","value":600},{"name":"JUL","value":700},{"name":"AUG","value":800},{"name":"SEP","value":900},{"name":"OCT","value":1000},{"name":"NOV","value":1100},{"name":"DEC","value":1200}]}');
;// CONCATENATED MODULE: ./data/lineGraphData.json
const lineGraphData_namespaceObject = JSON.parse('{"title":"EXAMPLE LINE GRAPH","maxValue":100,"interval":4,"unit":"%","hover":false,"dataSets":[{"title":"Set 1","color":"red"},{"title":"Set 2","color":"blue"},{"title":"Set 3","color":""}],"data":[{"name":"2016","values":[56,45,12]},{"name":"2017","values":[43,24,67]},{"name":"2018","values":[61,11,98]},{"name":"2019","values":[10,35,69]},{"name":"2020","values":[3,81,78]},{"name":"2021","values":[74,92,59]}]}');
;// CONCATENATED MODULE: ./data/pieChartData.json
const pieChartData_namespaceObject = JSON.parse('{"title":"My Pie Chart","data":[{"name":"Percentage 1","value":50,"color":""},{"name":"Percentage 2","value":15,"color":""},{"name":"Percentage 3","value":10,"color":""},{"name":"Percentage 4","value":5,"color":"rgb(163, 255, 200)"},{"name":"Percentage 5","value":20,"color":""}]}');
;// CONCATENATED MODULE: ./data/progressMeterData.json
const progressMeterData_namespaceObject = JSON.parse('{"value":60,"unit":"%","innerFill":{"revert":false,"rotate":false}}');
;// CONCATENATED MODULE: ./data/progressBarData.json
const progressBarData_namespaceObject = JSON.parse('[{"name":"Percentage 1","value":5},{"name":"Percentage 2","value":34},{"name":"Percentage 3","value":12.298374},{"name":"Percentage 4","value":100},{"name":"Percentage 5","value":45}]');
;// CONCATENATED MODULE: ./index.js
var _timings;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var MCGraphs = motorcortex_umd_default().loadPlugin((bundle_umd_default()));
var clip = new (motorcortex_umd_default()).HTMLClip({
  html: "\n    <div class=\"container\">\n        <div id=\"htmlclip\"></div>\n        <div id=\"html-hoverclip\"></div>\n    </div>",
  css: "\n    .container{\n        width: 1024px;\n        height: 768px;\n        background: #D3CDCD;\n    }\n    .container>div{\n        width: 50%;\n        height: 50%;\n        position: absolute;\n    }\n    #htmlclip {\n        z-index: 0;\n    }   \n    #html-hoverclip {\n        z-index: 1;\n    }\n    ",
  host: document.getElementById("clip"),
  containerParams: {
    width: "1024px",
    height: "768px"
  }
});
var barChart = new MCGraphs.BarChartSimple({
  data: barChartData_namespaceObject,
  timings: {
    intro: 2000,
    static: 1500,
    outro: 2000
  },
  palette: {
    background: "#D3CDCD"
  }
}, {
  selector: "#htmlclip",
  containerParams: {
    width: "1024px",
    height: "768px"
  }
});
var lineGraph = new MCGraphs.LineGraph({
  data: lineGraphData_namespaceObject,
  trace: {
    toggle: false,
    scale: 1.45
  },
  legend: true,
  grid: false,
  timings: {
    intro: 7000,
    static: 1000,
    outro: 7000
  },
  font: {
    size: "1.7rem"
  }
}, {
  selector: "#html-hoverclip",
  containerParams: {
    width: "1024px",
    height: "768px"
  }
});
var pieChart = new MCGraphs.PieChart({
  data: pieChartData_namespaceObject,
  timings: (_timings = {
    intro: 2000,
    static: 1500
  }, _defineProperty(_timings, "static", 1000), _defineProperty(_timings, "outro", 2000), _timings),
  font: {
    size: "1.6rem"
  }
}, {
  selector: "#htmlclip",
  containerParams: {
    width: "1024px",
    height: "768px"
  }
});
var progressBar = new MCGraphs.ProgressBar({
  data: progressBarData_namespaceObject,
  timings: {
    intro: 2000,
    static: 1500,
    outro: 2000
  },
  palette: {
    background: "#D3CDCD"
  },
  font: {
    size: "1.6rem"
  }
}, {
  selector: "#htmlclip",
  containerParams: {
    width: "1024px",
    height: "768px"
  }
});
var progressMeter = new MCGraphs.ProgressMeter({
  data: progressMeterData_namespaceObject,
  innerImage: "battery",
  timings: {
    intro: 3000,
    static: 1000,
    outro: 3000
  },
  palette: {
    background: "#D3CDCD"
  },
  font: {
    size: "8rem"
  }
}, {
  selector: "#htmlclip",
  containerParams: {
    width: "1024px",
    height: "768px"
  }
});
clip.addIncident(barChart, 0);
clip.addIncident(lineGraph, 5500);
clip.addIncident(pieChart, 20500);
clip.addIncident(progressBar, 26000);
clip.addIncident(progressMeter, 31500);
var player = new (motorcortex_player_umd_default())({
  clip: clip,
  scaleToFit: true,
  pointerEvents: false
});

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

/* provided dependency */ var Promise = __webpack_require__(641);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t, e) {
  "object" == ( false ? 0 : _typeof(exports)) && "undefined" != "object" ? module.exports = e(__webpack_require__(444)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(444)], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(this, function (t) {
  "use strict";

  function e(t) {
    return t && "object" == _typeof(t) && "default" in t ? t : {
      default: t
    };
  }

  var n = e(t);

  function i(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  function a(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }

  function r(t, e, n) {
    return e && a(t.prototype, e), n && a(t, n), t;
  }

  function o(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = n, t;
  }

  function s(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), e && u(t, e);
  }

  function l(t) {
    return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    })(t);
  }

  function u(t, e) {
    return (u = Object.setPrototypeOf || function (t, e) {
      return t.__proto__ = e, t;
    })(t, e);
  }

  function c(t, e) {
    return !e || "object" != _typeof(e) && "function" != typeof e ? function (t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }(t) : e;
  }

  function h(t) {
    var e = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    }();

    return function () {
      var n,
          i = l(t);

      if (e) {
        var a = l(this).constructor;
        n = Reflect.construct(i, arguments, a);
      } else n = i.apply(this, arguments);

      return c(this, n);
    };
  }

  function d(t) {
    return function (t) {
      if (Array.isArray(t)) return f(t);
    }(t) || function (t) {
      if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t);
    }(t) || p(t) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }

  function p(t, e) {
    if (t) {
      if ("string" == typeof t) return f(t, e);
      var n = Object.prototype.toString.call(t).slice(8, -1);
      return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(t, e) : void 0;
    }
  }

  function f(t, e) {
    (null == e || e > t.length) && (e = t.length);

    for (var n = 0, i = new Array(e); n < e; n++) {
      i[n] = t[n];
    }

    return i;
  }

  var g = {
    gray: "#75706E",
    lightGray: "#B2B1AE",
    darkGray: "#434243",
    whiteBack: "#EEEEEE",
    font: "#100300",
    accent: "#FFD800",
    background: "transparent",
    dataColors: ["rgb(117,112,110)", "rgb(255,216,0)", "rgb(87,86,87)", "rgb(163, 255, 200)", "rgb(255,255,255)", "rgb(206, 36, 132)", "rgb(68, 214, 37)", "rgb(228, 31, 31)", "rgb(68, 36, 157)", "rgb(45, 109, 121)"]
  };

  function m(t, e) {
    var n = Object.keys(t);

    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(t);
      e && (i = i.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })), n.push.apply(n, i);
    }

    return n;
  }

  function y(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {};
      e % 2 ? m(Object(n), !0).forEach(function (e) {
        x(t, e, n[e]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach(function (e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
      });
    }

    return t;
  }

  function v(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  function b(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }

  function w(t, e, n) {
    return e && b(t.prototype, e), n && b(t, n), t;
  }

  function x(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = n, t;
  }

  function M(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), e && O(t, e);
  }

  function k(t) {
    return (k = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    })(t);
  }

  function O(t, e) {
    return (O = Object.setPrototypeOf || function (t, e) {
      return t.__proto__ = e, t;
    })(t, e);
  }

  function D(t, e) {
    return !e || "object" != _typeof(e) && "function" != typeof e ? function (t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }(t) : e;
  }

  function C(t) {
    var e = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    }();

    return function () {
      var n,
          i = k(t);

      if (e) {
        var a = k(this).constructor;
        n = Reflect.construct(i, arguments, a);
      } else n = i.apply(this, arguments);

      return D(this, n);
    };
  }

  var S = {},
      P = {
    duration: 1e3,
    round: 0
  },
      I = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "perspective"],
      A = {
    CSS: {}
  };

  function E(t, e, n) {
    return Math.min(Math.max(t, e), n);
  }

  function V(t, e) {
    return t.indexOf(e) > -1;
  }

  var R = {
    arr: function arr(t) {
      return Array.isArray(t);
    },
    obj: function obj(t) {
      return V(Object.prototype.toString.call(t), "Object");
    },
    pth: function pth(t) {
      return R.obj(t) && t.hasOwnProperty("totalLength");
    },
    svg: function svg(t) {
      return t instanceof SVGElement;
    },
    inp: function inp(t) {
      return t instanceof HTMLInputElement;
    },
    dom: function dom(t) {
      return t.nodeType || R.svg(t);
    },
    str: function str(t) {
      return "string" == typeof t;
    },
    fnc: function fnc(t) {
      return "function" == typeof t;
    },
    und: function und(t) {
      return void 0 === t;
    },
    hex: function hex(t) {
      return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t);
    },
    rgb: function rgb(t) {
      return /^rgb/.test(t);
    },
    hsl: function hsl(t) {
      return /^hsl/.test(t);
    },
    col: function col(t) {
      return R.hex(t) || R.rgb(t) || R.hsl(t);
    },
    key: function key(t) {
      return !S.hasOwnProperty(t) && !P.hasOwnProperty(t) && "targets" !== t && "keyframes" !== t;
    }
  },
      j = {
    linear: function linear() {
      return function (t) {
        return t;
      };
    }
  };

  function z(t, e) {
    for (var n = t.length, i = arguments.length >= 2 ? arguments[1] : void 0, a = [], r = 0; r < n; r++) {
      if (r in t) {
        var o = t[r];
        e.call(i, o, r, t) && a.push(o);
      }
    }

    return a;
  }

  function G(t) {
    return t.reduce(function (t, e) {
      return t.concat(R.arr(e) ? G(e) : e);
    }, []);
  }

  function T(t) {
    return R.arr(t) ? t : (R.str(t) && (t = function (t) {
      try {
        return document.querySelectorAll(t);
      } catch (t) {
        return;
      }
    }(t) || t), t instanceof NodeList || t instanceof HTMLCollection ? [].slice.call(t) : [t]);
  }

  function L(t, e) {
    return t.some(function (t) {
      return t === e;
    });
  }

  function N(t) {
    var e = {};

    for (var n in t) {
      e[n] = t[n];
    }

    return e;
  }

  function F(t, e) {
    var n = N(t);

    for (var i in t) {
      n[i] = e.hasOwnProperty(i) ? e[i] : t[i];
    }

    return n;
  }

  function B(t, e) {
    var n = N(t);

    for (var i in e) {
      n[i] = R.und(t[i]) ? e[i] : t[i];
    }

    return n;
  }

  function _(t) {
    return R.rgb(t) ? (n = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e = t)) ? "rgba(" + n[1] + ",1)" : e : R.hex(t) ? function (t) {
      var e = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (t, e, n, i) {
        return e + e + n + n + i + i;
      }),
          n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
      return "rgba(" + parseInt(n[1], 16) + "," + parseInt(n[2], 16) + "," + parseInt(n[3], 16) + ",1)";
    }(t) : R.hsl(t) ? function (t) {
      var e,
          n,
          i,
          a = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t),
          r = parseInt(a[1], 10) / 360,
          o = parseInt(a[2], 10) / 100,
          s = parseInt(a[3], 10) / 100,
          l = a[4] || 1;

      function u(t, e, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
      }

      if (0 == o) e = n = i = s;else {
        var c = s < .5 ? s * (1 + o) : s + o - s * o,
            h = 2 * s - c;
        e = u(h, c, r + 1 / 3), n = u(h, c, r), i = u(h, c, r - 1 / 3);
      }
      return "rgba(" + 255 * e + "," + 255 * n + "," + 255 * i + "," + l + ")";
    }(t) : void 0;
    var e, n;
  }

  function Q(t) {
    var e = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t);
    if (e) return e[1];
  }

  function H(t, e) {
    return R.fnc(t) ? t(e.target, e.id, e.total) : t;
  }

  function X(t, e) {
    return t.getAttribute(e);
  }

  function Y(t, e, n) {
    if (L([n, "deg", "rad", "turn"], Q(e))) return e;
    var i = A.CSS[e + n];
    if (!R.und(i)) return i;
    var a = document.createElement(t.tagName),
        r = t.parentNode && t.parentNode !== document ? t.parentNode : document.body;
    r.appendChild(a), a.style.position = "absolute", a.style.width = 100 + n;
    var o = 100 / a.offsetWidth;
    r.removeChild(a);
    var s = o * parseFloat(e);
    return A.CSS[e + n] = s, s;
  }

  function W(t, e, n) {
    if (e in t.style) {
      var i = e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
          a = t.style[e] || getComputedStyle(t).getPropertyValue(i) || "0";
      return n ? Y(t, a, n) : a;
    }
  }

  function q(t, e) {
    return R.dom(t) && !R.inp(t) && (X(t, e) || R.svg(t) && t[e]) ? "attribute" : R.dom(t) && L(I, e) ? "transform" : R.dom(t) && "transform" !== e && W(t, e) ? "css" : null != t[e] ? "object" : void 0;
  }

  function Z(t) {
    if (R.dom(t)) {
      for (var e, n = t.style.transform || "", i = /(\w+)\(([^)]*)\)/g, a = new Map(); e = i.exec(n);) {
        a.set(e[1], e[2]);
      }

      return a;
    }
  }

  function J(t, e, n, i) {
    var a = V(e, "scale") ? 1 : 0 + function (t) {
      return V(t, "translate") || "perspective" === t ? "px" : V(t, "rotate") || V(t, "skew") ? "deg" : void 0;
    }(e),
        r = Z(t).get(e) || a;
    return n && (n.transforms.list.set(e, r), n.transforms.last = e), i ? Y(t, r, i) : r;
  }

  function $(t, e, n, i) {
    switch (q(t, e)) {
      case "transform":
        return J(t, e, i, n);

      case "css":
        return W(t, e, n);

      case "attribute":
        return X(t, e);

      default:
        return t[e] || 0;
    }
  }

  function U(t, e) {
    var n = /^(\*=|\+=|-=)/.exec(t);
    if (!n) return t;
    var i = Q(t) || 0,
        a = parseFloat(e),
        r = parseFloat(t.replace(n[0], ""));

    switch (n[0][0]) {
      case "+":
        return a + r + i;

      case "-":
        return a - r + i;

      case "*":
        return a * r + i;
    }
  }

  function K(t, e) {
    if (R.col(t)) return _(t);
    if (/\s/g.test(t)) return t;
    var n = Q(t),
        i = n ? t.substr(0, t.length - n.length) : t;
    return e ? i + e : i;
  }

  function tt(t, e) {
    var n = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
        i = K(R.pth(t) ? t.totalLength : t, e) + "";
    return {
      original: i,
      numbers: i.match(n) ? i.match(n).map(Number) : [0],
      strings: R.str(t) || e ? i.split(n) : []
    };
  }

  function et(t) {
    var e = function (t) {
      return z(t ? G(R.arr(t) ? t.map(T) : T(t)) : [], function (t, e, n) {
        return n.indexOf(t) === e;
      });
    }(t);

    return e.map(function (t, n) {
      return {
        target: t,
        id: n,
        total: e.length,
        transforms: {
          list: Z(t)
        }
      };
    });
  }

  function nt(t, e) {
    var n = N(e);

    if (R.arr(t)) {
      var i = t.length;
      2 === i && !R.obj(t[0]) ? t = {
        value: t
      } : R.fnc(e.duration) || (n.duration = e.duration / i);
    }

    return (R.arr(t) ? t : [t]).map(function (t, e) {
      return R.obj(t) && !R.pth(t) ? t : {
        value: t
      };
    }).map(function (t) {
      return B(t, n);
    });
  }

  function it(t, e) {
    var n;
    return t.tweens.map(function (i) {
      var a = function (t, e) {
        var n = {};

        for (var i in t) {
          var a = H(t[i], e);
          R.arr(a) && 1 === (a = a.map(function (t) {
            return H(t, e);
          })).length && (a = a[0]), n[i] = a;
        }

        return n.duration = parseFloat(n.duration), n;
      }(i, e),
          r = a.value,
          o = R.arr(r) ? r[1] : r,
          s = Q(o),
          l = $(e.target, t.name, s, e),
          u = n ? n.to.original : l,
          c = R.arr(r) ? r[0] : u,
          h = Q(c) || Q(l),
          d = s || h;

      return R.und(o) && (o = u), a.from = tt(c, d), a.to = tt(U(o, c), d), a.start = n ? n.end : 0, a.end = a.start + a.duration, a.isPath = !1, a.isColor = R.col(a.from.original), a.isColor && (a.round = 1), n = a, a;
    });
  }

  var at = {
    css: function css(t, e, n) {
      return t.style[e] = n;
    },
    attribute: function attribute(t, e, n) {
      return t.setAttribute(e, n);
    },
    object: function object(t, e, n) {
      return t[e] = n;
    },
    transform: function transform(t, e, n, i, a) {
      if (i.list.set(e, n), e === i.last || a) {
        var r = "";
        i.list.forEach(function (t, e) {
          r += e + "(" + t + ") ";
        }), t.style.transform = r;
      }
    }
  };

  function rt(t, e) {
    et(t).forEach(function (t) {
      for (var n in e) {
        var i = H(e[n], t),
            a = t.target,
            r = Q(i),
            o = $(a, n, r, t),
            s = U(K(i, r || Q(o)), o),
            l = q(a, n);
        at[l](a, n, s, t.transforms, !0);
      }
    });
  }

  function ot(t, e) {
    return z(G(t.map(function (t) {
      return e.map(function (e) {
        return function (t, e) {
          var n = q(t.target, e.name);

          if (n) {
            var i = it(e, t),
                a = i[i.length - 1];
            return {
              type: n,
              property: e.name,
              animatable: t,
              tweens: i,
              duration: a.end
            };
          }
        }(t, e);
      });
    })), function (t) {
      return !R.und(t);
    });
  }

  var st = 0;

  function lt(t) {
    var e = F(S, t),
        n = F(P, t),
        i = function (t, e) {
      var n = [];

      for (var i in e) {
        R.key(i) && n.push({
          name: i,
          tweens: nt(e[i], t)
        });
      }

      return n;
    }(n, t),
        a = et(t.targets),
        r = ot(a, i),
        o = function (t, e) {
      var n = t.length,
          i = {};
      return i.duration = n ? Math.max.apply(Math, t.map(function (t) {
        return t.duration;
      })) : e.duration, i;
    }(r, n),
        s = st;

    return st++, B(e, {
      id: s,
      children: [],
      animatables: a,
      animations: r,
      duration: o.duration
    });
  }

  function ut(t) {
    void 0 === t && (t = {});
    var e,
        n = 0,
        i = null;

    function a(t) {
      var e = window.Promise && new Promise(function (t) {
        return i = t;
      });
      return t.finished = e, e;
    }

    var r = lt(t);

    function o(t, e) {
      e && e.seek(t);
    }

    function s(t) {
      var s = r.duration,
          l = t;
      r.progress = E(l / s * 100, 0, 100), r.reversePlayback = l < r.currentTime, e && function (t) {
        if (r.reversePlayback) for (var i = n; i--;) {
          o(t, e[i]);
        } else for (var a = 0; a < n; a++) {
          o(t, e[a]);
        }
      }(l), !r.began && r.currentTime > 0 && (r.began = !0), function (t) {
        for (var e = 0, n = r.animations, i = n.length; e < i;) {
          var a = n[e],
              o = a.animatable,
              s = a.tweens,
              l = s.length - 1,
              u = s[l];
          l && (u = z(s, function (e) {
            return t < e.end;
          })[0] || u);

          for (var c = E(t - u.start, 0, u.duration) / u.duration, h = u.to.strings, d = u.round, p = [], f = u.to.numbers.length, g = void 0, m = 0; m < f; m++) {
            var y = void 0,
                v = u.to.numbers[m],
                b = u.from.numbers[m] || 0;
            y = b + c * (v - b), d && (u.isColor && m > 2 || (y = Math.round(y * d) / d)), p.push(y);
          }

          var w = h.length;

          if (w) {
            g = h[0];

            for (var x = 0; x < w; x++) {
              h[x];
              var M = h[x + 1],
                  k = p[x];
              isNaN(k) || (g += M ? k + M : k + " ");
            }
          } else g = p[0];

          at[a.type](o.target, a.property, g, o.transforms), a.currentValue = g, e++;
        }
      }(l), r.currentTime = E(l, 0, s), t >= s && (r.paused = !0, r.completed || (r.completed = !0, !r.passThrough && "Promise" in window && (i(), a(r))));
    }

    return a(r), r.reset = function () {
      r.passThrough = !1, r.currentTime = 0, r.progress = 0, r.paused = !0, r.began = !1, r.completed = !1, r.reversePlayback = !1, e = r.children;

      for (var t = n = e.length; t--;) {
        r.children[t].reset();
      }
    }, r.set = function (t, e) {
      return rt(t, e), r;
    }, r.seek = function (t) {
      s(t);
    }, r.reset(), r;
  }

  function ct(t, e) {
    return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
  }

  function ht(t) {
    for (var e, n = t.points, i = 0, a = 0; a < n.numberOfItems; a++) {
      var r = n.getItem(a);
      a > 0 && (i += ct(e, r)), e = r;
    }

    return i;
  }

  function dt(t) {
    if (t.getTotalLength) return t.getTotalLength();

    switch (t.tagName.toLowerCase()) {
      case "circle":
        return function (t) {
          return 2 * Math.PI * X(t, "r");
        }(t);

      case "rect":
        return function (t) {
          return 2 * X(t, "width") + 2 * X(t, "height");
        }(t);

      case "line":
        return function (t) {
          return ct({
            x: X(t, "x1"),
            y: X(t, "y1")
          }, {
            x: X(t, "x2"),
            y: X(t, "y2")
          });
        }(t);

      case "polyline":
        return ht(t);

      case "polygon":
        return function (t) {
          var e = t.points;
          return ht(t) + ct(e.getItem(e.numberOfItems - 1), e.getItem(0));
        }(t);
    }
  }

  function pt(t, e) {
    var n = e || {},
        i = n.el || function (t) {
      for (var e = t.parentNode; R.svg(e) && R.svg(e.parentNode);) {
        e = e.parentNode;
      }

      return e;
    }(t),
        a = i.getBoundingClientRect(),
        r = X(i, "viewBox"),
        o = a.width,
        s = a.height,
        l = n.viewBox || (r ? r.split(" ") : [0, 0, o, s]);

    return {
      el: i,
      viewBox: l,
      x: l[0] / 1,
      y: l[1] / 1,
      w: o,
      h: s,
      vW: l[2],
      vH: l[3]
    };
  }

  ut.version = "3.1.0", ut.get = $, ut.set = rt, ut.convertPx = Y, ut.penner = j, ut.path = function (t) {
    return {
      el: t,
      svg: pt(t),
      totalLength: dt(t),
      deltaCorrections: {
        x: 4,
        y: 5
      }
    };
  }, ut.getPathProgress = function (t, e, n) {
    function i(n) {
      void 0 === n && (n = 0);
      var i = e * t.totalLength,
          a = i + n >= 1 ? i + n : 0;
      return t.el.getPointAtLength(a);
    }

    var a = pt(t.el, t.svg),
        r = i(),
        o = i(-1),
        s = i(1);
    return {
      x: 1 * (r.x - a.x),
      y: 1 * (r.y - a.y),
      angle: 180 * Math.atan2(s.y - o.y, s.x - o.x) / Math.PI
    };
  };
  var ft = ut,
      gt = {
    transform: ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skewX", "skewY", "perspective"]
  };
  var mt = ["cm", "mm", "in", "px", "pt", "pc", "em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "%"],
      yt = ["deg", "rad", "grad", "turn"],
      vt = "measurement",
      bt = "color",
      wt = {
    npm_name: "@kissmybutton/motorcortex-anime",
    version: "2.1.16",
    incidents: [{
      exportable: function (t) {
        M(n, t);
        var e = C(n);

        function n() {
          return v(this, n), e.apply(this, arguments);
        }

        return w(n, [{
          key: "onGetContext",
          value: function value() {
            var t = {};
            if (Object.prototype.hasOwnProperty.call(gt, this.attributeKey)) for (var e = gt[this.attributeKey], n = 0; n < e.length; n++) {
              Object.prototype.hasOwnProperty.call(this.targetValue, e[n]) && (t[e[n]] = [this.initialValue[e[n]], this.targetValue[e[n]]]);
            } else t[this.attributeKey] = [this.initialValue, this.targetValue];
            this.target = ft(y(y({
              autoplay: !1,
              duration: this.props.duration,
              easing: "linear",
              targets: this.element
            }, (this.attrs || {}).attrs || {}), t));
          }
        }, {
          key: "getScratchValue",
          value: function value() {
            if ("transform" !== this.attributeKey) return ft.get(this.element, this.attributeKey);

            for (var t = {}, e = gt[this.attributeKey], n = function (t, e) {
              var n = t.getComputedStyle(e).transform;
              return "" === n || "none" === n ? {} : function (t) {
                var e = Math.atan2(t[1], t[0]),
                    n = Math.pow(t[0], 2) + Math.pow(t[1], 2),
                    i = Math.pow(t[2], 2) + Math.pow(t[3], 2),
                    a = Math.sqrt(n),
                    r = (t[0] * t[3] - t[2] * t[1]) / a,
                    o = Math.atan2(t[0] * t[2] + t[1] * t[3], n),
                    s = Math.atan2(t[1] * t[3] + t[0] * t[2], i);
                return {
                  rotate: e / (Math.PI / 180) + "deg",
                  scaleX: a,
                  scaleY: r,
                  skewX: (1 === n ? o / (Math.PI / 180) : 0) + "deg",
                  skewY: (1 === i ? s / (Math.PI / 180) : 0) + "deg",
                  translateX: t[4] + "px",
                  translateY: t[5] + "px"
                };
              }(n.split("(")[1].split(")")[0].split(","));
            }(this.context.window, this.element), i = 0; i < e.length; i++) {
              t[e[i]] = Object.prototype.hasOwnProperty.call(n, e[i]) ? n[e[i]] : ft.get(this.element, e[i]);
            }

            return t;
          }
        }, {
          key: "onProgress",
          value: function value(t) {
            return this.target.seek(this.target.duration * t);
          }
        }]), n;
      }(n.default.Effect),
      name: "Anime",
      attributesValidationRules: {
        animatedAttrs: {
          type: "object",
          props: {
            background: {
              optional: !0,
              type: bt
            },
            backgroundColor: {
              optional: !0,
              type: bt
            },
            backgroundPosition: {
              optional: !0,
              type: "string"
            },
            backgroundSize: {
              optional: !0,
              type: "string"
            },
            border: {
              optional: !0,
              type: "string"
            },
            borderBottom: {
              optional: !0,
              type: "string"
            },
            borderBottomColor: {
              optional: !0,
              type: bt
            },
            borderBottomLeftRadius: {
              optional: !0,
              type: vt,
              units: mt
            },
            borderBottomRightRadius: {
              optional: !0,
              type: vt,
              units: mt
            },
            borderBottomWidth: {
              optional: !0,
              type: vt,
              units: mt
            },
            borderColor: {
              optional: !0,
              type: bt
            },
            borderEndEndRadius: {
              optional: !0,
              type: vt,
              units: mt
            },
            borderEndStartRadius: {
              optional: !0,
              type: vt,
              units: mt
            },
            borderImageOutset: {
              optional: !0,
              type: vt,
              units: mt,
              min: 0
            },
            borderImageSlice: {
              optional: !0,
              type: vt,
              units: mt,
              min: 0
            },
            borderImageWidth: {
              optional: !0,
              type: vt,
              units: mt,
              min: 0
            },
            borderLeft: {
              optional: !0,
              type: "string"
            },
            borderLeftColor: {
              optional: !0,
              type: bt
            },
            borderLeftWidth: {
              optional: !0,
              type: vt,
              units: mt
            },
            borderRadius: {
              optional: !0,
              type: vt,
              units: mt
            },
            borderRight: {
              optional: !0,
              type: "string"
            },
            borderRightColor: {
              optional: !0,
              type: bt
            },
            borderRightWidth: {
              optional: !0,
              type: vt,
              units: mt
            },
            borderStartEndRadius: {
              optional: !0,
              type: vt,
              units: mt
            },
            borderStartStartRadius: {
              optional: !0,
              type: vt,
              units: mt
            },
            borderTop: {
              optional: !0,
              type: "string"
            },
            borderTopColor: {
              optional: !0,
              type: bt
            },
            borderTopLeftRadius: {
              optional: !0,
              type: vt,
              units: mt
            },
            borderTopRightRadius: {
              optional: !0,
              type: vt,
              units: mt
            },
            borderTopWidth: {
              optional: !0,
              type: vt,
              units: mt
            },
            borderWidth: {
              optional: !0,
              type: vt,
              units: mt
            },
            bottom: {
              optional: !0,
              type: vt,
              units: mt
            },
            boxShadow: {
              optional: !0,
              type: "string"
            },
            caretColor: {
              optional: !0,
              type: bt
            },
            color: {
              optional: !0,
              type: bt
            },
            columnCount: {
              optional: !0,
              type: "number",
              min: 0,
              integer: !0
            },
            columnGap: {
              optional: !0,
              type: vt,
              units: mt
            },
            columnRule: {
              optional: !0,
              type: "string"
            },
            columnRuleColor: {
              optional: !0,
              type: bt
            },
            columnRuleWidth: {
              optional: !0,
              type: vt,
              units: mt
            },
            columns: {
              optional: !0,
              type: "number",
              min: 0,
              integer: !0
            },
            columnWidth: {
              optional: !0,
              type: vt,
              units: mt
            },
            flex: {
              optional: !0,
              type: "number",
              min: 0,
              integer: !0
            },
            flexBasis: {
              optional: !0,
              type: vt,
              units: mt
            },
            flexGrow: {
              optional: !0,
              type: "number",
              min: 0,
              integer: !0
            },
            flexShrink: {
              optional: !0,
              type: "number",
              min: 0,
              integer: !0
            },
            font: {
              optional: !0,
              type: "string"
            },
            fontSize: {
              optional: !0,
              type: vt,
              units: mt
            },
            fontSizeAdjust: {
              optional: !0,
              type: vt,
              units: mt,
              min: 0
            },
            fontStretch: {
              optional: !0,
              type: vt,
              units: ["%"]
            },
            fontWeight: {
              optional: !0,
              type: "string"
            },
            gap: {
              optional: !0,
              type: vt,
              units: mt
            },
            gridColumnGap: {
              optional: !0,
              type: vt,
              units: mt
            },
            gridGap: {
              optional: !0,
              type: vt,
              units: mt
            },
            gridRowGap: {
              optional: !0,
              type: vt,
              units: mt
            },
            gridTemplateColumns: {
              optional: !0,
              type: vt,
              units: mt
            },
            gridTemplateRows: {
              optional: !0,
              type: vt,
              units: mt
            },
            height: {
              optional: !0,
              type: vt,
              units: mt,
              min: 0
            },
            inset: {
              optional: !0,
              type: vt,
              units: mt,
              min: 0
            },
            insetBlock: {
              optional: !0,
              type: vt,
              units: mt
            },
            insetBlockEnd: {
              optional: !0,
              type: vt,
              units: mt
            },
            insetBlockStart: {
              optional: !0,
              type: vt,
              units: mt
            },
            insetInline: {
              optional: !0,
              type: vt,
              units: mt
            },
            insetInlineEnd: {
              optional: !0,
              type: vt,
              units: mt
            },
            insetInlineStart: {
              optional: !0,
              type: vt,
              units: mt
            },
            left: {
              optional: !0,
              type: vt,
              units: mt
            },
            letterSpacing: {
              optional: !0,
              type: vt,
              units: mt
            },
            lineClamp: {
              optional: !0,
              type: "number",
              min: 0,
              integer: !0
            },
            lineHeight: {
              optional: !0,
              type: vt,
              units: mt,
              min: 0
            },
            margin: {
              optional: !0,
              type: "string"
            },
            marginBottom: {
              optional: !0,
              type: vt,
              units: mt
            },
            marginLeft: {
              optional: !0,
              type: vt,
              units: mt
            },
            marginRight: {
              optional: !0,
              type: vt,
              units: mt
            },
            marginTop: {
              optional: !0,
              type: vt,
              units: mt
            },
            maskBorder: {
              optional: !0,
              type: vt,
              units: mt,
              min: 0
            },
            maskPosition: {
              optional: !0,
              type: "string"
            },
            maskSize: {
              optional: !0,
              type: "string"
            },
            maxHeight: {
              optional: !0,
              type: vt,
              units: mt,
              min: 0
            },
            maxWidth: {
              optional: !0,
              type: vt,
              units: mt,
              min: 0
            },
            objectPosition: {
              optional: !0,
              type: "string"
            },
            offset: {
              optional: !0,
              type: vt,
              units: mt
            },
            offsetAnchor: {
              optional: !0,
              type: "string"
            },
            offsetDistance: {
              optional: !0,
              type: vt,
              units: mt
            },
            offsetPath: {
              optional: !0,
              type: "string"
            },
            offsetPosition: {
              optional: !0,
              type: "string"
            },
            offsetRotate: {
              optional: !0,
              type: vt,
              units: yt
            },
            opacity: {
              optional: !0,
              type: "number",
              min: 0,
              max: 1
            },
            order: {
              optional: !0,
              type: "number",
              integer: !0
            },
            outline: {
              optional: !0,
              type: "string"
            },
            outlineColor: {
              optional: !0,
              type: bt
            },
            outlineOffset: {
              optional: !0,
              type: vt,
              units: mt
            },
            outlineRadius: {
              optional: !0,
              type: vt,
              units: mt
            },
            outlineRadiusBottomleft: {
              optional: !0,
              type: vt,
              units: mt
            },
            outlineRadiusBottomright: {
              optional: !0,
              type: vt,
              units: mt
            },
            outlineRadiusTopleft: {
              optional: !0,
              type: vt,
              units: mt
            },
            outlineRadiusTopright: {
              optional: !0,
              type: vt,
              units: mt
            },
            outlineWidth: {
              optional: !0,
              type: vt,
              units: mt
            },
            padding: {
              optional: !0,
              type: vt,
              units: mt
            },
            paddingBottom: {
              optional: !0,
              type: vt,
              units: mt
            },
            paddingLeft: {
              optional: !0,
              type: vt,
              units: mt
            },
            paddingRight: {
              optional: !0,
              type: vt,
              units: mt
            },
            paddingTop: {
              optional: !0,
              type: vt,
              units: mt
            },
            perspective: {
              optional: !0,
              type: vt,
              units: mt
            },
            perspectiveOrigin: {
              optional: !0,
              type: "string"
            },
            right: {
              optional: !0,
              type: vt,
              units: mt
            },
            rotate: {
              optional: !0,
              type: vt,
              units: yt
            },
            rowGap: {
              optional: !0,
              type: vt,
              units: mt
            },
            scale: {
              optional: !0,
              type: "number",
              min: 0
            },
            scrollbarColor: {
              optional: !0,
              type: bt
            },
            scrollMargin: {
              optional: !0,
              type: vt,
              units: mt
            },
            scrollMarginBlock: {
              optional: !0,
              type: vt,
              units: mt
            },
            scrollMarginBlockEnd: {
              optional: !0,
              type: vt,
              units: mt
            },
            scrollMarginBlockStart: {
              optional: !0,
              type: vt,
              units: mt
            },
            scrollMarginBottom: {
              optional: !0,
              type: vt,
              units: mt
            },
            scrollMarginInline: {
              optional: !0,
              type: vt,
              units: mt
            },
            scrollMarginInlineEnd: {
              optional: !0,
              type: vt,
              units: mt
            },
            scrollMarginInlineStart: {
              optional: !0,
              type: vt,
              units: mt
            },
            scrollMarginLeft: {
              optional: !0,
              type: vt,
              units: mt
            },
            scrollMarginRight: {
              optional: !0,
              type: vt,
              units: mt
            },
            scrollMarginTop: {
              optional: !0,
              type: vt,
              units: mt
            },
            scrollPadding: {
              optional: !0,
              type: vt,
              units: mt
            },
            scrollPaddingBlock: {
              optional: !0,
              type: vt,
              units: mt
            },
            scrollPaddingBlockEnd: {
              optional: !0,
              type: vt,
              units: mt
            },
            scrollPaddingBlockStart: {
              optional: !0,
              type: vt,
              units: mt
            },
            scrollPaddingBottom: {
              optional: !0,
              type: vt,
              units: mt
            },
            scrollPaddingInline: {
              optional: !0,
              type: vt,
              units: mt
            },
            scrollPaddingInlineEnd: {
              optional: !0,
              type: vt,
              units: mt
            },
            scrollPaddingInlineStart: {
              optional: !0,
              type: vt,
              units: mt
            },
            scrollPaddingLeft: {
              optional: !0,
              type: vt,
              units: mt
            },
            scrollPaddingRight: {
              optional: !0,
              type: vt,
              units: mt
            },
            scrollPaddingTop: {
              optional: !0,
              type: vt,
              units: mt
            },
            scrollSnapCoordinate: {
              optional: !0,
              type: "string"
            },
            scrollSnapDestination: {
              optional: !0,
              type: vt,
              units: mt
            },
            shapeImageThreshold: {
              optional: !0,
              type: "string"
            },
            shapeMargin: {
              optional: !0,
              type: vt,
              units: mt
            },
            shapeOutside: {
              optional: !0,
              type: "string"
            },
            tabSize: {
              optional: !0,
              type: "string"
            },
            textDecoration: {
              optional: !0,
              type: "string"
            },
            textDecorationColor: {
              optional: !0,
              type: bt
            },
            textDecorationThickness: {
              optional: !0,
              type: vt,
              units: mt
            },
            textEmphasis: {
              optional: !0,
              type: "string"
            },
            textEmphasisColor: {
              optional: !0,
              type: bt
            },
            textFillColor: {
              optional: !0,
              type: bt
            },
            textIndent: {
              optional: !0,
              type: vt,
              units: mt
            },
            textShadow: {
              optional: !0,
              type: "string"
            },
            textStroke: {
              optional: !0,
              type: "string"
            },
            textStrokeColor: {
              optional: !0,
              type: bt
            },
            textUnderlineOffset: {
              optional: !0,
              type: vt,
              units: mt
            },
            top: {
              optional: !0,
              type: vt,
              units: mt
            },
            transform: {
              optional: !0,
              type: "object",
              props: {
                translateX: {
                  type: vt,
                  units: mt,
                  optional: !0
                },
                translateY: {
                  type: vt,
                  units: mt,
                  optional: !0
                },
                translateZ: {
                  type: vt,
                  units: mt,
                  optional: !0
                },
                rotate: {
                  type: vt,
                  units: yt,
                  optional: !0
                },
                rotateX: {
                  type: vt,
                  units: yt,
                  optional: !0
                },
                rotateY: {
                  type: vt,
                  units: yt,
                  optional: !0
                },
                rotateZ: {
                  type: vt,
                  units: yt,
                  optional: !0
                },
                scale: {
                  type: "number",
                  min: 0,
                  optional: !0
                },
                scaleX: {
                  type: "number",
                  min: 0,
                  optional: !0
                },
                scaleY: {
                  type: "number",
                  min: 0,
                  optional: !0
                },
                scaleZ: {
                  type: "number",
                  min: 0,
                  optional: !0
                },
                skewX: {
                  type: vt,
                  units: yt,
                  optional: !0
                },
                skewY: {
                  type: vt,
                  units: yt,
                  optional: !0
                },
                perspective: {
                  type: vt,
                  units: mt,
                  optional: !0
                }
              }
            },
            transformOrigin: {
              optional: !0,
              type: "string"
            },
            verticalAlign: {
              optional: !0,
              type: "string"
            },
            visibility: {
              optional: !0,
              type: "string"
            },
            width: {
              optional: !0,
              type: vt,
              units: mt
            },
            wordSpacing: {
              optional: !0,
              type: vt,
              units: mt
            },
            zIndex: {
              optional: !0,
              type: "number",
              integer: !0
            },
            zoom: {
              optional: !0,
              type: vt,
              units: ["%"],
              min: 0
            }
          },
          transformOrigin: {
            type: "string"
          },
          verticalAlign: {
            type: "string"
          },
          visibility: {
            type: "string"
          },
          width: {
            type: vt,
            units: mt
          },
          wordSpacing: {
            type: vt,
            units: mt
          },
          zIndex: {
            type: "number",
            integer: !0
          },
          zoom: {
            type: vt,
            units: ["%"],
            min: 0
          }
        }
      }
    }, {
      exportable: function (t) {
        M(n, t);
        var e = C(n);

        function n() {
          return v(this, n), e.apply(this, arguments);
        }

        return w(n, [{
          key: "onGetContext",
          value: function value() {
            this.pixelsAccuracy = this.attrs.pixelsAccuracy || 4, this.calculatedPoints = [];
            var t = this.context.getElements(this.targetValue.pathElement)[0];
            this.path = ft.path(t), this.isPathTargetInsideSVG = this.element instanceof SVGElement;
          }
        }, {
          key: "onProgress",
          value: function value(t) {
            var e,
                n = Math.round(this.path.totalLength / this.pixelsAccuracy * t) * this.pixelsAccuracy;
            if (null !== this.calculatedPoints[n] && void 0 !== this.calculatedPoints[n]) e = this.calculatedPoints[n];else {
              var i = ft.getPathProgress(this.path, n / this.path.totalLength, this.isPathTargetInsideSVG);
              e = "\n            translateX(".concat(i.x, "px)\n            translateY(").concat(i.y, "px)\n            rotate(").concat(i.angle, "deg)\n        "), this.calculatedPoints[n] = e;
            }
            this.element.style.transform = e;
          }
        }]), n;
      }(n.default.Effect),
      name: "MotionPath",
      attributesValidationRules: {
        animatedAttrs: {
          type: "object",
          props: {
            positionOn: {
              type: "object",
              props: {
                pathElement: {
                  type: "string"
                }
              }
            }
          }
        }
      }
    }],
    compositeAttributes: gt
  },
      xt = n.default.loadPlugin(wt);

  function Mt(t, e) {
    t.addIncident(new xt.Anime({
      animatedAttrs: {
        opacity: 1
      },
      initialValues: {
        opacity: 0
      }
    }, {
      selector: e,
      duration: 1
    }), 0), t.addIncident(new xt.Anime({
      animatedAttrs: {
        opacity: 0
      }
    }, {
      selector: e,
      duration: 1
    }), t.introDur + t.staticDur + t.outroDur - 1);
  }

  function kt(t, e) {
    t.addIncident(new xt.Anime({
      animatedAttrs: {
        opacity: 1
      },
      initialValues: {
        opacity: 0
      }
    }, {
      selector: e,
      duration: 1
    }), 0), t.attrs.timings.outro || t.addIncident(new xt.Anime({
      animatedAttrs: {
        opacity: 0
      }
    }, {
      selector: e,
      duration: 1
    }), t.attrs.timings.intro + t.attrs.timings.static - 1);
  }

  function Ot() {
    return (Ot = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];

        for (var i in n) {
          Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
      }

      return t;
    }).apply(this, arguments);
  }

  var Dt = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
    return _typeof(t);
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
  },
      Ct = "object" === ("undefined" == typeof window ? "undefined" : Dt(window)) && "object" === ("undefined" == typeof document ? "undefined" : Dt(document)) && 9 === document.nodeType,
      St = "production" === "production";

  function Pt(t, e) {
    if (!St) {
      if (t) return;
      var n = "Warning: " + e;
      "undefined" != typeof console && console.warn(n);

      try {
        throw Error(n);
      } catch (t) {}
    }
  }

  function It(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }

  function At(t, e, n) {
    return e && It(t.prototype, e), n && It(t, n), t;
  }

  function Et(t, e) {
    t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
  }

  function Vt(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }

  var Rt = {}.constructor;

  function jt(t) {
    if (null == t || "object" != _typeof(t)) return t;
    if (Array.isArray(t)) return t.map(jt);
    if (t.constructor !== Rt) return t;
    var e = {};

    for (var n in t) {
      e[n] = jt(t[n]);
    }

    return e;
  }

  function zt(t, e, n) {
    void 0 === t && (t = "unnamed");
    var i = n.jss,
        a = jt(e),
        r = i.plugins.onCreateRule(t, a, n);
    return r || ("@" === t[0] && "production" !== "production" && Pt(!1, "[JSS] Unknown rule " + t), null);
  }

  var Gt = function Gt(t, e) {
    for (var n = "", i = 0; i < t.length && "!important" !== t[i]; i++) {
      n && (n += e), n += t[i];
    }

    return n;
  },
      Tt = function Tt(t, e) {
    if (void 0 === e && (e = !1), !Array.isArray(t)) return t;
    var n = "";
    if (Array.isArray(t[0])) for (var i = 0; i < t.length && "!important" !== t[i]; i++) {
      n && (n += ", "), n += Gt(t[i], " ");
    } else n = Gt(t, ", ");
    return e || "!important" !== t[t.length - 1] || (n += " !important"), n;
  };

  function Lt(t, e) {
    for (var n = "", i = 0; i < e; i++) {
      n += "  ";
    }

    return n + t;
  }

  function Nt(t, e, n) {
    void 0 === n && (n = {});
    var i = "";
    if (!e) return i;
    var a = n.indent,
        r = void 0 === a ? 0 : a,
        o = e.fallbacks;
    if (t && r++, o) if (Array.isArray(o)) for (var s = 0; s < o.length; s++) {
      var l = o[s];

      for (var u in l) {
        var c = l[u];
        null != c && (i && (i += "\n"), i += "" + Lt(u + ": " + Tt(c) + ";", r));
      }
    } else for (var h in o) {
      var d = o[h];
      null != d && (i && (i += "\n"), i += "" + Lt(h + ": " + Tt(d) + ";", r));
    }

    for (var p in e) {
      var f = e[p];
      null != f && "fallbacks" !== p && (i && (i += "\n"), i += "" + Lt(p + ": " + Tt(f) + ";", r));
    }

    return (i || n.allowEmpty) && t ? (i && (i = "\n" + i + "\n"), Lt(t + " {" + i, --r) + Lt("}", r)) : i;
  }

  var Ft = /([[\].#*$><+~=|^:(),"'`\s])/g,
      Bt = "undefined" != typeof CSS && CSS.escape,
      _t = function _t(t) {
    return Bt ? Bt(t) : t.replace(Ft, "\\$1");
  },
      Qt = function () {
    function t(t, e, n) {
      this.type = "style", this.key = void 0, this.isProcessed = !1, this.style = void 0, this.renderer = void 0, this.renderable = void 0, this.options = void 0;
      var i = n.sheet,
          a = n.Renderer;
      this.key = t, this.options = n, this.style = e, i ? this.renderer = i.renderer : a && (this.renderer = new a());
    }

    return t.prototype.prop = function (t, e, n) {
      if (void 0 === e) return this.style[t];
      var i = !!n && n.force;
      if (!i && this.style[t] === e) return this;
      var a = e;
      n && !1 === n.process || (a = this.options.jss.plugins.onChangeValue(e, t, this));
      var r = null == a || !1 === a,
          o = (t in this.style);
      if (r && !o && !i) return this;
      var s = r && o;
      if (s ? delete this.style[t] : this.style[t] = a, this.renderable && this.renderer) return s ? this.renderer.removeProperty(this.renderable, t) : this.renderer.setProperty(this.renderable, t, a), this;
      var l = this.options.sheet;
      return l && l.attached && "production" !== "production" && Pt(!1, '[JSS] Rule is not linked. Missing sheet option "link: true".'), this;
    }, t;
  }(),
      Ht = function (t) {
    function e(e, n, i) {
      var a;
      (a = t.call(this, e, n, i) || this).selectorText = void 0, a.id = void 0, a.renderable = void 0;
      var r = i.selector,
          o = i.scoped,
          s = i.sheet,
          l = i.generateId;
      return r ? a.selectorText = r : !1 !== o && (a.id = l(Vt(Vt(a)), s), a.selectorText = "." + _t(a.id)), a;
    }

    Et(e, t);
    var n = e.prototype;
    return n.applyTo = function (t) {
      var e = this.renderer;

      if (e) {
        var n = this.toJSON();

        for (var i in n) {
          e.setProperty(t, i, n[i]);
        }
      }

      return this;
    }, n.toJSON = function () {
      var t = {};

      for (var e in this.style) {
        var n = this.style[e];
        "object" != _typeof(n) ? t[e] = n : Array.isArray(n) && (t[e] = Tt(n));
      }

      return t;
    }, n.toString = function (t) {
      var e = this.options.sheet,
          n = !!e && e.options.link ? Ot({}, t, {
        allowEmpty: !0
      }) : t;
      return Nt(this.selectorText, this.style, n);
    }, At(e, [{
      key: "selector",
      set: function set(t) {
        if (t !== this.selectorText) {
          this.selectorText = t;
          var e = this.renderer,
              n = this.renderable;
          if (n && e) e.setSelector(n, t) || e.replaceRule(n, this);
        }
      },
      get: function get() {
        return this.selectorText;
      }
    }]), e;
  }(Qt),
      Xt = {
    onCreateRule: function onCreateRule(t, e, n) {
      return "@" === t[0] || n.parent && "keyframes" === n.parent.type ? null : new Ht(t, e, n);
    }
  },
      Yt = {
    indent: 1,
    children: !0
  },
      Wt = /@([\w-]+)/,
      qt = function () {
    function t(t, e, n) {
      this.type = "conditional", this.at = void 0, this.key = void 0, this.query = void 0, this.rules = void 0, this.options = void 0, this.isProcessed = !1, this.renderable = void 0, this.key = t;
      var i = t.match(Wt);

      for (var a in this.at = i ? i[1] : "unknown", this.query = n.name || "@" + this.at, this.options = n, this.rules = new ye(Ot({}, n, {
        parent: this
      })), e) {
        this.rules.add(a, e[a]);
      }

      this.rules.process();
    }

    var e = t.prototype;
    return e.getRule = function (t) {
      return this.rules.get(t);
    }, e.indexOf = function (t) {
      return this.rules.indexOf(t);
    }, e.addRule = function (t, e, n) {
      var i = this.rules.add(t, e, n);
      return i ? (this.options.jss.plugins.onProcessRule(i), i) : null;
    }, e.toString = function (t) {
      if (void 0 === t && (t = Yt), null == t.indent && (t.indent = Yt.indent), null == t.children && (t.children = Yt.children), !1 === t.children) return this.query + " {}";
      var e = this.rules.toString(t);
      return e ? this.query + " {\n" + e + "\n}" : "";
    }, t;
  }(),
      Zt = /@media|@supports\s+/,
      Jt = {
    onCreateRule: function onCreateRule(t, e, n) {
      return Zt.test(t) ? new qt(t, e, n) : null;
    }
  },
      $t = {
    indent: 1,
    children: !0
  },
      Ut = /@keyframes\s+([\w-]+)/,
      Kt = function () {
    function t(t, e, n) {
      this.type = "keyframes", this.at = "@keyframes", this.key = void 0, this.name = void 0, this.id = void 0, this.rules = void 0, this.options = void 0, this.isProcessed = !1, this.renderable = void 0;
      var i = t.match(Ut);
      i && i[1] ? this.name = i[1] : (this.name = "noname",  false && 0), this.key = this.type + "-" + this.name, this.options = n;
      var a = n.scoped,
          r = n.sheet,
          o = n.generateId;

      for (var s in this.id = !1 === a ? this.name : _t(o(this, r)), this.rules = new ye(Ot({}, n, {
        parent: this
      })), e) {
        this.rules.add(s, e[s], Ot({}, n, {
          parent: this
        }));
      }

      this.rules.process();
    }

    return t.prototype.toString = function (t) {
      if (void 0 === t && (t = $t), null == t.indent && (t.indent = $t.indent), null == t.children && (t.children = $t.children), !1 === t.children) return this.at + " " + this.id + " {}";
      var e = this.rules.toString(t);
      return e && (e = "\n" + e + "\n"), this.at + " " + this.id + " {" + e + "}";
    }, t;
  }(),
      te = /@keyframes\s+/,
      ee = /\$([\w-]+)/g,
      ne = function ne(t, e) {
    return "string" == typeof t ? t.replace(ee, function (t, n) {
      return n in e ? e[n] : ( false && 0, t);
    }) : t;
  },
      ie = function ie(t, e, n) {
    var i = t[e],
        a = ne(i, n);
    a !== i && (t[e] = a);
  },
      ae = {
    onCreateRule: function onCreateRule(t, e, n) {
      return "string" == typeof t && te.test(t) ? new Kt(t, e, n) : null;
    },
    onProcessStyle: function onProcessStyle(t, e, n) {
      return "style" === e.type && n ? ("animation-name" in t && ie(t, "animation-name", n.keyframes), "animation" in t && ie(t, "animation", n.keyframes), t) : t;
    },
    onChangeValue: function onChangeValue(t, e, n) {
      var i = n.options.sheet;
      if (!i) return t;

      switch (e) {
        case "animation":
        case "animation-name":
          return ne(t, i.keyframes);

        default:
          return t;
      }
    }
  },
      re = function (t) {
    function e() {
      for (var e, n = arguments.length, i = new Array(n), a = 0; a < n; a++) {
        i[a] = arguments[a];
      }

      return (e = t.call.apply(t, [this].concat(i)) || this).renderable = void 0, e;
    }

    return Et(e, t), e.prototype.toString = function (t) {
      var e = this.options.sheet,
          n = !!e && e.options.link ? Ot({}, t, {
        allowEmpty: !0
      }) : t;
      return Nt(this.key, this.style, n);
    }, e;
  }(Qt),
      oe = {
    onCreateRule: function onCreateRule(t, e, n) {
      return n.parent && "keyframes" === n.parent.type ? new re(t, e, n) : null;
    }
  },
      se = function () {
    function t(t, e, n) {
      this.type = "font-face", this.at = "@font-face", this.key = void 0, this.style = void 0, this.options = void 0, this.isProcessed = !1, this.renderable = void 0, this.key = t, this.style = e, this.options = n;
    }

    return t.prototype.toString = function (t) {
      if (Array.isArray(this.style)) {
        for (var e = "", n = 0; n < this.style.length; n++) {
          e += Nt(this.at, this.style[n]), this.style[n + 1] && (e += "\n");
        }

        return e;
      }

      return Nt(this.at, this.style, t);
    }, t;
  }(),
      le = /@font-face/,
      ue = {
    onCreateRule: function onCreateRule(t, e, n) {
      return le.test(t) ? new se(t, e, n) : null;
    }
  },
      ce = function () {
    function t(t, e, n) {
      this.type = "viewport", this.at = "@viewport", this.key = void 0, this.style = void 0, this.options = void 0, this.isProcessed = !1, this.renderable = void 0, this.key = t, this.style = e, this.options = n;
    }

    return t.prototype.toString = function (t) {
      return Nt(this.key, this.style, t);
    }, t;
  }(),
      he = {
    onCreateRule: function onCreateRule(t, e, n) {
      return "@viewport" === t || "@-ms-viewport" === t ? new ce(t, e, n) : null;
    }
  },
      de = function () {
    function t(t, e, n) {
      this.type = "simple", this.key = void 0, this.value = void 0, this.options = void 0, this.isProcessed = !1, this.renderable = void 0, this.key = t, this.value = e, this.options = n;
    }

    return t.prototype.toString = function (t) {
      if (Array.isArray(this.value)) {
        for (var e = "", n = 0; n < this.value.length; n++) {
          e += this.key + " " + this.value[n] + ";", this.value[n + 1] && (e += "\n");
        }

        return e;
      }

      return this.key + " " + this.value + ";";
    }, t;
  }(),
      pe = {
    "@charset": !0,
    "@import": !0,
    "@namespace": !0
  },
      fe = [Xt, Jt, ae, oe, ue, he, {
    onCreateRule: function onCreateRule(t, e, n) {
      return t in pe ? new de(t, e, n) : null;
    }
  }],
      ge = {
    process: !0
  },
      me = {
    force: !0,
    process: !0
  },
      ye = function () {
    function t(t) {
      this.map = {}, this.raw = {}, this.index = [], this.counter = 0, this.options = void 0, this.classes = void 0, this.keyframes = void 0, this.options = t, this.classes = t.classes, this.keyframes = t.keyframes;
    }

    var e = t.prototype;
    return e.add = function (t, e, n) {
      var i = this.options,
          a = i.parent,
          r = i.sheet,
          o = i.jss,
          s = i.Renderer,
          l = i.generateId,
          u = i.scoped,
          c = Ot({
        classes: this.classes,
        parent: a,
        sheet: r,
        jss: o,
        Renderer: s,
        generateId: l,
        scoped: u,
        name: t,
        keyframes: this.keyframes,
        selector: void 0
      }, n),
          h = t;
      t in this.raw && (h = t + "-d" + this.counter++), this.raw[h] = e, h in this.classes && (c.selector = "." + _t(this.classes[h]));
      var d = zt(h, e, c);
      if (!d) return null;
      this.register(d);
      var p = void 0 === c.index ? this.index.length : c.index;
      return this.index.splice(p, 0, d), d;
    }, e.get = function (t) {
      return this.map[t];
    }, e.remove = function (t) {
      this.unregister(t), delete this.raw[t.key], this.index.splice(this.index.indexOf(t), 1);
    }, e.indexOf = function (t) {
      return this.index.indexOf(t);
    }, e.process = function () {
      var t = this.options.jss.plugins;
      this.index.slice(0).forEach(t.onProcessRule, t);
    }, e.register = function (t) {
      this.map[t.key] = t, t instanceof Ht ? (this.map[t.selector] = t, t.id && (this.classes[t.key] = t.id)) : t instanceof Kt && this.keyframes && (this.keyframes[t.name] = t.id);
    }, e.unregister = function (t) {
      delete this.map[t.key], t instanceof Ht ? (delete this.map[t.selector], delete this.classes[t.key]) : t instanceof Kt && delete this.keyframes[t.name];
    }, e.update = function () {
      var t, e, n;
      if ("string" == typeof (arguments.length <= 0 ? void 0 : arguments[0]) ? (t = arguments.length <= 0 ? void 0 : arguments[0], e = arguments.length <= 1 ? void 0 : arguments[1], n = arguments.length <= 2 ? void 0 : arguments[2]) : (e = arguments.length <= 0 ? void 0 : arguments[0], n = arguments.length <= 1 ? void 0 : arguments[1], t = null), t) this.updateOne(this.map[t], e, n);else for (var i = 0; i < this.index.length; i++) {
        this.updateOne(this.index[i], e, n);
      }
    }, e.updateOne = function (e, n, i) {
      void 0 === i && (i = ge);
      var a = this.options,
          r = a.jss.plugins,
          o = a.sheet;
      if (e.rules instanceof t) e.rules.update(n, i);else {
        var s = e,
            l = s.style;

        if (r.onUpdate(n, e, o, i), i.process && l && l !== s.style) {
          for (var u in r.onProcessStyle(s.style, s, o), s.style) {
            var c = s.style[u];
            c !== l[u] && s.prop(u, c, me);
          }

          for (var h in l) {
            var d = s.style[h],
                p = l[h];
            null == d && d !== p && s.prop(h, null, me);
          }
        }
      }
    }, e.toString = function (t) {
      for (var e = "", n = this.options.sheet, i = !!n && n.options.link, a = 0; a < this.index.length; a++) {
        var r = this.index[a].toString(t);
        (r || i) && (e && (e += "\n"), e += r);
      }

      return e;
    }, t;
  }(),
      ve = function () {
    function t(t, e) {
      for (var n in this.options = void 0, this.deployed = void 0, this.attached = void 0, this.rules = void 0, this.renderer = void 0, this.classes = void 0, this.keyframes = void 0, this.queue = void 0, this.attached = !1, this.deployed = !1, this.classes = {}, this.keyframes = {}, this.options = Ot({}, e, {
        sheet: this,
        parent: this,
        classes: this.classes,
        keyframes: this.keyframes
      }), e.Renderer && (this.renderer = new e.Renderer(this)), this.rules = new ye(this.options), t) {
        this.rules.add(n, t[n]);
      }

      this.rules.process();
    }

    var e = t.prototype;
    return e.attach = function () {
      return this.attached || (this.renderer && this.renderer.attach(), this.attached = !0, this.deployed || this.deploy()), this;
    }, e.detach = function () {
      return this.attached ? (this.renderer && this.renderer.detach(), this.attached = !1, this) : this;
    }, e.addRule = function (t, e, n) {
      var i = this.queue;
      this.attached && !i && (this.queue = []);
      var a = this.rules.add(t, e, n);
      return a ? (this.options.jss.plugins.onProcessRule(a), this.attached ? this.deployed ? (i ? i.push(a) : (this.insertRule(a), this.queue && (this.queue.forEach(this.insertRule, this), this.queue = void 0)), a) : a : (this.deployed = !1, a)) : null;
    }, e.insertRule = function (t) {
      this.renderer && this.renderer.insertRule(t);
    }, e.addRules = function (t, e) {
      var n = [];

      for (var i in t) {
        var a = this.addRule(i, t[i], e);
        a && n.push(a);
      }

      return n;
    }, e.getRule = function (t) {
      return this.rules.get(t);
    }, e.deleteRule = function (t) {
      var e = "object" == _typeof(t) ? t : this.rules.get(t);
      return !(!e || this.attached && !e.renderable) && (this.rules.remove(e), !(this.attached && e.renderable && this.renderer) || this.renderer.deleteRule(e.renderable));
    }, e.indexOf = function (t) {
      return this.rules.indexOf(t);
    }, e.deploy = function () {
      return this.renderer && this.renderer.deploy(), this.deployed = !0, this;
    }, e.update = function () {
      var t;
      return (t = this.rules).update.apply(t, arguments), this;
    }, e.updateOne = function (t, e, n) {
      return this.rules.updateOne(t, e, n), this;
    }, e.toString = function (t) {
      return this.rules.toString(t);
    }, t;
  }(),
      be = function () {
    function t() {
      this.plugins = {
        internal: [],
        external: []
      }, this.registry = void 0;
    }

    var e = t.prototype;
    return e.onCreateRule = function (t, e, n) {
      for (var i = 0; i < this.registry.onCreateRule.length; i++) {
        var a = this.registry.onCreateRule[i](t, e, n);
        if (a) return a;
      }

      return null;
    }, e.onProcessRule = function (t) {
      if (!t.isProcessed) {
        for (var e = t.options.sheet, n = 0; n < this.registry.onProcessRule.length; n++) {
          this.registry.onProcessRule[n](t, e);
        }

        t.style && this.onProcessStyle(t.style, t, e), t.isProcessed = !0;
      }
    }, e.onProcessStyle = function (t, e, n) {
      for (var i = 0; i < this.registry.onProcessStyle.length; i++) {
        e.style = this.registry.onProcessStyle[i](e.style, e, n);
      }
    }, e.onProcessSheet = function (t) {
      for (var e = 0; e < this.registry.onProcessSheet.length; e++) {
        this.registry.onProcessSheet[e](t);
      }
    }, e.onUpdate = function (t, e, n, i) {
      for (var a = 0; a < this.registry.onUpdate.length; a++) {
        this.registry.onUpdate[a](t, e, n, i);
      }
    }, e.onChangeValue = function (t, e, n) {
      for (var i = t, a = 0; a < this.registry.onChangeValue.length; a++) {
        i = this.registry.onChangeValue[a](i, e, n);
      }

      return i;
    }, e.use = function (t, e) {
      void 0 === e && (e = {
        queue: "external"
      });
      var n = this.plugins[e.queue];
      -1 === n.indexOf(t) && (n.push(t), this.registry = [].concat(this.plugins.external, this.plugins.internal).reduce(function (t, e) {
        for (var n in e) {
          n in t ? t[n].push(e[n]) :  false && 0;
        }

        return t;
      }, {
        onCreateRule: [],
        onProcessRule: [],
        onProcessStyle: [],
        onProcessSheet: [],
        onChangeValue: [],
        onUpdate: []
      }));
    }, t;
  }(),
      we = new (function () {
    function t() {
      this.registry = [];
    }

    var e = t.prototype;
    return e.add = function (t) {
      var e = this.registry,
          n = t.options.index;
      if (-1 === e.indexOf(t)) if (0 === e.length || n >= this.index) e.push(t);else for (var i = 0; i < e.length; i++) {
        if (e[i].options.index > n) return void e.splice(i, 0, t);
      }
    }, e.reset = function () {
      this.registry = [];
    }, e.remove = function (t) {
      var e = this.registry.indexOf(t);
      this.registry.splice(e, 1);
    }, e.toString = function (t) {
      for (var e = void 0 === t ? {} : t, n = e.attached, i = function (t, e) {
        if (null == t) return {};
        var n,
            i,
            a = {},
            r = Object.keys(t);

        for (i = 0; i < r.length; i++) {
          n = r[i], e.indexOf(n) >= 0 || (a[n] = t[n]);
        }

        return a;
      }(e, ["attached"]), a = "", r = 0; r < this.registry.length; r++) {
        var o = this.registry[r];
        null != n && o.attached !== n || (a && (a += "\n"), a += o.toString(i));
      }

      return a;
    }, At(t, [{
      key: "index",
      get: function get() {
        return 0 === this.registry.length ? 0 : this.registry[this.registry.length - 1].options.index;
      }
    }]), t;
  }())(),
      xe = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(),
      Me = "2f1acc6c3a606b082e5eef5e54414ffb";

  null == xe[Me] && (xe[Me] = 0);

  var ke = xe[Me]++,
      Oe = function Oe(t) {
    void 0 === t && (t = {});
    var e = 0;
    return function (n, i) {
      (e += 1) > 1e10 && "production" !== "production" && Pt(!1, "[JSS] You might have a memory leak. Rule counter is at " + e + ".");
      var a = "",
          r = "";
      return i && (i.options.classNamePrefix && (r = i.options.classNamePrefix), null != i.options.jss.id && (a = String(i.options.jss.id))), t.minify ? "" + (r || "c") + ke + a + e : r + n.key + "-" + ke + (a ? "-" + a : "") + "-" + e;
    };
  },
      De = function De(t) {
    var e;
    return function () {
      return e || (e = t()), e;
    };
  },
      Ce = function Ce(t, e) {
    try {
      return t.attributeStyleMap ? t.attributeStyleMap.get(e) : t.style.getPropertyValue(e);
    } catch (t) {
      return "";
    }
  },
      Se = function Se(t, e, n) {
    try {
      var i = n;
      if (Array.isArray(n) && (i = Tt(n, !0), "!important" === n[n.length - 1])) return t.style.setProperty(e, i, "important"), !0;
      t.attributeStyleMap ? t.attributeStyleMap.set(e, i) : t.style.setProperty(e, i);
    } catch (t) {
      return !1;
    }

    return !0;
  },
      Pe = function Pe(t, e) {
    try {
      t.attributeStyleMap ? t.attributeStyleMap.delete(e) : t.style.removeProperty(e);
    } catch (t) {
       false && 0;
    }
  },
      Ie = function Ie(t, e) {
    return t.selectorText = e, t.selectorText === e;
  },
      Ae = De(function () {
    return document.querySelector("head");
  });

  function Ee(t) {
    var e = we.registry;

    if (e.length > 0) {
      var n = function (t, e) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          if (i.attached && i.options.index > e.index && i.options.insertionPoint === e.insertionPoint) return i;
        }

        return null;
      }(e, t);

      if (n && n.renderer) return {
        parent: n.renderer.element.parentNode,
        node: n.renderer.element
      };
      if ((n = function (t, e) {
        for (var n = t.length - 1; n >= 0; n--) {
          var i = t[n];
          if (i.attached && i.options.insertionPoint === e.insertionPoint) return i;
        }

        return null;
      }(e, t)) && n.renderer) return {
        parent: n.renderer.element.parentNode,
        node: n.renderer.element.nextSibling
      };
    }

    var i = t.insertionPoint;

    if (i && "string" == typeof i) {
      var a = function (t) {
        for (var e = Ae(), n = 0; n < e.childNodes.length; n++) {
          var i = e.childNodes[n];
          if (8 === i.nodeType && i.nodeValue.trim() === t) return i;
        }

        return null;
      }(i);

      if (a) return {
        parent: a.parentNode,
        node: a.nextSibling
      };
       false && 0;
    }

    return !1;
  }

  var Ve,
      Re = De(function () {
    var t = document.querySelector('meta[property="csp-nonce"]');
    return t ? t.getAttribute("content") : null;
  }),
      je = function je(t, e, n) {
    try {
      if ("insertRule" in t) t.insertRule(e, n);else if ("appendRule" in t) {
        t.appendRule(e);
      }
    } catch (t) {
      return  false && 0, !1;
    }

    return t.cssRules[n];
  },
      ze = function ze(t, e) {
    var n = t.cssRules.length;
    return void 0 === e || e > n ? n : e;
  },
      Ge = function () {
    function t(t) {
      this.getPropertyValue = Ce, this.setProperty = Se, this.removeProperty = Pe, this.setSelector = Ie, this.element = void 0, this.sheet = void 0, this.hasInsertedRules = !1, this.cssRules = [], t && we.add(t), this.sheet = t;
      var e,
          n = this.sheet ? this.sheet.options : {},
          i = n.media,
          a = n.meta,
          r = n.element;
      this.element = r || ((e = document.createElement("style")).textContent = "\n", e), this.element.setAttribute("data-jss", ""), i && this.element.setAttribute("media", i), a && this.element.setAttribute("data-meta", a);
      var o = Re();
      o && this.element.setAttribute("nonce", o);
    }

    var e = t.prototype;
    return e.attach = function () {
      if (!this.element.parentNode && this.sheet) {
        !function (t, e) {
          var n = e.insertionPoint,
              i = Ee(e);
          if (!1 !== i && i.parent) i.parent.insertBefore(t, i.node);else if (n && "number" == typeof n.nodeType) {
            var a = n,
                r = a.parentNode;
            r ? r.insertBefore(t, a.nextSibling) :  false && 0;
          } else Ae().appendChild(t);
        }(this.element, this.sheet.options);
        var t = Boolean(this.sheet && this.sheet.deployed);
        this.hasInsertedRules && t && (this.hasInsertedRules = !1, this.deploy());
      }
    }, e.detach = function () {
      if (this.sheet) {
        var t = this.element.parentNode;
        t && t.removeChild(this.element), this.sheet.options.link && (this.cssRules = [], this.element.textContent = "\n");
      }
    }, e.deploy = function () {
      var t = this.sheet;
      t && (t.options.link ? this.insertRules(t.rules) : this.element.textContent = "\n" + t.toString() + "\n");
    }, e.insertRules = function (t, e) {
      for (var n = 0; n < t.index.length; n++) {
        this.insertRule(t.index[n], n, e);
      }
    }, e.insertRule = function (t, e, n) {
      if (void 0 === n && (n = this.element.sheet), t.rules) {
        var i = t,
            a = n;

        if ("conditional" === t.type || "keyframes" === t.type) {
          var r = ze(n, e);
          if (!1 === (a = je(n, i.toString({
            children: !1
          }), r))) return !1;
          this.refCssRule(t, r, a);
        }

        return this.insertRules(i.rules, a), a;
      }

      var o = t.toString();
      if (!o) return !1;
      var s = ze(n, e),
          l = je(n, o, s);
      return !1 !== l && (this.hasInsertedRules = !0, this.refCssRule(t, s, l), l);
    }, e.refCssRule = function (t, e, n) {
      t.renderable = n, t.options.parent instanceof ve && (this.cssRules[e] = n);
    }, e.deleteRule = function (t) {
      var e = this.element.sheet,
          n = this.indexOf(t);
      return -1 !== n && (e.deleteRule(n), this.cssRules.splice(n, 1), !0);
    }, e.indexOf = function (t) {
      return this.cssRules.indexOf(t);
    }, e.replaceRule = function (t, e) {
      var n = this.indexOf(t);
      return -1 !== n && (this.element.sheet.deleteRule(n), this.cssRules.splice(n, 1), this.insertRule(e, n));
    }, e.getRules = function () {
      return this.element.sheet.cssRules;
    }, t;
  }(),
      Te = 0,
      Le = new (function () {
    function t(t) {
      this.id = Te++, this.version = "10.5.1", this.plugins = new be(), this.options = {
        id: {
          minify: !1
        },
        createGenerateId: Oe,
        Renderer: Ct ? Ge : null,
        plugins: []
      }, this.generateId = Oe({
        minify: !1
      });

      for (var e = 0; e < fe.length; e++) {
        this.plugins.use(fe[e], {
          queue: "internal"
        });
      }

      this.setup(t);
    }

    var e = t.prototype;
    return e.setup = function (t) {
      return void 0 === t && (t = {}), t.createGenerateId && (this.options.createGenerateId = t.createGenerateId), t.id && (this.options.id = Ot({}, this.options.id, t.id)), (t.createGenerateId || t.id) && (this.generateId = this.options.createGenerateId(this.options.id)), null != t.insertionPoint && (this.options.insertionPoint = t.insertionPoint), "Renderer" in t && (this.options.Renderer = t.Renderer), t.plugins && this.use.apply(this, t.plugins), this;
    }, e.createStyleSheet = function (t, e) {
      void 0 === e && (e = {});
      var n = e.index;
      "number" != typeof n && (n = 0 === we.index ? 0 : we.index + 1);
      var i = new ve(t, Ot({}, e, {
        jss: this,
        generateId: e.generateId || this.generateId,
        insertionPoint: this.options.insertionPoint,
        Renderer: this.options.Renderer,
        index: n
      }));
      return this.plugins.onProcessSheet(i), i;
    }, e.removeStyleSheet = function (t) {
      return t.detach(), we.remove(t), this;
    }, e.createRule = function (t, e, n) {
      if (void 0 === e && (e = {}), void 0 === n && (n = {}), "object" == _typeof(t)) return this.createRule(void 0, t, e);
      var i = Ot({}, n, {
        name: t,
        jss: this,
        Renderer: this.options.Renderer
      });
      i.generateId || (i.generateId = this.generateId), i.classes || (i.classes = {}), i.keyframes || (i.keyframes = {});
      var a = zt(t, e, i);
      return a && this.plugins.onProcessRule(a), a;
    }, e.use = function () {
      for (var t = this, e = arguments.length, n = new Array(e), i = 0; i < e; i++) {
        n[i] = arguments[i];
      }

      return n.forEach(function (e) {
        t.plugins.use(e);
      }), this;
    }, t;
  }())(Ve);

  var Ne = n.default.loadPlugin(wt),
      Fe = function (t) {
    s(a, t);
    var e = h(a);

    function a() {
      return i(this, a), e.apply(this, arguments);
    }

    return r(a, [{
      key: "html",
      get: function get() {
        var t = this;
        this.buildVars();
        var e = [];

        for (var i in this.title) {
          var a = [];
          " " === this.title[i] ? a.push(n.default.utils.createDOMElement("div", {
            class: "space-char letter-wrapper"
          }, "-")) : a.push(n.default.utils.createDOMElement("div", {
            class: "fontColorOn letter-wrapper"
          }, this.title[i])), e.push(n.default.utils.createDOMElement("div", {
            id: "letter-" + i,
            class: "letter-container"
          }, a));
        }

        var r = [];

        for (var o in this.subtitle) {
          var s = [];
          " " === this.subtitle[o] ? s.push(n.default.utils.createDOMElement("div", {
            class: "space-char letter-wrapper"
          }, "-")) : s.push(n.default.utils.createDOMElement("div", {
            class: "fontColorOn letter-wrapper"
          }, this.subtitle[o])), r.push(n.default.utils.createDOMElement("div", {
            id: "letter-" + o,
            class: "letter-container"
          }, s));
        }

        for (var l = [], u = 0; u < this.gridLinesNum; u++) {
          l.push(n.default.utils.createDOMElement("div", {
            class: "gridLine",
            id: "gridLine" + u
          }));
        }

        var c = [];

        for (var h in this.data) {
          var d = [];

          for (var p in this.data[h].name.length > 4 && (this.data[h].name = this.data[h].name.slice(0, 4)), this.data[h].name) {
            d.push(n.default.utils.createDOMElement("div", {
              id: "letter-" + h + "-" + p,
              class: "letter-container"
            }, n.default.utils.createDOMElement("div", {
              class: "letter-wrapper fontColorOn"
            }, this.data[h].name[p])));
          }

          c.push(n.default.utils.createDOMElement("div", {
            class: "label-container",
            id: "label-" + h
          }, d));
        }

        var f = this.data.map(function (e, i) {
          return t.maxPoint = t.maxPoint < e.value ? e.value : t.maxPoint, n.default.utils.createDOMElement("div", {
            class: e.name + "-bar-".concat(i)
          }, n.default.utils.createDOMElement("div", {
            class: "bar-fill",
            id: e.name + "-bar-fill"
          }));
        });
        return this.maxPoint = this.attrs.data.maxValue ? this.attrs.data.maxValue : this.maxPoint, n.default.utils.createDOMElement("div", {
          class: "container-barChart"
        }, n.default.utils.createDOMElement("div", {
          class: "title-container"
        }, n.default.utils.createDOMElement("div", {
          class: "title-wrapper"
        }, e), n.default.utils.createDOMElement("div", {
          class: "subtitle-position-end"
        }, n.default.utils.createDOMElement("div", {
          class: "subtitle-wrapper"
        }, r)), n.default.utils.createDOMElement("div", {
          class: "title-back-wrapper"
        }, n.default.utils.createDOMElement("div", {
          class: "title-back-animHelper"
        }, n.default.utils.createDOMElement("div", {
          class: "title-background block-background"
        })))), n.default.utils.createDOMElement("div", {
          class: "graph-container"
        }, n.default.utils.createDOMElement("div", {
          class: "graph"
        }, f), n.default.utils.createDOMElement("div", {
          class: "gridlines"
        }, l)), n.default.utils.createDOMElement("div", {
          class: "y-axis"
        }), n.default.utils.createDOMElement("div", {
          class: "x-axis"
        }), n.default.utils.createDOMElement("div", {
          class: "x-labels-container"
        }, c), n.default.utils.createDOMElement("div", {
          class: "x-labels-back-wrapper"
        }, n.default.utils.createDOMElement("div", {
          class: "x-labels-background block-background"
        })));
      }
    }, {
      key: "css",
      get: function get() {
        return function (t) {
          var e;
          Le.setup({
            createGenerateId: function createGenerateId() {
              return function (t) {
                return t.key;
              };
            }
          });
          var n = {
            "y-axis": {
              width: "4px",
              height: "70%",
              left: "14%",
              top: "15%",
              background: t.tertiaryC,
              position: "absolute"
            },
            "x-axis": {
              width: "74%",
              height: "4px",
              top: "85%",
              left: "14%",
              background: t.tertiaryC,
              position: "absolute"
            },
            gridlines: {
              width: "100%",
              height: "calc(100% + 3px)",
              display: "flex",
              "flex-direction": "column",
              "justify-content": "space-between"
            },
            gridLine: {
              height: "3px",
              width: "100%",
              background: t.secondaryC,
              "align-self": "flex-end"
            },
            graph: {
              top: 0,
              left: 0,
              position: "absolute",
              width: "100%",
              height: "100%",
              display: "flex",
              "justify-content": "space-around",
              overflow: "hidden"
            },
            "bar-container": {
              "align-self": "flex-end",
              width: "".concat(100 / t.data.length, "%"),
              margin: "0% ".concat(10 / t.data.length + 1, "%"),
              height: "100%",
              display: "flex"
            },
            "bar-fill": {
              width: "100%",
              height: "100%",
              background: t.primaryC,
              "align-self": "center"
            },
            "block-background": {
              width: "100%",
              height: "100%",
              background: t.accentC,
              position: "relative"
            },
            "title-back-animHelper": {
              width: "100%",
              height: "100%",
              display: "flex",
              "flex-direction": "row-reverse"
            },
            "title-back-wrapper": {
              width: "100%",
              height: "100%",
              display: "flex",
              position: "absolute",
              "flex-direction": "row",
              "z-index": "-1"
            },
            "x-labels-back-wrapper": {
              width: "70%",
              height: "5%",
              top: "87%",
              left: "16%",
              position: "absolute",
              display: "flex",
              "flex-direction": "row-reverse"
            },
            "x-labels-container": {
              "font-family": t.fontFamily,
              background: "transparent",
              width: "70%",
              height: "5%",
              top: "87%",
              left: "16%",
              position: "absolute",
              display: "flex",
              "align-items": "center",
              "z-index": "1",
              "justify-content": "space-around"
            },
            "letter-wrapper": {
              "font-size": t.fontSize,
              display: "flex",
              "flex-direction": "column",
              position: "relative"
            },
            "letter-container": {
              overflow: "hidden",
              position: "relative"
            },
            "title-container": (e = {
              "font-family": t.fontFamily,
              background: "transparent",
              width: "70%",
              height: "fit-content"
            }, o(e, "height", "-moz-fit-content"), o(e, "min-height", "5%"), o(e, "max-height", "7%"), o(e, "top", "7%"), o(e, "left", "16%"), o(e, "position", "absolute"), o(e, "display", "flex"), o(e, "z-index", "1"), o(e, "justify-content", "space-around"), e),
            "title-wrapper": {
              display: "flex",
              "flex-grow": "2",
              "flex-wrap": "wrap",
              "align-items": "center",
              overflow: "hidden",
              "padding-left": "6px",
              "z-index": "1"
            },
            "subtitle-wrapper": {
              display: "flex",
              "z-index": "1",
              "flex-wrap": "wrap",
              "align-items": "center"
            },
            "subtitle-position-end": {
              display: "flex",
              "flex-grow": "1",
              "padding-right": "6px",
              "flex-wrap": "wrap",
              "max-width": "34%",
              overflow: "hidden",
              "justify-content": "flex-end"
            },
            "label-container": {
              display: "flex",
              "flex-direction": "row",
              overflow: "hidden"
            },
            "container-barChart": {
              width: "100%",
              height: "100%",
              background: t.backgroundC,
              display: "flex"
            },
            "graph-container": {
              left: "16%",
              top: "17%",
              width: "70%",
              height: "63%",
              position: "absolute"
            },
            fontColorOn: {
              color: t.fontC
            },
            "space-char": {
              visibility: "hidden"
            },
            "accent-background": {
              width: "100%",
              height: "100%",
              background: t.accentC,
              position: "relative"
            }
          };
          return t.data.map(function (e, i) {
            n["".concat(e.name, "-bar-").concat(i)] = {
              "align-self": "flex-end",
              width: "".concat(100 / t.data.length, "%"),
              margin: "0% ".concat(10 / t.data.length + 1, "%"),
              height: "100%",
              display: "flex"
            }, n["".concat(e.name, "-bar-").concat(i)].height = "\n            ".concat(e.value.toFixed(2) / t.maxPoint * 100, "%"), n["".concat(e.name, "-bar-fill")] = {
              height: "100%"
            };
          }), Le.createStyleSheet(n).toString();
        }(this);
      }
    }, {
      key: "fonts",
      get: function get() {
        return [{
          type: "google-font",
          src: "".concat(this.url)
        }];
      }
    }, {
      key: "buildTree",
      value: function value() {
        if (Mt(this, ".container-barChart"), this.attrs.timings.intro) {
          var t = .75 * this.introDur,
              e = new n.default.Group(),
              i = new n.default.Combo({
            incidents: [{
              incidentClass: Ne.Anime,
              attrs: {
                animatedAttrs: {
                  height: "70%"
                },
                initialValues: {
                  height: "0%"
                }
              },
              props: {
                selector: ".y-axis",
                duration: Math.trunc(.2 * this.introDur),
                easing: "easeInQuad"
              },
              position: Math.trunc(0 * this.introDur)
            }, {
              incidentClass: Ne.Anime,
              attrs: {
                animatedAttrs: {
                  width: "74%"
                },
                initialValues: {
                  width: "0%"
                }
              },
              props: {
                selector: ".x-axis",
                duration: Math.trunc(.3 * this.introDur),
                easing: "easeOutQuad"
              },
              position: Math.trunc(.2 * this.introDur)
            }]
          }, {
            selector: ".container-barChart"
          });
          e.addIncident(i, 0 * this.introDur);
          var a = new Ne.Anime({
            animatedAttrs: {
              width: "100%"
            },
            initialValues: {
              width: "0%"
            }
          }, {
            selector: ".gridLine",
            duration: Math.trunc(.5 * this.introDur),
            easing: "easeOutQuad"
          });
          e.addIncident(a, Math.trunc(.2 * this.introDur));
          var r = new n.default.Group();
          r.addIncident(new Ne.Anime({
            animatedAttrs: {
              width: "100%"
            },
            initialValues: {
              width: "0%"
            }
          }, {
            selector: ".title-background",
            duration: Math.trunc(.25 * this.introDur),
            easing: "easeInOutQuad"
          }), 0);
          var o = 2 * (.7 * this.introDur) / (this.title.length + 1),
              s = [];

          for (var l in this.title) {
            s.push({
              incidentClass: Ne.Anime,
              attrs: {
                animatedAttrs: {
                  left: "0px",
                  opacity: 1
                },
                initialValues: {
                  left: "20px",
                  opacity: 0
                }
              },
              props: {
                selector: "#letter-".concat(l),
                duration: Math.trunc(o),
                easing: "easeOutQuart"
              },
              position: Math.trunc(o * l / 2)
            });
          }

          var u = new n.default.Combo({
            incidents: s
          }, {
            selector: ".title-wrapper"
          });
          r.addIncident(u, Math.trunc(.25 * this.introDur));
          var c = 2 * (.8 * this.introDur) / (this.subtitle.length + 1),
              h = [];

          for (var d in this.subtitle) {
            h.push({
              incidentClass: Ne.Anime,
              attrs: {
                animatedAttrs: {
                  left: "0px",
                  opacity: 1
                },
                initialValues: {
                  left: "20px",
                  opacity: 0
                }
              },
              props: {
                selector: "#letter-".concat(d),
                duration: Math.trunc(c),
                easing: "easeOutQuart"
              },
              position: Math.trunc(c * d / 2)
            });
          }

          var p = new n.default.Combo({
            incidents: h
          }, {
            selector: ".subtitle-wrapper"
          });
          r.addIncident(p, Math.trunc(.1 * this.introDur)), e.addIncident(r, Math.trunc(.05 * this.introDur));
          var f = new n.default.Group();
          f.addIncident(new Ne.Anime({
            animatedAttrs: {
              width: "70%"
            },
            initialValues: {
              width: "0%"
            }
          }, {
            selector: ".x-labels-back-wrapper",
            duration: Math.trunc(.25 * this.introDur),
            easing: "easeInOutCubic"
          }), 0);
          var g = 2 * t / (this.data.length + 1);

          for (var m in this.data) {
            var y = 2 * g / (this.data[m].name.length + 1),
                v = [];

            for (var b in this.data[m].name) {
              v.push({
                incidentClass: Ne.Anime,
                attrs: {
                  animatedAttrs: {
                    top: "0px",
                    opacity: 1
                  },
                  initialValues: {
                    top: "-30px",
                    opacity: 0
                  }
                },
                props: {
                  selector: "#letter-".concat(m, "-").concat(b),
                  duration: Math.trunc(y),
                  easing: "easeOutQuart"
                },
                position: Math.trunc(y * b / 2)
              });
            }

            var w = new n.default.Combo({
              incidents: v
            }, {
              selector: ".label-container"
            });
            f.addIncident(w, Math.trunc(t / (this.data.length + 1) * m));
          }

          e.addIncident(f, Math.trunc(.05 * this.introDur));
          var x = new n.default.Combo({
            incidents: [{
              incidentClass: Ne.Anime,
              attrs: {
                animatedAttrs: {
                  height: "100%"
                },
                initialValues: {
                  height: "0%"
                }
              },
              props: {
                duration: Math.trunc(.3 * this.introDur),
                easing: "easeInOutQuad"
              },
              position: 0
            }]
          }, {
            selector: ".bar-fill",
            delay: "@stagger(0, ".concat(Math.trunc(.4 * this.introDur), ")")
          });
          e.addIncident(x, Math.trunc(.3 * this.introDur)), this.addIncident(e, 0 * this.introDur);
        }

        if (this.attrs.timings.outro) {
          var M = .75 * this.outroDur,
              k = new n.default.Group(),
              O = new n.default.Combo({
            incidents: [{
              incidentClass: Ne.Anime,
              attrs: {
                animatedAttrs: {
                  width: "0%"
                },
                initialValues: {
                  width: "74%"
                }
              },
              props: {
                selector: ".x-axis",
                duration: Math.trunc(.2 * this.outroDur),
                easing: "easeInQuad"
              },
              position: 0 * this.outroDur
            }, {
              incidentClass: Ne.Anime,
              attrs: {
                animatedAttrs: {
                  height: "0%"
                },
                initialValues: {
                  height: "70%"
                }
              },
              props: {
                selector: ".y-axis",
                duration: Math.trunc(.3 * this.outroDur),
                easing: "easeOutQuad"
              },
              position: Math.trunc(.2 * this.outroDur)
            }]
          }, {
            selector: ".container-barChart"
          });
          k.addIncident(O, Math.trunc(.5 * this.outroDur));
          var D = new Ne.Anime({
            animatedAttrs: {
              width: "0%"
            },
            initialValues: {
              width: "100%"
            }
          }, {
            selector: ".gridlines",
            easing: "easeInOutQuad",
            duration: Math.trunc(.5 * this.outroDur)
          });
          k.addIncident(D, Math.trunc(.2 * this.outroDur));
          var C = new n.default.Group();
          C.addIncident(new Ne.Anime({
            animatedAttrs: {
              width: "0%"
            },
            initialValues: {
              width: "100%"
            }
          }, {
            selector: ".title-back-animHelper",
            duration: Math.trunc(.45 * this.outroDur),
            easing: "easeInOutQuad"
          }), Math.trunc(.3 * this.outroDur));
          var S = 2 * (.8 * this.outroDur) / (this.title.length + 1),
              P = [];

          for (var I in this.title) {
            P.push({
              incidentClass: Ne.Anime,
              attrs: {
                animatedAttrs: {
                  left: "20px",
                  opacity: 0
                },
                initialValues: {
                  left: "0px",
                  opacity: 1
                }
              },
              props: {
                selector: "#letter-".concat(I),
                duration: Math.trunc(S),
                easing: "easeOutQuart"
              },
              position: Math.trunc(S * (this.title.length - I - 1) / 2)
            });
          }

          var A = new n.default.Combo({
            incidents: P
          }, {
            selector: ".title-wrapper"
          });
          C.addIncident(A, Math.trunc(.1 * this.outroDur));
          var E = 2 * (.4 * this.outroDur) / (this.subtitle.length + 1),
              V = [];

          for (var R in this.subtitle) {
            V.push({
              incidentClass: Ne.Anime,
              attrs: {
                animatedAttrs: {
                  left: "20px",
                  opacity: 0
                },
                initialValues: {
                  left: "0px",
                  opacity: 1
                }
              },
              props: {
                selector: "#letter-".concat(R),
                duration: Math.trunc(E),
                easing: "easeOutQuart"
              },
              position: Math.trunc(E * (this.subtitle.length - R - 1) / 2)
            });
          }

          var j = new n.default.Combo({
            incidents: V
          }, {
            selector: ".subtitle-wrapper"
          });
          C.addIncident(j, Math.trunc(0 * this.outroDur)), k.addIncident(C, Math.trunc(.05 * this.outroDur));
          var z = new n.default.Group();
          z.addIncident(new Ne.Anime({
            animatedAttrs: {
              width: "0%"
            },
            initialValues: {
              width: "100%"
            }
          }, {
            selector: ".x-labels-background",
            duration: Math.trunc(.45 * this.outroDur),
            easing: "easeInOutCubic"
          }), .3 * this.outroDur);
          var G = 2 * M / (this.data.length + 1);

          for (var T in this.data) {
            var L = 2 * G / (this.data[T].name.length + 1),
                N = [];

            for (var F in this.data[T].name) {
              N.push({
                incidentClass: Ne.Anime,
                attrs: {
                  animatedAttrs: {
                    opacity: 0,
                    top: "-30px"
                  },
                  initialValues: {
                    opacity: 1,
                    top: "0px"
                  }
                },
                props: {
                  selector: "#letter-".concat(T, "-").concat(F),
                  duration: Math.trunc(L),
                  easing: "easeInQuart"
                },
                position: Math.trunc(L * F / 2)
              });
            }

            var B = new n.default.Combo({
              incidents: N
            }, {
              selector: ".label-container"
            });
            z.addIncident(B, Math.trunc(M / (this.data.length + 1) * T));
          }

          k.addIncident(z, Math.trunc(.05 * this.outroDur));
          this.outroDur;
          this.data.length;
          var _ = [];

          for (var Q in this.data) {
            _.push({
              incidentClass: Ne.Anime,
              attrs: {
                animatedAttrs: {
                  height: "0%"
                },
                initialValues: {
                  height: "100%"
                }
              },
              props: {
                duration: Math.trunc(.3 * this.outroDur),
                easing: "easeInOutCubic",
                selector: "#".concat(this.data[Q].name, "-bar-fill")
              },
              position: Math.trunc(E * (this.data.length - Q - 1) / 2)
            });
          }

          var H = new n.default.Combo({
            incidents: _
          }, {
            selector: ".graph"
          });
          k.addIncident(H, 0 * this.outroDur), this.addIncident(k, 0 + this.introDur + this.staticDur);
        }

        var X = new Ne.Anime({
          animatedAttrs: {}
        }, {
          selector: ".container-barChart",
          duration: this.staticDur
        });
        this.addIncident(X, this.introDur);
      }
    }, {
      key: "buildVars",
      value: function value() {
        this.data = this.attrs.data.data, this.title = this.attrs.data.title, this.subtitle = this.attrs.data.subtitle, this.maxPoint = 0, this.gridLinesNum = this.attrs.data.showGrid ? 11 : 0, this.attrs.palette = this.attrs.palette ? this.attrs.palette : {}, this.primaryC = this.attrs.palette.primary ? this.attrs.palette.primary : g.gray, this.secondaryC = this.attrs.palette.secondary ? this.attrs.palette.secondary : g.lightGray, this.tertiaryC = this.attrs.palette.tertiary ? this.attrs.palette.tertiary : g.darkGray, this.fontC = this.attrs.palette.font ? this.attrs.palette.font : g.font, this.accentC = this.attrs.palette.accent ? this.attrs.palette.accent : g.accent, this.backgroundC = this.attrs.palette.background ? this.attrs.palette.background : g.background, this.attrs.font = this.attrs.font ? this.attrs.font : {}, this.fontFamily = this.attrs.font.fontFamily ? this.attrs.font.fontFamily : "'Staatliches', cursive", this.fontSize = this.attrs.font.size ? this.attrs.font.size : "1.7rem", this.url = this.attrs.font.url ? this.attrs.font.url : "https://fonts.googleapis.com/css2?family=Staatliches&display=swap", this.attrs.timings = this.attrs.timings ? this.attrs.timings : {}, this.introDur = this.attrs.timings.intro ? this.attrs.timings.intro : 0, this.outroDur = this.attrs.timings.outro ? this.attrs.timings.outro : 0, 0 === this.attrs.timings.static ? this.staticDur = 0 : this.staticDur = this.attrs.timings.static ? this.attrs.timings.static : 1e3;
      }
    }]), a;
  }(n.default.HTMLClip);

  function Be(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  function _e(t) {
    return (_e = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    })(t);
  }

  function Qe(t, e) {
    return (Qe = Object.setPrototypeOf || function (t, e) {
      return t.__proto__ = e, t;
    })(t, e);
  }

  function He(t, e) {
    return !e || "object" != _typeof(e) && "function" != typeof e ? function (t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }(t) : e;
  }

  var Xe = function (t) {
    !function (t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), e && Qe(t, e);
    }(a, n.default.Effect);

    var e,
        i = function (t) {
      var e = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }();

      return function () {
        var n,
            i = _e(t);

        if (e) {
          var a = _e(this).constructor;

          n = Reflect.construct(i, arguments, a);
        } else n = i.apply(this, arguments);

        return He(this, n);
      };
    }(a);

    function a() {
      return Be(this, a), i.apply(this, arguments);
    }

    return (e = [{
      key: "getScratchValue",
      value: function value() {
        return 0;
      }
    }, {
      key: "onGetContext",
      value: function value() {
        this.element.innerHTML = this.initialValue;
      }
    }, {
      key: "onProgress",
      value: function value(t, e) {
        var n = this.initialValue + (this.targetValue - this.initialValue) * t;
        n = this.attrs.decimals ? n.toFixed(this.attrs.decimals) : Math.trunc(n), this.element.innerHTML = n;
      }
    }]) && function (t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }(a.prototype, e), a;
  }(),
      Ye = __webpack_require__(500),
      We = {
    npm_name: Ye.name,
    version: Ye.version,
    incidents: [{
      exportable: Xe,
      name: "Counter",
      attributesValidationRules: {
        animatedAttrs: {
          type: "object",
          props: {
            count: {
              type: "number"
            }
          }
        },
        decimals: {
          type: "number",
          optional: !0,
          min: 0,
          max: 20,
          integer: !0
        }
      }
    }]
  };

  var qe = n.default.loadPlugin(We),
      Ze = n.default.loadPlugin(wt),
      Je = function (t) {
    s(a, t);
    var e = h(a);

    function a() {
      return i(this, a), e.apply(this, arguments);
    }

    return r(a, [{
      key: "html",
      get: function get() {
        var t = this,
            e = this.attrs.data.map(function (e, i) {
          var a;
          return n.default.utils.createDOMElement("div", {
            class: "row row-" + i
          }, n.default.utils.createDOMElement("div", {
            class: "bar-header"
          }, e.name), n.default.utils.createDOMElement("div", {
            class: "container-bar container-bar-" + i
          }, n.default.utils.createDOMElement("div", {
            class: "inner-bar inner-bar-" + i + " " + (e.value < t.criticalValue ? "extra-trunced-" + i : null)
          })), n.default.utils.createDOMElement("div", {
            class: "text indicator-".concat(i)
          }, e.value), n.default.utils.createDOMElement("div", {
            class: "text text-unit"
          }, null !== (a = t.attrs.options) && void 0 !== a && a.hidePercentage ? null : "%"));
        });
        return n.default.utils.createDOMElement("div", {
          class: "container-progressBar"
        }, e);
      }
    }, {
      key: "css",
      get: function get() {
        return function (t) {
          Le.setup({
            createGenerateId: function createGenerateId() {
              return function (t) {
                return t.key;
              };
            }
          });
          var e = {
            "container-progressBar": {
              height: "100%",
              background: t.palette.background ? t.palette.background : g.background,
              display: "flex",
              color: t.palette.font ? t.palette.font : g.font,
              "font-family": t.font.fontFamily ? t.font.fontFamily : "'Staatliches', cursive"
            },
            row: {
              display: "flex",
              "flex-direction": "row",
              position: "absolute",
              left: "20%",
              "align-items": "center",
              height: "".concat(60 / t.barCount, "%"),
              width: "100%"
            },
            "container-bar": {
              position: "absolute",
              height: "100%",
              background: t.palette.secondary ? t.palette.secondary : g.darkGray,
              "border-radius": "4rem",
              width: "60%",
              "box-shadow": "2px 2px 5px gray",
              border: "0.2rem solid ".concat(t.palette.accent ? t.palette.accent : g.accent),
              "z-index": "1",
              overflow: "hidden"
            },
            "inner-bar": {
              position: "relative",
              background: t.palette.primary ? t.palette.primary : g.lightGray,
              height: "102%",
              "border-radius": "4rem",
              bottom: "-1px",
              "z-index": "2px",
              top: "-0.5px"
            },
            text: {
              position: "relative",
              "z-index": "0",
              opacity: "1",
              left: "62%",
              "font-size": t.font.size ? t.font.size : "1.2rem"
            },
            "bar-header": {
              position: "absolute",
              left: "-21%",
              "text-align": "right",
              width: "20%",
              "font-size": t.font.size ? t.font.size : "1.2rem"
            }
          },
              n = t.barSum / t.barCount;
          return t.data.forEach(function (i, a) {
            e["row-".concat(a)] = {
              bottom: "".concat(50 + 100 * (n - a) / t.barCount - 60 / t.barCount * 2.15, "%")
            }, e["inner-bar-".concat(a)] = {
              width: "".concat(i.value.toFixed(2), "%")
            };
          }), Le.createStyleSheet(e).toString();
        }({
          barSum: this.barSum,
          barCount: this.barCount,
          data: this.attrs.data,
          palette: this.attrs.palette ? this.attrs.palette : {},
          font: this.attrs.font ? this.attrs.font : {},
          options: this.attrs.options ? this.attrs.options : {}
        });
      }
    }, {
      key: "fonts",
      get: function get() {
        var t;
        return [{
          type: "google-font",
          src: null !== (t = this.attrs.font) && void 0 !== t && t.url ? this.attrs.font.url : "https://fonts.googleapis.com/css2?family=Staatliches&display=swap"
        }];
      }
    }, {
      key: "buildTree",
      value: function value() {
        var t;
        0 === this.attrs.timings.static ? this.static = 0 : this.static = this.attrs.timings.static ? this.attrs.timings.static : 1e3, this.intro = this.attrs.timings.intro ? this.attrs.timings.intro : 0, this.outro = this.attrs.timings.outro ? this.attrs.timings.outro : 0;
        var e = this.barSum / this.barCount;

        if (kt(this, ".container-progressBar"), null !== (t = this.attrs.timings) && void 0 !== t && t.intro) {
          var n = Math.floor(.33 * this.intro),
              i = Math.floor(.25 * this.intro),
              a = Math.floor(.33 * this.intro);
          Math.floor(.09 * this.intro);

          for (var r = 0; r < this.barCount; r++) {
            var o = new Ze.Anime({
              animatedAttrs: {
                bottom: "".concat(50 + 100 * (e - r) / this.barCount - 60 / this.barCount * 2.15, "%"),
                opacity: 1
              },
              initialValues: {
                bottom: "-".concat(65 / this.barCount, "%"),
                opacity: 0
              }
            }, {
              duration: n,
              selector: ".row-".concat(r),
              easing: "easeInOutQuad"
            }),
                s = new Ze.Anime({
              animatedAttrs: {
                width: "60%"
              },
              initialValues: {
                width: "0.2%"
              }
            }, {
              duration: i,
              selector: ".container-bar-".concat(r),
              easing: "easeInOutQuad"
            }),
                l = new Ze.Anime({
              animatedAttrs: {
                width: "".concat(this.attrs.data[r].value.toFixed(2), "%")
              },
              initialValues: {
                width: "0%"
              }
            }, {
              duration: a,
              selector: ".inner-bar-".concat(r),
              easing: "easeInOutQuad"
            }),
                u = new qe.Counter({
              animatedAttrs: {
                count: this.attrs.data[r].value
              },
              initialValues: {
                count: 0
              }
            }, {
              easing: "easeInOutQuad",
              selector: ".indicator-".concat(r),
              duration: a
            });
            this.addIncident(o, 0), this.addIncident(s, n), this.addIncident(l, n + i), this.addIncident(u, n + i);
          }

          var c = new Ze.Anime({
            animatedAttrs: {
              left: "62%",
              opacity: 1
            },
            initialValues: {
              left: "0%",
              opacity: 0
            }
          }, {
            duration: a,
            selector: ".text",
            easing: "easeInOutQuad"
          });
          this.addIncident(c, n);
        }

        var h = new Ze.Anime({
          animatedAttrs: {}
        }, {
          duration: this.static,
          selector: ".container-progressBar"
        });

        if (this.addIncident(h, this.intro), this.outro) {
          var d = this.intro + this.static + this.outro,
              p = Math.floor(.33 * this.outro),
              f = Math.floor(.25 * this.outro),
              g = Math.floor(.33 * this.outro);
          Math.floor(.09 * this.outro);

          for (var m = 0; m < this.barCount; m++) {
            var y = new Ze.Anime({
              animatedAttrs: {
                bottom: "-".concat(65 / this.barCount, "%"),
                opacity: 0
              },
              initialValues: {
                bottom: "".concat(50 + 100 * (e - m) / this.barCount - 60 / this.barCount * 2.15, "%"),
                opacity: 1
              }
            }, {
              duration: p,
              selector: ".row-".concat(m),
              easing: "easeInOutQuad"
            }),
                v = new Ze.Anime({
              animatedAttrs: {
                width: "0.2%"
              },
              initialValues: {
                width: "60%"
              }
            }, {
              duration: f,
              selector: ".container-bar-".concat(m),
              easing: "easeInOutQuad"
            }),
                b = new Ze.Anime({
              animatedAttrs: {
                width: "0%"
              },
              initialValues: {
                width: "".concat(this.attrs.data[m].value.toFixed(2), "%")
              }
            }, {
              duration: g,
              selector: ".inner-bar-".concat(m),
              easing: "easeInOutQuad"
            }),
                w = new qe.Counter({
              animatedAttrs: {
                count: 0
              },
              initialValues: {
                count: this.attrs.data[m].value
              }
            }, {
              easing: "easeInOutQuad",
              selector: ".indicator-".concat(m),
              duration: g
            });
            this.addIncident(y, d - p), this.addIncident(v, d - p - f), this.addIncident(b, d - p - f - g), this.addIncident(w, d - p - f - g);
          }

          var x = new Ze.Anime({
            animatedAttrs: {
              left: "0%",
              opacity: 0
            },
            initialValues: {
              left: "62%",
              opacity: 1
            }
          }, {
            duration: g,
            selector: ".text",
            easing: "easeInOutQuad"
          });
          this.addIncident(x, d - p - 1.1 * f);
        }
      }
    }, {
      key: "barSum",
      get: function get() {
        for (var t = 0, e = 1; e <= this.barCount; e++) {
          t += e;
        }

        return t;
      }
    }, {
      key: "barCount",
      get: function get() {
        return this.attrs.data.length;
      }
    }, {
      key: "criticalValue",
      get: function get() {
        return this.barCount / 10 == 1 ? this.barCount / 10 * 10 : this.barCount / 10 > 1 ? 10 * (this.barCount / 10 - 1) : 10 * (this.barCount / 10 + 1);
      }
    }]), a;
  }(n.default.HTMLClip);

  var $e = {
    lineGraph: {
      originalDims: {
        width: 1200,
        height: 900
      }
    },
    progressMeter: {
      originalDims: {
        width: 1200,
        height: 900
      }
    }
  },
      Ue = {
    battery: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="48px" height="48px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/></svg>',
    backup: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="48px" height="48px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>',
    checkMark: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="48px" height="48px"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>',
    synch: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="48px" height="48px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/></svg>',
    folder: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="48px" height="48px"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/></svg>'
  },
      Ke = n.default.loadPlugin(wt),
      tn = n.default.loadPlugin(We),
      en = function (t) {
    s(a, t);
    var e = h(a);

    function a() {
      return i(this, a), e.apply(this, arguments);
    }

    return r(a, [{
      key: "html",
      get: function get() {
        this.buildVars();
        var t = null;

        if (this.innerSVG) {
          var e = Ue[this.innerSVG] ? Ue[this.innerSVG] : this.innerSVG,
              i = {
            x1: this.innerFill.rotate && this.innerFill.revert ? 1 : 0,
            x2: this.innerFill.rotate ? this.innerFill.revert ? 0 : 1 : 0,
            y1: this.innerFill.rotate || this.innerFill.revert ? 0 : 1,
            y2: this.innerFill.rotate ? 0 : this.innerFill.revert ? 1 : 0
          },
              a = e.indexOf("<svg ") + 5,
              r = [e.slice(0, a), 'class="svg-preset" fill="url(#gradientFilter)"', e.slice(a)].join(""),
              o = r.indexOf(">") + 1,
              s = n.default.utils.createDOMElement("linearGradient", {
            class: "gradient-filter",
            id: "gradientFilter",
            x1: i.x1,
            x2: i.x2,
            y1: i.y1,
            y2: i.y2
          }, n.default.utils.createDOMElement("stop", {
            offset: "0%",
            "stop-opacity": "1",
            "stop-color": this.accentC
          }), n.default.utils.createDOMElement("stop", {
            offset: "".concat(this.data.value, "%"),
            "stop-opacity": "1",
            class: "gradient-stop",
            "stop-color": this.accentC
          }), n.default.utils.createDOMElement("stop", {
            offset: "".concat(this.data.value, "%"),
            "stop-opacity": "0.3",
            class: "gradient-stop",
            "stop-color": this.accentC
          }), n.default.utils.createDOMElement("stop", {
            offset: "100%",
            "stop-opacity": "0.3",
            class: "gradient-back-bottom",
            "stop-color": this.accentC
          }), n.default.utils.createDOMElement("stop", {
            offset: "100%",
            "stop-opacity": "0.0",
            class: "gradient-back-bottom",
            "stop-color": this.accentC
          }), n.default.utils.createDOMElement("stop", {
            offset: "100%",
            "stop-opacity": "0.0",
            class: "gradient-back-top",
            "stop-color": this.accentC
          })).toString();
          r = [r.slice(0, o), s, r.slice(o)].join(""), t = n.default.utils.createDOMElement("div", {
            class: "inner-svg-container"
          }, n.default.utils.createDOMElement("div", {
            class: "path-container"
          }, r));
        }

        var l = n.default.utils.createDOMElement("div", {
          class: "svg-container"
        }, n.default.utils.createDOMElement("svg", {
          class: "svg-viewbox",
          viewbox: "0 0 ".concat(this.boxSize, " ").concat(this.boxSize)
        }, n.default.utils.createDOMElement("circle", {
          class: "meter-track meter-general",
          cx: "".concat(.5 * this.boxSize),
          cy: "".concat(.5 * this.boxSize),
          pathLength: this.pathLength
        }), n.default.utils.createDOMElement("circle", {
          class: "meter-path meter-general",
          cx: "".concat(.5 * this.boxSize),
          cy: "".concat(.5 * this.boxSize),
          pathLength: this.pathLength
        })), t),
            u = null === this.innerSVG ? "indicator-center" : "indicator-label",
            c = n.default.utils.createDOMElement("div", {
          class: "indicator-general ".concat(u)
        }, n.default.utils.createDOMElement("div", {
          class: "indicator-value indicator-inner"
        }, this.data.value), n.default.utils.createDOMElement("div", {
          class: "indicator-unit indicator-inner"
        }, this.data.unit));
        return n.default.utils.createDOMElement("div", {
          class: "container-progressMeter"
        }, l, c);
      }
    }, {
      key: "css",
      get: function get() {
        return function (t) {
          Le.setup({
            createGenerateId: function createGenerateId() {
              return function (t) {
                return t.key;
              };
            }
          });
          var e = {
            "container-progressMeter": {
              width: "100%",
              height: "100%",
              display: "flex",
              "justify-content": "center",
              "align-items": "center",
              "flex-direction": "column",
              "font-family": t.fontFamily,
              "font-size": t.fontSize,
              "background-color": t.backgroundC
            },
            "svg-container": {
              width: "".concat(t.boxSize, "px"),
              height: "".concat(t.boxSize, "px"),
              position: "relative"
            },
            "svg-viewbox": {
              width: "100%",
              height: "100%"
            },
            "meter-general": {
              "stroke-width": .06 * t.boxSize,
              r: .46 * t.boxSize,
              "stroke-linecap": "round",
              "fill-opacity": 0,
              "transform-origin": "center",
              transform: "rotate(-90deg)"
            },
            "meter-track": {
              stroke: t.accentC,
              opacity: .3,
              "stroke-dasharray": t.pathLength,
              "stroke-dashoffset": 0
            },
            "meter-path": {
              stroke: t.accentC,
              "stroke-dasharray": t.pathLength,
              "stroke-dashoffset": t.pathLength - t.pathLength * t.data.value / 100
            },
            "indicator-general": {
              width: "".concat(t.boxSize, "px"),
              display: "flex",
              "justify-content": "center",
              "align-items": "center",
              color: t.fontC
            },
            "indicator-label": {
              "align-items": "center"
            },
            "indicator-value": {},
            "indicator-center": {
              position: "absolute",
              "font-size": "165%"
            },
            "indicator-inner": {
              display: "flex",
              "justify-content": "center",
              "align-items": "center"
            },
            "inner-svg-container": {
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0
            },
            "path-container": {
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              display: "flex",
              "justify-content": "center",
              "align-items": "center"
            },
            "svg-preset": {
              width: "".concat(.5 * t.boxSize, "px"),
              height: "".concat(.5 * t.boxSize, "px")
            },
            "gradient-filter": {},
            "gradient-stop": {
              offset: "".concat(t.data.value, "%")
            }
          };
          return Le.createStyleSheet(e).toString();
        }(this);
      }
    }, {
      key: "fonts",
      get: function get() {
        return [{
          type: "google-font",
          src: "".concat(this.url)
        }];
      }
    }, {
      key: "buildTree",
      value: function value() {
        if (Mt(this, ".container-progressMeter"), this.attrs.timings.intro) {
          var t = new n.default.Group(),
              e = .7 * this.introDur,
              i = .7 * this.introDur,
              a = new Ke.Anime({
            animatedAttrs: {
              "stroke-dashoffset": 0
            },
            initialValues: {
              "stroke-dashoffset": this.pathLength
            }
          }, {
            duration: Math.trunc(i),
            easing: "easeInOutCubic",
            selector: ".meter-track"
          });
          t.addIncident(a, 0);
          var r = new Ke.Anime({
            animatedAttrs: {
              "stroke-dashoffset": this.pathLength - this.pathLength * this.data.value / 100
            },
            initialValues: {
              "stroke-dashoffset": this.pathLength
            }
          }, {
            duration: Math.trunc(e),
            easing: "easeInOutCubic",
            selector: ".meter-path"
          });
          t.addIncident(r, Math.trunc(.3 * this.introDur));
          var o = new Ke.Anime({
            animatedAttrs: {
              "stroke-width": .05 * this.boxSize
            },
            initialValues: {
              "stroke-width": 0
            }
          }, {
            selector: ".meter-track",
            easing: "easeInQuart",
            duration: Math.trunc(.04 * i)
          });
          t.addIncident(o, 0);
          var s = new Ke.Anime({
            animatedAttrs: {
              "stroke-width": .05 * this.boxSize
            },
            initialValues: {
              "stroke-width": 0
            }
          }, {
            selector: ".meter-path",
            easing: "easeInQuart",
            duration: Math.trunc(.04 * i)
          });
          t.addIncident(s, Math.trunc(.3 * this.introDur));
          var l = new Ke.Anime({
            animatedAttrs: {
              opacity: 1
            },
            initialValues: {
              opacity: 0
            }
          }, {
            selector: ".indicator-general",
            easing: "easeInQuart",
            duration: Math.trunc(.3 * this.introDur)
          });
          t.addIncident(l, 0);
          var u = new tn.Counter({
            animatedAttrs: {
              count: Math.round(this.data.value)
            }
          }, {
            selector: ".indicator-value",
            easing: "easeInOutCubic",
            duration: Math.trunc(e)
          });

          if (t.addIncident(u, Math.trunc(.3 * this.introDur)), this.innerSVG) {
            var c = new Ke.Anime({
              animatedAttrs: {
                offset: "100%"
              },
              initialValues: {
                offset: "".concat(0, "%")
              }
            }, {
              selector: ".gradient-back-bottom",
              easing: "easeInOutCubic",
              duration: Math.trunc(i)
            });
            t.addIncident(c, 0);
            var h = new Ke.Anime({
              animatedAttrs: {
                offset: "".concat(this.data.value, "%")
              },
              initialValues: {
                offset: "0%"
              }
            }, {
              selector: ".gradient-stop",
              easing: "easeInOutCubic",
              duration: Math.trunc(e)
            });
            t.addIncident(h, Math.trunc(.3 * this.introDur));
            var d = new Ke.Anime({
              animatedAttrs: {
                opacity: 1
              },
              initialValues: {
                opacity: 0
              }
            }, {
              selector: ".inner-svg-container",
              easing: "easeInCubic",
              duration: Math.trunc(.05 * this.introDur)
            });
            t.addIncident(d, Math.trunc(.1 * this.introDur));
          }

          this.addIncident(t, 0);
        }

        if (this.attrs.timings.outro) {
          var p = new n.default.Group(),
              f = .7 * this.outroDur,
              g = .7 * this.outroDur,
              m = new Ke.Anime({
            animatedAttrs: {
              "stroke-dashoffset": this.pathLength
            },
            initialValues: {
              "stroke-dashoffset": 0
            }
          }, {
            duration: Math.trunc(g),
            easing: "easeInOutCubic",
            selector: ".meter-track"
          });
          p.addIncident(m, Math.trunc(.3 * this.outroDur));
          var y = new Ke.Anime({
            animatedAttrs: {
              "stroke-dashoffset": this.pathLength
            },
            initialValues: {
              "stroke-dashoffset": this.pathLength - this.pathLength * this.data.value / 100
            }
          }, {
            duration: Math.trunc(f),
            easing: "easeInOutCubic",
            selector: ".meter-path"
          });
          p.addIncident(y, 0);
          var v = new Ke.Anime({
            animatedAttrs: {
              "stroke-width": 0
            },
            initialValues: {
              "stroke-width": .05 * this.boxSize
            }
          }, {
            selector: ".meter-track",
            easing: "easeInQuart",
            duration: Math.trunc(.1 * g)
          });
          p.addIncident(v, Math.trunc(this.outroDur - .1 * g));
          var b = new Ke.Anime({
            animatedAttrs: {
              "stroke-width": 0
            },
            initialValues: {
              "stroke-width": .05 * this.boxSize
            }
          }, {
            selector: ".meter-path",
            easing: "easeInQuart",
            duration: Math.trunc(.1 * g)
          });
          p.addIncident(b, Math.trunc(.7 * this.outroDur - .1 * g));
          var w = new Ke.Anime({
            animatedAttrs: {
              opacity: 0
            },
            initialValues: {
              opacity: 1
            }
          }, {
            selector: ".indicator-general",
            easing: "easeInQuart",
            duration: Math.trunc(.3 * this.outroDur)
          });
          p.addIncident(w, Math.trunc(.55 * this.outroDur));
          var x = new tn.Counter({
            animatedAttrs: {
              count: 0
            }
          }, {
            selector: ".indicator-value",
            easing: "easeInOutCubic",
            duration: Math.trunc(f)
          });

          if (p.addIncident(x, 0), this.innerSVG) {
            var M = new Ke.Anime({
              animatedAttrs: {
                offset: "".concat(0, "%")
              },
              initialValues: {
                offset: "100%"
              }
            }, {
              selector: ".gradient-back-bottom",
              easing: "easeInOutCubic",
              duration: Math.trunc(g)
            });
            p.addIncident(M, Math.trunc(.3 * this.outroDur));
            var k = new Ke.Anime({
              animatedAttrs: {
                offset: "0%"
              },
              initialValues: {
                offset: "".concat(this.data.value, "%")
              }
            }, {
              selector: ".gradient-stop",
              easing: "easeInOutCubic",
              duration: Math.trunc(f)
            });
            p.addIncident(k, 0);
            var O = new Ke.Anime({
              animatedAttrs: {
                opacity: 0
              },
              initialValues: {
                opacity: 1
              }
            }, {
              selector: ".inner-svg-container",
              easing: "easeOutCubic",
              duration: Math.trunc(.1 * this.outroDur)
            });
            p.addIncident(O, Math.trunc(.75 * this.outroDur));
          }

          this.addIncident(p, 0 + this.introDur + this.staticDur);
        }

        var D = new Ke.Anime({
          animatedAttrs: {}
        }, {
          selector: ".container-progressMeter",
          duration: this.staticDur
        });
        this.addIncident(D, this.introDur);
      }
    }, {
      key: "buildVars",
      value: function value() {
        this.data = this.attrs.data, this.innerSVG = this.attrs.innerImage ? this.attrs.innerImage : null, this.innerFill = this.data.innerFill ? this.data.innerFill : {
          revert: !1,
          rotate: !1
        }, this.originalDims = $e.progressMeter.originalDims, this.boxSize = this.originalDims.width < this.originalDims.height ? .65 * this.originalDims.width : .65 * this.originalDims.height, this.pathLength = 1e4, this.attrs.palette = this.attrs.palette ? this.attrs.palette : {}, this.fontC = this.attrs.palette.font ? this.attrs.palette.font : g.font, this.accentC = this.attrs.palette.accent ? this.attrs.palette.accent : g.accent, this.backgroundC = this.attrs.palette.background ? this.attrs.palette.background : g.background, this.attrs.font = this.attrs.font ? this.attrs.font : {}, this.fontFamily = this.attrs.font.fontFamily ? this.attrs.font.fontFamily : "'Staatliches', cursive", this.fontSize = this.attrs.font.size ? this.attrs.font.size : "1.7rem", this.url = this.attrs.font.url ? this.attrs.font.url : "https://fonts.googleapis.com/css2?family=Staatliches&display=swap", this.attrs.timings = this.attrs.timings ? this.attrs.timings : {}, this.introDur = this.attrs.timings.intro ? this.attrs.timings.intro : 0, this.outroDur = this.attrs.timings.outro ? this.attrs.timings.outro : 0, 0 === this.attrs.timings.static ? this.staticDur = 0 : this.staticDur = this.attrs.timings.static ? this.attrs.timings.static : 1e3;
      }
    }]), a;
  }(n.default.HTMLClip);

  function nn(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  function an(t) {
    return (an = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    })(t);
  }

  function rn(t, e) {
    return (rn = Object.setPrototypeOf || function (t, e) {
      return t.__proto__ = e, t;
    })(t, e);
  }

  function on(t, e) {
    return !e || "object" != _typeof(e) && "function" != typeof e ? function (t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }(t) : e;
  }

  var sn = {
    npm_name: "@kissmybutton/motorcortex-svgdraw",
    version: "0.0.7",
    incidents: [{
      exportable: function (t) {
        !function (t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }), e && rn(t, e);
        }(a, n.default.Effect);

        var e,
            i = function (t) {
          var e = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;

            try {
              return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
            } catch (t) {
              return !1;
            }
          }();

          return function () {
            var n,
                i = an(t);

            if (e) {
              var a = an(this).constructor;
              n = Reflect.construct(i, arguments, a);
            } else n = i.apply(this, arguments);

            return on(this, n);
          };
        }(a);

        function a() {
          return nn(this, a), i.apply(this, arguments);
        }

        return (e = [{
          key: "getScratchValue",
          value: function value() {
            return this.pathLength = Math.ceil(this.element.getTotalLength()), this.element.style.strokeDasharray = this.pathLength + " " + this.pathLength, this.element.style.strokeDashoffset = this.pathLength, 0;
          }
        }, {
          key: "onGetContext",
          value: function value() {
            this.pathLength = Math.ceil(this.element.getTotalLength());
          }
        }, {
          key: "onProgress",
          value: function value(t, e) {
            var n = (this.targetValue - this.initialValue) * t + this.initialValue;
            this.element.style.strokeDashoffset = Math.ceil(this.pathLength * (1 - n));
          }
        }]) && function (t, e) {
          for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
          }
        }(a.prototype, e), a;
      }(),
      name: "Draw",
      attributesValidationRules: {
        animatedAttrs: {
          type: "object",
          props: {
            cover: {
              type: "number",
              min: 0,
              max: 1
            }
          }
        }
      }
    }]
  };

  function ln(t, e) {
    var n = Object.keys(t);

    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(t);
      e && (i = i.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })), n.push.apply(n, i);
    }

    return n;
  }

  function un(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {};
      e % 2 ? ln(Object(n), !0).forEach(function (e) {
        pn(t, e, n[e]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ln(Object(n)).forEach(function (e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
      });
    }

    return t;
  }

  function cn(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  function hn(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }

  function dn(t, e, n) {
    return e && hn(t.prototype, e), n && hn(t, n), t;
  }

  function pn(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = n, t;
  }

  function fn(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), e && mn(t, e);
  }

  function gn(t) {
    return (gn = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    })(t);
  }

  function mn(t, e) {
    return (mn = Object.setPrototypeOf || function (t, e) {
      return t.__proto__ = e, t;
    })(t, e);
  }

  function yn(t, e) {
    return !e || "object" != _typeof(e) && "function" != typeof e ? function (t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }(t) : e;
  }

  function vn(t) {
    var e = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    }();

    return function () {
      var n,
          i = gn(t);

      if (e) {
        var a = gn(this).constructor;
        n = Reflect.construct(i, arguments, a);
      } else n = i.apply(this, arguments);

      return yn(this, n);
    };
  }

  var bn = function () {
    function t(e) {
      cn(this, t), this.el = e, this.matrix = this.getMatrix(e), this.viewportCenter = this.getViewPortCenter(), this.idlePosition = this.getIdlePosition();
    }

    return dn(t, [{
      key: "getMatrix",
      value: function value(t) {
        return function (t) {
          var e,
              n,
              i,
              a,
              r,
              o,
              s,
              l,
              u = window.getComputedStyle(t).transform;
          return "" === u || "none" === u ? {
            rotate: "0deg",
            scaleX: 1,
            scaleY: 1,
            skewX: "0deg",
            skewY: "0deg",
            translateX: "0px",
            translateY: "0px"
          } : (e = u.split("(")[1].split(")")[0].split(","), n = Math.atan2(e[1], e[0]), i = Math.pow(e[0], 2) + Math.pow(e[1], 2), a = Math.pow(e[2], 2) + Math.pow(e[3], 2), r = Math.sqrt(i), o = (e[0] * e[3] - e[2] * e[1]) / r, s = Math.atan2(e[0] * e[2] + e[1] * e[3], i), l = Math.atan2(e[1] * e[3] + e[0] * e[2], a), {
            rotate: n / (Math.PI / 180) + "deg",
            scaleX: r,
            scaleY: o,
            skewX: (1 === i ? s / (Math.PI / 180) : 0) + "deg",
            skewY: (1 === a ? l / (Math.PI / 180) : 0) + "deg",
            translateX: e[4] + "px",
            translateY: e[5] + "px"
          });
        }(t);
      }
    }, {
      key: "getViewPortCenter",
      value: function value() {
        var t = this.el.parentNode;
        return {
          x: parseFloat(getComputedStyle(t, null).width.replace("px", "")) / 2,
          y: parseFloat(getComputedStyle(t, null).height.replace("px", "")) / 2
        };
      }
    }, {
      key: "getIdlePosition",
      value: function value() {
        var t = this.el,
            e = t.getBoundingClientRect(),
            n = t.parentNode.getBoundingClientRect();
        return {
          x: e.left - n.left,
          y: e.top - n.top
        };
      }
    }, {
      key: "calcXYZoom",
      value: function value() {
        var t = this.matrix,
            e = this.idlePosition,
            n = this.viewportCenter,
            i = n.x - e.x,
            a = n.y - e.y;
        return un(un({}, {
          x: i / t.scaleX,
          y: a / t.scaleY
        }), {}, {
          zoom: t.scaleX
        });
      }
    }, {
      key: "createProgressFunction",
      value: function value(t) {
        var e = this._xyzoomToTranslate(t.start),
            n = this._xyzoomToTranslate(t.target),
            i = Math.atan(Math.abs(n.y - e.y) / Math.abs(n.x - e.x)),
            a = Math.sqrt(Math.pow(n.y - e.y, 2) + Math.pow(n.x - e.x, 2)),
            r = 1,
            o = 1;

        return n.x < e.x && (r = -1), n.y < e.y && (o = -1), function (t) {
          var s = t * a;
          return {
            translateX: r * s * Math.cos(i) + e.x,
            translateY: o * s * Math.sin(i) + e.y,
            scale: (n.scale - e.scale) * t + e.scale
          };
        };
      }
    }, {
      key: "_xyzoomToTranslate",
      value: function value(t) {
        var e = t.zoom * t.x,
            n = t.zoom * t.y,
            i = this.viewportCenter.x - e,
            a = this.viewportCenter.y - n;
        return {
          x: i - this.idlePosition.x,
          y: a - this.idlePosition.y,
          scale: t.zoom
        };
      }
    }, {
      key: "createPathProgressFunction",
      value: function value(t, e) {
        var n = this,
            i = function i(t) {};

        t.transitionDuration > 0 && (i = this.createProgressFunction({
          start: e,
          target: {
            x: t.startPoint.x,
            y: t.startPoint.y,
            zoom: e.zoom
          }
        }));
        var a = t.transitionDuration / (t.transitionDuration + t.alongPathDuration),
            r = t.alongPathDuration / (t.transitionDuration + t.alongPathDuration),
            o = (t.endTo - t.startFrom) * t.pathLength;
        return function (s) {
          if (t.transitionDuration > 0 && s < a) return i(s / a);

          var l = (s - a) / r,
              u = (t.zoom - e.zoom) * l + e.zoom,
              c = l * o + t.startFrom * t.pathLength,
              h = t.path.getPointAtLength(c),
              d = n._xyzoomToTranslate({
            x: h.x,
            y: h.y,
            zoom: u
          });

          return {
            translateX: d.x,
            translateY: d.y,
            scale: d.scale
          };
        };
      }
    }]), t;
  }(),
      wn = function (t) {
    fn(i, n.default.Effect);
    var e = vn(i);

    function i() {
      return cn(this, i), e.apply(this, arguments);
    }

    return dn(i, [{
      key: "getScratchValue",
      value: function value() {
        return this.adaptor = new bn(this.element), this.adaptor.calcXYZoom();
      }
    }, {
      key: "onGetContext",
      value: function value() {
        this.adaptor = new bn(this.element), this.progressMethod = this.adaptor.createProgressFunction({
          start: this.initialValue,
          target: this.targetValue
        });
      }
    }, {
      key: "onProgress",
      value: function value(t, e) {
        var n = this.progressMethod(t);
        this.element.style.transform = "translateX(".concat(n.translateX, "px) translateY(").concat(n.translateY, "px) scaleX(").concat(n.scale, ") scaleY(").concat(n.scale, ")");
      }
    }]), i;
  }(),
      xn = {
    npm_name: "@kissmybutton/motorcortex-2dcam",
    version: "0.0.16",
    incidents: [{
      exportable: wn,
      name: "ZoomTo",
      attributesValidationRules: {
        animatedAttrs: {
          type: "object",
          props: {
            position: {
              type: "object",
              props: {
                x: {
                  type: "number",
                  optional: !0,
                  min: 0
                },
                y: {
                  type: "number",
                  optional: !0,
                  min: 0
                },
                zoom: {
                  type: "number",
                  optional: !0,
                  min: 0
                }
              }
            }
          }
        }
      }
    }, {
      exportable: function (t) {
        fn(n, wn);
        var e = vn(n);

        function n() {
          return cn(this, n), e.apply(this, arguments);
        }

        return dn(n, [{
          key: "onInitialise",
          value: function value() {
            var t = this.props.duration,
                e = document.createElementNS("http://www.w3.org/2000/svg", "path");
            e.setAttributeNS(null, "d", this.targetValue.path), this.data = {
              path: e,
              finalPoint: null,
              startPoint: null,
              zoom: this.targetValue.zoom,
              pathLength: e.getTotalLength(),
              startFrom: this.attrs.from ? this.attrs.from : 0,
              endTo: this.attrs.to ? this.attrs.to : 1,
              transitionDuration: this.attrs.transition ? this.attrs.transition : 0,

              get alongPathDuration() {
                return t - this.transitionDuration;
              }

            }, this.data.finalPoint = e.getPointAtLength(this.data.endTo * this.data.pathLength), this.data.startPoint = e.getPointAtLength(this.data.startFrom * this.data.pathLength), this.targetValue.x = this.data.finalPoint.x, this.targetValue.y = this.data.finalPoint.y;
          }
        }, {
          key: "onGetContext",
          value: function value() {
            this.adaptor = new bn(this.element), this.data.zoom = this.targetValue.zoom, this.progressMethod = this.adaptor.createPathProgressFunction(this.data, this.initialValue);
          }
        }]), n;
      }(),
      name: "FollowPath",
      attributesValidationRules: {
        animatedAttrs: {
          type: "object",
          props: {
            position: {
              type: "object",
              props: {
                path: {
                  type: "string",
                  optional: !1
                },
                zoom: {
                  type: "number",
                  optional: !0,
                  min: 0
                }
              }
            }
          }
        },
        transition: {
          type: "number",
          integer: !0,
          min: 0,
          optional: !0
        },
        from: {
          type: "number",
          min: 0,
          max: 1,
          optional: !0
        },
        to: {
          type: "number",
          min: 0,
          max: 1,
          optional: !0
        }
      }
    }],
    compositeAttributes: {
      position: ["x", "y", "zoom", "path"]
    }
  },
      Mn = n.default.loadPlugin(wt),
      kn = n.default.loadPlugin(sn),
      On = n.default.loadPlugin(xn),
      Dn = function () {
    function t(e) {
      i(this, t), this.instance = e;
    }

    return r(t, [{
      key: "buildStaticControl",
      value: function value() {
        return new Mn.Anime({
          animatedAttrs: {}
        }, {
          selector: ".container-lineGraph",
          duration: this.instance.staticDur
        });
      }
    }, {
      key: "buildBackgroundIntro",
      value: function value() {
        return new Mn.Anime({
          animatedAttrs: {
            height: "70%"
          },
          initialValues: {
            height: "0%"
          }
        }, {
          selector: ".graph-background",
          duration: Math.trunc(.2 * this.instance.introDur),
          easing: "easeInOutQuart"
        });
      }
    }, {
      key: "buildBackgroundOutro",
      value: function value() {
        return new Mn.Anime({
          animatedAttrs: {
            height: "0%"
          },
          initialValues: {
            height: "70%"
          }
        }, {
          selector: ".graph-background",
          duration: Math.trunc(.2 * this.instance.outroDur),
          easing: "easeInOutQuart"
        });
      }
    }, {
      key: "buildTitleIntroCombo",
      value: function value() {
        new n.default.Group();
        var t = .13 * this.instance.introDur,
            e = [];

        for (var i in this.instance.words) {
          e.push({
            incidentClass: Mn.Anime,
            attrs: {
              animatedAttrs: {
                top: "0px",
                opacity: 1
              },
              initialValues: {
                top: "-50px",
                opacity: 0
              }
            },
            props: {
              selector: "#word-".concat(i),
              duration: Math.trunc(t / this.instance.words.length),
              easing: "easeInOutQuart"
            },
            position: Math.trunc(t / this.instance.words.length * i)
          });
        }

        return new n.default.Combo({
          incidents: e
        }, {
          selector: ".title-wrapper-lineGraph"
        });
      }
    }, {
      key: "buildTitleOutroCombo",
      value: function value() {
        new n.default.Group();
        var t = .13 * this.instance.outroDur,
            e = [];

        for (var i in this.instance.words) {
          e.push({
            incidentClass: Mn.Anime,
            attrs: {
              animatedAttrs: {
                top: "-50px",
                opacity: 0
              },
              initialValues: {
                top: "0px",
                opacity: 1
              }
            },
            props: {
              selector: "#word-".concat(i),
              duration: Math.trunc(t / this.instance.words.length),
              easing: "easeInOutQuart"
            },
            position: Math.trunc(t / this.instance.words.length * (this.instance.words.length - 1 - i))
          });
        }

        return new n.default.Combo({
          incidents: e
        }, {
          selector: ".title-wrapper-lineGraph"
        });
      }
    }, {
      key: "buildIntroLegend",
      value: function value() {
        var t = .25 * this.instance.introDur,
            e = t / this.instance.dataSetsNum,
            i = 1 === this.instance.dataSetsNum ? null : "@stagger(0, ".concat(t - e, ")"),
            a = [{
          incidentClass: Mn.Anime,
          attrs: {
            animatedAttrs: {
              height: "".concat(this.instance.legendHeight, "%")
            },
            initialValues: {
              height: "0%"
            }
          },
          props: {
            duration: Math.trunc(.2 * this.instance.introDur),
            easing: "easeInOutQuart"
          },
          position: 0
        }, {
          incidentClass: Mn.Anime,
          attrs: {
            animatedAttrs: {
              opacity: "1"
            },
            initialValues: {
              opacity: "0"
            }
          },
          props: {
            selector: ".color-wrapper",
            duration: Math.trunc(.1 * this.instance.introDur),
            delay: i,
            easing: "easeInOutQuad"
          },
          position: Math.trunc(.15 * this.instance.introDur)
        }, {
          incidentClass: Mn.Anime,
          attrs: {
            animatedAttrs: {
              opacity: "1"
            },
            initialValues: {
              opacity: "0"
            }
          },
          props: {
            selector: ".line-title",
            duration: Math.trunc(.1 * this.instance.introDur),
            delay: i,
            easing: "easeInOutQuad"
          },
          position: Math.trunc(.15 * this.instance.introDur)
        }];
        return new n.default.Combo({
          incidents: a
        }, {
          selector: ".legend-wrapper"
        });
      }
    }, {
      key: "buildOutroLegend",
      value: function value() {
        var t = .25 * this.instance.outroDur,
            e = t / this.instance.dataSetsNum,
            i = 1 === this.instance.dataSetsNum ? null : "@stagger(0, ".concat(t - e, ", 0, linear, linear, true)"),
            a = [{
          incidentClass: Mn.Anime,
          attrs: {
            animatedAttrs: {
              height: "0%"
            },
            initialValues: {
              height: "".concat(this.instance.legendHeight, "%")
            }
          },
          props: {
            duration: Math.trunc(.2 * this.instance.introDur),
            easing: "easeInOutQuart"
          },
          position: t
        }, {
          incidentClass: Mn.Anime,
          attrs: {
            animatedAttrs: {
              opacity: "0"
            },
            initialValues: {
              opacity: "1"
            }
          },
          props: {
            selector: ".color-wrapper",
            duration: Math.trunc(.1 * this.instance.introDur),
            delay: i,
            easing: "easeInOutQuad"
          },
          position: Math.trunc(t - .15 * this.instance.introDur)
        }, {
          incidentClass: Mn.Anime,
          attrs: {
            animatedAttrs: {
              opacity: "0"
            },
            initialValues: {
              opacity: "1"
            }
          },
          props: {
            selector: ".line-title",
            duration: Math.trunc(.1 * this.instance.introDur),
            delay: i,
            easing: "easeInOutQuad"
          },
          position: Math.trunc(t - .15 * this.instance.introDur)
        }];
        return new n.default.Combo({
          incidents: a
        }, {
          selector: ".legend-wrapper"
        });
      }
    }, {
      key: "buildIntroLabels",
      value: function value() {
        var t = new n.default.Group();
        t.addIncident(new Mn.Anime({
          animatedAttrs: {
            width: "100%"
          },
          initialValues: {
            width: "0%"
          }
        }, {
          selector: ".block-background",
          duration: Math.trunc(.25 * this.instance.introDur),
          easing: "easeInOutQuart"
        }), 0);
        var e = .2 * this.instance.introDur,
            i = 3 * e / (this.instance.data.length + 2);

        for (var a in this.instance.data) {
          var r = i / 2,
              o = [];

          for (var s in this.instance.data[a].name) {
            o.push({
              incidentClass: Mn.Anime,
              attrs: {
                animatedAttrs: {
                  opacity: 1
                },
                initialValues: {
                  opacity: 0
                }
              },
              props: {
                selector: "#letter-".concat(a, "-").concat(s),
                duration: Math.trunc(.015 * this.instance.introDur),
                easing: "easeInOutQuart"
              },
              position: Math.trunc(i - r)
            }), r /= 2;
          }

          var l = new n.default.Combo({
            incidents: o
          }, {
            selector: ".label-container"
          });
          t.addIncident(l, Math.trunc(.14 * this.instance.introDur + e / (this.instance.data.length + 1) * (this.instance.data.length - a - 1)));
        }

        return t;
      }
    }, {
      key: "buildOutroLabels",
      value: function value() {
        var t = new n.default.Group(),
            e = .55 * this.instance.outroDur;
        t.addIncident(new Mn.Anime({
          animatedAttrs: {
            width: "0%"
          },
          initialValues: {
            width: "100%"
          }
        }, {
          selector: ".block-background",
          duration: Math.trunc(.55 * e),
          easing: "easeInOutQuart"
        }), 0 * e);
        var i = .2 * this.instance.outroDur,
            a = 3 * i / (this.instance.data.length + 2);

        for (var r in this.instance.data) {
          var o = a / 2,
              s = [];

          for (var l in this.instance.data[r].name) {
            s.push({
              incidentClass: Mn.Anime,
              attrs: {
                animatedAttrs: {
                  opacity: 0
                },
                initialValues: {
                  opacity: 1
                }
              },
              props: {
                selector: "#letter-".concat(r, "-").concat(l),
                duration: Math.trunc(.015 * this.instance.outroDur),
                easing: "easeInOutQuart"
              },
              position: Math.trunc(a - (a - o))
            }), o /= 2;
          }

          var u = new n.default.Combo({
            incidents: s
          }, {
            selector: ".label-container"
          });
          t.addIncident(u, Math.trunc(i * r / (this.instance.data.length + 1)));
        }

        return t;
      }
    }, {
      key: "buildIntroStele",
      value: function value() {
        var t = new n.default.Group(),
            e = 5 * (.3 * this.instance.introDur) / (this.instance.data.length + 1),
            i = e / 5,
            a = 3 * e / (this.instance.steleBlockNum + 1);

        for (var r in this.instance.data) {
          var o = new n.default.Group({
            selector: "#stele-".concat(r)
          }),
              s = new n.default.Combo({
            incidents: [{
              incidentClass: Mn.Anime,
              attrs: {
                animatedAttrs: {
                  opacity: 1
                },
                initialValues: {
                  opacity: 0
                }
              },
              props: {
                duration: Math.trunc(a)
              },
              position: 0
            }]
          }, {
            selector: ".stele-block-".concat(r),
            delay: "@stagger(0, ".concat(Math.trunc(e - a), ", 0, easeOutQuad)")
          });
          o.addIncident(s, 0), t.addIncident(o, Math.trunc(r * i));
        }

        return t;
      }
    }, {
      key: "buildOutroStele",
      value: function value() {
        var t = new n.default.Group(),
            e = 5 * (.3 * this.instance.outroDur) / (this.instance.data.length + 1),
            i = e / 5,
            a = 3 * e / (this.instance.steleBlockNum + 1);

        for (var r in this.instance.data) {
          var o = new n.default.Group({
            selector: "#stele-".concat(r)
          }),
              s = new n.default.Combo({
            incidents: [{
              incidentClass: Mn.Anime,
              attrs: {
                animatedAttrs: {
                  opacity: 0
                },
                initialValues: {
                  opacity: 1
                }
              },
              props: {
                duration: Math.trunc(a)
              },
              position: 0
            }]
          }, {
            selector: ".stele-block-".concat(r),
            delay: "@stagger(0, ".concat(Math.trunc(e - a), ", 0, easeOutQuad, omni, true)")
          });
          o.addIncident(s, 0), t.addIncident(o, (this.instance.data.length - 1 - r) * i);
        }

        return t;
      }
    }, {
      key: "buildIntroGraph",
      value: function value(t) {
        for (var e = this.instance.introDur / this.instance.data.length, i = .35 * e, a = .8 * e, r = new n.default.Group(), o = new n.default.Group(), s = 0; s < this.instance.dataSetsNum; s++) {
          for (var l = 0; l < this.instance.data.length; l++) {
            if (l !== this.instance.data.length - 1) {
              var u = new kn.Draw({
                animatedAttrs: {
                  cover: 1
                },
                initialValues: {
                  cover: 0
                }
              }, {
                selector: "#line-".concat(s, "-").concat(l),
                duration: Math.trunc(a),
                easing: "easeInOutQuad"
              });
              r.addIncident(u, Math.trunc(e * l + .2 * e));
            }

            var c = new Mn.Anime({
              animatedAttrs: {
                opacity: 1,
                r: this.instance.r
              },
              initialValues: {
                opacity: 0,
                r: 0
              }
            }, {
              selector: "#point-".concat(s, "-").concat(l),
              duration: Math.trunc(i),
              easing: "easeInQuart"
            });
            o.addIncident(c, Math.trunc(e * l));
            var h = this.instance.findPointY(l, s) - .083 * this.instance.linesHeight,
                p = h + .07 * this.instance.linesHeight / 2,
                f = 5 * this.instance.data.length > 10 ? 10 : 5 * this.instance.data.length;
            f = f < 6 ? 6 : f;
            var g = this.instance.findPointX(l) - f * this.instance.linesWidth / 100 * .5,
                m = g + this.instance.linesWidth * (f / 100) / 2,
                y = new Mn.Anime({
              animatedAttrs: {
                opacity: .6,
                width: "".concat(f, "%"),
                "min-width": "".concat(f, "%"),
                height: "7%",
                top: "".concat(h, "px"),
                left: "".concat(g, "px"),
                "font-size": this.instance.fontSizeInner
              },
              initialValues: {
                opacity: 0,
                width: "0%",
                "min-width": "0%",
                height: "0%",
                top: "".concat(p, "px"),
                left: "".concat(m, "px"),
                "font-size": 0
              }
            }, {
              selector: ".label-".concat(s, "-").concat(this.instance.data[l].name),
              duration: Math.trunc(i),
              easeing: "easeInOutCubic"
            });

            if (t.addIncident(y, Math.trunc(e * l + .2 * i)), this.instance.trace) {
              var v = d(this.buildSvgIntroParams(l, i, e)),
                  b = v[0],
                  w = v[1],
                  x = v[2],
                  M = v[3],
                  k = v[4],
                  O = v[5],
                  D = v[6],
                  C = v[7],
                  S = new On.ZoomTo({
                animatedAttrs: {
                  position: {
                    x: O,
                    y: D,
                    zoom: C
                  }
                },
                initialValues: {
                  position: {
                    x: x,
                    y: M,
                    zoom: k
                  }
                }
              }, {
                selector: ".viewport-lineGraph",
                duration: Math.trunc(w),
                easing: "easeInOutQuad"
              });
              t.addIncident(S, Math.trunc(b));
            }
          }
        }

        return [t, r, o];
      }
    }, {
      key: "buildSvgIntroParams",
      value: function value(t, e, n) {
        var i,
            a,
            r,
            o = 0,
            s = 0,
            l = this.instance.findPointX(t) + (1 - this.instance.graphScale.width) / 2 * $e.lineGraph.originalDims.width,
            u = this.instance.findPointY(t, 0) + (1 - this.instance.graphScale.height) / 2 * $e.lineGraph.originalDims.height,
            c = this.instance.traceScale;
        return 0 === t ? (i = .5 * $e.lineGraph.originalDims.width, a = .5 * $e.lineGraph.originalDims.height, r = this.instance.traceScale, s = e - .15 * n, o = 0) : t === this.instance.data.length - 1 ? (i = this.instance.findPointX(t - 1) + (1 - this.instance.graphScale.width) / 2 * $e.lineGraph.originalDims.width, a = this.instance.findPointY(t - 1, 0) + (1 - this.instance.graphScale.height) / 2 * $e.lineGraph.originalDims.height, r = this.instance.traceScale, l = .5 * $e.lineGraph.originalDims.width, u = .5 * $e.lineGraph.originalDims.height, c = 1, o = n * (t - 1) + e, s = n + e - .15 * n) : (i = this.instance.findPointX(t - 1) + (1 - this.instance.graphScale.width) / 2 * $e.lineGraph.originalDims.width, a = this.instance.findPointY(t - 1, 0) + (1 - this.instance.graphScale.height) / 2 * $e.lineGraph.originalDims.height, r = this.instance.traceScale, s = n, o = n * (t - 1) + e), [o, s, i, a, r, l, u, c];
      }
    }, {
      key: "buildOutroGraph",
      value: function value(t) {
        for (var e = this.instance.outroDur / (this.instance.data.length + 1), i = .25 * e, a = .8 * e, r = this.instance.trace ? 1 : 0, o = new n.default.Group(), s = new n.default.Group(), l = 0; l < this.instance.dataSetsNum; l++) {
          for (var u = new n.default.Group(), c = 0; c < this.instance.data.length; c++) {
            if (c !== this.instance.data.length - 1) {
              var h = new kn.Draw({
                animatedAttrs: {
                  cover: 0
                },
                initialValues: {
                  cover: 1
                }
              }, {
                selector: "#line-".concat(l, "-").concat(c),
                duration: Math.trunc(a),
                easing: "easeInOutQuad"
              });
              o.addIncident(h, Math.trunc(e * (this.instance.data.length + r - c - 2) + .2 * e));
            }

            var d = new Mn.Anime({
              animatedAttrs: {
                opacity: 0,
                r: 0
              },
              initialValues: {
                opacity: 1,
                r: this.instance.r
              }
            }, {
              selector: "#point-".concat(l, "-").concat(c),
              duration: Math.trunc(i),
              easeing: "easeOutCubic"
            });
            s.addIncident(d, Math.trunc(e * (this.instance.data.length + r - c - 1)));
            var p = this.instance.findPointY(c, l) - .083 * this.instance.linesHeight,
                f = p + .07 * this.instance.linesHeight / 2,
                g = 5 * this.instance.data.length > 10 ? 10 : 5 * this.instance.data.length;
            g = g < 6 ? 6 : g;
            var m = this.instance.findPointX(c) - g * this.instance.linesWidth / 100 * .5,
                y = m + this.instance.linesWidth * (g / 100) / 2,
                v = new Mn.Anime({
              animatedAttrs: {
                opacity: 0,
                width: "0%",
                "min-width": "0%",
                height: "0%",
                top: "".concat(f, "px"),
                left: "".concat(y, "px"),
                "font-size": 0
              },
              initialValues: {
                opacity: .6,
                width: "".concat(g, "%"),
                "min-width": "".concat(g, "%"),
                height: "7%",
                top: "".concat(p, "px"),
                left: "".concat(m, "px"),
                "font-size": this.instance.fontSizeInner
              }
            }, {
              selector: ".label-".concat(l, "-").concat(this.instance.data[c].name),
              duration: Math.trunc(i),
              easeing: "easeInOutCubic"
            });
            u.addIncident(v, Math.trunc(e * (this.instance.data.length + r - c - 1) + .2 * i));
          }

          t.addIncident(u, 0);
        }

        return [t, o, s];
      }
    }]), t;
  }(),
      Cn = function (t) {
    s(a, t);
    var e = h(a);

    function a() {
      return i(this, a), e.apply(this, arguments);
    }

    return r(a, [{
      key: "html",
      get: function get() {
        this.buildVars();
        var t = [];

        for (var e in this.words) {
          for (var i = [], a = 0; a < this.words[e].length; a++) {
            i += this.words[e][a];
          }

          t.push(n.default.utils.createDOMElement("div", {
            id: "word-" + e,
            class: "fontColorOn letter-wrapper-title"
          }, i)), e != this.words.length - 1 && t.push(n.default.utils.createDOMElement("div", {
            class: "space-char letter-wrapper-title"
          }, "-"));
        }

        var r = [];

        if (this.legend) {
          for (var o = [], s = 0; s < this.dataSetsNum; s++) {
            o.push(n.default.utils.createDOMElement("div", {
              class: "line-wrapper"
            }, n.default.utils.createDOMElement("div", {
              class: "color-wrapper"
            }, n.default.utils.createDOMElement("div", {
              class: "line-color color-" + s
            })), n.default.utils.createDOMElement("div", {
              class: "line-title"
            }, this.dataSets[s].title)));
          }

          r.push(n.default.utils.createDOMElement("div", {
            class: "legend-wrapper"
          }, o));
        }

        var l = [];

        for (var u in this.data) {
          for (var c = [], h = 0; h < this.steleBlockNum; h++) {
            c.push(n.default.utils.createDOMElement("div", {
              class: "stele-block-" + u + " stele-block"
            }));
          }

          l.push(n.default.utils.createDOMElement("div", {
            id: "stele-" + u,
            class: "data-stele"
          }, c));
        }

        for (var d = [], p = 0; p < this.dataSetsNum; p++) {
          for (var f = [], g = 0; g < this.data.length; g++) {
            var m = [],
                y = this.findPointX(g),
                v = this.findPointY(g, p);

            if (g !== this.data.length - 1) {
              var b = this.findPointX(g + 1),
                  w = this.findPointY(g + 1, p);
              m.push(n.default.utils.createDOMElement("path", {
                id: "line-".concat(p, "-").concat(g),
                class: "line-".concat(p),
                d: "M ".concat(y, " ").concat(v) + "L ".concat(b, " ").concat(w),
                stroke: this.dataSets[p].color,
                "stroke-width": "0.65%",
                "stroke-linecap": "round",
                fill: "none"
              }));
            }

            m.push(n.default.utils.createDOMElement("circle", {
              id: "point-".concat(p, "-").concat(g),
              class: "point-".concat(p, " datapoint"),
              cx: "".concat(y),
              cy: "".concat(v),
              r: "".concat(this.r, "%"),
              fill: this.accentC,
              stroke: this.accentC
            })), f.push(n.default.utils.createDOMElement("g", null, m));
          }

          d.push(n.default.utils.createDOMElement("g", null, f));
        }

        var x = [];
        x.push(n.default.utils.createDOMElement("svg", {
          class: "lines-container",
          viewbox: "0 0 ".concat(this.linesWidth, " ").concat(this.linesHeight)
        }, d));

        for (var M = [], k = 0; k < this.dataSetsNum; k++) {
          for (var O = [], D = 0; D < this.data.length; D++) {
            O.push(n.default.utils.createDOMElement("div", null, n.default.utils.createDOMElement("div", {
              class: "hoverPoint-".concat(k, "-").concat(this.data[D].name, " hoverPoint")
            }), n.default.utils.createDOMElement("div", {
              class: "label-".concat(k, "-").concat(this.data[D].name, " inner-label-container"),
              id: "label-".concat(k, "-").concat(this.data[D].name)
            }, n.default.utils.createDOMElement("div", {
              class: "inner-label"
            }, "".concat(parseFloat(this.data[D].values[k].toFixed(2)), " ").concat(this.unit)))));
          }

          M.push(n.default.utils.createDOMElement("div", {
            class: "line-".concat(k, "-label-container")
          }, O));
        }

        var C = [];

        for (var S in this.data) {
          var P = [];

          for (var I in this.data[S].name.length > 4 && (this.data[S].name = this.data[S].name.slice(0, 4)), this.data[S].name) {
            P.push(n.default.utils.createDOMElement("div", {
              id: "letter-" + S + "-" + I,
              class: "letter-container"
            }, n.default.utils.createDOMElement("div", {
              class: "letter-wrapper-label fontColorOn"
            }, this.data[S].name[I])));
          }

          C.push(n.default.utils.createDOMElement("div", {
            class: "label-container",
            id: "label-" + S
          }, P));
        }

        return n.default.utils.createDOMElement("div", {
          class: "container-lineGraph"
        }, n.default.utils.createDOMElement("div", {
          class: "viewport-lineGraph"
        }, n.default.utils.createDOMElement("div", {
          class: "title-container-lineGraph"
        }, n.default.utils.createDOMElement("div", {
          class: "title-wrapper-lineGraph"
        }, t)), r, n.default.utils.createDOMElement("div", {
          class: "graph-background"
        }), n.default.utils.createDOMElement("div", {
          class: "dataStele-container"
        }, l), n.default.utils.createDOMElement("div", {
          class: "svg-container"
        }, x), n.default.utils.createDOMElement("div", {
          class: "graph-labels-container"
        }, M), n.default.utils.createDOMElement("div", {
          class: "x-labels-container-lineGraph"
        }, C), n.default.utils.createDOMElement("div", {
          class: "x-labels-back-wrapper-lineGraph"
        }, n.default.utils.createDOMElement("div", {
          class: "block-background"
        }))));
      }
    }, {
      key: "css",
      get: function get() {
        return function (t) {
          var e;
          Le.setup({
            createGenerateId: function createGenerateId() {
              return function (t) {
                return t.key;
              };
            }
          });

          for (var n = {
            "container-lineGraph": {
              width: "100%",
              height: "100%",
              background: t.backgroundC,
              "font-family": t.fontFamily,
              "font-size": t.fontSizeTitle,
              display: "flex"
            },
            "viewport-lineGraph": {
              position: "absolute",
              top: "".concat(t.legend ? "2%" : "0%"),
              "transform-origin": "top left",
              width: "100%",
              height: "100%"
            },
            "title-container-lineGraph": {
              background: "transparent",
              width: "60%",
              height: "10%",
              top: "8%",
              left: "8%",
              position: "absolute",
              display: "flex",
              "align-items": "center",
              "z-index": "1",
              "justify-content": "space-around"
            },
            "title-wrapper-lineGraph": {
              display: "flex",
              "flex-grow": "2",
              "flex-wrap": "nowrap",
              overflow: "hidden",
              "padding-left": "6px"
            },
            "letter-wrapper-title": {
              display: "flex",
              "flex-direction": "column",
              position: "relative",
              "font-size": "190%"
            },
            "legend-wrapper": (e = {
              position: "absolute",
              width: "".concat(1 === t.dataSetsNum ? 14 : 26, "%"),
              height: "".concat(t.legendHeight, "%"),
              top: "".concat(11 - 3 * (t.legendHeightFactor + (t.legendHeightFactor % 1 ? 1 : 0) - 1), "%"),
              left: "".concat(68 + (1 === t.dataSetsNum ? 12 : 0), "%"),
              background: t.primaryC
            }, o(e, "background", "rgb(132, 130, 128)"), o(e, "font-size", t.fontSizeInner), o(e, "display", "flex"), o(e, "flex-wrap", "wrap"), o(e, "align-items", "center"), o(e, "z-index", "1"), e),
            "line-wrapper": {
              width: "".concat(1 === t.dataSetsNum ? 100 : 50, "%"),
              height: "".concat(1 / (t.legendHeightFactor + (t.legendHeightFactor % 1 ? 1 : 0)) * 100, "%"),
              display: "flex",
              overflow: "hidden"
            },
            "color-wrapper": {
              display: "flex",
              "align-items": "center",
              "justify-content": "center",
              width: "25%",
              height: "100%"
            },
            "line-color": {
              width: "60%",
              height: "60%"
            },
            "line-title": {
              display: "flex",
              "align-items": "flex-start",
              "justify-content": "flex-start",
              width: "75%",
              height: "100%"
            },
            "graph-background": {
              left: "10%",
              top: "13%",
              width: "80%",
              height: "70%",
              position: "absolute",
              background: t.secondaryC
            },
            "svg-container": {
              width: "76%",
              height: "58%",
              top: "21%",
              left: "12%",
              position: "relative",
              "z-index": "1",
              overflow: "visible"
            },
            "lines-container": {
              width: "100%",
              height: "100%",
              "min-height": "100%",
              "min-width": "100%",
              overflow: "visible"
            },
            "dataStele-container": {
              width: "76%",
              height: "58%",
              top: "21%",
              left: "12%",
              position: "absolute",
              display: "flex",
              "align-items": "center",
              "justify-content": "space-around",
              "z-index": "0"
            },
            "data-stele": {
              height: "100%",
              width: "1%",
              display: "flex",
              "flex-direction": "column-reverse",
              "justify-content": "space-between"
            },
            "stele-block": {
              width: "100%",
              height: "".concat(Math.trunc(t.linesHeight * (.26 / t.steleBlockNum)), "px"),
              "max-height": "5px",
              opacity: "0.8",
              background: t.primaryC
            },
            "graph-labels-container": {
              width: "76%",
              height: "58%",
              top: "21%",
              left: "12%",
              position: "absolute"
            },
            "x-labels-back-wrapper-lineGraph": {
              width: "76%",
              height: "6%",
              top: "80%",
              left: "12%",
              position: "absolute",
              display: "flex",
              "justify-content": "flex-end"
            },
            "block-background": {
              width: "100%",
              height: "100%",
              background: t.accentC,
              position: "relative"
            },
            "x-labels-container-lineGraph": {
              background: "transparent",
              width: "76%",
              height: "6%",
              top: "80%",
              left: "12%",
              position: "absolute",
              display: "flex",
              "align-items": "center",
              "z-index": "1",
              "justify-content": "space-around"
            },
            "label-container": {
              display: "flex",
              "flex-direction": "row",
              overflow: "hidden"
            },
            "letter-container": {
              overflow: "hidden",
              position: "relative"
            },
            "letter-wrapper-label": {
              "font-size": "100%",
              display: "flex",
              "flex-direction": "column",
              position: "relative"
            },
            fontColorOn: {
              color: t.fontC
            },
            "space-char": {
              visibility: "hidden"
            },
            "inner-label": {
              opacity: "1",
              display: "flex",
              "justify-content": "center",
              "align-items": "center",
              width: "100%",
              height: "100%"
            },
            "inner-label-container": {
              "font-size": t.fontSizeInner,
              opacity: "0.6",
              width: "".concat(5 * t.data.length, "%"),
              "min-width": "6%",
              "max-width": "10%",
              height: "7%",
              position: "absolute",
              display: "".concat(t.hover ? "none" : "block"),
              "z-index": "2"
            },
            hoverPoint: {
              position: "absolute",
              width: "".concat(.01 * $e.lineGraph.originalDims.width, "px"),
              height: "".concat(.01 * $e.lineGraph.originalDims.width, "px"),
              "border-radius": "50%",
              "z-index": "9999"
            }
          }, i = 0; i < t.dataSetsNum; i++) {
            var a = void 0;
            a = t.dataSetsNum > 1 ? t.dataSets[i].color : t.quaternaryC, n["color-".concat(i)] = {
              background: a
            }, n["line-".concat(i, "-label-container")] = {
              width: "100%",
              height: "100%",
              position: "absolute"
            };

            for (var r = 0; r < t.data.length; r++) {
              var s = t.findPointY(r, i) - .083 * t.linesHeight,
                  l = 5 * t.data.length > 10 ? 10 : 5 * t.data.length;
              l = l < 6 ? 6 : l;
              var u = t.findPointX(r) - l * t.linesWidth / 100 * .5;
              n["label-".concat(i, "-").concat(t.data[r].name)] = {
                background: a,
                top: "".concat(s, "px"),
                left: "".concat(u, "px")
              };
              var c = l * t.linesWidth / 100 * .5 - .01 * $e.lineGraph.originalDims.width / 2,
                  h = .07 * t.linesHeight;
              n["hoverPoint-".concat(i, "-").concat(t.data[r].name)] = {
                top: "".concat(s + h, "px"),
                left: "".concat(u + c, "px")
              };
            }
          }

          for (var d = Le.createStyleSheet(n).toString(), p = 0; p < t.dataSetsNum; p++) {
            for (var f = 0; f < t.data.length; f++) {
              d += "\n                .hoverPoint-".concat(p, "-").concat(t.data[f].name, ":hover + .label-").concat(p, "-").concat(t.data[f].name, " {\n                    display: block;\n                }\n            ");
            }
          }

          return d;
        }(this);
      }
    }, {
      key: "fonts",
      get: function get() {
        return [{
          type: "google-font",
          src: "".concat(this.url)
        }];
      }
    }, {
      key: "buildTree",
      value: function value() {
        if (Mt(this, ".container-lineGraph"), this.attrs.timings.intro) {
          var t = new n.default.Group();
          t.addIncident(this.animConstructor.buildBackgroundIntro(), 0 * this.introDur), t.addIncident(this.animConstructor.buildTitleIntroCombo(), Math.trunc(.14 * this.introDur)), t.addIncident(this.animConstructor.buildIntroLegend(), Math.trunc(.1 * this.introDur)), t.addIncident(this.animConstructor.buildIntroLabels(), Math.trunc(.18 * this.introDur)), t.addIncident(this.animConstructor.buildIntroStele(), Math.trunc(.45 * this.introDur));
          var e = .35 * (this.introDur / this.data.length),
              i = d(this.animConstructor.buildIntroGraph(t)),
              a = i[0],
              r = i[1],
              o = i[2];
          (t = a).addIncident(r, Math.trunc(e)), t.addIncident(o, 0), this.addIncident(t, 0);
        }

        if (this.attrs.timings.outro) {
          var s = new n.default.Group();
          s.addIncident(this.animConstructor.buildBackgroundOutro(), Math.trunc(.8 * this.outroDur)), s.addIncident(this.animConstructor.buildTitleOutroCombo(), Math.trunc(.76 * this.outroDur)), s.addIncident(this.animConstructor.buildOutroLegend(), Math.trunc(.1 * this.outroDur)), s.addIncident(this.animConstructor.buildOutroLabels(), this.outroDur - .55 * this.outroDur), s.addIncident(this.animConstructor.buildOutroStele(), .25 * this.outroDur);
          var l = .25 * (this.outroDur / (this.data.length + 1)),
              u = d(this.animConstructor.buildOutroGraph(s)),
              c = u[0],
              h = u[1],
              p = u[2];
          (s = c).addIncident(h, Math.trunc(l)), s.addIncident(p, 0), this.addIncident(s, 0 + this.introDur + this.staticDur);
        }

        this.addIncident(this.animConstructor.buildStaticControl(), this.introDur);
      }
    }, {
      key: "buildVars",
      value: function value() {
        var t = this;
        this.animConstructor = new Dn(this), this.data = this.attrs.data.data, this.colorPalette = g, this.attrs.palette = this.attrs.palette ? this.attrs.palette : {}, this.primaryC = this.attrs.palette.primary ? this.attrs.palette.primary : this.colorPalette.gray, this.secondaryC = this.attrs.palette.secondary ? this.attrs.palette.secondary : this.colorPalette.lightGray, this.tertiaryC = this.attrs.palette.tertiary ? this.attrs.palette.tertiary : this.colorPalette.darkGray, this.quaternaryC = this.attrs.palette.quaternary ? this.attrs.palette.quaternary : this.colorPalette.whiteBack, this.fontC = this.attrs.palette.font ? this.attrs.palette.font : this.colorPalette.font, this.accentC = this.attrs.palette.accent ? this.attrs.palette.accent : this.colorPalette.accent, this.backgroundC = this.attrs.palette.background ? this.attrs.palette.background : this.colorPalette.background, this.title = this.attrs.data.title, this.words = this.title.split(" "), this.dataSets = this.attrs.data.dataSets ? this.attrs.data.dataSets : [{
          title: "",
          color: this.accentC
        }], this.dataSetsNum = this.dataSets.length;
        var e = 2;
        this.dataSets.map(function (n, i) {
          "" !== n.color && n.color || (n.color = t.colorPalette.dataColors[e], e++), "" !== n.title && n.title ? n.title.length > 10 && (n.title = n.title.substr(0, 10)) : n.title = "Dataset-".concat(i + 1);
        }), this.legend = !!this.attrs.legend && this.attrs.legend, this.legend = this.dataSetsNum > 1 || this.legend, this.maxPoint = 0;

        var n,
            i = function (t, e) {
          var _n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];

          if (!_n) {
            if (Array.isArray(t) || (_n = p(t)) || e && t && "number" == typeof t.length) {
              _n && (t = _n);

              var i = 0,
                  a = function a() {};

              return {
                s: a,
                n: function n() {
                  return i >= t.length ? {
                    done: !0
                  } : {
                    done: !1,
                    value: t[i++]
                  };
                },
                e: function e(t) {
                  throw t;
                },
                f: a
              };
            }

            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }

          var r,
              o = !0,
              s = !1;
          return {
            s: function s() {
              _n = _n.call(t);
            },
            n: function n() {
              var t = _n.next();

              return o = t.done, t;
            },
            e: function e(t) {
              s = !0, r = t;
            },
            f: function f() {
              try {
                o || null == _n.return || _n.return();
              } finally {
                if (s) throw r;
              }
            }
          };
        }(this.data);

        try {
          for (i.s(); !(n = i.n()).done;) {
            var a = n.value;
            Math.max.apply(Math, d(a.values)) > this.maxPoint && (this.maxPoint = Math.max.apply(Math, d(a.values)));
          }
        } catch (t) {
          i.e(t);
        } finally {
          i.f();
        }

        this.maxPoint = this.attrs.data.maxValue ? this.attrs.data.maxValue : this.maxPoint, this.hover = !!this.attrs.data.hover && this.attrs.data.hover, this.hover = 1 !== this.dataSetsNum || this.hover, this.attrs.trace = this.attrs.trace ? this.attrs.trace : {}, this.trace = !!this.attrs.trace.toggle && this.attrs.trace.toggle, this.trace = 1 === this.dataSetsNum && this.trace, this.traceScale = this.attrs.trace.scale ? this.attrs.trace.scale : 1.4, this.unit = this.attrs.data.unit ? this.attrs.data.unit : "%", this.interval = this.attrs.data.interval ? this.attrs.data.interval : 5, this.steleBlockNum = this.maxPoint / this.interval + 1, this.config = $e, this.graphScale = {
          width: .76,
          height: .58
        }, this.legendHeightFactor = 1 === this.dataSetsNum ? 1 : this.dataSetsNum / 2, this.legendHeight = 4 * (this.legendHeightFactor + (this.legendHeightFactor % 1 ? 1 : 0)), this.linesWidth = $e.lineGraph.originalDims.width * this.graphScale.width, this.linesHeight = $e.lineGraph.originalDims.height * this.graphScale.height, this.steleWidth = .01 * this.linesWidth, this.spaceAround = (this.linesWidth - this.steleWidth * this.data.length) / (2 * this.data.length), this.r = .65, this.findPointX = function (e) {
          return t.steleWidth / 2 + t.spaceAround + e * (2 * t.spaceAround + t.steleWidth);
        }, this.findPointY = function (e, n) {
          return t.linesHeight - t.data[e].values[n] * t.linesHeight / t.maxPoint;
        }, this.attrs.font = this.attrs.font ? this.attrs.font : {}, this.fontFamily = this.attrs.font.fontFamily ? this.attrs.font.fontFamily : "'Staatliches', cursive", this.fontSizeLabel = this.attrs.font.size ? this.attrs.font.size : "1.7rem", this.fontSizeTitle = "200%", this.fontSizeInner = "80%", this.url = this.attrs.font.url ? this.attrs.font.url : "https://fonts.googleapis.com/css2?family=Staatliches&display=swap", this.attrs.timings = this.attrs.timings ? this.attrs.timings : {}, this.introDur = this.attrs.timings.intro ? this.attrs.timings.intro : 0, this.outroDur = this.attrs.timings.outro ? this.attrs.timings.outro : 0, 0 === this.attrs.timings.static ? this.staticDur = 0 : this.staticDur = this.attrs.timings.static ? this.attrs.timings.static : 1e3;
      }
    }]), a;
  }(n.default.HTMLClip);

  function Sn(t) {
    return t > g.dataColors.length - 1 ? g.dataColors[Math.floor(Math.random() * Math.floor(g.dataColors.length))] : g.dataColors[t];
  }

  var Pn = n.default.loadPlugin(wt),
      In = function (t) {
    s(a, t);
    var e = h(a);

    function a() {
      return i(this, a), e.apply(this, arguments);
    }

    return r(a, [{
      key: "html",
      get: function get() {
        return this.data = this.attrs.data.data, n.default.utils.createDOMElement("div", {
          class: "container-pieChart"
        }, n.default.utils.createDOMElement("h1", {
          class: "title"
        }, this.buildTitle()), n.default.utils.createDOMElement("div", {
          class: "columns"
        }, n.default.utils.createDOMElement("div", {
          class: "col-1"
        }, n.default.utils.createDOMElement("div", {
          class: "piechart"
        })), n.default.utils.createDOMElement("div", {
          class: "col-2"
        }, n.default.utils.createDOMElement("div", {
          class: "legend"
        }, this.buildLegend()))));
      }
    }, {
      key: "css",
      get: function get() {
        return function (t) {
          var e, n, i;
          Le.setup({
            createGenerateId: function createGenerateId() {
              return function (t) {
                return t.key;
              };
            }
          });
          var a = {
            "container-pieChart": {
              opacity: 1,
              "background-color": "transparent",
              width: "100%",
              height: "100%",
              display: "flex",
              "align-items": "center",
              "flex-direction": "column",
              "font-family": "".concat(null !== (e = t.font) && void 0 !== e && e.fontFamily ? t.font.fontFamily : "Staatliches, cursive"),
              "font-size": "".concat(null !== (n = t.font) && void 0 !== n && n.size ? t.font.size : "1.6rem"),
              color: t.palette.font ? t.palette.font : g.font
            },
            title: {
              top: "-1rem",
              position: "relative",
              display: "flex",
              "justify-content": "center",
              "align-items": "center",
              "flex:direction": "row",
              overflow: "hidden"
            },
            columns: {
              width: "100%",
              height: "100%",
              display: "flex"
            },
            "col-1": {
              width: "65%",
              height: "100%",
              display: "flex",
              "justify-content": "center",
              "align-items": "center"
            },
            "col-2": {
              width: "35%",
              height: "100%",
              display: "flex",
              "justify-content": "center",
              "align-items": "center"
            },
            piechart: {
              display: "block",
              width: "95%",
              height: "95%",
              "border-radius": "50%",
              "background-image": "conic-gradient(".concat(t.radiusString, ")"),
              "margin-left": "2rem"
            },
            legend: {
              display: "flex",
              "flex-direction": "column",
              padding: "1rem",
              "max-width": "75%",
              "min-width": "50%",
              background: t.palette.primary ? t.palette.primary : "rgba(0,0,0, 0.2)",
              position: "relative",
              top: "22.5%",
              overflow: "hidden"
            },
            "legend-row": {
              display: "flex",
              "flex-direction": "row",
              "align-items": "center",
              "align-self": "flex-start"
            },
            "legend-text": {
              " white-space": "nowrap"
            },
            space: {
              "min-width": null !== (i = t.font) && void 0 !== i && i.size ? "calc(".concat(t.font.size, " * 0.5)") : "0.8rem"
            },
            char: {
              position: "relative"
            }
          };
          return t.data.data.forEach(function (t, e) {
            a["meter-" + e] = {
              background: t.color ? t.color : Sn(e),
              width: "1rem",
              height: "1rem",
              display: "block",
              "margin-right": "0.5rem",
              "margin-bottom": "0.25rem"
            };
          }), Le.createStyleSheet(a).toString();
        }({
          data: this.attrs.data,
          palette: this.attrs.palette ? this.attrs.palette : {},
          font: this.attrs.font ? this.attrs.font : {},
          radiusString: this.createRadiusString()
        });
      }
    }, {
      key: "fonts",
      get: function get() {
        var t;
        return [{
          type: "google-font",
          src: null !== (t = this.attrs.font) && void 0 !== t && t.url ? this.attrs.font.url : "https://fonts.googleapis.com/css2?family=Staatliches&display=swap"
        }];
      }
    }, {
      key: "buildTree",
      value: function value() {
        var t,
            e = this;

        if (kt(this, ".container-pieChart"), 0 === this.attrs.timings.static ? this.static = 0 : this.static = this.attrs.timings.static ? this.attrs.timings.static : 1e3, this.intro = this.attrs.timings.intro ? this.attrs.timings.intro : 0, this.outro = this.attrs.timings.outro ? this.attrs.timings.outro : 0, this.intro) {
          var n = Math.round(.8 * this.intro),
              i = Math.round(.4 * this.intro);
          this.attrs.data.title && d(this.attrs.data.title).forEach(function (t, n) {
            var a = new Pn.Anime({
              animatedAttrs: {
                right: "0%",
                opacity: 1
              },
              initialValues: {
                right: "-102%",
                opacity: 0,
                position: "relative"
              }
            }, {
              duration: Math.round(i / e.attrs.data.title.length),
              selector: ".char-".concat(n),
              easing: "easeOutCubic"
            });
            e.addIncident(a, Math.round(i / e.attrs.data.title.length) * n);
          });
          var a = new Pn.Anime({
            animatedAttrs: {
              "background-image": "conic-gradient(".concat(this.createRadiusString(), ")")
            },
            initialValues: {
              "background-image": "conic-gradient(".concat(this.createNullRadiusString(), ")")
            }
          }, {
            duration: n,
            selector: ".piechart",
            easing: "easeInOutCubic"
          });
          this.addIncident(a, i - .2 * this.intro);
          var r = new Pn.Anime({
            animatedAttrs: {
              width: "75%",
              "min-width": "50%",
              opacity: 1
            },
            initialValues: {
              width: "0%",
              "min-width": "0%",
              opacity: 0
            }
          }, {
            duration: n,
            selector: ".legend",
            easing: "easeInOutCubic"
          });
          this.addIncident(r, i - .2 * this.intro);
        }

        var o = new Pn.Anime({
          animatedAttrs: {}
        }, {
          duration: this.static,
          selector: ".container-pieChart"
        });

        if (this.addIncident(o, this.intro), null !== (t = this.attrs.timings) && void 0 !== t && t.outro) {
          var s,
              l = Math.round(null === (s = this.attrs.timings) || void 0 === s ? void 0 : s.outro),
              u = new Pn.Anime({
            animatedAttrs: {
              top: "-10%"
            },
            initialValues: {
              top: "0%"
            }
          }, {
            duration: .5 * l,
            selector: ".title",
            easing: "easeInQuart"
          });
          this.addIncident(u, this.intro + this.static + .2 * this.outro);
          var c = new Pn.Anime({
            animatedAttrs: {
              width: "0%",
              "min-width": "0%",
              opacity: 0
            }
          }, {
            duration: l,
            selector: ".legend",
            easing: "easeInOutCirc"
          });
          this.addIncident(c, this.intro + this.static);
          var h = new Pn.Anime({
            animatedAttrs: {
              "background-image": "conic-gradient(".concat(this.createNullRadiusString(), ")")
            },
            initialValues: {
              "background-image": "conic-gradient(".concat(this.createRadiusString(), ")")
            }
          }, {
            duration: l,
            selector: ".piechart",
            easing: "easeInOutCubic"
          });
          this.addIncident(h, this.intro + this.static);
        }
      }
    }, {
      key: "createRadiusString",
      value: function value() {
        var t = "",
            e = 0;

        for (var n in this.data) {
          t += "0" === n ? "\n                    ".concat(this.data[n].color ? this.data[n].color : this.generateColor(n), "\n                    ").concat(this.data[n].value / 100, "turn,\n                ") : "\n                    ".concat(this.data[n - 1].color ? this.data[n].color : this.generateColor(n), "\n                    ").concat(this.data[n - 1].value / 100, "turn,\n                    ").concat(this.data[n].color ? this.data[n].color : this.generateColor(n), "\n                    ").concat(e + this.data[n].value / 100, "turn,\n                "), e += this.data[n].value / 100;
        }

        return t += "rgba(0,0,0,0) 0 360deg";
      }
    }, {
      key: "createNullRadiusString",
      value: function value() {
        var t = "";

        for (var e in this.data) {
          t += "0" === e ? "\n                    ".concat(this.data[e].color ? this.data[e].color : this.generateColor(e), "\n                    ", 0, "turn,\n                ") : "\n                    ".concat(this.data[e - 1].color ? this.data[e].color : this.generateColor(e), "\n                    ", 0, "turn,\n                    ").concat(this.data[e].color ? this.data[e].color : this.generateColor(e), "\n                    ", 0, "turn,\n                "), this.data[e].value / 100;
        }

        return t += "rgba(0,0,0,0) 0 360deg";
      }
    }, {
      key: "generateColor",
      value: function value(t) {
        return t > g.dataColors.length - 1 ? g.dataColors[Math.floor(Math.random() * Math.floor(g.dataColors.length))] : g.dataColors[t];
      }
    }, {
      key: "buildTitle",
      value: function value() {
        return d(this.attrs.data.title).map(function (t, e) {
          return n.default.utils.createDOMElement("div", {
            class: "char"
          }, n.default.utils.createDOMElement("div", {
            class: "char-" + e + (" " === t ? " space" : "")
          }, t));
        });
      }
    }, {
      key: "buildLegend",
      value: function value() {
        return this.attrs.data.data.map(function (t, e) {
          return t.name.length > 24 && (t.name = t.name.substring(0, 21), t.name += "..."), n.default.utils.createDOMElement("div", {
            class: "legend-row"
          }, n.default.utils.createDOMElement("div", {
            class: "meter-" + e
          }), n.default.utils.createDOMElement("div", {
            class: "legend-text"
          }, t.name));
        });
      }
    }]), a;
  }(n.default.HTMLClip),
      An = {
    ProgressBar: {
      data: {
        type: "array"
      },
      timings: {
        type: "object",
        props: {
          intro: {
            type: "number",
            min: 0,
            optional: !0
          },
          static: {
            type: "number",
            min: 0,
            optional: !0
          },
          outro: {
            type: "number",
            min: 0,
            optional: !0
          }
        }
      },
      pallete: {
        type: "object",
        optional: !0,
        props: {
          primary: {
            type: "color",
            optional: !0
          },
          secondary: {
            type: "color",
            optional: !0
          },
          font: {
            type: "color",
            optional: !0
          },
          accent: {
            type: "color",
            optional: !0
          },
          background: {
            type: "color",
            optional: !0
          }
        }
      },
      font: {
        type: "object",
        optional: !0,
        props: {
          url: {
            type: "string",
            optional: !0
          },
          fontFamily: {
            type: "string",
            optional: !0
          },
          size: {
            type: "measurement",
            optional: !0,
            min: 0,
            units: ["px", "%", "em", "rem"]
          }
        }
      },
      options: {
        type: "object",
        optional: !0,
        props: {
          hidePercentage: {
            type: "boolean",
            optional: !0
          }
        }
      }
    },
    BarChartSimple: {
      data: {
        type: "object",
        props: {
          title: {
            type: "string",
            optional: !0
          },
          subtitle: {
            type: "string",
            optional: !0
          },
          showGrid: {
            type: "boolean",
            optional: !0
          },
          maxValue: {
            type: "number",
            min: 0,
            optional: !0
          },
          data: {
            type: "array"
          }
        }
      },
      timings: {
        type: "object",
        props: {
          intro: {
            type: "number",
            min: 0,
            optional: !0
          },
          static: {
            type: "number",
            min: 0,
            optional: !0
          },
          outro: {
            type: "number",
            min: 0,
            optional: !0
          }
        }
      },
      pallete: {
        type: "object",
        optional: !0,
        props: {
          primary: {
            type: "color",
            optional: !0
          },
          secondary: {
            type: "color",
            optional: !0
          },
          tertiary: {
            type: "color",
            optional: !0
          },
          font: {
            type: "color",
            optional: !0
          },
          accent: {
            type: "color",
            optional: !0
          },
          background: {
            type: "color",
            optional: !0
          }
        }
      },
      font: {
        type: "object",
        optional: !0,
        props: {
          url: {
            type: "string",
            optional: !0
          },
          fontFamily: {
            type: "string",
            optional: !0
          },
          size: {
            type: "measurement",
            optional: !0,
            min: 0,
            units: ["px", "%", "em", "rem"]
          }
        }
      }
    },
    LineGraph: {
      data: {
        type: "object",
        props: {
          title: {
            type: "string",
            optional: !0
          },
          showGrid: {
            type: "boolean",
            optional: !0
          },
          interval: {
            type: "number",
            min: 0,
            optional: !0
          },
          maxValue: {
            type: "number",
            min: 0,
            optional: !0
          },
          unit: {
            type: "string",
            optional: !0
          },
          hover: {
            type: "boolean",
            optional: !0
          },
          data: {
            type: "array"
          },
          dataSets: {
            type: "array"
          }
        }
      },
      timings: {
        type: "object",
        props: {
          intro: {
            type: "number",
            min: 0,
            optional: !0
          },
          static: {
            type: "number",
            min: 0,
            optional: !0
          },
          outro: {
            type: "number",
            min: 0,
            optional: !0
          }
        }
      },
      pallete: {
        type: "object",
        optional: !0,
        props: {
          primary: {
            type: "color",
            optional: !0
          },
          secondary: {
            type: "color",
            optional: !0
          },
          tertiary: {
            type: "color",
            optional: !0
          },
          quaternary: {
            type: "color",
            optional: !0
          },
          font: {
            type: "color",
            optional: !0
          },
          accent: {
            type: "color",
            optional: !0
          },
          background: {
            type: "color",
            optional: !0
          }
        }
      },
      font: {
        type: "object",
        optional: !0,
        props: {
          url: {
            type: "string",
            optional: !0
          },
          fontFamily: {
            type: "string",
            optional: !0
          },
          size: {
            type: "measurement",
            optional: !0,
            min: 0,
            units: ["px", "%", "em", "rem"]
          }
        }
      },
      hover: {
        type: "boolean",
        optional: !0
      },
      legend: {
        type: "boolean",
        optional: !0
      },
      trace: {
        type: "object",
        optional: !0,
        props: {
          toggle: {
            type: "boolean",
            optional: !0
          },
          scale: {
            type: "number",
            optional: !0
          }
        }
      }
    },
    PieChart: {
      data: {
        type: "object",
        props: {
          title: {
            type: "string",
            optional: !0
          },
          data: {
            type: "array"
          }
        }
      },
      timings: {
        type: "object",
        props: {
          intro: {
            type: "number",
            min: 0,
            optional: !0
          },
          static: {
            type: "number",
            min: 0,
            optional: !0
          },
          outro: {
            type: "number",
            min: 0,
            optional: !0
          }
        }
      },
      pallete: {
        type: "object",
        optional: !0,
        props: {
          font: {
            type: "color",
            optional: !0
          },
          background: {
            type: "color",
            optional: !0
          }
        }
      },
      font: {
        type: "object",
        optional: !0,
        props: {
          url: {
            type: "string",
            optional: !0
          },
          fontFamily: {
            type: "string",
            optional: !0
          },
          size: {
            type: "measurement",
            optional: !0,
            min: 0,
            units: ["px", "%", "em", "rem"]
          }
        }
      }
    },
    ProgressMeter: {
      data: {
        type: "object",
        props: {
          value: {
            type: "number",
            min: 0,
            max: 100,
            integer: !0,
            optional: !0
          },
          unit: {
            type: "string",
            optional: !0
          },
          innerFill: {
            type: "object",
            optional: !0,
            props: {
              revert: {
                type: "boolean",
                optional: !0
              },
              rotate: {
                type: "boolean",
                optional: !0
              }
            }
          }
        }
      },
      innerImage: {
        type: "string",
        optional: !0
      },
      timings: {
        type: "object",
        props: {
          intro: {
            type: "number",
            min: 0,
            optional: !0
          },
          static: {
            type: "number",
            min: 0,
            optional: !0
          },
          outro: {
            type: "number",
            min: 0,
            optional: !0
          }
        }
      },
      pallete: {
        type: "object",
        optional: !0,
        props: {
          font: {
            type: "color",
            optional: !0
          },
          accent: {
            type: "color",
            optional: !0
          },
          background: {
            type: "color",
            optional: !0
          }
        }
      },
      font: {
        type: "object",
        optional: !0,
        props: {
          url: {
            type: "string",
            optional: !0
          },
          fontFamily: {
            type: "string",
            optional: !0
          },
          size: {
            type: "measurement",
            optional: !0,
            min: 0,
            units: ["px", "%", "em", "rem"]
          }
        }
      }
    }
  };

  return {
    npm_name: "@kissmybutton/motorcortex-graphs",
    version: "1.4.6",
    incidents: [{
      exportable: Je,
      name: "ProgressBar",
      attributesValidationRules: An.ProgressBar,
      originalDims: {
        width: "1200px",
        height: "900px"
      }
    }, {
      exportable: Fe,
      name: "BarChartSimple",
      attributesValidationRules: An.BarChartSimple,
      originalDims: {
        width: "1200px",
        height: "900px"
      }
    }, {
      exportable: Cn,
      name: "LineGraph",
      attributesValidationRules: An.LineGraph,
      originalDims: {
        width: "".concat($e.lineGraph.originalDims.width, "px"),
        height: "".concat($e.lineGraph.originalDims.height, "px")
      }
    }, {
      exportable: In,
      name: "PieChart",
      attributesValidationRules: An.PieChart,
      originalDims: {
        width: "1200px",
        height: "900px"
      }
    }, {
      exportable: en,
      name: "ProgressMeter",
      attributesValidationRules: An.ProgressMeter,
      originalDims: {
        width: "".concat($e.progressMeter.originalDims.width, "px"),
        height: "".concat($e.progressMeter.originalDims.height, "px")
      }
    }]
  };
});

/***/ }),

/***/ 641:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.8+1e68dce6
 */

(function (global, factory) {
	 true ? module.exports = factory() :
	0;
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function isFunction(x) {
  return typeof x === 'function';
}



var _isArray = void 0;
if (Array.isArray) {
  _isArray = Array.isArray;
} else {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
}

var isArray = _isArray;

var len = 0;
var vertxNext = void 0;
var customSchedulerFn = void 0;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  if (typeof vertxNext !== 'undefined') {
    return function () {
      vertxNext(flush);
    };
  }

  return useSetTimeout();
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var vertx = Function('return this')().require('vertx');
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = void 0;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && "function" === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;


  if (_state) {
    var callback = arguments[_state - 1];
    asap(function () {
      return invokeCallback(_state, child, callback, parent._result);
    });
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve$1(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(2);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
  try {
    then$$1.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then$$1) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then$$1, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return resolve(promise, value);
    }, function (reason) {
      return reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$1) {
  if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$1 === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$1)) {
      handleForeignThenable(promise, maybeThenable, then$$1);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function resolve(promise, value) {
  if (promise === value) {
    reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    var then$$1 = void 0;
    try {
      then$$1 = value.then;
    } catch (error) {
      reject(promise, error);
      return;
    }
    handleMaybeThenable(promise, value, then$$1);
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;


  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = void 0,
      callback = void 0,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = void 0,
      error = void 0,
      succeeded = true;

  if (hasCallback) {
    try {
      value = callback(detail);
    } catch (e) {
      succeeded = false;
      error = e;
    }

    if (promise === value) {
      reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
    resolve(promise, value);
  } else if (succeeded === false) {
    reject(promise, error);
  } else if (settled === FULFILLED) {
    fulfill(promise, value);
  } else if (settled === REJECTED) {
    reject(promise, value);
  }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      resolve(promise, value);
    }, function rejectPromise(reason) {
      reject(promise, reason);
    });
  } catch (e) {
    reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
}

var Enumerator = function () {
  function Enumerator(Constructor, input) {
    this._instanceConstructor = Constructor;
    this.promise = new Constructor(noop);

    if (!this.promise[PROMISE_ID]) {
      makePromise(this.promise);
    }

    if (isArray(input)) {
      this.length = input.length;
      this._remaining = input.length;

      this._result = new Array(this.length);

      if (this.length === 0) {
        fulfill(this.promise, this._result);
      } else {
        this.length = this.length || 0;
        this._enumerate(input);
        if (this._remaining === 0) {
          fulfill(this.promise, this._result);
        }
      }
    } else {
      reject(this.promise, validationError());
    }
  }

  Enumerator.prototype._enumerate = function _enumerate(input) {
    for (var i = 0; this._state === PENDING && i < input.length; i++) {
      this._eachEntry(input[i], i);
    }
  };

  Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
    var c = this._instanceConstructor;
    var resolve$$1 = c.resolve;


    if (resolve$$1 === resolve$1) {
      var _then = void 0;
      var error = void 0;
      var didError = false;
      try {
        _then = entry.then;
      } catch (e) {
        didError = true;
        error = e;
      }

      if (_then === then && entry._state !== PENDING) {
        this._settledAt(entry._state, i, entry._result);
      } else if (typeof _then !== 'function') {
        this._remaining--;
        this._result[i] = entry;
      } else if (c === Promise$1) {
        var promise = new c(noop);
        if (didError) {
          reject(promise, error);
        } else {
          handleMaybeThenable(promise, entry, _then);
        }
        this._willSettleAt(promise, i);
      } else {
        this._willSettleAt(new c(function (resolve$$1) {
          return resolve$$1(entry);
        }), i);
      }
    } else {
      this._willSettleAt(resolve$$1(entry), i);
    }
  };

  Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
    var promise = this.promise;


    if (promise._state === PENDING) {
      this._remaining--;

      if (state === REJECTED) {
        reject(promise, value);
      } else {
        this._result[i] = value;
      }
    }

    if (this._remaining === 0) {
      fulfill(promise, this._result);
    }
  };

  Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
    var enumerator = this;

    subscribe(promise, undefined, function (value) {
      return enumerator._settledAt(FULFILLED, i, value);
    }, function (reason) {
      return enumerator._settledAt(REJECTED, i, reason);
    });
  };

  return Enumerator;
}();

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all(entries) {
  return new Enumerator(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject$1(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {Function} resolver
  Useful for tooling.
  @constructor
*/

var Promise$1 = function () {
  function Promise(resolver) {
    this[PROMISE_ID] = nextId();
    this._result = this._state = undefined;
    this._subscribers = [];

    if (noop !== resolver) {
      typeof resolver !== 'function' && needsResolver();
      this instanceof Promise ? initializePromise(this, resolver) : needsNew();
    }
  }

  /**
  The primary way of interacting with a promise is through its `then` method,
  which registers callbacks to receive either a promise's eventual value or the
  reason why the promise cannot be fulfilled.
   ```js
  findUser().then(function(user){
    // user is available
  }, function(reason){
    // user is unavailable, and you are given the reason why
  });
  ```
   Chaining
  --------
   The return value of `then` is itself a promise.  This second, 'downstream'
  promise is resolved with the return value of the first promise's fulfillment
  or rejection handler, or rejected if the handler throws an exception.
   ```js
  findUser().then(function (user) {
    return user.name;
  }, function (reason) {
    return 'default name';
  }).then(function (userName) {
    // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
    // will be `'default name'`
  });
   findUser().then(function (user) {
    throw new Error('Found user, but still unhappy');
  }, function (reason) {
    throw new Error('`findUser` rejected and we're unhappy');
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
    // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
  });
  ```
  If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
   ```js
  findUser().then(function (user) {
    throw new PedagogicalException('Upstream error');
  }).then(function (value) {
    // never reached
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // The `PedgagocialException` is propagated all the way down to here
  });
  ```
   Assimilation
  ------------
   Sometimes the value you want to propagate to a downstream promise can only be
  retrieved asynchronously. This can be achieved by returning a promise in the
  fulfillment or rejection handler. The downstream promise will then be pending
  until the returned promise is settled. This is called *assimilation*.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // The user's comments are now available
  });
  ```
   If the assimliated promise rejects, then the downstream promise will also reject.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // If `findCommentsByAuthor` fulfills, we'll have the value here
  }, function (reason) {
    // If `findCommentsByAuthor` rejects, we'll have the reason here
  });
  ```
   Simple Example
  --------------
   Synchronous Example
   ```javascript
  let result;
   try {
    result = findResult();
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
  findResult(function(result, err){
    if (err) {
      // failure
    } else {
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findResult().then(function(result){
    // success
  }, function(reason){
    // failure
  });
  ```
   Advanced Example
  --------------
   Synchronous Example
   ```javascript
  let author, books;
   try {
    author = findAuthor();
    books  = findBooksByAuthor(author);
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
   function foundBooks(books) {
   }
   function failure(reason) {
   }
   findAuthor(function(author, err){
    if (err) {
      failure(err);
      // failure
    } else {
      try {
        findBoooksByAuthor(author, function(books, err) {
          if (err) {
            failure(err);
          } else {
            try {
              foundBooks(books);
            } catch(reason) {
              failure(reason);
            }
          }
        });
      } catch(error) {
        failure(err);
      }
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findAuthor().
    then(findBooksByAuthor).
    then(function(books){
      // found books
  }).catch(function(reason){
    // something went wrong
  });
  ```
   @method then
  @param {Function} onFulfilled
  @param {Function} onRejected
  Useful for tooling.
  @return {Promise}
  */

  /**
  `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
  as the catch block of a try/catch statement.
  ```js
  function findAuthor(){
  throw new Error('couldn't find that author');
  }
  // synchronous
  try {
  findAuthor();
  } catch(reason) {
  // something went wrong
  }
  // async with promises
  findAuthor().catch(function(reason){
  // something went wrong
  });
  ```
  @method catch
  @param {Function} onRejection
  Useful for tooling.
  @return {Promise}
  */


  Promise.prototype.catch = function _catch(onRejection) {
    return this.then(null, onRejection);
  };

  /**
    `finally` will be invoked regardless of the promise's fate just as native
    try/catch/finally behaves
  
    Synchronous example:
  
    ```js
    findAuthor() {
      if (Math.random() > 0.5) {
        throw new Error();
      }
      return new Author();
    }
  
    try {
      return findAuthor(); // succeed or fail
    } catch(error) {
      return findOtherAuther();
    } finally {
      // always runs
      // doesn't affect the return value
    }
    ```
  
    Asynchronous example:
  
    ```js
    findAuthor().catch(function(reason){
      return findOtherAuther();
    }).finally(function(){
      // author was either found, or not
    });
    ```
  
    @method finally
    @param {Function} callback
    @return {Promise}
  */


  Promise.prototype.finally = function _finally(callback) {
    var promise = this;
    var constructor = promise.constructor;

    if (isFunction(callback)) {
      return promise.then(function (value) {
        return constructor.resolve(callback()).then(function () {
          return value;
        });
      }, function (reason) {
        return constructor.resolve(callback()).then(function () {
          throw reason;
        });
      });
    }

    return promise.then(callback, callback);
  };

  return Promise;
}();

Promise$1.prototype.then = then;
Promise$1.all = all;
Promise$1.race = race;
Promise$1.resolve = resolve$1;
Promise$1.reject = reject$1;
Promise$1._setScheduler = setScheduler;
Promise$1._setAsap = setAsap;
Promise$1._asap = asap;

/*global self*/
function polyfill() {
  var local = void 0;

  if (typeof __webpack_require__.g !== 'undefined') {
    local = __webpack_require__.g;
  } else if (typeof self !== 'undefined') {
    local = self;
  } else {
    try {
      local = Function('return this')();
    } catch (e) {
      throw new Error('polyfill failed because global object is unavailable in this environment');
    }
  }

  var P = local.Promise;

  if (P) {
    var promiseToString = null;
    try {
      promiseToString = Object.prototype.toString.call(P.resolve());
    } catch (e) {
      // silently ignored
    }

    if (promiseToString === '[object Promise]' && !P.cast) {
      return;
    }
  }

  local.Promise = Promise$1;
}

// Strange compat..
Promise$1.polyfill = polyfill;
Promise$1.Promise = Promise$1;

return Promise$1;

})));



//# sourceMappingURL=es6-promise.map


/***/ }),

/***/ 500:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"@kissmybutton/motorcortex-graphs","version":"1.4.6","description":"A plugin for creating graphs using MotorCortex","main":"dist/bundle.cjs.js","module":"dist/bundle.esm.js","browser":"dist/bundle.umd.js","author":"KissMyButton PC (kissmybutton.gr) <opensource@kissmybutton.gr>","repository":{"type":"git","url":"https://github.com/kissmybutton/motorcortex-graphs"},"license":"MIT","engines":{"node":">=10"},"scripts":{"concurrently":"concurrently -c \\"cyan.bold,magenta.bold\\" --names \\"JS,Styles\\"","lint:styles":"stylelint  --allow-empty-input \\"src/**.css\\" \\"src/**/*.scss\\" --config .stylelintrc.json","lint:js":"eslint -c .eslintrc src/**/*.js","lint":"npm run concurrently \\"npm:lint:js\\" \\"npm:lint:styles\\"","lint:fix":"npm run concurrently  \\"npm:lint:js -- --fix\\" \\"npm:lint:styles -- --fix\\"","build":"npm run build:lib && npm run build:demo","build:lib":"rollup -c","start":"npm run build:lib && concurrently -c \\"cyan.bold,magenta.bold\\" \\"npm:build:lib -- -w\\"  \\"npm:start:demo\\" ","start:demo":"webpack serve --mode=development --config ./demo/webpack.config.js","build:demo":"webpack --mode=production --config ./demo/webpack.config.js","test":"HERE GOES YOUR TEST TASK","test:prod":"npm run lint"},"keywords":["motorcortex","animation"],"config":{"commitizen":{"path":"cz-conventional-changelog"}},"dependencies":{"@kissmybutton/motorcortex-2dcam":"^0.0.16","@kissmybutton/motorcortex-anime":"^2.1.13","@kissmybutton/motorcortex-counter":"^1.0.1","@kissmybutton/motorcortex-svgdraw":"^0.0.8","jss":"^10.5.1"},"peerDependencies":{"@kissmybutton/motorcortex":"^6.3.1"},"release":{"verifyConditions":["@semantic-release/changelog","@semantic-release/npm","@semantic-release/github","@semantic-release/git"],"prepare":["@semantic-release/changelog","@semantic-release/npm","@semantic-release/git"]},"devDependencies":{"@babel/cli":"7.14.5","@babel/core":"7.14.6","@babel/plugin-syntax-jsx":"7.14.5","@babel/plugin-transform-react-jsx":"7.14.5","@babel/preset-env":"7.14.7","@kissmybutton/motorcortex":"6.4.3","@kissmybutton/motorcortex-player":"1.9.4","@rollup/plugin-babel":"5.3.0","@rollup/plugin-commonjs":"18.1.0","@rollup/plugin-json":"4.1.0","@rollup/plugin-node-resolve":"11.2.1","@semantic-release/changelog":"5.0.1","@semantic-release/git":"9.0.0","@semantic-release/github":"7.2.3","@semantic-release/npm":"7.1.3","babel-eslint":"10.1.0","babel-loader":"8.2.2","concurrently":"6.2.0","css-loader":"5.2.6","es6-promise":"4.2.8","eslint":"7.30.0","eslint-config-prettier":"8.3.0","eslint-config-standard":"16.0.3","eslint-plugin-babel":"5.3.1","eslint-plugin-import":"2.23.4","eslint-plugin-node":"11.1.0","eslint-plugin-prettier":"3.4.0","eslint-plugin-promise":"4.3.1","eslint-plugin-standard":"5.0.0","exports-loader":"1.1.1","imports-loader":"1.2.0","npx":"10.2.2","prettier":"2.3.2","rimraf":"3.0.2","rollup":"2.53.0","rollup-plugin-terser":"7.0.2","semantic-release":"17.4.4","shelljs":"0.8.4","stylelint":"13.13.1","stylelint-config-prettier":"8.0.2","stylelint-config-recommended":"4.0.0","stylelint-config-recommended-scss":"4.3.0","stylelint-config-sass-guidelines":"8.0.0","stylelint-config-standard":"21.0.0","stylelint-scss":"3.19.0","webpack":"5.44.0","webpack-cli":"4.7.2","webpack-dev-server":"3.11.2","whatwg-fetch":"3.6.2"}}');

/***/ }),

/***/ 705:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 346:
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("b28dab4d5889420f4693")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		// data-webpack is not used as build has no uniqueName
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				registeredStatusHandlers[i].call(null, newStatus);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			setStatus("check");
/******/ 			return __webpack_require__.hmrM().then(function (update) {
/******/ 				if (!update) {
/******/ 					setStatus(applyInvalidatedModules() ? "ready" : "idle");
/******/ 					return null;
/******/ 				}
/******/ 		
/******/ 				setStatus("prepare");
/******/ 		
/******/ 				var updatedModules = [];
/******/ 				blockingPromises = [];
/******/ 				currentUpdateApplyHandlers = [];
/******/ 		
/******/ 				return Promise.all(
/******/ 					Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 						promises,
/******/ 						key
/******/ 					) {
/******/ 						__webpack_require__.hmrC[key](
/******/ 							update.c,
/******/ 							update.r,
/******/ 							update.m,
/******/ 							promises,
/******/ 							currentUpdateApplyHandlers,
/******/ 							updatedModules
/******/ 						);
/******/ 						return promises;
/******/ 					},
/******/ 					[])
/******/ 				).then(function () {
/******/ 					return waitForBlockingPromises(function () {
/******/ 						if (applyOnUpdate) {
/******/ 							return internalApply(applyOnUpdate);
/******/ 						} else {
/******/ 							setStatus("ready");
/******/ 		
/******/ 							return updatedModules;
/******/ 						}
/******/ 					});
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				setStatus("abort");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			// handle errors in accept handlers and self accepted module load
/******/ 			if (error) {
/******/ 				setStatus("fail");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw error;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			if (queuedInvalidatedModules) {
/******/ 				return internalApply(options).then(function (list) {
/******/ 					outdatedModules.forEach(function (moduleId) {
/******/ 						if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 					});
/******/ 					return list;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			setStatus("idle");
/******/ 			return Promise.resolve(outdatedModules);
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdate"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__(872);
/******/ 	
/******/ })()
;