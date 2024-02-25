import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    userName: "Gourav",
    age: 23
  }

  let newObj = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl' >Tailwind CSS</h1>
      <Card userName="Gourav Basera" btnText = "Click Here"/>
      <Card userName="Another User" btnText = "Click Here"/>
    </>
  )
}

export default App
