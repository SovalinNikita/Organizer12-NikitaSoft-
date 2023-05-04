if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) 
{
document.write('<link  rel="stylesheet" href="mobilestyle.css">');
} 

else 
{
document.write('<link  rel="stylesheet" href="computerstyle.css">');
} 
var m = 80, k = 0.7, hr = 0, prom1 = 0, prom2 = 0, prom3 = 0, prom4 = 0;

function genderchange(g){
	k = g;
	result();
	}

function masschange(ms){
	m = ms;
	result();
	}

function percent1_2(p){
	percent2.value = p;
	result();
	}

function percent10_14(p){
	percent14.value = p;
	result();
	}

function percent20_25(p){
	percent25.value = p;
	result();
	}

function percent25_45(p){
	percent45.value = p;
	result();
	}

function alcohours(h){
	hours.value = h;
	hr = h;
	result();
	}

function result(){
	prom4 = parseFloat(percent2.value) *(7 / 100) / (parseFloat(m) * parseFloat(k));
	prom3 = parseFloat(percent14.value) *(14 / 100) / (parseFloat(m) * parseFloat(k));
	prom2 = parseFloat(percent25.value) *(25 / 100) / (parseFloat(m) * parseFloat(k));
	prom1 = parseFloat(percent45.value) *(45 / 100) / (parseFloat(m) * parseFloat(k));
	res.value = (prom1 + prom2 + prom3 + prom4 - (0.2 * hr)).toFixed(2);
	res_hours.value = ((prom1 + prom2 + prom3 + prom4) / 0.2).toFixed(2);
	if ((prom1 + prom2 + prom3 + prom4 - (0.2 * hr)).toFixed(2) < 0){
		res.value = 0;
		}
	}
