import React from 'react';
import PropTypes from 'prop-types';
import {
  Radar,
  RadarChart,
  ResponsiveContainer,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts';

/**
 * React component that display a Radar Chart of the user performances.
 * @component
 * @param  {array} props User activities data
 *
 */
function PerfsChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart data={data} outerRadius="80">
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey="kind"
          stroke="#FFFFFF"
          fontSize={11}
          tickLine={false}
          dy={3}
        />
        <PolarRadiusAxis
          domain={[0, 300]}
          tick={false}
          axisLine={false}
          tickCount={6}
        />
        <Radar name="Perfs" dataKey="value" fill="#FF0000" fillOpacity={0.7} />
      </RadarChart>
    </ResponsiveContainer>
  );
}

PerfsChart.propTypes = {
  data: PropTypes.array,
};

export default PerfsChart;
