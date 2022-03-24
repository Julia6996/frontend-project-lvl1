import { getRandomInt } from '../index.js';
import runGame from '../gameEngine.js';

const getTrueAnswer = (a, b) => {
  if (b) {
    return getTrueAnswer(b, a % b);
  }
  return Math.abs(a);
};
const createRound = () => {
  const firstNum = getRandomInt(0, 20);
  const secondNum = getRandomInt(0, 20);
  const question = `Question: ${firstNum} ${secondNum}`;
  return [getTrueAnswer(firstNum, secondNum), question];
};

const startGameGcd = () => {
  const discription = 'Find the greatest common divisor of given numbers.';
  runGame(createRound, discription);
};

export default startGameGcd;
