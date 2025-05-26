import React from 'react';
import product from './product';

const Image = () => {
    return (
        <div className="image">
            <img 
                src={product.image} 
                alt={product.name}
                className="img-fluid"  // Ajout de la classe Bootstrap pour la responsivité
                loading="lazy"         // Optimisation du chargement
            />
        </div>
    );
}

export default Image;