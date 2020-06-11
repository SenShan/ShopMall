import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Text,
  Easing,
  BackHandler,
  TouchableHighlight,
} from 'react-native';
import BaseComponent from '../Base/BaseComponent';
export default class Animation extends BaseComponent {
  constructor(props) {
    super(props);
    this.animatedValue1 = new Animated.Value(0);
    this.animatedValue2 = new Animated.Value(0);
    this.animatedValue3 = new Animated.Value(0);
  }
  componentDidMount() {
    this.animate();
  }
  onCreate() {
    super.onCreate();
  }

  animate() {
    this.animatedValue1.setValue(0);
    this.animatedValue2.setValue(0);
    this.animatedValue3.setValue(0);
    const createAnimation = function (value, duration, easing, delay = 0) {
      return Animated.timing(value, {
        toValue: 1,
        duration,
        easing,
        delay,
      });
    };
    Animated.parallel([
      createAnimation(this.animatedValue1, 2000, Easing.ease),
      createAnimation(this.animatedValue2, 1000, Easing.ease, 1000),
      createAnimation(this.animatedValue3, 1000, Easing.ease, 2000),
    ]).start();
  }
  render(): React.ReactNode {
    const scaleText = this.animatedValue1.interpolate({
      inputRange: [0, 1],
      outputRange: [0.5, 2],
    });

    const spinText = this.animatedValue2.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '720deg'],
    });

    const introButton = this.animatedValue3.interpolate({
      inputRange: [0, 1],
      outputRange: [-100, 400],
    });
    return (
      <View style={styles.container}>
        <Animated.View style={{transform: [{scale: scaleText}]}}>
          <Text>Welcome</Text>
        </Animated.View>

        <Animated.View style={{marginTop: 20, transform: [{rotate: spinText}]}}>
          <Text style={styles.text}>To the App</Text>
        </Animated.View>

        <Animated.View style={{top: introButton, position: 'absolute'}}>
          <TouchableHighlight
            style={styles.button}
            onPress={this.animate.bind(this)}>
            <Text style={styles.buttonText}>Click here to Start</Text>
          </TouchableHighlight>
        </Animated.View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#1FB9FF',
    padding: 10,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
});
