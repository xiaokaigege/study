var dialogBox=document.createElement('p');
dialogBox.style.fontSize = `55px`
dialogBox.style.textAlign = "center     "
dialogBox.className='dia';
var body=document.querySelector('body');
body.appendChild(dialogBox);
var str_dia='いっさいがわたしを御身がもとへみちびく';
var len=0;
var timer_dia=null;
timer_dia=setInterval(function(){
    if(len>=str_dia.length){
        clearInterval(timer_dia);
        return;
    }
    dialogBox.innerText+=str_dia[len];
    len++;
},80)
