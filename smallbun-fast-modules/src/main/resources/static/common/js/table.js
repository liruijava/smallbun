function initOpt(opt){
	var options = {
	    elem: '#table'
	    ,height: 530
	    ,url:$.common.isEmpty(opt.url) ? "404.html" :opt.url //contextPath + 'user/page' 
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
	    ,cols: opt.cols
	    ,done: function(res, curr, count){
	    	$("[data-field='id']").css('display','none');
	    	console.log(res);
	    }
	  }
	return options;
};

function tableOn(){
table.on('tool(demo)', function(obj){
    var data = obj.data;
    if(obj.event === 'detail'){
    	function view(id, url) {
    		var  id = obj.data.id;  
    		var  url = urlss.viewUrl;
    			url = url + "?id=" + id;
    		$.modal.view("查看"+urlss.title, url);
        }
        view();
    } else if(obj.event === 'del'){
    	function remove(id) {
            $.modal.confirm("确定删除该条信息吗？", function () {
                var url = urlss.removeUrl;
                var  id = obj.data.id; 
                var data = {"id": id};
                $.operate.submit(url, "post", "json", data);
            });
        }
    	remove();
    } else if(obj.event === 'edit'){
    	function edit(id) {
    		var  id = obj.data.id;
           	var url =  urlss.editUrl.replace("{id}", "?id=" + id);
            $.modal.open("修改"+urlss.title, url);
        }
    	edit();
    }
});
};


//添加信息
function add() {
    var url = urlss.addUrl;
    $.modal.open("添加"+urlss.title, url);
};

//修改信息
function edit(){
	var checkStatus = table.checkStatus('table');
	var data = checkStatus.data;
	var id= new Array();
		for(var item in data){
			id.push(data[item].id);
		}
	console.log(id.length+"条数据");
	if  (id.length === 0) {
		$.modal.alertWarning("请至少选择一条记录");
		return;
	}else if (id.length > 1) {
		$.modal.alertWarning("只能选择一条数据");
		return;
	}else {
		url = urlss.editUrl.replace("{id}", "?id=" + id);
	}
	$.modal.open("修改"+urlss.title, url);
};


// 删除信息
 function remove(id) {
	var checkStatus = table.checkStatus('table');
	var data = checkStatus.data;
	var id= new Array();
		for(var item in data){
			id.push(data[item].id);
		}
    $.modal.confirm("确定删除该条信息吗？", function () {
        var url = urlss.editUrl;
        var data = {"id": id};
        $.operate.submit(url, "post", "json", data);
    });
};

//批量删除信息
function batRemove(id) {
	var checkStatus = table.checkStatus('table');
	var data = checkStatus.data;
	var id= new Array();
		for(var item in data){
			id.push(data[item].id);
		}
	var rows = id;
    if (rows.length === 0) {
    	$.modal.alertWarning("请至少选择一条记录");
        return;
    }
    $.modal.confirm("确认要删除选中的" + rows.length + "条数据吗?", function () {
    	var url = urlss.removesUrl;
        var data = {"ids": rows.join()};
        $.operate.submit(url, "post", "json", data);   
	});
};
