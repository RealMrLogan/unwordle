import { Route, Routes } from 'react-router-dom'
import { Wordle, Solver } from './pages'
import './index.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Wordle />} />
      <Route path="/solver" element={<Solver />} />
    </Routes>
  )
}

export default App
