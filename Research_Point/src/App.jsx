import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout, Home, Login, AllJobs, Service, About, CallSection, DashBoard, PostJob, View_Customers, Loader } from './Components/index'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react'
import { getUser } from "./Components/store/loginSlice"


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser())
  }, [])

  const Value = useSelector((state) => state.login)

  if (Value.status == "LOADING") {
    return <Loader />
  }
  else {


    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />} >
              <Route path='' element={<Home />} />
              <Route path='login' element={<Login />} />
              <Route path='allJobs' element={<AllJobs />} />
              <Route path='service' element={<Service />} />
              <Route path='about' element={<About />} />
              <Route path='contact' element={< CallSection />} />
              <Route path='dashboard' element={<DashBoard />} />
              <Route path='/dashboard/postjob' element={<PostJob />} />
              <Route path='viewCustomer' element={<View_Customers />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    )
  }
}

export default App
