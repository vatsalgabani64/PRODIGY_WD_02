let timer; 
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let lapCount = 0;

function startStop() {
  if (!timer) {
    timer = setInterval(run, 10);
    document.getElementById('startStop').innerText = 'Stop';
  } else {
    clearInterval(timer);
    timer = null;
    document.getElementById('startStop').innerText = 'Start';
  }
}

function run() {
  milliseconds++;
  if (milliseconds == 100) {
    milliseconds = 0;
    seconds++;
  }
  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }
  document.getElementById('display').innerText = 
    (minutes < 10 ? '0' + minutes : minutes) + ':' +
    (seconds < 10 ? '0' + seconds : seconds) + ':' +
    (milliseconds < 10 ? '0' + milliseconds : milliseconds);
}

function reset() {
  clearInterval(timer);
  timer = null;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  document.getElementById('display').innerText = '00:00:00';
  document.getElementById('startStop').innerText = 'Start';
  document.getElementById('laps').innerHTML = '';
}

function lap() {
  lapCount++;
  const lapTime = document.getElementById('display').innerText;
  const lapItem = document.createElement('li');
  lapItem.innerText = 'Lap ' + lapCount + ': ' + lapTime;
  document.getElementById('laps').appendChild(lapItem);
}
