import { getRandomInt } from '../index.js';
import runGame from '../partyChec.js';

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

  return [trueAnswer, question];
};

const startGameCalc = () => {
  const discription = 'What is the result of the expression?';
  runGame(createRound, discription);
};

export default startGameCalc;