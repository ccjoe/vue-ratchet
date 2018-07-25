/******************************** URL parse ***********************************/
/**
 * Url处理
 * @author Joe Liu
 * @email icareu.joe@gmail.com
 * @todo 解决在gom里完整url解析问题，主要是因为search部分是path而不是参数
 */
var re = {
    url: /((http|https):\/\/)?((\w+\.)+\w+)?(:\d+)?((\/\w+)+)?\/?\??((\w+=\w+&?)+)?#?(.+)?/g,
    kv: /(\w+)=([^&#]+)/g,
    search: /([^\?]+)?\??((\w+=\w+&?)+)?/,     //[^\?]+ 除?外所有
    path: /.+((\/\w+)+)?/,
    history: /[^\?]?\?((\w+)+(\/\w+)*)/        //获取html history url风格的search path
};
/**
 * 处理键值对字符串为对象,获取url里所有键值对返回
 * @method url.getHTML5Hash
 * @param {string} url  html5 history url 类似 tets.com?hash/path/to&abc
 * @return {string} 返回like=>  hash/path/to
 */
var getHTML5Hash = url => {
    const {history} = re;
    let execRes = history.exec(url);
    return execRes ? execRes[1] : '';
}

/**
 * 处理键值对字符串为对象,获取url里所有键值对返回
 * @method url.getParams
 * @param {string} kvp key-value-pairs-string
 * @return {object} 返回键值对对象
 * @example  hashsearch=test; => {hashsearch: test}
 */
var getParams = function (kvp) {
    if (!kvp) return {};
    var okvp = {}, kvpi; //object key val pairs;
    var kvpArr = encodeURI(kvp).match(re.kv);
    if (!kvpArr || !kvpArr.length) return {};
    kvpArr.forEach(function (i) {
        re.kv.lastIndex = 0;
        kvpi = re.kv.exec(i);
        okvp[kvpi[1]] = decodeURI(kvpi[2]);
    });
    return okvp;
};
/**
 * 处理hash里 search部分键值对对象
 * @method url.getHashSearch
 * @param {string} url  string
 * @param {boolean} isParse  为ture时返回的是对象
 * @return {object} 返回hash里的search部分键值对对象
 * @example  #hash/hashpath/123?hashsearch=test; =>hashsearch=test isParse为ture时返回的是对象{hashsearch: test}
 */
var getHashSearch = function (hash='', isParse=false) {
    if (!hash) return isParse ? {} : '';
    var hashSchStr = re.search.exec(hash)[2];
    return isParse ? getParams(hashSchStr) : hashSchStr;
};

/**
 * 处理hash里 path部分数组
 * @method url.getHashPath
 * @param {string} hash hash部分字符串
 * @param {boolean} isParse  为ture时返回的是对象
 * @return {array} 返回hash里的path部分数组
 * @example  #hash/hashpath/123/?hashsearch=test; =>hashpath/123 isParse为ture时返回的是对象[hashpath,123]
 */
var getHashPath = function (hash, isParse) {
    if (!hash) return isParse ? [] : '';
    var hashPathStr = re.path.exec(hash)[0];
    return isParse ? hashPathStr.split('/') : hashPathStr;
};

/**
 * 处理url 相关部件解析与 生成
 * @method url.getUrl
 * @param {string} url 传入url
 * @param {boolean} isParse parse为true时返回的各部件为序列化对象，否则为string,同上面的isParse
 * @return {object} 返回url各部件
 * @example  http://domain.com/pathto/urlpath/123?search=1&param=11/#hash/hashpath/123?hashsearch=test;
 * return value like {
            protocal: {string},   协议
            domain: {string},     域名
            path: {string},       路径
            search: {object},     参数
            hash: {string},       Hash，#后所有
            hashsearch: {object}  Hash里参数
            hashPath: {array}     Hash里数组
        };
 */
var getUrl  = function (url, isParse){
    re.url.lastIndex = 0;
    var uri = re.url.exec(url);
    var hashfull = uri[10], path = uri[6] || '', search = uri[8] || '';
    //console.log(uri, 'uri');
    return {
        protocal: uri[2],
        domain: uri[3],
        port: uri[5],
        path: isParse ? path.substring(1).split('/') : path,
        search: isParse ? getParams(search) : search,
        hash: hashfull,
        hashPath: getHashPath(hashfull, isParse) ,
        hashsearch: getHashSearch(hashfull, isParse)
    };
};
/**
 * 将object 处理为url 相关部件search
 * @method url.setParam
 * @param {object} obj 将object对象转化为url参数字符串
 * @param {string} equalStr key与value间的相等字符, 默认为 '='
 * @param {string} joinStr key-value key-value间的连接符 默认为 '&'
 * @return {object} search
 */
var setParams = function (obj, equalStr, joinStr) {
    var paramstr = '', equalStr = equalStr || '=';
    joinStr = joinStr || '&';

    for (var i in obj) {
        paramstr += i + equalStr + obj[i] + joinStr;
    }
    return paramstr.remove('right');
};
/**
 * 将object 为url设置新增serach
 * @method url.set
 * @param {string} url 被操作的url
 * @param {string} kvpOrk object or string key
 * @param {string} value  value
 * @return {object} 设置search的url
 */
var setUrl = function (url, kvpOrk, value) {
    var kvpair = (typeof kvpOrk === 'object') ? setParams(kvpOrk) : (kvpOrk + '=' + value);
    return url.replace(re.search, function (str, $0, $1) {
        return ($0 ? $0 : '') + '?' + ($1 ? $1 + '&' : '') + kvpair;
    });
};
/**
 * url
 * @namespace url
 */

export {
    getUrl as get,
    setUrl as set,
    getParams,
    setParams,
    getHashSearch,
    getHashPath,
    getHTML5Hash,
}
