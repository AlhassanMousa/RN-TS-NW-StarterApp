import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Home from '../pages/Home/Index';

const Private = createStackNavigator();

const PrivateRoutes: React.FC = () => (
  <Private.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: '#312e38'},
    }}>
    <Private.Screen name="Home" component={Home} />
  </Private.Navigator>
);

export default PrivateRoutes;
