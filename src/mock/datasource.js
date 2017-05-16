export const datasource = [
    {
        path: '/api/source',
        data: {
            'data|10': [{
                'id|+1': 1,
                'name': '@cname',
                'email': '@email',
                'ip': '@ip'
            }],
            "pagination": {
                "total": 15,
                "per_page": 15,
                "current_page": 1,
                "last_page": 1,
                "from": 1,
                "to": 15
            }
        }
    },
    {
        path: '/user/Login',
        data: { "access_token": "fb47de93-88b3-45be-8f9e-8260aa9db394", "starttime": "2017-05-16 17:40", "expiredtime": "2017-06-15 17:40", "refrash_token": "fd6b25cc-34cf-4f3c-9968-1dc0c5138bf4", "data": null, "errorcode": 0, "errorinfo": "" }
    },
    {
        path: '/user/TableInfo?name=usertoken',
        data: { "errorcode": 0, "errorinfo": "", "UserAccount": "30775", "UserCode": 30775, "UserName": "王", "PinyinFirst": "W", "PinyinLast": "XL", "PinyinInitials": "", "Password": null, "Sex": 0, "BirthDate": "1987-11-05T00:00:00", "Mobile": "", "Telephone": "", "Phone": "021-63011111", "Email": "i@shz8.com", "CreateDate": "2010-04-09T16:48:29.717", "Status": 0, "LastUpdateDate": "2017-05-03T08:36:10.1", "DeptId": 164, "ShortPassword": "", "DeptName": "计算中心" }
    },
    {
        path: '/pro/API_GetConfig',
        data: { "Table": [{ "appTitle": "价格管理系统" }], "Table1": [{ "navTitle": "价格管理", "navTable": "Table2", "queueNo": 1, "icon": "icon-th", "toicon": "el-icon-menu" }, { "navTitle": "限定设置", "navTable": "Table3", "queueNo": 2, "icon": "icon-cog", "toicon": "el-icon-edit" }, { "navTitle": "系统设置", "navTable": "Table4", "queueNo": 3, "icon": "icon-wrench", "toicon": "el-icon-setting" }], "Table2": [{ "itemTitle": "价格目录", "queueNo": 1, "itemUrl": "priceDict.aspx", "to": "priceDict" }, { "itemTitle": "待调整项目", "queueNo": 2, "itemUrl": "waitAdjustItem.aspx", "to": "waitAdjustItem" }, { "itemTitle": "价格变更日志", "queueNo": 3, "itemUrl": "priceChangeLog.aspx", "to": "priceChangeLog" }, { "itemTitle": "床位常规套餐", "queueNo": 4, "itemUrl": "bedPackage.aspx", "to": "bedPackage" }], "Table3": [{ "itemTitle": "科室项目权限", "queueNo": 1, "itemUrl": "deptItemRight.aspx?cat=0", "to": "deptItemRight" }, { "itemTitle": "特殊限定", "queueNo": 2, "itemUrl": "deptItemRight.aspx?cat=1", "to": "markdown" }], "Table4": [{ "itemTitle": "基本设置", "queueNo": 1, "itemUrl": "basicSetting.aspx", "to": "basesetting" }, { "itemTitle": "科目设置", "queueNo": 2, "itemUrl": "subjectSetting.aspx", "to": "subjectSetting" }, { "itemTitle": "科目设置权限", "queueNo": 3, "itemUrl": "subjectSetRight.aspx", "to": "subjectSetRight" }] }
    },
    {
        path: '/pro/API_FindDept',
        data: [{ "id": 3, "text": "大炉间_DLJ" }, { "id": 120, "text": "党委办公室_DWBGS" }, { "id": 123, "text": "宣传科_XCK" }, { "id": 130, "text": "工会_GH" }, { "id": 133, "text": "职工技协_ZGJX" }, { "id": 140, "text": "人事处_RSC" }, { "id": 143, "text": "核算办_HSB" }, { "id": 160, "text": "教育处_JYC" }, { "id": 163, "text": "研究生_YJSK" }, { "id": 164, "text": "计算中心_JSJWLZ    " }]
    }
]