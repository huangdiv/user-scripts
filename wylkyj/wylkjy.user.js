// ==UserScript==
// @name        五岳联考阅卷输分自动点击Enter - wylkyj.com
// @namespace   Violentmonkey Scripts
// @match       http://www.wylkyj.com/yuejuan/
// @grant       none
// @version     0.1
// @author      huangdiv
// @description 2022/4/22 14:28:55
// ==/UserScript==
function clickEnter(){
if(!document.querySelector("#app > div > div.read_status2 > span").innerText=='') {
     document.querySelector("#app > div > div.give_card > div.card_compute > div.compute_ent > button").click();
}}
setInterval(clickEnter,100);
