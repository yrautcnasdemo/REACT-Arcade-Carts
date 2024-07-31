import { useState } from 'react'
import './App.css'
import Game from './composents/Game'
import Footer from './composents/Footer'
import Insertcoins from './composents/Insertcoins'
import Header from './composents/Header';



export default function App() {
    return (
      <>
        <Header />
        <Insertcoins />
        <Game />
        <Footer />
      </>
    );
  }



