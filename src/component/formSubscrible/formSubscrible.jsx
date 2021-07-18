// import React, { Component } from 'react';
import { useState } from "react";
import Modal from "../modalWin/ModalWin";
import "./formSubscrible.scss";

function Form() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (error || !text) {
            return;
        }
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 500)
    }

    const [text, setText] = useState("");

    const handleChange = (e) => {
        const value = e.target.value
        setText(value);
        if (!value) {
            setError('This field is required')
        } else {
            setError(null)
        }
    }

    return (
        <form action="#" id="subscrible__form" className="subscrible__form" method="GET" onSubmit={handleSubmit}>
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
            {error && <span className="error__email">{error}</span>}
            {loading && <Modal />}
        </form>

    );
};
export default Form;



