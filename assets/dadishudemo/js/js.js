// JavaScript Document
function dian(){
	
	for(i=1;i<10;i++){//循环取出每个id
		var bg = document.getElementById('frame'+i);
		bg.onclick = function(){//没有地鼠的id点击事件
			var cuowu = document.getElementById("error");
			cuowu.innerHTML++;//失败数值加1
			if(cuowu.innerHTML=="10"){//判断如果等于3
				cuowu.innerHTML="0"
				var zonghe = document.getElementById("he");
				alert("你失败了"+"你一共打了"+zonghe.innerHTML+"个地鼠");
					clearTimeout(b);
				bg.style.background="url(img/keng.png)";	
				}
			}
		bg.style.background="url(img/keng.png)";
		}
	var ran =Math.floor( Math.random()*10+1);//获取0-9的随机整数
	if( ran=="10"){
		ran="9";

		}
	
	
	var bg = document.getElementById('frame'+ran);	
				bg.onclick=function(){//有地鼠的点击事件
			var zonghe = document.getElementById("he");
			bg.style.background="url(img/11.jpeg)";
			 zonghe.innerHTML++;
			 if(zonghe.innerHTML=="100"){
				 alert("恭喜你，大神!!!");
				clearTimeout(b);
				//bg.style.background="url(img/keng.png)";
				 }
			}
	bg.style.background="url(img/22.jpeg)";
	

	
	}
	

//定时器
window.onload = function times(){	

 b = setInterval("dian()",500);//1000为1秒钟
}

