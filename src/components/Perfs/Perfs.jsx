import './style.css';
import PerfsChart from '../PerfsChart/PerfsChart';
import { PERF_DATA_URL } from '../../constants';
import { useFetch } from '../../Hooks/FetchData/FetchData';

function Perfs() {
  const { data, isLoading, error } = useFetch(PERF_DATA_URL);
  const PERF_DATA = data;

  if (isLoading) {
    return <span>Loading ...</span>;
  }
  if (error || !data) {
    return <span>Error</span>;
  }
  // PERF_DATA && console.log('PERF_DATA 3 :', PERF_DATA); //OK

  const perfdata = PERF_DATA.data.data;
  const perfLabel = PERF_DATA.data.kind;

  /* Mapping the data to a new object
   * with the value and the kind
   * in order to change the values of kind
   */
  const newData = perfdata.map((item) => {
    return {
      value: item.value,
      kind: perfLabel[item.kind],
    };
  });

  return (
    <div id="perfs">
      <PerfsChart data={newData} />
    </div>
  );
}

export default Perfs;
