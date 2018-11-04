/**
 * Created by Flowers博爵 on 2018/11/3.
 */
/*注册容器组件*/
import {connect} from 'react-redux';
//引入注册UI组件
import Login from '../components/login';
//引入actions
import {login} from '../redux/action';

export default connect(
  state=>({user:state.user}),
  {login}
)(Login);