
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './routes/RootLayout'
import Inicio from './pages/Inicio'
import Casas from './pages/Casas'
import Error from './pages/Error'
import { PATH } from './routes/PATH'
import Personprovider from './ContextAPI/Personprovider'
import Personajes from './pages/Personajes'

const router = createBrowserRouter([{
  path: '/',
    element: <RootLayout/>,
    errorElement: <Error/>,
    
    children:[ 
      { path: PATH.inicio, element: <Inicio/> }, 
      {path: PATH.personajes, element: <Personajes/> },
      { path: PATH.casas, element: <Casas/>},
        ]}

])

function App() {

  return (
    <Personprovider>
      <RouterProvider router={router}/>
    </Personprovider>
  )
}

export default App
