import './Homepage.style.css';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import OffersSection from '../../components/OffersSection/OffersSection';

const HomePage = () => {
    return <div>
        <ImageSlider />
        <OffersSection />
        <img className='deals-banner-img' src='/assets/deals-1.jpeg'></img>
    </div>
}

export default HomePage;

