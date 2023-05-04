if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) 
{
document.write('<link  rel="stylesheet" href="mobilestyle.css">');
} 
else 
{
document.write('<link  rel="stylesheet" href="computerstyle.css">');
} 
function shop_load()
	{
	taskname01.value = localStorage.getItem('task0101');
	taskname02.value = localStorage.getItem('task0201');
	taskname03.value = localStorage.getItem('task0301');
	taskname04.value = localStorage.getItem('task0401');
	taskname05.value = localStorage.getItem('task0501');
	taskname06.value = localStorage.getItem('task0601');
	taskname07.value = localStorage.getItem('task0701');
	taskname08.value = localStorage.getItem('task0801');
	taskname09.value = localStorage.getItem('task0901');
	taskname10.value = localStorage.getItem('task1001');
	taskname11.value = localStorage.getItem('task1101');
	taskname12.value = localStorage.getItem('task1201');

	weekday01.value = localStorage.getItem('task0106');
	weekday02.value = localStorage.getItem('task0206');
	weekday03.value = localStorage.getItem('task0306');
	weekday04.value = localStorage.getItem('task0406');
	weekday05.value = localStorage.getItem('task0506');
	weekday06.value = localStorage.getItem('task0606');
	weekday07.value = localStorage.getItem('task0706');
	weekday08.value = localStorage.getItem('task0806');
	weekday09.value = localStorage.getItem('task0906');
	weekday10.value = localStorage.getItem('task1006');
	weekday11.value = localStorage.getItem('task1106');
	weekday12.value = localStorage.getItem('task1206');

	time01.value = localStorage.getItem('task0107');
	time02.value = localStorage.getItem('task0207');
	time03.value = localStorage.getItem('task0307');
	time04.value = localStorage.getItem('task0407');
	time05.value = localStorage.getItem('task0507');
	time06.value = localStorage.getItem('task0607');
	time07.value = localStorage.getItem('task0707');
	time08.value = localStorage.getItem('task0807');
	time09.value = localStorage.getItem('task0907');
	time10.value = localStorage.getItem('task1007');
	time11.value = localStorage.getItem('task1107');
	time12.value = localStorage.getItem('task1207');

	let tm01 = new Date(localStorage.getItem('task0105'));
	var tmm01 = tm01.getMonth();
	switch (tmm01)
		{
		case 0:
		var month01 = "Jan";
		break;
	
		case 1:
		var month01 = "Feb";
		break;
	
		case 2:
		var month01 = "Mar";
		break;

		case 3:
		var month01 = "Apr";
		break;

		case 4:
		var month01 = "May";
		break;

		case 5:
		var month01 = "June";
		break;

		case 6:
		var month01 = "July";
		break;

		case 7:
		var month01 = "Aug";
		break;

		case 8:
		var month01 = "Sept";
		break;

		case 9:
		var month01 = "Oct";
		break;

		case 10:
		var month01 = "Nov";
		break;

		case 11:
		var month01 = "Dec";
		break;
		}
	if (localStorage.getItem('task0105') == null)
		{
		localStorage.setItem('task0105', "");
		var month01 = " ";
		}
	else if (localStorage.getItem('task0105') != null && localStorage.getItem('task0105') != "")
		{
		var daynumber01 = localStorage.getItem('task0105').slice(-2);
		date01.value = daynumber01 + " " + month01;
		}

	let tm02 = new Date(localStorage.getItem('task0205'));
	var tmm02 = tm02.getMonth();
	switch (tmm02)
		{
		case 0:
		var month02 = "Jan";
		break;
	
		case 1:
		var month02 = "Feb";
		break;
	
		case 2:
		var month02 = "Mar";
		break;

		case 3:
		var month02 = "Apr";
		break;

		case 4:
		var month02 = "May";
		break;

		case 5:
		var month02 = "June";
		break;

		case 6:
		var month02 = "July";
		break;

		case 7:
		var month02 = "Aug";
		break;

		case 8:
		var month02 = "Sept";
		break;

		case 9:
		var month02 = "Oct";
		break;

		case 10:
		var month02 = "Nov";
		break;

		case 11:
		var month02 = "Dec";
		break;
		}
	if (localStorage.getItem('task0205') == null)
		{
		localStorage.setItem('task0205', "");
		var month02 = " ";
		}
	else if (localStorage.getItem('task0205') != null && localStorage.getItem('task0205') != "")
		{
		var daynumber02 = localStorage.getItem('task0205').slice(-2);
		date02.value = daynumber02 + " " + month02;
		}

	let tm03 = new Date(localStorage.getItem('task0305'));
	var tmm03 = tm03.getMonth();
	switch (tmm03)
		{
		case 0:
		var month03 = "Jan";
		break;
	
		case 1:
		var month03 = "Feb";
		break;
	
		case 2:
		var month03 = "Mar";
		break;

		case 3:
		var month03 = "Apr";
		break;

		case 4:
		var month03 = "May";
		break;

		case 5:
		var month03 = "June";
		break;

		case 6:
		var month03 = "July";
		break;

		case 7:
		var month03 = "Aug";
		break;

		case 8:
		var month03 = "Sept";
		break;

		case 9:
		var month03 = "Oct";
		break;

		case 10:
		var month03 = "Nov";
		break;

		case 11:
		var month03 = "Dec";
		break;
		}
	if (localStorage.getItem('task0305') == null)
		{
		localStorage.setItem('task0305', "");
		var month03 = " ";
		}
	else if (localStorage.getItem('task0305') != null && localStorage.getItem('task0305') != "")
		{
		var daynumber03 = localStorage.getItem('task0305').slice(-2);
		date03.value = daynumber03 + " " + month03;
		}

	let tm04 = new Date(localStorage.getItem('task0405'));
	var tmm04 = tm04.getMonth();
	switch (tmm04)
		{
		case 0:
		var month04 = "Jan";
		break;
	
		case 1:
		var month04 = "Feb";
		break;
	
		case 2:
		var month04 = "Mar";
		break;

		case 3:
		var month04 = "Apr";
		break;

		case 4:
		var month04 = "May";
		break;

		case 5:
		var month04 = "June";
		break;

		case 6:
		var month04 = "July";
		break;

		case 7:
		var month04 = "Aug";
		break;

		case 8:
		var month04 = "Sept";
		break;

		case 9:
		var month04 = "Oct";
		break;

		case 10:
		var month04 = "Nov";
		break;

		case 11:
		var month04 = "Dec";
		break;
		}
	if (localStorage.getItem('task0405') == null)
		{
		localStorage.setItem('task0405', "");
		var month04 = " ";
		}
	else if (localStorage.getItem('task0405') != null && localStorage.getItem('task0405') != "")
		{
		var daynumber04 = localStorage.getItem('task0405').slice(-2);
		date04.value = daynumber04 + " " + month04;
		}

	let tm05 = new Date(localStorage.getItem('task0505'));
	var tmm05 = tm05.getMonth();
	switch (tmm05)
		{
		case 0:
		var month05 = "Jan";
		break;
	
		case 1:
		var month05 = "Feb";
		break;
	
		case 2:
		var month05 = "Mar";
		break;

		case 3:
		var month05 = "Apr";
		break;

		case 4:
		var month05 = "May";
		break;

		case 5:
		var month05 = "June";
		break;

		case 6:
		var month05 = "July";
		break;

		case 7:
		var month05 = "Aug";
		break;

		case 8:
		var month05 = "Sept";
		break;

		case 9:
		var month05 = "Oct";
		break;

		case 10:
		var month05 = "Nov";
		break;

		case 11:
		var month05 = "Dec";
		break;
		}
	if (localStorage.getItem('task0505') == null)
		{
		localStorage.setItem('task0505', "");
		var month05 = " ";
		}
	else if (localStorage.getItem('task0505') != null && localStorage.getItem('task0505') != "")
		{
		var daynumber05 = localStorage.getItem('task0505').slice(-2);
		date05.value = daynumber05 + " " + month05;
		}

	let tm06 = new Date(localStorage.getItem('task0605'));
	var tmm06 = tm06.getMonth();
	switch (tmm06)
		{
		case 0:
		var month06 = "Jan";
		break;
	
		case 1:
		var month06 = "Feb";
		break;
	
		case 2:
		var month06 = "Mar";
		break;

		case 3:
		var month06 = "Apr";
		break;

		case 4:
		var month06 = "May";
		break;

		case 5:
		var month06 = "June";
		break;

		case 6:
		var month06 = "July";
		break;

		case 7:
		var month06 = "Aug";
		break;

		case 8:
		var month06 = "Sept";
		break;

		case 9:
		var month06 = "Oct";
		break;

		case 10:
		var month06 = "Nov";
		break;

		case 11:
		var month06 = "Dec";
		break;
		}
	if (localStorage.getItem('task0605') == null)
		{
		localStorage.setItem('task0605', "");
		var month06 = " ";
		}
	else if (localStorage.getItem('task0605') != null && localStorage.getItem('task0605') != "")
		{
		var daynumber06 = localStorage.getItem('task0605').slice(-2);
		date06.value = daynumber06 + " " + month06;
		}

	let tm07 = new Date(localStorage.getItem('task0705'));
	var tmm07 = tm07.getMonth();
	switch (tmm07)
		{
		case 0:
		var month07 = "Jan";
		break;
	
		case 1:
		var month07 = "Feb";
		break;
	
		case 2:
		var month07 = "Mar";
		break;

		case 3:
		var month07 = "Apr";
		break;

		case 4:
		var month07 = "May";
		break;

		case 5:
		var month07 = "June";
		break;

		case 6:
		var month07 = "July";
		break;

		case 7:
		var month07 = "Aug";
		break;

		case 8:
		var month07 = "Sept";
		break;

		case 9:
		var month07 = "Oct";
		break;

		case 10:
		var month07 = "Nov";
		break;

		case 11:
		var month07 = "Dec";
		break;
		}
	if (localStorage.getItem('task0705') == null)
		{
		localStorage.setItem('task0705', "");
		var month07 = " ";
		}
	else if (localStorage.getItem('task0705') != null && localStorage.getItem('task0705') != "")
		{
		var daynumber07 = localStorage.getItem('task0705').slice(-2);
		date07.value = daynumber07 + " " + month07;
		}

	let tm08 = new Date(localStorage.getItem('task0805'));
	var tmm08 = tm08.getMonth();
	switch (tmm08)
		{
		case 0:
		var month08 = "Jan";
		break;
	
		case 1:
		var month08 = "Feb";
		break;
	
		case 2:
		var month08 = "Mar";
		break;

		case 3:
		var month08 = "Apr";
		break;

		case 4:
		var month08 = "May";
		break;

		case 5:
		var month08 = "June";
		break;

		case 6:
		var month08 = "July";
		break;

		case 7:
		var month08 = "Aug";
		break;

		case 8:
		var month08 = "Sept";
		break;

		case 9:
		var month08 = "Oct";
		break;

		case 10:
		var month08 = "Nov";
		break;

		case 11:
		var month08 = "Dec";
		break;
		}
	if (localStorage.getItem('task0805') == null)
		{
		localStorage.setItem('task0805', "");
		var month08 = " ";
		}
	else if (localStorage.getItem('task0805') != null && localStorage.getItem('task0805') != "")
		{
		var daynumber08 = localStorage.getItem('task0805').slice(-2);
		date08.value = daynumber08 + " " + month08;
		}

	let tm09 = new Date(localStorage.getItem('task0905'));
	var tmm09 = tm09.getMonth();
	switch (tmm09)
		{
		case 0:
		var month09 = "Jan";
		break;
	
		case 1:
		var month09 = "Feb";
		break;
	
		case 2:
		var month09 = "Mar";
		break;

		case 3:
		var month09 = "Apr";
		break;

		case 4:
		var month09 = "May";
		break;

		case 5:
		var month09 = "June";
		break;

		case 6:
		var month09 = "July";
		break;

		case 7:
		var month09 = "Aug";
		break;

		case 8:
		var month09 = "Sept";
		break;

		case 9:
		var month09 = "Oct";
		break;

		case 10:
		var month09 = "Nov";
		break;

		case 11:
		var month09 = "Dec";
		break;
		}
	if (localStorage.getItem('task0905') == null)
		{
		localStorage.setItem('task0905', "");
		var month09 = " ";
		}
	else if (localStorage.getItem('task0905') != null && localStorage.getItem('task0905') != "")
		{
		var daynumber09 = localStorage.getItem('task0905').slice(-2);
		date09.value = daynumber09 + " " + month09;
		}

	let tm10 = new Date(localStorage.getItem('task1005'));
	var tmm10 = tm10.getMonth();
	switch (tmm10)
		{
		case 0:
		var month10 = "Jan";
		break;
	
		case 1:
		var month10 = "Feb";
		break;
	
		case 2:
		var month10 = "Mar";
		break;

		case 3:
		var month10 = "Apr";
		break;

		case 4:
		var month10 = "May";
		break;

		case 5:
		var month10 = "June";
		break;

		case 6:
		var month10 = "July";
		break;

		case 7:
		var month10 = "Aug";
		break;

		case 8:
		var month10 = "Sept";
		break;

		case 9:
		var month10 = "Oct";
		break;

		case 10:
		var month10 = "Nov";
		break;

		case 11:
		var month10 = "Dec";
		break;
		}
	if (localStorage.getItem('task1005') == null)
		{
		localStorage.setItem('task1005', "");
		var month10 = " ";
		}
	else if (localStorage.getItem('task1005') != null && localStorage.getItem('task1005') != "")
		{
		var daynumber10 = localStorage.getItem('task1005').slice(-2);
		date10.value = daynumber10 + " " + month10;
		}

	let tm11 = new Date(localStorage.getItem('task1105'));
	var tmm11 = tm11.getMonth();
	switch (tmm11)
		{
		case 0:
		var month11 = "Jan";
		break;
	
		case 1:
		var month11 = "Feb";
		break;
	
		case 2:
		var month11 = "Mar";
		break;

		case 3:
		var month11 = "Apr";
		break;

		case 4:
		var month11 = "May";
		break;

		case 5:
		var month11 = "June";
		break;

		case 6:
		var month11 = "July";
		break;

		case 7:
		var month11 = "Aug";
		break;

		case 8:
		var month11 = "Sept";
		break;

		case 9:
		var month11 = "Oct";
		break;

		case 10:
		var month11 = "Nov";
		break;

		case 11:
		var month11 = "Dec";
		break;
		}
	if (localStorage.getItem('task1105') == null)
		{
		localStorage.setItem('task1105', "");
		var month11 = " ";
		}
	else if (localStorage.getItem('task1105') != null && localStorage.getItem('task1105') != "")
		{
		var daynumber11 = localStorage.getItem('task1105').slice(-2);
		date11.value = daynumber11 + " " + month11;
		}

	let tm12 = new Date(localStorage.getItem('task1205'));
	var tmm12 = tm12.getMonth();
	switch (tmm12)
		{
		case 0:
		var month12 = "Jan";
		break;
	
		case 1:
		var month12 = "Feb";
		break;
	
		case 2:
		var month12 = "Mar";
		break;

		case 3:
		var month12 = "Apr";
		break;

		case 4:
		var month12 = "May";
		break;

		case 5:
		var month12 = "June";
		break;

		case 6:
		var month12 = "July";
		break;

		case 7:
		var month12 = "Aug";
		break;

		case 8:
		var month12 = "Sept";
		break;

		case 9:
		var month12 = "Oct";
		break;

		case 10:
		var month12 = "Nov";
		break;

		case 11:
		var month12 = "Dec";
		break;
		}
	if (localStorage.getItem('task1205') == null)
		{
		localStorage.setItem('task1205', "");
		var month12 = " ";
		}
	else if (localStorage.getItem('task1205') != null && localStorage.getItem('task1205') != "")
		{
		var daynumber12 = localStorage.getItem('task1205').slice(-2);
		date12.value = daynumber12 + " " + month12;
		}
	var im01 = localStorage.getItem('task0103');
	switch (im01)
		{	
		case "0":
        	var imm01=0;
        	var importance01=document.getElementById("importance01");
        	var im01imgs=new Array('tw.png');
            	imm01++;imm01%=im01imgs.length;
            	importance01.src = im01imgs[imm01];
		break;

		case "1":
        	var imm01=0;
        	var importance01=document.getElementById("importance01");
        	var im01imgs=new Array('tr.png');
            	imm01++;imm01%=im01imgs.length;
            	importance01.src = im01imgs[imm01];
		break;

		case "2":
        	var imm01=0;
        	var importance01=document.getElementById("importance01");
        	var im01imgs=new Array('ty.png');
            	imm01++;imm01%=im01imgs.length;
            	importance01.src = im01imgs[imm01];
		break;

		case "3":
        	var imm01=0;
        	var importance01=document.getElementById("importance01");
        	var im01imgs=new Array('tg.png');
            	imm01++;imm01%=im01imgs.length;
            	importance01.src = im01imgs[imm01];
		break;
		}
	var im02 = localStorage.getItem('task0203');
	switch (im02)
		{	
		case "0":
        	var imm02=0;
        	var importance01=document.getElementById("importance02");
        	var im02imgs=new Array('tw.png');
            	imm02++;imm02%=im02imgs.length;
            	importance02.src = im02imgs[imm02];
		break;

		case "1":
        	var imm02=0;
        	var importance01=document.getElementById("importance02");
        	var im02imgs=new Array('tr.png');
            	imm02++;imm02%=im02imgs.length;
            	importance02.src = im02imgs[imm02];
		break;

		case "2":
        	var imm02=0;
        	var importance01=document.getElementById("importance02");
        	var im02imgs=new Array('ty.png');
            	imm02++;imm02%=im02imgs.length;
            	importance02.src = im02imgs[imm02];
		break;

		case "3":
        	var imm02=0;
        	var importance01=document.getElementById("importance02");
        	var im02imgs=new Array('tg.png');
            	imm02++;imm02%=im02imgs.length;
            	importance02.src = im02imgs[imm02];
		break;
		}
	var im03 = localStorage.getItem('task0303');
	switch (im03)
		{	
		case "0":
        	var imm03=0;
        	var importance03=document.getElementById("importance03");
        	var im03imgs=new Array('tw.png');
            	imm03++;imm03%=im03imgs.length;
            	importance03.src = im03imgs[imm01];
		break;

		case "1":
        	var imm03=0;
        	var importance03=document.getElementById("importance03");
        	var im03imgs=new Array('tr.png');
            	imm03++;imm03%=im03imgs.length;
            	importance03.src = im03imgs[imm01];
		break;

		case "2":
        	var imm03=0;
        	var importance03=document.getElementById("importance03");
        	var im03imgs=new Array('ty.png');
            	imm03++;imm03%=im03imgs.length;
            	importance03.src = im03imgs[imm01];
		break;

		case "3":
        	var imm03=0;
        	var importance03=document.getElementById("importance03");
        	var im03imgs=new Array('tg.png');
            	imm03++;imm03%=im03imgs.length;
            	importance03.src = im03imgs[imm01];
		break;
		}
	var im04 = localStorage.getItem('task0403');
	switch (im04)
		{	
		case "0":
        	var imm04=0;
        	var importance04=document.getElementById("importance04");
        	var im04imgs=new Array('tw.png');
            	imm04++;imm04%=im04imgs.length;
            	importance04.src = im04imgs[imm04];
		break;

		case "1":
        	var imm04=0;
        	var importance04=document.getElementById("importance04");
        	var im04imgs=new Array('tr.png');
            	imm04++;imm04%=im04imgs.length;
            	importance04.src = im04imgs[imm04];
		break;

		case "2":
        	var imm04=0;
        	var importance04=document.getElementById("importance04");
        	var im04imgs=new Array('ty.png');
            	imm04++;imm04%=im04imgs.length;
            	importance04.src = im04imgs[imm04];
		break;

		case "3":
        	var imm04=0;
        	var importance04=document.getElementById("importance04");
        	var im04imgs=new Array('tg.png');
            	imm04++;imm04%=im04imgs.length;
            	importance04.src = im04imgs[imm04];
		break;
		}
	var im05 = localStorage.getItem('task0503');
	switch (im05)
		{	
		case "0":
        	var imm05=0;
        	var importance05=document.getElementById("importance05");
        	var im05imgs=new Array('tw.png');
            	imm05++;imm05%=im05imgs.length;
            	importance05.src = im05imgs[imm05];
		break;

		case "1":
        	var imm05=0;
        	var importance05=document.getElementById("importance05");
        	var im05imgs=new Array('tr.png');
            	imm05++;imm05%=im05imgs.length;
            	importance05.src = im05imgs[imm05];
		break;

		case "2":
        	var imm05=0;
        	var importance05=document.getElementById("importance05");
        	var im05imgs=new Array('ty.png');
            	imm05++;imm05%=im05imgs.length;
            	importance05.src = im05imgs[imm05];
		break;

		case "3":
        	var imm05=0;
        	var importance05=document.getElementById("importance05");
        	var im05imgs=new Array('tg.png');
            	imm05++;imm05%=im05imgs.length;
            	importance05.src = im05imgs[imm05];
		break;
		}
	var im06 = localStorage.getItem('task0603');
	switch (im06)
		{	
		case "0":
        	var imm06=0;
        	var importance06=document.getElementById("importance06");
        	var im06imgs=new Array('tw.png');
            	imm06++;imm06%=im06imgs.length;
            	importance06.src = im06imgs[imm06];
		break;

		case "1":
        	var imm06=0;
        	var importance06=document.getElementById("importance06");
        	var im06imgs=new Array('tr.png');
            	imm06++;imm06%=im06imgs.length;
            	importance06.src = im06imgs[imm06];
		break;

		case "2":
        	var imm06=0;
        	var importance06=document.getElementById("importance06");
        	var im06imgs=new Array('ty.png');
            	imm06++;imm06%=im06imgs.length;
            	importance06.src = im06imgs[imm06];
		break;

		case "3":
        	var imm06=0;
        	var importance06=document.getElementById("importance06");
        	var im06imgs=new Array('tg.png');
            	imm06++;imm06%=im06imgs.length;
            	importance06.src = im06imgs[imm06];
		break;
		}
	var im07 = localStorage.getItem('task0703');
	switch (im07)
		{	
		case "0":
        	var imm07=0;
        	var importance07=document.getElementById("importance07");
        	var im07imgs=new Array('tw.png');
            	imm07++;imm07%=im07imgs.length;
            	importance07.src = im07imgs[imm07];
		break;

		case "1":
        	var imm07=0;
        	var importance07=document.getElementById("importance07");
        	var im07imgs=new Array('tr.png');
            	imm07++;imm07%=im07imgs.length;
            	importance07.src = im07imgs[imm07];
		break;

		case "2":
        	var imm07=0;
        	var importance07=document.getElementById("importance07");
        	var im07imgs=new Array('ty.png');
            	imm07++;imm07%=im07imgs.length;
            	importance07.src = im07imgs[imm07];
		break;

		case "3":
        	var imm07=0;
        	var importance07=document.getElementById("importance07");
        	var im07imgs=new Array('tg.png');
            	imm07++;imm07%=im07imgs.length;
            	importance07.src = im07imgs[imm07];
		break;
		}
	var im08 = localStorage.getItem('task0803');
	switch (im08)
		{	
		case "0":
        	var imm08=0;
        	var importance08=document.getElementById("importance08");
        	var im08imgs=new Array('tw.png');
            	imm08++;imm08%=im08imgs.length;
            	importance08.src = im08imgs[imm08];
		break;

		case "1":
        	var imm08=0;
        	var importance08=document.getElementById("importance08");
        	var im08imgs=new Array('tr.png');
            	imm08++;imm08%=im08imgs.length;
            	importance08.src = im08imgs[imm08];
		break;

		case "2":
        	var imm08=0;
        	var importance08=document.getElementById("importance08");
        	var im08imgs=new Array('ty.png');
            	imm08++;imm08%=im08imgs.length;
            	importance08.src = im08imgs[imm08];
		break;

		case "3":
        	var imm08=0;
        	var importance08=document.getElementById("importance08");
        	var im08imgs=new Array('tg.png');
            	imm08++;imm08%=im08imgs.length;
            	importance08.src = im08imgs[imm08];
		break;
		}
	var im09 = localStorage.getItem('task0903');
	switch (im09)
		{	
		case "0":
        	var imm09=0;
        	var importance09=document.getElementById("importance09");
        	var im09imgs=new Array('tw.png');
            	imm09++;imm09%=im09imgs.length;
            	importance09.src = im09imgs[imm09];
		break;

		case "1":
        	var imm09=0;
        	var importance09=document.getElementById("importance09");
        	var im09imgs=new Array('tr.png');
            	imm09++;imm09%=im09imgs.length;
            	importance09.src = im09imgs[imm09];
		break;

		case "2":
        	var imm09=0;
        	var importance09=document.getElementById("importance09");
        	var im09imgs=new Array('ty.png');
            	imm09++;imm09%=im09imgs.length;
            	importance09.src = im09imgs[imm09];
		break;

		case "3":
        	var imm09=0;
        	var importance09=document.getElementById("importance09");
        	var im09imgs=new Array('tg.png');
            	imm09++;imm09%=im09imgs.length;
            	importance09.src = im09imgs[imm09];
		break;
		}
	var im10 = localStorage.getItem('task1003');
	switch (im10)
		{	
		case "0":
        	var imm10=0;
        	var importance10=document.getElementById("importance10");
        	var im10imgs=new Array('tw.png');
            	imm10++;imm10%=im10imgs.length;
            	importance10.src = im10imgs[imm10];
		break;

		case "1":
        	var imm10=0;
        	var importance10=document.getElementById("importance10");
        	var im10imgs=new Array('tr.png');
            	imm10++;imm10%=im10imgs.length;
            	importance10.src = im10imgs[imm10];
		break;

		case "2":
        	var imm10=0;
        	var importance10=document.getElementById("importance10");
        	var im10imgs=new Array('ty.png');
            	imm10++;imm10%=im10imgs.length;
            	importance10.src = im10imgs[imm10];
		break;

		case "3":
        	var imm10=0;
        	var importance10=document.getElementById("importance10");
        	var im10imgs=new Array('tg.png');
            	imm10++;imm10%=im10imgs.length;
            	importance10.src = im10imgs[imm10];
		break;
		}
	var im11 = localStorage.getItem('task1103');
	switch (im11)
		{	
		case "0":
        	var imm11=0;
        	var importance11=document.getElementById("importance11");
        	var im11imgs=new Array('tw.png');
            	imm11++;imm11%=im11imgs.length;
            	importance11.src = im11imgs[imm11];
		break;

		case "1":
        	var imm11=0;
        	var importance11=document.getElementById("importance11");
        	var im11imgs=new Array('tr.png');
            	imm11++;imm11%=im11imgs.length;
            	importance11.src = im11imgs[imm11];
		break;

		case "2":
        	var imm11=0;
        	var importance11=document.getElementById("importance11");
        	var im11imgs=new Array('ty.png');
            	imm11++;imm11%=im11imgs.length;
            	importance11.src = im11imgs[imm11];
		break;

		case "3":
        	var imm11=0;
        	var importance11=document.getElementById("importance11");
        	var im11imgs=new Array('tg.png');
            	imm11++;imm11%=im11imgs.length;
            	importance11.src = im11imgs[imm11];
		break;
		}
	var im12 = localStorage.getItem('task1203');
	switch (im12)
		{	
		case "0":
        	var imm12=0;
        	var importance12=document.getElementById("importance12");
        	var im12imgs=new Array('tw.png');
            	imm12++;imm12%=im12imgs.length;
            	importance12.src = im12imgs[imm12];
		break;

		case "1":
        	var imm12=0;
        	var importance12=document.getElementById("importance12");
        	var im12imgs=new Array('tr.png');
            	imm12++;imm12%=im12imgs.length;
            	importance12.src = im12imgs[imm12];
		break;

		case "2":
        	var imm12=0;
        	var importance12=document.getElementById("importance12");
        	var im12imgs=new Array('ty.png');
            	imm12++;imm12%=im12imgs.length;
            	importance12.src = im12imgs[imm12];
		break;

		case "3":
        	var imm12=0;
        	var importance12=document.getElementById("importance12");
        	var im12imgs=new Array('tg.png');
            	imm12++;imm12%=im12imgs.length;
            	importance12.src = im12imgs[imm12];
		break;
		}

	var st01 = localStorage.getItem('task0104');
	switch (st01)
		{	
		case "0":
      	  	var stt01=0;
        		var status01=document.getElementById("status01");
        		var st01imgs=new Array('tw.png');
            	stt01++;stt01%=st01imgs.length;
            	status01.src = st01imgs[stt01];
		break;

		case "1":
      	  	var stt01=0;
        		var status01=document.getElementById("status01");
        		var st01imgs=new Array('tg.png');
            	stt01++;stt01%=st01imgs.length;
            	status01.src = st01imgs[stt01];
		break;

		case "2":
      	  	var stt01=0;
        		var status01=document.getElementById("status01");
        		var st01imgs=new Array('tr.png');
            	stt01++;stt01%=st01imgs.length;
            	status01.src = st01imgs[stt01];
		break;

		case "3":
      	  	var stt01=0;
        		var status01=document.getElementById("status01");
        		var st01imgs=new Array('ty.png');
            	stt01++;stt01%=st01imgs.length;
            	status01.src = st01imgs[stt01];
		break;
		}

	var st02 = localStorage.getItem('task0204');
	switch (st02)
		{	
		case "0":
      	  	var stt02=0;
        		var status02=document.getElementById("status02");
        		var st02imgs=new Array('tw.png');
            	stt02++;stt02%=st02imgs.length;
            	status02.src = st02imgs[stt02];
		break;

		case "1":
      	  	var stt02=0;
        		var status02=document.getElementById("status02");
        		var st02imgs=new Array('tg.png');
            	stt02++;stt02%=st02imgs.length;
            	status02.src = st02imgs[stt02];
		break;

		case "2":
      	  	var stt02=0;
        		var status02=document.getElementById("status02");
        		var st02imgs=new Array('tr.png');
            	stt02++;stt02%=st02imgs.length;
            	status02.src = st02imgs[stt02];
		break;

		case "3":
      	  	var stt02=0;
        		var status02=document.getElementById("status02");
        		var st02imgs=new Array('ty.png');
            	stt02++;stt02%=st02imgs.length;
            	status02.src = st02imgs[stt02];
		break;
		}

	var st03 = localStorage.getItem('task0304');
	switch (st03)
		{	
		case "0":
      	  	var stt03=0;
        		var status03=document.getElementById("status03");
        		var st03imgs=new Array('tw.png');
            	stt03++;stt03%=st03imgs.length;
            	status03.src = st03imgs[stt03];
		break;

		case "1":
      	  	var stt03=0;
        		var status03=document.getElementById("status03");
        		var st03imgs=new Array('tg.png');
            	stt03++;stt03%=st03imgs.length;
            	status03.src = st03imgs[stt03];
		break;

		case "2":
      	  	var stt03=0;
        		var status03=document.getElementById("status03");
        		var st03imgs=new Array('tr.png');
            	stt03++;stt03%=st03imgs.length;
            	status03.src = st03imgs[stt03];
		break;

		case "3":
      	  	var stt03=0;
        		var status03=document.getElementById("status03");
        		var st03imgs=new Array('ty.png');
            	stt03++;stt03%=st03imgs.length;
            	status03.src = st03imgs[stt03];
		break;
		}

	var st04 = localStorage.getItem('task0404');
	switch (st04)
		{	
		case "0":
      	  	var stt04=0;
        		var status04=document.getElementById("status04");
        		var st04imgs=new Array('tw.png');
            	stt04++;stt04%=st04imgs.length;
            	status04.src = st04imgs[stt04];
		break;

		case "1":
      	  	var stt04=0;
        		var status04=document.getElementById("status04");
        		var st04imgs=new Array('tg.png');
            	stt04++;stt04%=st04imgs.length;
            	status04.src = st04imgs[stt04];
		break;

		case "2":
      	  	var stt04=0;
        		var status04=document.getElementById("status04");
        		var st04imgs=new Array('tr.png');
            	stt04++;stt04%=st04imgs.length;
            	status04.src = st04imgs[stt04];
		break;

		case "3":
      	  	var stt04=0;
        		var status04=document.getElementById("status04");
        		var st04imgs=new Array('ty.png');
            	stt04++;stt04%=st04imgs.length;
            	status04.src = st04imgs[stt04];
		break;
		}

	var st05 = localStorage.getItem('task0504');
	switch (st05)
		{	
		case "0":
      	  	var stt05=0;
        		var status05=document.getElementById("status05");
        		var st05imgs=new Array('tw.png');
            	stt05++;stt05%=st05imgs.length;
            	status05.src = st05imgs[stt05];
		break;

		case "1":
      	  	var stt05=0;
        		var status05=document.getElementById("status05");
        		var st05imgs=new Array('tg.png');
            	stt05++;stt05%=st05imgs.length;
            	status05.src = st05imgs[stt05];
		break;

		case "2":
      	  	var stt05=0;
        		var status05=document.getElementById("status05");
        		var st05imgs=new Array('tr.png');
            	stt05++;stt05%=st05imgs.length;
            	status05.src = st05imgs[stt05];
		break;

		case "3":
      	  	var stt05=0;
        		var status05=document.getElementById("status05");
        		var st05imgs=new Array('ty.png');
            	stt05++;stt05%=st05imgs.length;
            	status05.src = st05imgs[stt05];
		break;
		}

	var st06 = localStorage.getItem('task0604');
	switch (st06)
		{	
		case "0":
      	  	var stt06=0;
        		var status06=document.getElementById("status06");
        		var st06imgs=new Array('tw.png');
            	stt06++;stt06%=st06imgs.length;
            	status06.src = st06imgs[stt06];
		break;

		case "1":
      	  	var stt06=0;
        		var status06=document.getElementById("status06");
        		var st06imgs=new Array('tg.png');
            	stt06++;stt06%=st06imgs.length;
            	status06.src = st06imgs[stt06];
		break;

		case "2":
      	  	var stt06=0;
        		var status06=document.getElementById("status06");
        		var st06imgs=new Array('tr.png');
            	stt06++;stt06%=st06imgs.length;
            	status06.src = st06imgs[stt06];
		break;

		case "3":
      	  	var stt06=0;
        		var status06=document.getElementById("status06");
        		var st06imgs=new Array('ty.png');
            	stt06++;stt06%=st06imgs.length;
            	status06.src = st06imgs[stt06];
		break;
		}

	var st07 = localStorage.getItem('task0704');
	switch (st07)
		{	
		case "0":
      	  	var stt07=0;
        		var status07=document.getElementById("status07");
        		var st07imgs=new Array('tw.png');
            	stt07++;stt07%=st07imgs.length;
            	status07.src = st07imgs[stt07];
		break;

		case "1":
      	  	var stt07=0;
        		var status07=document.getElementById("status07");
        		var st07imgs=new Array('tg.png');
            	stt07++;stt07%=st07imgs.length;
            	status07.src = st07imgs[stt07];
		break;

		case "2":
      	  	var stt07=0;
        		var status07=document.getElementById("status07");
        		var st07imgs=new Array('tr.png');
            	stt07++;stt07%=st07imgs.length;
            	status07.src = st07imgs[stt07];
		break;

		case "3":
      	  	var stt07=0;
        		var status07=document.getElementById("status07");
        		var st07imgs=new Array('ty.png');
            	stt07++;stt07%=st07imgs.length;
            	status07.src = st07imgs[stt07];
		break;
		}

	var st08 = localStorage.getItem('task0804');
	switch (st08)
		{	
		case "0":
      	  	var stt08=0;
        		var status08=document.getElementById("status08");
        		var st08imgs=new Array('tw.png');
            	stt08++;stt08%=st08imgs.length;
            	status08.src = st08imgs[stt08];
		break;

		case "1":
      	  	var stt08=0;
        		var status08=document.getElementById("status08");
        		var st08imgs=new Array('tg.png');
            	stt08++;stt08%=st08imgs.length;
            	status08.src = st08imgs[stt08];
		break;

		case "2":
      	  	var stt08=0;
        		var status08=document.getElementById("status08");
        		var st08imgs=new Array('tr.png');
            	stt08++;stt08%=st08imgs.length;
            	status08.src = st08imgs[stt08];
		break;

		case "3":
      	  	var stt08=0;
        		var status08=document.getElementById("status08");
        		var st08imgs=new Array('ty.png');
            	stt08++;stt08%=st08imgs.length;
            	status08.src = st08imgs[stt08];
		break;
		}

	var st09 = localStorage.getItem('task0904');
	switch (st09)
		{	
		case "0":
      	  	var stt09=0;
        		var status09=document.getElementById("status09");
        		var st09imgs=new Array('tw.png');
            	stt09++;stt09%=st09imgs.length;
            	status09.src = st09imgs[stt09];
		break;

		case "1":
      	  	var stt09=0;
        		var status09=document.getElementById("status09");
        		var st09imgs=new Array('tg.png');
            	stt09++;stt09%=st09imgs.length;
            	status09.src = st09imgs[stt09];
		break;

		case "2":
      	  	var stt09=0;
        		var status09=document.getElementById("status09");
        		var st09imgs=new Array('tr.png');
            	stt09++;stt09%=st09imgs.length;
            	status09.src = st09imgs[stt09];
		break;

		case "3":
      	  	var stt09=0;
        		var status09=document.getElementById("status09");
        		var st09imgs=new Array('ty.png');
            	stt09++;stt09%=st09imgs.length;
            	status09.src = st09imgs[stt09];
		break;
		}

	var st10 = localStorage.getItem('task1004');
	switch (st10)
		{	
		case "0":
      	  	var stt10=0;
        		var status10=document.getElementById("status10");
        		var st10imgs=new Array('tw.png');
            	stt10++;stt10%=st10imgs.length;
            	status10.src = st10imgs[stt10];
		break;

		case "1":
      	  	var stt10=0;
        		var status10=document.getElementById("status10");
        		var st10imgs=new Array('tg.png');
            	stt10++;stt10%=st10imgs.length;
            	status10.src = st10imgs[stt10];
		break;

		case "2":
      	  	var stt10=0;
        		var status10=document.getElementById("status10");
        		var st10imgs=new Array('tr.png');
            	stt10++;stt10%=st10imgs.length;
            	status10.src = st10imgs[stt10];
		break;

		case "3":
      	  	var stt10=0;
        		var status10=document.getElementById("status10");
        		var st10imgs=new Array('ty.png');
            	stt10++;stt10%=st10imgs.length;
            	status10.src = st10imgs[stt10];
		break;
		}

	var st11 = localStorage.getItem('task1104');
	switch (st11)
		{	
		case "0":
      	  	var stt11=0;
        		var status11=document.getElementById("status11");
        		var st11imgs=new Array('tw.png');
            	stt11++;stt11%=st11imgs.length;
            	status11.src = st11imgs[stt11];
		break;

		case "1":
      	  	var stt11=0;
        		var status11=document.getElementById("status11");
        		var st11imgs=new Array('tg.png');
            	stt11++;stt11%=st11imgs.length;
            	status11.src = st11imgs[stt11];
		break;

		case "2":
      	  	var stt11=0;
        		var status11=document.getElementById("status11");
        		var st11imgs=new Array('tr.png');
            	stt11++;stt11%=st11imgs.length;
            	status11.src = st11imgs[stt11];
		break;

		case "3":
      	  	var stt11=0;
        		var status11=document.getElementById("status11");
        		var st11imgs=new Array('ty.png');
            	stt11++;stt11%=st11imgs.length;
            	status11.src = st11imgs[stt11];
		break;
		}

	var st12 = localStorage.getItem('task1204');
	switch (st12)
		{	
		case "0":
      	  	var stt12=0;
        		var status12=document.getElementById("status12");
        		var st12imgs=new Array('tw.png');
            	stt12++;stt12%=st12imgs.length;
            	status12.src = st12imgs[stt12];
		break;

		case "1":
      	  	var stt12=0;
        		var status12=document.getElementById("status12");
        		var st12imgs=new Array('tg.png');
            	stt12++;stt12%=st12imgs.length;
            	status12.src = st12imgs[stt12];
		break;

		case "2":
      	  	var stt12=0;
        		var status12=document.getElementById("status12");
        		var st12imgs=new Array('tr.png');
            	stt12++;stt12%=st12imgs.length;
            	status12.src = st12imgs[stt12];
		break;

		case "3":
      	  	var stt12=0;
        		var status12=document.getElementById("status12");
        		var st12imgs=new Array('ty.png');
            	stt12++;stt12%=st12imgs.length;
            	status12.src = st12imgs[stt12];
		break;
		}
	}
function task_delete()
	{
	taskname.value = "";
	tasktext.value = "";
	document.getElementById("taskselect1").selectedIndex = 0;
	document.getElementById("taskselect2").selectedIndex = 0;
	date.value = "";
	weekday.value = "";
	time.value = "";
	}
function task_change1(tch)
	{
	switch (tch)
		{
		case 1:
		localStorage.setItem('taskchange', 1);
		break

		case 2:
		localStorage.setItem('taskchange', 2);
		break

		case 3:
		localStorage.setItem('taskchange', 3);
		break

		case 4:
		localStorage.setItem('taskchange', 4);
		break

		case 5:
		localStorage.setItem('taskchange', 5);

		break

		case 6:
		localStorage.setItem('taskchange', 6);
		break

		case 7:
		localStorage.setItem('taskchange', 7);
		break

		case 8:
		localStorage.setItem('taskchange', 8);
		break

		case 9:
		localStorage.setItem('taskchange', 9);
		break

		case 10:
		localStorage.setItem('taskchange', 10);
		break

		case 11:
		localStorage.setItem('taskchange', 11);
		break

		case 12:
		localStorage.setItem('taskchange', 12);
		break
		}
	window.location.href = 'tasks2.html';
	
	}
function task_change2()
	{
	var tsw = localStorage.getItem('taskchange');
	switch (tsw)
		{
		case "1":
		localStorage.setItem('task0101', taskname.value);
		localStorage.setItem('task0102', tasktext.value);
		localStorage.setItem('task0103', document.getElementById("taskselect1").selectedIndex)
		localStorage.setItem('task0104', document.getElementById("taskselect2").selectedIndex);
		localStorage.setItem('task0105', date.value);
		localStorage.setItem('task0106', weekday.value);
		localStorage.setItem('task0107', time.value);
		break;

		case "2":
		localStorage.setItem('task0201', taskname.value);
		localStorage.setItem('task0202', tasktext.value);
		localStorage.setItem('task0203', document.getElementById("taskselect1").selectedIndex)
		localStorage.setItem('task0204', document.getElementById("taskselect2").selectedIndex);
		localStorage.setItem('task0205', date.value);
		localStorage.setItem('task0206', weekday.value);
		localStorage.setItem('task0207', time.value);
		break;

		case "3":
		localStorage.setItem('task0301', taskname.value);
		localStorage.setItem('task0302', tasktext.value);
		localStorage.setItem('task0303', document.getElementById("taskselect1").selectedIndex)
		localStorage.setItem('task0304', document.getElementById("taskselect2").selectedIndex);
		localStorage.setItem('task0305', date.value);
		localStorage.setItem('task0306', weekday.value);
		localStorage.setItem('task0307', time.value);
		break;

		case "4":
		localStorage.setItem('task0401', taskname.value);
		localStorage.setItem('task0402', tasktext.value);
		localStorage.setItem('task0403', document.getElementById("taskselect1").selectedIndex)
		localStorage.setItem('task0404', document.getElementById("taskselect2").selectedIndex);
		localStorage.setItem('task0405', date.value);
		localStorage.setItem('task0406', weekday.value);
		localStorage.setItem('task0407', time.value);
		break;

		case "5":
		localStorage.setItem('task0501', taskname.value);
		localStorage.setItem('task0502', tasktext.value);
		localStorage.setItem('task0503', document.getElementById("taskselect1").selectedIndex)
		localStorage.setItem('task0504', document.getElementById("taskselect2").selectedIndex);
		localStorage.setItem('task0505', date.value);
		localStorage.setItem('task0506', weekday.value);
		localStorage.setItem('task0507', time.value);
		break;

		case "6":
		localStorage.setItem('task0601', taskname.value);
		localStorage.setItem('task0602', tasktext.value);
		localStorage.setItem('task0603', document.getElementById("taskselect1").selectedIndex)
		localStorage.setItem('task0604', document.getElementById("taskselect2").selectedIndex);
		localStorage.setItem('task0605', date.value);
		localStorage.setItem('task0606', weekday.value);
		localStorage.setItem('task0607', time.value);
		break;

		case "7":
		localStorage.setItem('task0701', taskname.value);
		localStorage.setItem('task0702', tasktext.value);
		localStorage.setItem('task0703', document.getElementById("taskselect1").selectedIndex)
		localStorage.setItem('task0704', document.getElementById("taskselect2").selectedIndex);
		localStorage.setItem('task0705', date.value);
		localStorage.setItem('task0706', weekday.value);
		localStorage.setItem('task0707', time.value);
		break;

		case "8":
		localStorage.setItem('task0801', taskname.value);
		localStorage.setItem('task0802', tasktext.value);
		localStorage.setItem('task0803', document.getElementById("taskselect1").selectedIndex)
		localStorage.setItem('task0804', document.getElementById("taskselect2").selectedIndex);
		localStorage.setItem('task0805', date.value);
		localStorage.setItem('task0806', weekday.value);
		localStorage.setItem('task0807', time.value);
		break;

		case "9":
		localStorage.setItem('task0901', taskname.value);
		localStorage.setItem('task0902', tasktext.value);
		localStorage.setItem('task0903', document.getElementById("taskselect1").selectedIndex)
		localStorage.setItem('task0904', document.getElementById("taskselect2").selectedIndex);
		localStorage.setItem('task0905', date.value);
		localStorage.setItem('task0906', weekday.value);
		localStorage.setItem('task0907', time.value);
		break;

		case "10":
		localStorage.setItem('task1001', taskname.value);
		localStorage.setItem('task1002', tasktext.value);
		localStorage.setItem('task1003', document.getElementById("taskselect1").selectedIndex)
		localStorage.setItem('task1004', document.getElementById("taskselect2").selectedIndex);
		localStorage.setItem('task1005', date.value);
		localStorage.setItem('task1006', weekday.value);
		localStorage.setItem('task1007', time.value);
		break;

		case "11":
		localStorage.setItem('task1101', taskname.value);
		localStorage.setItem('task1102', tasktext.value);
		localStorage.setItem('task1103', document.getElementById("taskselect1").selectedIndex)
		localStorage.setItem('task1104', document.getElementById("taskselect2").selectedIndex);
		localStorage.setItem('task1105', date.value);
		localStorage.setItem('task1106', weekday.value);
		localStorage.setItem('task1107', time.value);
		break;

		case "12":
		localStorage.setItem('task1201', taskname.value);
		localStorage.setItem('task1202', tasktext.value);
		localStorage.setItem('task1203', document.getElementById("taskselect1").selectedIndex)
		localStorage.setItem('task1204', document.getElementById("taskselect2").selectedIndex);
		localStorage.setItem('task1205', date.value);
		localStorage.setItem('task1206', weekday.value);
		localStorage.setItem('task1207', time.value);
		break;
		}
	window.location.href = 'tasks1.html';
	}
function datechange()
	{
  	let myDate = date.value;
	if (myDate != "")
		{
		let date = new Date(myDate);
		let wd = date.getDay();
		switch (wd)
			{
			case 0:
			weekday.value = "Sun";
			break;

			case 1:
			weekday.value = "Mon";
			break;

			case 2:
			weekday.value = "Tue";
			break;

			case 3:
			weekday.value = "Wed";
			break;

			case 4:
			weekday.value = "Thu";
			break;

			case 5:
			weekday.value = "Fri";
			break;

			case 6:
			weekday.value = "Sat";
			break;
			}
		}
	}
function task_select1()
	{
	if (taskselect1.value == "vw")
		{
		document.getElementById('taskselect1').style.backgroundColor = 'white';
		}
	else if (taskselect1.value == "vi")
		{
		document.getElementById('taskselect1').style.backgroundColor = 'red';
		}
	else if (taskselect1.value == "i")
		{
		document.getElementById('taskselect1').style.backgroundColor = 'yellow';
		}
	else if (taskselect1.value == "nsi")
		{
		document.getElementById('taskselect1').style.backgroundColor = 'green';
		}
	}
function task_select2()
	{
	if (taskselect2.value == "d")
		{
		document.getElementById('taskselect2').style.backgroundColor = 'green';
		}
	else if (taskselect2.value == "p")
		{
		document.getElementById('taskselect2').style.backgroundColor = 'red';
		}
	else if (taskselect2.value == "ip")
		{
		document.getElementById('taskselect2').style.backgroundColor = 'yellow';
		}
	else if (taskselect2.value == "dns")
		{
		document.getElementById('taskselect2').style.backgroundColor = 'white';
		}
	}
















