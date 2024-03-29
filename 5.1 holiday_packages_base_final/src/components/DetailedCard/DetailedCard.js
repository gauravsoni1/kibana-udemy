import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardTemplate({ imgUrl, title, text, onBookClick }) {
    return (
        <Card style={{ width: "30rem", margin: "10px" }}>
            <Card.Img variant="top" src={imgUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
                <Button variant="primary" onClick={onBookClick}>Book Now!</Button>
            </Card.Body>
        </Card>
    );
}

export default CardTemplate;
