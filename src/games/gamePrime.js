import getRandomInt from '../geRandomInt.js';
import runGame from '../gameEngine.js';

const isPrime = (num) => {
  if (num < 3) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getCorrectAnswer = (num) => (isPrime(num) ? 'yes' : 'no');

const createRound = () => {
  const randomNum = getRandomInt(1, 50);
  const trueAnswer = getCorrectAnswer(randomNum);
  const question = `Question: ${randomNum}`;
  return [trueAnswer, question];
};

const startGamePrime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  runGame(createRound, description);
};

export default startGamePrime;
