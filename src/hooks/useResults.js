import React, {useState, useEffect} from 'react';
import {yelp} from '../api/yelp';

export const useResults = () => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const LOCATION = 'California';

    const searchApi = async (term, location = LOCATION) => {
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

export const useGetRestaurant = () => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const findRestaurantApi = async id => {
        setIsLoading(true);
        try {
            const res = await yelp(id);
            setResults(res);
            console.log(res);
            setIsLoading(false);
        } catch (e) {
            setIsLoading(false);
            console.log(e);
        }
    }
    return {findRestaurantApi, results, isLoading};
}
