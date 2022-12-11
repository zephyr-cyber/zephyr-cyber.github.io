/*
 * @Date: 2020-08-22 17:34:07
 * @Author: glassysky
 * @LastEditors: glassysky
 * @LastEditTime: 2020-08-24 20:20:00
 * @Description: 
 */
// 去除banner
// var full_page = document.getElementsByClassName("full_page");
// if (full_page.length != 0) {
//   full_page[0].style.background = "transparent";
// }

// 手机侧边栏默认不展开
// var mobile_sidebar_menus = document.getElementById("mobile-sidebar-menus");
// var menus_item_child = mobile_sidebar_menus.getElementsByClassName(
//   "menus_item_child"
// );
// var menus_expand = mobile_sidebar_menus.getElementsByClassName("menus-expand");
// for (var i = 0; i < menus_item_child.length; i++) {
//   menus_item_child[i].style.display = "none";
//   menus_expand[i].className += " menus-closed";

// }


// 浏览器搞笑标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    $('[rel="icon"]').attr('href', "/funny.ico");
    document.title = 'ヽ(●-`Д´-)ノ你要走嘛我好伤心！';
    clearTimeout(titleTime);
  }
  else {
    $('[rel="icon"]').attr('href', "/favicon.ico");
    document.title = '(Ő∀Ő3)ノ哇喔！欢迎！' + OriginTitle;
    titleTime = setTimeout(function () {
      document.title = OriginTitle;
    }, 2000);
  }
});

// 设置页脚博主会动的心

// $('.copyright').html('©2020 <i id="heartbeat" class="fa fa-heartbeat"></i> By 远方有你伴余生')


// 添加八毛卡通人物
/*右下角添加卡通人物*/
// var bamao = '<i class="fas fa-arrow-up" style ="padding:8px" ></i><img style="max-width: 234%;transform: translate(-70px,-65px);" src="https://cdn.jsdelivr.net/gh/fudalijunyi/picture-bed/img/20200629182853.gif" title="回到顶部" data-ll-status="loaded" class="loaded">';
/*添加到返回顶部按钮下*/
// document.getElementById("go-up").innerHTML = bamao
