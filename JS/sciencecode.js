if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent))
{
document.write('<link  rel="stylesheet" href="sciencemobilestyle.css">');
}

else
{
document.write('<link  rel="stylesheet" href="sciencecomputerstyle.css">');
}

function science_function(s)
	{
	switch (s)
		{
		case 1:
		if (sciencetext.value != 0)
			{
			var res = 1 / parseFloat(sciencetext.value);
			localStorage.setItem('science', res.toFixed(2));
			localStorage.setItem('sciencename', "1/X, X=" + sciencetext.value);
			window.location.href = 'calculator.html';
			}
		else if (sciencetext.value == 0)
			{
			alert("You can't divide by zero!");
			}
		break;

		case 2:
		var res = Math.pow(2, parseFloat(sciencetext.value));
		localStorage.setItem('science', res.toFixed(2));
		localStorage.setItem('sciencename', "2^X, X = " + sciencetext.value);
		window.location.href = 'calculator.html';
		break;

		case 3:
		var res = Math.pow(Math.exp(1), parseFloat(sciencetext.value));
		localStorage.setItem('science', res.toFixed(2));
		localStorage.setItem('sciencename', "e^X, X=" + sciencetext.value);
		window.location.href = 'calculator.html';
		break;

		case 4:
		var res = Math.log(parseFloat(sciencetext.value));
		localStorage.setItem('science', res.toFixed(2));
		localStorage.setItem('sciencename', "ln(X), X=" + sciencetext.value);
		window.location.href = 'calculator.html';
		break;

		case 5:
		var res = Math.sin(parseFloat(sciencetext.value) * 3.14 / 180);
		localStorage.setItem('science', res.toFixed(2));
		localStorage.setItem('sciencename', "Sin(X), X=" + sciencetext.value);
		window.location.href = 'calculator.html';
		break;

		case 6:
		var res = Math.cos(parseFloat(sciencetext.value) * 3.14 / 180);
		localStorage.setItem('science', res.toFixed(2));
		localStorage.setItem('sciencename', "Cos(X), X=" + sciencetext.value);
		window.location.href = 'calculator.html';
		break;

		case 7:
		var res = Math.tan(parseFloat(sciencetext.value) * 3.14 / 180);
		localStorage.setItem('science', res.toFixed(2));
		localStorage.setItem('sciencename', "Tg(X), X=" + sciencetext.value);
		window.location.href = 'calculator.html';
		break;

		case 8:
		var res = 1 / Math.tan(parseFloat(sciencetext.value) * 3.14 / 180);
		localStorage.setItem('science', res.toFixed(2));
		localStorage.setItem('sciencename', "Ctg(X), X=" + sciencetext.value);
		window.location.href = 'calculator.html';
		break;

		case 9:
		var res = Math.asin(parseFloat(sciencetext.value) * 3.14 / 180);
		localStorage.setItem('science', res.toFixed(2));
		localStorage.setItem('sciencename', "aSin(X), X=" + sciencetext.value);
		window.location.href = 'calculator.html';
		break;

		case 10:
		var res = Math.acos(parseFloat(sciencetext.value) * 3.14 / 180);
		localStorage.setItem('science', res.toFixed(2));
		localStorage.setItem('sciencename', "aCos(X), X=" + sciencetext.value);
		window.location.href = 'calculator.html';
		break;

		case 11:
		var res = parseFloat(sciencetext.value) * parseFloat(sciencetext.value);
		localStorage.setItem('science', res.toFixed(2));
		localStorage.setItem('sciencename', "X², X=" + sciencetext.value);
		window.location.href = 'calculator.html';
		break;

		case 12:
		var res = Math.pow(parseFloat(sciencetext.value), 3);
		localStorage.setItem('science', res.toFixed(2));
		localStorage.setItem('sciencename', "X³, X=" + sciencetext.value);
		window.location.href = 'calculator.html';
		break;

		case 13:
		var res = Math.pow(parseFloat(sciencetext.value), 4);
		localStorage.setItem('science', res.toFixed(2));
		localStorage.setItem('sciencename', "X⁴, X=" + sciencetext.value);
		window.location.href = 'calculator.html';
		break;

		case 14:
		var res = Math.pow(parseFloat(sciencetext.value), 5);
		localStorage.setItem('science', res.toFixed(2));
		localStorage.setItem('sciencename', "X⁵, X=" + sciencetext.value);
		window.location.href = 'calculator.html';
		break;

		case 15:
		var res = Math.sqrt(parseFloat(sciencetext.value));
		localStorage.setItem('science', res.toFixed(2));
		localStorage.setItem('sciencename', "√X, X=" + sciencetext.value);
		window.location.href = 'calculator.html';
		break;

		case 16:
		var res = Math.cbrt(parseFloat(sciencetext.value));
		localStorage.setItem('science', res.toFixed(2));
		localStorage.setItem('sciencename', "³√X, X=" + sciencetext.value);
		window.location.href = 'calculator.html';
		break;

		case 17:
		var res = Math.pow(parseFloat(sciencetext.value), 1/4);
		localStorage.setItem('science', res.toFixed(2));
		localStorage.setItem('sciencename', "⁴√X, X=" + sciencetext.value);
		window.location.href = 'calculator.html';
		break;

		case 18:
		var res = Math.pow(parseFloat(sciencetext.value), 1/5);
		localStorage.setItem('science', res.toFixed(2));
		localStorage.setItem('sciencename', "⁵√X, X=" + sciencetext.value);
		window.location.href = 'calculator.html';
		break;

		case 19:
		var res = parseFloat(sciencetext.value) * 3.14 / 180;
		localStorage.setItem('science', res.toFixed(2));
		localStorage.setItem('sciencename', "Rad(X°), X=" + sciencetext.value);
		window.location.href = 'calculator.html';
		break;

		case 20:
		var res = parseFloat(sciencetext.value) * (180/Math.PI);
		localStorage.setItem('science', res.toFixed(2));
		localStorage.setItem('sciencename', "(Xrad)°, X=" + sciencetext.value);
		window.location.href = 'calculator.html';
		break;

		case 21:
		var p = Number.isInteger(parseFloat(sciencetext.value));
		if (p == true)
			{
			var n = parseFloat(sciencetext.value);
			var res = 1;
			while(n)
				{
				res *= n--;
				}
			localStorage.setItem('science', res.toFixed(2));
			localStorage.setItem('sciencename', "X!, X=" + sciencetext.value);
			window.location.href = 'calculator.html';
			}
		else
			{
			alert("The number is not an integer!");
			}
		break;

		case 22:
		var res = Math.PI;
		localStorage.setItem('science', res.toFixed(4));
		localStorage.setItem('sciencename', "π");
		window.location.href = 'calculator.html';
		break;

		case 23:
		var res = Math.exp(1);
		localStorage.setItem('science', res.toFixed(4));
		localStorage.setItem('sciencename', "e");
		window.location.href = 'calculator.html';
		break;

		case 24:
		var res = Math.log10(parseFloat(sciencetext.value));
		localStorage.setItem('science', res.toFixed(2));
		localStorage.setItem('sciencename', "lg(X), X=" + sciencetext.value);
		window.location.href = 'calculator.html';
		break;

		}

	}
