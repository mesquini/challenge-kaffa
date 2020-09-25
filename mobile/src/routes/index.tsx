import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';

import Home from '../pages/Home';
import Ex_1_2 from '../pages/Ex_1_2';
import Ex_5 from '../pages/Ex_5';
import Ex_6_7 from '../pages/Ex_6_7';

const {Navigator, Screen} = createStackNavigator();

function AppStack() {
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <NavigationContainer>
        <Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Screen name="Home" component={Home} />
          <Screen name="Ex_1_2" component={Ex_1_2} />
          <Screen name="Ex_5" component={Ex_5} />
          <Screen name="Ex_6_7" component={Ex_6_7} />
        </Navigator>
      </NavigationContainer>
    </>
  );
}

export default AppStack;
