// useFetchData.js
import { useState, useEffect } from "react";
import axios from "axios";

const useFetchData = (url, dataType) => {
  const [data, setData] = useState(dataType === "object" ? {} : []);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetchData;
