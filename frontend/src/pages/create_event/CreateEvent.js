import React, { useState } from 'react';
import axios from 'axios';

import './createEvent.css'
import { Link, redirect, useNavigate } from 'react-router-dom';
import Welcome from '../welcome';

function CreateEvent() {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventImage, setEventImage] = useState(null);
  const [eventCreated, setEventCreated] = useState(false);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setEventImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', eventName);
    formData.append('date', eventDate);
    formData.append('description', eventDescription);
    formData.append('image', eventImage);

    try {
      const response = await axios.post('http://localhost:8000/api/create_event/', formData,{
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        console.log('Event created successfully');
        setEventCreated(true);
        navigate(-1);
      } else {
        console.error('Failed to create event');
      }
    } catch (error) {
      console.error('Error during API request', error);
    }
  };

  
  return (
    <div className='create-event-form'>
      <h2 className='form-title'>Create Event</h2>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label className='form-label' htmlFor='eventName'>
            Event Name
          </label>
          <input
            type='text'
            id='eventName'
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            className='form-input'
            required
          />
        </div>
        <div className='form-group'>
          <label className='form-label' htmlFor='eventDate'>
            Event Date
          </label>
          <input
            type='date'
            id='eventDate'
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            className='form-input'
            required
          />
        </div>
        <div className='form-group'>
          <label className='form-label' htmlFor='eventDescription'>
            Event Description
          </label>
          <textarea
            id='eventDescription'
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
            className='form-textarea'
            required
          />
        </div>
        <div className='form-group'>
          <label className='form-label' htmlFor='eventImage'>
            Event Image
          </label>
          <input
            type='file'
            id='eventImage'
            accept='image/*'
            onChange={handleImageChange}
            className='form-input'
            required
          />
        </div>
        <button type='submit' className='form-button'>
          Create Event
        </button>
      </form>
    </div>
  );

}

export default CreateEvent;
