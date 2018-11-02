/**
 * Created by Flowers博爵 on 2018/11/2.
 */
/*注册容器组件*/
import {connect} from 'react-redux';
//引入注册UI组件
import Register from '../components/register';
//引入actions
import {register} from '../redux/action';

export default connect(
  state=>({user:state.user}),
  {register}
)(Register);