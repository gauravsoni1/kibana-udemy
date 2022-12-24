import CardTemplate from "./Card";
import "./VacationCard.style.css";
import { useNavigate } from "react-router-dom";
import NorwayImg from '../../assets/norway.jpeg';
import NewyorkImg from '../../assets/newYork.jpeg';
import ThailandImg from '../../assets/Thailand.jpeg';
import DubaiImg from '../../assets/dubai.jpeg';
import IndiaImg from '../../assets/india.jpeg';
import AfricaImg from '../../assets/Africa.jpeg';
import SwitzerlandImg from '../../assets/Switzerland.webp';
import AustraliaImg from '../../assets/Australia.webp';

const VacationCards = () => {
  const navigate = useNavigate();

  const onBookClick = (location) => {
    navigate(`details/${location}`);
  }

  return (
    <div className="card-container">
      <div className="card-row">
        <CardTemplate
          imgUrl={NorwayImg}
          title="Relax in Norway"
          text="Explore the beautiful scenic nature of Norway"
          onBookClick={() => onBookClick("norway")}
        />
        <CardTemplate
          imgUrl={NewyorkImg}
          title="Amazed by Newyork"
          text="Feel the endless energy of the Big Apple"
          onBookClick={() => onBookClick("newyork")}
        />
        <CardTemplate
          imgUrl={ThailandImg}
          title="Explore Thai culture"
          text="Activies for everyone.Get a spa, explore beaches and night life. "
          onBookClick={() => onBookClick("thailand")}
        />
        <CardTemplate
          imgUrl={DubaiImg}
          title="Go Shopping in Dubai"
          text="Get a view from the world's tallest building , and get the best shopping experience."
          onBookClick={() => onBookClick("dubai")}
        />
      </div>
      <div className="card-row">
        <CardTemplate
          imgUrl={IndiaImg}
          title="Explore India"
          text="Beautiful landscapes, variety of food "
          onBookClick={() => onBookClick("india")}
        />
        <CardTemplate
          imgUrl={AfricaImg}
          title="Take a Safari"
          text="Take a cruise across the Nile river or hike up the famous Mount Killimanjaro"
          onBookClick={() => onBookClick("africa")}
        />
        <CardTemplate
          imgUrl={SwitzerlandImg}
          title="Rejuvenate in the Alps"
          text="Taste the exclusive swis fondu and watch the mesmerizing alpine scenery on a train."
          onBookClick={() => onBookClick("switzerland")}
        />
        <CardTemplate
          imgUrl={AustraliaImg}
          title="Shop in Thailand"
          text="Surf on the waves across the Gold cost and camp in the lush rain forest. There is something to explore for everyone"
          onBookClick={() => onBookClick("australia")}
        />
      </div>
    </div>
  );
};

export default VacationCards;
