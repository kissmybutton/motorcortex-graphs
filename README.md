# MotorCortex Graphs

## Installation

```bash
$ npm install @kissmybutton/motorcortex-graphs
# OR
$ yarn add @kissmybutton/motorcortex-graphs
```

```javascript
import MotorCortexGraph from "@kissmybutton/motorcortex-graphs";
```

## Key Concepts / Features

Using MotorCortex Graphs, one can create fully configurable animations of graphs using real data. It allows for control over animation timing, coloring, sizing and font stylizing. The library currently exposes incidents of a Progress-Bar, and a Bar-Chart animations.  

## Browser compatibility  

| Chrome | Safari | IE / Edge | Firefox | Opera |
| --- | --- | --- | --- | --- |
| 24+ | 6+ | 10+ | 32+ | 15+ |

## Documentation

### Import and load the plugin to MotorCortex

```javascript
import MotorCortex from '@kissmybutton/motorcortex';
import MotorCortexGraph from "@kissmybutton/motorcortex-graphs";

const MCGraphs = MotorCortex.loadPlugin(MotorCortexGraph);
```

## Creating a Progress Bar Incident
```javascript
const clip = new MotorCortex.HTMLClip({
    html: `
        <div class="container">
            <div id="htmlclip"></div>
        </div>`,
    css: `
        .container{
            width: 800px,
            height: 600px
        }
    `,
    host: document.getElementById('clip'),
    containerParams: {
        width: '1024px',
        height: '768px'
    }
});

const newGraph = new MCGraphs.ProgressBar({
    data: [
	{
		"name": "Percentage 1",
		"value": 5
	},
	{
		"name": "Percentage 2",
		"value": 34
	},
	{
		"name": "Percentage 3",
		"value": 12.298374
	},
	{
		"name": "Percentage 4",
		"value": 100
	}],
    timings: {
        intro: 1000,
        static: 1000,
        outro: 1000,
    },
    palette: {
        background: "#D3CDCD", 
    }, 
},
    {
    selector: '#htmlclip',
    containerParams: {
        width: '1024px',
        height: '768px'
    },
});

clip.addIncident(newGraph, 0);
```
### Customization
The Progress Bar incident can be customized via the following parameters:
* `data`
* `timings`
* `palette`
* `font`
* `options`

#### Data:
An array of objects with the properties `name` and `value`.
| Name | Description | Values |
| --- | --- | --- |
| name | The title displayed next to every progress bar| string
| value | The percentage value that the bar should fill up to | number (range 0-100)|

#### Timings:
The `timings` object is an optional object that contains three (3) values for setting the duration of the event. These values are:
| Name | Description | Default | Values |
| --- | --- | --- | --- |
| intro |  Duration of the intro animation | 0 | ms |
| static | Duration of the the time that the graph should stay on screen | 1000 | ms |
| outro | Duration of the outro animation | 0 | ms |

#### Palette:
The `palette` object is an optional object used to customize the colors used in the graph. The colors that can be set are:
| Name | Description | Default | Values |
| --- | --- | --- | --- |
| primary |  The bar fill color | #B2B1AE | hex or css color |
| secondary | The bar background color | #434243 | hex or css color |
| accent | The bar outline color | #FFD800 | hex or css color  |
| font | The font color | #100300 | hex or css color |
| background | The background color | transparent | hex or css color |

#### Font:
The `font` object is an optional object that contains three (3) values used for customizing the font. These values are:
| Name | Description | Default | Values |
| --- | --- | --- | --- |
| url |A url pointing to a google font|https://fonts.googleapis.com/css2?family=Righteous&display=swap|string|
| fontFamily | The font family to be used| Righteous, cursive | string|
| size |The desired font size| 1.2rem | px/rem/em

## Creating a Bar Chart Incident

lorem ipsum

### Exposed Incidents
* `BarChartSimple`
* `ProgressBar`
### Demo
https://kissmybutton.github.io/motorcortex-graphs/demo
## License
[MIT License](https://opensource.org/licenses/MIT)


  
  
[![Kiss My Button](https://presskit.kissmybutton.gr/logos/kissmybutton-logo-small.png)](https://kissmybutton.gr)
