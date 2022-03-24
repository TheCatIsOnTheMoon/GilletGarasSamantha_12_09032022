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

  if (isLoading) {
    return <Loader />;
  }
  if (error || !data) {
    return <span>Error</span>;
  }

  const FIRST_NAME = data.data.userInfos.firstName;

  return <ProfileContent firstName={FIRST_NAME} />;
}

export default Profile;
