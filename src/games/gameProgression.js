import getRandomInt from '../getRandomInt.js';
import runGame from '../gameEngine.js';

const createProgression = (progressionLength, randomNum) => {
  let firstElem = randomNum;
  const randomStep = getRandomInt(2, 5);
  const arrProgression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    arrProgression.push(firstElem += randomStep);
  }
  return arrProgression;
};

const createRound = () => {
  const randomNum = getRandomInt(0, 100);
  const randomStep = getRandomInt(0, 9);
  const progressionLength = 10;

  const arrProgression = createProgression(progressionLength, randomNum);
  const trueAnswer = arrProgression[randomStep];
  arrProgression[randomStep] = '..';
  const question = `Question: ${arrProgression.join(' ')}`;

  return [String(trueAnswer), question];
};

const startGameProgression = () => {
  const description = 'What number is missing in the progression?';
  runGame(createRound, description);
};

export default startGameProgression;
