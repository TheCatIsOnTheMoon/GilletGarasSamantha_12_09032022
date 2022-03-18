export const BASE_URL = `http://localhost:3000/user/`;

export const userID = 12;
// use user ID 12 or 18

export const MAIN_DATA_URL = BASE_URL + `${userID}`;

export const ACTIVITY_DATA_URL = BASE_URL + `${userID}/activity`;
export const SESSIONS_DATA_URL = BASE_URL + `${userID}/average-sessions`;
export const PERF_DATA_URL = BASE_URL + `${userID}/performance`;
