import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Seed Day 1 Questions

  // Day 1 Beginner Question
  await prisma.questions.create({
    data: {
      question: "What does the following code output?",
      code: `console.log(typeof null);`,
      Answers: {
        create: [
          { answer: "object", correct: true },
          { answer: "undefined", correct: false },
          { answer: "null", correct: false },
        ],
      },
      correctAnswer: "object",
      difficulty: "beginner",
      day: 1,
    },
  });

  // Day 1 Intermediate Question
  await prisma.questions.create({
    data: {
      question: "What will be the value of 'result' after this code executes?",
      code: `const arr = [1, 2, 3, 4];
const result = arr.reduce((acc, curr) => acc * curr, 1);`,
      Answers: {
        create: [
          { answer: "10", correct: false },
          { answer: "24", correct: true },
          { answer: "undefined", correct: false },
        ],
      },
      correctAnswer: "24",
      difficulty: "intermediate",
      day: 1,
    },
  });

  // Day 1 Advanced Question
  await prisma.questions.create({
    data: {
      question: "What does the following function do?",
      code: `function* numberSequence() {
    let [prev, curr] = [0, 1];
    while (true) {
      yield curr;
      [prev, curr] = [curr, prev + curr];
    }
}`,
      Answers: {
        create: [
          { answer: "Calculates the factorial of a number.", correct: false },
          {
            answer: "Generates the Fibonacci sequence infinitely.",
            correct: true,
          },
          { answer: "Reverses a string.", correct: false },
        ],
      },
      correctAnswer: "Generates the Fibonacci sequence infinitely.",
      difficulty: "advanced",
      day: 1,
    },
  });

  // Day 2 Beginner Question
  await prisma.questions.create({
    data: {
      question: "What will be logged to the console when this code runs?",
      code: `const person = { name: "Alice", age: 30 };
const { name } = person;
console.log(name);`,
      Answers: {
        create: [
          { answer: "{ name: 'Alice', age: 30 }", correct: false },
          { answer: "'Alice'", correct: true },
          { answer: "undefined", correct: false },
        ],
      },
      correctAnswer: "'Alice'",
      difficulty: "beginner",
      day: 2,
    },
  });

  // Day 2 Intermediate Question
  await prisma.questions.create({
    data: {
      question: "What is the output of the following code?",
      code: `const numbers = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(numbers.findIndex(isLargeNumber));`,
      Answers: {
        create: [
          { answer: "3", correct: true },
          { answer: "130", correct: false },
          { answer: "-1", correct: false },
        ],
      },
      correctAnswer: "3",
      difficulty: "intermediate",
      day: 2,
    },
  });

  // Day 2 Advanced Question
  await prisma.questions.create({
    data: {
      question:
        "What is the correct way to handle potential errors in the following asynchronous code?",
      code: `fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  // Error handling needed here`,
      Answers: {
        create: [
          {
            answer: `.catch(error => console.log('Error:', error))`,
            correct: true,
          },
          {
            answer: `.finally(console.log('Request finished'))`,
            correct: false,
          },
          {
            answer: `try...catch`,
            correct: false,
          },
        ],
      },
      correctAnswer: `.catch(error => console.log('Error:', error))`,
      difficulty: "advanced",
      day: 2,
    },
  });

  // Day 3 Beginner Question
  await prisma.questions.create({
    data: {
      question: "What does the `%` operator do in JavaScript?",
      code: `
const result = 10 % 3;
console.log(result);    
    `,
      Answers: {
        create: [
          { answer: "Divides 10 by 3 and returns the result.", correct: false },
          {
            answer: "Multiplies 10 by 3 and returns the result.",
            correct: false,
          },
          {
            answer: "Divides 10 by 3 and returns the remainder.",
            correct: true,
          },
        ],
      },
      correctAnswer: "Divides 10 by 3 and returns the remainder.",
      difficulty: "beginner",
      day: 3,
    },
  });

  // Day 3 Intermediate Question
  await prisma.questions.create({
    data: {
      question: "What will the value of `sum` be after this code executes?",
      code: `
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (const num of numbers) {
  sum += num;
}
    `,
      Answers: {
        create: [
          { answer: "10", correct: false },
          { answer: "12", correct: false },
          { answer: "15", correct: true },
        ],
      },
      correctAnswer: "15",
      difficulty: "intermediate",
      day: 3,
    },
  });

  // Day 3 Advanced Question
  await prisma.questions.create({
    data: {
      question:
        "The following code uses a closure. What will be logged to the console?",
      code: `
function outerFunction(name) {
  let message = "Hello, " + name + "!";

  function innerFunction() {
    console.log(message);
  }

  return innerFunction;
}

const greetAlice = outerFunction("Alice");
greetAlice();
    `,
      Answers: {
        create: [
          { answer: "Hello, Alice!", correct: true },
          { answer: "undefined", correct: false },
          { answer: "ReferenceError: message is not defined", correct: false },
        ],
      },
      correctAnswer: "Hello, Alice!",
      difficulty: "advanced",
      day: 3,
    },
  });

  // Day 4 Beginner Question
  await prisma.questions.create({
    data: {
      question: "What does the `===` operator do in JavaScript?",
      code: `
const num1 = 5;
const num2 = "5";
console.log(num1 === num2);
    `,
      Answers: {
        create: [
          { answer: "Checks only value equality", correct: false },
          { answer: "Checks value and type equality", correct: true },
          { answer: "Checks for inequality", correct: false },
        ],
      },
      correctAnswer: "Checks value and type equality",
      difficulty: "beginner",
      day: 4,
    },
  });

  // Day 4 Intermediate Question
  await prisma.questions.create({
    data: {
      question: "What will this code snippet log to the console?",
      code: `
const arr = [1, 2, 3];
arr.push(4);
arr.unshift(0);
console.log(arr);
    `,
      Answers: {
        create: [
          { answer: "[1, 2, 3, 4]", correct: false },
          { answer: "[0, 1, 2, 3]", correct: false },
          { answer: "[0, 1, 2, 3, 4]", correct: true },
        ],
      },
      correctAnswer: "[0, 1, 2, 3, 4]",
      difficulty: "intermediate",
      day: 4,
    },
  });

  // Day 4 Advanced Question
  await prisma.questions.create({
    data: {
      question: "What will this code output?",
      code: `
const numbers = [1, 2, 3];
const double = (x) => x * 2;
const doubledNumbers = numbers.map(double);
console.log(doubledNumbers);
    `,
      Answers: {
        create: [
          { answer: "[1, 2, 3, 2, 4, 6]", correct: false },
          { answer: "[2, 4, 6]", correct: true },
          { answer: "[1, 4, 9]", correct: false },
        ],
      },
      correctAnswer: "[2, 4, 6]",
      difficulty: "advanced",
      day: 4,
    },
  });

  // Day 5 Beginner Question
  await prisma.questions.create({
    data: {
      question: "What does the `!` operator do in JavaScript?",
      code: `
const value = true;
console.log(!value);
    `,
      Answers: {
        create: [
          { answer: "Makes positive", correct: false },
          { answer: "Converts to string", correct: false },
          { answer: "Reverses boolean", correct: true },
        ],
      },
      correctAnswer: "Reverses boolean",
      difficulty: "beginner",
      day: 5,
    },
  });

  // Day 5 Intermediate Question
  await prisma.questions.create({
    data: {
      question: "What will the value of `output` be after this code runs?",
      code: `
const myFunc = (num) => num * 2;
const output = myFunc(5);
    `,
      Answers: {
        create: [
          { answer: "5", correct: false },
          { answer: "undefined", correct: false },
          { answer: "10", correct: true },
        ],
      },
      correctAnswer: "10",
      difficulty: "intermediate",
      day: 5,
    },
  });

  // Day 5 Advanced Question
  await prisma.questions.create({
    data: {
      question: "In this code, what do `async` and `await` primarily achieve?",
      code: `
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  console.log(data);
}

fetchData();  

    `,
      Answers: {
        create: [
          { answer: "Synchronous execution", correct: false },
          { answer: "Promise conversion", correct: false },
          { answer: "Simulate synchronous async", correct: true },
        ],
      },
      correctAnswer: "Simulate synchronous async",
      difficulty: "advanced",
      day: 5,
    },
  });

  // Day 6 Beginner Question
  await prisma.questions.create({
    data: {
      question: "What does `console.log(2 + '2');` output in JavaScript?",
      code: `
console.log(2 + '2');
    `,
      Answers: {
        create: [
          { answer: "4", correct: false },
          { answer: "22", correct: true },
          { answer: "NaN", correct: false },
        ],
      },
      correctAnswer: "22",
      difficulty: "beginner",
      day: 6,
    },
  });

  // Day 6 Intermediate Question
  await prisma.questions.create({
    data: {
      question: "What will be the result of calling `myFunction()`?",
      code: `
function myFunction() {
  let x = 10;
  if (true) {
    let x = 20;
  }
  return x;
}
    `,
      Answers: {
        create: [
          { answer: "10", correct: true },
          { answer: "20", correct: false },
          { answer: "undefined", correct: false },
        ],
      },
      correctAnswer: "10",
      difficulty: "intermediate",
      day: 6,
    },
  });

  // Day 6 Advanced Question
  await prisma.questions.create({
    data: {
      question: "What does the `setTimeout` function do in this example?",
      code: `
console.log('Start');
setTimeout(() => console.log('Delayed message'), 1000);
console.log('End');
    `,
      Answers: {
        create: [
          { answer: "Runs callback immediately", correct: false },
          { answer: "Stops execution after 1s", correct: false },
          { answer: "Schedules callback after 1s", correct: true },
        ],
      },
      correctAnswer: "Schedules callback after 1s",
      difficulty: "advanced",
      day: 6,
    },
  });

  // Day 7 Beginner Question
  await prisma.questions.create({
    data: {
      question: "What does the following code output?",
      code: `
const fruits = ["apple", "banana", "cherry"];
console.log(fruits.length);
    `,
      Answers: {
        create: [
          { answer: "3", correct: true },
          { answer: "undefined", correct: false },
          { answer: "'apple,banana,cherry'", correct: false },
        ],
      },
      correctAnswer: "3",
      difficulty: "beginner",
      day: 7,
    },
  });

  // Day 7 Intermediate Question
  await prisma.questions.create({
    data: {
      question: "What does this code snippet do?",
      code: `
function sum(x, y = 0) { // Default parameter value for y
  return x + y;
}

console.log(sum(5)); // Output: 5
console.log(sum(5, 10)); // Output: 15
    `,
      Answers: {
        create: [
          { answer: "Requires both arguments", correct: false },
          { answer: "Defaults second to 0", correct: true },
          { answer: "Always returns 5", correct: false },
        ],
      },
      correctAnswer: "Defaults second to 0",
      difficulty: "intermediate",
      day: 7,
    },
  });

  // Day 7 Advanced Question
  await prisma.questions.create({
    data: {
      question: "What will this code log to the console?",
      code: `
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);
    `,
      Answers: {
        create: [
          { answer: "{ a: 1, b: 2, c: 4 }", correct: false },
          { answer: "{ a: 1, b: 3, c: 4 }", correct: true },
          { answer: "{ b: 2, c: 4 }", correct: false },
        ],
      },
      correctAnswer: "{ a: 1, b: 3, c: 4 }",
      difficulty: "advanced",
      day: 7,
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
