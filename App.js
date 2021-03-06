import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* screenOptions={{ headerShown: false }} */}
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Main = ({ navigation }) => {
  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: 'white' }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <StatusBar barStyle="dark-content" />
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            //justifyContent: 'center',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#8843F2',
              marginTop: 15,
            }}>
            GAMEON
          </Text>
          <Image
            style={{
              width: 300,
              height: 250,
              borderRadius: 15,
              transform: [{ rotate: '15deg' }],
            }}
            source={require('./src/assets/images/gaming.png')}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home');
            }}
            style={{
              marginBottom: 15,
              marginTop: 20,
              backgroundColor: '#EF2F88',
              width: '90%',
              padding: 15,
              borderRadius: 5,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                justifyContent: 'center',
                alignSelf: 'center',
                // fontWeight: 'bold',
                fontSize: 18,
                color: '#ffffff',
                fontFamily: 'SourceSansPro-Bold',
              }}>
              Let's Begin
            </Text>
            <MaterialIcons name="arrow-forward-ios" size={25} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
