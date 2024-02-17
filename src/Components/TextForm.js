import React, { useState } from "react";
import "../App.css";

export default function TextForm(props) {
  let [text, setText] = useState("");
  const handleOnUpperCaseClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleChangeText = (event) => {
    setText(event.target.value);
  };

  const handleInverseClick = () => {
    let newText = "";
    for (let i = text.length - 1; i >= 0; i--) {
      newText += text[i];
    }

    setText(newText);
  };

  const handleOnLowerCaseClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearText = () => {
    setText("");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="container">
      <h1 className={`color-${props.mode} my-3`}>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className={`form-control bg-${props.mode} color-${props.mode}`}
          id="exampleFormControlTextarea1"
          value={text}
          onChange={handleChangeText}
          rows="8"
        ></textarea>
        <div className="my-2">
          <button
            disabled={text.length === 0}
            className="btn btn-primary"
            onClick={handleOnUpperCaseClick}
          >
            Convert to Uppercase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1"
            onClick={handleOnLowerCaseClick}
          >
            Convert to Lowercase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1"
            onClick={handleInverseClick}
          >
            Invert the text
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1"
            onClick={handleClearText}
          >
            Clear Text
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1"
            onClick={handleExtraSpaces}
          >
            Remove Extra spaces
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1"
            onClick={handleCopyText}
          >
            Copy Text
          </button>
        </div>
      </div>
    </div>
  );
}
