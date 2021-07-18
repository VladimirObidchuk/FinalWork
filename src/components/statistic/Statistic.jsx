import React, { Component } from 'react';
import "./Statistic.scss";

class Statistic extends React.Component {
    render() {
        return (
            <div className="statistic" id="statistic">
                <div className="statistic__main">
                    <div className="statistic__data">
                        <div className="statistic__customer customer__style">
                            <div className="customer__numbers">2373</div>
                            <div className="customer__title text__style">Satisfied customers</div>
                            <div className="customer__text text__style">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Distinctio, voluptate!
                            </div>
                        </div>
                        <div className="statistic__servises customer__style">
                            <div className="customer__numbers">35</div>
                            <div className="customer__title text__style">Various servises</div>
                            <div className="customer__text text__style">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Distinctio, voluptate!
                            </div>
                        </div>
                        <div className="statistic__reviews customer__style">
                            <div className="customer__numbers">1425</div>
                            <div className="customer__title text__style">Many reviews</div>
                            <div className="customer__text text__style">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Distinctio, voluptate!
                            </div>
                        </div>
                        <div className="statistic__orders customer__style">
                            <div className="customer__numbers">740</div>
                            <div className="customer__title text__style">Orders per year</div>
                            <div className="customer__text text__style">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Distinctio, voluptate!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};
export default Statistic;