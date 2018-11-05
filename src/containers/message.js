/**
 * Created by Flowers博爵 on 2018/11/4.
 */
import {connect} from 'react-redux';
import Message from '../components/message';
import {getChatMsgs} from '../redux/action';
export default connect(
  state=>({chatList:state.chatList}),
  {getChatMsgs}
)(Message)