import './style.css';
import { ACTIVITY_DATA_URL } from '../../constants';
import { useFetch } from '../../Hooks/FetchData/FetchData';
import DailyChart from '../DailyChart/DailyChart';

function Daily() {
  const { data, isLoading, error } = useFetch(ACTIVITY_DATA_URL);
  const ACTIVITY_DATA = data;

  if (isLoading) {
    return <span>Loading ...</span>;
  }
  if (error || !data) {
    return <span>Error</span>;
  }
  // ACTIVITY_DATA && console.log('ACTIVITY_DATA 3 :', ACTIVITY_DATA); //OK

  const activityData = ACTIVITY_DATA.data.sessions;

  /**
   * Given a date string,
   * remove the year and month and return the rest of the string
   * @returns The date without the year, month and any leading 0.
   */
  function formatDate(date) {
    let newDate = date.substring(8);
    return newDate.replace(/^0+/, '');
  }

  /* Mapping the data to a new object
   * with the day, kilogram and calories
   * in order to format the values of day
   */
  const newData = activityData.map((item) => {
    return {
      day: formatDate(item.day),
      kilogram: item.kilogram,
      calories: item.calories,
    };
  });

  return (
    <div id="dailyactivities">
      <div id="dailyactivities_title">
        <p>Activité quotidienne</p>
        <div id="dailyactivities_legend">
          <div className="circleBase circleBlack"></div>
          <p>Poids (kg)</p>
          <div className="circleBase circleRed"></div>
          <p>Calories brûlées (kCal)</p>
        </div>
      </div>

      <DailyChart data={newData} />
    </div>
  );
}

export default Daily;
