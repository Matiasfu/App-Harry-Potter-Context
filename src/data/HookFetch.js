import { useEffect, useState } from "react";



export const HookFetch = (  ) => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchdata = async () => {
        try {
            const response = await fetch('https://671a85aeacf9aa94f6aaf269.mockapi.io/personajes-harry-potter/personajes')
            const dato = await response.json()
            
           setData(dato)
            
        
        } catch (error) {
            console.error(error);
            
        } finally{
            setLoading(false)
        }
    }

    useEffect(() => {
      fetchdata()
    }, [])
      
    
    


  return { data , loading }


}




