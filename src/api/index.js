/**
 * Created by Flowers博爵 on 2018/11/1.
 */
import ajax from './ajax';
//请求登陆数据函数
export const reqLogin=data=>ajax('/login',data,'POST');
//请求注册数据函数
export const reqRegister=data=>ajax('/register',data,'POST');
//请求跟新用户数据函数
export const reqUpdateUserInfo=data=>ajax('/update',data,'POST');
