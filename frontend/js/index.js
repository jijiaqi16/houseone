function fun1(){
	var sheng=document.getElementById("sheng");
	var shi  =document.getElementById("shi");

	var shengarr = ["北京市","天津市","河北省","河南省"];
	for (var i = 0; i < shengarr.length; i++) {
		sheng.options.add(new Option(shengarr[i]));
	}

	var shiarr = ["朝阳区","西城区"];
	for (var i = 0; i < shiarr.length; i++) 
	{
		shi.options.add(new Option(shiarr[i]));
	}
	
}

function fun2(){
	var sheng=document.getElementById("sheng");
	var shi  =document.getElementById("shi");
	shi.options.length=0;
	if(!sheng.value.localeCompare("天津市")){
		var shiarr = ["西青区","武清区"];
		for (var i = 0; i < shiarr.length; i++) 
		{
			shi.options.add(new Option(shiarr[i]));
		}
	}else if(!sheng.value.localeCompare("河北省")){
		var shiarr = ["石家庄","邯郸市"];
		for (var i = 0; i < shiarr.length; i++) 
		{
			shi.options.add(new Option(shiarr[i]));
		}
	}else if(!sheng.value.localeCompare("河南省")){
		var shiarr = ["郑州市","开封市"];
		for (var i = 0; i < shiarr.length; i++) 
		{
			shi.options.add(new Option(shiarr[i]));
		}
	}
	else{
		var shiarr = ["朝阳区","西城区"];
		for (var i = 0; i < shiarr.length; i++) 
		{
			shi.options.add(new Option(shiarr[i]));
		}
	}
	

}