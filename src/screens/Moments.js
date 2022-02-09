import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import MomentCard from '../components/MomentCard';

const Moments = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [currentPage, setPage] = useState(1);

  const fetchData = () => {
    fetch(
      'https://jsonplaceholder.typicode.com/photos?_limit=10&_page=' +
        currentPage,
    )
      .then(res => res.json())
      .then(resData => {
        setLoading(false);
        setData(data.concat(resData));
      });
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const renderItem = ({ item }) => <MomentCard item={item} />;

  const renderFooter = () => {
    return isLoading ? (
      <View style={{ height: 100 }}>
        <ActivityIndicator size="large" color="red" />
      </View>
    ) : null;
  };

  const handleLoadMore = () => {
    setPage(currentPage + 1);
    setLoading(true);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ListFooterComponent={renderFooter}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0}
      />
    </SafeAreaView>
  );
};

export default Moments;
