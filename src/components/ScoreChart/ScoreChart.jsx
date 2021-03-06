import './style.css';
import PropTypes from 'prop-types';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

/**
 * React component that display a Radial Bar Chart of the daily score of the user.
 * @component
 * @param  {number} props User today score
 *
 */
function ScoreChart({ score }) {
  /* Creating the data for the chart. */
  const data = [
    {
      name: 'baseScore',
      score: 1 - score,
      fill: '#FBFBFB',
    },
    {
      name: 'userScore',
      score: score,
      fill: '#E60000',
    },
  ];

  return (
    <div id="score_graph">
      <ResponsiveContainer width="98%" height={250}>
        <RadialBarChart
          cx="50%"
          cy="50%"
          data={data}
          innerRadius="65%"
          outerRadius="85%"
          startAngle={90}
          endAngle={450}
          barSize={10}
        >
          <RadialBar
            minAngle={15}
            background
            clockwise={false}
            dataKey="score"
            cornerRadius={50}
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <p id="score_title">Score</p>
      <div className="center">
        <p id="score_legend_nbr">{score * 100}%</p>
        <p id="score_legend_text">
          <br />
          de votre <br />
          objectif
        </p>
      </div>
    </div>
  );
}

ScoreChart.propTypes = {
  score: PropTypes.number,
};

export default ScoreChart;
