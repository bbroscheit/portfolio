import './App.css';
import Header from './components/Header/Header.jsx';
import Profile from './components/Profile/Profile.jsx';
import Timeline from './components/Timeline/Timeline.jsx';
import Services from './components/Services/Services.jsx';
import Form from './components/Form/Form.jsx';
import Footer from './components/Footer/Footer.jsx';


function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Timeline />
      <Services />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
