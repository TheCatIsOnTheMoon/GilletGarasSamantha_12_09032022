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
        height={258}
        data={data}
        margin={{
          top: 40,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="0 1" />
        <XAxis
          dataKey="day"
          tickLine={false}
          axisLine={false}
          padding={{ left: 10, right: 10 }}
          style={{ fontSize: 12, fontWeight: 500 }}
          stroke="white"
          opacity={0.7}
          dy={3}
          dx={0}
        />
        <YAxis
          dataKey="sessionLength"
          hide={true}
          domain={['dataMin', 'dataMax + 10']}
        />

        <Tooltip
          payload={data.sessionLength}
          content={<CustomTooltip />}
          offset={30}
          cursor={{
            stroke: 'black',
            strokeOpacity: 0.2,
            strokeWidth: 70,
          }}
        />
        <Line
          type="monotone"
          dataKey="sessionLength"
          strokeWidth={2}
          stroke="white"
          dot={false}
          activeDot={{ r: 6 }}
          opacity={0.7}
        />
      </LineChart>
    </div>
  );
}

/**
 * It returns a div with a paragraph inside it. The paragraph contains the wsession duration
 * @param  {array} payload of Tooltip element
 * @returns A div with a paragraph inside.
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

TimesChart.propTypes = {
  data: PropTypes.array,
};

CustomTooltip.propTypes = {
  data: PropTypes.array,
};

export default TimesChart;
