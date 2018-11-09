import React, {Component} from 'react';
import UserList from '../../containers/user-list';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
class Dashen extends Component {
  static propTypes={
    userList:PropTypes.array.isRequired,
    getUserList:PropTypes.func.isRequired
  }
  componentDidMount(){
    this.props.getUserList('laoban');
  }
  render () {
    const {userList}=this.props;
    return (
      <div>
        <QueueAnim  type='scale'>
          {
            userList.map((item, index) => <UserList key={index} item={item} />)
          }
        </QueueAnim>
      </div>
     
    )
  }
}

export default Dashen;