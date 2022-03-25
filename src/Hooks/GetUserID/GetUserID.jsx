import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

/**
 * Given the URL, return the user ID from the URL
 * @returns The userID is being returned.
 */
function GetUserID() {
  const sampleLocation = useLocation();
  const navigate = useNavigate();
  const userID = sampleLocation.pathname.substring(11);

  //for demo purpose only
  if ((userID !== '12') & (userID !== '18')) {
    navigate('*');
  }

  return userID;
}

export default GetUserID;
