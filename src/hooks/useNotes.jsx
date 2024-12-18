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
                console.log(data);
            } catch (error) {   
                console.log("Error",error);
            }
        };
        fetchProducts();

    },[]);

    return notes;
}

export default useNotes