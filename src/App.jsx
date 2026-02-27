import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Index from './component'
import Dashboard from './component/Dashboard'
import Navbar from './component/Navbar/Index';
import Footer from './component/Footer';



function App() {
  return (
    <div >
      
<Navbar/>

      <Routes>
        <Route path="/Jobportal" element={<Index />} />
               <Route path="/Jobportal/dashboard" element={<Dashboard />} />

      </Routes>
      <Footer/>
    </div>
  )
}

export default App
