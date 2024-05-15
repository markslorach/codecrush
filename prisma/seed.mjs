import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {

  // Seed Day 1 Questions

  // Beginner Question
  await prisma.questions.create({
    data: {
      question: "What color do you get when you mix blue and yellow?",
      Answers: {
        create: [
          { answer: "Red", correct: false },
          { answer: "Green", correct: true },
          { answer: "Purple", correct: false },
        ],
      },
      correctAnswer: "Green",
      codeImage: null,
      difficulty: "beginner",
      day: 1,
    },
  });

  // Intermediate Question
  await prisma.questions.create({
    data: {
      question: "In JavaScript, what is the result of 10 + '5' ?",
      Answers: {
        create: [
          { answer: "15", correct: false },
          { answer: "105", correct: true },
          { answer: "NaN", correct: false },
        ],
      },
      correctAnswer: "105",
      codeImage: null,
      difficulty: "intermediate",
      day: 1,
    },
  });

  // Advanced Question
  await prisma.questions.create({
    data: {
      question:
        "Which design pattern is best suited for implementing an undo/redo feature?",
      Answers: {
        create: [
          { answer: "Singleton", correct: false },
          { answer: "Observer", correct: false },
          { answer: "Command", correct: true },
        ],
      },
      correctAnswer: "Command",
      codeImage: null,
      difficulty: "advanced",
      day: 1,
    },
  });

  console.log("Day 1 questions seeded successfully!");
}

main()
.then(async () => {
  await prisma.$disconnect()
})
.catch(async (e) => {
  console.error(e)
  await prisma.$disconnect()
  process.exit(1)
})
