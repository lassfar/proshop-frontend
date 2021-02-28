import React from 'react'
import { absoluteURL } from 'config/index'
import Layout from 'components/layouts/Layout'
import HomeScreen from 'components/home/HomeScreen'

export default function Home({products}) {
  return (
    <Layout pageTitle="Home">
      <HomeScreen products={products} />
    </Layout>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${absoluteURL}/api/products`);
  const products = await res.json();

  // console.log('absoluteURL', absoluteURL)

  // console.log("products", products)

  return { props: {products} }
}