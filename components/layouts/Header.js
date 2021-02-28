import React from 'react'
import Link from 'next/link'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

const Header = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Proshop</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link className="text-light" href="/">
            Home
          </Nav.Link>
          <Nav.Link className="text-light" href="#features">
            Products
          </Nav.Link>
          <Nav.Link className="text-light" href="#pricing">
            Pricing
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
    </>
  )
}

export default Header
