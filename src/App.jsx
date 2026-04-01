import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home-2/Home'
import Home1 from './pages/Home-1/Home1'
import Layout from './pages/Layout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/home-1" element={<Home1 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App