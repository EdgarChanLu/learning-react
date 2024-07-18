import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'
import HelloWorld from './HelloWorld'
import Greeting from './Greeting'
import Count from './Count'
import Button from './Button'
import Timer from './Timer'
import Forms from './Forms'
import { UserProvider } from '../context/UserContext'
import UserProfile from './UserProfile'
import ThemeSwitcher from './ThemeSwitcher'
import StoreCounter from './StoreCounter'
import Navbar from './Navbar'
import CounterWithReducer from './CounterWithReducer'
import PerformanceComponent from './PerformanceComponent'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <Navbar />
      <div className="container">
        <Card title="HelloWorld">
          <HelloWorld />
        </Card>
        <Card title="Greeting">
          <Greeting name="Edgar" lastName="Avila" />
        </Card>
        <Card title="Greeting">
          <Greeting name="Juan" />
        </Card>
        <Card title="Count">
          <Count />
        </Card>
        <Card title="Button">
          <Button />
        </Card>
        <Card title="Timer">
          <Timer />
        </Card>
        <Card title="Forms">
          <Forms />
        </Card>
        <Card title="User Profile">
          <UserProvider>
            <UserProfile />
          </UserProvider>
        </Card>
        <Card title="Theme Switcher">
          <ThemeSwitcher />
        </Card>
        <Card title="Store Counter">
          <StoreCounter />
        </Card>
        <Card title="Counter With Reducer">
          <CounterWithReducer />
        </Card>
        <Card title="Performance Component">
          <PerformanceComponent />
        </Card>
      </div>
      

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>
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
