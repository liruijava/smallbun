var table;
layui.use('table', function(){
	table = layui.table;
	  
	  table.render({
	    elem: '#table'
	    ,height: 530
	    ,url: contextPath + 'user/page' 
	    ,method: 'post'
	    ,page: true
	    ,colFilterRecord: true
	    ,toolbar: '#toolbarDemo'
	    ,request: {
	        pageName: 'current' 
	        ,limitName: 'size' 
	      }
		,response:{
			countName: 'total',
			statusName:'status',
			statusCode:'200',
			dataName:'data'
		}
	    ,cols: [[ 
	    	{type:'checkbox', fixed: 'left'},
	    	{field: 'id',style:'display:none;'},
	        {field: 'jobNumber', title: '工号', align:'center'},
	        {field: 'username', title: '用户名', align:'center'},
            {field: 'fullName', title: '姓名', align:'center'},
            {field: 'phone', title: '手机', align:'center'},
            {field: 'telephone', title: '电话', align:'center'},
            {field: 'email', title: '邮箱', align:'center'},
            {field: 'org.orgName', title: '部门', align:'center'},
            {field: 'userStatusName', title: '状态', align: 'center'},
            {fixed: 'right', title: '操作',width:180, align:'center', toolbar: '#barDemo', fixed: 'right'}
	    ]],
		done: function(res, curr, count){
	    	$("[data-field='id']").css('display','none');
	    	console.log(res);
	    }
	  });
		
});