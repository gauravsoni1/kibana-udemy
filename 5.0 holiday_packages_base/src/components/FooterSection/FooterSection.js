import "./FooterSection.style.css";

const FooterSection = () => {
  return (
    <div className="footer-container">
      <div>
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
      <div>Column 3</div>
    </div>
  );
};

export default FooterSection;
