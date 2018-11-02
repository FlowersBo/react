/**
 * Created by Flowers博爵 on 2018/11/1.
 */
import ajax from './ajax';
export const reqLogin=data=>ajax('/login',data,'POST');
export const reqRegister=data=>ajax('/register',data,'POST');