if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent))
{
document.write('<link  rel="stylesheet" href="constructionmobilestyle.css">');
}

else
{
document.write('<link  rel="stylesheet" href="constructioncomputerstyle.css">');
}

function const_switch(cn1, cn2, cn3)
	{
	localStorage.setItem('const1', cn1);
	localStorage.setItem('const2', cn2);
	localStorage.setItem('const3', cn3);
	window.location.href = 'constcalculator2.html';
	}
var cn1 = 0, cn2 = 0, cn3 = 0, cn4 = 0, cn5 = 0, cn6 = 0, cn7 = 0;
function const_switch1()
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

		document.getElementById('consttext1').style.backgroundColor='#fffbc2';
		document.getElementById('consttext2').style.backgroundColor='white';
		document.getElementById('consttext3').style.backgroundColor='white';
		document.getElementById('consttext4').style.backgroundColor='white';
		document.getElementById('consttext5').style.backgroundColor='white';
		document.getElementById('consttext6').style.backgroundColor='white';
		document.getElementById('consttext7').style.backgroundColor='white';

		cn1 = 1;
		cn2 = 0;
		cn3 = 0;
		cn4 = 0;
		cn5 = 0;
		cn6 = 0;
		cn7 = 0;
	}
function const_switch2()
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

		document.getElementById('consttext1').style.backgroundColor='white';
		document.getElementById('consttext2').style.backgroundColor='#fffbc2';
		document.getElementById('consttext3').style.backgroundColor='white';
		document.getElementById('consttext4').style.backgroundColor='white';
		document.getElementById('consttext5').style.backgroundColor='white';
		document.getElementById('consttext6').style.backgroundColor='white';
		document.getElementById('consttext7').style.backgroundColor='white';


		cn1 = 0;
		cn2 = 1;
		cn3 = 0;
		cn4 = 0;
		cn5 = 0;
		cn6 = 0;
		cn7 = 0;
	}
function const_switch3()
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

		document.getElementById('consttext1').style.backgroundColor='white';
		document.getElementById('consttext2').style.backgroundColor='white';
		document.getElementById('consttext3').style.backgroundColor='#fffbc2';
		document.getElementById('consttext4').style.backgroundColor='white';
		document.getElementById('consttext5').style.backgroundColor='white';
		document.getElementById('consttext6').style.backgroundColor='white';
		document.getElementById('consttext7').style.backgroundColor='white';

		cn1 = 0;
		cn2 = 0;
		cn3 = 1;
		cn4 = 0;
		cn5 = 0;
		cn6 = 0;
		cn7 = 0;
	}
function const_switch4()
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

		document.getElementById('consttext1').style.backgroundColor='white';
		document.getElementById('consttext2').style.backgroundColor='white';
		document.getElementById('consttext3').style.backgroundColor='white';
		document.getElementById('consttext4').style.backgroundColor='#fffbc2';
		document.getElementById('consttext5').style.backgroundColor='white';
		document.getElementById('consttext6').style.backgroundColor='white';
		document.getElementById('consttext7').style.backgroundColor='white';

		cn1 = 0;
		cn2 = 0;
		cn3 = 0;
		cn4 = 1;
		cn5 = 0;
		cn6 = 0;
		cn7 = 0;
	}
function const_switch5()
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

		document.getElementById('consttext1').style.backgroundColor='white';
		document.getElementById('consttext2').style.backgroundColor='white';
		document.getElementById('consttext3').style.backgroundColor='white';
		document.getElementById('consttext4').style.backgroundColor='white';
		document.getElementById('consttext5').style.backgroundColor='#fffbc2';
		document.getElementById('consttext6').style.backgroundColor='white';
		document.getElementById('consttext7').style.backgroundColor='white';

		cn1 = 0;
		cn2 = 0;
		cn3 = 0;
		cn4 = 0;
		cn5 = 1;
		cn6 = 0;
		cn7 = 0;
	}
function const_switch6()
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

		document.getElementById('consttext1').style.backgroundColor='white';
		document.getElementById('consttext2').style.backgroundColor='white';
		document.getElementById('consttext3').style.backgroundColor='white';
		document.getElementById('consttext4').style.backgroundColor='white';
		document.getElementById('consttext5').style.backgroundColor='white';
		document.getElementById('consttext6').style.backgroundColor='#fffbc2';
		document.getElementById('consttext7').style.backgroundColor='white';

		cn1 = 0;
		cn2 = 0;
		cn3 = 0;
		cn4 = 0;
		cn5 = 0;
		cn6 = 1;
		cn7 = 0;
	}
function const_switch7()
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

		document.getElementById('consttext1').style.backgroundColor='white';
		document.getElementById('consttext2').style.backgroundColor='white';
		document.getElementById('consttext3').style.backgroundColor='white';
		document.getElementById('consttext4').style.backgroundColor='white';
		document.getElementById('consttext5').style.backgroundColor='white';
		document.getElementById('consttext6').style.backgroundColor='white';
		document.getElementById('consttext7').style.backgroundColor='#fffbc2';

		cn1 = 0;
		cn2 = 0;
		cn3 = 0;
		cn4 = 0;
		cn5 = 0;
		cn6 = 0;
		cn7 = 1;
	}
function const_writescript(w)
	{
	if (cn1 == 1 && consttext1.value == "0")
		{
		consttext1.value = w;
		}
	else if (cn1 == 1 && consttext1.value != "0")
		{
		consttext1.value += w;
		}
	else if (cn2 == 1 && consttext2.value == "0")
		{
		consttext2.value = w;
		}
	else if (cn2 == 1 && consttext2.value != "0")
		{
		consttext2.value += w;
		}
	else if (cn3 == 1 && consttext3.value == "0")
		{
		consttext3.value = w;
		}
	else if (cn3 == 1 && consttext3.value != "0")
		{
		consttext3.value += w;
		}
	else if (cn4 == 1 && consttext4.value == "0")
		{
		consttext4.value = w;
		}
	else if (cn4 == 1 && consttext4.value != "0")
		{
		consttext4.value += w;
		}
	}
var dcn1 = 0, dcn2 = 0, dcn3 = 0, dcn4 = 0;
function const_dotwrite()
	{
	if (cn1 == 1 && dcn1 == 0)
		{
		consttext1.value += ".";
		dcn1 = 1;
		}
	else if (cn2 == 1 && dcn2 == 0)
		{
		consttext2.value += ".";
		dcn2 = 1;
		}
	else if (cn3 == 1 && dcn3 == 0)
		{
		consttext3.value += ".";
		dcn3 = 1;
		}
	else if (cn4 == 1 && dcn4 == 0)
		{
		consttext4.value += ".";
		dcn4 = 1;
		}
	}
function const_CE()
	{
	if (cn1 == 1 && consttext1.value != "")
		{
                var str = consttext1.value;
		var last = consttext1.value.slice(-1);
                consttext1.value = str.substring(0, str.length-1);
		if (last == ".")
                	{
                    	dcn1 = 0;
                	}
		}
	else if (cn1 == 1 && consttext1.value == "")
		{
                consttext1.value = 0;
		}
	else if (cn2 == 1 && consttext2.value != "")
		{
                var str = consttext2.value;
		var last = consttext2.value.slice(-1);
                consttext2.value = str.substring(0, str.length-1);
		if (last == ".")
                	{
                    	dcn2 = 0;
                	}
		}
	else if (cn2 == 1 && consttext2.value == "")
		{
                consttext2.value = 0;
		}
	else if (cn3 == 1 && consttext3.value != "")
		{
                var str = consttext3.value;
		var last = consttext3.value.slice(-1);
                consttext3.value = str.substring(0, str.length-1);
		}
		if (last == ".")
                	{
                    	dcn3 = 0;
                	}
	else if (cn3 == 1 && consttext3.value == "")
		{
                consttext3.value = 0;
		}
	else if (cn4 == 1 && consttext4.value != "")
		{
                var str = consttext4.value;
		var last = consttext4.value.slice(-1);
                consttext4.value = str.substring(0, str.length-1);
		if (last == ".")
                	{
                    	dcn4 = 0;
                	}
		}
	else if (cn4 == 1 && consttext4.value == "")
		{
                consttext4.value = 0;
		}
	}
function const_clear()
	{
	if (cn1 == 1)
		{
		consttext1.value = 0;
		dcn1 = 0;
		}
	else if (cn2 == 1)
		{
		consttext2.value = 0;
		dcn2 = 0;
		}
	else if (cn3 == 1)
		{
		consttext3.value = 0;
		dcn3 = 0;
		}
	else if (cn4 == 1)
		{
		consttext4.value = 0;
		dcn4 = 0;
		}
	}
function const_clearall()
	{
	var cnc2 = localStorage.getItem('const2');
	switch (cnc2)
		{
		case "1":
		consttext1.value = 0;
		dcn1 = 0;
		break;

		case "2":
		consttext1.value = 0;
		dcn1 = 0;
		consttext2.value = 0;
		dcn2 = 0;
		break;

		case "3":
		consttext1.value = 0;
		dcn1 = 0;
		consttext2.value = 0;
		dcn2 = 0;
		consttext3.value = 0;
		dcn3 = 0;
		break;

		case "4":
		consttext1.value = 0;
		dcn1 = 0;
		consttext2.value = 0;
		dcn2 = 0;
		consttext3.value = 0;
		dcn3 = 0;
		consttext4.value = 0;
		dcn4 = 0;
		break;
		}
	cnlt5.value = "";
	cnlt6.value = "";
	cnlt7.value = "";
	consttext5.value = "";
	consttext6.value = "";
	consttext7.value = "";
	const_switch1();
	cnpen5.style.visibility='hidden';
	cnpen6.style.visibility='hidden';
	cnpen7.style.visibility='hidden';
	}
function const_count()
	{
	var cnc = localStorage.getItem('const1');
	switch (cnc)
		{
		case "1":
		var rt = Math.sqrt(consttext1.value * consttext1.value + consttext2.value * consttext2.value);
		consttext5.value = parseFloat(rt.toFixed(2));
		cnpen5.style.visibility='visible';
		cnlt5.value = "C:";
		break;

		case "2":
		if (consttext1.value > consttext2.value)
			{
			alert("the value of A is greater than the value of B. Change the values!");
			}
		else if (consttext1.value < consttext2.value)
			{
			var rt = Math.sqrt(consttext2.value * consttext2.value - consttext1.value * consttext1.value);
			consttext5.value = parseFloat(rt.toFixed(2));
			cnpen5.style.visibility='visible';
			cnlt5.value = "C:";
			}
		break;

		case "3":
			var r = parseFloat(consttext1.value) + parseFloat(consttext2.value);
			var v = 4 / 3 * 3.14 * (consttext1.value * consttext1.value * consttext1.value);
			var v2 = 4 / 3 * (3.14 * (r * r * r) - 4 / 3 * (3.14 * (consttext1.value * consttext1.value * consttext1.value)));
			var s = 4 * 3.14 * Math.pow(r, 2);
			consttext5.value = parseFloat(v.toFixed(2));
			cnpen5.style.visibility='visible';
			cnlt5.value = "V:";
			consttext6.value = parseFloat(v2.toFixed(2));
			cnpen6.style.visibility='visible';
			cnlt6.value = "V2:";
			consttext7.value = parseFloat(s.toFixed(2));
			cnpen7.style.visibility='visible';
			cnlt7.value = "S:";
		break;

		case "4":
		var l = 2 * 3.14 * parseFloat(consttext1.value);
		var s1 = 3.14 * Math.pow(parseFloat(consttext1.value), 2);
		var ss1 = 3.14 * ((parseFloat(consttext1.value) + parseFloat(consttext2.value)) * (parseFloat(consttext1.value) + parseFloat(consttext2.value)));
		var ss2 = 3.14 * Math.pow(parseFloat(consttext1.value), 2);
		var s2 = parseFloat(ss1) - parseFloat(ss2);

		consttext5.value = parseFloat(l.toFixed(2));
		cnpen5.style.visibility='visible';
		cnlt5.value = "L:";

		consttext6.value = parseFloat(s1.toFixed(2));
		cnpen6.style.visibility='visible';
		cnlt6.value = "S1:";

		consttext7.value = parseFloat(s2.toFixed(2));
		cnpen7.style.visibility='visible';
		cnlt7.value = "S2:";
		break;

		case "5":
		var s = 2 * 3.14 * (parseFloat(consttext1.value) + parseFloat(consttext3.value)) * parseFloat(consttext2.value);
		var v1 = 3.14 * Math.pow(parseFloat(consttext1.value), 2) * parseFloat(consttext2.value);
		var ss1 = 3.14 * Math.pow(parseFloat(consttext1.value) + parseFloat(consttext3.value), 2);
		var ss2 = 3.14 * Math.pow(parseFloat(consttext1.value), 2);
		var s2 = (parseFloat(ss1) - parseFloat(ss2)) * parseFloat(consttext2.value);

		consttext5.value = parseFloat(s.toFixed(2));
		cnpen5.style.visibility='visible';
		cnlt5.value = "S:";

		consttext6.value = parseFloat(v1.toFixed(2));
		cnpen6.style.visibility='visible';
		cnlt6.value = "V1:";

		consttext7.value = parseFloat(s2.toFixed(2));
		cnpen7.style.visibility='visible';
		cnlt7.value = "S2:";
		break;

		case "6":
		if (parseFloat(consttext4.value) >= (parseFloat(consttext1.value) / 2))
			{
			alert("D cannot be greater than half of A. Change the values!");
			}
		else if (parseFloat(consttext4.value) >= (parseFloat(consttext2.value) / 2))
			{
			alert("D cannot be greater than half of B. Change the values!");
			}
		else
			{
			var s = (parseFloat(consttext1.value) * 2 + parseFloat(consttext2.value) * 2) * parseFloat(consttext3.value);
			var v1 = parseFloat(consttext1.value) * parseFloat(consttext2.value) * parseFloat(consttext3.value);
			var v2 = parseFloat(consttext1.value) * parseFloat(consttext2.value) * parseFloat(consttext3.value) - ((parseFloat(consttext1.value) - parseFloat(consttext4.value)) * (parseFloat(consttext2.value) - parseFloat(consttext4.value)) * (parseFloat(consttext3.value) - parseFloat(consttext4.value)));

			consttext5.value = parseFloat(s.toFixed(2));
			cnpen5.style.visibility='visible';
			cnlt5.value = "S:";

			consttext6.value = parseFloat(v1.toFixed(2));
			cnpen6.style.visibility='visible';
			cnlt6.value = "V1:";

			consttext7.value = parseFloat(v2.toFixed(2));
			cnpen7.style.visibility='visible';
			cnlt7.value = "V2:";
			}
		break;

		case "7":
		if (parseFloat(consttext1.value) >= (parseFloat(consttext2.value) + parseFloat(consttext3.value)))
			{
			alert("A cannot be greater than B + C. Change the values!");
			}
		else if (parseFloat(consttext2.value) >= (parseFloat(consttext1.value) + parseFloat(consttext3.value)))
			{
			alert("B cannot be greater than A + C. Change the values!");
			}
		else if (parseFloat(consttext3.value) >= (parseFloat(consttext2.value) + parseFloat(consttext1.value)))
			{
			alert("C cannot be greater than A + B. Change the values!");
			}
		else
			{
			var p = (parseFloat(consttext1.value) + parseFloat(consttext2.value) + parseFloat(consttext3.value)) / 2;
			var s = Math.sqrt(parseFloat(p) * (parseFloat(p) - parseFloat(consttext1.value)) * (parseFloat(p) - parseFloat(consttext2.value)) * (parseFloat(p) - parseFloat(consttext3.value)));

			consttext5.value = parseFloat(s.toFixed(2));
			cnpen5.style.visibility='visible';
			cnlt5.value = "S:";
			}
		break;

		case "8":
		if (parseFloat(consttext3.value) > 179)
			{
			alert("The angel cannot be greater than 179 degrees. Change the values!");
			}
		else
			{
			var rd = parseFloat(consttext3.value) * 3.14 / 180;
			var s = 0.5 * parseFloat(consttext1.value) * parseFloat(consttext2.value) * Math.sin(parseFloat(rd));
			var l = Math.sqrt(Math.pow(parseFloat(consttext1.value), 2) + Math.pow(parseFloat(consttext2.value), 2) - 2 * parseFloat(consttext1.value) * parseFloat(consttext2.value) * Math.cos(parseFloat(rd)));

			consttext5.value = parseFloat(s.toFixed(2));
			cnpen5.style.visibility='visible';
			cnlt5.value = "S:";

			consttext6.value = parseFloat(l.toFixed(2));
			cnpen6.style.visibility='visible';
			cnlt6.value = "L:";
			}
		break;

		case "9":
		if (parseFloat(consttext1.value) >= (parseFloat(consttext2.value) + parseFloat(consttext3.value) + parseFloat(consttext4.value)))
			{
			alert("A cannot be greater than B + C + D. Change the values!");
			}
		else if (parseFloat(consttext2.value) >= (parseFloat(consttext1.value) + parseFloat(consttext3.value) + parseFloat(consttext4.value)))
			{
			alert("B cannot be greater than A + C + D. Change the values!");
			}
		else if (parseFloat(consttext3.value) >= (parseFloat(consttext2.value) + parseFloat(consttext1.value) + parseFloat(consttext4.value)))
			{
			alert("C cannot be greater than A + B + D. Change the values!");
			}
		else if (parseFloat(consttext4.value) >= (parseFloat(consttext2.value) + parseFloat(consttext1.value) + parseFloat(consttext3.value)))
			{
			alert("D cannot be greater than A + B + C. Change the values!");
			}
		else
			{
			var p = (parseFloat(consttext1.value) + parseFloat(consttext2.value) + parseFloat(consttext3.value) + parseFloat(consttext4.value)) / 2;
			var s = Math.sqrt((parseFloat(p) - parseFloat(consttext1.value)) * (parseFloat(p) - parseFloat(consttext2.value)) * (parseFloat(p) - parseFloat(consttext3.value)) * (parseFloat(p) - parseFloat(consttext4.value)));

			consttext5.value = parseFloat(s.toFixed(2));
			cnpen5.style.visibility='visible';
			cnlt5.value = "S:";
			}
		break;

		case "10":
		var l = Math.sqrt(Math.pow((parseFloat(consttext1.value) - parseFloat(consttext3.value)), 2) + Math.pow(parseFloat(consttext2.value), 2));
		var s = 3.14 * parseFloat(l) * (parseFloat(consttext1.value) + parseFloat(consttext3.value));
		var s2 = 3.14 * (Math.pow(parseFloat(consttext1.value), 2) + Math.pow(parseFloat(consttext3.value), 2) + parseFloat(l) * (parseFloat(consttext1.value) + parseFloat(consttext3.value)));
		var v = (3.14 / 3) * parseFloat(consttext2.value) * (Math.pow((parseFloat(consttext1.value)), 2) + parseFloat(consttext1.value) * parseFloat(consttext3.value) + Math.pow((parseFloat(consttext3.value)), 2));

		consttext5.value = parseFloat(s.toFixed(2));
		cnpen5.style.visibility='visible';
		cnlt5.value = "S:";

		consttext6.value = parseFloat(s2.toFixed(2));
		cnpen6.style.visibility='visible';
		cnlt6.value = "S2:";

		consttext7.value = parseFloat(v.toFixed(2));
		cnpen7.style.visibility='visible';
		cnlt7.value = "V:";
		break;

		case "11":
		if (parseFloat(consttext2.value) >= parseFloat(consttext3.value))
			{
			alert("B cannot be greater than C. Change the values!");
			}
		else
			{
			var s1 = parseFloat(consttext4.value) * Math.sqrt(Math.pow((parseFloat(consttext3.value)), 2) + Math.pow((parseFloat(consttext1.value) / 2), 2));
			var s2 = 0.5 * (parseFloat(consttext1.value) * parseFloat(consttext3.value));
			var l = parseFloat(consttext1.value) / parseFloat(consttext3.value) * (parseFloat(consttext3.value) -parseFloat(consttext2.value));

			consttext5.value = parseFloat(s1.toFixed(2));
			cnpen5.style.visibility='visible';
			cnlt5.value = "S1:";

			consttext6.value = parseFloat(s2.toFixed(2));
			cnpen6.style.visibility='visible';
			cnlt6.value = "S2:";

			consttext7.value = parseFloat(l.toFixed(2));
			cnpen7.style.visibility='visible';
			cnlt7.value = "L:";
			}
		break;

		case "12":
		if (parseFloat(consttext2.value) >= parseFloat(consttext4.value))
			{
			alert("B cannot be greater than D. Change the values!");
			}
		else if (parseFloat(consttext3.value) >= parseFloat(consttext1.value))
			{
			alert("C cannot be greater than A. Change the values!");
			}
		else
			{
			var s = (parseFloat(consttext2.value) * parseFloat(consttext1.value) + parseFloat(consttext4.value) * parseFloat(consttext3.value)) / 2;
			var l  = 2 * Math.sqrt(Math.pow(((parseFloat(consttext1.value) - parseFloat(consttext3.value)) / 2), 2) + Math.pow((parseFloat(consttext2.value)), 2)) + 2 * Math.sqrt(Math.pow((parseFloat(consttext3.value) / 2), 2) + Math.pow((parseFloat(consttext4.value) - parseFloat(consttext2.value)), 2));

			consttext5.value = parseFloat(s.toFixed(2));
			cnpen5.style.visibility='visible';
			cnlt5.value = "S:";

			consttext6.value = parseFloat(l.toFixed(2));
			cnpen6.style.visibility='visible';
			cnlt6.value = "L:";
			}
		break;
		}
	}
function const_onefirstmemorybutton()
	{
	if (cn1 == 1)
		{
		firstmemory.value = consttext1.value;
		localStorage.setItem('firstmemory', firstmemory.value);
		}
	else if (cn2 == 1)
		{
		firstmemory.value = consttext2.value;
		localStorage.setItem('firstmemory', firstmemory.value);
		}
	else if (cn3 == 1)
		{
		firstmemory.value = consttext3.value;
		localStorage.setItem('firstmemory', firstmemory.value);
		}
	else if (cn4 == 1)
		{
		firstmemory.value = consttext4.value;
		localStorage.setItem('firstmemory', firstmemory.value);
		}
	else if (cn5 == 1)
		{
		firstmemory.value = consttext5.value;
		localStorage.setItem('firstmemory', firstmemory.value);
		}
	else if (cn6 == 1)
		{
		firstmemory.value = consttext6.value;
		localStorage.setItem('firstmemory', firstmemory.value);
		}
	else if (cn7 == 1)
		{
		firstmemory.value = consttext7.value;
		localStorage.setItem('firstmemory', firstmemory.value);
		}
	}
function const_twofirstmemorybutton()
	{
	if (cn1 == 1)
		{
		consttext1.value = firstmemory.value;
		localStorage.setItem('firstmemory', firstmemory.value);
		}
	else if (cn2 == 1)
		{
		consttext2.value = firstmemory.value;
		localStorage.setItem('firstmemory', firstmemory.value);
		}
	else if (cn3 == 1)
		{
		consttext3.value = firstmemory.value;
		localStorage.setItem('firstmemory', firstmemory.value);
		}
	else if (cn4 == 1)
		{
		consttext4.value = firstmemory.value;
		localStorage.setItem('firstmemory', firstmemory.value);
		}
	}
function const_threefirstmemorybutton()
	{
	firstmemory.value = 0;
	localStorage.setItem('firstmemory', firstmemory.value);
	}
function const_onesecondmemorybutton()
	{
	if (cn1 == 1)
		{
		secondmemory.value = consttext1.value;
		localStorage.setItem('secondmemory', secondmemory.value);
		}
	else if (cn2 == 1)
		{
		secondmemory.value = consttext2.value;
		localStorage.setItem('secondmemory', secondmemory.value);
		}
	else if (cn3 == 1)
		{
		secondmemory.value = consttext3.value;
		localStorage.setItem('secondmemory', secondmemory.value);
		}
	else if (cn4 == 1)
		{
		secondmemory.value = consttext4.value;
		localStorage.setItem('secondmemory', secondmemory.value);
		}
	else if (cn5 == 1)
		{
		secondmemory.value = consttext5.value;
		localStorage.setItem('secondmemory', secondmemory.value);
		}
	else if (cn6 == 1)
		{
		secondmemory.value = consttext6.value;
		localStorage.setItem('secondmemory', secondmemory.value);
		}
	else if (cn7 == 1)
		{
		secondmemory.value = consttext7.value;
		localStorage.setItem('secondmemory', secondmemory.value);
		}
	}
function const_twosecondmemorybutton()
	{
	if (cn1 == 1)
		{
		consttext1.value = secondmemory.value;
		localStorage.setItem('secondmemory', secondmemory.value);
		}
	else if (cn2 == 1)
		{
		consttext2.value = secondmemory.value;
		localStorage.setItem('secondmemory', secondmemory.value);
		}
	else if (cn3 == 1)
		{
		consttext3.value = secondmemory.value;
		localStorage.setItem('secondmemory', secondmemory.value);
		}
	else if (cn4 == 1)
		{
		consttext4.value = secondmemory.value;
		localStorage.setItem('secondmemory', secondmemory.value);
		}
	}
function const_threesecondmemorybutton()
	{
	secondmemory.value = 0;
	localStorage.setItem('secondmemory', secondmemory.value);
	}
function const_onethirdmemorybutton()
	{
	if (cn1 == 1)
		{
		thirdmemory.value = consttext1.value;
		localStorage.setItem('thirdmemory', thirdmemory.value);
		}
	else if (cn2 == 1)
		{
		thirdmemory.value = consttext2.value;
		localStorage.setItem('thirdmemory', thirdmemory.value);
		}
	else if (cn3 == 1)
		{
		thirdmemory.value = consttext3.value;
		localStorage.setItem('thirdmemory', thirdmemory.value);
		}
	else if (cn4 == 1)
		{
		thirdmemory.value = consttext4.value;
		localStorage.setItem('thirdmemory', thirdmemory.value);
		}
	else if (cn5 == 1)
		{
		thirdmemory.value = consttext5.value;
		localStorage.setItem('thirdmemory', thirdmemory.value);
		}
	else if (cn6 == 1)
		{
		thirdmemory.value = consttext6.value;
		localStorage.setItem('thirdmemory', thirdmemory.value);
		}
	else if (cn7 == 1)
		{
		thirdmemory.value = consttext7.value;
		localStorage.setItem('thirdmemory', thirdmemory.value);
		}
	}
function const_twothirdmemorybutton()
	{
	if (cn1 == 1)
		{
		consttext1.value = thirdmemory.value;
		localStorage.setItem('thirdmemory', thirdmemory.value);
		}
	else if (cn2 == 1)
		{
		consttext2.value = thirdmemory.value;
		localStorage.setItem('thirdmemory', thirdmemory.value);
		}
	else if (cn3 == 1)
		{
		consttext3.value = thirdmemory.value;
		localStorage.setItem('thirdmemory', thirdmemory.value);
		}
	else if (cn4 == 1)
		{
		consttext4.value = thirdmemory.value;
		localStorage.setItem('thirdmemory', thirdmemory.value);
		}
	}
function const_threethirdmemorybutton()
	{
	thirdmemory.value = 0;
	localStorage.setItem('thirdmemory', thirdmemory.value);
	}
