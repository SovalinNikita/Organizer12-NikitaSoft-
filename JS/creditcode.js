if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) 
{
document.write('<link  rel="stylesheet" href="mobilestyle.css">');
} 

else 
{
document.write('<link  rel="stylesheet" href="computerstyle.css">');
} 

var v = 0, oned = 0, twod = 0, round;

function creditwritescript(w)
	{
	if (c1 == 1 && credittext1.value == "0")
		{
		credittext1.value = w;
		}
	else if (c1 == 1 && credittext1.value != "0")
		{
		credittext1.value += w;
		}
	else if (c2 == 1 && credittext2.value == "0")
		{
		credittext2.value = w;
		}
	else if (c2 == 1 && credittext2.value != "0")
		{
		credittext2.value += w;
		}
	else if (c3 == 1 && credittext3.value == "0")
		{
		credittext3.value = w;
		}
	else if (c3 == 1 && credittext3.value != "0")
		{
		credittext3.value += w;
		}
	else if (c4 == 1 && credittext4.value == "0")
		{
		credittext4.value = w;
		}
	else if (c4 == 1 && credittext4.value != "0")
		{
		credittext4.value += w;
		}
	}   
var dc1 = 0, dc2 = 0, dc3 = 0, dc4 = 0;
function dotwritecredit()
	{
	if (c1 == 1 && dc1 == 0)
		{
		credittext1.value += ".";
		dc1 = 1;
		}
	else if (c2 == 1 && dc2 == 0)
		{
		credittext2.value += ".";
		dc2 = 1;
		}
	else if (c3 == 1 && dc3 == 0)
		{
		credittext3.value += ".";
		dc3 = 1;
		}
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
		
		document.getElementById('credittext1').style.backgroundColor='#fffbc2';
		document.getElementById('credittext2').style.backgroundColor='white';
		document.getElementById('credittext3').style.backgroundColor='white';
		document.getElementById('credittext4').style.backgroundColor='white';
		document.getElementById('credittext5').style.backgroundColor='white';
		document.getElementById('credittext6').style.backgroundColor='white';
		document.getElementById('credittext7').style.backgroundColor='white';


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

		document.getElementById('credittext1').style.backgroundColor='white';
		document.getElementById('credittext2').style.backgroundColor='#fffbc2';
		document.getElementById('credittext3').style.backgroundColor='white';
		document.getElementById('credittext4').style.backgroundColor='white';
		document.getElementById('credittext5').style.backgroundColor='white';
		document.getElementById('credittext6').style.backgroundColor='white';
		document.getElementById('credittext7').style.backgroundColor='white';

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

		document.getElementById('credittext1').style.backgroundColor='white';
		document.getElementById('credittext2').style.backgroundColor='white';
		document.getElementById('credittext3').style.backgroundColor='#fffbc2';
		document.getElementById('credittext4').style.backgroundColor='white';
		document.getElementById('credittext5').style.backgroundColor='white';
		document.getElementById('credittext6').style.backgroundColor='white';
		document.getElementById('credittext7').style.backgroundColor='white';

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

		document.getElementById('credittext1').style.backgroundColor='white';
		document.getElementById('credittext2').style.backgroundColor='white';
		document.getElementById('credittext3').style.backgroundColor='white';
		document.getElementById('credittext4').style.backgroundColor='#fffbc2';
		document.getElementById('credittext5').style.backgroundColor='white';
		document.getElementById('credittext6').style.backgroundColor='white';
		document.getElementById('credittext7').style.backgroundColor='white';

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

		document.getElementById('credittext1').style.backgroundColor='white';
		document.getElementById('credittext2').style.backgroundColor='white';
		document.getElementById('credittext3').style.backgroundColor='white';
		document.getElementById('credittext4').style.backgroundColor='white';
		document.getElementById('credittext5').style.backgroundColor='#fffbc2';
		document.getElementById('credittext6').style.backgroundColor='white';
		document.getElementById('credittext7').style.backgroundColor='white';

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

		document.getElementById('credittext1').style.backgroundColor='white';
		document.getElementById('credittext2').style.backgroundColor='white';
		document.getElementById('credittext3').style.backgroundColor='white';
		document.getElementById('credittext4').style.backgroundColor='white';
		document.getElementById('credittext5').style.backgroundColor='white';
		document.getElementById('credittext6').style.backgroundColor='#fffbc2';
		document.getElementById('credittext7').style.backgroundColor='white';

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

		document.getElementById('credittext1').style.backgroundColor='white';
		document.getElementById('credittext2').style.backgroundColor='white';
		document.getElementById('credittext3').style.backgroundColor='white';
		document.getElementById('credittext4').style.backgroundColor='white';
		document.getElementById('credittext5').style.backgroundColor='white';
		document.getElementById('credittext6').style.backgroundColor='white';
		document.getElementById('credittext7').style.backgroundColor='#fffbc2';

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
		credittext1.value = 0;
		dc1 = 0;
		}
	else if (c2 == 1)
		{
		credittext2.value = 0;
		dc2 = 0;
		}
	else if (c3 == 1)
		{
		credittext3.value = 0;
		dc3 = 0;
		}
	else if (c4 == 1)
		{
		credittext4.value = 0;
		}
	}
function creditclearall()
	{
	credittext1.value = 0;
	credittext2.value = 0;
	credittext3.value = 0;
	credittext4.value = 0;
	credittext5.value = 0;
	credittext6.value = 0;
	credittext7.value = 0;
	dc1 = 0;
	dc2 = 0;
	dc3 = 0;
	creditone();
	}
function credit0101memorybutton()
	{
	if (c1 == 1)
		{
		firstmemory.value = credittext1.value;
		localStorage.setItem('firstmemory', firstmemory.value);
		}
	else if (c2 == 1)
		{
		firstmemory.value = credittext2.value;
		localStorage.setItem('firstmemory', firstmemory.value);
		}
	else if (c3 == 1)
		{
		firstmemory.value = credittext3.value;
		localStorage.setItem('firstmemory', firstmemory.value);
		}
	else if (c4 == 1)
		{
		firstmemory.value = credittext4.value;
		localStorage.setItem('firstmemory', firstmemory.value);
		}
	else if (c5 == 1)
		{
		firstmemory.value = credittext5.value;
		localStorage.setItem('firstmemory', firstmemory.value);
		}
	else if (c6 == 1)
		{
		firstmemory.value = credittext6.value;
		localStorage.setItem('firstmemory', firstmemory.value);
		}
	else if (c7 == 1)
		{
		firstmemory.value = credittext7.value;
		localStorage.setItem('firstmemory', firstmemory.value);
		}
	}
function credit0201memorybutton()
	{
	if (c1 == 1)
		{
		credittext1.value = firstmemory.value;
		localStorage.setItem('firstmemory', firstmemory.value);
		}
	else if (c2 == 1)
		{
		credittext2.value = firstmemory.value;
		localStorage.setItem('firstmemory', firstmemory.value);
		}
	else if (c3 == 1)
		{
		credittext3.value = firstmemory.value;
		localStorage.setItem('firstmemory', firstmemory.value);
		}
	else if (c4 == 1)
		{
		credittext4.value = firstmemory.value;
		localStorage.setItem('firstmemory', firstmemory.value);
		}
	}
function credit0301memorybutton()
	{
	firstmemory.value = 0;
	localStorage.setItem('firstmemory', firstmemory.value);
	}
function credit0102memorybutton()
	{
	if (c1 == 1)
		{
		secondmemory.value = credittext1.value;
		localStorage.setItem('secondmemory', secondmemory.value);
		}
	else if (c2 == 1)
		{
		secondmemory.value = credittext2.value;
		localStorage.setItem('secondmemory', secondmemory.value);
		}
	else if (c3 == 1)
		{
		secondmemory.value = credittext3.value;
		localStorage.setItem('secondmemory', secondmemory.value);
		}
	else if (c4 == 1)
		{
		secondmemory.value = credittext4.value;
		localStorage.setItem('secondmemory', secondmemory.value);
		}
	else if (c5 == 1)
		{
		secondmemory.value = credittext5.value;
		localStorage.setItem('secondmemory', secondmemory.value);
		}
	else if (c6 == 1)
		{
		secondmemory.value = credittext6.value;
		localStorage.setItem('secondmemory', secondmemory.value);
		}
	else if (c7 == 1)
		{
		secondmemory.value = credittext7.value;
		localStorage.setItem('secondmemory', secondmemory.value);
		}
	}
function credit0202memorybutton()
	{
	if (c1 == 1)
		{
		credittext1.value = secondmemory.value;
		localStorage.setItem('secondmemory', secondmemory.value);
		}
	else if (c2 == 1)
		{
		credittext2.value = secondmemory.value;
		localStorage.setItem('secondmemory', secondmemory.value);
		}
	else if (c3 == 1)
		{
		credittext3.value = secondmemory.value;
		localStorage.setItem('secondmemory', secondmemory.value);
		}
	else if (c4 == 1)
		{
		credittext4.value = secondmemory.value;
		localStorage.setItem('secondmemory', secondmemory.value);
		}
	}
function credit0302memorybutton()
	{
	secondmemory.value = 0;
	localStorage.setItem('secondmemory', secondmemory.value);
	}
function credit0103memorybutton()
	{
	if (c1 == 1)
		{
		thirdmemory.value = credittext1.value;
		localStorage.setItem('thirdmemory', thirdmemory.value);
		}
	else if (c2 == 1)
		{
		thirdmemory.value = credittext2.value;
		localStorage.setItem('thirdmemory', thirdmemory.value);
		}
	else if (c3 == 1)
		{
		thirdmemory.value = credittext3.value;
		localStorage.setItem('thirdmemory', thirdmemory.value);
		}
	else if (c4 == 1)
		{
		thirdmemory.value = credittext4.value;
		localStorage.setItem('thirdmemory', thirdmemory.value);
		}
	else if (c5 == 1)
		{
		thirdmemory.value = credittext5.value;
		localStorage.setItem('thirdmemory', thirdmemory.value);
		}
	else if (c6 == 1)
		{
		thirdmemory.value = credittext6.value;
		localStorage.setItem('thirdmemory', thirdmemory.value);
		}
	else if (c7 == 1)
		{
		thirdmemory.value = credittext7.value;
		localStorage.setItem('thirdmemory', thirdmemory.value);
		}
	}
function credit0203memorybutton()
	{
	if (c1 == 1)
		{
		credittext1.value = thirdmemory.value;
		localStorage.setItem('thirdmemory', thirdmemory.value);
		}
	else if (c2 == 1)
		{
		credittext2.value = thirdmemory.value;
		localStorage.setItem('thirdmemory', thirdmemory.value);
		}
	else if (c3 == 1)
		{
		credittext3.value = thirdmemory.value;
		localStorage.setItem('thirdmemory', thirdmemory.value);
		}
	else if (c4 == 1)
		{
		credittext4.value = thirdmemory.value;
		localStorage.setItem('thirdmemory', thirdmemory.value);
		}
	}
function credit0303memorybutton()
	{
	thirdmemory.value = 0;
	localStorage.setItem('thirdmemory', thirdmemory.value);	
	}
function CEcredit()
	{
	if (c1 == 1 && credittext1.value != "")
		{
                var str = credittext1.value;
		var last = credittext1.value.slice(-1);
                credittext1.value = str.substring(0, str.length-1);
		if (last == ".")
                	{
                    	dc1 = 0;
                	}
		}
	else if (c1 == 1 && credittext1.value == "")
		{
                credittext1.value = 0;
		}
	else if (c2 == 1 && credittext2.value != "")
		{
                var str = credittext2.value;
		var last = credittext2.value.slice(-1);
                credittext2.value = str.substring(0, str.length-1);
		if (last == ".")
                	{
                    	dc2 = 0;
                	}
		}
	else if (c2 == 1 && credittext2.value == "")
		{
                credittext2.value = 0;
		}
	else if (c3 == 1 && credittext3.value != "")
		{
                var str = credittext3.value;
		var last = credittext3.value.slice(-1);
                credittext3.value = str.substring(0, str.length-1);
		}
		if (last == ".")
                	{
                    	dc3 = 0;
                	}
	else if (c3 == 1 && credittext3.value == "")
		{
                credittext3.value = 0;
		}
	else if (c4 == 1 && credittext4.value != "")
		{
                var str = credittext4.value;
		var last = credittext4.value.slice(-1);
                credittext4.value = str.substring(0, str.length-1);
		}
	else if (c4 == 1 && credittext4.value == "")
		{
                credittext4.value = 0;
		}
	}
function Creditequally()
	{
	if (credittext1.value != "0" && credittext2.value != "0" && credittext3.text != "0" && credittext3.value < 99 && credittext4.value != "0")
		{
	    var s = credittext1.value;
	    var i = credittext2.value;
	    var f = credittext3.value;
	    var n = credittext4.value;
	    i = i / 100 / 12;
	    var ii = i + 1;
	    var nn = Math.pow(ii, n);
	    var p = s * (i + (i / (nn - 1)));
	    var r1 = p.toFixed(2);
	    credittext5.value = r1;	    
	    var op = p * n - s;
	    var r2 = op.toFixed(2);
	    credittext6.value = r2;
	    var r3 = s / 100 * f;
	    credittext7.value = r3;
		}
	else if (credittext1.value == "0" || credittext2.value == "0" || credittext3.text != "0" || credittext3.value > 99 || credittext4.value == "0")
		{
		alert ("please enter all required values");
		}
	}













