import React from 'react'
import Featured from './components/Featured'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Footer from './components/Footer'
import Notice from './components/Notice'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Notice/>
      <Featured />
      <Signup />
      <Footer />
    </>
  );
}

export default App;
