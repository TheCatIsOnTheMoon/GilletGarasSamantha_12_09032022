import React from 'react';
import PropTypes from 'prop-types';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts';

function PerfsChart({ data, kind }) {
  // console.log('perf data : ', data); // OK
  // console.log('perf kind : ', kind); // OK
  return (
    <RadarChart width={240} height={240} data={data}>
      <PolarGrid radialLines={false} />
      <PolarAngleAxis dataKey="kind" stroke="#FFFFFF" tickLine={false} />
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

PerfsChart.propTypes = {
  data: PropTypes.array,
  kind: PropTypes.object,
};

export default PerfsChart;
