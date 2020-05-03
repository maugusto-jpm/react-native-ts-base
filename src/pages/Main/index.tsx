import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';

import styles from './styles';
import { Photo } from '../../types';
import api from '../../services/api';

interface State {
  photos: Photo[];
  endAchieved: boolean;
  pageNumber: number;
  pageSize: number;
}

export default class Main extends Component {
  state: State = {
    photos: [],
    endAchieved: false,
    pageNumber: 1,
    pageSize: 20,
  };

  navigate(...args: any) {
    // @ts-ignore
    return this.props.navigation.navigate(...args);
  }

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async (page: number = 1) => {
    const response = await api.get('/photos', {
      params: {
        _limit: this.state.pageSize,
        _page: page,
      },
    });

    const { data: photos }: { data: Photo[] } = response;
    console.log(photos);

    this.setState({
      photos: [...this.state.photos, ...photos],
      endReached: photos.length < this.state.pageSize,
      pageNumber: page,
    });
  };

  loadMore = () => {
    const { pageNumber, endAchieved } = this.state;
    if (endAchieved) return;

    this.loadProducts(pageNumber + 1);
  };

  renderListItem = ({ item: photo }: { item: Photo }) => (
    <View style={styles.photoListContainer}>
      <Text style={styles.photoTitle}>{photo.title}</Text>
      <Image source={{ uri: photo.thumbnailUrl }} style={styles.thumbnail} />
      <TouchableOpacity
        style={styles.photoLink}
        onPress={() => this.navigate('PhotoDetails', { photo })}>
        <Text style={styles.photoLinkText}>Acessar</Text>
      </TouchableOpacity>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.list}
          data={this.state.photos}
          keyExtractor={item => item.id.toString()}
          renderItem={this.renderListItem}
          onEndReached={this.loadMore}
          onEndReachedThreshold={0.3}
        />
      </View>
    );
  }
}
