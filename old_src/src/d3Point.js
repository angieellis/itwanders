var d3Point = {};

d3Point.create = (el, props, state) => {
  var svg = d3.select(el).append('svg')
      .attr('class', 'd3')
      .attr('width', props.width)
      .attr('height', props.height);

  svg.append('g')
      .attr('class', 'd3-points');

  this.update(el, state);
};

d3Point.update = (el, state) => {
  // Re-compute the scales, and render the data points
  var scales = this._scales(el, state.domain);
  this._drawPoints(el, scales, state.data);
};

d3Point.destroy = (el) => {
  // Any clean-up would go here
  // in this example there is nothing to do
};

d3Point._drawPoints = (el, scales, data) => {
  var g = d3.select(el).selectAll('.d3-points');

  var point = g.selectAll('.d3-point')
    .data(data, (d) => { return d.id; });

  // ENTER
  point.enter().append('circle')
      .attr('class', 'd3-point');

  // ENTER & UPDATE
  point.attr('cx', (d) => { return scales.x(d.x); })
      .attr('cy', (d) => { return scales.y(d.y); })
      .attr('r', (d) => { return scales.z(d.z); });

  // EXIT
  point.exit()
      .remove();
};

export default d3Point;
