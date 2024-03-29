/**
 * 主页面
 * */
import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  BackHandler,
  ToastAndroid,
} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';

/*======导入外部组件类=======*/
import TabNavigator from 'react-native-tab-navigator';
import Home from '../Home/Home';
import More from '../More/More';
import Shop from '../Shop/Shop';
import Mine from '../Mine/Mine';
const home = 'homePage';
const more = 'morePage';
const shop = 'shopPage';
const mine = 'minePage';
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: home,
    };
  }
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackExit);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackExit);
  }
  onBackExit = () => {
    if (this.pressTime && this.pressTime + 2000 >= Date.now()) {
      BackHandler.exitApp();
      return false;
    } else {
      this.pressTime = Date.now();
      ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
      return true;
    }
  };
  /**
   * React-Native引用非同级目录下文件 用 ../../
   * */
  render(): React.ReactNode {
    return (
      <TabNavigator>
        <TabNavigator.Item
          title="首页"
          renderIcon={() => (
            <Image
              source={require('../../image/home_gray.png')}
              style={styles.iconStyle}
            />
          )}
          renderSelectedIcon={() => (
            <Image
              source={require('../../image/home.png')}
              style={styles.selectedIconStyle}
            />
          )}
          badgeText={'1'}
          selected={this.state.selectedTab === home}
          onPress={() => this.setState({selectedTab: home})}>
          <Home navigator={this.props.navigator} />
        </TabNavigator.Item>
        <TabNavigator.Item
          title="更多"
          renderIcon={() => (
            <Image
              source={require('../../image/more_gray.png')}
              style={styles.iconStyle}
            />
          )}
          renderSelectedIcon={() => (
            <Image
              source={require('../../image/more.png')}
              style={styles.selectedIconStyle}
            />
          )}
          badgeText="1"
          selected={this.state.selectedTab === more}
          onPress={() => this.setState({selectedTab: more})}>
          {/*配置这个跳转后隐藏底部Tab*/}
          <More navigator={this.props.navigator} />
        </TabNavigator.Item>
        {/*--我的--*/}
        <TabNavigator.Item
          title="购物车"
          renderIcon={() => (
            <Image
              source={require('../../image/shop_gray.png')}
              style={styles.iconStyle}
            />
          )}
          renderSelectedIcon={() => (
            <Image
              source={require('../../image/shop.png')}
              style={styles.selectedIconStyle}
            />
          )}
          badgeText="1"
          selected={this.state.selectedTab === shop}
          onPress={() => this.setState({selectedTab: shop})}>
          <Shop navigator={this.props.navigator} />
        </TabNavigator.Item>
        {/*--更多--*/}
        <TabNavigator.Item
          title="我的"
          renderIcon={() => (
            <Image
              source={require('../../image/mine_gray.png')}
              style={styles.iconStyle}
            />
          )}
          renderSelectedIcon={() => (
            <Image
              source={require('../../image/mine.png')}
              style={styles.selectedIconStyle}
            />
          )}
          badgeText="1"
          onPress={() => this.setState({selectedTab: mine})}
          selected={this.state.selectedTab === mine}>
          <Mine />
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}
// renderTabBarItem(
//   title,
//   iconName,
//   selectedIconName,
//   selectedTab,
//   componentName,
//   component,
//   badgeText,
// ) {
//   return (
//     <TabNavigatorItem
//       title={title}
//       renderIcon={() => (
//         <Image source={require(iconName)} style={styles.iconStyle} />
//       )}
//       renderSelectedIcon={() => (
//         <Image source={require(selectedIconName)} style={styles.iconStyle} />
//       )}
//       selected={(this.state.selectedTab = selectedTab)}
//       onPress={() => this.setState({selectedTab: selectedTab})}
//       selectedTitleStyle={styles.selectedTitleStyle}
//       badgeText={badgeText}>
//       <Navigator
//         initialRoute={{name: componentName, component: component}}
//         configureScene={() => {
//           return Navigator.sceneConfig.PushFromRight;
//         }}
//         renderScene={(route, navigator) => {
//           let Component = route.component;
//           return <Component {...route.passProps} navigator={navigator} />;
//         }}
//       />
//     </TabNavigatorItem>
//   );
// }
const styles = StyleSheet.create({
  iconStyle: {
    width: Platform.OS === 'ios' ? 30 : 25,
    height: Platform.OS === 'ios' ? 30 : 25,
  },
  selectedIconStyle: {
    width: Platform.OS === 'ios' ? 30 : 25,
    height: Platform.OS === 'ios' ? 30 : 25,
  },
});
