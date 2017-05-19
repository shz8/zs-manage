'use strict';
export default {
    app: {},
    init: function (_app) {
        this.app = _app;
    },
    ajax: function (url, method, data, success, error) {
        this.app.$axios({ method: method, url: url, data: data })
            .then(function (res) {
                let d = res.data ? (res.data.Table1 ? res.data : (res.data.Table ? res.data.Table : res.data)) : {};
                if (d.length > 0 && d[0].jsonstr) 
                {
                    d = JSON.parse(d[0].jsonstr);
                }
                typeof success == 'function' && success(d);
            }).catch(function (err) {
                console.log(err);
                typeof error == 'function' && error(err);
            });
    },
    baseCfg: function (val) {
        let key = 'baseCfg';
        if (val != null) {
            this.localStore(key, val);
        }
        else
            return this.storeObj(key);
    },
    localStore: function (key, val) {
        if (key != null) {
            if (val != null) {
                if (typeof val == 'object')
                    val = JSON.stringify(val);
                localStorage.setItem(key, val);
            }
            else
                return localStorage.getItem(key);
        }
    }
    ,
    storeObj: function (key) {
        if (key != null) {
            let val = localStorage.getItem(key);
            let rlt = null;
            try {
                rlt = JSON.parse(val);
            }
            catch (ex) {
                console.log(ex);
                rlt = null;
            }
            return rlt;
        }
    },
    sessionStore: function (key, val) {
        if (key != null) {
            if (val != null) {
                if (typeof val == 'object')
                    val = JSON.stringify(val);
                sessionStorage.setItem(key, val);
            }
            else {
                val = sessionStorage[key] || sessionStorage.getItem(key);
                return val;
            }
        }
    }
    ,
    sessionStoreObj: function (key) {
        if (key != null) {
            let val = sessionStorage.getItem(key);
            let rlt = null;
            try {
                rlt = JSON.parse(val);
            }
            catch (ex) {
                console.log(ex);
                rlt = null;
            }
            return rlt;
        }
    },
    handleCommand: function (command) {
        if (command == 'loginout') {
            this.app.$api.user.logout();
        }
    },
    getFirst: function (d) {
        if (d) {
            let json = d.Table || d;
            json = json.length > 0 ? json[0] : json;
            for (var k in json)
                return json[k];
        }
        return '';
    }
}