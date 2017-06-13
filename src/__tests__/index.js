const gameState = require('../gamestate');

test('returns 5', () => {
  expect(gameState.tick()).toBe(5);
});