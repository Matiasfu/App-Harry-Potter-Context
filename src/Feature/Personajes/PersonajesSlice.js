import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { characters } from "../../data/personajes";

const initialState = {
  Characters:  characters,
  Charactertoedit: {},
  loading: false,
  error: null,
}

export const getPersonajes = createAsyncThunk(
    
    "Characters/get-personajes", 
    
    async () => {
    
        try {
            const response = await fetch("https://671a85aeacf9aa94f6aaf269.mockapi.io/personajes-harry-potter/personajes")
            const data = await response.json()
            return data
        } catch (error) {
            console.log(error);
            
            return error
        }

    },
)

export const Person = createSlice(
    {
        name: 'Characters',
        initialState ,
        reducers: {
            //agregar y actualizar personaje
            createPersonaje: (state, action) => {
                const { id } = action.payload
                if(id){
                    const index =state.Characters.findIndex((personaje)=>personaje.id === id)
                    state.Characters.splice(index, 1, action.payload)
                }else{
                    const id = (state.Characters.length + 1);
                    action.payload.id = id;
                    state.Characters.push(action.payload)
                }
                
            },
            //eliminar personaje
            deletePersonaje: (state, action) => {
            const newPersonaje = state.Characters.filter(personaje => personaje.id!== action.payload)
            state.Characters = newPersonaje    
            },
            //editar personaje
            updatePersonaje: (state, action) => {
                const id = action.payload
                const newpersonaje = state.Characters.find(personaje => personaje.id == id)
                state.Charactertoedit = newpersonaje
            },
        },
        extraReducers: (builder)=>{
            builder
            .addCase(getPersonajes.pending, (state) => {
                state.loading = true
            })
            .addCase(getPersonajes.fulfilled, (state, action) => {
                state.loading = false
                state.Characters = action.payload
            })
            .addCase(getPersonajes.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
        }
}
)

export const { createPersonaje,  deletePersonaje , updatePersonaje} = Person.actions;
export default Person.reducer;

