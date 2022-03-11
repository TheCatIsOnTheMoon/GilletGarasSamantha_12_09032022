import { useState, useEffect } from 'react';
import axios from 'axios';

//https://www.freecodecamp.org/news/how-to-use-axios-with-react/

// NOTE : Axios automatically returns the response in JSON

// This project includes four endpoints that you will be able to use:

// http://localhost:3000/user/${userId} - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
// http://localhost:3000/user/${userId}/activity - retrieves a user's activity day by day with kilograms and calories.
// http://localhost:3000/user/${userId}/average-sessions - retrieves the average sessions of a user per day. The week starts on Monday.
// http://localhost:3000/user/${userId}/performance - retrieves a user's performance (energy, endurance, etc.).

const URL = `http://localhost:3000/user/`;

function DataRequest() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // invalid url will trigger an 404 error
    axios
      .get(`${URL}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) return `Error: ${error.message}`;
  if (!data) return 'No data';

  return { error, data };
}

export default DataRequest;
