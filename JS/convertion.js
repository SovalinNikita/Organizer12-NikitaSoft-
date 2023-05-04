if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent))
{
document.write('<link  rel="stylesheet" href="mobilestyle.css">');
}

else
{
document.write('<link  rel="stylesheet" href="computerstyle.css">');
}

var kon = [
[[1, "mm", 1], [2, "cm", 10], [3, "dm", 100], [4, "m", 1000], [5, "km", 1000000], [6, "inch", 25.4], [7, "foot", 304.8], [8, "yard", 914.4], [9, "cable", 185200], [10, "mile", 1609344], [11, "nautical mile", 1852000]],
[[1, "m/sec", 1], [2, "km/h", 0.277777778], [3, "foot/sec", 0.3048], [4, "mile/h", 0.447], [5, "sea node", 0.514], [6, "Mach", 333]],
[[1, "gr", 1], [2, "carat", 0.2], [3, "kilogram", 1000], [4, "ton", 1000000], [5, "grain", 0.0648], [6, "ounce", 28.3495], [6, "pound", 453.59], [6, "long ton", 1016046.9], [6, "short ton", 907184.75]],
[[1, "cm²", 1], [2, "m²", 10000], [3, "km²", 10000000000], [4, "mile²", 25899881103.36], [5, "yard²", 8361.274], [6, "foot²", 929.03], [6, "inch²", 6.45], [6, "hectare", 100000000], [6, "1/100 hectare", 1000000], [6, "acre", 40468544.8]],
[[1, "cm³", 1], [2, "liter", 1000], [3, "m³", 1000000], [4, "barrel", 158.987], [5, "gallon", 3785], [6, "quart", 946.35], [6, "pint", 473.175], [6, "yard³", 764.555], [6, "foot³", 28316,85], [6, "inch³", 16.3]],
[[1, "C°", "c"], [2, "F° ", "f"], [3, "K° ", "k"]],
[[1, "h.p", 1], [2, "kwt", 1.36]],
[[1, "l/100km", "lkm"], [2, "MPG", "mg"]]
];
var ch = 0;
kf1 = kon[ch][0][2];
kf2 = kon[ch][0][2];
var v = 0, pm = 0, oned = 0, twod = 0, round;

function inputchange1()
	{
	document.getElementById('kn1').style.backgroundColor='#fffbc2';
	document.getElementById('kn2').style.backgroundColor='white';
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
 	if (pm == 1)
		{
		wmp.style.visibility='visible';
		}
	v = 0;
	}
function inputchange2()
	{
	document.getElementById('kn1').style.backgroundColor='white';
	document.getElementById('kn2').style.backgroundColor='#fffbc2';
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
	wmp.style.visibility='hidden';
	v = 1;
	}

function selopt(){
	while (k1.options.length > 0) {
		k1.remove(0);
		}
	while (k2.options.length > 0) {
		k2.remove(0);
		}
	for(var i = 0; i <= (kon[ch].length - 1); i++)
		{
		eval(`var op${i} = new Option(kon[ch][i][1], i);`);
		k1.add(eval(`op${i}`),undefined);

		eval(`var opt${i} = new Option(kon[ch][i][1], i);`);
		k2.add(eval(`opt${i}`),undefined);
		}
	if (ch == "5")
		{
		pm = 1;
		wmp.style.visibility='visible';
		}
	else
		{
		pm = 0;
		wmp.style.visibility='hidden';
		}

	document.getElementById('kn1').style.backgroundColor='white';
	document.getElementById('kn2').style.backgroundColor='white';
	v = 0;
	kn1.value = "0";
	kn2.value = "0";
	}

function change(c){
	ch = c;
	kf1 = kon[ch][0][2];
	kf2 = kon[ch][0][2];
	console.log(kf1);
	console.log(kf2);
	}

var kf1, kf2;

function kof1(kff1){
	kf1 = kon[ch][kff1][2];
	console.log(ch, kff1, kf1);
	}

function kof2(kff2){
	kf2 = kon[ch][kff2][2];
	console.log(ch, kff2, kf2);
	}
function res(){
	switch (kf1)
		{
		case "c":
		switch (kf2)
			{
			case "c":
			kn2.value = kn1.value;
			break;

			case "f":
			var res = (9 / 5) * parseFloat(kn1.value) + 32;
			kn2.value = parseFloat(res.toFixed(6));
			break;

			case "k":
			var res = parseFloat(kn1.value) + 273.15;
			kn2.value = parseFloat(res.toFixed(6));
			break;
			}
		break;

		case "f":
		switch (kf2)
			{
			case "c":
			var res = (5 / 9) * (parseFloat(kn1.value) - 32);
			kn2.value = parseFloat(res.toFixed(6));
			break;

			case "f":
			kn2.value = kn1.value;
			break;

			case "k":
			var res = (5 / 9) * parseFloat(kn1.value) + 273.15;
			kn2.value = parseFloat(res.toFixed(6));
			break;
			}
		break;

		case "k":
		switch (kf2)
			{
			case "c":
			var res = parseFloat(kn1.value) - 273.15;
			kn2.value = parseFloat(res.toFixed(6));
			break;

			case "f":
			kn2.value = (9 / 5) * (parseFloat(kn1.value) - 273.15) + 32;
			break;

			case "k":
			kn2.value = kn1.value;
			break;
			}
		break;

		case "lkm":
		switch (kf2)
			{
			case "lkm":
			kn2.value = kn1.value;
			break;

			case "mg":
			var res = 235.22 / parseFloat(kn1.value);
			kn2.value = parseFloat(res.toFixed(2));
			break;
			}
		break;

		case "mg":
		switch (kf2)
			{
			case "mg":
			kn2.value = kn1.value;
			break;

			case "lkm":
			var res = 235.22 / parseFloat(kn1.value);
			kn2.value = parseFloat(res.toFixed(2));
			break;
			}
		break
		}
	if (kf1 != "c" && kf1 != "f" && kf1 != "k" && kf1 != "lkm" && kf1 != "mg" && parseFloat(kn1.value) != 0)
		{
		var res = parseFloat(kn1.value) * parseFloat(kf1) / parseFloat(kf2);
		kn2.value = res.toFixed(2);
		}
	else if (kf1 != "c" && kf1 != "f" && kf1 != "k" && kf1 != "lkm" && kf1 != "mg" && parseFloat(kn1.value) == 0)
		{
		kn2.value = "0";
		}
	}

function writescript(w)
	{
	if (kn1.value == 0 && oned == 0)
		{
		kn1.value = w;
		}
	else if (kn1.value != 0 || oned == 1)
		{
		kn1.value = kn1.value + w;
		}
	}
function clearfunc()
	{
	kn1.value = 0;
	oned = 0;
	}
function onefirstmemorybutton()
	{
	if (v == 0)
		{
		firstmemory.value = kn1.value;
		localStorage.setItem('firstmemory', firstmemory.value);
		}
	else if (v == 1)
		{
		firstmemory.value = kn2.value;
		localStorage.setItem('firstmemory', firstmemory.value);
		}
	}
function twofirstmemorybutton()
	{
	if (v == 0)
		{
		kn1.value = firstmemory.value;
		}
	else if (v == 1)
		{
		kn2.value = firstmemory.value;
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
		secondmemory.value = kn1.value;
		localStorage.setItem('secondmemory', secondmemory.value);
		}
	else if (v == 1)
		{
		secondmemory.value = kn2.value;
		localStorage.setItem('secondmemory', secondmemory.value);
		}
	}
function twosecondmemorybutton()
	{
	if (v == 0)
		{
		kn1.value = secondmemory.value;
		}
	else if (v == 1)
		{
		kn2.value = secondmemory.value;
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
		thirdmemory.value = kn1.value;
		localStorage.setItem('thirdmemory', thirdmemory.value);
		}
	else if (v == 1)
		{
		thirdmemory.value = kn2.value;
		localStorage.setItem('thirdmemory', thirdmemory.value);
		}
	}
function twothirdmemorybutton()
	{
	if (v == 0)
		{
		kn1.value = thirdmemory.value;
		}
	else if (v == 1)
		{
		kn2.value = thirdmemory.value;
		}
	}
function threethirdmemorybutton()
	{
	thirdmemory.value = 0;
	localStorage.setItem('thirdmemory', thirdmemory.value);
	}
function dotwrite()
	{
	if (oned == 0)
		{
		kn1.value += ".";
		oned = 1;
		}
	}

function plusminusswitch()
	{
		kn1.value = kn1.value * (-1);
	}
function CE()
	{
	var kn1value = document.getElementById('kn1').value;
	if (kn1value.length != 1)
		{
                var str = kn1.value;
		var last = kn1.value.slice(-1);
                kn1.value = str.substring(0, str.length-1);
		if (last == ".")
                	{
                    	oned = 0;
                	}
		console.log(kn1value.length);
		}
	else if (kn1value.length == 1)
		{
                kn1.value = 0;
		res();
		}
	}
