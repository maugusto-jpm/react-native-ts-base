import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default class Main extends Component {
  navigate(...args: any) {
    // @ts-ignore
    return this.props.navigation.navigate(...args);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Routing configured on your app!</Text>
        <TouchableOpacity
          style={styles.link}
          onPress={() => this.navigate('Secondary', { text: 'From Main to secondary' })}>
          <Text style={styles.linkText}>Go to next page</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
