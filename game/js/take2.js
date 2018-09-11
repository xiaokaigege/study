//bag();
var nnn = 1;

function bag(){

console.log(call[call.length-1]);
let callCopy = Array.from(call[call.length-1]);


hah(callCopy);

function hah(bagData){
let bagDatail = document.querySelectorAll('#bagDatail')[0];
console.log(bagData);

//渲染数据
bagConRender(bagData);
function bagConRender(bagData){
	console.log(bagData.length);
	let goodUl = document.querySelectorAll('.goodUl')[0];
	console.log(goodUl);
	
	for(let i = 0; i<bagData.length;i++){
		goodUl.innerHTML += `
							<li class="goods">
								<i><img width="61" src="${bagData[i].img}"></i>
								<div class="zb">
									<span>${bagData[i].name}</span><br />
									<em>${bagData[i].text}</em>
								</div>
								<div class="take">使用</div>
								<p>数量:${nnn}</p>
							</li>
	
							`;
//		let sss = Array.from(goodUl.children);
////	console.log(sss);
//		
	}
	let ss = Array.from(goodUl.children);
//	console.log(ss);
//	console.log(ss[0].children[1].children[0].innerText);
for(let m =0;m<ss.length;m++){
	for(let k =m+1;k<ss.length;k++){
		if(ss[m].children[1].children[0].innerText===ss[k].children[1].children[0].innerText){
			ss[k].remove();
//			
//			nnn+=1;
			let zz = ss[m].lastElementChild.innerText.substring(3)*1;
			console.log(zz);
			ss[m].lastElementChild.innerText = '数量:'+(zz+1);
		}
	}
	}
}



//弹框显示
//let btn = document.querySelectorAll('button')[0];
//btn.onclick = function(){
//	bagDatail.style.display = 'block';
//}







let bcrName = document.querySelectorAll('.bcr_name')[0];
let bclList = document.querySelectorAll('.bcl_list')[0];
let goodUl1 = document.querySelectorAll('.goodUl')[0];
let ss1 = Array.from(goodUl1.children);
//点击使用
//console.log(goodUl1)
shiyong(ss1);
function shiyong(hh){
	console.log(hh);
	let takeBtns = document.getElementsByClassName('take');
//	console.log(takeBtns);
	for(let i = 0;i<takeBtns.length;i++){
		takeBtns[i].onmousedown = function(){
			
			this.style.transform = 'scale(0.9)';
		}
		takeBtns[i].onmouseup = function(){
			this.style.transform = 'scale(1)';
			let num = this.nextElementSibling.innerText.substring(3)*1-1;//已经减1了
//			hh[i].n = num;
			console.log(i);
			console.log(hh);
			if(num==0){
				let del = ss1[i].children[1].children[0].innerText;
				for(let j = 0;j<ss1.length;j++){
					if(ss1[j].children[1].children[0].innerText==del){
						ss1.splice(j,1);
					}
				}
				this.parentNode.remove();
				shiyong(ss1);
//				let tt = bagUl.style.top;
//				console.log(parseFloat(tt));
//				bagUl.style.top = (tt-101)+'px';
//				console.log(bagUl.style.top);
			}
			this.nextElementSibling.innerText = '数量:' + num;
		}
		
	}
}


dj();



//ul拖拽
let bcrContent = document.querySelectorAll('.bcr_content')[0];
let bagUl = bcrContent.getElementsByTagName('ul')[0];
bagUl.onmousedown = function(ev){
	let disY = ev.pageY - bagUl.offsetTop;
//	console.log(disY)
	document.onmousemove = function(ev){
		let lis = bagUl.getElementsByTagName('li');
		let misY = ev.pageY;
		let h = misY-disY;
//		console.log(bagUl.clientHeight)
		if(h>0 || bagUl.clientHeight<=404){
			bagUl.style.top = '0px';
		}else if(h<-(lis.length-4)*110){
//			console.log(1);
			setTimeout(fn(),900)
			function fn(){
				bagUl.style.transition = '.2s';
				bagUl.style.top = -(lis.length-4)*110+'px';
			}
		}
		else{
			bagUl.style.top = misY-disY+'px';
		}
	}
	document.onmouseup = function(){
		document.onmousemove = document.onmouseup = null;
	}
	return false;
}
	



//搜索
let findInp = document.querySelectorAll('.find_inp')[0];
let findTxt = document.querySelectorAll('.find_txt')[0];
findTxt.onclick = function(){
//	console.log(bagData)
	let val = findInp.value;
	findInp.value = '';
	if(val){
		let wups = Array.from(bagUl.getElementsByTagName('li'));
		let wup = Array.from(bagUl.getElementsByTagName('span'));
		console.log(wup);
		wup.forEach((e,i)=>{
			if(e.innerText==val){
//				console.log(i);
				let pp = wup[i].parentNode.parentNode.lastElementChild.innerText;
				let eme = wup[i].nextElementSibling.nextElementSibling.innerText;
				console.log();
				bagUl.innerHTML = `
								<li class="goods">
									<i><img width="61" src="${e.parentNode.previousElementSibling.children[0].src}"></i>
									<div class="zb">
										<span>${val}</span><br />
										<em>${eme}</em>
									</div>
									<div class="take">使用</div>
									<p>${pp}</p>
								</li>
								`;
				bcrName.innerText = val;
//				shiyong(wup);
				let li = bagUl.getElementsByTagName('li')[0];
				let sBtn = li.getElementsByClassName('take')[0];
//				console.log(bagData)
				sBtn.onclick = function(){
//					console.log(bagData)
					let num2 = parseInt(this.nextElementSibling.innerText.substring(3));
//					console.log(num2);
					num2--;
					this.nextElementSibling.innerText = '数量:'+num2;
//					console.log(bagData)
					let name2 = this.previousElementSibling.getElementsByTagName('span')[0];
					let num3 = name2.innerText;
					for(let k = 0;k<ss1.length;k++){
						//能进来
//						console.log(bagData[k].name)
						if(ss1[k].children[1].children[0].innerText==num3){
//							bagData[k].goodNum = num2;
//							console.log(num2);
							if(num2==0){
//								bagData.splice(k,1);
//								console.log(bagData);
								li.remove();
							}
						}
					}
				}
				
			}
		})
		
	}
}

//点击全部
bclList.onclick = function(){
	//加载所有数据
	let goodUl = document.querySelectorAll('.goodUl')[0];
	goodUl.innerHTML = ''; 
	bcrName.innerText = '全 部';
//	console.log(bagData);
	bagConRender(bagData);
	shiyong(ss1);
}
}
}
function dj(){
	//点击×的时候
let bagClose = document.querySelectorAll('.bag-close')[0];
//bagClose.onmousedown = function(){
//	bagClose.style.transform = 'scale(0.8)';
//}
//bagClose.onmouseup = function(){
//	bagClose.style.transform = 'scale(1)';
//	bagDatail.style.display = 'none';
////	bagmodel.style.display = 'none';
//}
bagClose.onclick = function(){
	bagmodel.classList.add('allHidden');
	mapIndexQyk.style.display = 'block';
	mainMenuBgd.classList.remove('allHidden');

}
}


//function zcj(bagData,cc1){
//	
//	console.log(bagData);
//	let goodUl = document.querySelectorAll('.goodUl')[0];
//	let sss = Array.from(goodUl.children);
////	console.log(sss);
//console.log(sss[0].children[1].children[0].innerText);
//for(let i=0;i<bagData.length;i++){
//	for(let j = 0;j<sss.length;j++){
//		
//		if(sss[j].children[1].children[0].innerText==bagData[i].name){
//			console.log(1);
//			sss[j].lastElementChild.innerText = `数量:${cc1++}`;
//		}
//	}
//}
//}