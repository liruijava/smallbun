$(function(){var a={url:contextPath+"dict/value/page",createUrl:contextPath+"dict/value/form?dictType="+$("#dictType").val(),updateUrl:contextPath+"dict/value/form/{id}",removeUrl:contextPath+"dict/value/removeById",batRemoveUrl:contextPath+"dict/value/removeByIds",exportUrl:contextPath+"dict/value/export",sortName:"gmtCreate",sortOrder:"desc",modalName:"字典",queryParams:b,search:false,showExport:false,showRefresh:true,showColumns:true,showToggle:true,columns:[{checkbox:true},{field:"id",visible:false},{field:"sysDictType.id",visible:false},{field:"sysDictType.typeName",title:"字典类型",formatter:viewDictType},{field:"dictLabel",title:"字典标签",formatter:$.table.view,sortable:true},{field:"dictValue",title:"字典键值",sortable:true},{field:"sort",title:"排序",visible:true,sortable:true},{field:"gmtModified",title:"更新时间",sortable:true},{title:"操作",align:"center",width:50,visible:true,formatter:function(d,f,c){var e=[];e.push('<div class="btn-group"><button type="button" class="btn ibtn-primary btn-xs dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-cog"></i>&nbsp;<span class="fa fa-chevron-down"></span></button><ul class="dropdown-menu" role="menu"><li><a href="#" onclick="$.operate.view(\''+f.id+'\',\'\')"><i class="fa fa-search-plus"></i>查看</a></li><li><a href="#" onclick="$.operate.edit(\''+f.id+'\')"><i class="fa fa-edit"></i>修改</a></li><li><a href="#" onclick="$.operate.remove(\''+f.id+'\')"><i class="fa fa-trash"></i>删除</a></li></ul></div>');return e.join("")}}]};$.table.init(a);function b(c){return{"sysDictType.id":$("#dictType").val(),pageSize:c.limit,pageNum:c.offset/c.limit+1,searchValue:c.search,orderByColumn:c.sort,isAsc:c.order}}});function viewDictType(b,d,a){var c=[];c.push('<a  href="#" onclick="$.operate.view(\''+d.sysDictType.id+"',contextPath +'dict/type/form')\">"+b+"</a> ");return c.join("")};