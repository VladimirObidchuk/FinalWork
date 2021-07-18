import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import ProductCard from "../ProductCard/ProductCard";

function ProductSlider({ images }) {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={4}
      loop
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
        },
      }}
    >
      {images.map((image) => (
        <SwiperSlide key={image}>
          <ProductCard image={image} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
export default ProductSlider;
