import getRandomInt from '../getRandomInt.js';
import runGame from '../gameEngine.js';

const description = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const calculation = (x, operator, y) => {
  switch (operator) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      return new Error('Unsupported operator');
  }
};

const createRound = () => {
  const randomOperations = operations[getRandomInt(0, operations.length - 1)];
  const firstNum = getRandomInt(0, 10);
  const secondNum = getRandomInt(0, 10);
  const question = `Question: ${firstNum} ${randomOperations} ${secondNum}`;
  const trueAnswer = String(calculation(firstNum, randomOperations, secondNum));

  return [trueAnswer, question];
};

const startGameCalc = () => runGame(createRound, description);

export default startGameCalc;
