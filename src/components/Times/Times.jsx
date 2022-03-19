import './style.css';
import { SESSIONS_DATA_URL } from '../../constants';
import { useFetch } from '../../Hooks/FetchData/FetchData';
import TimesChart from '../TimesChart/TimesChart';

function Times() {
  const { data, isLoading, error } = useFetch(SESSIONS_DATA_URL);
  const SESSIONS_DATA = data;

  if (isLoading) {
    return <span>Loading ...</span>;
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
   * in order to change the values of day
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
