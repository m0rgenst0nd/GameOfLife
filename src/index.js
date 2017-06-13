const gameState = require('./gamestate');
const term = require('terminal-kit').terminal;

term.clear();

function draw() {
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 8; x++) {
      term.moveTo(x+1, y+1, '' + Math.floor(Math.random() * 10));
    }
  }
}

draw();
setInterval(draw, 100);
