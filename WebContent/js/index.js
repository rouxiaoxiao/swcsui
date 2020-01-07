$(document).ready(function() {
	$('.datatable').dataTable({
		"bPaginate" : true, //翻页功能
		"bLengthChange" : false, //改变每页显示数据数量
		"bFilter" : false, //过滤功能
		"bSort" : true, //排序功能
		"bInfo" : true,//页脚信息
		"bAutoWidth" : true,//自动宽度
	//"sDom": '<"top"<"clear">>rt<"bottom"lip<"clear">>'
	});

	//            drawPointsChart('points-chart');
	//            drawDonutChart('donuts-chart');
	//            drawDonutChart('donuts-chart2');

	drawPieChart('pie-chart');
	drawPieChart('pie-chart2');
	var s1 = [ 815, 805, 800 ];
	ticks = [ '石质', '金属', '其他' ];
	drawBarchart('bar-chart', [ s1 ], ticks);
	var s2 = [ 815, 805, 800, 802, 809 ];
	ticks2 = [ '水迹', '局部锈蚀', '表面硬结物', '点腐蚀', '其他' ];
	drawBarchart('bar-chart2', [ s2 ], ticks2);
	var s3 = [ 815, 805, 800, 802, 809 ];
	ticks3 = [ '表面粉化脱落', '水锈结壳', '风化裂隙', '残缺', '其他' ];
	drawBarchart('bar-chart3', [ s3 ], ticks3);

	//            drawBubbleChart('bubble-chart');
	//            setSidebarHeight();
	initmap();
	setupDialogBox('dialog', 'opener');
	setupDialogBox('daibanlist', 'daiban');
	setupDialogBox('baojinglist', 'baojing');
	setupDialogBox('chulilist', 'chuli');

	initCzlx();

	/* $('#bhfl_select').multiselect({
	 header: true,
	 height: 175,
	 minWidth: 225,
	 classes: '',
	 checkAllText: '选中全部',
	 uncheckAllText: '取消全选',
	 noneSelectedText: '请勾选',
	 selectedText: '# 选中',
	 selectedList: 5,
	 show: null,
	 hide: null,
	 autoOpen: false,
	 multiple: true,
	 position: {},
	 appendTo: "body",
	 menuWidth:null
	 });
	 */
});
function initCzlx(){
	var zNodes =[
{ id:1, pId:0, name:'金属', open:true},
{ id:2, pId:0, name:'石质', open:true},
{ id:3, pId:0, name:'其他', open:true},
{ id:4, pId:1, name:'铜兽', open:false},
{ id:5, pId:1, name:'铜炉', open:false},
{ id:6, pId:1, name:'缸', open:false},
{ id:7, pId:1, name:'铜亭', open:false},
{ id:8, pId:1, name:'铜瓶', open:false},
{ id:9, pId:1, name:'其他', open:false},
{ id:10, pId:1, name:'铜路灯亭', open:false},
{ id:11, pId:1, name:'铜香亭', open:false},
{ id:12, pId:2, name:'石座', open:false},
{ id:13, pId:2, name:'水池', open:false},
{ id:14, pId:2, name:'其他', open:false},
{ id:15, pId:2, name:'石兽', open:false},
{ id:16, pId:3, name:'木匾', open:false},
{ id:17, pId:4, name:'铜镀金象', open:false},
{ id:18, pId:4, name:'铜镀金猊', open:false},
{ id:19, pId:4, name:'铜狮', open:true},
{ id:20, pId:4, name:'铜龟', open:true},
{ id:21, pId:4, name:'铜鹤', open:true},
{ id:22, pId:4, name:'铜鎏金狮', open:true},
{ id:23, pId:4, name:'铜镀金狮', open:true},
{ id:24, pId:4, name:'铜凤', open:true},
{ id:25, pId:4, name:'铜鹿', open:true},
{ id:26, pId:4, name:'铜龙', open:true},
{ id:27, pId:4, name:'铜鎏金麒麟', open:true},
{ id:28, pId:4, name:'铜马', open:true},
{ id:29, pId:5, name:'铜四足长方形炉', open:true},
{ id:30, pId:5, name:'铜鼎炉', open:true},
{ id:31, pId:5, name:'铜鎏金鼎炉', open:true},
{ id:32, pId:5, name:'铜三鹤炉', open:true},
{ id:33, pId:5, name:'铜炉', open:true},
{ id:34, pId:5, name:'铜三鹤带盖炉', open:true},
{ id:35, pId:5, name:'铜象足龙耳带盖炉', open:true},
{ id:36, pId:5, name:'铜熏炉', open:true},
{ id:37, pId:5, name:'铜鎏金炉', open:true},
{ id:38, pId:5, name:'铜炭炉', open:true},
{ id:39, pId:5, name:'铜瓶形炉', open:true},
{ id:40, pId:5, name:'铜八卦炉', open:true},
{ id:41, pId:5, name:'铜双耳炉', open:true},
{ id:42, pId:5, name:'铜双耳带盖炉', open:true},
{ id:43, pId:5, name:'铜象耳带盖炉', open:true},
{ id:44, pId:6, name:'铜海缸', open:true},
{ id:45, pId:6, name:'铜缸', open:true},
{ id:46, pId:6, name:'铜鎏金海缸', open:true},
{ id:47, pId:6, name:'钵形瓦缸', open:true},
{ id:48, pId:6, name:'铁海缸', open:true},
{ id:49, pId:7, name:'铜镀金旗纛亭', open:true},
{ id:50, pId:7, name:'铜社稷亭', open:true},
{ id:51, pId:7, name:'铜江山亭', open:true},
{ id:52, pId:8, name:'铜瓶', open:true},
{ id:53, pId:8, name:'铜双耳瓶', open:true},
{ id:54, pId:9, name:'铜嘉量', open:true},
{ id:55, pId:9, name:'铜鼎', open:true},
{ id:56, pId:9, name:'铜月晷', open:true},
{ id:57, pId:12, name:'满洲祭天神杆', open:true},
{ id:58, pId:12, name:'雕龙石座', open:true},
{ id:59, pId:12, name:'雕花石座', open:true},
{ id:60, pId:12, name:'石雕灯座', open:true},
{ id:61, pId:12, name:'石灯座', open:true},
{ id:62, pId:12, name:'汉白玉海水江崖纹石座', open:true},
{ id:63, pId:12, name:'香炉石座', open:true},
{ id:64, pId:12, name:'石盆石座', open:true},
{ id:65, pId:12, name:'石座', open:true},
{ id:66, pId:12, name:'旗杆石座', open:true},
{ id:67, pId:12, name:'莲花形石座', open:true},
{ id:68, pId:13, name:'铜水池', open:true},
{ id:69, pId:13, name:'石水池', open:true},
{ id:70, pId:13, name:'莲花形石水池', open:true},
{ id:71, pId:14, name:'石嘉量亭', open:true},
{ id:72, pId:14, name:'石井盖', open:true},
{ id:73, pId:14, name:'石盆', open:true},
{ id:74, pId:14, name:'日晷', open:true},
{ id:75, pId:14, name:'石亭', open:true},
{ id:76, pId:14, name:'插屏', open:true},
{ id:77, pId:14, name:'水晶石', open:true},
{ id:78, pId:14, name:'花池', open:true},
{ id:79, pId:14, name:'玉钵', open:true},
{ id:80, pId:14, name:'碧玉象', open:true},
{ id:81, pId:14, name:'石匣', open:true},
{ id:82, pId:14, name:'下马石', open:true},
{ id:83, pId:15, name:'玉兽', open:true},
{ id:84, pId:15, name:'玉马', open:true},
{ id:85, pId:15, name:'石狮', open:true}
	             ];
	var code;
	var setting = {
			check: {
				enable: true,
				chkStyle: "checkbox",
				chkboxType: { "Y": "p", "N": "s" }
			},
			data: {
				simpleData: {
					enable: true
				}
			},
			callback: {
				//onClick: zTreeOnClick
			}
		};

	$.fn.zTree.init($("#tree_czlx"), setting, zNodes);
}
function initmap() {
	var map = new BMap.Map("container");
	// 创建地图实例
	var point = new BMap.Point(116.404, 39.924);
	// 创建点坐标
	map.centerAndZoom(point, 17);
	// 初始化地图，设置中心点坐标和地图级别
}
function expend(divname) {
	if ($("#" + divname).height() == 1) {
		$("#" + divname).height("auto");
	} else {
		$("#" + divname).height("1px");
	}
}
function showExpendSelect() {

}