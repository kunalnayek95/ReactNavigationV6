import React from 'react';
import { View, Text } from 'react-native';

const GameDetails = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>GameDetails Screen</Text>
      <Text>{route.params?.title}</Text>
    </View>
  );
};

export default GameDetails;
