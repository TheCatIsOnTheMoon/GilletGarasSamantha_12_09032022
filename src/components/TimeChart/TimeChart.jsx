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

function TimeChart({ data }) {
  // console.log(data); // OK Array.

  return (
    <div id="lineChart">
      <p id="lineChart_title">
        Durée moyenne des <br /> sessions
      </p>
      <LineChart
        width={250}
        height={258}
        data={data}
        margin={{
          top: 40,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="0 1" />
        <XAxis dataKey="day" />
        <YAxis dataKey="sessionLength" hide={true} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="sessionLength"
          strokeWidth={2}
          stroke="white"
          dot={false}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </div>
  );
}

TimeChart.propTypes = {
  data: PropTypes.array.isRequired,
};

export default TimeChart;
