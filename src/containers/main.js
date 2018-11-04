/**
 * Created by Flowers博爵 on 2018/11/4.
 */
import {connect} from 'react-redux';
import Main from '../components/main';
import {getUserInfo} from '../redux/action';
export default connect(
  state=>({user:state.user}),
  {getUserInfo}
)(Main)