import './style.css';
import { SESSIONS_DATA_URL } from '../../constants';
import { useFetch } from '../../Hooks/FetchData/FetchData';
import TimeChart from '../TimeChart/TimeChart';

function Times() {
  const { data, isLoading, error } = useFetch(SESSIONS_DATA_URL);
  // console.log('SESSIONS_DATA 1 :', data); // OK
  const SESSIONS_DATA = data;
  // console.log('SESSIONS_DATA 2 :', SESSIONS_DATA); //OK

  if (isLoading) {
    return <span>Loading ...</span>;
  }
  if (error || !data) {
    return <span>Error</span>;
  }
  // SESSIONS_DATA &&
  //   console.log('SESSIONS_DATA 3 :', SESSIONS_DATA.data.sessions); //OK
  return (
    <div id="times">
      <TimeChart data={SESSIONS_DATA.data.sessions} />
    </div>
  );
}

export default Times;
