// LIST OF UNIVERSAL CONSTANTS

/* Setting the userID to 12 or 18 */
const userID = 18;

/* This is a constant that is used to store the base URL for the API. */
const BASE_URL = `http://localhost:3000/user/`;

/* This is the 4 endpoints URL that is used tto fetch data from the API. */
export const MAIN_DATA_URL = BASE_URL + `${userID}`;
export const ACTIVITY_DATA_URL = BASE_URL + `${userID}/activity`;
export const SESSIONS_DATA_URL = BASE_URL + `${userID}/average-sessions`;
export const PERF_DATA_URL = BASE_URL + `${userID}/performance`;
