import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TextInput,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import Feather from 'react-native-vector-icons/Feather';
import BannerSlider from '../components/BannerSlider';
import CustomSwitch from '../components/CustomSwitch';
import ListItem from '../components/ListItem';
import { freeGames, paidGames, sliderData } from '../model/data';
import { windowWidth } from '../utils/Dimention';

const HomeScreen = ({ navigation }) => {
  const [gamesTab, setGamesTab] = useState(1);

  const renderBanner = ({ item, index }) => {
    return <BannerSlider data={item} />;
  };

  const onSelectSwitch = value => {
    setGamesTab(value);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <ScrollView style={{ padding: 20 }} showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <Text style={{ fontSize: 18, fontFamily: 'SourceSansPro-SemiBold' }}>
            Hello Kunal
          </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ImageBackground
              source={require('../assets/images/user-profile.jpg')}
              style={{ width: 40, height: 40 }}
              imageStyle={{ borderRadius: 40 / 2 }}
            />
          </TouchableOpacity>
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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 15,
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 18, fontFamily: 'SourceSansPro-SemiBold' }}>
            Upcoming Games
          </Text>
          <TouchableOpacity>
            <Text style={{ color: '#0aada8' }}>See all</Text>
          </TouchableOpacity>
        </View>
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={sliderData}
          renderItem={renderBanner}
          sliderWidth={windowWidth - 40}
          itemWidth={300}
          loop={true}
        />
        <View style={{ marginVertical: 20 }}>
          <CustomSwitch
            selectionMode={1}
            option1="Free to play"
            option2="Paid games"
            onSelectSwitch={onSelectSwitch}
          />
        </View>
        {gamesTab === 1 &&
          freeGames.map(item => (
            <ListItem
              key={item.id}
              photo={item.poster}
              title={item.title}
              subTitle={item.subtitle}
              isFree={item.isFree}
              onPress={() =>
                navigation.navigate('GameDetails', {
                  title: item.title,
                  id: item.id,
                })
              }
            />
          ))}
        {gamesTab === 2 &&
          paidGames.map(item => (
            <ListItem
              key={item.id}
              photo={item.poster}
              title={item.title}
              subTitle={item.subtitle}
              isFree={item.isFree}
              price={item.price}
              onPress={() =>
                navigation.navigate('GameDetails', {
                  title: item.title,
                  id: item.id,
                })
              }
            />
          ))}
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
