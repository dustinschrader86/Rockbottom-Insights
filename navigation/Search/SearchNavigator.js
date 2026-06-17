import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SearchScreen from './SearchScreen';
import SearchResults from './SearchResults';

const Stack = createNativeStackNavigator();

export default function SearchNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="SearchScreen" 
        component={SearchScreen} 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="SearchResults" 
        component={SearchResults} 
        options={{ title: 'Results' }}
      />
    </Stack.Navigator>
  );
}

