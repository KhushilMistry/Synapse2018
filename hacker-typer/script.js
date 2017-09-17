$(document).ready(function () {
	$("body").click(function(event) {
		/*window.open("http://geekprank.com/blue-death/","_self");*/
	});	
	$('body').keydown(function(e) {
		if((e.which == 27) || (e.which == 13)) {	//Enter Esc
		/*	window.open("http://geekprank.com/blue-death/","_self");*/
		}		
	});
});


var message = "Right-click disabled"; 
function clickIE() {if (document.all) {(message);return false;}} 
function clickNS(e) {if 
(document.layers||(document.getElementById&&!document.all)) { 
if (e.which==2||e.which==3) {(message);return false;}}} 
if (document.layers) 
{document.captureEvents(Event.MOUSEDOWN);document.onmousedown = clickNS;} 
else{document.onmouseup = clickNS;document.oncontextmenu = clickIE;} 
document.oncontextmenu = new Function("return false");








