import React from 'react';
import './styles/svg.css';

class SvgOverlay extends React.Component {

  render() {
      // <svg xmlns="http://www.w3.org/2000/svg">
      //   <g>
      //     <g role="menuitem" aria-label="Paris" transform="translate(370.0725091352547,59.060742704102886) scale(0.2857142857142857)">
      //       <path cs="100,100" d="M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z" transform="translate(-9,-9) scale(1)" stroke="transparent" fill-opacity="0.8" fill="#585869">
      //       </path>
      //     </g>
      //   </g>
      // </svg>
    return ();
  }
}


// var d3Chart = require('./d3Chart');

// var Chart = React.createClass({
//   propTypes: {
//     data: React.PropTypes.array,
//     domain: React.PropTypes.object
//   },

//   componentDidMount: function() {
//     var el = this.getDOMNode();
//     d3Chart.create(el, {
//       width: '100%',
//       height: '300px'
//     }, this.getChartState());
//   },

//   componentDidUpdate: function() {
//     var el = this.getDOMNode();
//     d3Chart.update(el, this.getChartState());
//   },

//   getChartState: function() {
//     return {
//       data: this.props.data,
//       domain: this.props.domain
//     };
//   },

//   componentWillUnmount: function() {
//     var el = this.getDOMNode();
//     d3Chart.destroy(el);
//   },

//   render: function() {
//     return (
//       <div className="Chart"></div>
//     );
//   }
// });

export default SvgOverlay;
