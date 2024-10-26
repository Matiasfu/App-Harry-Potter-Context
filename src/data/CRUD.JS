

export const createPerson = (newPersonaje , personajes , setPersonajes)=>{
    
    
    const postFetch = async (newPersonaje) => {
      try {
        const fetchpost = await fetch('https://671a85aeacf9aa94f6aaf269.mockapi.io/personajes-harry-potter/personajes', {
          method:'POST',
          headers: {'Content-Type' : 'application/json'},
          body: JSON.stringify(newPersonaje)
        })

       newPersonaje.id = (personajes.length + 1);
       setPersonajes([...personajes, newPersonaje]) 
      } catch (error) {
        console.error(error)
        
      }
    }

    postFetch(newPersonaje)

  }


export const updatePerson = (newPersonaje, personajes , setPersonajes)=>{

  

  const postFetch = async (newPersonaje) => {
    try {
      const fetchpost = await fetch(`https://671a85aeacf9aa94f6aaf269.mockapi.io/personajes-harry-potter/personajes/${newPersonaje.id}`, {
        method:'PUT',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(newPersonaje)
      })

     setPersonajes(personajes.map(personaje=> 
      personaje.id === newPersonaje.id? newPersonaje : personaje))
    } catch (error) {
      console.error(error)
      
    }
  }

  postFetch(newPersonaje)
  
    
  }
  
export const deletePerson = (Id, personajes , setPersonajes)=>{

  const postFetch = async (Id) => {
    try {
      const fetchpost = await fetch(`https://671a85aeacf9aa94f6aaf269.mockapi.io/personajes-harry-potter/personajes/${Id}`, {
        method:'DELETE',
        headers: {'Content-Type' : 'application/json'},
      })

    setPersonajes(personajes.filter(personaje=> personaje.id !== Id)) 
    } catch (error) {
      console.error(error)
      
    }
  }

  postFetch(Id)

    
  }

