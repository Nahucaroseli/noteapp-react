import React, { useContext, useEffect, useState} from 'react'
import { getNotesByUser } from '../services/notes';
import { UsuarioContext } from '../context/usuario.context';

function useNotes() {

    const [notes,setNotes]= useState([]);
    const {user} = useContext(UsuarioContext);
    
    useEffect(()=>{
        if(user){
            const fetchProducts = async ()=>{
                try {
                    const response = await getNotesByUser();
                    const data = response;
                    setNotes(data);
                } catch (error) {   
                    console.log("Error",error);
                }
            };
            fetchProducts();
        }
      

    },[user]);
    return [notes,setNotes];
}

export default useNotes