import { useState } from 'react'
import { personEdit } from './Personcontext'




const Personprovideredit = ({children}) => {

const [personedit, setPersonedit] = useState(null)

  return (
    <personEdit.Provider value={ {personedit , setPersonedit} }>
        {children}
    </personEdit.Provider>
  )
}

export default Personprovideredit
