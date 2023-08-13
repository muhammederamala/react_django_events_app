import React, { Component, useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios';

// Components
import products from '../products'
import AllEvents from '../components/all_events/all_events'
import Navbar from '../components/navbar/Navbar'

function Welcome() {
  const [events , setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/list_all_events')
    .then(response => {
      setEvents(response.data.events);
    })
    .catch(error => {
      console.error('Error in fetching events:',error);
    });
  },[]);

  const handleDeleteEvent = deletedEventId => {
    setEvents(prevEvents => prevEvents.filter(event => event.id !== deletedEventId));
  };


  return (
    <div>
      <Navbar />
      <Row>
                {events.length > 0 ? (
                    events.map(event => (
                        <Col key={event.id}>
                            <AllEvents event={event} />
                        </Col>
                    ))
                ) : (
                    <p>No events available.</p>
                )}
            </Row>
    </div>
  )
}

export default Welcome
