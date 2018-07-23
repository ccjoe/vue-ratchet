/**
 * 获取cookie中的值
 */
var getCookie = function(key){
	var cookies = document.cookie;
	var value = "";
	if(cookies){
	  var cookieArr = cookies.split("; ");
	  for(var i= 0,cookie,index;i<cookieArr.length;i++){
	    cookie = cookieArr[i];
	    index = cookie.indexOf("=");
	    if(cookie.substr(0,index) == key){
	      value = cookie.substr(index+1);
	    }
	  }
	}
	return value;
};

var getGuid = function () {
	var guid = getCookie("GUID");
	var ls = window.localStorage;
	if(!guid){
	  guid = ls.getItem('GUID') || '';
	}else{
	  try{
	    ls.setItem('GUID', guid);
	  } catch (e){}
	}
	return guid;
};

export default {
	getCookie,
	getGuid
}