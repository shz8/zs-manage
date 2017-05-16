'use strict';
export default {
    app: {},
    init: function (_app) {
        this.app = _app;
        if(this.app.$config.isWan)
           this.app.$config.dataapi = '/';
    },
    loadConfig: function (cb) {
        this.apipost('pro/API_GetConfig', {}, function (d) {
            let appConfig = {};
            if (d.Table && d.Table.length > 0) {
                appConfig.appTitle = d.Table[0].appTitle;
            }
            if (d.Table1 && d.Table1.length > 0) {
                d.Table1.map(function (m) {
                    m.Items = d[m.navTable];
                });
            }
            appConfig.menus = d.Table1;
            typeof cb == 'function' && cb(appConfig);
        });
    },
    findDept: function (cb) {
        this.apipost('pro/API_FindDept', {}, function (d) {
            typeof cb == 'function' && cb(d.Table||d);
        });
    },
    apiget: function (api, success, error) {
        this.app.$uti.ajax(this.app.$config.dataapi + api, 'get', {}, success, error);
    },
    apipost: function (api, data, success, error) {
        this.app.$uti.ajax(this.app.$config.dataapi + api, 'post', data, success, error);
    }
};