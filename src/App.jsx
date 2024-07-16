import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Blog } from './pages/Blog/Blog'
import Future from './pages/Future_roadmap/Future'
import Component_Page from './pages/Home/Components_Page/Component_Page'
import Demo_Component from './pages/Home/Components_Page/Demo_Component'
import Home from './pages/Home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/components' element={<Component_Page />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/future-roadmap' element={<Future />} />

            {/* Demo Component */}
            <Route path='/demo-component' element={<Demo_Component />} />


          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
