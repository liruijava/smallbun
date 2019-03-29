function frame(options) {
	//var options = iframe(options);
	//console.log(options);
	layer.open({
		type : 2, 							//2 表示 iframe层
		title : options.title, 				//标题
		content : options.url, 				//iframe的url
		skin : 'layui-layer-lan', 			//样式类名  目前layer内置的skin有：layui-layer-lanlayui-layer-molv
		shade : [ 0 ], 						//遮罩  想定义别的颜色，可以shade: [0.8, '#393D49']   不想显示设置为 0 
		area : [ options.width + 'px', options.height + 'px' ],		//宽高
		anim : 2, 							//弹出动画
		maxmin : true, 						//右上角最大化最小化按钮     默认不显示最大小化按钮
		closeBtn : 1 , 						//右上角关闭按钮   layer提供了两种风格的关闭按钮，可通过配置1和2来展示，如果不显示，则closeBtn: 0
		fixed : true, 						//固定    鼠标滚动时，层是否固定在可视区域。如果不想，设置fixed: false即可
		resize : true, 						//是否允许拉伸    默认情况下，你可以在弹层右下角拖动来拉伸尺寸。如果对指定的弹层屏蔽该功能，设置 false即可
		btn : [ '确定' , '关闭' ] ,				//btn默认是一个确认按钮  
		yes : function(index, layero){ 		//btn按钮——确定按钮回调方法
		    	//do something
		    	layer.close(index); 		//如果设定了yes回调，需进行手工关闭
		  	  },
		success : function(layero, index){	//层弹出后的成功回调方法
			//do something
			}
	});
}

//注意：parent 是 JS 自带的全局对象，可用于操作父页面
var index = parent.layer.getFrameIndex(window.name); //获取窗口索引

//让层自适应iframe
$('#add').on('click', function(){
    $('body').append('插入内容。');
    parent.layer.iframeAuto(index);
});
//在父层弹出一个层
$('#new').on('click', function(){
    parent.layer.msg('Hi, man', {shade: 0.3})
});
//给父页面传值
$('#transmit').on('click', function(){
    parent.$('#parentIframe').text('父页面传值');
    parent.layer.tips('Look here', '#parentIframe', {time: 5000});
    parent.layer.close(index);
});
//关闭iframe
$('#closeIframe').click(function(){
    var val = $('#name').val();
    if(val === ''){
        parent.layer.msg('请填写标记');
        return;
    }
    parent.layer.msg('您将标记 [ ' +val + ' ] 成功传送给了父窗口');
    parent.layer.close(index);
});
