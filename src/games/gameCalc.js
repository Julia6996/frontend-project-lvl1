import getRandomInt from '../getRandomInt.js';
import runGame from '../gameEngine.js';

const getTrueAnswer = (x, operator, y) => {
  switch (operator) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      return false;
  }
};

const createRound = () => {
  const operations = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * 3);
  const randomOperations = operations[randomIndex];
  const firstNum = getRandomInt(0, 10);
  const secondNum = getRandomInt(0, 10);
  const question = `Question: ${firstNum} ${randomOperations} ${secondNum}`;
  const trueAnswer = getTrueAnswer(firstNum, randomOperations, secondNum);

  return [String(trueAnswer), question];
};

const startGameCalc = () => {
  const description = 'What is the result of the expression?';
  runGame(createRound, description);
};

export default startGameCalc;
