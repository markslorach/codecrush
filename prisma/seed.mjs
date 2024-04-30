import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

  // Seed Users
  const users = [
    {
      name: "Sarah Williams",
      username: "sarahw",
      uid: "unique-id-1",
      score: 60,
      streak: 15,
    },
    {
      name: "John Miller",
      username: "jmiller19",
      uid: "unique-id-2",
      score: 20,
      streak: 3,
    },
    {
      name: "Emily Davis",
      username: "codingemily",
      uid: "unique-id-3",
      score: 40,
      streak: 4,
    },
    {
      name: "Michael Johnson",
      username: "mjohn12",
      uid: "unique-id-4",
      score: 10,
      streak: 1,
    },
  ];

  await prisma.user.createMany({
    data: users,
    skipDuplicates: true,
  });

  // Seed Day 1 Questions

  // Beginner Question
  await prisma.questions.create({
    data: {
      question: "What color do you get when you mix blue and yellow?",
      Answers: {
        create: [
          { answer: "Red" },
          { answer: "Green" },
          { answer: "Purple" },
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
    data:
     {
      question: "In JavaScript, what is the result of 10 + '5' ?",
      Answers: {
        create: [
          { answer: "15" },
          { answer: "105" }, 
          { answer: "NaN" }, 
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
      question: "Which design pattern is best suited for implementing an undo/redo feature?",
      Answers: {
        create: [
          { answer: "Singleton" },
          { answer: "Observer" },
          { answer: "Command" },
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
