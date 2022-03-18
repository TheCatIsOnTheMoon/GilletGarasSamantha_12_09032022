import { useState, useEffect } from 'react';

/**
 * If the URL is defined, fetch the data from the URL and set the data to the response
 * @param {String} URL
 * @returns {Object}  {data, isDataLoading, isError}
 */

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
