/**
 * Created by Flowers博爵 on 2018/11/2.
 */
import {connect} from  'react-redux';

import LaobanInfo from '../components/laoban-info';

import {updateUserInfo} from '../redux/action'

export default connect(
   state=>({user:state.user}),
  {updateUserInfo}
)(LaobanInfo)