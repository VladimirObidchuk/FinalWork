import "./SaleProducts.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import CardConstructor from "../card/Card";

const SaleProducts = () => {
    const images = ['BG_card1.png', 'BG_card2.png', 'BG_card3.png', 'BG_card4.png', 'BG_card5.png', 'BG_card6.png', 'BG_card7.png', 'BG_card8.png', 'BG_card9.png'];

    return (<div className="sale__products" id="sale__products">
        <h3 className="sale__title">TOP SALE</h3>
        <div className="sales__cards">
            <CardConstructor />
        </div>
    </div>);
};
export default SaleProducts;
