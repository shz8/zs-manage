'use strict';
export default {
    app: {},
    init: function (_app) {
        this.app = _app;
    },
    login: function (data, cb) {
        var self = this;
        this.apipost('user/Login', data, function (d) {
            if (d.errorcode != 0)//登录出错
            {
                self.app.$message.error('登录出错：' + d.errorinfo);
            }
            else //登录成功，获取用户信息
            {
                self.app.$axios.defaults.headers.common['accesstoken'] = d.access_token;
                self.apiget('user/TableInfo?name=usertoken', function (u) {
                    if (u.errorcode != 0)//获取用户信息出错
                    {
                        self.app.$message.error('获取用户信息出错：' + u.errorinfo);
                    }
                    else //成功获取用户信息
                    {
                        self.app.$uti.localStore(self.app.$config.userkey, u);
                        self.app.$uti.localStore(self.app.$config.tokenkey, d.access_token);
                        self.app.$router.push('/');
                    }
                })
            }
        });
    },
    logout: function () {
        localStorage.clear();
        sessionStorage.clear();
        this.app.$router.push('/login');
    },
    userinfo: function (data, cb) {
        return this.app.$uti.storeObj(this.app.$config.userkey)||{};
    },
    apiget: function (api, success, error) {
        this.app.$uti.ajax(this.app.$config.userapi + api, 'get', {}, success, error);
    },
    apipost: function (api, data, success, error) {
        this.app.$uti.ajax(this.app.$config.userapi + api, 'post', data, success, error);
    }
};