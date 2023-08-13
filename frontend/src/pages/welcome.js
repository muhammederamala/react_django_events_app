import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

// Components
import products from '../products'
import AllEvents from '../components/all_events/all_events'
import Navbar from '../components/navbar/Navbar'

function Welcome() {
  return (
    <div>
      <Navbar />
      <Row>
        {products.map(product =>(
            <Col key={product._id}>
                <AllEvents product={product} />
            </Col>
        ))}
      </Row>
    </div>
  )
}

export default Welcome
