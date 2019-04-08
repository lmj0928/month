
require.config({
	paths:{
		"mui":"libs/mui.min"
	}
})

require(["mui"],function(mui){
// 	var uid=localStorage.getItem('id');
// 	console.log(uid)
	function init(){
		// getUser()
		insert()
	}
	
// 	function getUser(){
// 		mui.ajax('/api/getUser',{
// 			data:{
// 				id:uid
// 			},
// 			dataType:'json',//服务器返回json格式数据
// 			type:'get',//HTTP请求类型
// 			timeout:10000,//超时时间设置为10秒；
// 			success:function(res){
// 				var str='';
// 				res.data.map(function(item){
// 					str+=`
// 					<form class="mui-input-group">
// 					    <div class="mui-input-row">
// 					    <input type="text" class="mui-input-clear" placeholder="${item.name}">
// 					    </div>
// 						 <div class="mui-input-row">
// 						<input type="text" class="mui-input-clear" placeholder="${item.tel}">
// 						</div>
// 						 <div class="mui-input-row">
// 						<input type="text" class="mui-input-clear" placeholder="${item.address}">
// 						</div>
// 					</form>
// 					`
// 				})
// 				document.querySelector('.mui-input-group').innerHTML=str;
// 				insert()
// 			}
// 		});
// 	}  //通过id传值
	function insert(){
			document.querySelector('.finish').addEventListener('tap',function(){
				var allinput=document.querySelectorAll('.mui-input-clear')
				mui.ajax('/api/addData',{
						  	data:{
								name:allinput[0].value || allinput[0].placeholder,
								tel:allinput[1].value || allinput[1].placeholder,
								address:allinput[2].value || allinput[2].placeholder
						  	},
						  	dataType:'json',//服务器返回json格式数据
						  	type:'get',//HTTP请求类型
						  	timeout:10000,//超时时间设置为10秒；
						  	success:function(res){
						  		mui.alert(res.msg,function (e) {
										  window.location.href="../index.html"
						  		},'div')
						  	}
						  });
			})
		} //增加
	
	init()
})
