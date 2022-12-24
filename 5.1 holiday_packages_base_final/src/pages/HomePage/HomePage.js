import './Homepage.style.css';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import OffersSection from '../../components/OffersSection/OffersSection';
import DealsBanner from '../../assets/deals-1.jpeg';

const HomePage = () => {
    return <div>
        <ImageSlider />
        <OffersSection />
        <img className='deals-banner-img' src={DealsBanner}></img>
    </div>
}

export default HomePage;

