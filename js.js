var minion1 = document.getElementById('minion1');
var minion2 = document.getElementById('minion2');
var minion3 = document.getElementById('minion3');
var result = 0;
var level = 1;
var i = 0;

function startGame() {
  document.getElementById('startBlock').style.display = 'none';
  document.getElementById('gameHover').style.display = 'none';
  document.getElementById('currentScore').style.display = 'block';
  document.getElementById('currentScore').innerHTML = 0;
init();
}
function init() {
  level = 1;
  result = 0;
  growMinion()
}
function growMinion() {
  setTimeout(function () {
  if (minion1.offsetHeight  > 600 || minion2.offsetHeight  > 600 || minion3.offsetHeight  > 600)
  {
    // will be game over
    gameOver();
    return false;
  }
    minion1.style.height = minion1.offsetHeight + 1 + 'px';
    minion2.style.height = minion2.offsetHeight + 1 + 'px';
    minion3.style.height = minion3.offsetHeight + 1 + 'px';
    growMinion();
  }, 50/level);
}

function smashMinion(currentMinion) {
  document.getElementById(currentMinion).style.height = 100 + 'px';
  result += 1;
  if ( result % 10 === 0) {
    levelUp();
  }
  document.getElementById('currentScore').innerHTML = result;
}

function levelUp() {
  level++;
  document.getElementById('levelUp').style.display = 'block';
  document.getElementById('levelUp').innerHTML  = 'level up ' + level;;
  setTimeout(function(){
    document.getElementById('levelUp').style.display = 'none';
  }, 1000 );
}

function gameOver() {
  minion1.style.height = minion2.style.height =  minion3.style.height =  '130px';
  document.getElementById('gameHover').style.display = 'block';
  document.getElementById('gameOverBlock').style.display = 'block';
  document.getElementById('result').innerHTML = result;
  result = 0;
}

function restartGame() {
  document.getElementById('gameHover').style.display = 'none';
  document.getElementById('gameOverBlock').style.display = 'none';
  document.getElementById('currentScore').innerHTML = 0;

  init();
}
