require.config({
	paths:{
		"mui":"libs/mui.min"
	}
})

require(["mui"],function(mui){
	function init(){
		getData()
		deleted()
		add()
	}
	
	function getData(){
		mui.ajax('/api/getData',{
			dataType:'json',//服务器返回json格式数据
			type:'get',//HTTP请求类型
			timeout:10000,//超时时间设置为10秒；
			success:function(res){
				var str='';
				res.data.forEach(function(item){
					str+=`
					<ul class="list">
					    <li>
					        <p class="mz">${item.name}</p>
							<span class="telphone">${item.tel}</span>
							<p class="add">${item.address}</p>
							<button class="del" data-id="${item._id}">删除</button>
							<button class="update" data-id="${item._id}">修改</button>
					    </li>
					</ul>
					`
				})
				document.querySelector('.list').innerHTML=str;
			}
		});
	}
	
	function deleted(){
		mui('.list').on('tap','.update',function(){
		  let id=this.getAttribute('data-id');
		  console.log(id)
		  localStorage.setItem("id",id);
		  window.location.href="../update.html"
		}) 
		
		mui('.list').on('tap','.del',function(){
			var _this=this;
		  mui.ajax('/api/delete',{
		  	data:{
		  		id:_this.getAttribute('data-id')
		  	},
		  	dataType:'json',//服务器返回json格式数据
		  	type:'get',//HTTP请求类型
		  	timeout:10000,//超时时间设置为10秒；
		  	success:function(res){
		  		mui.confirm('确定要删除该地址吗','提示',['取消','确认'],function (e) {
		  			if(e.index){
						window.location.href="../index.html"
					}
		  		},'div')
		  	}
		  });
		}) 
	}  //删除
	
	function add(){
		document.querySelector('.btn').addEventListener('tap',function(){
			window.location.href="../insert.html"
		})
	}
	
	init()
})