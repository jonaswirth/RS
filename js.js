const dayMs = 86400000;

var rsStart = new Date(2018, 0, 15);
var rsEnd = new Date(2018, 4, 18);

var currentDate = new Date();

var totalRs = rsEnd - rsStart;
var passedRs = currentDate - rsStart;
var progressRs = 100 / totalRs * passedRs;

function setProgressbar(id, progress){
  var elem = document.getElementById(id);
  var elemProgress = elem.childNodes[1];
  var elemPercent = elem.childNodes[3];
  var elemDaysLeft = elem.childNodes[5];

  if(progress < 100)
  {
    elemProgress.style.width = progress + "%";
    elemPercent.innerHTML = (Math.round(progress * 100) / 100) + " %";
    elemDaysLeft.innerHTML = "noch " + Math.round((totalRs - passedRs) / dayMs) + " Tage";
  }
  else{
    elemProgress.style.width = "100%";
    elemPercent.innerHTML = "100 %";
    elemDaysLeft.innerHTML = "FERTIG!";
  }
}

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    setProgressbar("rs", progressRs);
  }
};


/*
//Log
console.log(rsStart);
console.log(rsEnd);
console.log(currentDate);
console.log(totalRs);
console.log(passedRs);
console.log(progressRs);
*/
