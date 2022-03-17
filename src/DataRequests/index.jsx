import { useState } from 'react';

// http://localhost:3000/user/${userId} - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
// http://localhost:3000/user/${userId}/activity - retrieves a user's activity day by day with kilograms and calories.
// http://localhost:3000/user/${userId}/average-sessions - retrieves the average sessions of a user per day. The week starts on Monday.
// http://localhost:3000/user/${userId}/performance - retrieves a user's performance (energy, endurance, etc.).

const BASE_URL = `http://localhost:3000/user/`;

let userID = 12;
// use user ID 12 or 18

export const dataRequest = async (URL) =>
  await fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((value) => {
      const data = value;
      return data;
    })

    .catch((err) => {
      console.log('catch :', err);
      return err;
    });

export const MAIN_DATA = dataRequest(BASE_URL + `${userID}`);

export const ACTIVITY_DATA = dataRequest(BASE_URL + `${userID}/activity`);
export const SESSIONS_DATA = dataRequest(
  BASE_URL + `${userID}/average-sessions`
);
export const PERF_DATA = dataRequest(BASE_URL + `${userID}/performance`);
