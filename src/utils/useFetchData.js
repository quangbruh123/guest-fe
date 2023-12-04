// useFetchData.js
import { useState, useEffect } from "react";
import axios from "axios";

const useFetchData = (url, query, dataType = "none") => {
  const [data, setData] = useState(dataType === "object" ? {} : []);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    const fetchData = async () => {
      if (!ignore) {
        try {
          const response = await axios.get(url, {
            params: query,
          });
          console.log(response);
          setData(response.data);
        } catch (error) {
          setError(error);
        } finally {
          setIsLoading(false);
        }
      }
      return () => {
        ignore = true;
      };
    };

    fetchData();
  }, [url, query]);

  return { data, isLoading, error };
};

export default useFetchData;
