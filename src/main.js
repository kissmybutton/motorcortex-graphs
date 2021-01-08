import BarChartSimple from './Incidents/barChartSimple/barChartSimple';
import ProgressBar from './Incidents/progressBar/progressBar';

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
        width: "960px",
        height: "720px"
      }
    },
  ]
};