import React from "react";

const FinishScreen = ({ points, maxPoints, highscore, dispatch }) => {
  const prcentage = (points / maxPoints) * 100;
  let emoji;
  if (prcentage === 100) emoji = "🥇";
  if (prcentage >= 80 && prcentage < 100) emoji = "🎉";
  if (prcentage >= 50 && prcentage < 80) emoji = "😊";
  if (prcentage >= 0 && prcentage < 50) emoji = "🤔";
  if (prcentage === 0) emoji = "🤦‍♂️";
  return (
    <>
      <p className="result">
        <span>{emoji}</span>you scorde <strong>{points}</strong> out of{" "}
        {maxPoints} ({Math.ceil(prcentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
};

export default FinishScreen;
