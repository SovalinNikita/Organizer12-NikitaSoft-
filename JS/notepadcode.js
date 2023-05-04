if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent))
{
document.write('<link  rel="stylesheet" href="notepadmobilestyle.css">');
}

else
{
document.write('<link  rel="stylesheet" href="notepadcomputerstyle.css">');
}

var v = 0, oned = 0, twod = 0, round;

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
