import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

// components
import './all_events.css';

function AllEvents({ event, onDelete }) {
  const imageUrl = 'http://localhost:8000'+ event.image_url;

  const handleDelete = () => {
    axios
      .delete(`http://localhost:8000/api/delete_event/${event.id}/`)
      .then(() => {
        // Update the UI to remove the deleted event
        onDelete(event.id);
      })
      .catch(error => {
        console.error('Error deleting event:', error);
      });
  };

  return (
    <div className='event-card'>
      <div className='row'>
        <div className='col'>
          <Link to={'/'}>
            <img src={imageUrl} className='event-image' alt={event.image_url} />
          </Link>
          <Link to={'/'}>
            <h4 className='event-title'>
              <strong>{event.name}</strong>
            </h4>
          </Link>
          <button onClick={handleDelete} className='btn btn-danger'>
            Delete
          </button>
          <button  className='btn btn-primary'  style={{ float: 'right' }}>
            <FontAwesomeIcon icon={faHeart} color='red' />
          </button>
        </div>
        <div className='col'>
          <div className='event-info'>
            <h3 className='event-price'>${event.date}</h3>
            <p className='event-description'>{event.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllEvents;
