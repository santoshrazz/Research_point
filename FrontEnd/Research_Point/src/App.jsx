import About from './AboutComp/About'
import CallSection from './CallSection/CallSection'
import Feedback from './Feedback/Feedback'
import FooterMain from './Footer/FooterMain'
import Login from './Login/Login'
import NavBar from './NavBar/NavBar'
import Slider from './NavBar/Slider'
import Service from './Services/Service'
function App() {

  return (
    <>
      <NavBar />
      {/* <Slider /> */}
      <Service />
      <About />
      <Feedback />
      <CallSection />
      <FooterMain />
      {/* <Login /> */}
    </>
  )
}

export default App
