import getRandomInt from '../getRandomInt.js';
import runGame from '../gameEngine.js';

const description = 'What number is missing in the progression?';

const createProgression = (progressionLength, randomStep, randomNum) => {
  let firstElem = randomNum;
  const arrProgression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    arrProgression.push(firstElem += randomStep);
  }
  return arrProgression;
};

const createRound = () => {
  const randomNum = getRandomInt(0, 100);
  const randomStep = getRandomInt(2, 5);
  const progressionLength = 10;

  const arrProgression = createProgression(progressionLength, randomStep, randomNum);
  const trueAnswer = String(arrProgression[randomStep]);
  arrProgression[randomStep] = '..';
  const question = `Question: ${arrProgression.join(' ')}`;

  return [trueAnswer, question];
};

const startGameProgression = () => {
  runGame(createRound, description);
};

export default startGameProgression;
