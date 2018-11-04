/**
 * Created by Flowers博爵 on 2018/11/4.
 */
import {connect} from 'react-redux';
import Message from '../components/message';
export default connect(
  state=>({state}),
  {}
)(Message)