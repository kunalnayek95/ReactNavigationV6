import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';

const MomentCard = ({ item }) => {
  console.log(item);
  return (
    <View
      style={{
        height: 200,
        width: Dimensions.get('window').width - 20,
        margin: 10,
        borderRadius: 10,
        borderWidth: 1,
        alignItems: 'center',
      }}>
      <Image
        source={{
          uri: item.url,
        }}
        style={{
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          width: '100%',
          height: 160,
        }}
      />
      <Text>{item.title}</Text>
    </View>
  );
};

export default MomentCard;
