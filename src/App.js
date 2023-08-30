

import './App.css';
import React, { useState} from "react";

import ContactModal from './ContactModal';
import NavBar from './components/NavBar';
import CoverPage from './components/CoverPage';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';
import TransitionPage from './components/TransitionPage';


export default function App() {
const [showContactModal, setShowContactModal] = useState(false)

const openContactModal = () => {
  setShowContactModal(true);
};

const handleOnClose = () => setShowContactModal(false)

  return (
    
    <div className="App">
      <NavBar onOpenModal={openContactModal} />
      <div className="sticky top-0 h-screen flex flex-col bg-black">
      <CoverPage />
      </div>
      <div className="sticky top-0 h-screen flex flex-col  bg-black">
      <AboutMe onOpenModal={openContactModal} />
      </div>
      <div className="sticky top-0 h-screen flex flex-col bg-black">
      <TransitionPage />
      </div>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-black">
      <Projects />
      </div>
      <ContactModal onClose={handleOnClose} visible={showContactModal}/>
      <div className="sticky top-0 h-screen flex flex-col bg-black">
      <Footer />
      </div>
    </div>
  );
}
