import './App.css';
import Header from './components/Header/Header.jsx';
import Profile from './components/Profile/Profile.jsx';
import Archivement from './components/Archivement/Archivement.jsx';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer';
// import Fab from '@mui/material/Fab';
// import Box from '@mui/material/Box';
// import PropTypes from 'prop-types';
// import useScrollTrigger from '@mui/material/useScrollTrigger';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import Fade from '@mui/material/Fade';

// function ScrollTop(props) {
//   const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  
  // const trigger = useScrollTrigger({
  //   target: window ? window() : undefined,
  //   disableHysteresis: true,
  //   threshold: 100,
  // });

  // const handleClick = (event) => {
    // console.log(event,"soy event")
    // const anchor = (event.target.ownerDocument || document).querySelector(
    //   '#back-to-top-anchor',
    // );

    // if (anchor) {
    //   console.log(anchor,"soy anchor")
    //   anchor.scrollIntoView({
        
    //     block: 'center', behavior: 'smooth',
    //   });
    // }
//     window.scrollTo(0, 0)
//   };

//   return (
//     <Fade in={trigger}>
//       <Box
//         onClick={handleClick}
//         role="presentation"
//         sx={{ position: 'fixed', bottom: 30, right: 30}}
//       >
//         {children}
//       </Box>
//     </Fade>
//   );
// }

// ScrollTop.propTypes = {
//   children: PropTypes.element.isRequired,
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };


function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Archivement />
      <Portfolio />
      <Testimonials />
      <Footer />

      {/* <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop> */}
    </div>
  );
}

export default App;
