/**
 * Created by Flowers博爵 on 2018/11/4.
 */
import {connect} from 'react-redux';
import Personal from '../components/personal';
import {resetUser} from '../redux/action';
export default connect(
  state=>({user:state.user}),
  {resetUser}
)(Personal)