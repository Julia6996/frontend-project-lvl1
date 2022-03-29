import readlineSync from 'readline-sync';

export default function sayHi() {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
}

export const getNameAndSayHi = (description) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  return userName;
};
