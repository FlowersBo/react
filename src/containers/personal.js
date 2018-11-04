/**
 * Created by Flowers博爵 on 2018/11/4.
 */
import {connect} from 'react-redux';
import Personal from '../components/personal';
export default connect(
  state=>({state}),
  {}
)(Personal)