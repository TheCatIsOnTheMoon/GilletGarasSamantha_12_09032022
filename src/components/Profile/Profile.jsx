import './style.css';
import { BASE_URL } from '../../constants/BASE_URL';
import GetUserID from '../../Hooks/GetUserID/GetUserID';
import { useFetch } from '../../Hooks/FetchData/FetchData';
import ProfileContent from '../ProfileContent/ProfileContent';
import Loader from '../Loader/Loader';

/**
 * It takes the main data from the API and formats it into a format that the `ProfileContent` componant can use
 * @component
 *
 */
function Profile() {
  const { data, isLoading, error } = useFetch(BASE_URL + `${GetUserID()}`);
  const MAIN_DATA = data;

  if (isLoading) {
    return <Loader />;
  }
  if (error || !data) {
    return <span>Error</span>;
  }
  // MAIN_DATA && console.log('MAIN_DATA 3 :', MAIN_DATA); //OK

  return (
    <div id="hello">
      <ProfileContent firstName={MAIN_DATA.data.userInfos.firstName} />
      <p id="hello_congrats">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  );
}

export default Profile;
