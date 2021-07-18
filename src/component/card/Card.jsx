import Button from "../button/Button";
import "./Card.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

function CardConstructor() {
    const images = ['BG_card1.png', 'BG_card2.png', 'BG_card3.png', 'BG_card4.png', 'BG_card5.png', 'BG_card6.png', 'BG_card7.png', 'BG_card8.png', 'BG_card9.png', 'BG_card10.png', 'BG_card11.png', 'BG_card12.png', 'BG_card13.png', 'BG_card14.png', 'BG_card15.png', 'BG_card16.png', 'BG_card17.png', 'BG_card18.png'];

    return (<Swiper spaceBetween={50}
        slidesPerView={4} loop
        breakpoints={{
            437: {
                width: 437,
                slidesPerView: 1,
            },
            575.98: {
                width: 575.98,
                slidesPerView: 1,
            },
            767.98: {
                width: 767.98,
                slidesPerView: 2,
            },
            991.9: {
                width: 991.9,
                slidesPerView: 3,
            },
            1199.98: {
                width: 1199.98,
                slidesPerView: 4,
            },
            1399.98: {
                width: 1399.98,
                slidesPerView: 4,
            }
        }}>
        {images.map((image) => (
            <SwiperSlide key={image}>
                <div className="sale__main " style={{ background: `linear-gradient(180deg, rgba(31, 39, 27, 0) 0%, rgba(31, 39, 27, 0.87) 100%), url(${process.env.PUBLIC_URL + '/img/' + image}) center no-repeat` }}>
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
                        <Button />
                    </div>
                </div>
            </SwiperSlide>
        ))}
    </Swiper>
    );
};
export default CardConstructor;