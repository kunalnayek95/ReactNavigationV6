import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreens from '../screens/LoginScreens';
import OnboardingScreens from '../screens/OnboardingScreens';
import AppStack from './AppStack';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreens}
        options={{ animation: 'none' }}
      />
      <Stack.Screen
        name="AppStack"
        component={AppStack}
        options={{ animation: 'none' }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
