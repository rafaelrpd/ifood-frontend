// app/components/Navbar.js

'use client';

import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

export default function NavigationBar() {
  const { data: session } = useSession();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Link href="/" passHref legacyBehavior>
          <Navbar.Brand>iFood Backoffice</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link href="/dashboard" passHref legacyBehavior>
              <Nav.Link>Dashboard</Nav.Link>
            </Link>
            <Link href="/transactions" passHref legacyBehavior>
              <Nav.Link>Transações</Nav.Link>
            </Link>
            <Link href="/payments" passHref legacyBehavior>
              <Nav.Link>Pagamentos</Nav.Link>
            </Link>
            <Link href="/reports" passHref legacyBehavior>
              <Nav.Link>Relatórios</Nav.Link>
            </Link>
            {session ? (
              <NavDropdown title={session.user.name} id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => signOut({ callbackUrl: '/login' })}>
                  Sair
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Link href="/login" passHref legacyBehavior>
                <Nav.Link>Entrar</Nav.Link>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
