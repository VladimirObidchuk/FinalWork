import React, { Component } from 'react';
import "./MoreInfo.scss";

class MoreInfo extends React.Component {
    render() {
        return (
            <div className="moreInfo" id="moreInfo">
                <div className="moreInfo__main">
                    <h3 className="moreInfo_title">MORE INFO</h3>
                    <div className="moreInfo__about">
                        <div className="moreInfo__textLeft">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
                            purus sit amet luctus venenatis, lectus magna fringilla urna,
                            porttitor rhoncus dolor purus non enim praesent elementum facilisis
                            leo, vel fringilla est ullamcorper eget nulla facilisi etiam
                            dignissim diam quis enim lobortis scelerisque fermentum dui faucibus
                            in ornare quam viverra orci sagittis eu volutpat odio facilisis
                            mauris sit amet massa vitae tortor condimentum lacinia quis vel eros
                            donec ac odio
                        </div>
                        <div className="moreInfo__textRight">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
                            purus sit amet luctus venenatis, lectus magna fringilla urna,
                            porttitor rhoncus dolor purus non enim praesent elementum facilisis
                            leo, vel fringilla est ullamcorper eget nulla facilisi etiam
                            dignissim diam quis enim lobortis scelerisque fermentum dui faucibus
                            in ornare quam viverra orci sagittis eu volutpat odio facilisis
                            mauris sit amet massa vitae tortor condimentum lacinia quis vel eros
                            donec ac odio
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};
export default MoreInfo;