import React from 'react';
import product from './product';

const Description = () => {
    return (
        <div className="description">
            <p>{product.description}</p>
        </div>
    );
}

export default Description;