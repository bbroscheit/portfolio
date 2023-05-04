import './App.css';
import Header from './components/Header/Header.jsx';
import Profile from './components/Profile/Profile.jsx';
import Archivement from './components/Archivement/Archivement.jsx';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Archivement />
      <Portfolio />
      <Testimonials />
      <Footer />

      
    </div>
  );
}

export default App;
