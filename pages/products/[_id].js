import React from 'react'
import Layout from '@/components/layouts/Layout'
import { absoluteURL } from 'config'
import { Container } from 'react-bootstrap'
import ProductScreen from 'components/products/ProductScreen';

const ProductDetail = ({product}) => {
  return (
    <Layout pageTitle="Product detail">
      <Container>
        <ProductScreen product={product} />
      </Container>
    </Layout>
  )
}

export const getStaticProps = async (ctx) => {
  const res = await fetch(`${absoluteURL}/api/products/${ctx.params._id}`);
  const product = await res.json();

  // console.log("product", product)

  return { props: {product} }
}
export const getStaticPaths = async () => {
  const res = await fetch(`${absoluteURL}/api/products`);
  const products = await res.json();

  const paths = products.map((prod) => ({ params: {_id: prod._id} }));

  return { 
    paths, fallback: false
  }
}


export default ProductDetail
