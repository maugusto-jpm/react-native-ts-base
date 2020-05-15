import React, { Component } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';

import styles from './styles';
import { RootStackParamList, Photo } from '../../types';
import api from '../../services/api';

type NavigationProps = {
  navigation: StackNavigationProp<RootStackParamList>;
  route: RouteProp<RootStackParamList, 'Main'>;
};

export type Props = undefined;

interface State {
  photos: Photo[];
  endAchieved: boolean;
  pageNumber: number;
  pageSize: number;
}

export default class Main extends Component<NavigationProps, State> {
  state: Readonly<State> = {
    photos: [],
    endAchieved: false,
    pageNumber: 1,
    pageSize: 20,
  };

  componentDidMount() {
    this.loadPhotos();
  }

  loadPhotos = async (page: number = 1) => {
    const response = await api.get('/photos', {
      params: {
        _limit: this.state.pageSize,
        _page: page,
      },
    });

    const { data: photos }: { data: Photo[] } = response;

    this.setState({
      photos: [...this.state.photos, ...photos],
      endAchieved: photos.length < this.state.pageSize,
      pageNumber: page,
    });
  };

  loadMore = async () => {
    const { pageNumber, endAchieved } = this.state;
    if (endAchieved) return;

    await this.loadPhotos(pageNumber + 1);
  };

  renderListItem = ({ item: photo }: { item: Photo }) => (
    <View style={styles.photoListContainer}>
      <Text style={styles.photoTitle}>{photo.title}</Text>
      <Image source={{ uri: photo.thumbnailUrl }} style={styles.thumbnail} />
      <TouchableOpacity
        style={styles.photoLink}
        onPress={() => this.props.navigation.navigate('PhotoDetails', { photo })}>
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
          keyExtractor={photo => photo.id.toString()}
          renderItem={this.renderListItem}
          onEndReached={this.loadMore}
          onEndReachedThreshold={0.3}
        />
      </View>
    );
  }
}
