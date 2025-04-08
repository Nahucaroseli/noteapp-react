import { useEffect, useState } from "react";
import { getNotesTotal } from "../services/notes";


function useNotesTotal(){
    const [total,setTotal] = useState(null);
    useEffect(()=>{
        const fetchTotal = async ()=>{
            try {
                    const response = await getNotesTotal();
                    const data = response;
                    setTotal(data);
                    console.log(data)
                } catch (error) {   
                    console.log("Error",error);
                }
            };
            fetchTotal();
        
      


    },[total]);
    return [total,setTotal];
}

export default useNotesTotal