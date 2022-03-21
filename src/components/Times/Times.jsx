import './style.css';
import { BASE_URL } from '../../constants/BASE_URL';
import GetUserID from '../../Hooks/GetUserID/GetUserID';
import { useFetch } from '../../Hooks/FetchData/FetchData';
import TimesChart from '../TimesChart/TimesChart';
import Loader from '../Loader/Loader';

/**
 * It takes the sessions data from the API and formats it into a format that the `TimesChart` can use
 * @component
 *
 */
function Times() {
  const { data, isLoading, error } = useFetch(
    BASE_URL + `${GetUserID()}/average-sessions`
  );
  const SESSIONS_DATA = data;

  if (isLoading) {
    return <Loader />;
  }
  if (error || !data) {
    return <span>Error</span>;
  }
  // SESSIONS_DATA &&
  //   console.log('SESSIONS_DATA 3 :', SESSIONS_DATA.data.sessions); //OK

  const sessionsData = SESSIONS_DATA.data.sessions;
  const sessionsLabel = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

  /* Mapping the data to a new object
   * with the day and the sessionLength
   * in order to change the values of day.
   * from number to letters.
   */
  const newData = sessionsData.map((item) => {
    return {
      day: sessionsLabel[item.day - 1],
      sessionLength: item.sessionLength,
    };
  });

  return (
    <div id="times">
      <TimesChart data={newData} />
    </div>
  );
}

export default Times;
