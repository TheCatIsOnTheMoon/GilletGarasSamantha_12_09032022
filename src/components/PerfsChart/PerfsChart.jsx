import React from 'react';
import PropTypes from 'prop-types';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts';

function PerfsChart({ data }) {
  return (
    <RadarChart width={230} height={230} data={data}>
      <PolarGrid radialLines={false} />
      <PolarAngleAxis
        dataKey="kind"
        stroke="#FFFFFF"
        fontSize={12}
        tickLine={false}
      />
      <PolarRadiusAxis
        domain={[0, 300]}
        tick={false}
        axisLine={false}
        tickCount={6}
      />
      <Radar name="Perfs" dataKey="value" fill="#FF0000" fillOpacity={0.7} />
    </RadarChart>
  );
}

/* Telling React that the `PerfsChart` component
 * will receive one props: `data`
 * that needs to be an array.
 */
PerfsChart.propTypes = {
  data: PropTypes.array,
};

export default PerfsChart;
