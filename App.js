/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Navigator} from 'react-native-deprecated-custom-components';
import Launch from './Component/Launch';
const App: () => React$Node = () => {
  return (
    <Navigator
      initialRoute={{name: '启动页', component: Launch}}
      renderScene={(route, navigator) => {
        let Component = route.component;
        //passParam 传值任意定义
        return <Component {...route.passParam} navigator={navigator} />;
      }}
      configureScene={(route) => {
        if (route.sceneConfig) {
          return route.sceneConfig;
        }
        return Navigator.SceneConfigs.PushFromRight;
      }}
    />
  );
};
export default App;
