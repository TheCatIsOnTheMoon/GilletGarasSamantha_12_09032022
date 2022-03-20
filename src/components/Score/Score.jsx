import './style.css';
import ScoreChart from '../ScoreChart/ScoreChart';
import { MAIN_DATA_URL } from '../../constants';
import { useFetch } from '../../Hooks/FetchData/FetchData';

/**
 * It takes the main data from the API and take the `score` data into a format that the `ScoreChart` can use
 * @component
 *
 */
function Score() {
  const { data, isLoading, error } = useFetch(MAIN_DATA_URL);
  const MAIN_DATA = data;

  if (isLoading) {
    return <span>Loading ...</span>;
  }
  if (error || !data) {
    return <span>Error</span>;
  }
  // MAIN_DATA && console.log('MAIN_DATA 3 :', MAIN_DATA); //OK

  /* Checking if the `todayScore` exists in the `MAIN_DATA` object. If it does, it will use that data.
  If it doesn't, it will use the `score` data. */
  const scoreData = MAIN_DATA.data.todayScore || MAIN_DATA.data.score;

  return (
    <div id="score">
      <ScoreChart score={scoreData} />
    </div>
  );
}

export default Score;
