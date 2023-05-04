if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) 
{
document.write('<link  rel="stylesheet" href="mobilestyle.css">');
} 

else 
{
document.write('<link  rel="stylesheet" href="computerstyle.css">');
} 

if (localStorage.getItem('bbtest') == null)
{
localStorage.setItem('btest', 5);
localStorage.setItem('bbtest', 0);

localStorage.setItem('budget1_0101', 0);
localStorage.setItem('budget1_0102', "");
localStorage.setItem('budget1_0103', "");

localStorage.setItem('budget1_0201', 0);
localStorage.setItem('budget1_0202', "");
localStorage.setItem('budget1_0203', "");

localStorage.setItem('budget1_0301', 0);
localStorage.setItem('budget1_0302', "");
localStorage.setItem('budget1_0303', "");

localStorage.setItem('budget1_0401', 0);
localStorage.setItem('budget1_0402', "");
localStorage.setItem('budget1_0403', "");

localStorage.setItem('budget1_0501', 0);
localStorage.setItem('budget1_0502', "");
localStorage.setItem('budget1_0503', "");

localStorage.setItem('budget1_0601', 0);
localStorage.setItem('budget1_0602', "");
localStorage.setItem('budget1_0603', "");

localStorage.setItem('budget1_0701', 0);
localStorage.setItem('budget1_0702', "");
localStorage.setItem('budget1_0703', "");

localStorage.setItem('budget1_0801', 0);
localStorage.setItem('budget1_0802', "");
localStorage.setItem('budget1_0803', "");

localStorage.setItem('budget1_0901', 0);
localStorage.setItem('budget1_0902', "");
localStorage.setItem('budget1_0903', "");

localStorage.setItem('budget1_1001', 0);
localStorage.setItem('budget1_1002', "");
localStorage.setItem('budget1_1003', "");

localStorage.setItem('budget1_1101', 0);
localStorage.setItem('budget1_1102', "");
localStorage.setItem('budget1_1103', "");

localStorage.setItem('budget1_1201', 0);
localStorage.setItem('budget1_1202', "");
localStorage.setItem('budget1_1203', "");



localStorage.setItem('budget2_0101', 0);
localStorage.setItem('budget2_0102', "");
localStorage.setItem('budget2_0103', "");

localStorage.setItem('budget2_0201', 0);
localStorage.setItem('budget2_0202', "");
localStorage.setItem('budget2_0203', "");

localStorage.setItem('budget2_0301', 0);
localStorage.setItem('budget2_0302', "");
localStorage.setItem('budget2_0303', "");

localStorage.setItem('budget2_0401', 0);
localStorage.setItem('budget2_0402', "");
localStorage.setItem('budget2_0403', "");

localStorage.setItem('budget2_0501', 0);
localStorage.setItem('budget2_0502', "");
localStorage.setItem('budget2_0503', "");

localStorage.setItem('budget2_0601', 0);
localStorage.setItem('budget2_0602', "");
localStorage.setItem('budget2_0603', "");

localStorage.setItem('budget2_0701', 0);
localStorage.setItem('budget2_0702', "");
localStorage.setItem('budget2_0703', "");

localStorage.setItem('budget2_0801', 0);
localStorage.setItem('budget2_0802', "");
localStorage.setItem('budget2_0803', "");

localStorage.setItem('budget2_0901', 0);
localStorage.setItem('budget2_0902', "");
localStorage.setItem('budget2_0903', "");

localStorage.setItem('budget2_1001', 0);
localStorage.setItem('budget2_1002', "");
localStorage.setItem('budget2_1003', "");

localStorage.setItem('budget2_1101', 0);
localStorage.setItem('budget2_1102', "");
localStorage.setItem('budget2_1103', "");

localStorage.setItem('budget2_1201', 0);
localStorage.setItem('budget2_1202', "");
localStorage.setItem('budget2_1203', "");

}

if (localStorage.getItem('budgetchange') == 1){
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
else if (localStorage.getItem('budgetchange') == 2){
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

	var debit1 = localStorage.getItem('budget1_0101');
	var debit2 = localStorage.getItem('budget1_0201');
	var debit3 = localStorage.getItem('budget1_0301');
	var debit4 = localStorage.getItem('budget1_0401');
	var debit5 = localStorage.getItem('budget1_0501');
	var debit6 = localStorage.getItem('budget1_0601');
	var debit7 = localStorage.getItem('budget1_0701');
	var debit8 = localStorage.getItem('budget1_0801');
	var debit9 = localStorage.getItem('budget1_0901');
	var debit10 = localStorage.getItem('budget1_1001');
	var debit11 = localStorage.getItem('budget1_1101');
	var debit12 = localStorage.getItem('budget1_1201');
	var debitres = parseFloat(debit1) + parseFloat(debit2) + parseFloat(debit3) + parseFloat(debit4) + parseFloat(debit5) + parseFloat(debit6) + parseFloat(debit7) + parseFloat(debit8) + parseFloat(debit9) + parseFloat(debit10) + parseFloat(debit11) + parseFloat(debit12);
	debit.value = debitres.toFixed(2);

	var credit1 = localStorage.getItem('budget2_0101');
	var credit2 = localStorage.getItem('budget2_0201');
	var credit3 = localStorage.getItem('budget2_0301');
	var credit4 = localStorage.getItem('budget2_0401');
	var credit5 = localStorage.getItem('budget2_0501');
	var credit6 = localStorage.getItem('budget2_0601');
	var credit7 = localStorage.getItem('budget2_0701');
	var credit8 = localStorage.getItem('budget2_0801');
	var credit9 = localStorage.getItem('budget2_0901');
	var credit10 = localStorage.getItem('budget2_1001');
	var credit11 = localStorage.getItem('budget2_1101');
	var credit12 = localStorage.getItem('budget2_1201');
	var creditres = parseFloat(credit1) + parseFloat(credit2) + parseFloat(credit3) + parseFloat(credit4) + parseFloat(credit5) + parseFloat(credit6) + parseFloat(credit7) + parseFloat(credit8) + parseFloat(credit9) + parseFloat(credit10) + parseFloat(credit11) + parseFloat(credit12);
	credit.value = creditres.toFixed(2);

	profit.value = (parseFloat(debitres) - parseFloat(creditres)).toFixed(2);












