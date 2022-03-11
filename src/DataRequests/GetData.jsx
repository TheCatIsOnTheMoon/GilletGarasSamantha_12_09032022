import { useMockedData, userID } from '../constants';
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from '../mockedData/data';

export function getMainData() {
  return getMockedData(USER_MAIN_DATA, userID);
}

export function getActivityData() {
  return getMockedData(USER_ACTIVITY, userID);
}

export function getSessionsData() {
  return getMockedData(USER_AVERAGE_SESSIONS, userID);
}

export function getPerformanceData() {
  return getMockedData(USER_PERFORMANCE, userID);
}

export function getMockedData(mockedData, userID) {
  if (useMockedData === true) {
    const data = mockedData.find((item) => item.id === Number(userID));
    return data;
  }
}
