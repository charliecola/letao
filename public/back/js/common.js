$(document).ajaxStart(function () {
  console.log("ajaxStart在开始一个ajax请求时触发");
  NProgress.start();
});
$(document).ajaxStop(function () {
  console.log("ajaxStart在结束一个ajax请求时触发");
  NProgress.done();
});
// 二级分类
$('.aside_nav li:nth-of-type(2)>a').on('click',function(){
    $('.aside_nav li .child').stop().slideToggle();
});
// aside
$('.main_top a:first-child').on('click',function(){
    $('.aside').toggleClass('navChange');
    $('.main').toggleClass('mainChange');
});
// 模态框
$('.logout').on('click',function(){
    $('#loginModal').modal();
});
// 模态框
$('.modal-footer button:nth-of-type(2)').on('click',function(){
    $.ajax({
        data:{},
        dataType:'json',
        url:'/employee/employeeLogout',
        type:'get',
        success:function(info){
            console.log(info);
            if(info.success){
                location.href = 'login.html';
            }else{
                alert('错误');
            }
        },
        error:function(){
            alert('错误')
        }
    });
});
// 拦截登录
if(location.href.indexOf('login.html') == -1){
    $.ajax({
        dataType:'json',
        data:{},
        type:'get',
        url:'/employee/checkRootLogin',
        success:function(info){
            console.log(info);
            if(info.success){
                //有登陆
            }else{
                location.href = "login.html";
            }
        }
    });
}
