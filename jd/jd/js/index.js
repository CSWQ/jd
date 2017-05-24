//地址的选择
var fixedc=document.getElementById('fixedc');
var fixed=fixedc.getElementsByClassName('fixed')[0];
var fixedT=document.getElementById('fixed-t');
fixedc.onmouseover=function(){
	fixedT.style.display='block';
	fixed.id='fixed-none';
}
fixedc.onmouseout=function(){
	fixedT.style.display='none';
	fixed.id='fixed-none1';
}

//我的京东
var ulObje1=document.getElementById('fr');
var mytObje=document.getElementById('myjd-top');//获取li
var myboObje=document.getElementById('myjd');//获取下面隐藏div
var mya=mytObje.getElementsByTagName('a')[0];

mytObje.onmouseover=function(){
	myboObje.style.display='block';//下面的div显示出来
	mya.className='myjd-a';
}
mytObje.onmouseout=function(){
	myboObje.style.display='none';
	mya.className='myjd-a1';
}

//客户服务
var serviceObje=document.getElementById('service');//获取li
var serboObje=document.getElementById('serbo');//获取下面隐藏div
var sea=serviceObje.getElementsByClassName('thr-a')[0];//获取li里面的a元素

serviceObje.onmouseover=function(){
	serboObje.style.display='block';//下面的div显示出来
	sea.className='myjd-a';
}
serviceObje.onmouseout=function(){
	serboObje.style.display='none';
	sea.className='';
}
//客户服务END

//网站导航
var webtObje=document.getElementById('webt');//获取li
var webObje=document.getElementById('web');//获取下面隐藏div
var wea=webtObje.getElementsByClassName('thr-a')[0];//获取li里面的a元素

webtObje.onmouseover=function(){
	webObje.style.display='block';//下面的div显示出来
	wea.className='myjd-a';
}
webtObje.onmouseout=function(){
	webObje.style.display='none';
	wea.className='';
}
//家用电器一栏
//获取ul元素
var cateObj=document.getElementsByClassName('cate-meun')[0];
//获取ul下面的li元素
var licase=cateObj.getElementsByClassName('li-cate-meun');
for(var i=0;i<licase.length;i++)
{	  //鼠标经过旁边的大框显示出来
	licase[i].onmouseover=function(){
		this.getElementsByClassName('case')[0].style.display='block';
	}
	//鼠标经过旁边的大框隐藏
	licase[i].onmouseout=function(){
		this.getElementsByClassName('case')[0].style.display='none';
	}
}
//大广告的轮播图
//获取名为photog的div
var photogObj=document.getElementById('photog');
//寻找名为lis的ul
var ulOb=photogObj.getElementsByClassName('lis')[0];
var liObje=ulOb.getElementsByTagName('li');//获取小球的li
var imgObje=photogObj.getElementsByTagName('img');//获取图片的img元素


var cObje=photogObj.getElementsByClassName('c');//获取两边箭头的div

var lit=liObje.length;//li的长度
var ct=cObje.length;//两边按钮的长度
var time=0;//定时器
var sum=0;//开关

//鼠标放上去小球变颜色
for(var i=0;i<lit;i++)
{
	liObje[i].index=i;
	liObje[i].onmouseover=function(){
		sum=this.index;
		for(var j=0;j<lit;j++){//清空小球和图片的class名		
			liObje[j].className='';	
			imgObje[j].className = '';		
		}
		this.className='on';//添加小球和图片的class名
		 imgObje[sum].className = 'shows';
	}
}
//鼠标经过定时器停止
	photogObj.onmouseover=function(){
		clearInterval(time);//停止定时器
		for(var k=0;k<ct;k++){
			cObje[k].style.display='block';
			}
		for(var m=0;m<ct;m++)
		{
			cObje[m].onclick=function(){
				if(this.id=='l-arrow')
				{ 
					sum--;
					if(sum<0)
					{
						sum=lit-1;
					}
					for(var j=0;j<lit;j++){//清空小球和图片的class名		
			liObje[j].className='';	
			imgObje[j].className = '';		
					}
				liObje[sum].className='on';//添加小球和图片的class名
		 		imgObje[sum].className = 'shows';
				}else{
					clock();
				}
			}
		}
		}
photogObj.onmouseout=function(){
	time=setInterval(function(){
	clock();
},2000)
	for(var k=0;k<ct;k++){
			cObje[k].style.display='none';
		}
}
//定时器
time=setInterval(function(){
	clock();
},2000)
//定时器函数
function clock(){
	sum++;
	if(sum==lit){
		sum=0;
	}
		for(var j=0;j<lit;j++){//清空小球和图片的class名
			liObje[j].className='';	
			imgObje[j].className = '';		
		}
		liObje[sum].className='on';//添加小球和图片的class名
		imgObje[sum].className = 'shows';
		
}
//大广告的轮播图END
//发现好货
/*var findBox=document.getElementsByClassName('findBox')[0];//获取最大div
var finditem=document.getElementsByClassName('find-item');//获取装图片的a元素
var imgObje1=findBox.getElementsByTagName('img');//获取图片的img元素
var finds=finditem.length;//获取a元素的长度
var sum=0;//下标变量开关
for(var i=0;i<finds;i++)

{		
	finditem[i].setAttribute('index',i);//给装图片的a元素下标
	finditem[i].onmouseover=function(){//鼠标经过图片移动
		var index=this.getAttribute('index');//装下标变量
		sum=index;//把下标对应给开关
	imgObje1[sum].id='find-remove';//给图片img元素一个id名（图标移动）
}
finditem[i].onmouseout=function(){//鼠标离开图片回复原位
	var index=this.getAttribute('index');
	sum=index;
	imgObje1[sum].id='';//清空图片img元素的id
}
}*/
//发现好货END
//品牌头条
/*var bhObje=document.getElementsByClassName('bhc');//获取装图片的div元素
var imgObje2=document.getElementsByClassName('bh-img');//获取img元素
var bhObjes=bhObje.length;//长度（多少个div元素的图片）
for(var j=0;j<bhObjes;j++)
{	bhObje[j].setAttribute('index',j);//给下标
	bhObje[j].onmouseover=function(){//鼠标经过图片移动
		var index=this.getAttribute('index');
		sum=index;
		imgObje2[sum].id='bhTo';
}
	bhObje[j].onmouseout=function(){//图片离开图片恢复原位
		var index=this.getAttribute('index');
		sum=index;
		imgObje2[sum].id='';//清空图片的id令其恢复原位
}
}*/
//品牌头条END

//领卷中心
/*var coupon=document.getElementsByClassName('coupon-top1');
var couimg=document.getElementsByClassName('couimg');
for(var i=0;i<couimg.length;i++)
{	
	coupon[i].setAttribute('index',i);
	coupon[i].onmouseover=function(){
		var index=this.getAttribute('index');
		sum=index;
		couimg[sum].id='couimg';
	}
	coupon[i].onmouseout=function(){
		var index=this.getAttribute('index');
		sum=index;
		couimg[sum].id='';
	}
}*/
//领卷中心END
//享品质
/*var entry=document.getElementsByClassName('entry-b');
var entryimg=document.getElementsByClassName('entryimg');
for(var i=0;i<entryimg.length;i++)
{	
	entry[i].setAttribute('index',i);
	entry[i].onmouseover=function(){
		var index=this.getAttribute('index');
		sum=index;
		entryimg[sum].id='entryimg';
	}
	entry[i].onmouseout=function(){
		var index=this.getAttribute('index');
		sum=index;
		entryimg[sum].id='';
	}
}

var entryT=document.getElementsByClassName('entry-t-y');
var entryTimg=document.getElementsByClassName('entryTimg');
for(var i=0;i<entryTimg.length;i++)
{	
	entryT[i].setAttribute('index',i);
	entryT[i].onmouseover=function(){
		var index=this.getAttribute('index');
		sum=index;
		entryTimg[sum].id='entryTimg';
	}
	entryT[i].onmouseout=function(){
		var index=this.getAttribute('index');
		sum=index;
		entryTimg[sum].id='';
	}
}*/
//享品质END
/*爱生活*/
//爱逛
/*var portal=document.getElementsByClassName('portal-right-ce-a1');
var portalimg=document.getElementsByClassName('portalimg');

for(var m=0;m<portalimg.length;m++)
{
	 portal[m].setAttribute('index',m);
	 portal[m].onmouseover=function(){
		
		var index=this.getAttribute('index');
		sum=index;
		portalimg[sum].id='portalimg';
	}
	portal[m].onmouseout=function(){
		var index=this.getAttribute('index');
		sum=index;
		portalimg[sum].id='';
	}
}
var portal2a=document.getElementsByClassName('portal2-a');
var portal2img=document.getElementsByClassName('portal2img');
for(var i=0;i<portal2img.length;i++)
{
	portal2a[i].setAttribute('index',i);
	
	portal2a[i].onmouseover=function(){
		var index=this.getAttribute('index');
		sum=index;
		portal2img[sum].id='portal2img';
	}
	portal2a[i].onmouseout=function(){
		var index=this.getAttribute('index');
		sum=index;
		portal2img[sum].id='';
	}
}*/
//第二层
/*var portalSecond=document.getElementsByClassName('portal-second');
var portalSecondimg=document.getElementsByClassName('portal-secondimg');
for(var i=0;i<portal2img.length;i++)
{
	portalSecond[i].setAttribute('index',i);
	portalSecond[i].onmouseover=function(){
		var index=this.getAttribute('index');
		sum=index;
		portalSecondimg[sum].id='portal-second';
	}
	portalSecond[i].onmouseout=function(){
		var index=this.getAttribute('index');
		sum=index;
		portalSecondimg[sum].id='';
	}
}*/
//第二层END
//爱逛END
/*爱生活END*/