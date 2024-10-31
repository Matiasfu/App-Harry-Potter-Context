

const postFetch = async (newPersonaje) => {
    try {
      const fetchpost = await fetch('https://671a85aeacf9aa94f6aaf269.mockapi.io/personajes-harry-potter/personajes', {
        method:'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(newPersonaje)
      })

    } catch (error) {
      console.error(error)
      
    }
  }

  postFetch(newPersonaje)

