import React, { useEffect, useState} from 'react'
import { getNotes } from '../services/notes';

function useNotes() {

    const [notes,setNotes]= useState([]);
    
    useEffect(()=>{
        const fetchProducts = async ()=>{
            try {
                const response = await getNotes();
                const data = response;
                setNotes(data);
            } catch (error) {   
                console.log("Error",error);
            }
        };
        fetchProducts();

    },[]);
    console.log(notes);
    return [notes,setNotes];
}

export default useNotes