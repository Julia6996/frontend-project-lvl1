import { getRandomInt } from '../index.js';
import runGame from '../gameEngine.js';

const createProgression = (progressionLength, randomNum) => {
  let firstElem = randomNum;
  const arrProgression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    arrProgression.push(firstElem += 2);
  }
  return arrProgression;
};

const createRound = () => {
  const randomNum = getRandomInt(0, 100);
  const randomStep = getRandomInt(0, 10);
  const progressionLength = 10;

  const arrProgression = createProgression(progressionLength, randomNum);
  const trueAnswer = arrProgression[randomStep];
  arrProgression[randomStep] = '..';
  const question = `Question: ${arrProgression.join(' ')}`;

  return [trueAnswer, question];
};

const startGameProgression = () => {
  const discription = 'What number is missing in the progression?';
  runGame(createRound, discription);
};

export default startGameProgression;
