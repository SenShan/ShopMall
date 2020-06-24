/**
 * created by Mr.Gao
 * 通用api统一调用
 */
import {fetchData} from './Fetch';

// 登录
export function loginIn(params) {
  return fetchData('/root/login/checkMemberLogin', params);
}
