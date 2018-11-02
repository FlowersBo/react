/**
 * Created by Flowers博爵 on 2018/10/31.
 */
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
//开发依赖，生产时手动注释掉
import { composeWithDevTools } from 'redux-devtools-extension';
export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)));