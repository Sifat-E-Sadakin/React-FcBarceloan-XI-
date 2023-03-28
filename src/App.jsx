import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './Landing/Landing'
import Players from './Players/Players'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>FcBarcelona Best XI</h1>
      <Landing></Landing>
      {/* <Players></Players> */}
    </div>
  )
}

export default App
