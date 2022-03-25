import './style.css';
import PropTypes from 'prop-types';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

/**
 * React component that display a Line Chart of the user sessions duration of the week.
 * @component
 * @param  {array} props User sessions data
 *
 */
function TimesChart({ data }) {
  return (
    <div id="lineChart">
      <p id="lineChart_title">
        Durée moyenne des <br /> sessions
      </p>
      <LineChart
        width={258}
        height={263}
        data={data}
        margin={{
          top: 0,
          bottom: 15,
          left: 0,
          right: 0,
        }}
      >
        <CartesianGrid strokeDasharray="0 1" />
        <XAxis
          dataKey="day"
          tickLine={false}
          axisLine={false}
          interval="preserveStartEnd"
          tick={<CustomXAxis />}
        />
        <YAxis
          dataKey="sessionLength"
          hide={true}
          domain={['dataMin', 'dataMax + 30']}
        />

        <Tooltip
          payload={data.sessionLength}
          content={<CustomTooltip />}
          cursor={<CustomCursor />}
        />
        <Line
          type="monotone"
          dataKey="sessionLength"
          strokeWidth={2}
          stroke="white"
          dot={false}
          activeDot={{ r: 7 }}
          opacity={0.7}
        />
      </LineChart>
    </div>
  );
}

/**
 * It returns a custom X Axis
 * @param  {number} x position of the X Axis
 * @param  {number} y position of the X Axis
 * @param  {object} payload of X Axis element
 * @returns A custom Cursor.
 *
 */
const CustomXAxis = ({ x, y, payload }) => {
  // custom X axis exemple : https://recharts.org/en-US/examples/CustomizedLabelLineChart
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        dy={17}
        style={{ fontSize: 12, fontWeight: 500 }}
        opacity={0.6}
        textAnchor="middle"
        fill="white"
      >
        {payload.value}
      </text>
    </g>
  );
};

/**
 * It returns a custom Tooltip containing the session duration.
 * @param  {array} payload of Tooltip element
 * @returns A custom Tooltip.
 *
 */
const CustomTooltip = ({ payload }) => {
  if (payload && payload.length) {
    return (
      <div id="timeschart_tooltip">
        <p id="timeschart_tooltip_text">{payload[0].value} min</p>
      </div>
    );
  }
  return null;
};

/**
 * It returns a custom Cursor
 * highlighting form the cursor position to the right-end of the chart.
 * @param  {array} points positions x and y of Cursor element
 * @param  {number} height graph height
 * @returns A custom Cursor.
 *
 */
const CustomCursor = ({ points, height }) => {
  return (
    <rect
      x={points[0].x}
      y="0"
      height={height + 99}
      // {height + 99} in order to fill the entire height of the chart not just the line graph
      width="100%"
      fill="black"
      opacity={0.2}
    ></rect>
  );
};

TimesChart.propTypes = {
  data: PropTypes.array,
};

CustomXAxis.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  payload: PropTypes.object,
};

CustomTooltip.propTypes = {
  payload: PropTypes.array,
};

CustomCursor.propTypes = {
  points: PropTypes.array,
  height: PropTypes.number,
};

export default TimesChart;
