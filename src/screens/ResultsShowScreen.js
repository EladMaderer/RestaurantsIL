import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ResultsShow = ({route}) => {
    const { name } = route.params;
    return (
        <View>
            <Text>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default ResultsShow;
