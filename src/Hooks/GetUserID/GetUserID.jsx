import { useLocation } from 'react-router-dom';

/**
 * Given the URL, return the user ID from the URL
 * @returns The userID is being returned.
 */
function GetUserID() {
  const sampleLocation = useLocation();
  const userID = sampleLocation.pathname.substring(11);
  return userID;
}

export default GetUserID;
