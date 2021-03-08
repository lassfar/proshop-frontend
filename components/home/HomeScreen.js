import React, {useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '@/store/actions/productActions'
import Product from 'components/products/Product'
import Loader from '../ui/Loader';
import AlertMessage from '../ui/AlertMessage';

const HomeScreen = () => {
  const productList = useSelector(state => state.productList);
  const { loading, error, products } = productList;
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);


  return (
    <Container>
      <Row>
        {loading ? <Loader /> : 
          error ? <AlertMessage>{error}</AlertMessage> :
          products.map((product, idx) => 
            <Col sm={12} md={6} lg={4} xl={3}>
              <Product product={product} key={idx} />
            </Col>
          )
        }
      </Row>
    </Container>
  )
}

export default HomeScreen
