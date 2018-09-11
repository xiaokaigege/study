var battle_data=`
<body id="body">
<link href="css/index.css" rel="stylesheet" />
<div id="box">
    <!--阴影-->
    <div class="shadow" style="display: none;"></div>
    <!--敌人信息-->
    <div class="enemy">
        <div class="blood">
            <div class="brown">
                <span>角金鱼</span>
                <span>等级<i>4</i></span>
            </div>
            <div class="l_triangle"></div>
            <div class="m_div">
                <span>血量</span>
                <!--血量条-->
                <span>
                    <i>&nbsp;</i>
                </span>
                <span>455/455</span>
            </div>
            <div class="r_triangle"></div>
        </div>
    </div>
    <!--自己信息-->
    <div id="ene" class="enemy own">
        <div class="blood">
            <div class="brown">
                <span>妙蛙种子</span>
                <span>等级<i>4</i></span>
            </div>
            <div class="l_triangle"></div>
            <div class="m_div">
                <span>血量</span>
                <!--血量条-->
                <span>
                    <i>&nbsp;</i>
                </span>
                <span>455/455</span>
            </div>
            <div class="r_triangle"></div>
        </div>
    </div>
    
    <div id="own" class="ownimg">
        <img src="img/mmzz_by.png"/>
    </div>
    <div class="enemyimg">
        <img src="img/jjy.png"/>
    </div>
    
    <footer class="footer">
        <!--底下左边技能栏-->
        <div class="f_l">
            <div class="jn">
                <span>冲击</span>
                <div>
                    <i><img src = "img/wu.png" class="img-size1"></i>
                    <em>
                        <strong>一般</strong><br />
                        <strong>PP 35/35</strong>
                    </em>
                </div>
            </div>
            <div class="jn jn2">
                <span>嚎叫</span>
                <div>
                    <i><img src = "img/bian.png" class="img-size2"></i>
                    <em>
                        <strong>一般</strong><br />
                        <strong>PP 40/40</strong>
                    </em>
                </div>
            </div>
            <div class="jn jn3">
                <span>藤鞭</span>
                <div>
                    <i><img src = "img/wu.png" class="img-size1"></i>
                    <em>
                        <strong>草</strong><br />
                        <strong>PP 10/10</strong>
                    </em>
                </div>
            </div>
            <div class="jn jn4">
                <span>无</span>
                <div>
                    <i><img src = "img/bian.png" class="img-size2"></i>
                    <em>
                        <strong>草</strong><br />
                        <strong>PP 10/10</strong>
                    </em>
                </div>
            </div>
            <!--阴影-->
            <div class="f_l_bottom"></div>
        </div>
        <!--底下右边技能栏-->
        <div class="f_r">
            <div class="jn spr">
                <img src="img/1_03.png"/>
            </div>
            <div class="jn spr bag">
                <img src="img/1_05.png"/>
            </div>
            <div class="jn spr run">
                <img src="img/1_07.png"/>
            </div>
            <div class="f_r_bottom"></div>
        </div>
    </footer>
</div>
</body>
`;

var move_data=`
<body id="body" onselectstart="return false">
<link rel="stylesheet" href="css/move.css">
<div id = "menu">
    <div class="tap">回家</div>
    <div id = "SmMenuBtnFirst">
        <p>背包</p>
    </div>
    <div id = "SmMenuBtnSecond">
        <p>精灵</p>
    </div>
    <div id = "SmMenuBtnThird">
        <p>设置</p>
    </div>
    <div id = "border"></div>
</div>
<section id="container">
<section id="cell" >
</section>
</body>`;