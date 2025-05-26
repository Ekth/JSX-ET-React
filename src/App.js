import React from 'react';                              // React en premier
import 'bootstrap/dist/css/bootstrap.min.css';         // CSS externes ensuite
import './index.css';                                  // CSS locaux après
import Name from './Name';                             // pour les imports React
import Description from './Description';
import Price from './Price';
import Image from './Image';

const prenom = "walden";

const App = () => {
  return (
    <div className="container">
      <div className="card mt-4">
        <div className="card-header">
          <h1>Carte Produit</h1>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-12 col-md-6">
              {prenom && <Image />}
            </div>
            <div className="col-12 col-md-6">
              <Name />
              <Description />
              <Price />
            </div>
          </div>
        </div>
      </div>
      <div className="welcome-message mt-4 text-center">
        <h2>{prenom ? `Bonjour, ${prenom} !` : "Bonjour, là !"}</h2>
      </div>
    </div>
  );
}

export default App;