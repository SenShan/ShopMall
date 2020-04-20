import {Platform, StyleSheet} from 'react-native';
import {toolBarHeight} from '../../Param';
export const DetailStyle = StyleSheet.create({
  container: {
    height: Platform.OS === 'ios' ? 74 : toolBarHeight,
    backgroundColor: '#468AFF',
    //主轴方向
    flexDirection: 'row',
    //两侧对齐方式 垂直居中
    alignItems: 'center',
    //主轴方向居中
    justifyContent: 'flex-start',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
