var rsStart = new Date(2018, 0, 15);
var rsEnd = new Date(2018, 4, 18);

var currentDate = new Date();

var totalRs = rsEnd - rsStart;
var passedRs = currentDate - rsStart;
var progressRs = 100 / totalRs * passedRs;

function setProgressbar(id, progress){
  var elem = document.getElementById(id);
  var elemProgress = elem.childNodes[1];
  console.log(elem.childNodes);
  elemProgress.style.width = progress + "%";
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
