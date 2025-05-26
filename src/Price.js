import React from 'react';
import product from './product';

const Price = () => {
    return (
        <div className="price">
            <p>{product.price.toFixed(2)} €</p>
        </div>
    );
}

export default Price;