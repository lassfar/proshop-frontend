import React from 'react'
import Link from 'next/link'
import { Card } from 'react-bootstrap'
import Rating from 'components/ui/Rating'

const Product = ({product, idx}) => {
  return (
    <Card className="my-3 p-3 rounded" style={{minHeight: '30rem', maxHeight: '30rem'}} key={idx}>
      <Card.Img className="my-4" src={product.image} style={{maxWidth: '100%', height: '15rem', objectFit: 'contain' }} variant="top" />

      <Card.Title as="h5">
        <Link href={`/products/${product._id}`}>
          <a>{product.name}</a>
        </Link>
      </Card.Title>

      <Card.Text>
        <Rating rating={parseInt(product.rating)} text={`from ${product.numReviews} reviews`} />
      </Card.Text>

      <Card.Text as="h3">$ { product.price }</Card.Text>

    </Card>
  )
}

export default Product
