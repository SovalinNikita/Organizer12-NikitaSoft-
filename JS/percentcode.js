if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent))
{
document.write('<link  rel="stylesheet" href="percentmobilestyle.css">');
}

else
{
document.write('<link  rel="stylesheet" href="percentcomputerstyle.css">');
}

var v = 0, oned = 0, twod = 0, round;

function writescript(w)
	{
	if (v == 0 && first.value == 0 && oned == 0)
		{
		first.value = w;
		}
	else if (v == 0 && first.value != 0 || v == 0 && oned == 1)
		{
		first.value = first.value + w;
		}
	else if (v == 1 && third.value == 0 && twod == 0)
		{
		third.value = w;
		}
	else if (v == 1 && third.value != 0 || v == 1 && twod == 1)
		{
		third.value = third.value + w;
		}
	}
function writesymbolsscript(s)
	{
	if (third.value == "0")
		{
		second.value = s;
		v = 1;
		}
	else if (second.value == "+")
		{
		round = parseFloat(first.value) + parseFloat(third.value);
		first.value = parseFloat(round.toFixed(2));
		v = 1;
		second.value = s;
		third.value = 0;
		oned = 0;
		twod = 0;
		}

	else if (second.value == "-")
		{
		round = parseFloat(first.value) - parseFloat(third.value);
		first.value = parseFloat(round.toFixed(2));
		v = 1;
		second.value = s;
		third.value = 0;
		oned = 0;
		twod = 0;
		}

	else if (second.value == "X")
		{
		round = parseFloat(first.value) * parseFloat(third.value);
		first.value = parseFloat(round.toFixed(2));
		v = 1;
		second.value = s;
		third.value = 0;
		oned = 0;
		twod = 0;
		}

	else if (second.value == "/")
		{
		round = parseFloat(first.value) / parseFloat(third.value);
		first.value = parseFloat(round.toFixed(2));
		v = 1;
		second.value = s;
		third.value = 0;
		oned = 0;
		twod = 0;
		}
	else if (second.value == "%")
		{
		round = parseFloat(first.value) / 100 * parseFloat(third.value);
		first.value = parseFloat(round.toFixed(2));
		v = 1;
		second.value = s;
		third.value = 0;
		oned = 0;
		twod = 0;
		}
	else if (second.value == "+%")
		{
		round = parseFloat(first.value) + (parseFloat(first.value) / 100 * parseFloat(third.value));
		first.value = parseFloat(round.toFixed(2));
		v = 1;
		second.value = s;
		third.value = 0;
		oned = 0;
		twod = 0;
		}
	else if (second.value == "-%")
		{
		round = parseFloat(first.value) - (parseFloat(first.value) / 100 * parseFloat(third.value));
		first.value = parseFloat(round.toFixed(2));
		v = 1;
		second.value = s;
		third.value = 0;
		oned = 0;
		twod = 0;
		}
	else if (second.value == "?%")
		{
		round = parseFloat(first.value) / parseFloat(third.value) * 100;
		first.value = parseFloat(round.toFixed(2));
		v = 1;
		second.value = s;
		third.value = 0;
		oned = 0;
		twod = 0;
		}
	else if (second.value == "pre-tax")
		{
		round = (parseFloat(first.value) / (100 - parseFloat(third.value))) * 100;
		first.value = parseFloat(round.toFixed(2));
		v = 1;
		second.value = s;
		third.value = 0;
		oned = 0;
		twod = 0;
		}
	document.getElementById('third').style.backgroundColor='#fffbc2';
	document.getElementById('first').style.backgroundColor='white';
	}
function equallity()
	{
	if (second.value == "+")
		{
		round = parseFloat(first.value) + parseFloat(third.value);
		first.value = parseFloat(round.toFixed(2));
		v = 0;
		second.value = "";
		third.value = 0;
		oned = 0;
		twod = 0;
		}

	else if (second.value == "-")
		{
		round = parseFloat(first.value) - parseFloat(third.value);
		first.value = parseFloat(round.toFixed(2));
		v = 0;
		second.value = "";
		third.value = 0;
		oned = 0;
		twod = 0;
		}

	else if (second.value == "X")
		{
		round = parseFloat(first.value) * parseFloat(third.value);
		first.value = parseFloat(round.toFixed(2));
		v = 0;
		second.value = "";
		third.value = 0;
		oned = 0;
		twod = 0;
		}

	else if (second.value == "/")
		{
		if (third.value != "0")
			{
			round = parseFloat(first.value) / parseFloat(third.value);
			first.value = parseFloat(round.toFixed(2));
			v = 0;
			second.value = "";
			third.value = 0;
			oned = 0;
			twod = 0;
			}
		else if (third.value == "0")
			{
			alert ("Sorry, but it's impossible to divide by zero");
			}
		}
	else if (second.value == "%")
		{
		round = parseFloat(first.value) / 100 * parseFloat(third.value);
		first.value = parseFloat(round.toFixed(2));
		v = 0;
		second.value = "";
		third.value = 0;
		oned = 0;
		twod = 0;
		}
	else if (second.value == "+%")
		{
		round = parseFloat(first.value) + (parseFloat(first.value) / 100 * parseFloat(third.value));
		first.value = parseFloat(round.toFixed(2));
		v = 0;
		second.value = "";
		third.value = 0;
		oned = 0;
		twod = 0;
		}
	else if (second.value == "-%")
		{
		round = parseFloat(first.value) - (parseFloat(first.value) / 100 * parseFloat(third.value));
		first.value = parseFloat(round.toFixed(2));
		v = 0;
		second.value = "";
		third.value = 0;
		oned = 0;
		twod = 0;
		}
	else if (second.value == "?%")
		{
		if (third.value != "0")
			{
			round = parseFloat(first.value) / parseFloat(third.value) * 100;
			first.value = parseFloat(round.toFixed(2));
			v = 0;
			second.value = "";
			third.value = 0;
			oned = 0;
			twod = 0;
			}
		else if (third.value == "0")
			{
			alert ("please enter the second value");
			}
		}
	else if (second.value == "pre-tax")
		{
		if (third.value != "0")
			{
			round = (parseFloat(first.value) / (100 - parseFloat(third.value))) * 100;
			first.value = parseFloat(round.toFixed(2));
			v = 0;
			second.value = "";
			third.value = 0;
			oned = 0;
			twod = 0;
			}
		else if (third.value == "0")
			{
			alert ("please enter the second value");
			}
		}
	document.getElementById('first').style.backgroundColor='#fffbc2';
	document.getElementById('third').style.backgroundColor='white';
	}
function clearfunc()
	{
	if (v == 0)
		{
		first.value = 0;
		oned = 0;
		}
	else if (v == 1)
		{
		third.value = 0;
		twod = 0;
		}
	}
function clearallfunc()
	{
	v = 0;
	first.value = 0;
	second.value = "";
	third.value = 0;
	oned = 0;
	twod = 0;
	document.getElementById('first').style.backgroundColor='#fffbc2';
	document.getElementById('third').style.backgroundColor='white';
	}
function onefirstmemorybutton()
	{
	if (v == 0)
		{
		firstmemory.value = first.value;
		localStorage.setItem('firstmemory', firstmemory.value);
		}
	else if (v == 1)
		{
		firstmemory.value = third.value;
		localStorage.setItem('firstmemory', firstmemory.value);
		}
	}
function twofirstmemorybutton()
	{
	if (v == 0)
		{
		first.value = firstmemory.value;
		}
	else if (v == 1)
		{
		third.value = firstmemory.value;
		}
	}
function threefirstmemorybutton()
	{
	firstmemory.value = 0;
	localStorage.setItem('firstmemory', firstmemory.value);
	}
function onesecondmemorybutton()
	{
	if (v == 0)
		{
		secondmemory.value = first.value;
		localStorage.setItem('secondmemory', secondmemory.value);
		}
	else if (v == 1)
		{
		secondmemory.value = third.value;
		localStorage.setItem('secondmemory', secondmemory.value);
		}
	}
function twosecondmemorybutton()
	{
	if (v == 0)
		{
		first.value = secondmemory.value;
		}
	else if (v == 1)
		{
		third.value = secondmemory.value;
		}
	}
function threesecondmemorybutton()
	{
	secondmemory.value = 0;
	localStorage.setItem('secondmemory', secondmemory.value);
	}
function onethirdmemorybutton()
	{
	if (v == 0)
		{
		thirdmemory.value = first.value;
		localStorage.setItem('thirdmemory', thirdmemory.value);
		}
	else if (v == 1)
		{
		thirdmemory.value = third.value;
		localStorage.setItem('thirdmemory', thirdmemory.value);
		}
	}
function twothirdmemorybutton()
	{
	if (v == 0)
		{
		first.value = thirdmemory.value;
		}
	else if (v == 1)
		{
		third.value = thirdmemory.value;
		}
	}
function threethirdmemorybutton()
	{
	thirdmemory.value = 0;
	localStorage.setItem('thirdmemory', thirdmemory.value);
	}
function dotwrite()
	{
	if (v == 0 && oned == 0)
		{
		first.value += ".";
		oned = 1;
		}
	else if (v == 1 && twod == 0)
		{
		third.value += ".";
		twod = 1;
		}
	}
function shopdotwrite()
	{
	if (oned == 0)
		{
		shoptextarea.value += ".";
		oned = 1;
		}
	}
var dc1 = 0, dc2 = 0, dc3 = 0, dc4 = 0;
function dotwritecredit()
	{
	if (c1 == 1 && dc1 == 0)
		{
		firstcredittext.value += ".";
		dc1 = 1;
		}
	else if (c2 == 1 && dc2 == 0)
		{
		secondcredittext.value += ".";
		dc2 = 1;
		}
	else if (c3 == 1 && dc3 == 0)
		{
		thirdcredittext.value += ".";
		dc3 = 1;
		}
	}

function plusminusswitch()
	{
	if (v == 0)
		{
		first.value = first.value * (-1);
		}
	else if (v == 1)
		{
		third.value = third.value * (-1);
		}

	}
function CE()
	{
	var firstvalue = document.getElementById('first').value;
	var thirdvalue = document.getElementById('third').value;
	if (v == 0 && firstvalue.length != 1)
		{
                var str = first.value;
		var last = first.value.slice(-1);
                first.value = str.substring(0, str.length-1);
		if (last == ".")
                	{
                    	oned = 0;
                	}
		console.log(firstvalue.length);
		}
	else if (v == 0 && firstvalue.length == 1)
		{
                first.value = 0;
		console.log(firstvalue.length);
		}
	else if (v == 1 && thirdvalue.length != 1)
		{
                var str = third.value;
		var last = third.value.slice(-1);
                third.value = str.substring(0, str.length-1);
		if (last == ".")
                	{
                    	twod = 0;
                	}
		}
	else if (v == 1 && thirdvalue.length == 1)
		{
                third.value = 0;
		}
	}
function shopCE()
	{
	if (shoptextarea.value != "")
		{
                var str = shoptextarea.value;
		var last = shoptextarea.value.slice(-1);
                shoptextarea.value = str.substring(0, str.length-1);
		if (last == ".")
                	{
                    	oned = 0;
                	}
		}
	else if (shoptextarea.value == "")
		{
                shoptextarea.value = 0;
		}
	}
