import MyContext from './Context/MyContext'
import RouteComp from './Route/RouteComp'
import { Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <MyContext>
        <Routes>
          <Route path='/*' element={<RouteComp />} />
        </Routes>
      </MyContext>
    </>
  )
}

export default App
