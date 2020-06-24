import * as CommonApi from '../Http/CommonApi'; // 引入commonApi

let params = {
  password: this.state.password,
  userName: this.state.user,
};
CommonApi.loginIn(params)
  .then((data) => {
    if (data.success === '') {
    } else {
    }
  })
  .catch((res) => {});
