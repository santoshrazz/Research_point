import About from './AboutComp/About'
import FooterMain from './Footer/FooterMain'
import Home from './Home/Home'
import Login from './Login/Login'
import NavBar from './NavBar/NavBar'
import Service from './Services/Service'
import { Routes, Route } from 'react-router-dom'
import CallSection from './CallSection/CallSection'
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/service' element={<Service />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<CallSection />} />
      </Routes>
      <FooterMain />
    </>
  )
}

export default App
