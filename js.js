// The code is very ugly, I know. But time is very limited currently, so I don't really care.

const dayMs = 86400000;

var rsStart = new Date(2018, 0, 15, 13, 00);
var rsEnd = new Date(2018, 4, 18, 15, 00);

var totalRs = rsEnd - rsStart;


function setProgressbar(id, progress){
  var elem = document.getElementById(id);
  var elemProgress = elem.childNodes[1];
  var elemPercent = elem.childNodes[3];
  var elemDaysLeft = elem.childNodes[5];

  if(progress < 100)
  {
    elemProgress.style.width = progress + "%";
    elemPercent.innerHTML = (Math.round(progress * 10000) / 10000) + " %";
    elemDaysLeft.innerHTML = getTimeLeft(totalRs - (new Date() - rsStart));
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

  setProgressbar("rs", progressRs);
};

function getTimeLeft(distance){
  if (distance < 0)
    return null;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  var str = "noch ";

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
