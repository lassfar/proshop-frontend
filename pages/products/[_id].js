import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '@/components/layouts/Layout'
import { absoluteURL } from 'config'
import { Container } from 'react-bootstrap'
import ProductScreen from '@/components/products/ProductScreen';
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductById } from '@/store/actions/productActions'
import Loader from '@/components/ui/Loader'
import AlertMessage from '@/components/ui/AlertMessage'

const ProductDetail = () => {
  const dispatch = useDispatch();
  const router  = useRouter();
  const {_id} = router.query;

  const productDetail = useSelector(state => state.productDetail);
  const { loading, error, product } = productDetail;

  useEffect(() => {
    dispatch(fetchProductById(_id));
  }, [dispatch])
  

  return (
    <Layout pageTitle="Product detail">
      <Container>
        {loading ? <Loader /> : 
          error ? <AlertMessage>{error}</AlertMessage> : 
          <ProductScreen product={product}/>
        }
      </Container>
    </Layout>
  )
}

// export const getStaticProps = async (ctx) => {
//   return { props: {product} }
// }
// export const getStaticPaths = async () => {
//   const res = await fetch(`${absoluteURL}/api/products`);
//   const products = await res.json();
//   const paths = products.map((prod) => ({ params: {_id: prod._id} }));
//   return { 
//     paths, fallback: false
//   }
// }


export default ProductDetail
