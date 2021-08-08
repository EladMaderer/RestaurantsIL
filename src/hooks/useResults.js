import React, { useState, useEffect } from 'react';
import { yelp } from '../api/yelp';

export const useResults = () => {
  const [results, setResults] = useState([]);

  const searchApi = async (term, location = 'San Jose') => {
    try {
      const res = await yelp(`search?limit=50&term=${term}&location=${location}`);
      console.log(res.businesses);
      setResults(res.businesses);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    searchApi('hummus');
  }, []);

  return {searchApi, results};
}