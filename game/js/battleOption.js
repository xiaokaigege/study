//工具栏按下操作	
var fl=document.querySelector(".f_l").children;
var fr=document.querySelector(".f_r").children;
var enemyImg=document.querySelector('.enemyimg').children[0];
var ownImg=document.querySelector('.ownimg').children[0];
var bloodbox=document.querySelectorAll('.m_div')[0].children[1].children[0];
var bloodNum=document.querySelectorAll('.m_div')[0].children[2];
var ownBloodbox=document.querySelectorAll('.m_div')[1].children[1].children[0];
var ownBloodNum=document.querySelectorAll('.m_div')[1].children[2];
var shadow=document.querySelector('.shadow');
var names=document.querySelectorAll('.brown');

var run=document.querySelector('.run');

var box=document.getElementById('box');
var onoff11=false;
var num_myblood=0;
var num_eneblood=0;
var batChange=0;
var nummm=0;

ooo=false;
//run
ownImg.parentNode.style.display='block';
run.onclick=function(){
	nummm=1;
	setTimeout(function(){
		window.location.hash='vic-1';
		window.onhashchange=function(){
			if(nummm){
				nummm=0;
				var vic2=document.createElement('script');
				vic2.src='js/vic_js.js';
				Battle.style.display='none';
				move_role.style.display='block';
				let ss=document.querySelectorAll('.sss');
				for(let i=0;i<ss.length;i++){
					ss[i].remove();
				}
				enemyImg.parentNode.style.display='none';
				shadow.style.display='none';
				onoffon=false;
				ooo=true;
				// ownBloodbox.style.width='200px';
				bloodbox.style.width='200px';
				bloodbox.style.background='';
				ownBloodbox.style.width='200px';
				ownBloodbox.style.background='';
				blood1=455+100*(rivalSide.gui.LV-4);
				clearInterval(time_color);
				clearInterval(time_color1);
			}
			
		}
	},2500);

	// clearTimeout(timer2);
}


//使出技能
var skill=document.createElement('img');
skill.style.position = 'absolute';
// enemyImg.parentNode.style.position = 'absolute';
var strr=window.location.hash;
var strr1=strr.split('#');
var strr2=strr1[1];
renderRole('pkq',strr2);
// console.log(fn1);
// fn1('pkq'); //己方宝贝上下移的函数
//切换数据调整：
function renderRole(self,enemy){
	console.log(rivalSide,enemy)
	ownImg.src=ownSide[self].role;//自己宝贝
	ownImg.parentNode.style.top=ownSide[self].top;
	ownImg.parentNode.style.left=ownSide[self].left;//宝贝位置
	ownImg.style.width=ownSide[self].width+'px';
	ownImg.style.height=ownSide[self].height+'px';//我宝大小
	enemyImg.parentNode.style.top=rivalSide[enemy].top;
	enemyImg.parentNode.style.left=rivalSide[enemy].left;//敌宝位置
	enemyImg.style.width=rivalSide[enemy].width+'px';
	enemyImg.style.height=rivalSide[enemy].height+'px';
	enemyImg.src=rivalSide[enemy].role//敌人宝贝
	box.style.backgroundImage='url('+rivalSide[enemy].bcg+')';//背景
	names[0].children[0].innerText=rivalSide[enemy].name;//敌人名字
	names[1].children[0].innerText=ownSide[self].name;//自己名字
	names[0].children[1].children[0].innerText=rivalSide[enemy].LV;//敌人等级
	names[1].children[1].children[0].innerText=ownSide[self].LV;//自己等级
	bloodNum.innerText=(455+100*(rivalSide[enemy].LV-4))+'/'+(455+100*(rivalSide[enemy].LV-4));//敌人计算血量
	ownBloodNum.innerText=(455+100*(ownSide[self].LV-4))+'/'+(455+100*(ownSide[self].LV-4));//自己计算血量





var body=document.querySelector('body');

//人物及宝贝出现
var enemyRole=document.createElement('img');
enemyRole.src=rivalSide[enemy].eneRole;
enemyRole.width='210';
enemyRole.style.position = 'absolute';
enemyRole.style.top='20px';
enemyRole.style.left='650px';
body.appendChild(enemyRole);

//点击对话框
let timer_ene=null;
dialogBox.onmouseup=function(){
	clearTimeout(timer_ene);
	dialogBox.remove();//移掉对话框  
	move1();
}
begin_1st();
function begin_1st(){
	timer_ene=setTimeout(function(){
		dialogBox.remove();//移掉对话框
		move1();
	},10000)		
};


function move1(){
	move({
		obj:enemyRole,
		attrs:{
			left:1400
		},
		cb:function(){
			enemyRole.remove();
			enemyImg.parentNode.style.display='block';
			//缺少人物和敌方精灵之间的特效
			enemyImg.src='img/spark.png';
			spa(enemyImg.parentNode,60,function(){
//				enemyImg.src='img/jjy.png';
				//敌人头像
				enemyImg.src=rivalSide[enemy].role;
				shadow.style.display='block';
				enemyImg.parentNode.style.display='block';
				enemyImg.parentNode.style.transform='scale(0.3)';
				setTimeout(function(){		
					enemyImg.parentNode.style.transition='.5s';
					enemyImg.parentNode.style.transform='scale(1)';
					onoff=true;
				},200)
			})
		},
		d:1200,
	    fx:'linear'
	})
}





var divsl=Array.from(fl);
divsl.forEach((e,i)=>{
	e.onmouseover=function(){
		e.style.transition='0.5s';
		e.style.transform='scale(1.06)';
		//按下
		var span=e.children[0];
		e.onmousedown=function(){
			span.style.transform='scale(0.9)';
		}
		e.onmouseup=function(){
			if(!onoff) return
			span.style.transform='scale(1.06)';

			onoff=false;
			var timer2=null;
			
			//我打对手
				if(i==3){
					onoff=true;
					return;
				}

				batt(i);
				attack_render(i,bloodNum,bloodbox,num_eneblood);
				//判断血量是否为0
				var judge=parseInt(bloodbox.style.width);
				if(judge<=0){
					nummm=1;
					spa(enemyImg.parentNode,220);
					shadow.style.display='none';
					ownSide[self].LV++; //数据等级++
					console.log(ownSide[self])
					setTimeout(function(){
						window.location.hash='vic-1';
						window.onhashchange=function(){
							if(nummm){
								nummm=0;
								var vic2=document.createElement('script');
								vic2.src='js/vic_js.js';
								vic2.setAttribute('class','vvv')
								Battle.style.display='none';
								victory_h.style.display='block';

								// var vic1=document.createElement('script');
								// vic1.src='js/vic_js.js';
								// vic1.setAttribute('class','vvv');
								// victory_h.appendChild=vic1;
								let ss=document.querySelectorAll('.sss');
								for(let i=0;i<ss.length;i++){
									ss[i].remove();
								}
								enemyImg.parentNode.style.display='none';
								shadow.style.display='none';
								onoffon=false;
								ooo=true;
								// ownBloodbox.style.width='200px';
								bloodbox.style.width='200px';
								bloodbox.style.background='';
								ownBloodbox.style.width='200px';
								ownBloodbox.style.background='';
								blood1=455+100*(rivalSide.gui.LV-4);
								clearInterval(time_color);
								setTimeout(() => {
									clearInterval(time_color1);
								}, 200);
								
							}
							
						}
					},2500);
				}
	
			timer2=setTimeout(function(){
				if(judge<=0){
					return;
				}
			//对手打我；
				ownBatt();
				attack_render1(2,ownBloodNum,ownBloodbox,num_myblood);
				var judge1=parseInt(ownBloodbox.style.width);
				if(judge1<=0){
					nummm=1;
					spa(ownImg.parentNode,200);

					setTimeout(function(){
						window.location.hash='vic-1';
						window.onhashchange=function(){
							if(nummm){
								nummm=0;
								var vic2=document.createElement('script');
								vic2.src='js/vic_js.js';
								Battle.style.display='none';
								move_role.style.display='block';
								let ss=document.querySelectorAll('.sss');
								for(let i=0;i<ss.length;i++){
									ss[i].remove();
								}
								enemyImg.parentNode.style.display='none';
								shadow.style.display='none';
								onoffon=false;
								ooo=true;
								// ownBloodbox.style.width='200px';
								bloodbox.style.width='200px';
								bloodbox.style.background='';
								ownBloodbox.style.width='200px';
								ownBloodbox.style.background='';
								blood1=455+100*(rivalSide.gui.LV-4);
								clearInterval(time_color);
								clearInterval(time_color1);
							}
							
						}
					},2500);

					clearTimeout(timer2);
				}
			},1800);	
		}
	}
	e.onmouseout=function(){
		e.style.transform='scale(1)';
	}
})

}

var divsr=Array.from(fr);
divsr.forEach((e,i)=>{
	e.onmouseover=function(){
		e.style.transition='0.5s';
		e.style.transform='scale(0.94)';
		//按下
		var img=e.children[0];
		e.onmousedown=function(){
			img.style.transform='scale(0.9)';
		}
		e.onmouseup=function(){
			img.style.transform='scale(1)';
		}
	}
	e.onmouseout=function(){
		e.style.transform='scale(1)';
	}
})


//对手受到攻击
function batt(i){
	skill.src=arr_ene[i].pict;
	skill.style.top=arr_ene[i].top;
	skill.style.left=arr_ene[i].left;
	skill.width=arr_ene[i].width;
	body.appendChild(skill);
	enemyImg.style.transition='0.2s';
	enemyImg.style.transform='scale(0.7)';
	setTimeout(function(){
		enemyImg.style.transform='scale(1)';
		//技能延迟消失
		setTimeout(function(){
			skill.remove();
			onoff=true;
		},1100)
	//这里判断一下血量，如果血没了，img闪几下消失	
	},100);	
}

//自己受到攻击
function ownBatt(){
	skill.src=arr_own[2].pict;
	skill.style.top=arr_own[2].top;
	skill.style.left=arr_own[2].left;
	skill.width=arr_own[2].width;
	body.appendChild(skill);
	ownImg.style.transition='0.2s';
	ownImg.style.transform='scale(0.8)';
	ownImg.parentNode.style.top='308px';
	//振动
	bong();
	setTimeout(function(){
		ownImg.style.transform='scale(1)';
		ownImg.parentNode.style.top='';
		//技能延迟消失
		setTimeout(function(){
			skill.remove();
			// onoff=true;
		},1100)
	//这里判断一下血量，如果血没了，img闪几下消失	
	},100);
}

//闪烁函数
function spa(obj,seconds,callback){
	var timer1=null;
	var num=0;
	timer1=setInterval(function(){
		num++;
		if(num%2){
			obj.style.display='none';
		}else{
			obj.style.display='block';
		};
		if(num>6){
			clearInterval(timer1);
			callback&&callback();
		}
	},seconds)
}
