import React, {useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import { useGetRestaurant } from '../hooks/useResults';

const ResultsShow = ({route}) => {
    const { findRestaurantApi, results, isLoading}  = useGetRestaurant();
    const { name, id } = route.params;

    useEffect(() => {
        findRestaurantApi(id);
    }, []);
    return (
        <View>
            <Text>{name}</Text>
            <FlatList
                keyExtractor={item => item}
                data={results.photos}
                renderItem={({item}) => {
                    return(
                    <Image source={{uri: item}} style={{width: 250, height: 150, margin: 15}} />
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({

});

export default ResultsShow;
