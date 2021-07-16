import "./Products.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

const Product = () => {
    const images = ['BG_card10.png', 'BG_card11.png', 'BG_card12.png', 'BG_card13.png', 'BG_card14.png', 'BG_card15.png', 'BG_card16.png', 'BG_card17.png', 'BG_card18.png'];

    return (<div className="sale__products" id="sale__products">
        <h3 className="sale__title">TOP SALE</h3>
        <div className="sales__cards">
            <Swiper spaceBetween={50} slidesPerView={4} loop>
                {images.map((image) => (
                    <SwiperSlide key={image}>
                        <div className="sale__main " style={{ background: `linear-gradient(180deg, rgba(31, 39, 27, 0) 0%, rgba(31, 39, 27, 0.87) 100%), url(${process.env.PUBLIC_URL + '/img/' + image}) no-repeat` }}>
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
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </div>);
};
export default Product;
