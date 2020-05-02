import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default class TesteComponent2 extends Component {
  state = {};

  componentDidMount() {}

  navigate(...args: any) {
    // @ts-ignore
    return this.props.navigation.navigate(...args);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>TesteComponent2</Text>
      </View>
    );
  }
}
