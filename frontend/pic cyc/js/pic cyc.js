/*
1.use byId() make getId easy
2.changeImg() is used to display Index and hide others
3.slideImg() has three block timer/next,prev click/dots click to get Index then use changeImg
	timer use setInterval/clearInterval in onmouseout/over
	then menuitem onmouseout function is to control innerbox appear and menuitem color
	//pay attention to set/getAttribute which is to create index better than give id
	menu onmouseout/over ,submenu onmouseout is to control innerbox appear or disappear
*/



function byId(id) {
    return typeof(id) === "string" ? document.getElementById(id) : id;
}

var index = 0,
    timer = null;
pics = byId("banner").getElementsByTagName("div");
dots = byId("dots").getElementsByTagName("span");
prev = byId("prev");
next = byId("next");
len = pics.length;
menu =byId("menu-content")
menuitem = menu.getElementsByClassName("menu-item");
submenu = byId("submenu");
innerbox = submenu.getElementsByClassName("inner-box");

function slideImg() {
    var main = byId("main");
    main.onmouseover = function() {
        if (timer) {
            clearInterval(timer);
        }
    }
    main.onmouseout = function() {
        timer = setInterval(function() {
            index++;
            index %= len;
            changeImg();
        }, 3000);
    }
    for (var i = 0; i < len; i++) {
        dots[i].id = i;
        dots[i].onclick = function() {
            index = this.id;
            changeImg();
        }
    }
    next.onclick=function(){
    	index++;
    	index%=len;
    	changeImg();
    }

    prev.onclick=function(){
    	index--;
    	if(index<0) index=len-1;
    	changeImg();

    }

    for (var i = 0; i < menuitem.length; i++) {
    	menuitem[i].setAttribute("index-item",i);
    	menuitem[i].onmouseover=function(){
    		index = this.getAttribute("index-item");
    		submenu.className="submenu";
    		for (var j = 0; j <innerbox.length; j++) {
    			innerbox[j].style.display="none";
    			menuitem[j].style.background="none";
    		}
    		menuitem[index].style.background="rgba(0,0,0,0.1)";
    		innerbox[index].style.display="block";
    	}
    }

    menu.onmouseout=function(){
    	submenu.className="submenu hidden";
    }

    submenu.onmouseover=function(){
    	submenu.className="submenu";
    }

    submenu.onmouseout=function(){
    	submenu.className="submenu hidden";
    }
    main.onmouseout();
}

function changeImg() {
    for (var i = 0; i < len; i++) {
        pics[i].style.display = "none";
        dots[i].className = "";
    }
    pics[index].style.display = "block";
    dots[index].className = "active";
}
slideImg();