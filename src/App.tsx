import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Top from '../pages/index'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
