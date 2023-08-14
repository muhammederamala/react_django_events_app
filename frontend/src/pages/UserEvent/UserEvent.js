import AllEvents from '../../components/all_events/all_events';
import MyNavbar from '../../components/navbar/Navbar';
import { Row, Col } from 'react-bootstrap'
import axios from 'axios';
import React, { Component, useState, useEffect } from 'react'




function UserEvent() {
    const [userEvents, setUserEvents] = useState([]);
  
    useEffect(() => {
      const fetchUserEvents = async () => {
        try {
          const response = await axios.get('http://localhost:8000/api/list_user_events/', {
            withCredentials: true, // Ensure cookies are sent with the request
          });
  
          setUserEvents(response.data.userEvents); // Using response.data directly
        } catch (error) {
          console.error('Error fetching events', error);
        }
      };
  
      fetchUserEvents();
    }, []);


  return (
    <div>
      <MyNavbar />
      <Row>
                {userEvents.length > 0 ? (
                    userEvents.map(event => (
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

export default UserEvent
