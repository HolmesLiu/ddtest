/*
萌虎摇摇乐
https://yearfestival.jd.com
优先内部互助,剩余次数助力作者和助力池
cron 0 0,12,18 * * * jd_tiger.js
转义自HW大佬
*/

const $ = new Env('萌虎摇摇乐');
let UA = process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)
const got = require('got')
const notify = require('./sendNotify')
const jdCookieNode = require('./jdCookie.js')
let shareCodesSelf = []
let cookiesArr = [],
    cookie
Object.keys(jdCookieNode).forEach((item) => {
    cookiesArr.push(jdCookieNode[item])
})

!(async () => {
    if (!cookiesArr[0]) {
        console.error('No CK found')
        return
    }
    for (let i = 0; i < cookiesArr.length; i++) {
        cookie = cookiesArr[i]
        const userName = decodeURIComponent(cookie.match(/pt_pin=(.+?);/) && cookie.match(/pt_pin=(.+?);/)[1])
        console.log(`\n开始【京东账号${i + 1}】${userName}\n`)
        let res = await api({ "apiMapping": "/api/task/support/getShareId" })
        console.log('助力码：', res.data)
        await wait(1000)
        shareCodesSelf.push(res.data)
        res = await api({ "apiMapping": "/api/task/support/list" })
        console.log('收到助力：', res.data.supportedNum)
        await wait(1000)

        res = await api({ "apiMapping": "/api/task/brand/tabs" })
        await wait(1000)
        for (let tab of res.data) {
            let taskGroupId = tab.taskGroupId
            res = await api({ "taskGroupId": taskGroupId, "apiMapping": "/api/task/brand/getTaskList" })
            for (let t of res.data) {
                for (let i = t.finishNum; i < t.totalNum; i++) {
                    res = await getTaskDetail(taskGroupId)
                    if (res) {
                        console.log(taskGroupId, res.taskId, res.taskItemId, res.taskType, res.taskItemName)
                        let sleep = res.browseTime ? res.browseTime * 1000 : 1000
                        res = await api({ "taskGroupId": taskGroupId, "taskId": res.taskId, "taskItemId": res.taskItemId, "apiMapping": "/api/task/brand/doTask" })
                        await wait(sleep)
                        if (res.data.taskType === 'BROWSE_TASK') {
                            res = await api({ "taskGroupId": taskGroupId, "taskId": res.data.taskId, "taskItemId": res.data.taskItemId, "timestamp": res.data.timeStamp, "apiMapping": "/api/task/brand/getReward" })
                            console.log('任务完成，积分：', res.data.integral, '，京豆：', res.data.jbean)
                            await wait(1000)
                        } else if (res.data.taskType === 'FOLLOW_SHOP_TASK') {
                            // console.log('任务完成，获得：', res.data.rewardInfoVo?.integral, res.data.rewardInfoVo?.jbean)
                            console.log(res.data.rewardInfoVo)
                        }
                    }
                }
            }
        }
    }

    for (let i = 0; i < cookiesArr.length; i++) {
        cookie = cookiesArr[i]
        const userName = decodeURIComponent(cookie.match(/pt_pin=(.+?);/) && cookie.match(/pt_pin=(.+?);/)[1])
        const pool = await getShareCodePool('tiger', 5)
        // if (shareCodesHW.length === 0) {
        //     shareCodesHW = await getshareCodeHW('tiger')
        // }
        // index === 0 ?
        //     shareCodes = Array.from(new Set([...shareCodesHW, ...shareCodesSelf, ...temp])) :
        //     shareCodes = Array.from(new Set([...shareCodesSelf, ...shareCodesHW, ...temp]))
        shareCodes = Array.from(new Set([...shareCodesSelf, ...pool]))
        // console.log(shareCodes)
        for (let code of shareCodes) {
            console.log(`账号${i + 1} 去助力 ${code} ${shareCodesSelf.includes(code) ? '(内部)' : ''}`)
            const res = await api({ "shareId": code, "apiMapping": "/api/task/support/doSupport" })
            if (res.data.status === 1) {
                !res.data.supporterPrize ?
                    console.log('不助力自己') :
                    console.log('助力成功，京豆：', res.data.supporterPrize.beans, '，积分：', res.data.supporterPrize.score)
            } else if (res.data.status === 7) {
                console.log('上限')
                break
            } else if (res.data.status === 3) {
                console.log('已助力过')
            } else {
                console.log('其他情况', res.data.status)
            }
            await wait(1000)


        }
    }
    for (let i = 0; i < cookiesArr.length; i++) {
        cookie = cookiesArr[i]
        const userName = decodeURIComponent(cookie.match(/pt_pin=(.+?);/) && cookie.match(/pt_pin=(.+?);/)[1])
        console.log(`\n开始【京东账号${i + 1}】${userName}\n`)

        let res = await api({ "apiMapping": "/api/index/indexInfo" })
        let lotteryNum = res.data.lotteryNum
        for (let i = 0; i < lotteryNum; i++) {
            res = await api({ "apiMapping": "/api/lottery/lottery" })
            console.log('抽奖：', res.data.prizeName)
            await wait(4000)
        }
    }
})()
    .catch((e) => {
        console.error(`${name} error: ${e.stack}`)
    })
    .finally(() => {
        console.log(`${name} finished}`)
    })

async function getAuthorShareCode(url) {
    try {
        const options = {
            url,
            "timeout": 10000,
            headers: {
                "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88"
            }
        };
        const { body } = await got(options)
        // console.debug('getAuthorShareCode:',body)
        return JSON.parse(body) || []
    } catch (e) {
        // console.warn('getAuthorShareCode:', e)
        return false
    }

}

function wait(time) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, time)
    })
}

async function api(r_body) {
    const options = {
        url: 'https://api.m.jd.com/api',
        headers: {
            'Host': 'api.m.jd.com',
            'Origin': 'https://yearfestival.jd.com',
            'Accept': 'application/json, text/plain, */*',
            'User-Agent': UA,
            'Referer': 'https://yearfestival.jd.com/',
            'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
            'Cookie': cookie
        },
        form: {
            appid: 'china-joy',
            functionId: 'collect_bliss_cards_prod',
            body: JSON.stringify(r_body),
            t: Date.now(),
            loginType: 2
        }
        // body: `appid=china-joy&functionId=collect_bliss_cards_prod&body=${JSON.stringify(r_body)}&t=${Date.now()}&loginType=2`
    }
    const { body } = await got.post(options)
    // console.debug(options)
    // console.log(body)
    return JSON.parse(body)
}

async function getShareCodePool(key, num) {
    let shareCode = []
    for (let i = 0; i < 2; i++) {
        try {
            const { body } = await got(``)
            //console.debug('getShareCodePool:', body)
            shareCode = JSON.parse(body).data || []
            console.log(`随机获取${num}个${key}成功：${JSON.stringify(shareCode)}`)
            if (shareCode.length !== 0) {
                break
            }
        } catch (e) {
            // console.warn(e.stack)
            console.log("getShareCodePool Error, Retry...")
            await wait(2000 + Math.floor((Math.random() * 4000)))
        }
    }
    return shareCode
}


async function getTaskDetail(taskGroupId) {
    let res = await api({ "taskGroupId": taskGroupId, "apiMapping": "/api/task/brand/getTaskList" })
    await wait(1000)
    for (let t of res.data) {
        if (t.finishNum !== t.totalNum) {
            return t
        }
    }
    return ''
}
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
