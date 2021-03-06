import React from "react";
import "./css/Chip.css";
import Rock from "./icons/Rock";
import Paper from "./icons/Paper";
import Scissors from "./icons/Scissors";
import Lizard from "./icons/Lizard";
import Spock from "./icons/Spock";
import PropTypes from "prop-types";

const Chip = ({ type, onClick, winner, showResults, show}) => {
  return (
    <button
      aria-label={type}
      tabIndex={show === false ? "0" : "-1"}
      className="chip"
      style={{
        background:
          type === "paper"
            ? "rgb(38, 67, 196)"
            : type === "rock"
              ? "rgb(158, 15, 49)"
              : type === "scissors"
                ? "rgb(200, 108, 20)"
                : type === "lizard"
                  ? "rgb(95, 55, 168)"
                  : "rgb(45, 141, 171)",
        boxShadow:
          winner &&
          showResults &&
          "0 0 0 80px rgba(255,255,255,.04), 0 0 0 50px rgba(255,255,255,.03), 0 0 0 25px rgba(255,255,255,.01)",
      }}
      onClick={() => {
        onClick && onClick(type);
      }}
    >
      <div className="chip__shadow">
        <div className="chip__content">
          <div className="chip__content__shadow">
            {type === "rock" ? (
              <Rock />
            ) : type === "paper" ? (
              <Paper />
            ) : type === "scissors" ? (
              <Scissors />
            ) : type === "lizard" ? (
              <Lizard />
            ) : (
              <Spock />
            )}
          </div>
        </div>
      </div>
    </button>
  );
};

Chip.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  winner: PropTypes.bool,
  showResults: PropTypes.bool,
  show: PropTypes.bool,
};

export default Chip;
