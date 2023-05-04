if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent))
{
document.write('<link  rel="stylesheet" href="calculatormobilestyle.css">');
}

else
{
document.write('<link  rel="stylesheet" href="calculatorcomputerstyle.css">');
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
function shopwritescript(w)
	{
	if (shoptextarea.value == 0 && oned == 0)
		{
		shoptextarea.value = w;
		}
	else if (shoptextarea.value != 0 || oned == 1)
		{
		shoptextarea.value = shoptextarea.value + w;
		}
	}
function creditwritescript(w)
	{
	if (c1 == 1 && firstcredittext.value == "0")
		{
		firstcredittext.value = w;
		}
	else if (c1 == 1 && firstcredittext.value != "0")
		{
		firstcredittext.value += w;
		}
	else if (c2 == 1 && secondcredittext.value == "0")
		{
		secondcredittext.value = w;
		}
	else if (c2 == 1 && secondcredittext.value != "0")
		{
		secondcredittext.value += w;
		}
	else if (c3 == 1 && thirdcredittext.value == "0")
		{
		thirdcredittext.value = w;
		}
	else if (c3 == 1 && thirdcredittext.value != "0")
		{
		thirdcredittext.value += w;
		}
	else if (c4 == 1 && fourthcredittext.value == "0")
		{
		fourthcredittext.value = w;
		}
	else if (c4 == 1 && fourthcredittext.value != "0")
		{
		fourthcredittext.value += w;
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
function copyscript()
	{
	if (v == 0)
		{
		first.select();
		document.execCommand("copy");
		}
	else if (v == 1)
		{
		third.select();
		document.execCommand("copy");
		}
	}
function pastscript()
	{
		first.select();
		first.removeAttribute('readonly');
	}
var c1 = 0, c2 = 0, c3 = 0, c4 = 0, c5 = 0, c6 = 0, c7 = 0;
function creditone()
	{
        	var one=0;
        	var onepic=document.getElementById("onepic");
        	var oneimgs=new Array('cb 2.png');
            	one++;one%=oneimgs.length;
            	onepic.src = oneimgs[one];

        	var two=0;
        	var twopic=document.getElementById("twopic");
        	var twoimgs=new Array('cb 1.png');
            	two++;two%=twoimgs.length;
            	twopic.src = twoimgs[two];

        	var three=0;
        	var threepic=document.getElementById("threepic");
        	var threeimgs=new Array('cb 1.png');
            	three++;three%=threeimgs.length;
            	threepic.src = threeimgs[three];

        	var four=0;
        	var fourpic=document.getElementById("fourpic");
        	var fourimgs=new Array('cb 1.png');
            	four++;four%=fourimgs.length;
            	fourpic.src = fourimgs[four];

        	var five=0;
        	var fivepic=document.getElementById("fivepic");
        	var fiveimgs=new Array('cb 3.png');
            	five++;five%=fiveimgs.length;
            	fivepic.src = fiveimgs[five];

        	var six=0;
        	var sixpic=document.getElementById("sixpic");
        	var siximgs=new Array('cb 3.png');
            	six++;six%=siximgs.length;
            	sixpic.src = siximgs[six];

        	var seven=0;
        	var sevenpic=document.getElementById("sevenpic");
        	var sevenimgs=new Array('cb 3.png');
            	seven++;seven%=sevenimgs.length;
            	sevenpic.src = sevenimgs[seven];

		m1.style.visibility='visible';
		m2.style.visibility='visible';
		m3.style.visibility='visible';
		delete1.style.visibility='visible';
		delete2.style.visibility='visible';
		w0.style.visibility='visible';
		w1.style.visibility='visible';
		w2.style.visibility='visible';
		w3.style.visibility='visible';
		w4.style.visibility='visible';
		w5.style.visibility='visible';
		w6.style.visibility='visible';
		w7.style.visibility='visible';
		w8.style.visibility='visible';
		w9.style.visibility='visible';
		wd.style.visibility='visible';

		document.getElementById('firstcredittext').style.backgroundColor='#fffbc2';
		document.getElementById('secondcredittext').style.backgroundColor='white';
		document.getElementById('thirdcredittext').style.backgroundColor='white';
		document.getElementById('fourthcredittext').style.backgroundColor='white';
		document.getElementById('fifthcredittext').style.backgroundColor='white';
		document.getElementById('sixthcredittext').style.backgroundColor='white';
		document.getElementById('seventhcredittext').style.backgroundColor='white';


		c1 = 1;
		c2 = 0;
		c3 = 0;
		c4 = 0;
		c5 = 0;
		c6 = 0;
		c7 = 0;
	}
function credittwo()
	{
        	var one=0;
        	var onepic=document.getElementById("onepic");
        	var oneimgs=new Array('cb 1.png');
            	one++;one%=oneimgs.length;
            	onepic.src = oneimgs[one];

        	var two=0;
        	var twopic=document.getElementById("twopic");
        	var twoimgs=new Array('cb 2.png');
            	two++;two%=twoimgs.length;
            	twopic.src = twoimgs[two];

        	var three=0;
        	var threepic=document.getElementById("threepic");
        	var threeimgs=new Array('cb 1.png');
            	three++;three%=threeimgs.length;
            	threepic.src = threeimgs[three];

        	var four=0;
        	var fourpic=document.getElementById("fourpic");
        	var fourimgs=new Array('cb 1.png');
            	four++;four%=fourimgs.length;
            	fourpic.src = fourimgs[four];

        	var five=0;
        	var fivepic=document.getElementById("fivepic");
        	var fiveimgs=new Array('cb 3.png');
            	five++;five%=fiveimgs.length;
            	fivepic.src = fiveimgs[five];

        	var six=0;
        	var sixpic=document.getElementById("sixpic");
        	var siximgs=new Array('cb 3.png');
            	six++;six%=siximgs.length;
            	sixpic.src = siximgs[six];

        	var seven=0;
        	var sevenpic=document.getElementById("sevenpic");
        	var sevenimgs=new Array('cb 3.png');
            	seven++;seven%=sevenimgs.length;
            	sevenpic.src = sevenimgs[seven];

		m1.style.visibility='visible';
		m2.style.visibility='visible';
		m3.style.visibility='visible';
		delete1.style.visibility='visible';
		delete2.style.visibility='visible';
		w0.style.visibility='visible';
		w1.style.visibility='visible';
		w2.style.visibility='visible';
		w3.style.visibility='visible';
		w4.style.visibility='visible';
		w5.style.visibility='visible';
		w6.style.visibility='visible';
		w7.style.visibility='visible';
		w8.style.visibility='visible';
		w9.style.visibility='visible';
		wd.style.visibility='visible';

		document.getElementById('firstcredittext').style.backgroundColor='white';
		document.getElementById('secondcredittext').style.backgroundColor='#fffbc2';
		document.getElementById('thirdcredittext').style.backgroundColor='white';
		document.getElementById('fourthcredittext').style.backgroundColor='white';
		document.getElementById('fifthcredittext').style.backgroundColor='white';
		document.getElementById('sixthcredittext').style.backgroundColor='white';
		document.getElementById('seventhcredittext').style.backgroundColor='white';

		c1 = 0;
		c2 = 1;
		c3 = 0;
		c4 = 0;
		c5 = 0;
		c6 = 0;
		c7 = 0;
	}
function creditthree()
	{
        	var one=0;
        	var onepic=document.getElementById("onepic");
        	var oneimgs=new Array('cb 1.png');
            	one++;one%=oneimgs.length;
            	onepic.src = oneimgs[one];

        	var two=0;
        	var twopic=document.getElementById("twopic");
        	var twoimgs=new Array('cb 1.png');
            	two++;two%=twoimgs.length;
            	twopic.src = twoimgs[two];

        	var three=0;
        	var threepic=document.getElementById("threepic");
        	var threeimgs=new Array('cb 2.png');
            	three++;three%=threeimgs.length;
            	threepic.src = threeimgs[three];

        	var four=0;
        	var fourpic=document.getElementById("fourpic");
        	var fourimgs=new Array('cb 1.png');
            	four++;four%=fourimgs.length;
            	fourpic.src = fourimgs[four];

        	var five=0;
        	var fivepic=document.getElementById("fivepic");
        	var fiveimgs=new Array('cb 3.png');
            	five++;five%=fiveimgs.length;
            	fivepic.src = fiveimgs[five];

        	var six=0;
        	var sixpic=document.getElementById("sixpic");
        	var siximgs=new Array('cb 3.png');
            	six++;six%=siximgs.length;
            	sixpic.src = siximgs[six];

        	var seven=0;
        	var sevenpic=document.getElementById("sevenpic");
        	var sevenimgs=new Array('cb 3.png');
            	seven++;seven%=sevenimgs.length;
            	sevenpic.src = sevenimgs[seven];

		m1.style.visibility='visible';
		m2.style.visibility='visible';
		m3.style.visibility='visible';
		delete1.style.visibility='visible';
		delete2.style.visibility='visible';
		w0.style.visibility='visible';
		w1.style.visibility='visible';
		w2.style.visibility='visible';
		w3.style.visibility='visible';
		w4.style.visibility='visible';
		w5.style.visibility='visible';
		w6.style.visibility='visible';
		w7.style.visibility='visible';
		w8.style.visibility='visible';
		w9.style.visibility='visible';
		wd.style.visibility='visible';

		document.getElementById('firstcredittext').style.backgroundColor='white';
		document.getElementById('secondcredittext').style.backgroundColor='white';
		document.getElementById('thirdcredittext').style.backgroundColor='#fffbc2';
		document.getElementById('fourthcredittext').style.backgroundColor='white';
		document.getElementById('fifthcredittext').style.backgroundColor='white';
		document.getElementById('sixthcredittext').style.backgroundColor='white';
		document.getElementById('seventhcredittext').style.backgroundColor='white';

		c1 = 0;
		c2 = 0;
		c3 = 1;
		c4 = 0;
		c5 = 0;
		c6 = 0;
		c7 = 0;
	}
function creditfour()
	{
        	var one=0;
        	var onepic=document.getElementById("onepic");
        	var oneimgs=new Array('cb 1.png');
            	one++;one%=oneimgs.length;
            	onepic.src = oneimgs[one];

        	var two=0;
        	var twopic=document.getElementById("twopic");
        	var twoimgs=new Array('cb 1.png');
            	two++;two%=twoimgs.length;
            	twopic.src = twoimgs[two];

        	var three=0;
        	var threepic=document.getElementById("threepic");
        	var threeimgs=new Array('cb 1.png');
            	three++;three%=threeimgs.length;
            	threepic.src = threeimgs[three];

        	var four=0;
        	var fourpic=document.getElementById("fourpic");
        	var fourimgs=new Array('cb 2.png');
            	four++;four%=fourimgs.length;
            	fourpic.src = fourimgs[four];

        	var five=0;
        	var fivepic=document.getElementById("fivepic");
        	var fiveimgs=new Array('cb 3.png');
            	five++;five%=fiveimgs.length;
            	fivepic.src = fiveimgs[five];

        	var six=0;
        	var sixpic=document.getElementById("sixpic");
        	var siximgs=new Array('cb 3.png');
            	six++;six%=siximgs.length;
            	sixpic.src = siximgs[six];

        	var seven=0;
        	var sevenpic=document.getElementById("sevenpic");
        	var sevenimgs=new Array('cb 3.png');
            	seven++;seven%=sevenimgs.length;
            	sevenpic.src = sevenimgs[seven];

		m1.style.visibility='visible';
		m2.style.visibility='visible';
		m3.style.visibility='visible';
		delete1.style.visibility='visible';
		delete2.style.visibility='visible';
		w0.style.visibility='visible';
		w1.style.visibility='visible';
		w2.style.visibility='visible';
		w3.style.visibility='visible';
		w4.style.visibility='visible';
		w5.style.visibility='visible';
		w6.style.visibility='visible';
		w7.style.visibility='visible';
		w8.style.visibility='visible';
		w9.style.visibility='visible';
		wd.style.visibility='visible';

		document.getElementById('firstcredittext').style.backgroundColor='white';
		document.getElementById('secondcredittext').style.backgroundColor='white';
		document.getElementById('thirdcredittext').style.backgroundColor='white';
		document.getElementById('fourthcredittext').style.backgroundColor='#fffbc2';
		document.getElementById('fifthcredittext').style.backgroundColor='white';
		document.getElementById('sixthcredittext').style.backgroundColor='white';
		document.getElementById('seventhcredittext').style.backgroundColor='white';

		c1 = 0;
		c2 = 0;
		c3 = 0;
		c4 = 1;
		c5 = 0;
		c6 = 0;
		c7 = 0;
	}
function creditfive()
	{
        	var one=0;
        	var onepic=document.getElementById("onepic");
        	var oneimgs=new Array('cb 1.png');
            	one++;one%=oneimgs.length;
            	onepic.src = oneimgs[one];

        	var two=0;
        	var twopic=document.getElementById("twopic");
        	var twoimgs=new Array('cb 1.png');
            	two++;two%=twoimgs.length;
            	twopic.src = twoimgs[two];

        	var three=0;
        	var threepic=document.getElementById("threepic");
        	var threeimgs=new Array('cb 1.png');
            	three++;three%=threeimgs.length;
            	threepic.src = threeimgs[three];

        	var four=0;
        	var fourpic=document.getElementById("fourpic");
        	var fourimgs=new Array('cb 1.png');
            	four++;four%=fourimgs.length;
            	fourpic.src = fourimgs[four];

        	var five=0;
        	var fivepic=document.getElementById("fivepic");
        	var fiveimgs=new Array('cb 4.png');
            	five++;five%=fiveimgs.length;
            	fivepic.src = fiveimgs[five];

        	var six=0;
        	var sixpic=document.getElementById("sixpic");
        	var siximgs=new Array('cb 3.png');
            	six++;six%=siximgs.length;
            	sixpic.src = siximgs[six];

        	var seven=0;
        	var sevenpic=document.getElementById("sevenpic");
        	var sevenimgs=new Array('cb 3.png');
            	seven++;seven%=sevenimgs.length;
            	sevenpic.src = sevenimgs[seven];

		m1.style.visibility='hidden';
		m2.style.visibility='hidden';
		m3.style.visibility='hidden';
		delete1.style.visibility='hidden';
		delete2.style.visibility='hidden';
		w0.style.visibility='hidden';
		w1.style.visibility='hidden';
		w2.style.visibility='hidden';
		w3.style.visibility='hidden';
		w4.style.visibility='hidden';
		w5.style.visibility='hidden';
		w6.style.visibility='hidden';
		w7.style.visibility='hidden';
		w8.style.visibility='hidden';
		w9.style.visibility='hidden';
		wd.style.visibility='hidden';

		document.getElementById('firstcredittext').style.backgroundColor='white';
		document.getElementById('secondcredittext').style.backgroundColor='white';
		document.getElementById('thirdcredittext').style.backgroundColor='white';
		document.getElementById('fourthcredittext').style.backgroundColor='white';
		document.getElementById('fifthcredittext').style.backgroundColor='#fffbc2';
		document.getElementById('sixthcredittext').style.backgroundColor='white';
		document.getElementById('seventhcredittext').style.backgroundColor='white';

		c1 = 0;
		c2 = 0;
		c3 = 0;
		c4 = 0;
		c5 = 1;
		c6 = 0;
		c7 = 0;
	}
function creditsix()
	{
        	var one=0;
        	var onepic=document.getElementById("onepic");
        	var oneimgs=new Array('cb 1.png');
            	one++;one%=oneimgs.length;
            	onepic.src = oneimgs[one];

        	var two=0;
        	var twopic=document.getElementById("twopic");
        	var twoimgs=new Array('cb 1.png');
            	two++;two%=twoimgs.length;
            	twopic.src = twoimgs[two];

        	var three=0;
        	var threepic=document.getElementById("threepic");
        	var threeimgs=new Array('cb 1.png');
            	three++;three%=threeimgs.length;
            	threepic.src = threeimgs[three];

        	var four=0;
        	var fourpic=document.getElementById("fourpic");
        	var fourimgs=new Array('cb 1.png');
            	four++;four%=fourimgs.length;
            	fourpic.src = fourimgs[four];

        	var five=0;
        	var fivepic=document.getElementById("fivepic");
        	var fiveimgs=new Array('cb 3.png');
            	five++;five%=fiveimgs.length;
            	fivepic.src = fiveimgs[five];

        	var six=0;
        	var sixpic=document.getElementById("sixpic");
        	var siximgs=new Array('cb 4.png');
            	six++;six%=siximgs.length;
            	sixpic.src = siximgs[six];

        	var seven=0;
        	var sevenpic=document.getElementById("sevenpic");
        	var sevenimgs=new Array('cb 3.png');
            	seven++;seven%=sevenimgs.length;
            	sevenpic.src = sevenimgs[seven];

		m1.style.visibility='hidden';
		m2.style.visibility='hidden';
		m3.style.visibility='hidden';
		delete1.style.visibility='hidden';
		delete2.style.visibility='hidden';
		w0.style.visibility='hidden';
		w1.style.visibility='hidden';
		w2.style.visibility='hidden';
		w3.style.visibility='hidden';
		w4.style.visibility='hidden';
		w5.style.visibility='hidden';
		w6.style.visibility='hidden';
		w7.style.visibility='hidden';
		w8.style.visibility='hidden';
		w9.style.visibility='hidden';
		wd.style.visibility='hidden';

		document.getElementById('firstcredittext').style.backgroundColor='white';
		document.getElementById('secondcredittext').style.backgroundColor='white';
		document.getElementById('thirdcredittext').style.backgroundColor='white';
		document.getElementById('fourthcredittext').style.backgroundColor='white';
		document.getElementById('fifthcredittext').style.backgroundColor='white';
		document.getElementById('sixthcredittext').style.backgroundColor='#fffbc2';
		document.getElementById('seventhcredittext').style.backgroundColor='white';

		c1 = 0;
		c2 = 0;
		c3 = 0;
		c4 = 0;
		c5 = 0;
		c6 = 1;
		c7 = 0;
	}
function creditseven()
	{
        	var one=0;
        	var onepic=document.getElementById("onepic");
        	var oneimgs=new Array('cb 1.png');
            	one++;one%=oneimgs.length;
            	onepic.src = oneimgs[one];

        	var two=0;
        	var twopic=document.getElementById("twopic");
        	var twoimgs=new Array('cb 1.png');
            	two++;two%=twoimgs.length;
            	twopic.src = twoimgs[two];

        	var three=0;
        	var threepic=document.getElementById("threepic");
        	var threeimgs=new Array('cb 1.png');
            	three++;three%=threeimgs.length;
            	threepic.src = threeimgs[three];

        	var four=0;
        	var fourpic=document.getElementById("fourpic");
        	var fourimgs=new Array('cb 1.png');
            	four++;four%=fourimgs.length;
            	fourpic.src = fourimgs[four];

        	var five=0;
        	var fivepic=document.getElementById("fivepic");
        	var fiveimgs=new Array('cb 3.png');
            	five++;five%=fiveimgs.length;
            	fivepic.src = fiveimgs[five];

        	var six=0;
        	var sixpic=document.getElementById("sixpic");
        	var siximgs=new Array('cb 3.png');
            	six++;six%=siximgs.length;
            	sixpic.src = siximgs[six];

        	var seven=0;
        	var sevenpic=document.getElementById("sevenpic");
        	var sevenimgs=new Array('cb 4.png');
            	seven++;seven%=sevenimgs.length;
            	sevenpic.src = sevenimgs[seven];

		m1.style.visibility='hidden';
		m2.style.visibility='hidden';
		m3.style.visibility='hidden';
		delete1.style.visibility='hidden';
		delete2.style.visibility='hidden';
		w0.style.visibility='hidden';
		w1.style.visibility='hidden';
		w2.style.visibility='hidden';
		w3.style.visibility='hidden';
		w4.style.visibility='hidden';
		w5.style.visibility='hidden';
		w6.style.visibility='hidden';
		w7.style.visibility='hidden';
		w8.style.visibility='hidden';
		w9.style.visibility='hidden';
		wd.style.visibility='hidden';

		document.getElementById('firstcredittext').style.backgroundColor='white';
		document.getElementById('secondcredittext').style.backgroundColor='white';
		document.getElementById('thirdcredittext').style.backgroundColor='white';
		document.getElementById('fourthcredittext').style.backgroundColor='white';
		document.getElementById('fifthcredittext').style.backgroundColor='white';
		document.getElementById('sixthcredittext').style.backgroundColor='white';
		document.getElementById('seventhcredittext').style.backgroundColor='#fffbc2';

		c1 = 0;
		c2 = 0;
		c3 = 0;
		c4 = 0;
		c5 = 0;
		c6 = 0;
		c7 = 1;
	}
function creditclear()
	{
	if (c1 == 1)
		{
		firstcredittext.value = 0;
		dc1 = 0;
		}
	else if (c2 == 1)
		{
		secondcredittext.value = 0;
		dc2 = 0;
		}
	else if (c3 == 1)
		{
		thirdcredittext.value = 0;
		dc3 = 0;
		}
	else if (c4 == 1)
		{
		fourthcredittext.value = 0;
		}
	}
function creditclearall()
	{
	firstcredittext.value = 0;
	secondcredittext.value = 0;
	thirdcredittext.value = 0;
	fourthcredittext.value = 0;
	fifthcredittext.value = 0;
	sixthcredittext.value = 0;
	seventhcredittext.value = 0;
	dc1 = 0;
	dc2 = 0;
	dc3 = 0;
	creditone();
	}
function creditonefirstmemorybutton()
	{
	if (c1 == 1)
		{
		firstmemory.value = firstcredittext.value;
		localStorage.setItem('firstmemory', firstmemory.value);
		}
	else if (c2 == 1)
		{
		firstmemory.value = secondcredittext.value;
		localStorage.setItem('firstmemory', firstmemory.value);
		}
	else if (c3 == 1)
		{
		firstmemory.value = thirdcredittext.value;
		localStorage.setItem('firstmemory', firstmemory.value);
		}
	else if (c4 == 1)
		{
		firstmemory.value = fourthcredittext.value;
		localStorage.setItem('firstmemory', firstmemory.value);
		}
	else if (c5 == 1)
		{
		firstmemory.value = fifthcredittext.value;
		localStorage.setItem('firstmemory', firstmemory.value);
		}
	else if (c6 == 1)
		{
		firstmemory.value = sixthcredittext.value;
		localStorage.setItem('firstmemory', firstmemory.value);
		}
	else if (c7 == 1)
		{
		firstmemory.value = seventhcredittext.value;
		localStorage.setItem('firstmemory', firstmemory.value);
		}
	}
function credittwofirstmemorybutton()
	{
	if (c1 == 1)
		{
		firstcredittext.value = firstmemory.value;
		localStorage.setItem('firstmemory', firstmemory.value);
		}
	else if (c2 == 1)
		{
		secondcredittext.value = firstmemory.value;
		localStorage.setItem('firstmemory', firstmemory.value);
		}
	else if (c3 == 1)
		{
		thirdcredittext.value = firstmemory.value;
		localStorage.setItem('firstmemory', firstmemory.value);
		}
	else if (c4 == 1)
		{
		fourthcredittext.value = firstmemory.value;
		localStorage.setItem('firstmemory', firstmemory.value);
		}
	}
function creditthreefirstmemorybutton()
	{
	firstmemory.value = 0;
	localStorage.setItem('firstmemory', firstmemory.value);
	}
function creditonesecondmemorybutton()
	{
	if (c1 == 1)
		{
		secondmemory.value = firstcredittext.value;
		localStorage.setItem('secondmemory', secondmemory.value);
		}
	else if (c2 == 1)
		{
		secondmemory.value = secondcredittext.value;
		localStorage.setItem('secondmemory', secondmemory.value);
		}
	else if (c3 == 1)
		{
		secondmemory.value = thirdcredittext.value;
		localStorage.setItem('secondmemory', secondmemory.value);
		}
	else if (c4 == 1)
		{
		secondmemory.value = fourthcredittext.value;
		localStorage.setItem('secondmemory', secondmemory.value);
		}
	else if (c5 == 1)
		{
		secondmemory.value = fifthcredittext.value;
		localStorage.setItem('secondmemory', secondmemory.value);
		}
	else if (c6 == 1)
		{
		secondmemory.value = sixthcredittext.value;
		localStorage.setItem('secondmemory', secondmemory.value);
		}
	else if (c7 == 1)
		{
		secondmemory.value = seventhcredittext.value;
		localStorage.setItem('secondmemory', secondmemory.value);
		}
	}
function credittwosecondmemorybutton()
	{
	if (c1 == 1)
		{
		firstcredittext.value = secondmemory.value;
		localStorage.setItem('secondmemory', secondmemory.value);
		}
	else if (c2 == 1)
		{
		secondcredittext.value = secondmemory.value;
		localStorage.setItem('secondmemory', secondmemory.value);
		}
	else if (c3 == 1)
		{
		thirdcredittext.value = secondmemory.value;
		localStorage.setItem('secondmemory', secondmemory.value);
		}
	else if (c4 == 1)
		{
		fourthcredittext.value = secondmemory.value;
		localStorage.setItem('secondmemory', secondmemory.value);
		}
	}
function creditthreesecondmemorybutton()
	{
	secondmemory.value = 0;
	localStorage.setItem('secondmemory', secondmemory.value);
	}
function creditonethirdmemorybutton()
	{
	if (c1 == 1)
		{
		thirdmemory.value = firstcredittext.value;
		localStorage.setItem('thirdmemory', thirdmemory.value);
		}
	else if (c2 == 1)
		{
		thirdmemory.value = secondcredittext.value;
		localStorage.setItem('thirdmemory', thirdmemory.value);
		}
	else if (c3 == 1)
		{
		thirdmemory.value = thirdcredittext.value;
		localStorage.setItem('thirdmemory', thirdmemory.value);
		}
	else if (c4 == 1)
		{
		thirdmemory.value = fourthcredittext.value;
		localStorage.setItem('thirdmemory', thirdmemory.value);
		}
	else if (c5 == 1)
		{
		thirdmemory.value = fifthcredittext.value;
		localStorage.setItem('thirdmemory', thirdmemory.value);
		}
	else if (c6 == 1)
		{
		thirdmemory.value = sixthcredittext.value;
		localStorage.setItem('thirdmemory', thirdmemory.value);
		}
	else if (c7 == 1)
		{
		thirdmemory.value = seventhcredittext.value;
		localStorage.setItem('thirdmemory', thirdmemory.value);
		}
	}
function credittwothirdmemorybutton()
	{
	if (c1 == 1)
		{
		firstcredittext.value = thirdmemory.value;
		localStorage.setItem('thirdmemory', thirdmemory.value);
		}
	else if (c2 == 1)
		{
		secondcredittext.value = thirdmemory.value;
		localStorage.setItem('thirdmemory', thirdmemory.value);
		}
	else if (c3 == 1)
		{
		thirdcredittext.value = thirdmemory.value;
		localStorage.setItem('thirdmemory', thirdmemory.value);
		}
	else if (c4 == 1)
		{
		fourthcredittext.value = thirdmemory.value;
		localStorage.setItem('thirdmemory', thirdmemory.value);
		}
	}
function creditthreethirdmemorybutton()
	{
	thirdmemory.value = 0;
	localStorage.setItem('thirdmemory', thirdmemory.value);
	}
function CEcredit()
	{
	if (c1 == 1 && firstcredittext.value != "")
		{
                var str = firstcredittext.value;
		var last = firstcredittext.value.slice(-1);
                firstcredittext.value = str.substring(0, str.length-1);
		if (last == ".")
                	{
                    	dc1 = 0;
                	}
		}
	else if (c1 == 1 && secondcredittext.length == 1)
		{
                secondcredittext.value = 0;
		}
	else if (c2 == 1 && secondcredittext.value != "")
		{
                var str = secondcredittext.value;
		var last = secondcredittext.value.slice(-1);
                secondcredittext.value = str.substring(0, str.length-1);
		if (last == ".")
                	{
                    	dc2 = 0;
                	}
		}
	else if (c2 == 1 && secondcredittext.length == 1)
		{
                secondcredittext.value = 0;
		}
	else if (c3 == 1 && thirdcredittext.value != "")
		{
                var str = thirdcredittext.value;
		var last = thirdcredittext.value.slice(-1);
                thirdcredittext.value = str.substring(0, str.length-1);
		}
		if (last == ".")
                	{
                    	dc3 = 0;
                	}
	else if (c3 == 1 && thirdcredittext.length == 1)
		{
                thirdcredittext.value = 0;
		}
	else if (c4 == 1 && fourthcredittext.value != "")
		{
                var str = fourthcredittext.value;
		var last = fourthcredittext.value.slice(-1);
                fourthcredittext.value = str.substring(0, str.length-1);
		}
	else if (c4 == 1 && fourthcredittext.length == 1)
		{
                fourthcredittext.value = 0;
		}
	}
function Creditequally()
	{
	if (firstcredittext.value != "0" && secondcredittext.value != "0" && thirdcredittext.text != "0" && thirdcredittext.value < 99 && fourthcredittext.value != "0")
		{
	    var s = firstcredittext.value;
	    var i = secondcredittext.value;
	    var f = thirdcredittext.value;
	    var n = fourthcredittext.value;
	    i = i / 100 / 12;
	    var ii = i + 1;
	    var nn = Math.pow(ii, n);
	    var p = s * (i + (i / (nn - 1)));
	    var r1 = p.toFixed(2);
	    fifthcredittext.value = r1;
	    var op = p * n - s;
	    var r2 = op.toFixed(2);
	    sixthcredittext.value = r2;
	    var r3 = s / 100 * f;
	    seventhcredittext.value = r3;
		}
	else if (firstcredittext.value == "0" || secondcredittext.value == "0" || thirdcredittext.text != "0" || thirdcredittext.value > 99 || fourthcredittext.value == "0")
		{
		alert ("please enter all required values");
		}
	}
var nt;
function notechange(ntv)
	{
	localStorage.setItem('noteswitch', ntv);
	window.location.href = 'notepad2.html';
	}
function notesave()
	{
	switch (tnn)
		{
		case "1":
		localStorage.setItem('note0101', notename.value);
		localStorage.setItem('note0102', notetext.value);
		window.location.href = 'notepad.html';
		break;

		case "2":
		localStorage.setItem('note0201', notename.value);
		localStorage.setItem('note0202', notetext.value);
		window.location.href = 'notepad.html';
		break;

		case "3":
		localStorage.setItem('note0301', notename.value);
		localStorage.setItem('note0302', notetext.value);
		window.location.href = 'notepad.html';
		break;

		case "4":
		localStorage.setItem('note0401', notename.value);
		localStorage.setItem('note0402', notetext.value);
		window.location.href = 'notepad.html';
		break;

		case "5":
		localStorage.setItem('note0501', notename.value);
		localStorage.setItem('note0502', notetext.value);
		window.location.href = 'notepad.html';
		break;

		case "6":
		localStorage.setItem('note0601', notename.value);
		localStorage.setItem('note0602', notetext.value);
		window.location.href = 'notepad.html';
		break;

		case "7":
		localStorage.setItem('note0701', notename.value);
		localStorage.setItem('note0702', notetext.value);
		window.location.href = 'notepad.html';
		break;

		case "8":
		localStorage.setItem('note0801', notename.value);
		localStorage.setItem('note0802', notetext.value);
		window.location.href = 'notepad.html';
		break;

		case "9":
		localStorage.setItem('note0901', notename.value);
		localStorage.setItem('note0902', notetext.value);
		window.location.href = 'notepad.html';
		break;

		case "10":
		localStorage.setItem('note1001', notename.value);
		localStorage.setItem('note1002', notetext.value);
		window.location.href = 'notepad.html';
		break;

		case "11":
		localStorage.setItem('note1101', notename.value);
		localStorage.setItem('note1102', notetext.value);
		window.location.href = 'notepad.html';
		break;

		case "12":
		localStorage.setItem('note1201', notename.value);
		localStorage.setItem('note1202', notetext.value);
		window.location.href = 'notepad.html';
		break;
		}
	console.log(tnn);
	}
function note_clearall()
	{
	notename.value = "";
	notetext.value = "";
	}
function sciencemode()
	{
	localStorage.setItem('science', first.value);
	window.location.href = 'science.html';
	}
