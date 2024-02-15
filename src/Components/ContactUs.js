import React from "react";
import "../App.css";

export default function ContactUs(props) {
  return (
    <div className="container mt-3">
      <div className="mb-3">
        <label
          htmlFor="exampleFormControlInput1"
          className={`form-label color-${props.mode}`}
        >
          Email address
        </label>
        <input
          type="email"
          className={`form-control bg-${props.mode} color-${props.mode}`}
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label
          htmlFor="exampleFormControlTextarea1"
          className={`form-label color-${props.mode}`}
        >
          Example textarea
        </label>
        <textarea
          className={`form-control bg-${props.mode} color-${props.mode}`}
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
    </div>
  );
}
