import BarChartSimple from './Incidents/barChartSimple/barChartSimple';
import ProgressBar from './Incidents/progressBar/progressBar';
import ProgressMeter from './Incidents/progressMeter/progressMeter';
import LineGraph from './Incidents/lineGraph/lineGraph';
import PieChart from './Incidents/pieChart/pieChart';
import config from './incident_config'

export default {
  npm_name: "motorcortex-graphs", // !! make sure the name of your plugin is identical to the name of your package.json !!
  incidents: [
    {
      exportable: ProgressBar,
      name: "ProgressBar",
      // define your attributeValidationRules so MotorCortex can automatically validate them on instantiation 
      // also so your Incidents are directly embedable to DonkeyClip
    //   attributesValidationRules: {},
      originalDims: {
        width: "1200px",
        height: "900px"
      }
    },
    {
      exportable: BarChartSimple,
      name: "BarChartSimple",
      // define your attributeValidationRules so MotorCortex can automatically validate them on instantiation 
      // also so your Incidents are directly embedable to DonkeyClip
    //   attributesValidationRules: {},
      originalDims: {
        width: "1200px",
        height: "900px"
      }
    },
    {
      exportable: LineGraph,
      name: "LineGraph",
      // define your attributeValidationRules so MotorCortex can automatically validate them on instantiation 
      // also so your Incidents are directly embedable to DonkeyClip
      // attributesValidationRules: {},
      originalDims: {
        width: `${config.lineGraph.originalDims.width}px`,
        height: `${config.lineGraph.originalDims.height}px`
      }
    },
    {
      exportable: PieChart,
      name: "PieChart",
      originalDims: {
        width: "1200px",
        height: "900px"
      }
    },
    {
      exportable: ProgressMeter,
      name: "ProgressMeter",
      // define your attributeValidationRules so MotorCortex can automatically validate them on instantiation 
      // also so your Incidents are directly embedable to DonkeyClip
    //   attributesValidationRules: {},
      originalDims: {
        width: `${config.progressMeter.originalDims.width}px`,
        height: `${config.progressMeter.originalDims.height}px`
      }
    },
  ]
};