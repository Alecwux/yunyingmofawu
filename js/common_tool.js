let src;
$('body').attr('data-type') == 'index' ?  src='' : src = '../';

const footer_html = `
<footer class="container-fluid footer-module hidden-xs hidden-sm" style="padding:15px 0;">
    <div id="back-top"></div>
    <!--
    <section id="lx_contact">
        <img src="images/tool_ruzhu001_03.png" alt="">
        <p>联&nbsp;系<br/>入&nbsp;驻</p>
        <section class="barimg">
            <img src="images/lh_r01_03.jpg" alt="" />
            <p>联&nbsp;系&nbsp;客&nbsp;服</p></section>
    </section>
    -->
    <aside id="left_nav">
        <div class="left_nav_divul">
            <ul id="myMenu">
                <li><a hrefs="#commend" style="display:none;">每周优选工具</a></li>
                <li><a hrefs="#tabletool">01&nbsp;热点搜索</a></li>
                <li><a hrefs="#playtool">02&nbsp;资讯类</a></li>
                <li><a hrefs="#makeurl">03&nbsp;网址缩短</a></li>
                <li><a hrefs="#searchtool">04&nbsp;无版权图</a></li>
                <li><a hrefs="#haveright">05&nbsp;有版权图</a></li>
                <li><a hrefs="#dtaipic">06&nbsp;动态图片</a></li>
                <li><a hrefs="#picmake">07&nbsp;图片制作</a></li>
                <li><a hrefs="#learnpt">08&nbsp;学习平台</a></li>
                <li><a hrefs="#biaodan">09&nbsp;表单工具</a></li>
                <li><a hrefs="#workneed">10&nbsp;媒体平台</a></li>
                <li><a hrefs="#scene">11&nbsp;微场景</a></li>
                <li><a hrefs="#beautifyqrcode">12&nbsp;二维码</a></li>
                <li><a hrefs="#braintool">13&nbsp;脑图工具</a></li>
                <li><a hrefs="#dataanalysis">14&nbsp;数据分析</a></li>
                <li><a hrefs="#activity">15&nbsp;活动发布</a></li>
                <li><a hrefs="#thirdparty">16&nbsp;知识付费</a></li>
                <li><a hrefs="#office">17&nbsp;办公辅助</a></li>
                <li><a hrefs="#powder">18&nbsp;裂变涨粉</a></li>
            </ul>
        </div>
        <div class="left_nav_page2">当&nbsp;前&nbsp;:&nbsp;<span>01/18<span></div>
        <div class="left_nav_page"><span class="glyphicon glyphicon-menu-down"></span></div>
    </aside>
    <div class="container footer-container">
        <!-- -->
        <p style="width:350px;width:fit-content;padding:0;margin:0 auto;">Copyright © 2018-2018 运营魔法屋 运营工作者导航网站</p>
    </div>
</footer>

<footer class="container foot hidden-md hidden-lg">
    <!--
    <ul class="foot-link">
        <li><a href="http://about.ipaiban.com" class="about_about" target="_blank">关于我们</a>|</li>
        <li><a href="http://help.ipaiban.com" class="about_help" target="_blank">帮助中心</a>|</li>
        <li><a href="http://service.ipaiban.com" class="about_service" target="_blank">服务协议</a>|</li>
        <li><a href="mailto:ipaiban@playhudong.com?subject=给i排版的建议或意见&amp;cc=thor@playhudong.com;yangchenyang@playhudong.com&amp;body=i排版你好,%0a%0d关于编辑器我有一些建议：%0a%0d1.%0a%0d2.%0a%0d我的微信号：" target="_blank" style="border-right: none">联系邮箱</a></li>
    </ul>
    <div class="foot-info">© 2017<a href="javascript:;" target="_blank">小黄人科技.</a>
        <a style="margin-left: 10px;" href="http://www.miibeian.gov.cn/" target="_blank">京ICP备14043207号-2</a>
        <a style="margin-left: 14px;" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802023272" target="_blank">
            <img src="https://style.ipaiban.com/keywordimage/beian.png" style="width: 18px;">京公网安备11010802023272号</a>
    </div>
    -->
    <p style="width:350px;width:fit-content;padding:0;margin:0 auto;">Copyright © 2018-2018 运营魔法屋 运营工作者导航网站</p>
</footer>`;
$('#common-footer').html(footer_html);

// 关于我们
$('.about_about').attr('href','http://ipaiban.com/about/other.html');
// 帮助中心
$('.about_help').attr('href','http://ipaiban.com/about/other.html?help');
// 服务协议
$('.about_service').attr('href','http://ipaiban.com/about/other.html?service');
// 人才招聘
$('.about_recruitment').attr('href','http://ipaiban.com/about/other.html?recruitment');
// 产品服务
$('.about_product').attr('href','http://ipaiban.com/about/other.html?product');
// 联系我们
$('.about_contact').attr('href','http://ipaiban.com/about/other.html?contact');


$(document).ready(function () {

    let marginLeft = parseInt($('.container').css('marginLeft'));
    let width = $(window).width();
    let height = window.innerHeight;
    let document_height = $(document).height();
    let footer_height = $('.footer-module').height();
    let oTop1 = $(document).scrollTop();
    var wscreen=$(window).width();
    $(window).resize(function () {
        // marginLeft = parseInt($('.container').css('marginLeft'));
        height = window.innerHeight;
        width = $(window).width();
        document_height = $(document).height();
        footer_height = $('.footer-module').height();
        oTop1 = $(document).scrollTop();
        wscreen=$(window).width();
        backTop(oTop1);
    });

    $(window).scroll(function(){
        var oTop2 = $(document).scrollTop();

        var st = $(this).scrollTop();
        if(oTop2 > oTop1 && st > 150){
            $('.navbar').css('margin-top','-100px');
        }else{
            $('.navbar').css('margin-top',0);
        }
        oTop1 = $(document).scrollTop();

        backTop(oTop2);
    });

    function backTop(oTop2){
        wscreen=$(window).width();
        if(oTop2 >= 250){
            $('#back-top').css({'opacity':'1','display':'block'});
            $('#lx_contact').css({'opacity':'1','display':'block'});
            $('#left_nav').css({'opacity':'1','display':'block'});

            if(wscreen>=1400){
              $('#left_nav').css({'position':'fixed','top':'180px','left':'50%','bottom':'auto','right':'auto','marginLeft':'-689px'});
              if(oTop2 + height +40 >= document_height-footer_height){
                  $('#back-top').css({'position':'absolute','top':'-160px','left':'50%','bottom':'auto','right':'auto','marginLeft':'584px'});
                    $('#lx_contact').css({'position':'absolute','top':'-104px','left':'50%','bottom':'auto','right':'auto','marginLeft':'584px'});
              }else{
                    $('#back-top').css({'position':'fixed','bottom':'80px','left':'50%','top':'auto','right':'auto','marginLeft':'584px'});
                    $('#lx_contact').css({'position':'fixed','bottom':'50px','left':'50%','top':'auto','right':'auto','marginLeft':'584px'});
              }
            }else if(wscreen<1400&&wscreen>=1200){
                if(oTop2 + height +40 >= document_height-footer_height){
                      $('#left_nav').css({'position':'fixed','top':'214px','left':'50%','bottom':'auto','right':'auto','marginLeft':'-624px'});
                      $('#back-top').css({'position':'absolute','top':'-160px','left':'50%','bottom':'auto','right':'auto','marginLeft':'520px'});
                    $('#lx_contact').css({'position':'absolute','top':'-104px','left':'50%','bottom':'auto','right':'auto','marginLeft':'520px'});
                }else{
                     $('#left_nav').css({'position':'fixed','top':'214px','left':'50%','bottom':'auto','right':'auto','marginLeft':'-624px'});
                     $('#back-top').css({'position':'fixed','bottom':'80px','left':'50%','top':'auto','right':'auto','marginLeft':'520px'});
                    $('#lx_contact').css({'position':'fixed','bottom':'50px','left':'50%','top':'auto','right':'auto','marginLeft':'520px'});
                }

            }else if(wscreen<1199&&wscreen>997){
                   if(oTop2 + height +40 >= document_height-footer_height){
                      $('#left_nav').css({'position':'absolute','top':'-378px','left':'50%','bottom':'auto','right':'auto','marginLeft':'-608px'});
                      $('#back-top').css({'position':'absolute','top':'-160px','left':'auto','bottom':'auto','right':'18px','marginLeft':0});
                    $('#lx_contact').css({'position':'absolute','top':'-104px','left':'auto','bottom':'auto','right':'18px','marginLeft':0});
                }else{
                     $('#left_nav').css({'position':'fixed','top':'214px','left':'50%','bottom':'auto','right':'auto','marginLeft':'-608px'});
                     $('#back-top').css({'position':'fixed','bottom':'80px','right':'18px','top':'auto','left':'auto','marginLeft':0});
                    $('#lx_contact').css({'position':'fixed','bottom':'50px','right':'18px','top':'auto','left':'auto','marginLeft':0});
                }

            }else{
                $('#left_nav').css({'opacity':'0','display':'none'});
                $('#back-top').css({'opacity':'0','display':'none'});
                $('#lx_contact').css({'opacity':'0','display':'none'});
            }
        }else{
            $('#back-top').css({'opacity':'0','display':'none'});
            $('#lx_contact').css({'opacity':'0','display':'none'});
            $('#left_nav').css({'opacity':'0','display':'none'});
        }
    }

    $("#back-top").click(function(){
        $('body,html').animate({scrollTop:0},500);
    });
});