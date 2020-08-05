import React , {Component} from 'react';
import Navigation from './components/Navigation/ Navigation';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo/>
      <ImageLinkForm/>
      {/* <FaceRecognition/> */} 
    </div>
  );
}

export default App;
