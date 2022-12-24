import TermsConditions from "./TermsConditions/TermsConditions";
import TermsConditionsData from './TermsConditions/termsConditions.json'
import { Form, Button } from 'react-bootstrap';
import "./DealDetails.style.css";

const DealsDetails = () => {
    return <div className="deal-details-container">
        <div className="terms-conditions-section">
            {TermsConditionsData.map((item) => <TermsConditions title={item.title} description={item.description}></TermsConditions>)}
        </div>
        <div className="form-container">
            <h3>Inquire Now !!</h3>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" placeholder="Phone" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Send Inquiry
                </Button>
            </Form>
        </div>

    </div>
}

export default DealsDetails;
