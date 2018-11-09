/**
 * Created by Flowers博爵 on 2018/11/7.
 */
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import NavFooter from '../components/nav-footer';
export default withRouter(connect(
  state=>({unReadCount:state.chatList.unReadCount}),
  {}
)(NavFooter))