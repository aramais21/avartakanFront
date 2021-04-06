import React from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NewsScreen from './screens/NewsScreen';
import FindMe from './screens/FindMe';
import LetsRock from './screens/LetsRock';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name = 'News Feed' component = {NewsScreen} />
        <Tab.Screen name = 'Find Me' component = {FindMe} />
        <Tab.Screen name = "Let's Rock" component = {LetsRock} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
