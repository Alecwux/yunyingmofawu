let src;
$('body').attr('data-type') == 'index' ?  src='' : src = '../';

const footer_html = `
<footer class="container-fluid footer-module hidden-xs hidden-sm" style="padding:15px 0;">
    <div id="back-top"></div>
    <aside id="left_nav">
        <div class="left_nav_divul">
            <ul id="myMenu">
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
        <p style="width:350px;width:fit-content;padding:0;margin:0 auto;">Copyright © 2018-2024 运营魔法屋 运营工作者导航网站</p>
    </div>
</footer>

<footer class="container foot hidden-md hidden-lg">
    <p style="width:350px;width:fit-content;padding:0;margin:0 auto;">Copyright © 2018-2024运营魔法屋 运营工作者导航网站</p>
</footer>`;
$('#common-footer').html(footer_html);


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