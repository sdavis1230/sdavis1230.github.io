import React from 'react';
let count = 1;

function AnswerOption(props) {

 if (count === 1) {
    count++;
    return (
      <div>
        Choose an answer:
        <li className="answerOption">
          <input
            type="radio"
            className="radioCustomButton"
            name="radioGroup"
            checked={props.answerType === props.answer}
            id={props.answerType}
            value={props.answerType}
            disabled={props.answer}
            onChange={props.onAnswerSelected}
          />
          <label className="radioCustomLabel" htmlFor={props.answerType}>
            {props.answerContent}
          </label>
        </li>
        </div>
      );
  } else {
  count--
  return (
  <div>
    <li className="answerOption">
      <input
        type="radio"
        className="radioCustomButton"
        name="radioGroup"
        checked={props.answerType === props.answer}
        id={props.answerType}
        value={props.answerType}
        disabled={props.answer}
        onChange={props.onAnswerSelected}
      />
      <label className="radioCustomLabel" htmlFor={props.answerType}>
        {props.answerContent}
      </label>
    </li>
    </div>
  );
}
}

AnswerOption.propTypes = {
  answerType: React.PropTypes.string.isRequired,
  answerContent: React.PropTypes.string.isRequired,
  answer: React.PropTypes.string.isRequired,
  onAnswerSelected: React.PropTypes.func.isRequired
};

export default AnswerOption;
