import { Navbar, Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./Header.style.css";
import VacationIcon from '../../assets/vacationIcon.png';

const Header = () => {

    const navigate = useNavigate();

    const goHome = () => {
        navigate("/");
    }

    return (
        <Navbar style={{ padding: 0, backgroundColor: "#ec7f4a" }}>
            <Container>
                <Navbar.Brand href="#home" className='navbar-brand' onClick={goHome}>
                    <img
                        alt=""
                        src={VacationIcon}
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