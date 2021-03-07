import React from 'react'
import { absoluteURL } from 'config/index'
import Layout from 'components/layouts/Layout'
import HomeScreen from 'components/home/HomeScreen'

export default function Home({products}) {

  return (
    <Layout pageTitle="Home">
      <HomeScreen />
    </Layout>
  )
}

export const getStaticProps = async () => {

  return { props: {} }
}