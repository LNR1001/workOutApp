/*
MainNavigator.js: This navigator is usually responsible for managing the main
content of your application. It defines the navigation structure for the main
screens or features of your app once the user is authenticated or the onboarding
process is complete. The MainNavigator.js file focuses on the core functionality
of your app. It can include routes for screens like the home screen, profile
screen, settings screen, or any other primary screens in your app.
 */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {Ionicons} from 'react-native-vector-icons';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="HomeScreen"
          // shifting={true}
          // activeColor="#e91e63"
          // barStyle={{backgroundColor: 'tomato'}}
        >
          <Tab.Screen
            name={'Home'}
            component={HomeScreen}
            // options={{
            //   tabBarLabel: 'Home',
            //   tabBarIcon: ({color}) => (
            //     <Ionicons name="home" color={color} size={26} />
            //   ),
            // }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default MainNavigator;
