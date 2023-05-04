if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) 
{
document.write('<link  rel="stylesheet" href="mobilestyle.css">');
} 

else 
{
document.write('<link  rel="stylesheet" href="computerstyle.css">');
} 

var v = 0, oned = 0, twod = 0, round, dt1 = 1;
function debitcreditswitch(dcs){
	if(dcs == 1){
		document.getElementById('debitbutton').style.backgroundColor = '#85a489';
		document.getElementById('creditbutton').style.backgroundColor = '#d5f4d9';
		localStorage.setItem('budgetchange', 1);
		budgettext01.value = localStorage.getItem('budget1_0101');
		budgettext02.value = localStorage.getItem('budget1_0201');
		budgettext03.value = localStorage.getItem('budget1_0301');
		budgettext04.value = localStorage.getItem('budget1_0401');
		budgettext05.value = localStorage.getItem('budget1_0501');
		budgettext06.value = localStorage.getItem('budget1_0601');
		budgettext07.value = localStorage.getItem('budget1_0701');
		budgettext08.value = localStorage.getItem('budget1_0801');
		budgettext09.value = localStorage.getItem('budget1_0901');
		budgettext10.value = localStorage.getItem('budget1_1001');
		budgettext11.value = localStorage.getItem('budget1_1101');
		budgettext12.value = localStorage.getItem('budget1_1201');

		budgetname01.value = localStorage.getItem('budget1_0102');
		budgetname02.value = localStorage.getItem('budget1_0202');
		budgetname03.value = localStorage.getItem('budget1_0302');
		budgetname04.value = localStorage.getItem('budget1_0402');
		budgetname05.value = localStorage.getItem('budget1_0502');
		budgetname06.value = localStorage.getItem('budget1_0602');
		budgetname07.value = localStorage.getItem('budget1_0702');
		budgetname08.value = localStorage.getItem('budget1_0802');
		budgetname09.value = localStorage.getItem('budget1_0902');
		budgetname10.value = localStorage.getItem('budget1_1002');
		budgetname11.value = localStorage.getItem('budget1_1102');
		budgetname12.value = localStorage.getItem('budget1_1202');
		}
	if(dcs == 2){
		document.getElementById('debitbutton').style.backgroundColor = '#d5f4d9';
		document.getElementById('creditbutton').style.backgroundColor = '#85a489';
		localStorage.setItem('budgetchange', 2);
		budgettext01.value = localStorage.getItem('budget2_0101');
		budgettext02.value = localStorage.getItem('budget2_0201');
		budgettext03.value = localStorage.getItem('budget2_0301');
		budgettext04.value = localStorage.getItem('budget2_0401');
		budgettext05.value = localStorage.getItem('budget2_0501');
		budgettext06.value = localStorage.getItem('budget2_0601');
		budgettext07.value = localStorage.getItem('budget2_0701');
		budgettext08.value = localStorage.getItem('budget2_0801');
		budgettext09.value = localStorage.getItem('budget2_0901');
		budgettext10.value = localStorage.getItem('budget2_1001');
		budgettext11.value = localStorage.getItem('budget2_1101');
		budgettext12.value = localStorage.getItem('budget2_1201');

		budgetname01.value = localStorage.getItem('budget2_0102');
		budgetname02.value = localStorage.getItem('budget2_0202');
		budgetname03.value = localStorage.getItem('budget2_0302');
		budgetname04.value = localStorage.getItem('budget2_0402');
		budgetname05.value = localStorage.getItem('budget2_0502');
		budgetname06.value = localStorage.getItem('budget2_0602');
		budgetname07.value = localStorage.getItem('budget2_0702');
		budgetname08.value = localStorage.getItem('budget2_0802');
		budgetname09.value = localStorage.getItem('budget2_0902');
		budgetname10.value = localStorage.getItem('budget2_1002');
		budgetname11.value = localStorage.getItem('budget2_1102');
		budgetname12.value = localStorage.getItem('budget2_1202');
		}
	}
function budget_writescript(w)
	{
	console.log(dt1);
	if (budgettextarea.value == 0 && oned == 0)
		{
		budgettextarea.value = w;
		}
	else if (budgettextarea.value != 0 || oned == 1)
		{
		if (oned == 1 && dt1 != 0){
			if (dt1 == 1){
				budgettextarea.value = budgettextarea.value + w;
				dt1 = 2;
				}
			else if (dt1 == 2){
				budgettextarea.value = budgettextarea.value + w;
				dt1 = 3;
				}
			}
		else if (dt1 == 1){
			budgettextarea.value = budgettextarea.value + w;
			}
		}
	}
function budget_dotwrite()
	{
	if (oned == 0)
		{
		budgettextarea.value += ".";
		oned = 1;
		}
	}
function budget_CE()
	{
	if (budgettextarea.value != "")
		{
                var str = budgettextarea.value;
		var last = budgettextarea.value.slice(-1);
                budgettextarea.value = str.substring(0, str.length-1);
		if (last == ".")
                	{
                    	oned = 0;
			dt1 = 1;
                	}
		else if (dt1 == 3){
			dt1 = 2;
			}
		else if (dt1 == 2){
			dt1 = 1;
			}
		}
	else if (budgettextarea.value == "")
		{
                budgettextarea.value = 0;
		}

	}
function budget_change(ntv)
	{
	localStorage.setItem('budgetswitch', ntv);
	if (localStorage.getItem('budgetchange') == 1){
	switch (ntv)
	{
	case 1:
	localStorage.setItem('budgetloc01', localStorage.getItem('budget1_0101'));
	localStorage.setItem('budgetloc02', localStorage.getItem('budget1_0102'));
	localStorage.setItem('budgetloc03', localStorage.getItem('budget1_0103'));
	break;

	case 2:
	localStorage.setItem('budgetloc01', localStorage.getItem('budget1_0201'));
	localStorage.setItem('budgetloc02', localStorage.getItem('budget1_0202'));
	localStorage.setItem('budgetloc03', localStorage.getItem('budget1_0203'));
	break;

	case 3:
	localStorage.setItem('budgetloc01', localStorage.getItem('budget1_0301'));
	localStorage.setItem('budgetloc02', localStorage.getItem('budget1_0302'));
	localStorage.setItem('budgetloc03', localStorage.getItem('budget1_0303'));
	break;

	case 4:
	localStorage.setItem('budgetloc01', localStorage.getItem('budget1_0401'));
	localStorage.setItem('budgetloc02', localStorage.getItem('budget1_0402'));
	localStorage.setItem('budgetloc03', localStorage.getItem('budget1_0403'));
	break;

	case 5:
	localStorage.setItem('budgetloc01', localStorage.getItem('budget1_0501'));
	localStorage.setItem('budgetloc02', localStorage.getItem('budget1_0502'));
	localStorage.setItem('budgetloc03', localStorage.getItem('budget1_0503'));
	break;

	case 6:
	localStorage.setItem('budgetloc01', localStorage.getItem('budget1_0601'));
	localStorage.setItem('budgetloc02', localStorage.getItem('budget1_0602'));
	localStorage.setItem('budgetloc03', localStorage.getItem('budget1_0603'));
	break;

	case 7:
	localStorage.setItem('budgetloc01', localStorage.getItem('budget1_0701'));
	localStorage.setItem('budgetloc02', localStorage.getItem('budget1_0702'));
	localStorage.setItem('budgetloc03', localStorage.getItem('budget1_0703'));
	break;

	case 8:
	localStorage.setItem('budgetloc01', localStorage.getItem('budget1_0801'));
	localStorage.setItem('budgetloc02', localStorage.getItem('budget1_0802'));
	localStorage.setItem('budgetloc03', localStorage.getItem('budget1_0803'));
	break;

	case 9:
	localStorage.setItem('budgetloc01', localStorage.getItem('budget1_0901'));
	localStorage.setItem('budgetloc02', localStorage.getItem('budget1_0902'));
	localStorage.setItem('budgetloc03', localStorage.getItem('budget1_0903'));
	break;

	case 10:
	localStorage.setItem('budgetloc01', localStorage.getItem('budget1_1001'));
	localStorage.setItem('budgetloc02', localStorage.getItem('budget1_1002'));
	localStorage.setItem('budgetloc03', localStorage.getItem('budget1_1003'));
	break;

	case 11:
	localStorage.setItem('budgetloc01', localStorage.getItem('budget1_1101'));
	localStorage.setItem('budgetloc02', localStorage.getItem('budget1_1102'));
	localStorage.setItem('budgetloc03', localStorage.getItem('budget1_1103'));
	break;

	case 12:
	localStorage.setItem('budgetloc01', localStorage.getItem('budget1_1201'));
	localStorage.setItem('budgetloc02', localStorage.getItem('budget1_1202'));
	localStorage.setItem('budgetloc03', localStorage.getItem('budget1_1203'));
	break;
	}
	}

	else if (localStorage.getItem('budgetchange') == 2){
	switch (ntv)
	{
	case 1:
	localStorage.setItem('budgetloc01', localStorage.getItem('budget2_0101'));
	localStorage.setItem('budgetloc02', localStorage.getItem('budget2_0102'));
	localStorage.setItem('budgetloc03', localStorage.getItem('budget2_0103'));
	break;

	case 2:
	localStorage.setItem('budgetloc01', localStorage.getItem('budget2_0201'));
	localStorage.setItem('budgetloc02', localStorage.getItem('budget2_0202'));
	localStorage.setItem('budgetloc03', localStorage.getItem('budget2_0203'));
	break;

	case 3:
	localStorage.setItem('budgetloc01', localStorage.getItem('budget2_0301'));
	localStorage.setItem('budgetloc02', localStorage.getItem('budget2_0302'));
	localStorage.setItem('budgetloc03', localStorage.getItem('budget2_0303'));
	break;

	case 4:
	localStorage.setItem('budgetloc01', localStorage.getItem('budget2_0401'));
	localStorage.setItem('budgetloc02', localStorage.getItem('budget2_0402'));
	localStorage.setItem('budgetloc03', localStorage.getItem('budget2_0403'));
	console.log("ubdifgrkg");
	break;

	case 5:
	localStorage.setItem('budgetloc01', localStorage.getItem('budget2_0501'));
	localStorage.setItem('budgetloc02', localStorage.getItem('budget2_0502'));
	localStorage.setItem('budgetloc03', localStorage.getItem('budget2_0503'));
	break;

	case 6:
	localStorage.setItem('budgetloc01', localStorage.getItem('budget2_0601'));
	localStorage.setItem('budgetloc02', localStorage.getItem('budget2_0602'));
	localStorage.setItem('budgetloc03', localStorage.getItem('budget2_0603'));
	break;

	case 7:
	localStorage.setItem('budgetloc01', localStorage.getItem('budget2_0701'));
	localStorage.setItem('budgetloc02', localStorage.getItem('budget2_0702'));
	localStorage.setItem('budgetloc03', localStorage.getItem('budget2_0703'));
	break;

	case 8:
	localStorage.setItem('budgetloc01', localStorage.getItem('budget2_0801'));
	localStorage.setItem('budgetloc02', localStorage.getItem('budget2_0802'));
	localStorage.setItem('budgetloc03', localStorage.getItem('budget2_0803'));
	break;

	case 9:
	localStorage.setItem('budgetloc01', localStorage.getItem('budget2_0901'));
	localStorage.setItem('budgetloc02', localStorage.getItem('budget2_0902'));
	localStorage.setItem('budgetloc03', localStorage.getItem('budget2_0903'));
	break;

	case 10:
	localStorage.setItem('budgetloc01', localStorage.getItem('budget2_1001'));
	localStorage.setItem('budgetloc02', localStorage.getItem('budget2_1002'));
	localStorage.setItem('budgetloc03', localStorage.getItem('budget2_1003'));
	break;

	case 11:
	localStorage.setItem('budgetloc01', localStorage.getItem('budget2_1101'));
	localStorage.setItem('budgetloc02', localStorage.getItem('budget2_1102'));
	localStorage.setItem('budgetloc03', localStorage.getItem('budget2_1103'));
	break;

	case 12:
	localStorage.setItem('budgetloc01', localStorage.getItem('budget2_1201'));
	localStorage.setItem('budgetloc02', localStorage.getItem('budget2_1202'));
	localStorage.setItem('budgetloc03', localStorage.getItem('budget2_1203'));
	break;
	}
	}
	window.location.href = 'budget2.html';
	}
function budget_save()
	{
	var tnn = localStorage.getItem('budgetswitch');
	if (localStorage.getItem('budgetchange') == 1){
	switch (tnn)
		{
		case "1":
		localStorage.setItem('budget1_0101', sum.value);
		localStorage.setItem('budget1_0102', budgetname.value);
		localStorage.setItem('budget1_0103', description.value);
		window.location.href = 'budget.html';
		break; 

		case "2":
		localStorage.setItem('budget1_0201', sum.value);
		localStorage.setItem('budget1_0202', budgetname.value);
		localStorage.setItem('budget1_0203', description.value);
		break; 

		case "3":
		localStorage.setItem('budget1_0301', sum.value);
		localStorage.setItem('budget1_0302', budgetname.value);
		localStorage.setItem('budget1_0303', description.value);
		break; 

		case "4":
		localStorage.setItem('budget1_0401', sum.value);
		localStorage.setItem('budget1_0402', budgetname.value);
		localStorage.setItem('budget1_0403', description.value);
		break; 

		case "5":
		localStorage.setItem('budget1_0501', sum.value);
		localStorage.setItem('budget1_0502', budgetname.value);
		localStorage.setItem('budget1_0503', description.value);
		break; 

		case "6":
		localStorage.setItem('budget1_0601', sum.value);
		localStorage.setItem('budget1_0602', budgetname.value);
		localStorage.setItem('budget1_0603', description.value);
		break; 

		case "7":
		localStorage.setItem('budget1_0701', sum.value);
		localStorage.setItem('budget1_0702', budgetname.value);
		localStorage.setItem('budget1_0703', description.value);
		break; 

		case "8":
		localStorage.setItem('budget1_0801', sum.value);
		localStorage.setItem('budget1_0802', budgetname.value);
		localStorage.setItem('budget1_0803', description.value);
		break; 

		case "9":
		localStorage.setItem('budget1_0901', sum.value);
		localStorage.setItem('budget1_0902', budgetname.value);
		localStorage.setItem('budget1_0903', description.value);
		break; 

		case "10":
		localStorage.setItem('budget1_1001', sum.value);
		localStorage.setItem('budget1_1002', budgetname.value);
		localStorage.setItem('budget1_1003', description.value);
		break; 

		case "11":
		localStorage.setItem('budget1_1101', sum.value);
		localStorage.setItem('budget1_1102', budgetname.value);
		localStorage.setItem('budget1_1103', description.value);
		break; 

		case "12":
		localStorage.setItem('budget1_1201', sum.value);
		localStorage.setItem('budget1_1202', budgetname.value);
		localStorage.setItem('budget1_1203', description.value);
		break; 
		}
	}

	else if (localStorage.getItem('budgetchange') == 2){
	switch (tnn)
		{
		case "1":
		localStorage.setItem('budget2_0101', sum.value);
		localStorage.setItem('budget2_0102', budgetname.value);
		localStorage.setItem('budget2_0103', description.value);
		window.location.href = 'budget.html';
		break; 

		case "2":
		localStorage.setItem('budget2_0201', sum.value);
		localStorage.setItem('budget2_0202', budgetname.value);
		localStorage.setItem('budget2_0203', description.value);
		break; 

		case "3":
		localStorage.setItem('budget2_0301', sum.value);
		localStorage.setItem('budget2_0302', budgetname.value);
		localStorage.setItem('budget2_0303', description.value);
		break; 

		case "4":
		localStorage.setItem('budget2_0401', sum.value);
		localStorage.setItem('budget2_0402', budgetname.value);
		localStorage.setItem('budget2_0403', description.value);
		break; 

		case "5":
		localStorage.setItem('budget2_0501', sum.value);
		localStorage.setItem('budget2_0502', budgetname.value);
		localStorage.setItem('budget2_0503', description.value);
		break; 

		case "6":
		localStorage.setItem('budget2_0601', sum.value);
		localStorage.setItem('budget2_0602', budgetname.value);
		localStorage.setItem('budget2_0603', description.value);
		break; 

		case "7":
		localStorage.setItem('budget2_0701', sum.value);
		localStorage.setItem('budget2_0702', budgetname.value);
		localStorage.setItem('budget2_0703', description.value);
		break; 

		case "8":
		localStorage.setItem('budget2_0801', sum.value);
		localStorage.setItem('budget2_0802', budgetname.value);
		localStorage.setItem('budget2_0803', description.value);
		break; 

		case "9":
		localStorage.setItem('budget2_0901', sum.value);
		localStorage.setItem('budget2_0902', budgetname.value);
		localStorage.setItem('budget2_0903', description.value);
		break; 

		case "10":
		localStorage.setItem('budget2_1001', sum.value);
		localStorage.setItem('budget2_1002', budgetname.value);
		localStorage.setItem('budget2_1003', description.value);
		break; 

		case "11":
		localStorage.setItem('budget2_1101', sum.value);
		localStorage.setItem('budget2_1102', budgetname.value);
		localStorage.setItem('budget2_1103', description.value);
		break; 

		case "12":
		localStorage.setItem('budget2_1201', sum.value);
		localStorage.setItem('budget2_1202', budgetname.value);
		localStorage.setItem('budget2_1203', description.value);
		break; 
		}
	}
	window.location.href = 'budget.html';
	}

function budget_changesecond()
	{
	localStorage.setItem('budgetsuploc', localStorage.getItem('budgetloc01'));
	localStorage.setItem('budgetloc02', budgetname.value);
	localStorage.setItem('budgetloc03', description.value);
	window.location.href = 'budget3.html';
	}
function budget_saveone()
	{
	localStorage.setItem('budgetloc01', budgettextarea.value);
	window.location.href = 'budget2.html';
	}



