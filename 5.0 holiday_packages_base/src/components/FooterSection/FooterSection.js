import Button from 'react-bootstrap/Button';
import "./FooterSection.style.css";

const FooterSection = () => {
    return (
        <div className="footer-container">
            <div className="footer-container-col1">
                <img src="assets/vacationIcon.png" alt="logo" />
                <hr></hr>
                <h4>Vacation Planner</h4>
                <span>Privacy Policy</span>
            </div>
            <div>
                <h4>Site Map</h4>
                <ul>
                    <li>Vacations</li>
                    <li>Offers</li>
                    <li>Visa Assitance</li>
                    <li>Reviews</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='footer-container-col3'>
                <input type="text" placeholder="Email Address" />
                <div>
                    <Button variant="primary">Subscribe</Button>
                </div>
                <div className='footer-social-container'>
                    <img src='assets/facebook.png' alt='social-icon' />
                    <img src='assets/instagram.png' alt='social-icon' />
                    <img src='assets/twitter.png' alt='social-icon' />
                    <img src='assets/youtube.png' alt='social-icon' />
                </div>
            </div>
        </div>
    );
};

export default FooterSection;
