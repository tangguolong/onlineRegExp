const leftMenuData = [
    {
        list: [
            {
                name: '校身份证号(1代,15位数字)',
                way: new RegExp(/^[1-9]\d{7}(?:0\d|10|11|12)(?:0[1-9]|[1-2][\d]|30|31)\d{3}$/),
            },
            {
                name: '身份证号(2代,18位数字),最后一位是校验位,可能为数字或字符X',
                way: new RegExp(/^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/)

            },
            {
                name: '身份证号, 支持1/2代(15位/18位数字)',
                way: new RegExp(/(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0[1-9]|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/)

            },
            {
                name: '香港身份证',
                way: new RegExp(/^[a-zA-Z]\d{6}\([\dA]\)$/)

            },
            {
                name: '澳门身份证',
                way: new RegExp(/^[1|5|7]\d{6}[(\d)]{3}$/)

            },
            {
                name: '台湾身份证',
                way: new RegExp(/^[a-zA-Z][0-9]{9}$/)

            }
        ],
        name: '身份证'
    },
    {
        list: [
            {
                name: '手机机身码(IMEI)',
                way: new RegExp(/^\d{15,17}$/),
            },
            {
                name: '手机号(mobile phone)中国(严谨), 根据工信部2019年最新公布的手机号段',
                way: new RegExp(/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/),
            },
            {
                name: '手机号(mobile phone)中国(宽松), 只要是13,14,15,16,17,18,19开头即可',
                way: new RegExp(/^(?:(?:\+|00)86)?1[3-9]\d{9}$/),
            },
            {
                name: '手机号(mobile phone)中国(最宽松), 只要是1开头即可, 如果你的手机号是用来接收短信, 优先建议选择这一条',
                way: new RegExp(/^\d{3}-\d{8}$|^\d{4}-\d{7,8}$/),
            },
            {
                name: ' 座机(tel phone)电话(国内)',
                way: new RegExp(/^(?:(?:\+|00)86)?1\d{10}$/),
            }

        ],
        name: '手机'
    },
    {
        list: [
            {
                name: '车牌号(新能源)',
                way: new RegExp(/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z](?:((\d{5}[A-HJK])|([A-HJK][A-HJ-NP-Z0-9][0-9]{4}))|[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳])$/),
            },
            {
                name: '车牌号(非新能源)',
                way: new RegExp(/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]$/),
            },
            {
                name: '手机号(mobile phone)中国(宽松), 只要是13,14,15,16,17,18,19开头即可',
                way: new RegExp(/^(?:(?:\+|00)86)?1[3-9]\d{9}$/),
            },
            {
                name: '车牌号(新能源+非新能源)',
                way: new RegExp(/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4,5}[A-HJ-NP-Z0-9挂学警港澳]$/),
            }
        ],
        name: '车牌'
    },
    {
        list: [
            {
                name: '必须带端口号的网址(或ip)',
                way: new RegExp(/^((ht|f)tps?:\/\/)?[\w-]+(\.[\w-]+)+:\d{1,5}\/?$/),
            },
            {
                name: '网址(url,支持端口和"?+参数"和"#+参数)',
                way: new RegExp(/^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/),
            },
        ],
        name: '网址'
    },
    {
        list: [
            {
                name: '统一社会信用代码',
                way: new RegExp(/^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/),
            },
            {
                name: '统一社会信用代码(宽松匹配)(15位/18位/20位数字/字母)',
                way: new RegExp(/^(([0-9A-Za-z]{15})|([0-9A-Za-z]{18})|([0-9A-Za-z]{20}))$/),
            },
        ],
        name: '社会信用代码'
    },
    {
        list: [
            {
                name: '迅雷链接',
                way: new RegExp(/^thunderx?:\/\/[a-zA-Z\d]+=$/),
            },
            {
                name: 'ed2k链接(宽松匹配)',
                way: new RegExp(/^ed2k:\/\/\|file\|.+\|\/$/),
            },
            {
                name: '磁力链接(宽松匹配)',
                way: new RegExp(/^magnet:\?xt=urn:btih:[0-9a-fA-F]{40,}.*$/),
            },
            {
                name: '视频(video)链接地址（视频格式可按需增删）',
                way: new RegExp(/^https?:\/\/(.+\/)+.+(\.(swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4))$/i),
            },
            {
                name: '图片(image)链接地址（图片格式可按需增删）',
                way: new RegExp(/^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i),
            }
        ],
        name: '链接'
    },
    {
        list: [
            {
                name: '子网掩码',
                way: new RegExp(/^(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(?:\.(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}$/),
            },
            {
                name: 'mac地址',
                way: new RegExp(/^((([a-f0-9]{2}:){5})|(([a-f0-9]{2}-){5}))[a-f0-9]{2}$/i),
            }
        ],
        name: '子网掩码/mac'
    },
    {
        list: [
            {
                name: 'linux"隐藏文件"路径',
                way: new RegExp(/^\/(?:[^/]+\/)*\.[^/]*/),
            },
            {
                name: 'linux文件夹路径',
                way: new RegExp(/^\/(?:[^/]+\/)*$/),
            },
            {
                name: 'linux文件路径',
                way: new RegExp(/^\/(?:[^/]+\/)*[^/]+$/),
            }
        ],
        name: 'linux'
    },
    {
        list: [
            {
                name: 'window"文件夹"路径',
                way: new RegExp(/^[a-zA-Z]:\\(?:\w+\\?)*$/),
            },
            {
                name: 'window下"文件"路径',
                way: new RegExp(/^[a-zA-Z]:\\(?:\w+\\)*\w+\.\w+$/),
            }

        ],
        name: 'window'
    },

    {
        list: [
            {
                name: '股票代码(A股)',
                way: new RegExp(/^(s[hz]|S[HZ])(000[\d]{3}|002[\d]{3}|300[\d]{3}|600[\d]{3}|60[\d]{4})$/),
            }
        ],
        name: '股票'
    },
    {
        list: [
            {
                name: 'html注释',
                way: new RegExp(/^<!--[\s\S]*?-->$/),
            }
        ],
        name: 'html'
    },
    {
        list: [
            {
                name: 'md5格式(32位)',
                way: new RegExp(/^([a-f\d]{32}|[A-F\d]{32})$/),
            }
        ],
        name: 'md5'
    },
    {
        list: [
            {
                name: '24小时制时间（HH:mm:ss）',
                way: new RegExp(/^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/),
            },
            {
                name: '12小时制时间（hh:mm:ss）',
                way: new RegExp(/^(?:1[0-2]|0?[1-9]):[0-5]\d:[0-5]\d$/),
            },
            {
                name: 'date(日期)',
                way: new RegExp(/^\d{4}(-)(1[0-2]|0?\d)\1([0-2]\d|\d|30|31)$/),
            }
        ],

        name: '时间'
    },
    {
        list: [
            {
                name: 'base64格式',
                way: new RegExp(/^\s*data:(?:[a-z]+\/[a-z0-9-+.]+(?:;[a-z-]+=[a-z0-9-]+)?)?(?:;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*?)\s*$/i
                ),
            }
        ],
        name: 'base64'
    },
    {
        list: [
            {
                name: '数字/货币金额（支持负数、千分位分隔符）',
                way: new RegExp(/^-?\d+(,\d{3})*(\.\d{1,2})?$/),
            },
            {
                name: '数字/货币金额 (只支持正数、不支持校验千分位分隔符)',
                way: new RegExp(/(?:^[1-9]([0-9]+)?(?:\.[0-9]{1,2})?$)|(?:^(?:0)$)|(?:^[0-9]\.[0-9](?:[0-9])?$)/),
            }
        ],
        name: '货币'
    },
    {
        list: [
            {
                name: '银行卡号（10到30位, 覆盖对公/私账户）',
                way: new RegExp(/^[1-9]\d{9,29}$/),
            }
        ],
        name: '银行卡'
    },
    {
        list: [
            {
                name: '中文姓名',
                way: new RegExp(/^(?:[\u4e00-\u9fa5·]{2,16})$/),
            },
            {
                name: '英文姓名',
                way: new RegExp(/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/),
            }
        ],
        name: '姓名'
    },
    {
        list: [
            {
                name: 'email(邮箱)',
                way: new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
            },
            {
                name: '中国邮政编码',
                way: new RegExp(/^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/ ),
            }
        ],
        name: '邮箱/邮政编码'
    },
    {
        list: [
            {
                name: '护照',
                way: new RegExp(/(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/),
            }
        ],
        name: '护照'
    },
    {
        list: [
            {
                name: '中文/汉字',
                way: new RegExp(/^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/),
            },
            {
                name: '小数',
                way: new RegExp(/^\d+\.\d+$/),
            },

            {
                name: '数字',
                way: new RegExp(/^\d{1,}$/),
            },
            {
                name: '英文字母',
                way: new RegExp(/^[a-zA-Z]+$/),
            },
            {
                name: '小写英文字母组成',
                way: new RegExp(/^[a-z]+$/),
            },
            {
                name: '大写英文字母',
                way: new RegExp(/^[A-Z]+$/),
            },
            {
                name: '中文和数字',
                way: new RegExp(/^((?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])|(\d))+$/),
            },
            {
                name: '不能包含字母',
                way: new RegExp(/^[^A-Za-z]*$/),
            },
            {
                name: '不能包含字母',
                way: new RegExp(/^[^A-Za-z]*$/),
            },
        ],
        name: '汉字/数字/英文/中文'
    },
    {
        list: [
            {
                name: '用户名校验，4到16位（字母，数字，下划线，减号）',
                way: new RegExp(/^[a-zA-Z0-9_-]{4,16}$/),
            },
            {
                name: '帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线组合',
                way: new RegExp(/^[a-zA-Z]\w{4,15}$/),
            }
        ],
        name: '账号校验'
    },
    {
        list: [
            {
                name: 'qq号格式正确',
                way: new RegExp(/^[1-9][0-9]{4,10}$/),
            },
            {
                name: '密码强度校验，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符',
                way: new RegExp(/^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/),
            }

        ],
        name: 'QQ'
    },
    {
        list: [
            {
                name: '微信号(wx)，6至20位，以字母开头，字母，数字，减号，下划线',
                way: new RegExp(/^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/),
            }
        ],
        name: '微信'
    },
    {
        list: [
            {
                name: 'ip-v4',
                way: new RegExp(/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/),
            },
            {
                name: 'ip-v6',
                way: new RegExp(/^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i),
            }
        ],
        name: 'ip'
    },
    {
        list: [
            {
                name: 'java包名',
                way: new RegExp(/^([a-zA-Z_][a-zA-Z0-9_]*)+([.][a-zA-Z_][a-zA-Z0-9_]*)+$/    ),
            }
        ],
        name: 'java'
    },
    {
        list: [
            {
                name: '16进制颜色',
                way: new RegExp(/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/  ),
            }
        ],
        name: '进制'
    },
]
export {
    leftMenuData
}