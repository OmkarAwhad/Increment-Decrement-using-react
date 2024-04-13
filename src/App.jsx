import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import IncrementDecrement from './Components/IncrementDecrement'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-screen bg-purple-900 flex justify-center items-center'>
      <IncrementDecrement/>
    </div>
  )
}

export default App
