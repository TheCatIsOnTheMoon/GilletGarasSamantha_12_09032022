import './style.css';
import ScoreChart from '../ScoreChart/ScoreChart';
import { MAIN_DATA_URL } from '../../constants';
import { useFetch } from '../../Hooks/FetchData/FetchData';

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
  return (
    <div id="score">
      <ScoreChart score={MAIN_DATA.data.todayScore} />
    </div>
  );
}

export default Score;
