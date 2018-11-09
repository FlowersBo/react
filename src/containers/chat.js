/**
 * Created by Flowers博爵 on 2018/11/4.
 */
import {connect} from 'react-redux';
import Chat from '../components/chat';
import {sendMessage, getChatMsgs,updateUnReadCount} from '../redux/action';
export default connect(
  state=>({userList:state.userList ,chatList:state.chatList}),
  {sendMessage, getChatMsgs,updateUnReadCount}
)(Chat)