// ==UserScript==
// @name         教师研修网辅助
// @namespace    https://github.com/huangdiv/user-scripts/
// @version      0.2
// @description  教师研修网看课自动辅助|自动进入下一个视频（或文件）|视频暂停时自动播放|一次刷完所有看课内容
// @author       huangdiv
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAYAAABRRIOnAAAAAXNSR0IArs4c6QAABl1JREFUeF7tnW1o1WUYxn970bYUVgZGb76BSYGpZebInJskWaMpWYZEOCxKM+cyVDI0QwxchcvoBcoPrpR0lkFGX0xQyGyKLFiiJGhpaeXrUlqunThuIyc753/35eHZ81xj3851/vd9Xdfv/M+zcz4sJ5VKpdCPEuhIIEdAiIXLExAQ4qFLAgJCQAgIMZA5Ad0hRIfuEGJAdwgxYExAbxnGoGKRCYhYmjb6FBDGoGKRCYhYmjb6FBDGoGKRCYhYmjb6FBDGoGKRCYhYmjb6FBDGoGKRCYhYmjb6FBDGoGKRCYhYmjb6FBDGoGKRCYhYmjb6FBDGoGKRCYhYmjb6FBDGoGKRCYhYmjb6FBDGoGKRCYhYmjb6FBDGoGKRCYhYmjb6FBDGoGKRCYhYmjb6FBDGoGKRCYhYmjb6FBDGoGKRCYhYmjb6FBDGoGKRCYhYmjb6FBDGoGKRCYhYmjb6FBDGoGKRCYhYmjb6FBDGoGKRCYhYmjb6FBDGoGKRCYhYmjb6FBDGoGKRCYhYmjb6FBDGoGKRCYhYmjb6FBDGoGKRCYhYmjb6FBDGoGKRCYiOpt88DJuOd629Tx5sHgVF+bHgAAICWHoAtlwBQycCY66BD0YIiCgSOHcR5jXCvjPZ7VYOhPlDo4gkjjtE7UFoOtu10BsK4cVhMG5b9qKvyoWakdBwCvaf66q9vgBW3hEWKEG/ZZxvhQV7YNfv3Ze2bhycboGqhu4fz8uBjSWw8wSs3t+9ZvogeGl4OFAEC8SvF+CpHXDsfOayinrDZ5Ng8W5oOg05Oe3a9L86zgVWjoGf/4RVjdkLXzIKHh0SBhRBAnGkGSq22gra9AA0X4SmU5DfAURrCkb3h/Qd4rGvkq9TmA+7piXreoIiSCDOtEDZxvZXerafjx+EvSfg3UbonddVOexaeP9+mPo5HL7i7HDlNWtLYfzNPaHu5B2DBCJt++098GGGW31+LmyYAj/8Act2ZA5pRQmUDID76jJrqu6GmQEdLIMForkFZtRDa9tlZ4MU9MqDV0rh0ClYmQWGTgS2V0J9E3zU+N91Lp0zUlA6BJZNSH7V9SRFsECkS2g42n5C7DwsXmyD4gGw/RAs+MJW0/P3QuVo+KsVcjvOGOlntqWgIMBPMIME4ugZqPoUTp6HvNz2V3PnXw/TRsD0O2HSO8lAFA+GNyqgoFeyNhRFcEA0HoW5G+DC35kr2rsEVm+Dum8zawZdB5ufDaVmu4+ggNhxAKrXJ5t/+WEoHwljX+1e268P1M+FoquTrxWaIhgg6nZC7Zf2eva8Bt8chJPN7QfNznNB+mww4XboW2C/VkjKYICYuBTOXrBVM68cxt4KW3Z3PSimn50+gM6ZDIW9bdcKTRUMELVboO7r5HrmT4EnyqBsMZzLAFDxbbBmdvK1QlQEA8T3h2BWTfaK5lRA5WSY+EJmGDqvsHYRDB8cYuXZPQUDROs/UPx0ZrMzH4LnHoEpi+BYhm8/L3/20Ftg/XIB0aMT2PYdHPwJ0h9Nk3Pp99L3GX0LoXw8zFoOh3+xW1yzEO4J6Ktti/Ng7hBJZvc2wewMf2Z299x+RbB2BdzYP+nKYT0eDRDp2mZUw49HkgtMf0T9yVsw8KZkbWiKqICo3wo17yVXuGoJlIxN1oWoiAqI479BxZPZa3x8KlQ/E2LVNk9RAZGOZOEyaNjXfTh3jYTX/8c5wxZxz1JFB0TPqsf9tgLCfeZeTxQQXtfjfjkB4T5zrycKCK/rcb+cgHCfudcTBYTX9bhfTkC4z9zriQLC63rcLycg3Gfu9UQB4XU97pcTEO4z93qigPC6HvfLCQj3mXs9UUB4XY/75QSE+8y9niggvK7H/XICwn3mXk8UEF7X4345AeE+c68nCgiv63G/nIBwn7nXEwWE1/W4X05AuM/c64kCwut63C8nINxn7vVEAeF1Pe6XExDuM/d6ooDwuh73ywkI95l7PVFAeF2P++UEhPvMvZ4oILyux/1yAsJ95l5PFBBe1+N+OQHhPnOvJwoIr+txv5yAcJ+51xMFhNf1uF9OQLjP3OuJAsLretwvJyDcZ+71RAHhdT3ulxMQ7jP3eqKA8Loe98sJCPeZez1RQHhdj/vlBIT7zL2eKCC8rsf9cgLCfeZeTxQQXtfjfjkB4T5zrycKCK/rcb+cgHCfudcT/wW1mOeTzdWDpAAAAABJRU5ErkJggg==
// @match        *://ipx.yanxiu.com/*
// @license      CC-BY-NC-SA-4.0
// @homepageURL  https://greasyfork.org/zh-CN/scripts/431837-教师研修网辅助
// @supportURL   https://github.com/huangdiv/user-scripts/issues/3
// @run-at       document-end
// ==/UserScript==

(function () {
    //'use strict';

    function courseList() {

        // 插入辅助标识
        if (!document.querySelector("#yxwfz")) {
            document.querySelector("span.sub-title").insertAdjacentHTML('afterEnd',
                "<a href = 'https://greasyfork.org/zh-CN/scripts/431837-教师研修网辅助' target = '_blank'>" +
                "<span id='yxwfz' style= 'font-weight: 700;color: #ff0000;line-height: 30px;'>【教师研修网辅助】正在运行中...</span></a>"
            );
        }

        //课程选择
        let minutesTotal = parseInt(document.querySelectorAll("em")[0].innerText.match(/\d+(?=分钟)/)) - parseInt(
            document.querySelectorAll("em")[1].innerText.match(/\d+(?=分钟)/)[0]);
        console.log("还需看课" + minutesTotal +"分钟");
        let courses = document.querySelectorAll("div.item");
        if (minutesTotal > 0) {
            for (var i = 0; i < courses.length; i++) {
                let jindubi = (function () {
                    if (courses[i].firstElementChild.lastElementChild.className == "item-infos pass") {
                        return 1;
                    } else if (courses[i].firstElementChild.lastElementChild.lastElementChild.childElementCount ==
                        1) {
                        return 0;
                    } else {
                        return 0.01 * parseInt(courses[i].firstElementChild.lastElementChild.lastElementChild
                            .lastElementChild.innerText.match(/\d+(?=%)/)[0]);
                    }
                })();
                let minutes = (1 - jindubi) * parseInt(courses[i].firstElementChild.firstElementChild.lastElementChild
                    .innerText.match(/\d+(?=分钟)/)[0]);
                let timer = 60 * (minutes < minutesTotal ? minutes : minutesTotal);
                if (jindubi == 1) {
                    continue;
                } else {
                    courses[i].click();
                    setTimeout("location.reload();", timer + 10);
                    console.log("已打开列表中第" + (i + 1) + "个看课课程" );
                    console.log("计时器已启动，将在看课" + (timer / 60) + "分钟后刷新本列表页");
                    break;
                }
            }
        } else {
            console.log("恭喜您已完成看课所需学时！");
            setTimeout("alert('恭喜您已完成看课所需学时！\n教师研修网辅助\n作者：huangdiv\n网址：http://huangdiv.com');",1000);
        }
    }

    function kanke() {

        // 插入辅助标识
        if (!document.querySelector("#yxwfz")) {
            document.querySelector("span.icon.primary").insertAdjacentHTML('afterEnd',
                "<a href = 'https://greasyfork.org/zh-CN/scripts/431837-教师研修网辅助' target = '_blank'>" +
                "<span id='yxwfz' style= 'font-weight: 700;color: #ff0000;line-height: 30px;'>【教师研修网辅助】正在运行中...</span></a>"
            );
        }

        //处理播放器事件
        if (document.querySelector("video")) {
            let playerH5 = document.querySelector("video");
            playerH5.volume = 0; //不想听声音
            if (playerH5.paused) {
                playerH5.play(); //不要暂停，播下去
            }
        }

        //处理突发事件
        if (document.querySelector("div.ended-mask").style.display == "") {
            document.querySelector("p.next").click(); //一个看完，看下一个内容
            console.log("一个看完，看下一个内容");
        } else if (document.querySelector("div.alarmClock-wrapper").style.display == "") {
            document.querySelector("div.alarmClock-wrapper").click(); //点继续看课
            console.log("点继续看课");
        } else if (document.querySelector("div.scoring-wrapper").style.display == "") {
            document.querySelector("div.scoring-wrapper > div > div.info-rate > div > span:nth-child(5)").click();
            setTimeout("document.querySelector('div.commit > button.ivu-btn').click();", 800); //给老师个五星好评
            console.log("给老师个五星好评");
        } else if (document.querySelector("button.ivu-btn.ivu-btn-text")) {
            document.querySelector("button.ivu-btn.ivu-btn-text").click(); //打开了其他播放页面，故关闭当前播放页面
            console.log("本页面课时已完成，即将关闭页面");
        }

        //检测运行是否良好
        console.log("【教师研修网辅助】\n" + document.querySelector(".state > span").innerText);
    }

    function start() {
        //判断是哪个页面
        if (document.querySelector(
                "#app > div.app-body-wrap > section > div > div > div.courseList-wrapper > div > div.container > div.list-wrapper > div"
            )) {
            console.log("判断为课程列表页面");
            courseList();
        } else if (document.querySelector("#course-detail > div.mainContent > section")) {
            console.log("判断为课程视频页面");
            setInterval(kanke, 5000);
        }
    }

    console.log("脚本加载正常");
    setTimeout(start, 3000);

})();
