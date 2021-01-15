import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import { darkTheme } from './theme'
import ContactUs from './ContactForm'
import Logo from './Logo'
import Copy from './Copy'
//import Testimonials from './Testimonials'
import Footer from './Footer'
import './App.css';

function App() {
  const appliedTheme = createMuiTheme(darkTheme)


  return (
    <div className="background">
      <span className="circle orange"></span>
      <span className="circle green"></span>
      <Container maxWidth="lg">
        <div className="App">
          <ThemeProvider theme={appliedTheme}>
          <CssBaseline />
            <style>@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;600;700&display=swap');</style>
            <Logo />
            <ContactUs />
            <br></br>
            <Copy />
            {/* <Testimonials /><br></br> */}
            <Logo />
            <Footer /><br></br>
          </ThemeProvider>
        </div>
      </Container>
      </div>
  );
}

export default App;
