import React from 'react';
import d3 from 'd3';
import data from './data';
import DataMap from './datamap';
import './styles/appContainer.css';

export default class App extends React.Component {
  // render() {
  //   return (
  //     <div className="App">
  //       <div className="App-header">
  //         <h2>Welcome to React</h2>
  //       </div>
  //       <p className="App-intro">
  //         To get started, edit <code>src/App.js</code> and save to reload.
  //       </p>
  //     </div>
  //   );
  // }
  constructor(props) {
    super(props);
    var dataset = {};
    var onlyValues = data.series.map(function(obj) {
      return obj[1];
    });
    var minValue = Math.min.apply(null, onlyValues),
      maxValue = Math.max.apply(null, onlyValues);

    var paletteScale = d3.scale.linear().domain([minValue, maxValue]).range(["#ffe0cc", "#ff471a"]);
    data.series.forEach(function(item) {
      var iso = item[0],
        value = item[1],
        region = item[2];
      dataset[iso] = {
        numberOfThings: value,
        fillColor: paletteScale(value),
        region: region
      };
    });
    this.state = {
      scope: 'world',
      selectedRegion:'ALL',
      allData: dataset,
      data: dataset,
      fills: {
        defaultFill: '#ddd'
      },
      geographyConfig: {
        borderColor: '#888',
        borderWidth: .5,
        highlightBorderWidth: .5,
        highlightBorderColor: 'black',
        highlightFillColor: function(geo) {
          return geo['fillColor'] || '#ddd';
        },
        popupTemplate: function(geo, data) {
          if (!data) {
            return;
          }
          return [
            '<div class="hoverinfo">',
            '<strong>',
            geo.properties.name,
            '</strong>',
            '<br>Count: <strong>',
            data.numberOfThings,
            '</strong>',
            '</div>'
          ].join('');
        }
      }
    };
  }

  update = (region) => {
    var _this = this;
    let filteredData = Object.keys(this.state.allData).filter(function(country) {
      let item = _this.state.allData[country];
      if (item.region === region || 'ALL' === region) {
        return true;
      } else {
        return false;
      }
    });

    let regionData = {};
    filteredData.map(function(country) {
      regionData[country] = _this.state.allData[country];
    });

    this.setState(Object.assign({}, {
      data: regionData,
      selectedRegion:region
    }, window.example));
  }

  render() {
    return (
      <div className="App">
        <div className="App-map">
          <DataMap {...this.state}/>
        </div>
      </div>
    );
  }
}
