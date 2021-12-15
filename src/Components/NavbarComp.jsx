import React from "react";
import { Form, Nav, Navbar, Container, Button, Stack } from "react-bootstrap";

export default function NavbarComp() {
  return (
    <Navbar expand="sm" class="navbar">
      <Container className="mt-1 mb-1">
        <Navbar.Brand href="/" className="me-4">
          <img
            src="/images/udana-logo.png"
            width="150"
            height="35"
            className="d-inline-block align-top"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-end"
          id="responsive-navbar-nav"
        >
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Stack direction="horizontal" gap={4}>
              <Nav.Link href="/getdata" style={{ color: "white" }}>
                Waralaba
              </Nav.Link>
              <Nav.Link href="#action2" style={{ color: "white" }}>
                FAQ
              </Nav.Link>
              <Nav.Link href="#action2" style={{ color: "white" }}>
                Tentang
              </Nav.Link>
            </Stack>
          </Nav>
          <Form className="d-flex">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link
                href="#action2"
                className="me-3"
                style={{ color: "white" }}
              >
                Masuk
              </Nav.Link>
              <Button variant="warning" style={{ color: "white" }}>
                Mulai Daftar
              </Button>
            </Nav>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
