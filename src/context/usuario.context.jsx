import { createContext, useState } from "react";
import useUsers from "../hooks/useUsers";

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


    return (
        <UsuarioContext.Provider value={{user,setNewUser,logoutUser,users,setUsers}}>
            {props.children}

        </UsuarioContext.Provider>
    )
}

export {UsuarioContext,UsuarioContextWrapper}