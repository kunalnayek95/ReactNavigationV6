import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreens from '../screens/LoginScreens';
import OnboardingScreens from '../screens/OnboardingScreens';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreens}
        // options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" component={LoginScreens} />
    </Stack.Navigator>
  );
};

export default AuthStack;
