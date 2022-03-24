import { BASE_URL } from '../../constants/BASE_URL';
import GetUserID from '../../Hooks/GetUserID/GetUserID';
import { useFetch } from '../../Hooks/FetchData/FetchData';
import RightSideDetails from '../RightSideDetails/RightSideDetails';
import Loader from '../Loader/Loader';

/**
 * It takes the main data from the API and formats it into a format that the `RightSideDetails` componant can use
 * @component
 *
 */
function RightSide() {
  const { data, isLoading, error } = useFetch(BASE_URL + `${GetUserID()}`);

  if (isLoading) {
    return <Loader />;
  }
  if (error || !data) {
    return <span>Error</span>;
  }

  const KEY_DATA = data.data.keyData;

  return (
    <RightSideDetails
      calories={KEY_DATA.calorieCount}
      proteines={KEY_DATA.proteinCount}
      glucides={KEY_DATA.carbohydrateCount}
      lipides={KEY_DATA.lipidCount}
    />
  );
}

export default RightSide;
