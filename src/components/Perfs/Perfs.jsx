import './style.css';
import PerfsChart from '../PerfsChart/PerfsChart';
import { PERF_DATA_URL } from '../../constants';
import { useFetch } from '../../Hooks/FetchData/FetchData';

function Perfs() {
  const { data, isLoading, error } = useFetch(PERF_DATA_URL);
  // console.log('PERF_DATA 1 :', data); // OK
  const PERF_DATA = data;
  // console.log('PERF_DATA 2 :', PERF_DATA); //OK

  if (isLoading) {
    return <span>Loading ...</span>;
  }
  if (error || !data) {
    return <span>Error</span>;
  }
  // PERF_DATA && console.log('PERF_DATA 3 :', PERF_DATA); //OK

  return (
    <div id="perfs">
      <PerfsChart data={PERF_DATA.data.data} kind={PERF_DATA.data.kind} />
    </div>
  );
}

export default Perfs;
