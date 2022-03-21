import './style.css';
import { BASE_URL } from '../../constants/BASE_URL';
import GetUserID from '../../Hooks/GetUserID/GetUserID';
import ScoreChart from '../ScoreChart/ScoreChart';
import { useFetch } from '../../Hooks/FetchData/FetchData';
import Loader from '../Loader/Loader';

/**
 * It takes the main data from the API and take the `score` data into a format that the `ScoreChart` can use
 * @component
 *
 */
function Score() {
  const { data, isLoading, error } = useFetch(BASE_URL + `${GetUserID()}`);

  if (isLoading) {
    return <Loader />;
  }
  if (error || !data) {
    return <span>Error</span>;
  }

  /* Checking if the `todayScore` exists in the `MAIN_DATA` object. If it does, it will use that data.
  If it doesn't, it will use the `score` data. */
  const SCORE_DATA = data.data.todayScore || data.data.score;

  return (
    <div id="score">
      <ScoreChart score={SCORE_DATA} />
    </div>
  );
}

export default Score;
