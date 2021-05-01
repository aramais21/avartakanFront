import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NewsScreen from './screens/NewsScreen';
import FindMe from './screens/FindMe';
import LetsRock from './screens/LetsRock';
import { GREY_HEX, RED_HEX } from './config/constants';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator
        screenOptions = {({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            switch(route.name){
              case 'News Feed':
                iconName = `newspaper${focused?'-outline':''}`
                break;
              case 'Find Me':
                iconName = `person${focused?'-outline':''}`
                break;
              case "Let's Rock":
                iconName = `musical-notes${focused?'-outline':''}`
                break;
              default:
                iconName = 'md-add-circle-sharp';
                break;
            }

            return <Ionicons name = {iconName} color = {color} size = {size} />;
          }
        })}
        tabBarOptions={{
          activeTintColor: RED_HEX,
          inactiveTintColor: GREY_HEX,
        }} 
      >
        <Tab.Screen name = 'News Feed' component = {NewsScreen} />
        <Tab.Screen name = 'Find Me' component = {FindMe} />
        <Tab.Screen name = "Let's Rock" component = {LetsRock} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
