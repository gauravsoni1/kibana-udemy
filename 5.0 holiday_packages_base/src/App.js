import './App.css';

import Header from './components/Header/Header';
import FooterSection from './components/FooterSection/FooterSection';
import HomePage from './pages/HomePage/HomePage';
import { Routes, Route } from 'react-router-dom';
import DealsDetails from './pages/DealsDetails/DealsDetails';

function App() {
  return (
    <div className='app-container'>
      <Header />
      <div className='app-content'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='details' element={<DealsDetails />} />
        </Routes>
      </div>
      <FooterSection />
    </div>
  );
}

export default App;
