import React, { Component } from 'react';
import "./AboutUs.scss";

class AboutUs extends React.Component {
    render() {
        return (
            <div className="aboutUs" id="about">
                <div className="aboutUs__main">
                    <h2 className="aboutUs__title">ABOUT US</h2>
                    <p className="aboutUs__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
                        purus sit amet luctus venenatis, lectus magna fringilla urna,
                        porttitor rhoncus dolor purus non enim praesent elementum facilisis
                        leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim
                        diam quis enim lobortis scelerisque fermentum dui faucibus in ornare
                        quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet
                        massa vitae tortor condimentum lacinia quis vel eros donec ac odio
                    </p>
                </div>
            </div>

        );
    };
};
export default AboutUs;