import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, img, seller, price, ratings } = props.product;
    const { handelAddToCart } = props;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <h6>Price: ${price}</h6>
                <p><small>Seller : {seller}</small></p>
                <p><small>Ratings : {ratings} starts</small></p>
            </div>
            <button onClick={() => handelAddToCart(props.product)} className='btn-cart'>
                <p>Add to Cart</p>
            </button>

        </div>
    );
};

export default Product;