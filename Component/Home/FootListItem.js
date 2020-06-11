import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Platform,
} from 'react-native';
import {screenW} from '../Launch';

export default class FootListItem extends Component {
  constructor(props) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../image/label.jpg')}
          style={styles.itemImage}
        />
        <View></View>
        <Text>名字</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    marginStart: 8,
    marginEnd: 8,
    marginBottom: 8,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  itemImage: {
    width: 120,
    height: 100,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
});
