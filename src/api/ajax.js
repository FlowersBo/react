/**
 * Created by Flowers博爵 on 2018/11/1.
 */
/*axios模块*/
import axios from 'axios';
export default function ajax(url,data,type= 'GET'){
  let querystring='';
  if(data){
    //将传入的对象所有可枚举的属性保存一个数组中返回
    Object.keys(data).forEach(key=>{
      //获取属性值
      const value=data[key];
      querystring+=key+'='+value+'&';
    })
    //去掉最后一个&
    querystring=querystring.substring(0,querystring.length-1);
  }
  if(type.toUpperCase()==='GET'){//发送的GET请求
    url+='?'+querystring;
  return axios.get(url)
  }else{
    //发送POST请求
    return axios.post(url,querystring,{
      herders:{
        'Content-Type':'application/x-www-form-urlencoded'
      }
    })
  }
}