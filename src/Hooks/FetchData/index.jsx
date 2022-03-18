import { useState, useEffect } from 'react';
// import {
//   BASE_URL,
//   userID,
//   MAIN_DATA_URL,
//   ACTIVITY_DATA_URL,
//   SESSIONS_DATA_URL,
//   PERF_DATA_URL,
// } from '../../constants';

export function useFetch(URL) {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!URL) return;

    setLoading(true);

    async function fetchData() {
      try {
        const response = await fetch(URL);
        const data = await response.json();

        setData(data);
      } catch (err) {
        console.log(err);

        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [URL]);

  return { isLoading, data, error };
}
