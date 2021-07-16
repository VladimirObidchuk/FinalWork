import React, { Component } from 'react';
import "./Subscrible.scss";

class Subscrible extends React.Component {
    render() {
        return (
            <div className="subscrible" id="subscrible">
                <div className="subscrible__main">
                    <div className="subscrible__left">
                        <div className="subscrible__about">
                            <h3 className="subscrible__title">SUBSCRIBE</h3>
                            <p className="subscrible__text">
                                Subscribe us and you won't miss the new arrivals, as well as
                                discounts and sales.
                            </p>
                            <form
                                action="#"
                                id="subscrible__form"
                                className="subscrible__form"
                                method="GET"
                            >
                                <input
                                    className="subscrible__input"
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Your Email"
                                />
                                <input type="submit" value="Submit" className="subscrible__submit" />
                            </form>
                            <span className="error__email">This field is required</span>
                        </div>
                    </div>
                    <div className="subscrible__right">
                        <div className="subscrible__image"></div>
                    </div>
                </div>
            </div>

        );
    };
};
export default Subscrible;