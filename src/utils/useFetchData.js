// useFetchData.js
import { useState, useEffect } from "react";
import axios from "axios";

const useFetchData = (url, query, dataType = "none") => {
  const [data, setData] = useState(dataType === "object" ? {} : []);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(url, query);
    const fetchData = async () => {
      try {
        const response = await axios.get(url, {
          params: query,
        });
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, query]);

  return { data, isLoading, error };
};

export default useFetchData;
