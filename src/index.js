/*Created by Flowers博爵 on 2018/10/31.*/
import React from 'react';
import ReactDOM from 'react-dom';
import {Route,HashRouter,Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import './assets/less/index.less';

import Login from './containers/login';
import Register from './containers/register';
import Main from './components/main';
ReactDOM.render((
<Provider store={store}>
  <HashRouter>
    <Switch>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route component={Main}/>
    </Switch>
  </HashRouter>
</Provider>
  
  ),document.getElementById('root'));

