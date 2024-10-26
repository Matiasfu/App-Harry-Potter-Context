import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"



const RootLayout = () => {
  return (
    <>
      <section className='container-fluid 75vh-100'>
        <div className='row  vh-100'>
            <div className="col col-2">
                <Sidebar/>
            </div>
            <div className="col col-10">
                <Outlet/>
            </div>
        </div>
      </section>
    </>
  )
}

export default RootLayout
