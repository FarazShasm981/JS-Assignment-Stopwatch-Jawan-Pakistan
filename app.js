var box1 = document.getElementById("hour");
var box2 = document.getElementById("min");
var box3 = document.getElementById("sec");
var box4 = document.getElementById("milsec");
var sBtn = document.getElementById("startBtn");
var inp1 = 0;
var inp2 = 0;
var inp3 = 0;
var inp4 = 0;
var interval;
function stopwatch() {
  inp4++;
  box4.innerHTML = inp4;
  if (box4.innerHTML >= 100) {
    inp3++;
    box3.innerHTML = inp3;
    inp4 = 0;
    if (box3.innerHTML >= 60) {
      inp2++;
      box2.innerHTML = inp2;
      inp3 = 0;
      if (box2.innerHTML >= 60) {
        inp1++;
        box1.innerHTML = inp1;
        inp2 = 0;
      }
    }
  }
}
function start() {
  interval = setInterval(stopwatch, 10);
  sBtn.disabled = true;
}
function stop() {
  clearInterval(interval);
  sBtn.disabled = false;
}
function reset() {
  inp1 = 0;
  inp2 = 0;
  inp3 = 0;
  inp4 = 0;
  box1.innerHTML = inp1;
  box2.innerHTML = inp2;
  box3.innerHTML = inp3;
  box4.innerHTML = inp4;
}
console.log(box1);
