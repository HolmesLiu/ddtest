# 每3天的23:50分清理一次日志
50 23 */3 * * rm -rf /scripts/logs/*.log

##############短期活动##############
#极速版红包
40 0,8 * * * node /scripts/jd_speed_redpocke.js >> /scripts/logs/jd_speed_redpocke.log 2>&1
#jd_health
13 1,7,22 * * * node /scripts/jd_health.js >> /scripts/logs/jd_health.log 2>&1
#jd_health_collect
5-45/20 * * * * node /scripts/jd_health_collect.js >> /scripts/logs/jd_health_collect.log 2>&1
#jd_market_lottery
4 10,19 * * * node /scripts/jd_market_lottery.js >> /scripts/logs/jd_market_lottery.log 2>&1
#jd_jintie
10 0 * * * node /scripts/jd_jintie.js >> /scripts/logs/jd_jintie.log 2>&1
#jd_daily_lottery
13 1,22,23 * * * node /scripts/jd_daily_lottery.js >> /scripts/logs/jd_daily_lottery.log 2>&1
#金榜创造营
40 9,21 * * * node /scripts/jd_gold_creator.js >> /scripts/logs/jd_gold_creator.log 2>&1
#5g超级盲盒
0 */4 * * * node /scripts/jd_mohe.js >> /scripts/logs/jd_mohe.log 2>&1
#京喜牧场
20 12-23/3 * * * node /scripts/jd_jxmc.js >> /scripts/logs/jd_jxmc.log 2>&1
#众筹许愿池
20 12 * * * node /scripts/jd_wishingPool.js >> /scripts/logs/jd_wishingPool.log 2>&1
#新签到
10 0,18 * * * node /scripts/jd_sign_graphics.js >> /scripts/logs/jd_sign_graphics.log 2>&1
# 摇钱树助力
0-59/30 * * * * node /scripts/jd_moneyTree_help.js >> /scripts/logs/jd_moneyTree_help.log 2>&1
# MMdou
21 9 * * * node /scripts/jd_MMdou.js >> /scripts/logs/jd_MMdou.log 2>&1
#京喜首页签到
20 1 * * * node /scripts/jx_sign.js >> /scripts/logs/jx_sign.log 2>&1
#特物
30 8,9 * * * node /scripts/jd_productZ4Brand.js >> /scripts/logs/jd_productZ4Brand.log 2>&1
#女装盲盒
#54 9 * * * node /scripts/jd_nzmh.js >> /scripts/logs/jd_nzmh.log 2>&1
# 京小鸽吾悦寄
35 4,7 * * * node /scripts/jd_jxg.js >> /scripts/logs/jd_jxg.log 2>&1
# 领卷中心签到
15 10 * * * node /scripts/jd_ccSign.js >> /scripts/logs/jd_ccSign.log 2>&1
# 零食街
15 0,12 * * * node /scripts/jd_lsj.js >> /scripts/logs/jd_lsj.log 2>&1
# 内容鉴赏官
15 2,5 * * * node /scripts/jd_connoisseur.js >> /scripts/logs/jd_connoisseur.log 2>&1
# 京喜财富岛合成月饼
5 * * * * node /scripts/jd_cfd_mooncake.js >> /scripts/logs/jd_cfd_mooncake.log 2>&1
# 母婴-跳跳乐
1 0,11,21 * * * node /scripts/jd_jump.js >> /scripts/logs/jd_jump.log 2>&1
# 送豆得豆
24 0,12 * * * node /scripts/jd_sendBeans.js >> /scripts/logs/jd_sendBeans.log 2>&1
#财富岛热气球接待
30 * * * * node /scripts/jd_cfd_loop.js >> /scripts/logs/jd_cfd_loop.log 2>&1
#jd_ddworld_exchange
0 0,9 * * * node /scripts/jd_ddworld_exchangebean.js >> /scripts/logs/jd_ddworld_exchangebean.log 2>&1
# 推一推
20 3,13 * * * node /scripts/jd_tyt.js >> /scripts/logs/jd_tyt.log 2>&1
# 省钱大赢家翻翻乐
27 0-23/6 * * * node /scripts/jd_jdtj_winner.js >> /scripts/logs/jd_jdtj_winner.log 2>&1
# 签到免单
1 0,12,18 * * * node /scripts/jd_speed_signfree.js >> /scripts/logs/jd_speed_signfree.log 2>&1
# 超级盒子
24 3,13 * * * node /scripts/jd_superbox.js >> /scripts/logs/jd_superbox.log 2>&1
# 发财挖宝
20 1,9,16 * * * node /scripts/jd_fcwb.js >> /scripts/logs/jd_fcwb.log 2>&1
#jd_opencard36
45 1,7,15 * * * node /scripts/jd_opencard36.js >> /scripts/logs/jd_opencard36.log 2>&1
#jd_opencard39
45 2,8,18 * * * node /scripts/jd_opencard39.js >> /scripts/logs/jd_opencard39.log 2>&1
#兑换7天过期喜豆
30 20 * * * node /scripts/jd_exchangejxbeans.js >> /scripts/logs/jd_exchangejxbeans.log 2>&1
#京东小魔方--收集兑换
31 8 * * * node /scripts/jd_mofang_ex.js >> /scripts/logs/jd_mofang_ex.log 2>&1
# 京东小魔方
10 2,8 * * * node /scripts/jd_mf.js >> /scripts/logs/jd_mf.log 2>&1
# 京喜签到-喜豆
10 2,9 * * * node /scripts/jx_sign_xd.js >> /scripts/logs/jx_sign_xd.log 2>&1
# 财富岛珍珠兑换
59 0-23/1 * * * node /scripts/jd_cfd_pearl_ex.js >> /scripts/logs/jd_cfd_pearl_ex.log 2>&1
# 省钱大赢家翻翻乐2
20 0,6-23 * * * node /scripts/jd_big_winner.js >> /scripts/logs/jd_big_winner.log 2>&1

##美丽研究院
20 7,12,19 * * * node /scripts/jd_beauty.js >> /scripts/logs/jd_beauty.log 2>&1
20 12 * * * node /scripts/jd_beauty_ex.js >> /scripts/logs/jd_beauty_ex.log 2>&1
##京东集魔方
22 0,20 27-31,1 12,1 * node /scripts/jd_desire.js >> /scripts/logs/jd_desire.log 2>&1


##############长期活动##############
# 签到
0 0,18 * * * cd /scripts && node jd_bean_sign.js >> /scripts/logs/jd_bean_sign.log 2>&1
# 东东超市兑换奖品
0,30 0 * * * node /scripts/jd_blueCoin.js >> /scripts/logs/jd_blueCoin.log 2>&1
# 摇京豆
0 0 * * * node /scripts/jd_club_lottery.js >> /scripts/logs/jd_club_lottery.log 2>&1
# 东东农场
5 6-18/6 * * * node /scripts/jd_fruit.js >> /scripts/logs/jd_fruit.log 2>&1
# 摇钱树
0 */2 * * * node /scripts/jd_moneyTree.js >> /scripts/logs/jd_moneyTree.log 2>&1
# 东东萌宠
5 6-18/6 * * * node /scripts/jd_pet.js >> /scripts/logs/jd_pet.log 2>&1
# 京东种豆得豆
0  */6 * * * node /scripts/jd_plantBean.js >> /scripts/logs/jd_plantBean.log 2>&1
# 京东全民开红包
1 1 * * * node /scripts/jd_redPacket.js >> /scripts/logs/jd_redPacket.log 2>&1
# 进店领豆
10 0 * * * node /scripts/jd_shop.js >> /scripts/logs/jd_shop.log 2>&1
# 京东天天加速
8 */3 * * * node /scripts/jd_speed.js >> /scripts/logs/jd_speed.log 2>&1
# 东东超市
11 */6 * * * node /scripts/jd_superMarket.js >> /scripts/logs/jd_superMarket.log 2>&1
# 取关京东店铺商品
55 23 * * * node /scripts/jd_unsubscribe.js >> /scripts/logs/jd_unsubscribe.log 2>&1
# 京豆变动通知
0 10 * * * node /scripts/jd_bean_change.js >> /scripts/logs/jd_bean_change.log 2>&1
# 京豆变动简洁版
0 9 * * * node /scripts/jd_bean_change_clean.js >> /scripts/logs/jd_bean_change_clean.log 2>&1
# 天天提鹅
18 * * * * node /scripts/jd_daily_egg.js >> /scripts/logs/jd_daily_egg.log 2>&1
# 金融养猪
12 3-24/2 * * * node /scripts/jd_pigPet.js >> /scripts/logs/jd_pigPet.log 2>&1
# 京喜工厂
20 * * * * node /scripts/jd_dreamFactory.js >> /scripts/logs/jd_dreamFactory.log 2>&1
# 京喜工厂开团
20 9,13,16 * * * node /scripts/jd_dreamFactory_tuan.js >> /scripts/logs/jd_dreamFactory_tuan.log 2>&1
# 东东工厂
36 */4 * * * node /scripts/jd_jdfactory.js >> /scripts/logs/jd_jdfactory.log 2>&1
# 京东快递签到
23 1 * * * node /scripts/jd_kd.js >> /scripts/logs/jd_kd.log 2>&1
# 领京豆额外奖励(每日可获得3京豆)
33 0-23/4 * * * node /scripts/jd_bean_home.js >> /scripts/logs/jd_bean_home.log 2>&1
# 京东直播(每日18豆)
10-20/5 12 * * * node /scripts/jd_live.js >> /scripts/logs/jd_live.log 2>&1
# 微信小程序京东赚赚
30 0,1 * * * node /scripts/jd_jdzz.js >> /scripts/logs/jd_jdzz.log 2>&1
# 导到所有互助码
47 7 * * * node /scripts/jd_get_share_code.js >> /scripts/logs/jd_get_share_code.log 2>&1
# 签到领现金
27 7,15 * * * node /scripts/jd_cash.js >> /scripts/logs/jd_cash.log 2>&1
# 闪购盲盒
27 8 * * * node /scripts/jd_sgmh.js >> /scripts/logs/jd_sgmh.log 2>&1
# 京东秒秒币
4 7 * * * node /scripts/jd_ms.js >> /scripts/logs/jd_ms.log 2>&1
# 京喜财富岛
10 * * * *  node /scripts/jd_cfd.js >> /scripts/logs/jd_cfd.log 2>&1
# 京东极速版
48 0,12,18 * * *  node /scripts/jd_speed_sign.js >> /scripts/logs/jd_speed_sign.log 2>&1
# 京东摇一摇
0 1,17 * * * node /scripts/jd_shake.js >> /scripts/logs/jd_shake.log 2>&1
#京东试用（默认注释，请配合取关脚本使用）
10 0 * * *  node /scripts/jd_try_new.js >> /scripts/logs/jd_try_new.log 2>&1
##############默认注释活动##############
# jd_cash_exchange
# 0,1,2 0 * * * node /scripts/jd_cash_exchange.js >> /scripts/logs/jd_cash_exchange.log 2>&1
# 惊喜红包返现助力
# 48 20 * * * node /scripts/jx_aid_cashback.js >> /scripts/logs/jx_aid_cashback.log 2>&1
# 清空购物车
# 0 1 * * * node /scripts/jd_CartRemove.js >> /scripts/logs/jd_CartRemove.log 2>&1

#年货签到
14 2,20 * * * node /scripts/jd_nh_sign.js >> /scripts/logs/jd_nh_sign.log 2>&1

10 0,7 * * * node /scripts/jd_car.js >> /scripts/logs/jd_car.log 2>&1
0 0 * * * node /scripts/jd_car_exchange.js >> /scripts/logs/jd_car_exchange.log 2>&1
30 6 * * * node /scripts/jd_ddnc_farmpark.js >> /scripts/logs/jd_ddnc_farmpark.log 2>&1
1 8 * * * node /scripts/jd_dpqd.js >> /scripts/logs/jd_dpqd.log 2>&1
5 8 * * * node /scripts/jd_dpqd2.js >> /scripts/logs/jd_dpqd2.log 2>&1
15 15 * * * node /scripts/jd_jfcz.js >> /scripts/logs/jd_jfcz.log 2>&1
26 14 * 7 * node /scripts/jd_jr_draw.js >> /scripts/logs/jd_jr_draw.log 2>&1
30 7,16 * * * node /scripts/jd_medal.js >> /scripts/logs/jd_medal.log 2>&1
1 6 * * * node /scripts/jd_gold_sign.js >> /scripts/logs/jd_gold_sign.log 2>&1
2 7 * 12 * node /scripts/jd_gyp.js.js >> /scripts/logs/jd_gyp.log 2>&1
5 0 * * * node /scripts/jd_lotteryMachine.js >> /scripts/logs/jd_lotteryMachine.log 2>&1
1 0,19,23 * * * node /scripts/jd_nnfls.js >> /scripts/logs/jd_nnfls.log 2>&1
0 * * * * node /scripts/jd_redrain.js >> /scripts/logs/jd_redrain.log 2>&1
31 20-23/1 * * * node /scripts/jd_redrain_half.js >> /scripts/logs/jd_redrain_half.log 2>&1
20 0,16 * * * node /scripts/jd_ttpt.js >> /scripts/logs/jd_ttpt.log 2>&1
#推推赚钱 放git
0 0-23/4 * * * node /scripts/jd_tuitui.js >> /scripts/logs/jd_tuitui.log 2>&1
20 0-23/3 * * * node /scripts/jd_jdtj_winner.js >> /scripts/logs/jd_jdtj_winner.log 2>&1
0 0,22 * * * node /scripts/dpsign.js >> /scripts/logs/dpsign.log 2>&1

30 1 5-25/2,26 1 * node /scripts/gua_opencard94.js >> /scripts/logs/gua_opencard94.log 2>&1
30 1 6-31/2,31 1 * node /scripts/gua_opencard93.js >> /scripts/logs/gua_opencard93.log 2>&1
30 2 3-9/2 1 * node /scripts/gua_opencard92.js >> /scripts/logs/gua_opencard92.log 2>&1
10 7 * * * node /scripts/jd_bzlshdgt.js >> /scripts/logs/jd_bzlshdgt.log 2>&1
30 13 1-31/5,31 1,2 node /scripts/gua_opencard96.js >> /scripts/logs/gua_opencard96.log 2>&1
10 2,20 * * * node /scripts/jd_fan.js >> /scripts/logs/jd_fan.log 2>&1
0 2 * * * node /scripts/jd_sevenDay.js >> /scripts/logs/jd_sevenDay.log 2>&1
30 2 1,11-31/3 1,2 * node /scripts/gua_opencard95.js >> /scripts/logs/gua_opencard95.log 2>&1
30 2 28,7-28/3 1 * node /scripts/gua_opencard97.js >> /scripts/logs/gua_opencard97.log 2>&1
30 10 27,7-27/3 1 * node /scripts/gua_opencard98.js >> /scripts/logs/gua_opencard98.log 2>&1
30 3 9-15/3 1 * node /scripts/gua_opencard100.js >> /scripts/logs/gua_opencard100.log 2>&1