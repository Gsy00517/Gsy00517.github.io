// build time:Sun Nov 17 2019 21:55:53 GMT+0800 (GMT+08:00)
var OriginTitle=document.title;var titleTime;document.addEventListener("visibilitychange",function(){if(document.hidden){$('[rel="icon"]').attr("href","/img/TEP.ico");document.title="(＃°Д°)页面崩溃啦~";clearTimeout(titleTime)}else{$('[rel="icon"]').attr("href","/favicon.ico");document.title="(●ˇ∀ˇ●)噫又好了~";titleTime=setTimeout(function(){document.title=OriginTitle},1e3)}});
//rebuild by neat 