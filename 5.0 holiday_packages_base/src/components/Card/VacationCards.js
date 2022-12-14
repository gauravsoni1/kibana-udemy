import CardTemplate from "./Card";
import "./VacationCard.style.css";

const VacationCards = () => {
  return (
    <div class="card-container">
      <div class="card-row">
        <CardTemplate
          imgUrl="assets/norway.jpeg"
          title="Relax in Norway"
          text="Explore the beautiful scenic nature of Norway"
        />
        <CardTemplate
          imgUrl="assets/newYork.jpeg"
          title="Amazed by Newyork"
          text="Feel the endless energy of the Big Apple"
        />
        <CardTemplate
          imgUrl="assets/Thailand.jpeg"
          title="Explore Thai culture"
          text="Activies for everyone.Get a spa, explore beaches and night life. "
        />
        <CardTemplate
          imgUrl="assets/dubai.jpeg"
          title="Go Shopping in Dubai"
          text="Get a view from the world's tallest building , and get the best shopping experience."
        />
      </div>
      <div class="card-row">
        <CardTemplate
          imgUrl="assets/india.jpeg"
          title="Explore India"
          text="Beautiful landscapes, variety of food "
        />
        <CardTemplate
          imgUrl="assets/Africa.jpeg"
          title="Take a Safari"
          text="Take a cruise across the Nile river or hike up the famous Mount Killimanjaro"
        />
        <CardTemplate
          imgUrl="assets/Switzerland.webp"
          title="Rejuvenate in the Alps"
          text="Taste the exclusive swis fondu and watch the mesmerizing alpine scenery on a train."
        />
        <CardTemplate
          imgUrl="assets/Australia.webp"
          title="Shop in Thailand"
          text="Surf on the waves across the Gold cost and camp in the lush rain forest. There is something to explore for everyone"
        />
      </div>
    </div>
  );
};

export default VacationCards;
