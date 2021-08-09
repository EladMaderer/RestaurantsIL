import React, { useState, useEffect } from 'react';
import { yelp } from '../api/yelp';

export const useResults = () => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchApi = async (term, location = 'San Jose') => {
    setIsLoading(true);
    try {
      const res = await yelp(`search?limit=50&term=${term}&location=${location}`);
      setResults(res.businesses);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }
  }
  useEffect(() => {
    searchApi('fish');
  }, []);

  return {searchApi, results, isLoading};
}