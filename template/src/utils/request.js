/**
 * Created by liwen on 2018/9/10
 */

/**
 * http请求工具类
 */
import axios from 'axios';

const request = axios.create({
	//公共配置可以写在这里
	baseURL: 'http://localhost:8080',
	timeout: 5000,
});

//response拦截器
request.interceptors.response.use(response => {
	let res = response.data;
	if (res.code != 0) {
		//code为非0时处理
		return Promise.reject(res);
	} else {
		return res;
	}
}, error => {
	//404等错误时处理
	console.log(error);
	return Promise.reject(error);
});

export default request;