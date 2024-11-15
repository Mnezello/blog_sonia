import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { RiMenu5Fill } from 'react-icons/ri';

export default function NavBar() {

    return (
        <div>
            <Navbar 
                collapseOnSelect 
                expand="md"
                fixed="top" 
                className="navbar"
                >
                <Container className="navbar-container">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="responsive-menu">
                        <RiMenu5Fill size="2em" className="menu-icon"/>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="navbar-links">
                            <a href="#sobremim" className="navbar-link">Sobre</a>
                            <a href="#consultoria" className="navbar-link">Consultoria</a>
                            <a href="#qualificacoes" className="navbar-link">Qualificações</a>
                            <a href="#sugestoes" className="navbar-link">Sugestões</a>
                            <a href="#contato" className="navbar-link">Contato</a>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
