import Button from 'react-bootstrap/Button';
import "./FooterSection.style.css";
import VacationIcon from '../../assets/vacationIcon.png';
import FacebookIcon from '../../assets/facebook.png';
import InstagramIcon from '../../assets/instagram.png';
import TwitterIcon from '../../assets/twitter.png';
import YoutubeIcon from '../../assets/youtube.png';

const FooterSection = () => {
    return (
        <div className="footer-container">
            <div className="footer-container-col1">
                <img src={VacationIcon} alt="logo" />
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
                    <img src={FacebookIcon} alt='social-icon' />
                    <img src={InstagramIcon} alt='social-icon' />
                    <img src={TwitterIcon} alt='social-icon' />
                    <img src={YoutubeIcon} alt='social-icon' />
                </div>
            </div>
        </div>
    );
};

export default FooterSection;
