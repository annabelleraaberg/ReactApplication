import { useState, useEffect } from "react";

const questions = [
  {
    id: 1,
    question: "Who is ranked number one in Formula 1?",
    option: ["Sergio Perez", "Max Verstappen", "Lando Norris"],
    correctAnswer: "Max Verstappen",
  },
  {
    id: 2,
    question: "How old is Lewis Hamilton",
    option: ["28", "34", "38"],
    correctAnswer: "38",
  },
  {
    id: 3,
    question: "Where is Carlos Sainz from?",
    option: ["Spain", "Great Britan", "Mexico"],
    correctAnswer: "Spain",
  },
  {
    id: 4,
    question: "How old is Fernando Alonso?",
    option: ["42", "45", "43"],
    correctAnswer: "42",
  },
  {
    id: 5,
    question: "Who is ranked second in Formula 1?",
    option: ["Lewis Hamilton", "Lando Norris", "Sergio Perez"],
    correctAnswer: "Sergio Perez",
  },
];

const shuffleArray = (array) => {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const QuizGame = () => {
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");

  useEffect(() => {
    const shuffledArray = shuffleArray(questions);
    setShuffledQuestions(shuffledArray);
  }, []);

  const handleAnswer = () => {
    const correctAnswer =
      shuffledQuestions[currentQuestion]?.correctAnswer.toLowerCase();
    const userResponse = userAnswer.toLowerCase();

    if (userResponse === correctAnswer) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < shuffledQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setUserAnswer("");
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setShuffledQuestions(shuffleArray(questions));
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setUserAnswer("");
  };

  return (
    <section
      className="mt-3 bg-dark text-white border rounded"
      id="quiz-section"
    >
      <div>
        <h5>Your score: {score}</h5>
      </div>
      {shuffledQuestions.length > 0 && (
        <div>
          <h5>Question {currentQuestion + 1}</h5>
          <p>{shuffledQuestions[currentQuestion].question}</p>
          <ul>
            {shuffledQuestions[currentQuestion].option.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
          <label>Your answer:</label>
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
          />
          <input
            className="btn btn-warning m-2"
            onClick={handleAnswer}
            type="button"
            value="Submit answer"
          />
        </div>
      )}

      {showScore && (
        <div>
          <h5>Quiz completed! Your final score is: {score}</h5>
          <button className="btn btn-primary" onClick={restartQuiz}>
            Restart Quiz
          </button>
        </div>
      )}
    </section>
  );
};

export default QuizGame;
