import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const newQuestion = await prisma.question.create({
    data: {
      question: 'What is the capital of France?',
      answers: {
        create: [
          { answer: 'Berlin'},
          { answer: 'Rome'},
          { answer: 'Paris' },
        ]
      },
      correctAnswer: 'Paris',
      codeImage: null,
      difficulty: 'beginner',
      day: 1 
    }
  });

  console.log('Question created:', newQuestion);
}

main()
