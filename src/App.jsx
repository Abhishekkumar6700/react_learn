import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      <ul>
        <li>apple</li>
        <li>lichi</li>
        <li>papaya</li>
        <li>banana</li>
      </ul>
    </>
  )
}

export default App
