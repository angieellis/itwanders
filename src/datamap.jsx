import React from 'react';
import Datamaps from 'datamaps';
import './styles/animate.css';
import './styles/datamap.css';

class DataMap extends React.Component {

  // //defining our expected props which will be directly passed on to the datamaps instance
  // static propTypes = {
  //   arc: PropTypes.array,
  //   arcOptions: PropTypes.object,
  //   bubbleOptions: PropTypes.object,
  //   bubbles: PropTypes.array,
  //   graticule: PropTypes.bool,
  //   labels: PropTypes.bool
  // };

  constructor(props) {
    super(props);
    window.addEventListener('resize', this.resize);
  }

  resize = () => {
    if (this.map) {
      this.map.resize();
    }
  }

  //this will create the map when the component mounts
  componentDidMount() {
    this.drawMap();
  }

  //this will remove the map from the dom when the react component is unmounted
  componentWillReceiveProps() {
    this.clear();
  }

  //this will update the map with the latest props
  componentDidUpdate() {
    this.drawMap();
  }

  componentWillUnmount() {
    this.clear();
    window.removeEventListener('resize', this.resize);
  }

  clear = () => {
    const container = this.refs.container;

    for (const child of Array.from(container.childNodes)) {
      container.removeChild(child);
    }
  }

  drawMap = () => {
    var map = new Datamaps(Object.assign({}, {
      ...this.props
    }, {
      element: this.refs.container, // this is the place where the react dom and the Datamaps dom will be wired
      projection: 'mercator', // this is hardcoded here as we want the projection to be constant
      responsive: true
    }));

    if (this.props.arc) {
      map.arc(this.props.arc, this.props.arcOptions);
    }

    if (this.props.bubbles) {
      map.bubbles(this.props.bubbles, this.props.bubbleOptions);
    }

    if (this.props.graticule) {
      map.graticule();
    }

    if (this.props.labels) {
      map.labels();
    }

    this.map = map;
  }

  render() {
    return (
      <div ref="container" className="map"></div>
    );
  }
}

export default DataMap;
