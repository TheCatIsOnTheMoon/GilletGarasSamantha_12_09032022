import './style.css';
import { ACTIVITY_DATA_URL } from '../../constants';
import { useFetch } from '../../Hooks/FetchData/FetchData';
import DailyChart from '../DailyChart/DailyChart';

function Daily() {
  const { data, isLoading, error } = useFetch(ACTIVITY_DATA_URL);
  // console.log('ACTIVITY_DATA 1 :', data); // OK
  const ACTIVITY_DATA = data;
  // console.log('ACTIVITY_DATA 2 :', ACTIVITY_DATA); //OK

  if (isLoading) {
    return <span>Loading ...</span>;
  }
  if (error || !data) {
    return <span>Error</span>;
  }
  // ACTIVITY_DATA && console.log('ACTIVITY_DATA 3 :', ACTIVITY_DATA); //OK

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

      <DailyChart data={ACTIVITY_DATA.data.sessions} />
    </div>
  );
}

export default Daily;
