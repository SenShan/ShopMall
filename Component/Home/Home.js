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
  RefreshControl,
} from 'react-native';
import HomeTopView from './HomeTopView';
import DialogModule from '../../NativeJava';
const screenW = Dimensions.get('window').width;
import {
  baseUrl,
  TENANT,
  USERNAME,
  PASSWORD,
  POST,
  Accept,
  Content_Type,
  toolBarHeight,
  themeColor,
} from '../Param';
import HomeDetail from './HomeDetail';
import Swipe from './Swipe';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textContent: null,
      editContent: null,
      location: '上海',
    };
  }
  render(): React.ReactNode {
    return (
      <View style={styles.homeContainer}>
        {this.renderTopBar()}
        <ScrollView>
          <Swipe />
          <HomeTopView />
          <Text maxLength={4} style={{color: 'red', fontSize: 18}}>
            {this.state.textContent}
          </Text>
        </ScrollView>
      </View>
    );
  }
  renderTopBar() {
    return (
      <View style={styles.homeTopViewStyle}>
        <TouchableOpacity
          onPress={() => {
            this.pushToDetail();
          }}>
          <Text style={styles.textTopStyle}>{this.state.location}</Text>
        </TouchableOpacity>
        <TextInput
          placeholder="搜索..."
          underlineColorAndroid={Platform.OS === 'ios' ? 'red' : 'transparent'}
          style={styles.topInputStyle}
          onChangeText={(text) => {
            this.setState({editContent: text});
          }}
        />
        <View style={styles.homeTopRightStyle}>
          <TouchableOpacity
            onPress={() => {
              DialogModule.showWindow('向Android传递的是:888', (result) => {
                this.setState({textContent: result});
              });
            }}>
            <Image
              source={require('../../image/notify.png')}
              style={styles.topImageStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.fetchData();
              ToastAndroid.show('扫码', ToastAndroid.SHORT);
            }}>
            <Image
              source={require('../../image/scan.png')}
              style={styles.topImageStyle}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  pushToDetail() {
    this.props.navigator.push({
      component: HomeDetail, // 要跳转过去的组件
      title: '商品详细页',
      passProps: {
        //将输入框的内容 传递给下一个页面
        pageValue: '页面传值',
      },
    });
  }
  fetchData() {
    fetch(baseUrl, {
      method: POST,
      headers: {
        Accept: Accept,
        'Content-Type': Content_Type,
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
        this.setState({
          textContent: 'error=' + error,
        });
      })
      .done();
  }
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#e8e8e8',
  },
  homeTopViewStyle: {
    height: Platform.OS === 'ios' ? 74 : toolBarHeight,
    backgroundColor: themeColor,
    //主轴方向
    flexDirection: 'row',
    //两侧对齐方式 垂直居中
    alignItems: 'center',
    //主轴方向居中
    justifyContent: 'center',
  },
  textTopStyle: {
    color: 'white',
    paddingEnd: 10,
  },
  topInputStyle: {
    width: screenW * 0.7,
    height: Platform.OS === 'ios' ? 40 : 35,
    backgroundColor: 'white',
    marginTop: Platform.OS === 'ios' ? 18 : 0,
    //圆角
    borderRadius: 18,
    paddingLeft: 10,
  },
  homeTopRightStyle: {
    flexDirection: 'row',
    height: 64,
    alignItems: 'center',
  },
  topImageStyle: {
    width: Platform.OS === 'ios' ? 28 : 24,
    height: Platform.OS === 'ios' ? 28 : 24,
    marginLeft: 10,
  },
});
