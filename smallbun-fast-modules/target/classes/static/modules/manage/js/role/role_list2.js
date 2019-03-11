/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2019 ‭‭‭‭‭‭‭‭‭‭‭‭[smallbun] www.smallbun.org
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

layui.use('table', function(){
  var table = layui.table;
  
  table.render({
    elem: '#table'
    ,height: 312
    ,url: contextPath + 'role/page' //数据接口
    ,method: 'post'
    ,page: true
    ,request: {
        pageName: 'current' //页码的参数名称，默认：page
        ,limitName: 'size' //每页数据量的参数名，默认：limit
      }//开启分页
	,response:{
		countName: 'total',
		statusName:'status',
		statusCode:'200',
		dataName:'data'
	}//开启分页
    ,cols: [[ //表头
    	{type:'checkbox'},
    	{field: 'id',style:'display:none;'},
        {field: 'roleName', title: '角色名称'},
        {field: 'enName', title: '角色编码'},
        {field: 'roleTypeName', title: '角色类型'},
        {field: 'dataScopeName', title: '数据范围'},
        {field: 'useableName', title: '是否可用'},
        {field: 'gmtModified', title: '更新时间'},
        {fixed: 'right', title: '操作',width:150, align:'center', toolbar: '#barDemo'}
    ]],
	done: function(res, curr, count){
    	$("[data-field='id']").css('display','none');
    	var checkStatus = table.checkStatus('table'); 
    	  console.log(checkStatus.data);
    }

    
  });
  table.on('checkbox(demo)', function(obj){
	    console.log(obj)
	  });
  
  var $ = layui.$, active = {
		    getCheckData: function(){ //获取选中数据
		      var checkStatus = table.checkStatus('idTest')
		      ,data = checkStatus.data;
		      layer.alert(JSON.stringify(data));
		    }
  };
//监听工具条
  table.on('tool(test)', function(obj){ 
    var data = obj.data; //获得当前行数据
    var layEvent = obj.event; //获得 lay-event 对应的值（也可以是表头的 event 参数对应的值）
    var tr = obj.tr; //获得当前行 tr 的DOM对象
   
    if(layEvent === 'detail'){ //查看
      //do somehing
    } else if(layEvent === 'del'){ //删除
      layer.confirm('真的删除行么', function(index){
        obj.del(); //删除对应行（tr）的DOM结构，并更新缓存
        layer.close(index);
        //向服务端发送删除指令
      });
    } else if(layEvent === 'edit'){ //编辑
      //do something
      
      //同步更新缓存对应的值
      obj.update({
        username: '123'
        ,title: 'xxx'
      });
    }
  });


});