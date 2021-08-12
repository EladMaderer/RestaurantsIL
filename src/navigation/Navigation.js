import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from '../screens/SearchScreen';
import ResultsShow from '../screens/ResultsShowScreen';

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Search Restaurants" component={SearchScreen} options={{ title: 'Search a Restaurant' }} />
      <Stack.Screen name="ResultsShow" component={ResultsShow} options={({ route }) => ({ title: route.params.name })} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Navigation;
