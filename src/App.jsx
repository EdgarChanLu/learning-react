import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from './components/HelloWorld'
import Greeting from './components/Greeting'
import Count from './components/Count'
import Button from './components/Button'
import Timer from './components/Timer'
import Forms from './components/Forms'
import { UserProvider } from './context/UserContext'
import UserProfile from './components/UserProfile'
import ThemeSwitcher from './components/ThemeSwitcher'
import StoreCounter from './components/StoreCounter'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <Navbar/>
      <HelloWorld />
      <Greeting name='Edgar' lastName='Avila' />
      <Greeting name='Juan' />
      <Count/>
      <Button/>
      <Timer/>
      <Forms/>
      <UserProvider>
        <div>
          <UserProfile/>
        </div>
      </UserProvider>
      <ThemeSwitcher/>
      <StoreCounter/>
      

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
          Increment {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
