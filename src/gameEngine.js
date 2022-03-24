import readlineSync from 'readline-sync';
import { getNameAndSayHi } from './index.js';

// eslint-disable-next-line consistent-return
const runGame = (createQuestion, discription) => {
  const numberOfRounds = 3;

  const userName = getNameAndSayHi(discription);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const correctAhswerAndQuestion = createQuestion();
    const correctAnswer = correctAhswerAndQuestion[0];
    const question = correctAhswerAndQuestion[1];

    console.log(question);
    const userAnswer = readlineSync.question('Your answer:');

    // eslint-disable-next-line eqeqeq
    if (correctAnswer != userAnswer) {
      return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}". \n let's try again, ${userName}!`);
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
export default runGame;
