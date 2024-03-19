import React from "react";
import QuizGame from "../components/games/QuizGame";

const GamePage: React.FC = () => {
  return (
    <section className="container">
      <h3 className="common-page-title">Game page</h3>
      <p>Test your knowledge of Formula 1 drivers with this quiz!</p>
      <QuizGame />
    </section>
  );
};

export default GamePage;
