$(function(){var a={modalName:"部门",url:contextPath+"org/list",createUrl:contextPath+"org/form{id}",updateUrl:contextPath+"org/form{id}",removeUrl:contextPath+"org/removeById",batRemoveUrl:contextPath+"org/removeByIds",exportUrl:contextPath+"org/export",idField:"id",parentIdField:"parentId",rootParentId:"0",treeShowField:"orgName",showToggle:"false",columns:[{field:"ck",checkbox:true},{field:"id",visible:false},{field:"orgName",title:"机构名称",align:"left",formatter:$.table.view},{field:"orgCode",title:"机构编码",align:"left"},{field:"orgTypeName",title:"机构类型",align:"left"},{field:"gradeName",title:"机构级别",align:"left"},{field:"principal",title:"负责人",visible:false,sortable:false,width:"auto",align:"left"},{field:"telephone",title:"电话",visible:false,sortable:false,width:"auto",align:"left"},{field:"useableName",title:"是否可用",width:"auto",align:"left"},{title:"操作",width:50,align:"center",visible:true,formatter:function(c,e,b){var d=[];d.push('<div class="btn-group"><button type="button" class="btn ibtn-primary btn-xs dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-cog"></i>&nbsp;<span class="fa fa-chevron-down"></span></button><ul class="dropdown-menu" role="menu"><li><a href="#" onclick="$.operate.view(\''+e.id+'\',\'\')"><i class="fa fa-search-plus"></i>查看</a></li><li><a href="#" onclick="$.operate.edit(\''+e.id+'\')"><i class="fa fa-edit"></i>修改</a></li><li><a href="#" onclick="$.operate.remove(\''+e.id+'\')"><i class="fa fa-trash"></i>删除</a></li><li><a href="#" onclick="add(\''+e.id+'\')"><i class="fa fa-bars"></i>添加下级</a></li></ul></div>');return d.join("")}}]};$.treeTable.init(a)});function add(a){$.modal.open("添加"+$.table._option.modalName,$.table._option.createUrl.replace("{id}","?parentId="+a))};