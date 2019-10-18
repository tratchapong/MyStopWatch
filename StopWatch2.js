//StopWatch2.js

var t = new Date();
var start = new Date();
var running = false;
var lang = "th-TH";
var opt = { minute: 'numeric', second: 'numeric' };
var df = new Intl.DateTimeFormat(lang,opt);
var audio = new Audio('hit.mp3');
var tt = 0;


function toggleWatch() {
	if (!running) { //start capture time from not running state...
		start = new Date();
		running = true;
		document.getElementById('togglebutton').innerHTML = 'Stop';
		document.getElementById('latest result').style.color = 'gray';
		document.getElementById('watch').style.fontSize = 180;
		document.getElementById('watch').style.color = 'green';
		document.getElementById('latest result').style.fontSize = 60;
	} else { // stop capture time from running state...
		running = false;
		document.getElementById('latest result').innerHTML = df.format(t) + ':' + t.getMilliseconds().toString().substring(0,1);
		document.getElementById('latest result').style.color = 'green';
		document.getElementById('watch').style.color = 'gray';
		document.getElementById('latest result').style.fontSize = 160;
		document.getElementById('watch').style.fontSize = 60;
		document.getElementById('togglebutton').innerHTML = 'Start';
		t.setTime(0);
	}

}

function update() {
	var played = false;
	if(running) {
		t.setTime(new Date().getTime() - start.getTime());
		}
	document.getElementById('watch').innerHTML = df.format(t) + ':' + t.getMilliseconds().toString().substring(0,1);
	if(t.getSeconds() % 10 === 0 && t.getSeconds() !== tt) {
			tt = t.getSeconds();
			audio.play();
	}
	document.getElementById("togglebutton").focus();
}

t.setTime(0);
document.getElementById('watch').innerHTML = df.format(t)+ ':' + t.getMilliseconds().toString().substring(0,1);
setInterval(update,100);
