window.onload = function(){
	
	
	var q = document.getElementById('q'); //问号
	var x = document.getElementById('x'); //关闭按钮
	var changeCover = document.querySelector('.change-cover')
	
	var changeParent = document.getElementById('change-parent'); //关闭按钮
	
	var changeBox1 = document.getElementById('change-box1');
	var changeimg1 = document.getElementById('img1');
	var changeimg2 = document.getElementById('img2');
	var changeimg3 = document.getElementById('img3');
	
	var changeBtn = document.querySelectorAll('.change-btns');
	
	//顶部问号的点击效果
	q.onmousedown = function(){
		this.style.width = '70px';
	}
	q.onmouseup = function(){
		this.style.width = '78px';
	}
	function a(ev){
		changeCover.style.display = 'block';	
		ev.cancelBubble=true;
	}
	q.addEventListener('click',a );
	document.onclick = function(){
		changeCover.style.display='none';
	}
	
	//关闭按钮
	x.onmousedown = function(){
		this.style.width = '70px';
	}
	x.onmouseup = function(){
		this.style.width = '78px';
		changeParent.style.display='none';
	}
	
	// 精灵上下浮动
	    var y1 = 150;       // 设置图片的起始点坐标
	    var y2 = 170;
	    var y3 = 190;
		var ySpeed=2;     //速度   
		var h = 170;   	//可移动距离
		
		
		floatimg();
		function floatimg(){
		    if(y1>h||y1<110 && y2>h||y2<110 && y3>h||y3<140){
		    	ySpeed=-ySpeed;
		    }
		    y1+=ySpeed;
		    y2+=ySpeed;
		    y3+=ySpeed;
		
		    changeimg1.style.top= y1 + "px";
		    changeimg2.style.top= y2 + "px";
		    changeimg3.style.top= y3 + "px";
		
		    setTimeout(floatimg,40);
		}
		
	
	for(var i=0; i<changeBtn.length; i++){
		changeBtn[i].onclick = function(){
			for(var j=0; j<changeBtn.length; j++){
				changeBtn[j].style.color = '#fff';
			}
			this.style.color = '#ffd46f';
		}
	}
	
}
