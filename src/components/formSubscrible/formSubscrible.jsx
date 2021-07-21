// import React, { Component } from 'react';
import { useState } from "react";
import ModalText from "../modalText/ModalText";
import Modal from "../modalWin/ModalWin";
import "./formSubscrible.scss";

function Form() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(false);
  const [error, setError] = useState(null);

  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      setError("This field is required");
      return;
    } else {
      setError(null);
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    setTimeout(() => {
      setMessage(true);
    }, 2000);
    setTimeout(() => {
      setMessage(false);
    }, 4000);
  };

  const handleChange = (e) => {
    setText(e.target.value);
    setError(null);
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
