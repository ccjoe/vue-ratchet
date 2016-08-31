/**
 * localstorage api封装
 * @author Joe Liu
 * @email icareu.joe@gmail.com
 */

var storage = window.localStorage;

var parseval = function(val){
    if (typeof val !== 'string') {return undefined ;}
    try { return JSON.parse(val) ;}
    catch(e) { return val || undefined ;}
};

var strval = function(val){
    return val === void 0 || typeof val === "function" ? val+'' : JSON.stringify(val);
};

var bindtime = function(val, expire){
    if(expire===void 0)
        return strval({"value":val});
    return strval({
        "value": val,
        "expire": +new Date()+expire
    });
};
/**
 * @namespace store
 */
let Store = {
    on (callback){
        window.addEventListener('storage', function(e) {
            callback(e);
        });
    },
    /**
     * 遍历 store
     * @method store.each
     * @param {function} callback 参数为key, val
     */
    each (callback){
        var that = this;
        for(var i=0; i<storage.length; i++){
            key = storage.key[i];
            val =  that.noexpire(key);
            if(val){
                callback(key, val);
            }
        }
    },
    /**
     * 判断key是否过期，没有返回key的值，过期返回false
     * @method store.noexpire
     * @param {string} key
     * @return noexpire
     */
    noexpire (key){
        if(key===void 0){
            return null;
        }
        var now = new Date().getTime(),
            data = parseval(storage.getItem(key));
        if(!data) return null;
        if(data.expire !== void 0 && now >= data.expire){
            this.del(key);
            return null;
        }
        return data.value;
    },
    /**
     * 通过key获取store的value值
     * @method store.get
     * @param {string} key 可以为string或空，为空时取所有的localstorage(不包含过期的)
     * @return vaule || object
     */
    get (key){
        if(key){
            return this.noexpire(key);
        }
        var ret = {};
        this.each(function(key, val){
            ret[key] = val;
        });
        return ret;
    },
    /**
     * 设置store键值对及过期时间
     * @method Cora.store.set
     * @param {string} key
     * @param {object} val OR(string)
     * @param {expire} expire 过期时间，此刻起的millsecond数 1000*60=1min后过期
     */
    set (key, val, expire){
        if(typeof key === 'string'){
            storage.setItem(key, bindtime(val, expire));
            return this;
        }
        var data = key;
        for (var k in data) {
            val = data[k];
            this.set(k, val, expire);
        }
    },
    /**
     * 删除store某个key及值
     * @method store.del
     * @param {string} key string
     * @return store
     */
    del (key){
        storage.removeItem(key);
        return this;
    },
    /**
     * 清除所有store存储
     * @method store.del
     * @param {string} key string
     * @return store
     */
    cls:function(){
        storage.clear();
        return this;
    },
    /**
     * 判断某key是否存在
     * @method store.has
     * @param {string} key string
     * @return boolean
     */
    has (key){
        return storage.hasOwnProperty(key);
    },
    /**
     * 获取store已存储的大小
     * @method store.size
     * @param {string} unit 单位默认返回bytes,可以为KB, MB;
     * @return int
     */
    size (unit){
        var bytes = JSON.stringify(localStorage).length
        if(!unit)
            return bytes;
        if(unit==='KB')
            return bytes/1024;
        if(unit==='MB')
            return bytes/1024/1024;
        return bytes;
    }
};

export default Store;
