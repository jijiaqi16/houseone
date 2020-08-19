function init(){
	var num = document.getElementById("num");
	num.value=0;
	num.disabled="disabled";
	// var n1 = document.getElementById("n1");
	// n1.onclick=function(){
	// 	alert("123");
	// }
	var oButton=document.getElementsByTagName("input");
	var btn_num1;
	var fh;
	for (var i = 0; i < oButton.length; i++) {
		oButton[i].onclick=function(){
			if(isNumber(this.value))
			{
				/*the easiest way to delete zero*/
				// num.value=(num.value+this.value)*1;
				if (isNull(num.value)) 
				{
					num.value=this.value;					
				}
				else
				{
					num.value+=this.value;
				}
			}
			else
			{
				var btn_num=this.value;
				switch(btn_num)
				{
					case "+":
						btn_num1=num.value*1;
						num.value=0;
						fh="+";
						break;
					case "-":
						btn_num1=num.value*1;
						num.value=0;
						fh="-";
						break;
					case "*":
						btn_num1=num.value*1;
						num.value=0;
						fh="*";
						break;
					case "/":
						btn_num1=num.value*1;
						num.value=0;
						fh="/";
						break;
					case ".":
						num.value=dec_number(num.value);
						break;
					case "c":
						num.value="0";
						break;
					case "←":
						num.value=back(num.value);
						break;
					case "+/-":
						// num.value*=-1;
						num.value=sign(num.value);
						break;
					case "=":
					switch(fh)
					{
						case "+":
							num.value=btn_num1*1+num.value*1;
							break;
						case "-":
							num.value=btn_num1*1-num.value*1;
							break;
						case "*":
							num.value=btn_num1*1*num.value*1;
							break;
						case "/":
						/*the condition divisor is 0*/
							if (num.value==0) 
							{
								alert("cannot be 0");
								num.value=0;
							}
							else
							{
								num.value=btn_num1*1/num.value*1;
							}						
							break;
					}
					break;
				}
				}
			}
		}

	}

function isNumber(n)
{
		return !isNaN(n);
}

/*text is empty or zero*/
function isNull(n)
{
	if (n=="0" || n.length==0) 
	{
		return true;
	}
	else
	{
		return false;
	}
}

function dec_number(n){
	if(n.indexOf(".")==-1)
	{
		n=n+".";
	}
	return n;
}

/*←*/
function back(n)
{
	n=n.substr(0,n.length-1);
	if(isNull(n))
	{
		n=0;
	}
	return n;
}

/*+-*/
function sign(n)
{
	if(n.indexOf("-")==-1)
	{
		n="-"+n;
	}
	else
	{
		n=n.substr(1,n.length);
	}
	return n;
}