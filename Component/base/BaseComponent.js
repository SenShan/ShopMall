import React, {Component} from 'react';
import DialogModule from '../../NativeJava';

export default class BaseComponent extends Component {
  constructor(props) {
    super(props);
    DialogModule.log('component', 'constructor');
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

  UNSAFE_componentWillReceiveProps(nextProps: Readonly<P>, nextContext: any) {}

  UNSAFE_componentWillMount() {}

  UNSAFE_componentWillUpdate(
    nextProps: Readonly<P>,
    nextState: Readonly<S>,
    nextContext: any,
  ) {}
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
