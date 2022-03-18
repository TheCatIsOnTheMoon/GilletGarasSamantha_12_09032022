import './style.css';
import { MAIN_DATA_URL } from '../../constants';
import { useFetch } from '../../Hooks/FetchData';
import Hello from '../Hello';

function ProfileBar() {
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
  // MAIN_DATA && console.log('MAIN_DATA 3 :', MAIN_DATA); //OK

  return (
    <div id="hello">
      <Hello firstName={MAIN_DATA.data.userInfos.firstName} />
      <p id="hello_congrats">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  );
}

export default ProfileBar;
