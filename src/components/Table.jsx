import { useContext } from "react"
import Tablerow from "./Tablerow"
import { person } from "../ContextAPI/Personcontext"


const Table = () => {

const { personajes , error, } = useContext(person)

  return (
  
  <>
   
      {error ? <p>Hubo en error al compilar los datos</p> :
    
            <table className="table">
            <thead>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Nombre</th>
                <th scope="col">Casa</th>
                <th scope="col">Acciones</th>
                </tr>
            </thead>
            
            <tbody> 

                    {
                    personajes.length >0 ? 
                    personajes.map((personaje)=>{
                             return(
                                    <Tablerow key={personaje.id} personaje={personaje}/>
                                    )
                            }):
                      <tr>
                        <td colSpan="4">No hay personajes</td>
                      </tr>}
    
            </tbody> 
        </table>}
            
            
            </>
    
    
  )
}

export default Table
