import './style.css';
import { BASE_URL } from '../../constants/BASE_URL';
import GetUserID from '../../Hooks/GetUserID/GetUserID';
import { useFetch } from '../../Hooks/FetchData/FetchData';
import RightSideDetails from '../RightSideDetails/RightSideDetails';

/**
 * It takes the main data from the API and formats it into a format that the `RightSideDetails` componant can use
 * @component
 *
 */
function RightSide() {
  const { data, isLoading, error } = useFetch(BASE_URL + `${GetUserID()}`);
  const MAIN_DATA = data;

  if (isLoading) {
    return <span>Loading ...</span>;
  }
  if (error || !data) {
    return <span>Error</span>;
  }
  // MAIN_DATA && console.log('MAIN_DATA 3 :', MAIN_DATA.data.keyData); //OK

  return (
    <div id="siderecap">
      <RightSideDetails
        calories={MAIN_DATA.data.keyData.calorieCount}
        proteines={MAIN_DATA.data.keyData.proteinCount}
        glucides={MAIN_DATA.data.keyData.carbohydrateCount}
        lipides={MAIN_DATA.data.keyData.lipidCount}
      />
    </div>
  );
}

export default RightSide;
