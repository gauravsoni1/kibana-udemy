import './App.css';

import Header from './components/Header/Header';
import FooterSection from './components/FooterSection/FooterSection';
import HomePage from './pages/HomePage/HomePage';
import { Routes, Route } from 'react-router-dom';
import DealsDetails from './pages/DealsDetails/DealsDetails';
import axios from 'axios';

function App() {

  const longTask = () => {
    let sum = 0;

    for (let i = 0; i < 99999999; i++) {
      sum += i;
    }
  }

  longTask();

  axios.get("https://raw.githubusercontent.com/shivika24/tourism-project/master/db.json").then(({ data }) => {
    console.log(data);
  }).catch(err => {
    throw new Error("Error fetching the data", err);
    console.log(err);
  })
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
