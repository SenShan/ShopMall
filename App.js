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
        return <Component {...route.passProps} navigator={navigator} />;
      }}
    />
  );
};
export default App;
