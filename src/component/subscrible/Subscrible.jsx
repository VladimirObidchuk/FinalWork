import React, { Component } from 'react';
import "./Subscrible.scss";
import Form from '../formSubscrible/formSubscrible';
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
                            <Form />
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