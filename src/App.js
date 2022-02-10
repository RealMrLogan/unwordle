import { Route, Routes } from 'react-router-dom'
import { Wordle, Solver } from './pages'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Wordle />} />
      <Route path="/solver" element={<Solver />} />
    </Routes>
  )
}

export default App
