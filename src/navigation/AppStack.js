import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import LoginScreens from '../screens/LoginScreens';
import MessageScreen from '../screens/MessageScreen';
import Moments from '../screens/Moments';
import Profile from '../screens/Profile';
import Setting from '../screens/Setting';
import CustomDrawer from '../components/CustomDrawer';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: '#aa18ea',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        headerShown: false,
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: 'SourceSansPro-SemiBold',
          fontSize: 15,
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={TabNavigator}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Message"
        component={MessageScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Moments"
        component={Moments}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="timer-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={Setting}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="settings-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;
