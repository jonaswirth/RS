// The code is very ugly, I know. But time is very limited currently, so I don't really care.

const dayMs = 86400000;

var rsStart = new Date(2018, 0, 15, 13, 00);
var rsEnd = new Date(2018, 4, 18, 15, 00);
var totalRs = rsEnd - rsStart;

var uosStart = new Date(2018, 4, 19, 8, 00);
var uosEnd = new Date(2018, 5, 16, 13, 00);
var totalUos = uosEnd - uosStart;

var rs2Start = new Date(2018, 5, 16, 13, 00);
var rs2End = new Date(2018, 9, 26, 18, 00);
var totalRs2 = rs2End - rs2Start;

var total = rs2End - rsStart;

function setProgressbar(id, progress, timeleft){
  var elem = document.getElementById(id);
  var elemProgress = elem.childNodes[1];
  var elemPercent = elem.childNodes[3];
  var elemDaysLeft = elem.childNodes[5];

  if(progress <= 0){
    elemPercent.innerHTML = "0 %";
    elemDaysLeft.innerHTML = timeleft;
  }
  else if(progress < 100)
  {
    elemProgress.style.width = progress + "%";
    elemPercent.innerHTML = (Math.round(progress * 10000) / 10000) + " %";
    elemDaysLeft.innerHTML = "noch " + timeleft;
  }
  else{
    elemProgress.style.width = "100%";
    elemPercent.innerHTML = "100 %";
    elemDaysLeft.innerHTML = "FERTIG!";
  }
}

function update(){
  var passedRs = new Date() - rsStart;
  var progressRs = 100 / totalRs * passedRs;

  var passedUos = new Date() - uosStart;
  var progressUos = 100 / totalUos * passedUos;

  var passedRs2 = new Date() - rs2Start;
  var progressRs2 = 100 / totalRs2 * passedRs2;

  if(passedUos < 0)
    passedUos = 0;

  if(passedRs2 < 0)
    passedRs2 = 0;

  var passedTotal = new Date() - rsStart;
  var progressTotal = 100 / total * passedTotal;


  setProgressbar("rs", progressRs, getTimeLeft(totalRs - (new Date() - rsStart)));
  setProgressbar("uos", progressUos, getTimeLeft(totalUos - (new Date() - uosStart)));
  setProgressbar("rs2", progressRs2, getTimeLeft(totalRs2 - (new Date() - rs2Start)));
  setProgressbar("total", progressTotal, getTimeLeft(total - (new Date() - rsStart)));
  setPassedTime();
};

function getTimeLeft(distance){
  if (distance < 0)
    return null;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  var str = "";

  if(days === 1)
    str += days + " Tag ";
  else
    str += days + " Tage ";

  if(hours === 1)
    str += hours + " Stunde ";
  else
    str += hours + " Stunden ";

  return str + minutes + " Minuten " + seconds + " Sekunden ";
};

function setPassedTime(){
  var elem = document.getElementById("passedTime");
  elem.innerHTML = "Es sind bereits " + getTimeLeft(new Date() - rsStart) + " vergangen.";
}

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    update();
    setInterval(() => {update();}, 1000);
  }
};



//Log
/*
console.log(rsStart);
console.log(rsEnd);
console.log(new Date());
*/
