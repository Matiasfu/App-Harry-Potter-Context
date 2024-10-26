
import { person } from "./Personcontext"
import { useEffect, useState } from "react"



const Personprovider = ({children}) => {

    const [personajes, setPersonajes] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    
    const fetchdata = async () => {
        try {
            const response = await fetch('https://671a85aeacf9aa94f6aaf269.mockapi.io/personajes-harry-potter/personajes')
            const dato = await response.json()

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }else{
                setPersonajes(dato)
            }

        } catch (error) {
            console.error(error);
            setError(true)
            
        } finally{
            setLoading(false)
        }
    }
    
    useEffect(() => {
      
       fetchdata()
    }, [])
    
  
    return (
        <person.Provider value={{ personajes, setPersonajes, error, loading }}>
            {children}
        </person.Provider>
       
    )
  }
  
  export default Personprovider
  