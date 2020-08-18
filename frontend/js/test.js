function fun1(){
	var logo = document.getElementById("logo");
	for (var i = 1; i <= 5; i++) {
		logo.options.add(new Option(i,i));
	}
}

function fun2(){
	var logo = document.getElementById("logo");
	var n = logo.value;
	var logoimage = document.getElementById("logoimg");
	logoimage.src = n+".jpg";
}

var flag=true;
function fun3(){
	var interest = document.getElementsByName("interest");
	var but1 = document.getElementById("but1");
	for (var i = 0; i < interest.length; i++) {
		interest[i].checked=flag;
	}
	if(flag){
		but1.value="全不选";
	}else{
		but1.value="全选";
	}
	flag=!flag;
}

function fun4(){
	var interest = document.getElementsByName("interest");
	for (var i = 0; i < interest.length; i++) {
		interest[i].checked=!interest[i].checked;
	}
}