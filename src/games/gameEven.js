import { getRandomInt } from '../index.js';
import runGame from '../gameEngine.js';

const evenNumber = (number) => number % 2 === 0;

const getCorrectAnswer = (num) => (evenNumber(num) ? 'yes' : 'no');

const createRound = () => {
  const randomNum = getRandomInt(0, 100);
  const trueAnswer = getCorrectAnswer(randomNum);
  const question = `Question: ${randomNum}`;

  return [trueAnswer, question];
};

const startGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';

  runGame(createRound, description);
};

export default startGame;
