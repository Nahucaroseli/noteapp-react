import { useEffect, useState } from "react";
import { getUsers } from "../services/users";




function useUsers(){
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        const fetchUsers = async ()=>{
            try {
                    const response = await getUsers();
                    const data = response;
                    setUsers(data);
                    console.log(data)
                } catch (error) {   
                    console.log("Error",error);
                }
            };
            fetchUsers();
        
      


    },[]);
    return [users,setUsers];
}

export default useUsers
