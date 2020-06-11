import React, {Component} from 'react';
import {BackHandler} from 'react-native';
import DialogModule from '../../NativeJava';
export default class BaseComponent extends Component {
  constructor(props) {
    super(props);
    DialogModule.log('component', 'constructor');
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigator.pop();
      return true;
    });
  }
  componentWillMount() {
    DialogModule.log('component', 'componentWillMount');
  }
  render() {
    DialogModule.log('component', 'render');
    return undefined;
  }

  componentDidMount() {
    DialogModule.log('component', 'componentDidMount');
  }
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    DialogModule.log('component', 'componentDidCatch');
  }
  componentDidUpdate(
    prevProps: Readonly<P>,
    prevState: Readonly<S>,
    snapshot: SS,
  ) {
    DialogModule.log('component', 'componentDidUpdate');
  }
  componentWillReceiveProps(nextProps: Readonly<P>, nextContext: any) {
    DialogModule.log('component', 'componentWillReceiveProps');
  }
  componentWillUnmount() {
    DialogModule.log('component', 'componentWillUnmount');
  }
  componentWillUpdate(
    nextProps: Readonly<P>,
    nextState: Readonly<S>,
    nextContext: any,
  ) {
    DialogModule.log('component', 'componentWillUpdate');
  }
  shouldComponentUpdate(
    nextProps: Readonly<P>,
    nextState: Readonly<S>,
    nextContext: any,
  ): boolean {
    DialogModule.log('component', 'shouldComponentUpdate');
  }

  onCreate() {}
}
