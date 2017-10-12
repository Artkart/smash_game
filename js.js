var minion1 = document.getElementById('minion1');
var minion2 = document.getElementById('minion2');
var minion3 = document.getElementById('minion3');

function startGame() {


  document.getElementById('startBlock').style.display = 'none';
  document.getElementById('gameHover').style.display = 'none';

init();
}

function init() {
  for (i=0; i< 10; i++) {
    minion1.style.height = 10 * i + '%';
  }

}
