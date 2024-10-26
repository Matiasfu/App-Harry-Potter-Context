import CrudForm from "../components/CrudForm"
import Personprovideredit from "../ContextAPI/Personprovideredit"
import Table from "../components/Table"


const Personajes = () => {


  return (
    <Personprovideredit>

    <CrudForm/>

    <Table/>
    
    </Personprovideredit>
  )
}

export default Personajes
