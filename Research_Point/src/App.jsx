import About from './AboutComp/About'
import CallSection from './CallSection/CallSection'
import Feedback from './Feedback/Feedback'
import FooterMain from './Footer/FooterMain'
import Home from './Home/Home'
import Login from './Login/Login'
import Nav from './NavBar/NavBar'
import NavBar from './NavBar/NavBar'
import Slider from './NavBar/Slider'
import Service from './Services/Service'
import { Routes, Route } from 'react-router-dom'
function App() {
  const ComponentToRenderOnLogin = () => {
    return (
      <>
        <Login />
      </>
    )
  }
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<ComponentToRenderOnLogin />} />
        <Route path='/service' element={Service} />
      </Routes>
    </>
  )
}

export default App
