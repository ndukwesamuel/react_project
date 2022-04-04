import { useState, useEffect, useCallback } from 'react';




export const useFetch = (url) => {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);


  const getProducts = useCallback(async () => {
    try {
      const response = await fetch(url);
      const products = await response.json();
      console.log(products);
      setData(products)
      setLoading(false)
      
    } catch (error) {
      setLoading(false)
      console.log(error)
      
    }


  }, [url]);

  useEffect(() => {
    getProducts();
  }, [url, getProducts]);

  return { loading, data };
};
