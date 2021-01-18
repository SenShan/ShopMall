import React, {Component} from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default class LayoutGuide extends Component {
  constructor() {
    super();
    this.setState = {
      data: true,
    };
  }

  render(): React.ReactNode {
    return (
      <ScrollView>
        <View style={Styles.rootView}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigator.pop();
            }}>
            <Text style={Styles.backText}>返回</Text>
          </TouchableOpacity>
          {this.renderText()}
        </View>
      </ScrollView>
    );
  }

  renderText() {
    const texts = [];
    for (let i = 1; i <= 35; i++) {
      texts.push(
        <Text key={i} style={Styles.contentText}>
          文本{i}
        </Text>,
      );
    }
    return texts;
  }
}
const Styles = StyleSheet.create({
  rootView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  backText: {
    alignSelf: 'flex-start',
    color: 'red',
    margin: 4,
    padding: 6,
    fontSize: 18,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'green',
    backgroundColor: 'transparent',
  },
  contentText: {
    fontSize: 20,
    alignSelf: 'center',
  },
});
