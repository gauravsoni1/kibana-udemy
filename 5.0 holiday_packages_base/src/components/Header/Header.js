import { Navbar, Container, Form, Button } from 'react-bootstrap';
import "./Header.style.css";

const Header = () => {
    return (
        <Navbar style={{ padding: 0, backgroundColor: "#ec7f4a" }}>
            <Container>
                <Navbar.Brand href="#home" className='navbar-brand'>
                    <img
                        alt=""
                        src="assets/vacationIcon.png"
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                    />
                    Make Memorable Holidays
                </Navbar.Brand>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="primary">Search</Button>
                </Form>
            </Container>
        </Navbar>
    )
}

export default Header;