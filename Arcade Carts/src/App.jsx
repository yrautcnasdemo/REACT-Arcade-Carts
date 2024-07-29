import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const games = [
    {title: 'Space-Invaders', year: '1978',id: 1},
    {title: 'Pac-Man', year: '1980',id: 2},
    {title: 'Dragon\'s Lair ', year: '1983',id: 3},
    {title: 'OutRun', year: '1986',id: 4},
    {title: 'Double-Dragon II', year: '1988',id: 5},
    {title: 'Golden Axe', year: '1989',id: 6},
    {title: 'Street-Fighter II', year: '1991',id: 7},
    {title: 'Super Ghouls \'n Ghosts', year: '1991',id: 8},
    {title: 'Super Metroid', year: '1994',id: 9}
  ]

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

    <div className='pannelbtn'>
      <button className='button2'>
        Card x1
      </button>
      <button className='button2'>
        Booster x5
      </button>
    </div>
    </>
  )
}

export default App