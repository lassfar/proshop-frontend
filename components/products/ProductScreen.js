import Link from 'next/link'
import React from 'react'
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap';
import Rating from '../ui/Rating';

const ProductScreen = ({product}) => {
  return (
    <>
      <Link href="/" className="btn btn-primary my-3">
        Back
      </Link>
      <Row>
        <Col md={6} className="text-center">
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={6}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating rating={product.rating && parseInt(product.rating)} text={`from ${product.numReviews} reviews`} />
            </ListGroup.Item>
            <ListGroup.Item as="h5">Price $ {product.price}</ListGroup.Item>
            <ListGroup.Item>Description {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={6} className="ml-auto">
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price : $ {product.price}</Col>
                </Row>
              </ListGroup.Item>
              
              <ListGroup.Item>
                <Row>
                  <Col>Status : {product.countInStock > 1 ? (product.countInStock +' in stock') : 'Out of stock'}</Col>
                </Row>
              </ListGroup.Item>
              
              <ListGroup.Item>
                <Row>
                  <Button className="btn-block bg-primary" type="button" disabled={product.countInStock === 0}>Add to basket</Button>
                </Row>
              </ListGroup.Item>

            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen
