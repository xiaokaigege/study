function chen(){

    let box1 = document.getElementById('box1');
    let shop_left = document.querySelector('.shop_left');
    let lis = shop_left.querySelectorAll('li');
    let shop_right = document.querySelector('.shop_right');
    let shade = document.querySelector('.shade');
    let content = document.querySelector('.content');
    let pop_close = document.querySelector('.pop_close');
    let drill = document.querySelector('.drill');
    let remind = document.querySelector('.remind');
    let cancel = document.querySelector('.cancel');
    let close = document.querySelector('.close');
    let hint = document.querySelector('.hint');
    let q_input = document.querySelectorAll('.moneyPower');
    var jb_property = q_input[2].innerText;
    var zs_property = q_input[1].innerText;
    var attr = [];
    var count = '';//数量
    console.log(call)

    let shlis = lis[0];
    fn(0);
    for(let i=0;i<lis.length;i++){
        lis[i].index = i;
        lis[i].onmousemove = function () {
            lis[shlis.index].className = '';
            lis[this.index].className = 'active';
            shlis = this;
        }

        lis[i].onclick = function () {
            fn(i);
            if(i==1){
                var str = '<ul class="gift_bag clearfix">';
                for(var j=0;j<data[i].commodity.length;j++){
                    str += `<li >
                        <img src="${data[i].commodity[j].img}" alt="">
                        <span index = "${data[i].commodity[j].id}">${data[i].commodity[j].name}</span>
                        <a href="javascript:;"></a>
                    </li>`;
                }
                str += '</ul>';
                shop_right.innerHTML = str;

                let gift_bag = document.querySelector('.gift_bag');
                gift_bag.onclick = function (ev) {
                    if(ev.target.tagName === 'A'){
                        var package = ev.target.parentNode.childNodes[3].innerText;
                        // console.log(ev.target.parentNode.childNodes[3])
                        drill.style.display = 'block';
                        for(var k=0;k<data[i].commodity.length;k++){
                            if(data[i].commodity[k].name==package){
                                remind.innerHTML = `购买${data[i].commodity[k].name}需要花费${data[i].commodity[k].price}钻石`;
                                // attr.shift(0);
                                attr.push(data[i].commodity[k]);
                                output_b(attr)
                            }
                        }
                    }

                };
                gift_bag.style.position = 'absolute';
                movetb(gift_bag,0,-510)
            }
            if(i==2){
                var ssr = '<ul class="jewel clearfix">';
                for(var j=0;j<data[i].jewel.length;j++){
                    ssr += `<li >
                        <span index = "${data[i].jewel[j].id}">${data[i].jewel[j].name}</span>
                        <div class="adaline">
                            <img src="${data[i].jewel[j].img}" alt="">
                        </div>
                        <i>${data[i].jewel[j].price}</i>
                    </li>`;

                }
                ssr += '</ul>';
                shop_right.innerHTML = ssr;
                let jewel = document.querySelector('.jewel');
                jewel.onclick = function (ev) {
                    if(ev.target.tagName === 'IMG'){
                        ff(i,data[i].jewel,ev.target);
                    }
                }
                jewel.style.position = 'absolute';
                movetb(jewel,0,-390)
            }
            if(i==3){
                var ssrr = '<ul class="jewel gold clearfix">';
                for(var j=0;j<data[i].gold.length;j++){
                    ssrr += `<li >
                        <span index = "${data[i].gold[j].id}">${data[i].gold[j].name}</span>
                        <div class="adaline">
                            <img src="${data[i].gold[j].img}" alt="">
                        </div>
                        <i>${data[i].gold[j].price}</i>
                    </li>`;
                }
                ssrr += '</ul>';
                shop_right.innerHTML = ssrr;
                let gold = document.querySelector('.gold');
                gold.onclick = function (ev) {
                    if(ev.target.tagName === 'IMG'){
                        ff(i,data[i].gold,ev.target);
                    }
                }
                gold.style.position = 'absolute';
                movetb(gold,0,-390)
            }

        } 
    };
    pop_close.onclick = function () {
        shade.style.display = 'none';
    };
    cancel.onclick = function () {
        drill.style.display = 'none';
    }

    let a=undefined;
    var buy = document.querySelector('.buy');
    // console.log(buy);
    var arr = [];

    /**************调出要用的数据****************/
    let confirm = document.querySelector('.confirm');
    output(attr)
    function output(attr){
        buy.onclick = function () {
            var univalence = this.parentNode.parentNode.children[1].children[1].children[2].innerText*1;
            // console.log(univalence);
            // count.slice(0,1);
            spou_amount.push(this.parentNode.children[0].value*univalence);
            // console.log(spou_amount)
            count = this.parentNode.children[0].value;//数量
            var zg = univalence*this.parentNode.children[0].value
            this.parentNode.children[0].value = 1;

            if(attr[0].id == 0){
                if(jb_property<zg){
                    hint.innerText = '对不起，你的金额不足，请充值';
                    hint.style.display = 'block';
                    setTimeout(function () {
                        hint.style.display = 'none';
                    },1500);
                }else{
                    hint.innerText = '购买成功';
                    hint.style.display = 'block';
                    setTimeout(function () {
                        hint.style.display = 'none';
                    },1500);
                    q_input[2].innerText = q_input[2].innerText - attr[0].price;
                }
            }
            if(attr[0].id == 1){
                if(zs_property<zg){
                    hint.innerText = '对不起，你的金额不足，请充值';
                    hint.style.display = 'block';
                    setTimeout(function () {
                        hint.style.display = 'none';
                    },1500);
                }else{
                    hint.innerText = '购买成功';
                    hint.style.display = 'block';
                    setTimeout(function () {
                        hint.style.display = 'none';
                    },1500);
                    q_input[1].innerText = q_input[1].innerText - attr[0].price;
                }
            }
            // console.log(attr[0].id);
            call.push(attr);

            shade.style.display = 'none';
        }
    }

    
    
    function output_b(attr){
        var current = attr.length-1;
        var zs_univalence = attr[current].price;
        confirm.onclick = function () {
            if(attr[0].id == 0){
                if(jb_property<zs_univalence){
                    hint.innerText = '对不起，你的金额不足，请充值';
                    hint.style.display = 'block';
                    setTimeout(function () {
                        hint.style.display = 'none';
                    },1500);
                }else{
                    hint.innerText = '购买成功';
                    hint.style.display = 'block';
                    setTimeout(function () {
                        hint.style.display = 'none';
                    },1500);
                    q_input[2].innerText = q_input[2].innerText - attr[0].price;
                }
            }
            if(attr[0].id == 1){
                if(zs_property<zs_univalence){
                    hint.innerText = '对不起，你的金额不足，请充值';
                    hint.style.display = 'block';
                    setTimeout(function () {
                        hint.style.display = 'none';
                    },1500);
                }else{
                    hint.innerText = '购买成功';
                    hint.style.display = 'block';
                    setTimeout(function () {
                        hint.style.display = 'none';
                    },1500);
                    q_input[1].innerText = q_input[1].innerText - attr[0].price;
                }
            }
            call.push(attr);
            drill.style.display = 'none';
        }
    }
    zoom(cancel);
    zoom(pop_close);
    zoom(buy);
    zoom(confirm);
    zoom(close);
    function zoom(close) {
        close.onmousedown = function () {
            close.style.transform = 'scale(0.8)';

        }
        close.onmouseup = function () {
            close.style.transform = 'scale(1)';
        }

    }
    close.onclick = function(){
        box1.style.display = 'none';
        mapIndexQyk.style.display = 'block';
        mainMenuBgd.classList.remove('allHidden');
        if(call.length!=0){
            bag();
            mainMenuBgd.classList.remove('allHidden');
        }

    }



    function fn(i) {
        if(i==0){
            shop_right.innerHTML = `<div class="pr_left">
                <div class="shop_map">
                    <img src="${ data[i].img}" alt="">
                </div>
                <div class="shop_details">
                    <div class="details_hade">
                        <h3>新品上架</h3>
                    </div>
                    <ul class="details_introduce clearfix">
                        
                    </ul>
                </div>
            </div>
            <div class="pr_right">
                <div class="arig_hade">
                    <h3>热销商品</h3>
                </div>
                <ul class="rig_commodity details_introduce">
                </ul>
            </div>`;
            let deta_intr = document.querySelector('.details_introduce');
            let rig_commodity = document.querySelector('.rig_commodity');
            var n = 30;

            moveAnim(deta_intr,0,-320);

            for(var j=0;j<data[i].commodity.length;j++) {
            	
                deta_intr.innerHTML += `<li >
                            <span index = "${data[i].commodity[j].id}">${data[i].commodity[j].name}</span>
                            <div class="adaline">
                                <img src="img/lea.png">
                            </div>
                            <i>${data[i].commodity[j].price}</i>
                        </li>`
            }
            for(var k=0;k<data[i].consumables.length;k++){
                rig_commodity.innerHTML += `<li >
                        <span index = "${data[i].consumables[k].id}">${data[i].consumables[k].name}</span>
                        <div class="adaline">
                            <img src="${data[i].consumables[k].img}" alt="">
                        </div>
                        <i>${data[i].consumables[k].price}</i>
                    </li>`
            };
            deta_intr.onclick = function (ev) {
                if(ev.target.tagName === 'IMG'){
                    ff(i,data[i].commodity,ev.target);
                }
            }
            rig_commodity.onclick = function (ev) {
                if(ev.target.tagName === 'IMG'){
                    ff(i,data[i].consumables,ev.target);
                }
            }
        }
    }


    function ff(i,obj,target) {
        var curr = target.parentNode.parentNode.childNodes[1].innerText;
        shade.style.display = 'block';
        for(var k=0;k<obj.length;k++){
            if(obj[k].name==curr){
                // console.log(data[i].commodity[k])
                content.innerHTML = `
                                 <div class="comm">
                                 <img src="${obj[k].img}" alt="">
                                 </div>
                                <div>
                                    <span>${obj[k].name}</span>
                                    <span>已拥有0件</span>
                                    <div class="money">${obj[k].price}</div>
                                    <p>${obj[k].text}</p>
                                </div>`
                // attr.shift(0);
                attr.push(obj[k]);
                output(attr);
                output_b(attr)
            }
        }
    }


    //左右方向拖拽
    function moveAnim(obj,toplimit,bottomlimit){
        obj.onmousedown = function(ev){
            var downX=ev.pageX;
            var stepTop=obj.offsetLeft;
            document.onmousemove = function(ev){
                var moveX=ev.pageX;
                var objTop=obj.offsetLeft;

                if(moveX>downX){
                    if(objTop>=toplimit){
                        document.onmouseup = function(){
                            document.onmousemove = document.onmousemove = null;
                            setTimeout(function(){
                                obj.style.left=toplimit+'px';
                            })
                        }
                    }
                }else{
                    // console.log(objTop)
                    if(objTop<=bottomlimit){
                        document.onmouseup = function(){
                            document.onmousemove = document.onmousemove = null;
                            setTimeout(function(){
                                obj.style.left=bottomlimit+'px';
                            })
                        }
                    }
                }
                obj.style.left=-(downX-moveX)+stepTop+'px';
                return false;
            }
            document.onmouseup = function(ev){
                document.onmousemove = document.onmousemove = null;
            }
        }
    }

    //上下拖拽
    function movetb(obj,toplimit,bottomlimit){
        obj.onmousedown = function(ev){
            var downY=ev.pageY;
            var stepTop=obj.offsetTop;
            document.onmousemove = function(ev){
                var moveY=ev.pageY;
                var objTop=obj.offsetTop;

                if(moveY>downY){
                    console.log(objTop)
                    if(objTop>=toplimit){
                        document.onmouseup = function(){
                            document.onmousemove = document.onmousemove = null;
                            setTimeout(function(){
                                obj.style.top=toplimit+'px';
                            })
                        }
                    }
                }else{
                    if(objTop<=bottomlimit){
                        document.onmouseup = function(){
                            document.onmousemove = document.onmousemove = null;
                            setTimeout(function(){
                                obj.style.top=bottomlimit+'px';
                            })
                        }
                    }
                }
                obj.style.top=-(downY-moveY)+stepTop+'px';
                return false;
            }
            document.onmouseup = function(ev){
                document.onmousemove = document.onmousemove = null;
            }
        }
    }

}