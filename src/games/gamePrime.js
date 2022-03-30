import getRandomInt from '../getRandomInt.js';
import runGame from '../gameEngine.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

const createRound = () => {
  const randomNum = getRandomInt(1, 50);
  const trueAnswer = isPrime(randomNum) ? 'yes' : 'no';
  const question = `Question: ${randomNum}`;
  return [trueAnswer, question];
};

const startGamePrime = () => {
  runGame(createRound, description);
};

export default startGamePrime;
