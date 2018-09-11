var LV=4;//关联数据的等级
var blood1=455+100*(rivalSide.gui.LV-4);//关联figure的血量 对手的血
var blood2=455+100*(ownSide.pkq.LV-4);//我的血
//blood=blood+100*(LV-4);    //总血量
// var num5=0;

var data_attack={
    miao:[350,320,300]
}


let time_color=null;
let time_color1=null;

//打敌人 敌人掉血
function attack_render(index,obj1,obj2,num5){
	let num_color=true;
	// let time_color=null;
    var attack=LV*0.4+2;
    var defense=LV*0.4+1.5;
    var reduce=Math.floor(data_attack.miao[index]*attack/defense);
    num5=blood1-reduce;
    if(num5<=0){
        num5=0;
        clearInterval(time_color);
        clearInterval(time_color1);
    }
    var str1=num5+'/'+(455+100*(rivalSide.gui.LV-4));
    obj1.innerText=str1;
    obj2.style.transition='0.8s';
    obj2.style.width=Math.floor((num5/blood1)*200)+'px';
    if((num5/blood2)<0.4){
    	
    	time_color=setInterval(function(){
    		if(num_color){
    			obj2.style.background='red';
    		}else{
    			obj2.style.background='none'
    		}
    		num_color=!num_color;
    	},500);
    }
    blood1=num5;
}

//敌人打我只有blood不一样  自己掉血
function attack_render1(index,obj1,obj2){
	let num_color=true;
	
    var attack=LV*0.4+2;
    var defense=LV*0.4+1.5;
    var reduce=Math.floor(data_attack.miao[index]*attack/defense);
    num5=blood2-reduce;
    if(num5<=0){
        num5=0;
        clearInterval(time_color1);
        clearInterval(time_color);
    }
    var str1=num5+'/'+(455+100*(ownSide.pkq.LV-4));
    obj1.innerText=str1;
    obj2.style.transition='0.8s';
    obj2.style.width=Math.floor((num5/blood2)*200)+'px';
    if((num5/blood2)<0.4){
    	time_color1=setInterval(function(){
    		if(num_color){
    			obj2.style.background='red';
    		}else{
    			obj2.style.background='none';
    		}
    		num_color=!num_color;
    	},500);
    }
    blood2=num5;
}