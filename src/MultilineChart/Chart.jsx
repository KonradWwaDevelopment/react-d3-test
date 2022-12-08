/** Chart.js */
import React from 'react';
import useController from './controller';
import { GridLine } from '../ChartComponents/GridLine';
import { Area } from '../ChartComponents/Area';
import { Axis } from '../ChartComponents/Axis';
import { Line } from '../ChartComponents/Line';
import PropTypes from 'prop-types';

export const Chart = ({ data, dimensions }) => {
  const { width, height, margin = {} } = dimensions;
  const svgWidth = width + margin.left + margin.right;
  const svgHeight = height + margin.top + margin.bottom;
  const controller = useController({ data, width, height });
  const { yTickFormat, xScale, yScale, yScaleForAxis } = controller;

  return (
    <svg width={svgWidth} height={svgHeight}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        <GridLine
          type="vertical"
          scale={xScale}
          ticks={5}
          size={height}
          transform={`translate(0, ${height})`}
        />
        <GridLine type="horizontal" scale={yScaleForAxis} ticks={2} size={width} />
        <GridLine
          type="horizontal"
          className="baseGridLine"
          scale={yScale}
          ticks={1}
          size={width}
          disableAnimation
        />
        {data.map(({ name, items = [], color }) => (
          <Line key={name} data={items} xScale={xScale} yScale={yScale} color={color} />
        ))}
        <Area data={data[0].items} color={data[0].color} xScale={xScale} yScale={yScale} />
        <Axis
          type="left"
          scale={yScaleForAxis}
          transform="translate(50, -10)"
          ticks={5}
          tickFormat={yTickFormat}
        />
        <Axis
          type="bottom"
          className="axisX"
          scale={xScale}
          transform={`translate(10, ${height - height / 6})`}
          ticks={5}
        />
      </g>
    </svg>
  );
};

Chart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      items: PropTypes.array,
      color: PropTypes.string
    })
  ),
  dimensions: PropTypes.object
};

Chart.defaultProps = {
  data: [],
  dimensions: {}
};
