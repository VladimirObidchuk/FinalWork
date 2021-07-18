import "./Products.scss";

import Button from "../button/Button";
import CardConstructor from "../card/Card";

const Product = () => {
    const images = ['BG_card10.png', 'BG_card11.png', 'BG_card12.png', 'BG_card13.png', 'BG_card14.png', 'BG_card15.png', 'BG_card16.png', 'BG_card17.png', 'BG_card18.png'];

    return (<div className="main__products" id="main__products">
        <h3 className="product__title">OUR PRODUCTS</h3>
        <div className="products__cards">
            <CardConstructor />
        </div>
    </div>);
};
export default Product;
