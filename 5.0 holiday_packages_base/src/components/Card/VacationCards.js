import CardTemplate from "./Card";
import "./VacationCard.style.css";

const VacationCards = () => {
    return (
        <div class="card-container">
            <div class="card-row">
                <CardTemplate imgUrl="assets/norway.jpeg" title="Relax in Norway" text="Explore the beautiful scenic nature of Norway" />
                <CardTemplate imgUrl="assets/newYork.jpeg" title="Amazed by NewYork" text="Explore the beautiful scenic nature of Norway" />
                <CardTemplate imgUrl="assets/Thailand.jpeg" title="Shop in Thailand" text="Explore the beautiful scenic nature of Norway" />
            </div>
            <div class="card-row">
                <CardTemplate imgUrl="assets/norway.jpeg" title="Relax in Norway" text="Explore the beautiful scenic nature of Norway" />
                <CardTemplate imgUrl="assets/newYork.jpeg" title="Amazed by NewYork" text="Explore the beautiful scenic nature of Norway" />
                <CardTemplate imgUrl="assets/Thailand.jpeg" title="Shop in Thailand" text="Explore the beautiful scenic nature of Norway" />
            </div>

        </div>

    )
}

export default VacationCards;