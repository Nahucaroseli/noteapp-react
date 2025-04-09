import { createContext, useState } from "react";
import useUsers from "../hooks/useUsers";
import { deleteUserById, getUsers } from "../services/users";

const UsuarioContext = createContext();



function UsuarioContextWrapper(props){

    const [user,setUser] = useState(localStorage.getItem("username"));

    const [users,setUsers] = useUsers();

    const setNewUser = ()=>{
        setUser(localStorage.getItem("username"));
    }

    const logoutUser = ()=>{
        setUser("");
    }


    const deleteUser = async (id)=>{
        const response = await deleteUserById(id);
        if(response){
            const users = await getUsers();
            setUsers(users);
        }
    };

    return (
        <UsuarioContext.Provider value={{user,setNewUser,logoutUser,users,setUsers,deleteUser}}>
            {props.children}

        </UsuarioContext.Provider>
    )
}

export {UsuarioContext,UsuarioContextWrapper}