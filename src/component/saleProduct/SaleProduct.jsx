import React, { Component } from 'react';
import "./SaleProducts.scss";
import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

class SaleProducts extends Component {

    // shouldComponentUpdate() {
    //     // TODO: add proper implementation that compares objects
    //     return false;
    // }
    render() {

        //Slide Items
        const sliderItem = ['BG_card1.png', 'BG_card2.png', 'BG_card3.png', 'BG_card4.png', 'BG_card5.png', 'BG_card6.png'];

        const settings = {
            autoplay: false,
            dots: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            speed: 1000,

        };


        return (
            <div className="sale__products" id="sale__products">
                <h3 className="sale__title">TOP SALE</h3>
                <div className="sales__cards">
                    <Slider {...settings}>
                        {sliderItem.map((item, index) => {
                            return (
                                <div key={item} className="sale__card">
                                    <img src={process.env.PUBLIC_URL + '/img/' + item} alt="" />
                                    <div className="sale__main">
                                        <div className="card__header">
                                            <h3 className="card__title">RGD RATING CARRY</h3>
                                            <p className="card__text">
                                                <span className="card__cycle"></span> Best of the best
                                            </p>
                                            <p className="card__text">
                                                <span className="card__cycle"></span>Best of the best
                                            </p>
                                        </div>
                                        <div className="card__footer">
                                            <div className="card__footerText">
                                                <p className="card__subText">cost</p>
                                                <p className="card__subTitle">$39</p>
                                            </div>
                                            <button type="submit" className="card__buy">buy now</button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                        }
                    </Slider>
                </div>
            </div>
        );
    }
}

export default SaleProducts;
