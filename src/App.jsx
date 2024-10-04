import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Storage from './components/Storage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Storage />
    </div>
  )
}

export default App
