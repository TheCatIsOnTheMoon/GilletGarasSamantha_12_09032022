import './style.css';
import PropTypes from 'prop-types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

/**
 * React component that display a Bar Chart of the daily burn calories and weight of the user.
 * @component
 * @param  {array} props User activities data
 *
 */
function DailyChart({ data }) {
  const barData = data.map((element, index) => {
    return element;
  });

  return (
    <BarChart
      width={835}
      height={320}
      data={barData}
      margin={{
        top: 5,
        right: 0,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid sstrokeDasharray="3 3" vertical={false} />
      <XAxis dataKey="day" storke="grey" tickLine={false} tickMargin={10} />
      <YAxis
        yAxisId="left"
        dataKey="kilogram"
        orientation="right"
        domain={['dataMin - 2', 'dataMax + 1']}
        axisLine={false}
        tickLine={false}
        tickCount={3}
        tickMargin={20}
        tick={{ stroke: '#9B9EAC' }}
      />
      <YAxis
        yAxisId="right"
        dataKey="calories"
        orientation="left"
        domain={['dataMin - 50', 'dataMax + 50']}
        axisLine={false}
        tickLine={false}
        tickMargin={0}
        tick={false}
        hide={true}
      />
      <Tooltip content={<CustomTooltip />} />
      <Bar
        yAxisId="left"
        dataKey="kilogram"
        fill="#282D30"
        barSize={7}
        radius={[50, 50, 0, 0]}
      />
      <Bar
        yAxisId="right"
        dataKey="calories"
        fill="#E60000"
        barSize={7}
        radius={[50, 50, 0, 0]}
      />
    </BarChart>
  );
}

/**
 * It returns a div with a paragraph inside it. The paragraph contains the weight and the calories
 * @param  {array} payload of Tooltip element
 * @returns A div with a paragraph inside.
 */
const CustomTooltip = ({ payload }) => {
  if (payload && payload.length) {
    return (
      <div id="dailychart_tooltip">
        <p id="dailychart_tooltip_text">
          {payload[0].value} Kg <br />
          {payload[1].value} Kcal
        </p>
      </div>
    );
  }
  return null;
};

DailyChart.propTypes = {
  data: PropTypes.array,
};

CustomTooltip.propTypes = {
  payload: PropTypes.array,
};

export default DailyChart;
