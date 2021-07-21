// import React, { Component } from 'react';
import { useState } from "react";
import ModalText from "../modalText/ModalText";
import Modal from "../modalWin/ModalWin";
import "./formSubscrible.scss";

function Form() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (error || !text) {
      return setError(true);
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    setTimeout(() => {
      setMessage(true);
    }, 3000);
    setTimeout(() => {
      setMessage(false);
    }, 8000);
  };

  const [text, setText] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
    if (!value) {
      setError("This field is required");
    } else {
      setError(null);
    }
  };

  return (
    <form
      action="#"
      id="subscrible__form"
      className="subscrible__form"
      method="GET"
      onSubmit={handleSubmit}
    >
      <div className="subscrible__block">
        <input
          className="subscrible__input"
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
          onChange={handleChange}
          value={text}
        />
        <input type="submit" value="Submit" className="subscrible__submit" />
      </div>
      {error && <span className="error__email">{error}</span>}
      {loading && <Modal />}
      {message && (
        <ModalText value=" Thank you for your letter! We will get back to you soon." />
      )}
    </form>
  );
}
export default Form;
