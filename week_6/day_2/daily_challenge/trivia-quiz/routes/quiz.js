const express = require('express');
const router = express.Router();

const triviaQuestions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  { question: "What is the largest mammal in the world?", answer: "Blue whale" }
];

let currentQuestionIndex = 0;
let score = 0;

router.get('/', (req, res) => {
  if (currentQuestionIndex >= triviaQuestions.length) {
    return res.json({ message: "Quiz finished! Visit /quiz/score to see your result." });
  }

  res.json({
    questionNumber: currentQuestionIndex + 1,
    question: triviaQuestions[currentQuestionIndex].question
  });
});

router.post('/', (req, res) => {
  const userAnswer = req.body.answer;

  if (!userAnswer) {
    return res.status(400).json({ error: "Please provide an answer." });
  }

  const correctAnswer = triviaQuestions[currentQuestionIndex].answer;

  let feedback;
  if (userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
    score++;
    feedback = "Correct!";
  } else {
    feedback = `Wrong! The correct answer was: ${correctAnswer}`;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex >= triviaQuestions.length) {
    return res.json({
      feedback,
      message: "Quiz completed! Visit /quiz/score to see your final score."
    });
  }

  res.json({
    feedback,
    nextQuestion: triviaQuestions[currentQuestionIndex].question
  });
});

router.get('/score', (req, res) => {
  res.json({
    totalQuestions: triviaQuestions.length,
    score: score,
    message: `You scored ${score} out of ${triviaQuestions.length}!`
  });

  score = 0;
  currentQuestionIndex = 0;
});

module.exports = router;
