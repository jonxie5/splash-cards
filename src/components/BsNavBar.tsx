import { useState, useEffect } from 'react'
import {
    Button,
    Container,
    Nav,
    Navbar,
    Offcanvas,
    ButtonGroup
} from 'react-bootstrap'


const BsNavbar = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Navbar style={{backgroundImage: "linear-gradient(to right, #35a7d0, #a8367d, #ecdea3)"}} sticky='top' >
            <Container fluid>
                <Navbar.Brand href='/'>
                    Splash
                </Navbar.Brand>
                <Nav className='me-auto'>
                    <Nav.Item className='pt-1'>
                        <div className="container-fluid">
                            <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <Button className='diceLinkButton p-0' variant="link" color='transparent' type='submit' style={{color:'white', textDecoration: 'none'}} >
                                🎲
                            </Button>
                            </form>
                        </div>
                    </Nav.Item>
                    <Nav.Item  className='pt-2'>
                        <ButtonGroup aria-label="Basic example" size='sm'>
                            <Button variant=''>0</Button>
                            <Button variant=''>1</Button>
                            <Button variant=''>2</Button>
                        </ButtonGroup>
                    </Nav.Item>
                </Nav>
                <Nav className='me'>
                    <Button variant="link" onClick={handleShow}>
                        OK
                    </Button>
                </Nav>
                <Offcanvas show={show} onHide={handleClose} backdrop scroll className='text-bg-dark' placement='end' style={{opacity: 0.8}} >
                    <Offcanvas.Header closeButton style={{backgroundColor: 'aquamarine'}}>
                        <Offcanvas.Title style={{color: 'black'}}>Settings</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className='px-3'>
                        Hello World
                    </Offcanvas.Body>
                </Offcanvas>
            </Container>
        </Navbar>
    )
}

export default BsNavbar