import './style.css';
import { BASE_URL } from '../../constants/BASE_URL';
import GetUserID from '../../Hooks/GetUserID/GetUserID';
import PerfsChart from '../PerfsChart/PerfsChart';
import { useFetch } from '../../Hooks/FetchData/FetchData';
import Loader from '../Loader/Loader';

/**
 * It takes the performances data from the API and formats it into a format that the `PerfsChart` can use
 * @component
 *
 */
function Perfs() {
  const { data, isLoading, error } = useFetch(
    BASE_URL + `${GetUserID()}/performance`
  );

  if (isLoading) {
    return <Loader />;
  }
  if (error || !data) {
    return <span>Error</span>;
  }

  const PERF_DATA = data.data.data;
  const PERF_DATA_LABELS = data.data.kind;

  /* Mapping the data to a new object
   * with the value and the kind
   * in order to change the numbers values of kind
   * into their respectives words
   */
  const NEW_PERF_DATA = PERF_DATA.map((item) => {
    return {
      value: item.value,
      kind: PERF_DATA_LABELS[item.kind],
    };
  });

  const kindsFRtrad = {
    cardio: 'Cardio',
    energy: 'Énergie',
    endurance: 'Endurance',
    strength: 'Force',
    speed: 'Vitesse',
    intensity: 'Intensité',
  };

  /* Mapping the newData to a new object
   * with the value and the kind
   * in order to change the values of kind
   * by the FR translation
   */
  const NEW_PERF_DATA_FR = NEW_PERF_DATA.map((item) => {
    return {
      value: item.value,
      kind: kindsFRtrad[item.kind],
    };
  });

  /* Reversing the order of the array. */
  const NEW_PERF_DATA_FR_AND_REVERSE = NEW_PERF_DATA_FR.reverse();

  return (
    <div id="perfs">
      <PerfsChart data={NEW_PERF_DATA_FR_AND_REVERSE} />
    </div>
  );
}

export default Perfs;
