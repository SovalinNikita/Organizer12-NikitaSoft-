if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent))
{
document.write('<link  rel="stylesheet" href="settingsmobilestyle.css">');
}

else
{
document.write('<link  rel="stylesheet" href="settingscomputerstyle.css">');
}
