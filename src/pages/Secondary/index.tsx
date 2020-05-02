import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export type Props = {
  text: string;
};

export default class Secondary extends Component<Props> {
  state = {
    // @ts-ignore
    text: this.props.route.params.text,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Text given by Props: {this.state.text}</Text>
      </View>
    );
  }
}
