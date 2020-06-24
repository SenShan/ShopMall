import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity, Button} from 'react-native';
import DialogModule from '../NativeJava';
import Main from './Main/Main';
import Find from './Find/Find';
import HomeDetail from './Home/HomeDetail';
const tag = '导航';
export default class NavDemo extends Component {
  constructor(props) {
    super(props);
    DialogModule.log(tag, 'constructor');
  }

  componentWillMount() {
    DialogModule.log(tag, 'componentWillMount');
  }

  componentDidMount() {
    DialogModule.log(tag, 'componentDidMount');
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    DialogModule.log(tag, 'componentDidCatch');
  }

  componentDidUpdate(
    prevProps: Readonly<P>,
    prevState: Readonly<S>,
    snapshot: SS,
  ) {
    DialogModule.log(tag, 'componentDidUpdate');
  }

  UNSAFE_componentWillReceiveProps(nextProps: Readonly<P>, nextContext: any) {}

  UNSAFE_componentWillMount() {}

  UNSAFE_componentWillUpdate(
    nextProps: Readonly<P>,
    nextState: Readonly<S>,
    nextContext: any,
  ) {}
  componentWillReceiveProps(nextProps: Readonly<P>, nextContext: any) {
    DialogModule.log(tag, 'componentWillReceiveProps');
  }

  componentWillUnmount() {
    DialogModule.log(tag, 'componentWillUnmount');
  }

  componentWillUpdate(
    nextProps: Readonly<P>,
    nextState: Readonly<S>,
    nextContext: any,
  ) {
    DialogModule.log(tag, 'componentWillUpdate');
  }

  shouldComponentUpdate(
    nextProps: Readonly<P>,
    nextState: Readonly<S>,
    nextContext: any,
  ): boolean {
    DialogModule.log(tag, 'shouldComponentUpdate');
  }

  render(): React.ReactNode {
    return (
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          //主轴方向居中
          justifyContent: 'flex-start',
        }}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigator.jumpBack();
          }}>
          <Text style={{fontSize: 18, marginTop: 10}}>
            jumpBack()退回到上一个界面而不卸载当前界面
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigator.jumpForward();
          }}>
          <Text style={{fontSize: 18, marginTop: 10}}>
            jumpForward()界面路径向前跳一个界面而不卸载当前界面,当前是最后一个页面会崩溃
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.props.navigator.jumpTo({
              component: Find,
            });
          }}>
          <Text style={{fontSize: 18, marginTop: 10}}>
            jumpTo()跳转到某个界面而不卸载任何界面
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.props.navigator.push({
              component: Find,
            });
          }}>
          <Text style={{fontSize: 18, marginTop: 10}}>
            push()导航组件在路径列表最前端添加一个新的界面，并马上跳转到这个界面
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.props.navigator.pop();
          }}>
          <Text style={{fontSize: 18, marginTop: 10}}>
            pop()导航器退回一个界面并卸载原界面
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigator.replace({
              component: HomeDetail,
            });
          }}>
          <Text style={{fontSize: 18, marginTop: 10}}>
            replace()导航器将当前界面用一个新的界面替代
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
