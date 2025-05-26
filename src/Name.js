import React from 'react';
import product from './product';

const Name = () => {
    return (
        <div className="name">
            <h2>{product.name}</h2>
        </div>
    );
}

export default Name;