import { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import './styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <Header/>
       <Home/>
    </div>
  )
}

export default App
