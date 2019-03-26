function frame() {
	var url = 'https://www.baidu.com';
	layer.open({
		type : 2,
		title : '这是一个iframe',
		skin : 'layui-layer-lan',
		shade : [ 0 ],
		area : [ '900px', '700px' ],
		anim : 2,
		maxmin : true,
		content : url, // iframe的url，no代表不显示滚动条
		btn : [ '确定', '关闭' ]
	});
}