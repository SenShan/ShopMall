/**
 * 首页
 * */
import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Platform,
  ToastAndroid,
  Dimensions,
} from 'react-native';
import HomeTopView from './HomeTopView';
const screenW = Dimensions.get('window').width;
import {TENANT, USERNAME, PASSWORD} from '../Param';
import HomeDetail from './HomeDetail';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textContent: null,
      editContent: null,
    };
  }
  render(): React.ReactNode {
    return (
      <View style={styles.container}>
        {this.renderNavBar()}
        <ScrollView>
          <HomeTopView />
          <Text maxLength={4} style={{color: 'red', fontSize: 18}}>
            {this.state.textContent}
          </Text>
        </ScrollView>
      </View>
    );
  }
  renderNavBar() {
    return (
      <View style={styles.navOutViewStyle}>
        <TouchableOpacity
          onPress={() => {
            this.pushToDetail();
          }}>
          <Text style={styles.leftTitleStyle}>{this.state.editContent}</Text>
        </TouchableOpacity>
        <TextInput
          placeholder="输入商家"
          underlineColorAndroid={Platform.OS === 'ios' ? 'red' : 'transparent'}
          style={styles.topInputStyle}
          onChangeText={(text) => {
            this.setState({editContent: text});
          }}
        />
        <View style={styles.rightNavViewStyle}>
          <TouchableOpacity
            onPress={() => {
              ToastAndroid.show('通知', ToastAndroid.SHORT);
            }}>
            <Image
              source={require('../../image/notify.png')}
              style={styles.navRightImgStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.fetchData();
              ToastAndroid.show('扫码', ToastAndroid.SHORT);
            }}>
            <Image
              source={require('../../image/scan.png')}
              style={styles.navRightImgStyle}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  pushToDetail() {
    this.props.navigator.push({
      component: HomeDetail, // 要跳转过去的组件
      title: '首页详细页',
    });
  }
  fetchData() {
    fetch('https://ibottle-show.haoduoke.cn/k/integration/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tenant: TENANT,
        username: USERNAME,
        password: PASSWORD,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        if (json.code === 10000) {
          this.setState({
            textContent: json.data.token,
          });
        } else {
          this.setState({
            textContent: json.message,
          });
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .done();
  }
}

const styles = StyleSheet.create({
  navOutViewStyle: {
    height: Platform.OS === 'ios' ? 74 : 64,
    backgroundColor: '#468AFF',
    //主轴方向
    flexDirection: 'row',
    //两侧对齐方式 垂直居中
    alignItems: 'center',
    //主轴方向居中
    justifyContent: 'center',
  },
  leftTitleStyle: {
    color: 'white',
    paddingEnd: 10,
  },
  topInputStyle: {
    width: screenW * 0.8,
    height: Platform.OS === 'ios' ? 40 : 35,
    backgroundColor: 'white',
    marginTop: Platform.OS === 'ios' ? 18 : 0,
    //圆角
    borderRadius: 18,
    paddingLeft: 10,
  },
  rightNavViewStyle: {
    flexDirection: 'row',
    height: 64,
    alignItems: 'center',
  },
  navRightImgStyle: {
    width: Platform.OS === 'ios' ? 28 : 24,
    height: Platform.OS === 'ios' ? 28 : 24,
    marginLeft: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#e8e8e8',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
