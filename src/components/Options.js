import React from "react";

const Options = ({ questions, dispatch, answer }) => {
  const hasAnswerd = answer !== null;
  return (
    <>
      <div className="options">
        {questions.options.map((op, index) => (
          <button
            className={`btn btn-option ${index === answer ? "answer" : ""} ${
              hasAnswerd
                ? index === questions.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            key={op}
            disabled={hasAnswerd}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
          >
            {op}
          </button>
        ))}
      </div>
    </>
  );
};

export default Options;
