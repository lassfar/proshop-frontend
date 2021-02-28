import React from 'react'
import { Container } from 'react-bootstrap'
import Header from 'components/layouts/Header'
import Footer from 'components/layouts/Footer'

const Layout = ({ children, pageTitle }) => {
  return (
    <Container fluid className="p-0 m-0">
      <Header />
        <Container>
          <h1 className="text-center my-4">{pageTitle}</h1>
          <main>{ children }</main>
        </Container>
      <Footer />
    </Container>
  )
}

export default Layout
