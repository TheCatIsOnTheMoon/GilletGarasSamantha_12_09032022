import './style.css';
import { MAIN_DATA_URL } from '../../constants';
import { useFetch } from '../../Hooks/FetchData/FetchData';
import RightSideDetails from '../RightSideDetails/RightSideDetails';

function RightSide() {
  const { data, isLoading, error } = useFetch(MAIN_DATA_URL);
  // console.log('MAIN_DATA 1 :', data); // OK
  const MAIN_DATA = data;
  // console.log('MAIN_DATA 2 :', MAIN_DATA); //OK

  if (isLoading) {
    return <span>Loading ...</span>;
  }
  if (error || !data) {
    return <span>Error</span>;
  }
  // MAIN_DATA && console.log('MAIN_DATA 3 :', MAIN_DATA.data.keyData); //OK
  // firstName={MAIN_DATA.data.userInfos.firstName}
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
