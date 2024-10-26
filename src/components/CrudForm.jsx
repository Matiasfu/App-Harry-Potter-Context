import { useContext, useEffect, useState } from "react"
import Input from "./Input"
import { person, personEdit } from "../ContextAPI/Personcontext"
import { createPerson } from "../data/CRUD.JS"
import { updatePerson } from "../data/CRUD.JS"

const initialState = {
  id: null,
  nombre: '',
  casa: '',
}

const CrudForm = () => {

  const [form, setForm] = useState(initialState)
  const { setPersonajes, personajes } = useContext(person)
  const { personedit , setPersonedit } = useContext(personEdit)

  

  const handlesubmit = (e) => {
    e.preventDefault()
    
    handleReseat()
    form.id ? updatePerson (form, personajes, setPersonajes) 
    : createPerson(form , personajes , setPersonajes)
  }

  const handlechange = ({target:{ name , value}})=>{
   
    setForm({...form, [name]: value })
  }

  const handleReseat = () => {
    setForm(initialState)
    setPersonedit(null)
  }
  
  useEffect(() => {
   
    if(personedit){
      setForm(personedit)
    } else {
      setForm(initialState)
    }
  }, [personedit])
  

  return (
    <>
      <div className="container-fluid p-3 mt-3 d-flex justify-content-md-start bg-success-subtle">
        
        <form onSubmit={handlesubmit} className=" ms-4 w-auto">

              <h3>{personedit? 'Editar Personaje' : 'Cargar Personaje'}</h3>
        
              <Input name='nombre' value={form.nombre} handlechange={handlechange}/>
              <Input name='casa' value={form.casa} handlechange={handlechange}/>
                    
              
              <div className="d-flex justify-content-center gap-2 my-3">
                <button type="submit" className="btn btn-outline-success w-50">Enviar</button>
                <button onClick={handleReseat} className="btn btn-danger w-50">Borrar</button>
              </div>
        </form>
        
        

      </div>
      
    </>
  )
}

export default CrudForm
