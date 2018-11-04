/**
 * Created by Flowers博爵 on 2018/11/4.
 */
import {connect} from 'react-redux';
import Laoban from '../components/laoban';
export default connect(
  state=>({state}),
  {}
)(Laoban)