import readlineSync from 'readline-sync';

const numberOfRounds = 3;

// eslint-disable-next-line consistent-return
const runGame = (createRound, description) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const [correctAnswer, question] = createRound();
    console.log(question);
    const userAnswer = readlineSync.question('Your answer:');
    if (correctAnswer !== userAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}". \n Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
export default runGame;
