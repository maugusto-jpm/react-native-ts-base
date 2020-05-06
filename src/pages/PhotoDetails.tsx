import React, { Component } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import WebView from 'react-native-webview';

import { RootStackParamList, Photo } from '../types';

type NavigationProps = {
  navigation: StackNavigationProp<RootStackParamList>;
  route: RouteProp<RootStackParamList, 'PhotoDetails'>;
};

export type Props = {
  photo: Photo;
};

export default class PhotoDetails extends Component<NavigationProps> {
  componentDidMount() {
    this.props.navigation.setOptions({
      title: this.props.route.params.photo.title,
      headerTitleStyle: {
        width: '60%',
      },
    });
  }

  render() {
    return <WebView source={{ uri: this.props.route.params.photo.url }} />;
  }
}
