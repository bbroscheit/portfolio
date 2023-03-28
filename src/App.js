import './App.css';
import Header from './components/Header/Header.jsx';
import Profile from './components/Profile/Profile.jsx';
import Archivement from './components/Archivement/Archivement.jsx';
// import Services from './components/Services/Services.jsx';
import Form from './components/Form/Form.jsx';
// import Footer from './components/Footer/Footer.jsx';
import Portfolio from './components/Portfolio/Portfolio';


function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Archivement />
      {/* <Services /> */}
      <Portfolio />
      <Form />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
