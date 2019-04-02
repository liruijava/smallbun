//搜索
jQuery.prototype.serializeObject=function(){
	var a,o,h,i,e;
	a=this.serializeArray();
	o={};
	h=o.hasOwnProperty;
	for(i=0;i<a.length;i++){
		e=a[i];
		if(!h.call(o,e.name)){
			o[e.name]=e.value;
		}
	}
	return o;
};

//表格
function initOpt(opt){
	var options = {
	    elem: '#table'
	    ,height: 530
	    ,url:opt.url //contextPath + 'user/page' 
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
	  }
	return options;
};

//表格树
function initOptTree(opts){
	var options = {
	    elem: '#table'
	    ,idField:'id'
	    ,height: 520
	    ,url:opts.url //contextPath + 'user/page' 
	    ,method: 'post'
	    ,page: false
	    ,iconOpen:false//是否显示图标【默认显示】
        ,isOpenDefault:true//节点默认是展开还是折叠【默认展开】
	    ,treeId:'id'//树形id字段名称
        ,treeUpId:'parentId'//树形父id字段名称
        ,treeShowName:opts.treeShowName
	    ,request: {
	        pageName: 'current' 
	        ,limitName: 'size' 
	      }
		,response:{
			countName: 'total',
			statusName:'status',
			statusCode:'200',
			dataName:'result'
		}
	    ,cols: opts.cols
	    ,parseData:function (res) {//数据加载后回调
            return res;
        }
        ,onClickRow:function (index, o) {
            console.log(index,o,"单击！");
        }
        ,onDblClickRow:function (index, o) {
            console.log(index,o,"双击");
        }
        ,onCheck:function (obj,checked,isAll) {//复选事件
            console.log(obj,checked,isAll);
        }
        ,onRadio:function (obj) {//单选事件
            console.log(obj);
        },
		done: function(res, curr, count){
	    	$("[data-field='id']").css('display','none');
	    }
	  }
	return options;
};


//表格工具栏
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

//表格树工具栏
function tableTreeOn(){
	 treeGrid.on('tool(demo)', function(obj){
		    var data = obj.data;
		    if(obj.event === 'detail'){
		    	function view(id, url) {
		    		var  id = obj.data.id;  
		    		var  url = urlss.viewUrl;
		                 url = url + "?id=" + id;
		            $.modal.view("查看"+urlss.title , url);
		        }
		        view();
		    } else if(obj.event === 'del'){
		    	function remove(id) {
		    		var  id = obj.data.id; 
	                $.modal.confirm("确定删除该条信息吗？", function () {
	                    var url = urlss.removeUrl;
	                    var data = {"id": id};
	                    $.operate.submit(url, "post", "json", data);
	                });
	            }
		    	remove();
		    } else if(obj.event === 'edit'){
		    	function edit(id) {
		    		var  id = obj.data.id;
	               	var url = urlss.editUrl.replace("{id}", "?id=" + id);;
	                $.modal.open("修改"+urlss.title, url);
	            }
		    	edit();
		    }
		});
}


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



/**
 * 加载部门
 */
function loadOrg(){
    var orgSetting = {
        view: {
            selectedMulti: false,
            showLine: true
        },
        check: {
            enable: false,
            chkboxType: {"Y": "ps", "N": "ps"}
        },
        data: {
            simpleData: {
                enable: true,
                idKey: "orgId",
                pIdKey: "parentId",
                rootPId: 0
            },
            key: {
                name: "orgName"
            }
        },
        callback: {
            onClick: function (event, treeId, treeNode) {
                var currentId = $('form').attr('id');
                var search = {};
                $.each($("#" + currentId).serializeArray(), function (i, field) {
                    search[field.name] = field.value;
                });
                search.orgId=treeNode.id;
                var orgId = search.orgId;
                table.reload('table', {
                	where: {
                		'orgId':orgId
                    }
                  });
            }
        }
    };
    $.post(contextPath + "org/list", function (data) {
        var orgTree = $.fn.zTree.init($("#orgTree"), orgSetting, data.result);
        //展开
        orgTree.expandAll(true);
    }, null, null, "正在加载，请稍后...");

};



$(function() {
	//iCheck
	$('input[type="checkbox"].minimal, input[type="radio"].minimal')
			.iCheck({
				checkboxClass : 'icheckbox_minimal-blue',
				radioClass : 'iradio_minimal-blue'
			}).on('ifChanged', function(event) {
				try {
					//进行验证
					$(event.target).valid();
				} catch (e) {
				}
			});
	//select2
	$('.select2').select2({
		width : "100%"
	}).on('change', function() {
		try {//进行验证
			$(this).valid();
		} catch (e) {
		}
	});
	//pace
	window.paceOptions = {
		ajax : {
			trackMethods : [ 'GET', 'POST' ]
		}
	};
});
