import './App.css';
import ImageSlider from './components/ImageSlider/ImageSlider';
import Header from './components/Header/Header';
import OffersSection from './components/OffersSection/OffersSection';
import FooterSection from './components/FooterSection/FooterSection';

function App() {
  return (
    <div className='app-container'>
      <Header />
      <div className='app-content'>
        <ImageSlider />
        <OffersSection />
        <img className='deals-banner-img' src='/assets/deals-1.jpeg'></img>
      </div>
      <FooterSection />
    </div>
  );
}

export default App;
