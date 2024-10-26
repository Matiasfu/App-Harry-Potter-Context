import { useContext } from 'react'
import { deletePerson } from '../data/CRUD.JS'
import './cards.css'
import { person, personEdit } from '../ContextAPI/Personcontext'


const Tablerow = ({ personaje }) => {

const { personajes , setPersonajes} =  useContext(person)
const { setPersonedit } = useContext(personEdit)


const { id, nombre , casa } = personaje;

  const handleDelete = ()=>{
    deletePerson(id, personajes, setPersonajes)
  }

  const handleEditar = ()=>{
    setPersonedit(personaje)
  }

  return (
    <>
    
      <tr key={id} >
        
            <th scope="row"> {id} </th>
          
            <td> {nombre} </td>
            <td> {casa} </td>
            
            <td>
              <button onClick={handleEditar} className="btn btn-primary w-25 me-2">Editar</button>
              <button onClick={handleDelete} className="btn btn-danger w-25 me-2">Borrar</button>
            </td>
            

          </tr>
        
    </>
  )
}

export default Tablerow
