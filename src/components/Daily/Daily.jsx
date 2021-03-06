import './style.css';
import { BASE_URL } from '../../constants/BASE_URL';
import GetUserID from '../../Hooks/GetUserID/GetUserID';
import { useFetch } from '../../Hooks/FetchData/FetchData';
import DailyChart from '../DailyChart/DailyChart';
import Loader from '../Loader/Loader';

/**
 * It takes the activities data from the API and formats it into a format that the `DailyChart` can use
 * @component
 *
 */
function Daily() {
  const { data, isLoading, error } = useFetch(
    BASE_URL + `${GetUserID()}/activity`
  );

  if (isLoading) {
    return <Loader />;
  }
  if (error || !data) {
    return <span>Error</span>;
  }

  const ACTIVITY_DATA = data.data.sessions;

  /**
   * Given a date string, return a new date string with the month and day swapped
   * @param  {string} date format YYYY-MM-DD
   * @returns The date without the leading zeros.
   */
  function formatDate(date) {
    let newDate = date.substring(8);
    return newDate.replace(/^0+/, '');
  }

  /* Creating a new array with the same structure as the original array, but with the day value formatted. */
  const NEW_ACTIVITY_DATA = ACTIVITY_DATA.map((item) => {
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

      <DailyChart data={NEW_ACTIVITY_DATA} />
    </div>
  );
}

export default Daily;
