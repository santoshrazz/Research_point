import MyContext from './Context/MyContext'
import RouteComp from './Route/RouteComp'
function App() {
  return (
    <>
      <MyContext>
        <RouteComp />
      </MyContext>
    </>
  )
}

export default App
