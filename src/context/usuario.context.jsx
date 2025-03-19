import { createContext, useState } from "react";

const UsuarioContext = createContext();



function UsuarioContextWrapper(props){

    const [user,setUser] = useState(localStorage.getItem("username"));

    const setNewUser = ()=>{
        setUser(localStorage.getItem("username"));
    }

    const logoutUser = ()=>{
        setUser("");
    }


    return (
        <UsuarioContext.Provider value={{user,setNewUser,logoutUser}}>
            {props.children}

        </UsuarioContext.Provider>
    )
}

export {UsuarioContext,UsuarioContextWrapper}