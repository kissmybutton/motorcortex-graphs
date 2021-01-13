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

#### Options:
The `options` object is an optional object what contains miscellaneous graph configurations.
 | Name | Description | Default | Values |
| --- | --- | --- | --- |
| hidePercentage | Toggles the percentages next to the bars | false | boolean|

## Creating A Bar Chart Incident

To create a bar chart, the necessary attribute parameter is the data object. The remaining parameters implement customization of the graph and are all optional.

```javascript
const newGraph = new MCGraphs.BarChartSimple({
    data: data,  
    palette: {
        primary: "#75706E",
        secondary: "#B2B1AE", 
        tertiary: "#434243",
        font: "#100300", 
        accent: "#FFD800", 
        background: "#D3CDCD"
    },
    font: {
        url: "https://fonts.googleapis.com/css2?family=Staatliches&display=swap",
        size: "1.7rem",
    },
    maxVal: 100,
    grid: true,
    timings: {
        intro: 1000,
        outro: 1000, 
        static: 1000, 
    },
}, {
    selector: '#barGraph',
    containerParams: {
        width: '1200px',
        height: '900px'
    }
});

clip.addIncident(barChart, 0);

```

### Customization

The Bar Chart Incident can take the following attributes:

* `data`
* `timings`
* `palette`
* `font`

#### Data:

An object that contains the parameters with which to display the data in the graph. The dataPoint array is a required entry, but all the rest are optional.

| Name | Description | Type |
| --------- |:-----------| :----:|
| title | The title of the graph (left) | `string` |
| subtitle | The subtitle of the graph (right) | `string` |
| showGrid | Toggle of grid line background | `boolean` |
| maxValue | The max value for the y-axis of the graph | `integer` |
| data | The datapoint array for the graph (example below) | `Array[datapoint]` |  

Example data:
```json
{ 
    "title": "Example Graph", 
    "subtitle": "Yearly data", 
    "showGrid": true,
    "maxValue": 100,
    "data": [
        {
            "name": "2019",
            "value": 34
        },
        {
            "name": "2020",
            "value": 15
        },
        {
            "name": "2021",
            "value": 89
        }
    ]
}
```


#### Datapoints:
The data array of the graph contains `datapoint` objects. These Objects contain two (2) key-value pairs. These key value pairs are:

| Key | Description | Value Type |
| --------- |:-----------| :----: |
| name | The name (label) of the bar (up to 3 letters) | `string` |
| value | The value (y-axis) of the bar (2 significal digits) | `number` |

#### Timings:
The `timings` object is an *optional* attribute that contains three (3) parameters for setting the duration of the event. These parameters are: 

| Name | Description | Default | Value |
| --------- |:-----------| :----| ------: |
| intro | Duration of the intro animation | `0` | ms |
| static | Duration of the time that the graph should stay on screen | `1000` | ms |
| outro | Duration of the outro animation | `0` | ms |

#### Palette:
The `palette` object is an optional parameter used to customize the colors used in the graph. The colors that can be set are:

| Name | Description | Default | Value |
| --------- |:-----------| :----:| ------: |
| primary | The bar fill color | #75706E | hex or css color |
| secondary | The gridlines' color | #B2B1AE | hex or css color |
| tertiary | The axis' color | #434243 | hex or css color |
| accent | The font color | #100300 | hex or css color |
| font | The titles & labels background | #FFD800 | hex or css color |
| background | The background color | transparent | hex or css color |

#### Font:
The `font` object is an optional parameter that contains three (3) values used for customizing the font. These parameters are:

| Name | Description | Default | Value |
| --------- |:-----------| :---- | ------: |
| url | description | `https://fonts.googleapis.com/css2?family=Righteous&display=swap` | string |
| fontFamily | description | `Righteous, cursive` | string |
| size | The desired font size | `1.7rem` | px/rem/em |


### Exposed Incidents
* `BarChartSimple`
* `ProgressBar`
### Demo
https://kissmybutton.github.io/motorcortex-graphs/demo
## License
[MIT License](https://opensource.org/licenses/MIT)


  
  
[![Kiss My Button](https://presskit.kissmybutton.gr/logos/kissmybutton-logo-small.png)](https://kissmybutton.gr)
