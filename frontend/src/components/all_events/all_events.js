import React from 'react';
import { Link } from 'react-router-dom';


// components
import './all_events.css';

function AllEvents({ product }) {
  return (
    <div className='event-card'>
      <div className='row'>
        <div className='col'>
          <Link to={'/'}>
            <img src={product.image} className='event-image' alt={product.name} />
          </Link>
          <Link to={'/'}>
            <h4 className='event-title'>
              <strong>{product.name}</strong>
            </h4>
          </Link>
        </div>
        <div className='col'>
          <div className='event-info'>
            <h3 className='event-price'>${product.price}</h3>
            <p className='event-description'>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllEvents;
