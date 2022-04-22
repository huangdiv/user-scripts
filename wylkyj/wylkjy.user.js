// ==UserScript==
// @name        五岳联考阅卷输分自动点击Enter
// @namespace   https://github.com/huangdiv/user-scripts/
// @match       http://www.wylkyj.com/yuejuan/
// @version     0.2
// @author      huangdiv
// @description 五岳联考阅卷输分自动点击Enter
// @license     BY-NC-SA 4.0
// @homepageURL  https://greasyfork.org/zh-CN/scripts/443794-五岳联考阅卷输分自动点击Enter
// @supportURL   https://github.com/huangdiv/user-scripts/issues/4
// @run-at       document-end
// ==/UserScript==
function clickEnter(){
if(!document.querySelector("#app > div > div.read_status2 > span").innerText=='') {
     document.querySelector("#app > div > div.give_card > div.card_compute > div.compute_ent > button").click();
}}
setInterval(clickEnter,100);
