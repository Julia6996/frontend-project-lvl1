import getRandomInt from '../getRandomInt.js';
import runGame from '../gameEngine.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (b) {
    return getGcd(b, a % b);
  }
  return Math.abs(a);
};

const createRound = () => {
  const firstNum = getRandomInt(0, 20);
  const secondNum = getRandomInt(0, 20);
  const question = `Question: ${firstNum} ${secondNum}`;
  const trueAnswer = String(getGcd(firstNum, secondNum));
  return [trueAnswer, question];
};

const startGameGcd = () => {
  runGame(createRound, description);
};

export default startGameGcd;
