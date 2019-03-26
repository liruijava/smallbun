/*! layer-v3.1.1 Web弹层组件 MIT License  http://layer.layui.com/  By 贤心 */
!function(m,u){var j,g,q=m.layui&&layui.define,d={getPath:function(){var a=document.currentScript?document.currentScript.src:function(){for(var l,f=document.scripts,c=f.length-1,o=c;o>0;o--){if("interactive"===f[o].readyState){l=f[o].src;break}}return l||f[c].src}();return a.substring(0,a.lastIndexOf("/")+1)}(),config:{},end:{},minIndex:0,minLeft:[],btn:["&#x786E;&#x5B9A;","&#x53D6;&#x6D88;"],type:["dialog","page","iframe","loading","tips"],getStyle:function(c,a){var e=c.currentStyle?c.currentStyle:m.getComputedStyle(c,null);return e[e.getPropertyValue?"getPropertyValue":"getAttribute"](a)},link:function(A,r,e){if(b.path){var y=document.getElementsByTagName("head")[0],B=document.createElement("link");"string"==typeof r&&(e=r);var o=(e||A).replace(/\.|\//g,""),w="layuicss-"+o,x=0;B.rel="stylesheet",B.href=b.path+A,B.id=w,document.getElementById(w)||y.appendChild(B),"function"==typeof r&&!function z(){return ++x>80?m.console&&console.error("layer.css: Invalid"):void (1989===parseInt(d.getStyle(document.getElementById(w),"width"))?r():setTimeout(z,100))}()}}},b={v:"3.1.1",ie:function(){var a=navigator.userAgent.toLowerCase();return !!(m.ActiveXObject||"ActiveXObject" in m)&&((a.match(/msie\s(\d+)/)||[])[1]||"11")}(),index:m.layer&&m.layer.v?100000:0,path:d.getPath,config:function(c,a){return c=c||{},b.cache=d.config=j.extend({},d.config,c),b.path=d.config.path||b.path,"string"==typeof c.extend&&(c.extend=[c.extend]),d.config.path&&b.ready(),c.extend?(q?layui.addcss("modules/layer/"+c.extend):d.link("theme/"+c.extend),this):this},ready:function(f){var c="layer",a="",l=(q?"modules/layer/":"theme/")+"default/layer.css?v="+b.v+a;return q?layui.addcss(l,f,c):d.link(l,f,c),this},alert:function(i,f,l){var c="function"==typeof f;return c&&(l=f),b.open(j.extend({content:i,yes:l},c?{}:f))},confirm:function(l,f,o,c){var i="function"==typeof f;return i&&(c=o,o=f),b.open(j.extend({content:l,btn:d.btn,yes:o,btn2:c},i?{}:f))},msg:function(t,x,i){var o="function"==typeof x,r=d.config.skin,w=(r?r+" "+r+"-msg":"")||"layui-layer-msg",l=h.anim.length-1;return o&&(i=x),b.open(j.extend({content:t,time:3000,shade:!1,skin:w,title:!1,closeBtn:!1,btn:!1,resize:!1,end:i},o&&!d.config.skin?{skin:w+" layui-layer-hui",anim:l}:function(){return x=x||{},(x.icon===-1||x.icon===u&&!d.config.skin)&&(x.skin=w+" "+(x.skin||"layui-layer-hui")),x}()))},load:function(c,a){return b.open(j.extend({type:3,icon:c||0,resize:!1,shade:0.01},a))},tips:function(c,a,f){return b.open(j.extend({type:4,content:[c,a],closeBtn:!1,time:3000,shade:!1,resize:!1,fixed:!1,maxWidth:210},f))}},v=function(c){var a=this;a.index=++b.index,a.config=j.extend({},a.config,d.config,c),document.body?a.creat():setTimeout(function(){a.creat()},30)};v.pt=v.prototype;var h=["layui-layer",".layui-layer-title",".layui-layer-main",".layui-layer-dialog","layui-layer-iframe","layui-layer-content","layui-layer-btn","layui-layer-close"];h.anim=["layer-anim-00","layer-anim-01","layer-anim-02","layer-anim-03","layer-anim-04","layer-anim-05","layer-anim-06"],v.pt.config={type:0,shade:0.3,fixed:!0,move:h[1],title:"&#x4FE1;&#x606F;",offset:"auto",area:"auto",closeBtn:1,time:0,zIndex:19891014,maxWidth:360,anim:0,isOutAnim:!0,icon:-1,moveType:1,resize:!0,scrollbar:!0,tips:2},v.pt.vessel=function(w,A){var l=this,y=l.index,i=l.config,B=i.zIndex+y,o="object"==typeof i.title,x=i.maxmin&&(1===i.type||2===i.type),z=i.title?'<div class="layui-layer-title" style="'+(o?i.title[1]:"")+'">'+(o?i.title[0]:i.title)+"</div>":"";return i.zIndex=B,A([i.shade?'<div class="layui-layer-shade" id="layui-layer-shade'+y+'" times="'+y+'" style="'+("z-index:"+(B-1)+"; ")+'"></div>':"",'<div class="'+h[0]+(" layui-layer-"+d.type[i.type])+(0!=i.type&&2!=i.type||i.shade?"":" layui-layer-border")+" "+(i.skin||"")+'" id="'+h[0]+y+'" type="'+d.type[i.type]+'" times="'+y+'" showtime="'+i.time+'" conType="'+(w?"object":"string")+'" style="z-index: '+B+"; width:"+i.area[0]+";height:"+i.area[1]+(i.fixed?"":";position:absolute;")+'">'+(w&&2!=i.type?"":z)+'<div id="'+(i.id||"")+'" class="layui-layer-content'+(0==i.type&&i.icon!==-1?" layui-layer-padding":"")+(3==i.type?" layui-layer-loading"+i.icon:"")+'">'+(0==i.type&&i.icon!==-1?'<i class="layui-layer-ico layui-layer-ico'+i.icon+'"></i>':"")+(1==i.type&&w?"":i.content||"")+'</div><span class="layui-layer-setwin">'+function(){var a=x?'<a class="layui-layer-min" href="javascript:;"><cite></cite></a><a class="layui-layer-ico layui-layer-max" href="javascript:;"></a>':"";return i.closeBtn&&(a+='<a class="layui-layer-ico '+h[7]+" "+h[7]+(i.title?i.closeBtn:4==i.type?"1":"2")+'" href="javascript:;"></a>'),a}()+"</span>"+(i.btn?function(){var f="";"string"==typeof i.btn&&(i.btn=[i.btn]);for(var c=0,a=i.btn.length;c<a;c++){f+='<a class="'+h[6]+c+'">'+i.btn[c]+"</a>"}return'<div class="'+h[6]+" layui-layer-btn-"+(i.btnAlign||"")+'">'+f+"</div>"}():"")+(i.resize?'<span class="layui-layer-resize"></span>':"")+"</div>"],z,j('<div class="layui-layer-move"></div>')),l},v.pt.creat=function(){var w=this,n=w.config,i=w.index,o=n.content,r="object"==typeof o,x=j("body");if(!n.id||!j("#"+n.id)[0]){switch("string"==typeof n.area&&(n.area="auto"===n.area?["",""]:[n.area,""]),n.shift&&(n.anim=n.shift),6==b.ie&&(n.fixed=!1),n.type){case 0:n.btn="btn" in n?n.btn:d.btn[0],b.closeAll("dialog");break;case 2:var o=n.content=r?n.content:[n.content||"http://layer.layui.com","auto"];n.content='<iframe scrolling="'+(n.content[1]||"auto")+'" allowtransparency="true" id="'+h[4]+i+'" name="'+h[4]+i+'" onload="this.className=\'\';" class="layui-layer-load" frameborder="0" src="'+n.content[0]+'"></iframe>';break;case 3:delete n.title,delete n.closeBtn,n.icon===-1&&0===n.icon,b.closeAll("loading");break;case 4:r||(n.content=[n.content,"body"]),n.follow=n.content[1],n.content=n.content[0]+'<i class="layui-layer-TipsG"></i>',delete n.title,n.tips="object"==typeof n.tips?n.tips:[n.tips,!0],n.tipsMore||b.closeAll("tips")}if(w.vessel(r,function(e,c,a){x.append(e[0]),r?function(){2==n.type||4==n.type?function(){j("body").append(e[1])}():function(){o.parents("."+h[0])[0]||(o.data("display",o.css("display")).show().addClass("layui-layer-wrap").wrap(e[1]),j("#"+h[0]+i).find("."+h[5]).before(c))}()}():x.append(e[1]),j(".layui-layer-move")[0]||x.append(d.moveElem=a),w.layero=j("#"+h[0]+i),n.scrollbar||h.html.css("overflow","hidden").attr("layer-full",i)}).auto(i),j("#layui-layer-shade"+w.index).css({"background-color":n.shade[1]||"#000",opacity:n.shade[0]||n.shade}),2==n.type&&6==b.ie&&w.layero.find("iframe").attr("src",o[0]),4==n.type?w.tips():w.offset(),n.fixed&&g.on("resize",function(){w.offset(),(/^\d+%$/.test(n.area[0])||/^\d+%$/.test(n.area[1]))&&w.auto(i),4==n.type&&w.tips()}),n.time<=0||setTimeout(function(){b.close(w.index)},n.time),w.move().callback(),h.anim[n.anim]){var l="layer-anim "+h.anim[n.anim];w.layero.addClass(l).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){j(this).removeClass(l)})}n.isOutAnim&&w.layero.data("isOutAnim",!0)}},v.pt.auto=function(x){var n=this,i=n.config,y=j("#"+h[0]+x);""===i.area[0]&&i.maxWidth>0&&(b.ie&&b.ie<8&&i.btn&&y.width(y.innerWidth()),y.outerWidth()>i.maxWidth&&y.width(i.maxWidth));var r=[y.innerWidth(),y.innerHeight()],w=y.find(h[1]).outerHeight()||0,z=y.find("."+h[6]).outerHeight()||0,l=function(a){a=y.find(a),a.height(r[1]-w-z-2*(0|parseFloat(a.css("padding-top"))))};switch(i.type){case 2:l("iframe");break;default:""===i.area[1]?i.maxHeight>0&&y.outerHeight()>i.maxHeight?(r[1]=i.maxHeight,l("."+h[5])):i.fixed&&r[1]>=g.height()&&(r[1]=g.height(),l("."+h[5])):l("."+h[5])}return n},v.pt.offset=function(){var n=this,l=n.config,f=n.layero,c=[f.outerWidth(),f.outerHeight()],r="object"==typeof l.offset;n.offsetTop=(g.height()-c[1])/2,n.offsetLeft=(g.width()-c[0])/2,r?(n.offsetTop=l.offset[0],n.offsetLeft=l.offset[1]||n.offsetLeft):"auto"!==l.offset&&("t"===l.offset?n.offsetTop=0:"r"===l.offset?n.offsetLeft=g.width()-c[0]:"b"===l.offset?n.offsetTop=g.height()-c[1]:"l"===l.offset?n.offsetLeft=0:"lt"===l.offset?(n.offsetTop=0,n.offsetLeft=0):"lb"===l.offset?(n.offsetTop=g.height()-c[1],n.offsetLeft=0):"rt"===l.offset?(n.offsetTop=0,n.offsetLeft=g.width()-c[0]):"rb"===l.offset?(n.offsetTop=g.height()-c[1],n.offsetLeft=g.width()-c[0]):n.offsetTop=l.offset),l.fixed||(n.offsetTop=/%$/.test(n.offsetTop)?g.height()*parseFloat(n.offsetTop)/100:parseFloat(n.offsetTop),n.offsetLeft=/%$/.test(n.offsetLeft)?g.width()*parseFloat(n.offsetLeft)/100:parseFloat(n.offsetLeft),n.offsetTop+=g.scrollTop(),n.offsetLeft+=g.scrollLeft()),f.attr("minLeft")&&(n.offsetTop=g.height()-(f.find(h[1]).outerHeight()||0),n.offsetLeft=f.css("left")),f.css({top:n.offsetTop,left:n.offsetLeft})},v.pt.tips=function(){var y=this,l=y.config,i=y.layero,z=[i.outerWidth(),i.outerHeight()],w=j(l.follow);w[0]||(w=j("body"));var n={width:w.outerWidth(),height:w.outerHeight(),top:w.offset().top,left:w.offset().left},x=i.find(".layui-layer-TipsG"),A=l.tips[0];l.tips[1]||x.remove(),n.autoLeft=function(){n.left+z[0]-g.width()>0?(n.tipLeft=n.left+n.width-z[0],x.css({right:12,left:"auto"})):n.tipLeft=n.left},n.where=[function(){n.autoLeft(),n.tipTop=n.top-z[1]-10,x.removeClass("layui-layer-TipsB").addClass("layui-layer-TipsT").css("border-right-color",l.tips[1])},function(){n.tipLeft=n.left+n.width+10,n.tipTop=n.top,x.removeClass("layui-layer-TipsL").addClass("layui-layer-TipsR").css("border-bottom-color",l.tips[1])},function(){n.autoLeft(),n.tipTop=n.top+n.height+10,x.removeClass("layui-layer-TipsT").addClass("layui-layer-TipsB").css("border-right-color",l.tips[1])},function(){n.tipLeft=n.left-z[0]-10,n.tipTop=n.top,x.removeClass("layui-layer-TipsR").addClass("layui-layer-TipsL").css("border-bottom-color",l.tips[1])}],n.where[A-1](),1===A?n.top-(g.scrollTop()+z[1]+16)<0&&n.where[2]():2===A?g.width()-(n.left+n.width+z[0]+16)>0||n.where[3]():3===A?n.top-g.scrollTop()+n.height+z[1]+16-g.height()>0&&n.where[0]():4===A&&z[0]+16-n.left>0&&n.where[1](),i.find("."+h[5]).css({"background-color":l.tips[1],"padding-right":l.closeBtn?"30px":""}),i.css({left:n.tipLeft-(l.fixed?g.scrollLeft():0),top:n.tipTop-(l.fixed?g.scrollTop():0)})},v.pt.move=function(){var x=this,o=x.config,n=j(document),r=x.layero,i=r.find(o.move),w=r.find(".layui-layer-resize"),y={};return o.move&&i.css("cursor","move"),i.on("mousedown",function(a){a.preventDefault(),o.move&&(y.moveStart=!0,y.offset=[a.clientX-parseFloat(r.css("left")),a.clientY-parseFloat(r.css("top"))],d.moveElem.css("cursor","move").show())}),w.on("mousedown",function(a){a.preventDefault(),y.resizeStart=!0,y.offset=[a.clientX,a.clientY],y.area=[r.outerWidth(),r.outerHeight()],d.moveElem.css("cursor","se-resize").show()}),n.on("mousemove",function(t){if(y.moveStart){var e=t.clientX-y.offset[0],A=t.clientY-y.offset[1],c="fixed"===r.css("position");if(t.preventDefault(),y.stX=c?0:g.scrollLeft(),y.stY=c?0:g.scrollTop(),!o.moveOut){var z=g.width()-r.outerWidth()+y.stX,s=g.height()-r.outerHeight()+y.stY;e<y.stX&&(e=y.stX),e>z&&(e=z),A<y.stY&&(A=y.stY),A>s&&(A=s)}r.css({left:e,top:A})}if(o.resize&&y.resizeStart){var e=t.clientX-y.offset[0],A=t.clientY-y.offset[1];t.preventDefault(),b.style(x.index,{width:y.area[0]+e,height:y.area[1]+A}),y.isResize=!0,o.resizing&&o.resizing(r)}}).on("mouseup",function(a){y.moveStart&&(delete y.moveStart,d.moveElem.hide(),o.moveEnd&&o.moveEnd(r)),y.resizeStart&&(delete y.resizeStart,d.moveElem.hide())}),x},v.pt.callback=function(){function i(){var a=c.cancel&&c.cancel(f.index,l);a===!1||b.close(f.index)}var f=this,l=f.layero,c=f.config;f.openLayer(),c.success&&(2==c.type?l.find("iframe").on("load",function(){c.success(l,f.index)}):c.success(l,f.index)),6==b.ie&&f.IE6(l),l.find("."+h[6]).children("a").on("click",function(){var a=j(this).index();if(0===a){c.yes?c.yes(f.index,l):c.btn1?c.btn1(f.index,l):b.close(f.index)}else{var n=c["btn"+(a+1)]&&c["btn"+(a+1)](f.index,l);n===!1||b.close(f.index)}}),l.find("."+h[7]).on("click",i),c.shadeClose&&j("#layui-layer-shade"+f.index).on("click",function(){b.close(f.index)}),l.find(".layui-layer-min").on("click",function(){var a=c.min&&c.min(l);a===!1||b.min(f.index,c)}),l.find(".layui-layer-max").on("click",function(){j(this).hasClass("layui-layer-maxmin")?(b.restore(f.index),c.restore&&c.restore(l)):(b.full(f.index,c),setTimeout(function(){c.full&&c.full(l)},100))}),c.end&&(d.end[f.index]=c.end)},d.reselect=function(){j.each(j("select"),function(c,a){var f=j(this);f.parents("."+h[0])[0]||1==f.attr("layer")&&j("."+h[0]).length<1&&f.removeAttr("layer").show(),f=null})},v.pt.IE6=function(a){j("select").each(function(f,c){var i=j(this);i.parents("."+h[0])[0]||"none"===i.css("display")||i.attr({layer:"1"}).hide(),i=null})},v.pt.openLayer=function(){var a=this;b.zIndex=a.config.zIndex,b.setTop=function(f){var c=function(){b.zIndex++,f.css("z-index",b.zIndex+1)};return b.zIndex=parseInt(f[0].style.zIndex),f.on("mousedown",c),b.zIndex}},d.record=function(c){var a=[c.width(),c.height(),c.position().top,c.position().left+parseFloat(c.css("margin-left"))];c.find(".layui-layer-max").addClass("layui-layer-maxmin"),c.attr({area:a})},d.rescollbar=function(a){h.html.attr("layer-full")==a&&(h.html[0].style.removeProperty?h.html[0].style.removeProperty("overflow"):h.html[0].style.removeAttribute("overflow"),h.html.removeAttr("layer-full"))},m.layer=b,b.getChildFrame=function(c,a){return a=a||j("."+h[4]).attr("times"),j("#"+h[0]+a).find("iframe").contents().find(c)},b.getFrameIndex=function(a){return j("#"+a).parents("."+h[4]).attr("times")},b.iframeAuto=function(i){if(i){var f=b.getChildFrame("html",i).outerHeight(),r=j("#"+h[0]+i),c=r.find(h[1]).outerHeight()||0,l=r.find("."+h[6]).outerHeight()||0;r.css({height:f+c+l}),r.find("iframe").css({height:f})}},b.iframeSrc=function(c,a){j("#"+h[0]+c).find("iframe").attr("src",a)},b.style=function(y,l,A){var i=j("#"+h[0]+y),w=i.find(".layui-layer-content"),o=i.attr("type"),x=i.find(h[1]).outerHeight()||0,z=i.find("."+h[6]).outerHeight()||0;i.attr("minLeft");o!==d.type[3]&&o!==d.type[4]&&(A||(parseFloat(l.width)<=260&&(l.width=260),parseFloat(l.height)-x-z<=64&&(l.height=64+x+z)),i.css(l),z=i.find("."+h[6]).outerHeight(),o===d.type[2]?i.find("iframe").css({height:parseFloat(l.height)-x-z}):w.css({height:parseFloat(l.height)-x-z-parseFloat(w.css("padding-top"))-parseFloat(w.css("padding-bottom"))}))},b.min=function(r,l){var i=j("#"+h[0]+r),n=i.find(h[1]).outerHeight()||0,o=i.attr("minLeft")||181*d.minIndex+"px",w=i.css("position");d.record(i),d.minLeft[0]&&(o=d.minLeft[0],d.minLeft.shift()),i.attr("position",w),b.style(r,{width:180,height:n,left:o,top:g.height()-n,position:"fixed",overflow:"hidden"},!0),i.find(".layui-layer-min").hide(),"page"===i.attr("type")&&i.find(h[4]).hide(),d.rescollbar(r),i.attr("minLeft")||d.minIndex++,i.attr("minLeft",o)},b.restore=function(c){var a=j("#"+h[0]+c),f=a.attr("area").split(",");a.attr("type");b.style(c,{width:parseFloat(f[0]),height:parseFloat(f[1]),top:parseFloat(f[2]),left:parseFloat(f[3]),position:a.attr("position"),overflow:"visible"},!0),a.find(".layui-layer-max").removeClass("layui-layer-maxmin"),a.find(".layui-layer-min").show(),"page"===a.attr("type")&&a.find(h[4]).show(),d.rescollbar(c)},b.full=function(i){var f,c=j("#"+h[0]+i);d.record(c),h.html.attr("layer-full")||h.html.css("overflow","hidden").attr("layer-full",i),clearTimeout(f),f=setTimeout(function(){var a="fixed"===c.css("position");b.style(i,{top:a?0:g.scrollTop(),left:a?0:g.scrollLeft(),width:g.width(),height:g.height()},!0),c.find(".layui-layer-min").hide()},100)},b.title=function(c,a){var f=j("#"+h[0]+(a||b.index)).find(h[1]);f.html(c)},b.close=function(r){var i=j("#"+h[0]+r),w=i.attr("type"),c="layer-anim-close";if(i[0]){var l="layui-layer-wrap",o=function(){if(w===d.type[1]&&"object"===i.attr("conType")){i.children(":not(."+h[5]+")").remove();for(var e=i.find("."+l),n=0;n<2;n++){e.unwrap()}e.css("display",e.data("display")).removeClass(l)}else{if(w===d.type[2]){try{var s=j("#"+h[4]+r)[0];s.contentWindow.document.write(""),s.contentWindow.close(),i.find("."+h[5])[0].removeChild(s)}catch(t){}}i[0].innerHTML="",i.remove()}"function"==typeof d.end[r]&&d.end[r](),delete d.end[r]};i.data("isOutAnim")&&i.addClass("layer-anim "+c),j("#layui-layer-moves, #layui-layer-shade"+r).remove(),6==b.ie&&d.reselect(),d.rescollbar(r),i.attr("minLeft")&&(d.minIndex--,d.minLeft.push(i.attr("minLeft"))),b.ie&&b.ie<10||!i.data("isOutAnim")?o():setTimeout(function(){o()},200)}},b.closeAll=function(a){j.each(j("."+h[0]),function(){var c=j(this),e=a?c.attr("type")===a:1;e&&b.close(c.attr("times")),e=null})};var k=b.cache||{},p=function(a){return k.skin?" "+k.skin+" "+k.skin+"-"+a:""};b.prompt=function(x,n){var i="";if(x=x||{},"function"==typeof x&&(n=x),x.area){var y=x.area;i='style="width: '+y[0]+"; height: "+y[1]+';"',delete x.area}var r,c=2==x.formType?'<textarea class="layui-layer-input"'+i+">"+(x.value||"")+"</textarea>":function(){return'<input type="'+(1==x.formType?"password":"text")+'" class="layui-layer-input" value="'+(x.value||"")+'">'}(),w=x.success;return delete x.success,b.open(j.extend({type:1,btn:["&#x786E;&#x5B9A;","&#x53D6;&#x6D88;"],content:c,skin:"layui-layer-prompt"+p("prompt"),maxWidth:g.width(),success:function(a){r=a.find(".layui-layer-input"),r.focus(),"function"==typeof w&&w(a)},resize:!1,yes:function(a){var e=r.val();""===e?r.focus():e.length>(x.maxlength||500)?b.tips("&#x6700;&#x591A;&#x8F93;&#x5165;"+(x.maxlength||500)+"&#x4E2A;&#x5B57;&#x6570;",r,{tips:1}):n&&n(e,a,r)}},x))},b.tab=function(i){i=i||{};var f=i.tab||{},l="layui-this",c=i.success;return delete i.success,b.open(j.extend({type:1,skin:"layui-layer-tab"+p("tab"),resize:!1,title:function(){var r=f.length,o=1,n="";if(r>0){for(n='<span class="'+l+'">'+f[0].title+"</span>";o<r;o++){n+="<span>"+f[o].title+"</span>"}}return n}(),content:'<ul class="layui-layer-tabmain">'+function(){var r=f.length,o=1,n="";if(r>0){for(n='<li class="layui-layer-tabli '+l+'">'+(f[0].content||"no content")+"</li>";o<r;o++){n+='<li class="layui-layer-tabli">'+(f[o].content||"no  content")+"</li>"}}return n}()+"</ul>",success:function(a){var n=a.find(".layui-layer-title").children(),e=a.find(".layui-layer-tabmain").children();n.on("mousedown",function(s){s.stopPropagation?s.stopPropagation():s.cancelBubble=!0;var r=j(this),w=r.index();r.addClass(l).siblings().removeClass(l),e.eq(w).show().siblings().hide(),"function"==typeof i.change&&i.change(w)}),"function"==typeof c&&c(a)}},i))},b.photos=function(D,i,B){function e(l,f,a){var o=new Image;return o.src=l,o.complete?f(o):(o.onload=function(){o.onload=null,f(o)},void (o.onerror=function(n){o.onerror=null,a(n)}))}var E={};if(D=D||{},D.photos){var r=D.photos.constructor===Object,x=r?D.photos:{},C=x.data||[],z=x.start||0;E.imgIndex=(0|z)+1,D.img=D.img||"img";var A=D.success;if(delete D.success,r){if(0===C.length){return b.msg("&#x6CA1;&#x6709;&#x56FE;&#x7247;")}}else{var c=j(D.photos),w=function(){C=[],c.find(D.img).each(function(f){var a=j(this);a.attr("layer-index",f),C.push({alt:a.attr("alt"),pid:a.attr("layer-pid"),src:a.attr("layer-src")||a.attr("src"),thumb:a.attr("src")})})};if(w(),0===C.length){return}if(i||c.on("click",D.img,function(){var a=j(this),f=a.attr("layer-index");b.photos(j.extend(D,{photos:{start:f,data:C,tab:D.tab},full:D.full}),!0),w()}),!i){return}}E.imgprev=function(a){E.imgIndex--,E.imgIndex<1&&(E.imgIndex=C.length),E.tabimg(a)},E.imgnext=function(f,a){E.imgIndex++,E.imgIndex>C.length&&(E.imgIndex=1,a)||E.tabimg(f)},E.keyup=function(f){if(!E.end){var a=f.keyCode;f.preventDefault(),37===a?E.imgprev(!0):39===a?E.imgnext(!0):27===a&&b.close(E.index)}},E.tabimg=function(a){if(!(C.length<=1)){return x.start=E.imgIndex-1,b.close(E.index),b.photos(D,!0,a)}},E.event=function(){E.bigimg.hover(function(){E.imgsee.show()},function(){E.imgsee.hide()}),E.bigimg.find(".layui-layer-imgprev").on("click",function(a){a.preventDefault(),E.imgprev()}),E.bigimg.find(".layui-layer-imgnext").on("click",function(a){a.preventDefault(),E.imgnext()}),j(document).on("keyup",E.keyup)},E.loadi=b.load(1,{shade:!("shade" in D)&&0.9,scrollbar:!1}),e(C[z].src,function(a){b.close(E.loadi),E.index=b.open(j.extend({type:1,id:"layui-layer-photos",area:function(){var f=[a.width,a.height],n=[j(m).width()-100,j(m).height()-100];if(!D.full&&(f[0]>n[0]||f[1]>n[1])){var l=[f[0]/n[0],f[1]/n[1]];l[0]>l[1]?(f[0]=f[0]/l[0],f[1]=f[1]/l[0]):l[0]<l[1]&&(f[0]=f[0]/l[1],f[1]=f[1]/l[1])}return[f[0]+"px",f[1]+"px"]}(),title:!1,shade:0.9,shadeClose:!0,closeBtn:!1,move:".layui-layer-phimg img",moveType:1,scrollbar:!1,moveOut:!0,isOutAnim:!1,skin:"layui-layer-photos"+p("photos"),content:'<div class="layui-layer-phimg"><img src="'+C[z].src+'" alt="'+(C[z].alt||"")+'" layer-pid="'+C[z].pid+'"><div class="layui-layer-imgsee">'+(C.length>1?'<span class="layui-layer-imguide"><a href="javascript:;" class="layui-layer-iconext layui-layer-imgprev"></a><a href="javascript:;" class="layui-layer-iconext layui-layer-imgnext"></a></span>':"")+'<div class="layui-layer-imgbar" style="display:'+(B?"block":"")+'"><span class="layui-layer-imgtit"><a href="javascript:;">'+(C[z].alt||"")+"</a><em>"+E.imgIndex+"/"+C.length+"</em></span></div></div></div>",success:function(l,f){E.bigimg=l.find(".layui-layer-phimg"),E.imgsee=l.find(".layui-layer-imguide,.layui-layer-imgbar"),E.event(l),D.tab&&D.tab(C[z],l),"function"==typeof A&&A(l)},end:function(){E.end=!0,j(document).off("keyup",E.keyup)}},D))},function(){b.close(E.loadi),b.msg("&#x5F53;&#x524D;&#x56FE;&#x7247;&#x5730;&#x5740;&#x5F02;&#x5E38;<br>&#x662F;&#x5426;&#x7EE7;&#x7EED;&#x67E5;&#x770B;&#x4E0B;&#x4E00;&#x5F20;&#xFF1F;",{time:30000,btn:["&#x4E0B;&#x4E00;&#x5F20;","&#x4E0D;&#x770B;&#x4E86;"],yes:function(){C.length>1&&E.imgnext(!0,!0)}})})}},d.run=function(a){j=a,g=j(m),h.html=j("html"),b.open=function(f){var c=new v(f);return c.index}},m.layui&&layui.define?(b.ready(),layui.define("jquery",function(a){b.path=layui.cache.dir,d.run(layui.$),m.layer=b,a("layer",b)})):"function"==typeof define&&define.amd?define(["jquery"],function(){return d.run(m.jQuery),b}):function(){d.run(m.jQuery),b.ready()}()}(window);