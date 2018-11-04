/**
 * Created by Flowers博爵 on 2018/11/4.
 */
import {connect} from 'react-redux';
import Dashen from '../components/dashen';
export default connect(
  state=>({state}),
  {}
)(Dashen)