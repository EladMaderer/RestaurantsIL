import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({ title, results }) => {
    return <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
       <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={() => <Text>No results found.</Text>}
        keyExtractor={item => item.id}
        data={results}
        renderItem={({item}) => <ResultsDetail result={item} />}
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