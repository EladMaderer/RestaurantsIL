import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, ActivityIndicator } from 'react-native';
import SearchBar from '../components/SearchBar';
import { useResults } from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

export const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState('');
  const { searchApi, results, isLoading } = useResults();

  const filterResultsByPrice = price => results.filter(restaurant => restaurant.price === price);
  return (
    <View style={styles.container}>
      {isLoading ? <ActivityIndicator size="large" color="#0000ff" /> :
        <>
          <SearchBar
            term={term}
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)}
          />
          <ScrollView showsVerticalScrollIndicator={false}>
            <ResultsList results={filterResultsByPrice('$')} title='Cost Effective' />
            <ResultsList results={filterResultsByPrice('$$')} title='Bit Pricier' />
            <ResultsList results={filterResultsByPrice('$$$')} title='Big Spender' />
          </ScrollView>
        </>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 18,
    flex: 1,
    justifyContent: 'center'
  }
})

export default SearchScreen;
