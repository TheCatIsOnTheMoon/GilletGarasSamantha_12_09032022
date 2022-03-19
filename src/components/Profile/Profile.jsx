import './style.css';
import { MAIN_DATA_URL } from '../../constants';
import { useFetch } from '../../Hooks/FetchData/FetchData';
import ProfileContent from '../ProfileContent/ProfileContent';

function Profile() {
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
    <div id="hello">
      <ProfileContent firstName={MAIN_DATA.data.userInfos.firstName} />
      <p id="hello_congrats">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  );
}

export default Profile;
