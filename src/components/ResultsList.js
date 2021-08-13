import React from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({title, results}) => {
    if (!results.length) return null;
    const navigation = useNavigation();
    return <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            data={results}
            renderItem={({item}) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', {name: item.name, id: item.id})}>
                        <ResultsDetail result={item}/>
                    </TouchableOpacity>
                )
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        paddingBottom: 12,
        borderColor: '#bababa',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10
    }
});

export default ResultsList;
