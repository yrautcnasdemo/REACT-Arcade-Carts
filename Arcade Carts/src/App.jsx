import './App.css'
import Header from './composents/Header'
import Insertcoins from './composents/Insertcoins'
import Game from './composents/Game'
import Eachcards from './composents/Eachcards'
import Footer from './composents/Footer'

import data from './data.jsx';
import PlayerCard from './composents/PlayerCard';


function showAdditional(additional) {
  const alertInformation = Object.entries(additional)
    .map(information => `${information[0]}: ${information[1]}`)
    .join('\n');
  alert(alertInformation)
};

export default function App() {
    return (
      <>
        <Header />



          <div className="wrapper">
            <h1>Player List</h1>
            {data.map(user => (
              <PlayerCard 
                additional={user.additional}
                hobby={user.hobby}
                key={user.pseudo}
                pseudo={user.pseudo}
                gender={user.gender}
                showAdditional={showAdditional}
                age={user.age}
              />
            ))}
          </div>


          
        <Game />
        <Eachcards />
        <Insertcoins />
        <Footer />
      </>
    );
  }