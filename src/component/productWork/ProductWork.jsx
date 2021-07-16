import React, { Component } from 'react';
import "./PoductsWork.scss";

class PoductsWork extends React.Component {
    render() {
        return (
            <div className="products__work" id="products__work">
                <div className="products__workMAin">
                    <h3 className="products__title">WE ARE WORKING SINCE 2011</h3>
                    <div className="products__content">
                        <div className="products__item item__1"></div>
                        <div className="products__item item__2"></div>
                        <div className="products__item item__3"></div>
                        <div className="products__item item__4"></div>
                        <div className="products__item item__5"></div>
                    </div>
                </div>
            </div>
        );
    };
};
export default PoductsWork;