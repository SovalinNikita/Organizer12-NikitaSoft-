if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) 
{
document.write('<link  rel="stylesheet" href="mobilestyle.css">');
} 

else 
{
document.write('<link  rel="stylesheet" href="computerstyle.css">');
} 
var mon = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
var p = 1, dp1 = 0, dp2 = 0, dp3 = 0;
function sichange(sc){
si = sc;
localStorage.setItem('si', si); 
load();
}

function load(){
	sii = localStorage.getItem('si'); 
	if (sii == 1)
		{
		mileage.value = "KM";
		volume.value = "L";
		}
	else 
		{
		mileage.value = "Mil";
		volume.value = "Gal";
		}
 
	if (localStorage.getItem('cl') == 1){
		var ch = localStorage.getItem('ch_m');
		let gas = JSON.parse(localStorage.getItem("gas_m"));
		var pl = gas[ch].length - 1;
		p1.value = parseFloat(gas[ch][pl][6]).toFixed(0);
		p2.value = gas[ch][pl][3];
		p3.value = gas[ch][pl][4];
		if (sii == 1){
			p1.value = (parseFloat(gas[ch][pl][6]) * 1.61).toFixed(0);
			p2.value = (parseFloat(gas[ch][pl][3]) * 3.785).toFixed(2);	
			p3.value = (parseFloat(gas[ch][pl][4]) / 3.785).toFixed(2);
			}
		var pd = new Date(gas[ch][pl][2], (gas[ch][pl][1] - 1), (gas[ch][pl][0] + 1));
		p4.valueAsDate = pd;
		console.log(pd);
		}
	}

function textchange1()
	{
	document.getElementById('p1').style.backgroundColor='#fffbc2';
	document.getElementById('p2').style.backgroundColor='white';
	document.getElementById('p3').style.backgroundColor='white';
	pic1.src = 'cb 2.png';
	pic2.src = 'cb 1.png';
	pic3.src = 'cb 1.png';
	p = 1;
	}
function textchange2()
	{
	document.getElementById('p1').style.backgroundColor='white';
	document.getElementById('p2').style.backgroundColor='#fffbc2';
	document.getElementById('p3').style.backgroundColor='white';
	pic1.src = 'cb 1.png';
	pic2.src = 'cb 2.png';
	pic3.src = 'cb 1.png';
	p = 2;
	}
function textchange3()
	{
	document.getElementById('p1').style.backgroundColor='white';
	document.getElementById('p2').style.backgroundColor='white';
	document.getElementById('p3').style.backgroundColor='#fffbc2';
	pic1.src = 'cb 1.png';
	pic2.src = 'cb 1.png';
	pic3.src = 'cb 2.png';
	p = 3;
	}
function petrol_write(w){
	if (p == 1){
		if (p1.value == "0"){
			p1.value = w;
			}
		else if (p1.value != "0"){
			p1.value += w;
			}
		}
	else if (p == 2){
		if (p2.value == "0"){
			p2.value = w;
			}
		else if (p2.value != "0"){
			p2.value += w;
			}
		}
	else if (p == 3){
		if (p3.value == "0"){
			p3.value = w;
			}
		else if (p3.value != "0"){
			p3.value += w;
			}
		}
	}   
function petrol_dotwrite()
	{
	if (p == 1 && dp1 == 0)
		{
		p1.value += ".";
		dp1 = 1;
		}
	else if (p == 2 && dp2 == 0)
		{
		p2.value += ".";
		dp2 = 1;
		}
	else if (p == 3 && dp3 == 0)
		{
		p3.value += ".";
		dp3 = 1;
		}
	}
function petrol_clear(){
	if (p == 1){
		p1.value = "0";
		dp1 = 0;
		}
	else if (p == 2){
		p2.value = "0";
		dp2 = 0;
		}
	else if (p == 3){
		p3.value = "0";
		dp3 = 0;
		}
	}
function petrol_CE(){
	if (p == 1){
		if (p1.value != ""){
			var str = p1.value;
			var last = p1.value.slice(-1);
                	p1.value = str.substring(0, str.length-1);
			if (last == ".")
                		{
                    		dp1 = 0;
                		}
			}
		else if (p1.value == ""){
			p1.value = 0;
			}	
		}
	else if (p == 2){
		if (p2.value != ""){
			var str = p2.value;
			var last = p2.value.slice(-1);
                	p2.value = str.substring(0, str.length-1);
			if (last == ".")
                		{
                    		dp2 = 0;
                		}
			}
		else if (p2.value == ""){
			p2.value = 0;
			}	
		}
	else if (p == 3){
		if (p3.value != ""){
			var str = p3.value;
			var last = p3.value.slice(-1);
                	p3.value = str.substring(0, str.length-1);
			if (last == ".")
                		{
                    		dp3 = 0;
                		}
			}
		else if (p3.value == ""){
			p3.value = 0;
			}	
		}
	}
function save(){
	var ch = localStorage.getItem('ch_m');
	let gas = JSON.parse(localStorage.getItem("gas_m"));
	var g1 = (new Date(p4.value)).getDate();
	var g2 = new Date(p4.value).getMonth() + 1;
	var g3 = new Date(p4.value).getFullYear();
	var g4 = parseFloat(p2.value);
	var g5 = parseFloat(p3.value);
	var g6 = (parseFloat(p2.value) * parseFloat(p3.value));
	var g7 = parseFloat(p1.value);	
	if (localStorage.getItem('si') == 1){
		g7 = parseFloat((parseFloat(p1.value) / 1.61).toFixed(0));
		g4 = parseFloat((parseFloat(p2.value) / 3.785).toFixed(2));
		g5 = parseFloat((parseFloat(p3.value) * 3.785).toFixed(2));
		}	
	var p = gas.length - 1;
	var pr = 1;
	if (gas[ch][0] != 0){
	var d1 = new Date(g3, g2, g1, 0, 0, 0, 0);
	var d2 = new Date(gas[p][2], (gas[p][1] + 1), gas[p][0], 0, 0, 0, 0);

	if (d1 < d2)
		{
		alert("The entered date must be greater than or equal to the date of the last record!");
		pr = 0;
		}
	if (isNaN(g3) == true)
		{
		alert("Enter the date!");
		pr = 0;
		}
	if (g7 <= gas[6] || g7 == 0)
		{
		alert("The entered mileage must be greater than the mileage of the last record!");
		pr = 0;
		}
	if (g4 == 0)
		{
		alert("The entered volume must be greater than zero!");
		pr = 0;
		}
	if (g5 == 0)
		{
		alert("The entered price must be greater than zero!");
		pr = 0;
		}
	if (pr == 1) {
		if (gas[ch] == 0){gas[ch].pop();}
		if (localStorage.getItem('cl') == 1){gas[ch].pop();}
		gas[ch].push([g1, g2, g3, g4, g5, g6, g7]);	
		localStorage.setItem('gas_m', JSON.stringify(gas));
		window.location.href = 'petrol.html';
		}
	}

	else {
		var d1 = new Date(g3, g2, g1, 0, 0, 0, 0);
		if (isNaN(g3) == true)
			{
			alert("Enter the date!");
			pr = 0;
			}
		if (g7 == 0)
			{
			alert("The entered mileage must be greater than zero!");
			pr = 0;
			}
		if (g4 == 0)
			{
			alert("The entered volume must be greater than zero!");
			pr = 0;
			}
		if (g5 == 0)
			{
			alert("The entered price must be greater than zero!");
			pr = 0;
			}
		if (pr == 1) {
			if (gas[ch] == 0){gas[ch].pop();}
			if (localStorage.getItem('cl') == 1){gas[ch].pop();}
			gas[ch].push([g1, g2, g3, g4, g5, g6, g7]);	
			localStorage.setItem('gas_m', JSON.stringify(gas));
			window.location.href = 'petrol.html';
			}
		}
	}