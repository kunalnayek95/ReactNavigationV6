import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TextInput,
  ImageBackground,
  StyleSheet,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <ScrollView style={{ padding: 20 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <Text style={{ fontSize: 18, fontFamily: 'SourceSansPro-SemiBold' }}>
            Hello Kunal Nayek
          </Text>
          <ImageBackground
            source={require('../assets/images/user-profile.jpg')}
            style={{ width: 40, height: 40 }}
            imageStyle={{ borderRadius: 40 / 2 }}
          />
        </View>
        <View style={style.textInputView}>
          <Feather
            name="search"
            size={20}
            color="#C6C6C6"
            style={{ marginRight: 5 }}
          />
          <TextInput
            placeholder="Search"
            style={{ marginRight: 10, flex: 1 }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  textInputView: {
    flexDirection: 'row',
    borderColor: '#C6C6C6',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
  },
});

export default HomeScreen;
