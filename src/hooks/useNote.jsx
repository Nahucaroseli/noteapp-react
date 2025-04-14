import React, { useEffect, useState} from 'react'
import { getNoteById, getNotesByUser } from '../services/notes';

function useNote(id) {

    const [note,setNote] = useState(null);
    
    useEffect(()=>{
        const fetchProducts = async ()=>{
            try {
                const response = await getNoteById(id);
                const data = response;
                setNote(data);
            } catch (error) {   
                console.log("Error",error);
            }
        };
        fetchProducts();

    },[]);
    return note;
}

export default useNote