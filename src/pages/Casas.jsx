import { useContext } from "react"
import { person } from "../ContextAPI/Personcontext"
import Cards from "../components/Cards"


const Casas = () => {

  const { personajes ,error } = useContext(person)

  return (
    <>
      <h1>Casas</h1>
      {error ? <p>Hubo en error al compilar los datos</p> :
      
      <div className="container-fluid p-3 d-flex flex-wrap gap-2 bg-secondary-subtle my-3">
        {personajes.map((personaje)=>{
            return(
                    <Cards key={personaje.id} personaje={personaje}/>
                )
                })}

      </div>
      
      }
      
    </>
  )
}

export default Casas
