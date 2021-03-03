import React, { lazy, Suspense } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import { darkTheme } from './theme'
import './App.css';
const Logo = lazy(() => import('./Logo'))
const Copy = lazy(() => import('./Copy'))
const ContactUs = lazy(() => import('./ContactForm'))
const Footer = lazy(() => import('./Footer'))
const renderLoader = () => <div></div>;

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
            <Suspense fallback={renderLoader()}>
            <Logo />
              <ContactUs />
              <br></br>
              <Copy />
              {/* <Testimonials /> */}
              <Logo />
              <Footer />
            </Suspense>
            <br></br>
          </ThemeProvider>
        </div>
      </Container>
      </div>
  );
}

export default App;
