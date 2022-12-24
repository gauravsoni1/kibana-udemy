import Carousel from 'react-bootstrap/Carousel';
import "./ImageSlider.style.css";
import ThailandBanner from '../../assets/Thailand.jpeg';
import NewyorkBanner from '../../assets/newYork.jpeg';
import NorwayBanner from '../../assets/norway.jpeg';

function ImageSlider() {
    return (
        <div className="image-slider-container">
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={ThailandBanner}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Explore Thailand</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={NewyorkBanner}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Live Large Newyork</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={NorwayBanner}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Explore Norway</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default ImageSlider;