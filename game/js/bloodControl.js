var enemyBl=document.getElementById('ene');
var ownImg=document.querySelector('.ownimg').children[0];
let onoffon11=true;
		var num=1;
		console.log(enemyBl)
//血条上下移
console.log(move)
	if(onoffon11){
		fn();
	}
		
		function fn(){
			move({
				obj:enemyBl,
				attrs:{
					top:400+num*8
				},
				cb:function(){
					num=num*(-1)
					fn()
				},
				d:700,
	            fx:'linear'
			})
		};
//精灵上下移
		// fn1();
console.log(ownImg)
		function fn1(self){
			move({
				obj:ownImg.parentNode,
				attrs:{
					top:parseInt(ownSide[self].top)-num*8
				},
				cb:function(){
					fn1(self)
				},
				d:700,
	            fx:'linear'
			})
		};