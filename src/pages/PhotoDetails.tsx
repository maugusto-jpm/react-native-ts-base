import React, { Component } from 'react';
import WebView from 'react-native-webview';

import { Photo } from '../types';

interface State {
  photo: Photo;
}

export default class PhotoDetails extends Component {
  state: State = {
    // @ts-ignore
    photo: this.props.route.params.photo,
  };

  componentDidMount() {
    // @ts-ignore
    this.props.navigation.setOptions({
      title: this.state.photo.title,
      headerTitleStyle: {
        width: '60%',
      },
    });
  }

  render() {
    return <WebView source={{ uri: this.state.photo.url }} />;
  }
}
