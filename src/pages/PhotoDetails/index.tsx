import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export type Props = {
  text: string;
};

export default class PhotoDetails extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Text given by Props: {this.props.text}</Text>
      </View>
    );
  }
}
