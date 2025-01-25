import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container mx-auto max-w-2xl pt-5 uppercase bg-blue-500 text-red'>
      Vite App <br />
      Creating new project
    </div>
  )
}

export default App
