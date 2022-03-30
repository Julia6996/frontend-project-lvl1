/* eslint-disable eqeqeq */
import readlineSync from 'readline-sync';
import { getNameAndSayHi } from './cli.js';

// eslint-disable-next-line consistent-return
const runGame = (createRound, description) => {
  const numberOfRounds = 3;

  const userName = getNameAndSayHi(description);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const [correctAnswer, question] = createRound();
    console.log(question);
    const userAnswer = readlineSync.question('Your answer:');

    // eslint-disable-next-line eqeqeq
    if (correctAnswer !== userAnswer) {
      return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}". \n Let's try again, ${userName}!`);
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
export default runGame;
