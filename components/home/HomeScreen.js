import React, {useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux'
import { fetchProducts } from 'store/actions/productAction'
import Product from 'components/products/Product'

const HomeScreen = ({ }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    return () => {
      
    }
  }, [dispatch]);

  const products = [];

  return (
    <Container>
      <Row>
        {products.map((product, idx) => 
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product product={product} key={idx} />
          </Col>
        )}
      </Row>
    </Container>
  )
}

export default HomeScreen
