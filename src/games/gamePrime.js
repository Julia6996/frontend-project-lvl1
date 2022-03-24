import { getRandomInt } from '../index.js';
import runGame from '../gameEngine.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getCorrectAnswer = (num) => (isPrime(num) ? 'yes' : 'no');

const createRound = () => {
  const randomNum = getRandomInt(0, 50);
  const trueAnswer = getCorrectAnswer(randomNum);
  const question = `Question: ${randomNum}`;
  return [trueAnswer, question];
};

const startGamePrime = () => {
  const discription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runGame(createRound, discription);
};

export default startGamePrime;
