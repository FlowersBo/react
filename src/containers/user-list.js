/**
 * Created by Flowers博爵 on 2018/11/7.
 */
import {connect} from 'react-redux';
import UserList from '../components/user-list';
import {getChatMsgs} from '../redux/action';
export default connect(
  state=>({}),
{getChatMsgs}
)(UserList)