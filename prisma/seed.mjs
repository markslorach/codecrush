import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Seed Day 1 Questions

  // Beginner Question
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

  // Intermediate Question
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

  // Advanced Question
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

  console.log("Day 1 questions seeded successfully!");
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
