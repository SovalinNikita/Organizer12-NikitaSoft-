if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) 
{
document.write('<link  rel="stylesheet" href="mobilestyle.css">');
} 

else 
{
document.write('<link  rel="stylesheet" href="computerstyle.css">');
} 
//[[[1,3,2022,25,50,1250,300],[8,3,2022,25,50,1250,600],[14,3,2022,25,50,1250,900]],[[0]],[[0]]]
var gas = [
// day month year volume price summary mileage
[[0]],

[[0]],

[[0]]];
var start;
var si = 0;
if ((localStorage.getItem("gas_m")) != null && localStorage.getItem('ch_m') != null){
	ch = localStorage.getItem('ch_m');
	gas = JSON.parse(localStorage.getItem("gas_m"));
	si = localStorage.getItem('si');
	console.log(gas[ch][0][3]);
	start = 1;
	}
else{localStorage.setItem('gas_m', JSON.stringify(gas));}
if (localStorage.getItem('ch_m') == null){
	var ch = 0;
	localStorage.setItem('ch_m', ch);
	}
if (gas[ch] == 0){start = 0;}
console.log(start, gas[ch]);
var mon = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
var sys = [["Gal", "L"], ["Mil", "KM"]];
var dt = 0, dch = "30";
var datecheck = 0;
var h = parseFloat(gas[ch].length) - 1;
var b = parseFloat(gas[ch][h][5]);
var a = gas[ch][0][5];
var sm = 0, vl = 0;
localStorage.setItem('cl', 0);

function change(c){
ch = c;
localStorage.setItem('ch_m', ch);
datecheck = 0;
selgas();
}
function datechange(dc){
dch = dc;
datecheck = 0;
selgas();
}
function sichange(sc){
si = sc;
datecheck = 0;
localStorage.setItem('si', si); 
selgas();
}
function dtchange(dtch){
dt = dtch;
datecheck = 0;
selgas();
}
function clearlast(){
	var alrt = confirm("Are you sure? your last note will be deleted!");
	if (alrt == true){
		if (gas[ch].length > 1){
			gas[ch].pop();
			h = parseFloat(gas[ch].length) - 1;
			b = parseFloat(gas[ch][h][5]);
			}
		else if (gas[ch].length == 1){
			gas[ch][0] = 0;
			}
		selgas();
		}
	}
function changelast(){
	localStorage.setItem('cl', 1);
	window.location.href = 'petrol2.html';
	}
function selgas(){
text.value = "";
sm = 0, vl = 0;
if (gas[ch][0] != 0){
for (var i = 0; i <= (gas[ch].length - 1); i++)
	{
	var m = gas[ch][i][1] - 1;
	let d1 = new Date(gas[ch][i][2], (gas[ch][i][1] - 1), gas[ch][i][0], 0, 0, 0, 0);
	let date = new Date();
	let d2 = new Date();
	let d3 = new Date();
	if (si == 1)
		{
		var res1 = parseFloat(gas[ch][i][3]) * 3.785;
		var res2 = parseFloat(gas[ch][i][6]) * 1.61;
		var res3 = parseFloat(gas[ch][i][4]) / 3.785;
		}
	else 
		{
		var res1 = gas[ch][i][3];
		var res2 = gas[ch][i][6];
		var res3 = gas[ch][i][4];
		}

	if(dt == 0){
		switch (dch){
			case "all":
				vl += parseFloat(gas[ch][i][3]);
				sm += parseFloat(gas[ch][i][5]);
				var b = parseFloat(gas[ch][h][6]);
				var a = gas[ch][0][6];
				if (document.getElementById("text").value == ""){
					document.getElementById("text").value = gas[ch][i][0] + mon[m] + gas[ch][i][2] + " " + res1.toFixed(2) + sys[0][si] + " " + res3.toFixed(2) + " " + gas[ch][i][5] + " " + res2.toFixed(0) + sys[1][si];
					} 
				else
					{
					document.getElementById("text").value += "\n" + gas[ch][i][0] + mon[m] + gas[ch][i][2] + " " + res1.toFixed(2) + sys[0][si] + " " + res3.toFixed(2) + " " + gas[ch][i][5] + " " + res2.toFixed(0) + sys[1][si];
					}
			break;
	
			case "30":
				d2 = new Date();
				d2.setDate(d2.getDate()-30);

				if (d1 >= d2)
					{
					vl += parseFloat(gas[ch][i][3]);
					sm += parseFloat(gas[ch][i][5]);
				if (document.getElementById("text").value == ""){
					document.getElementById("text").value = gas[ch][i][0] + mon[m] + gas[ch][i][2] + " " + res1.toFixed(2) + sys[0][si] + " " + res3.toFixed(2) + " " + gas[ch][i][5] + " " + res2.toFixed(0) + sys[1][si];
					} 
				else
					{
					document.getElementById("text").value += "\n" + gas[ch][i][0] + mon[m] + gas[ch][i][2] + " " + res1.toFixed(2) + sys[0][si] + " " + res3.toFixed(2) + " " + gas[ch][i][5] + " " + res2.toFixed(0) + sys[1][si];
					}
					}
				if (d1 > d2 && datecheck == 0){
					a = gas[ch][i][6];
					datecheck = 1;
					}
				b = parseFloat(gas[ch][h][6]);
				date.setDate(date.getDate()-30);
				document.getElementById('date1').valueAsDate = new Date(date);
				document.getElementById('date2').valueAsDate = new Date();

			break;
	
			case "7":
				d2 = new Date();
				d2.setDate(d2.getDate()-7);
				if (d1 > d2 || d1 == d2)
					{
					vl += parseFloat(gas[ch][i][3]);
					sm += parseFloat(gas[ch][i][5]);
				if (document.getElementById("text").value == ""){
					document.getElementById("text").value = gas[ch][i][0] + mon[m] + gas[ch][i][2] + " " + res1.toFixed(2) + sys[0][si] + " " + res3.toFixed(2) + " " + gas[ch][i][5] + " " + res2.toFixed(0) + sys[1][si];
					} 
				else
					{
					document.getElementById("text").value += "\n" + gas[ch][i][0] + mon[m] + gas[ch][i][2] + " " + res1.toFixed(2) + sys[0][si] + " " + res3.toFixed(2) + " " + gas[ch][i][5] + " " + res2.toFixed(0) + sys[1][si];
					}
					}
				if (d1 > d2 && datecheck == 0){
					a = gas[ch][i][6];
					datecheck = 1;
					}
				b = parseFloat(gas[ch][h][6]);
				date.setDate(date.getDate()-7);
				document.getElementById('date1').valueAsDate = new Date(date);
				document.getElementById('date2').valueAsDate = new Date();

			break;
			}
		}
	else if (dt == 1){
			d2 = new Date(date1.value);
			d3 = new Date(date2.value);
			if (d1 > d2 && datecheck == 0){
				a = gas[ch][i][6];
				datecheck = 1;
				}
			else if (d1 > d3 && datecheck == 1)
				{
				b = gas[ch][i - 1][6];
				}
			else if (d3 > d1){
				b = parseFloat(gas[ch][h][6]);
				}
			if (d1 >= d2 && d1 <= d3)
				{
				vl += parseFloat(gas[ch][i][3]);
				sm += parseFloat(gas[ch][i][5]);
					if (document.getElementById("text").value == ""){
						document.getElementById("text").value = gas[ch][i][0] + mon[m] + gas[ch][i][2] + " " + res1.toFixed(2) + sys[0][si] + " " + res3.toFixed(2) + " " + res2.toFixed(0) + " " + gas[ch][i][6] + sys[1][si];
						} 
					else
						{
						document.getElementById("text").value += "\n" + gas[ch][i][0] + mon[m] + gas[ch][i][2] + " " + res1.toFixed(2) + sys[0][si] + " " + res3.toFixed(2) + " " + res2.toFixed(0) + " " + gas[ch][i][6] + sys[1][si];
						}
					}
		}
	}
console.log(start);
if (gas[ch].length < 2 || start == 0){
	mileage.value = "";
	summary.value = "";
	volume.value = "";
	intcons.value = "";
	if (gas[ch].length >= 2){start = 1}
	}
else if (start == 1) {
	if (si == 1)
		{
		mileage.value = ((parseFloat(b) - parseFloat(a)) * 1.61).toFixed(0) + sys[1][si];
		summary.value = "sum:" + sm.toFixed(2);
		volume.value = (parseFloat(vl) * 3.785).toFixed(2) + sys[0][si];
		intcons.value = (100 * parseFloat(volume.value) / parseFloat(mileage.value)).toFixed(2);
		}
	else 
		{
		mileage.value = (parseFloat(b) - parseFloat(a)).toFixed(0) + sys[1][si];
		summary.value = "sum:" + sm.toFixed(2);
		volume.value = vl + sys[0][si];
		intcons.value = (parseFloat(mileage.value) / parseFloat(volume.value)).toFixed(2);
		}
	
	}	
}
else {
document.getElementById("text").value = "";
}
localStorage.setItem('si', si); 
localStorage.setItem('gas_m', JSON.stringify(gas));
localStorage.setItem('ch_m', ch);
}












