

// function CardGame(){
//   return (
//     <h3>Space invaders</h3>
//   );
// }

// const detailsGame = {
//   year: '1978',
//   descripiton: 'le premier archétype du shoot them up, il est aussi l\'un des titres les plus influents et célèbres de l\'histoire du jeu vidéo.'
// }

// export default function App() {
//   return (
//     <>
//     <div>
//       <CardGame />
//     </div>
//       <div>
//         <p>{detailsGame.year}</p>
//         <Game />
//     </div>
//     </>
//   );


//   export default function App() {
//   const [count, setCount] = useState(0)


//   const games = [
//     {title: 'Space-Invaders', year: '1978',image:"", id: 1},
//     {title: 'Pac-Man', year: '1980',image:"", id: 2},
//     {title: 'Dragon\'s Lair ', year: '1983',image:"", id: 3},
//     {title: 'OutRun', year: '1986',image:"", id: 4},
//     {title: 'Double-Dragon II', year: '1988',image:"", id: 5},
//     {title: 'Golden Axe', year: '1989',image:"", id: 6},
//     {title: 'Street-Fighter II', year: '1991',image:"", id: 7},
//     {title: 'Super Ghouls \'n Ghosts', year: '1991',image:"", id: 8},
//     {title: 'Super Metroid', year: '1994',image:"", id: 9}
//   ];
  

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Time Warp Arcade</h1>
//       <div className="card">
//         <div>
//           <img src="assets/images/design/insert_coin.png" alt="" />
//         </div>

//         <button onClick={() => setCount((count) => count + 1)}>
//           Insert Coin {count}
//         </button>
//       </div>

//     <div className='pannelbtn'>
//       <button onClick={() => setCount((count) => count - 1)} className='button2'>
//         Card x1
//       </button>
//       <button onClick={() => setCount((count) => count - 3)} className='button2'>
//         Booster x3
//       </button>
//     </div>

//     <div className='pannelCards'>
//       <div className='cardsPlace'>
//         <div>
//           <img className='imgcard' src={img} alt="spaceinvader" />
//         </div>
//         <div>
//           <h3>Space-Invader</h3>
//         </div>
//         <div>
//           <p className='descriptionCard'>Sortie en 1978 Space invader est un jeu d'action shooterf ezif ozijfejo jzeofezoj iozejof jezoijf oejoi jezojf</p>
//         </div>
//       </div>

//       <div className='cardsPlace'>
//       </div>

//       <div className='cardsPlace'>
//       </div>
//     </div>

//     <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//     </p>
//     </>
//   )
// }

