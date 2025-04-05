import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router';
import { logIn , signIn} from '../services/users';
import { UsuarioContext } from '../context/usuario.context';

function Authentication() {

    const {setNewUser} = useContext(UsuarioContext);
    const [username, setUserName] = useState("");
    const [password, setPass] = useState("");
    const [usernameRegister, setUserNameRegister] = useState("");
    const [passwordRegister, setPassRegister] = useState("");


    const navigate = useNavigate();


    const submitRegister = async()=>{
      const userRegistered = {
        username:usernameRegister,
        password:passwordRegister
      }

      const user = await signIn(userRegistered);
      const newUser = JSON.parse(JSON.stringify(user));
      if(newUser.username == userRegistered.username){
        localStorage.setItem("username",usernameRegister);
        localStorage.setItem("user_id",newUser.id)
        setNewUser();

        navigate("/")
      }

    }


    const submitLogin = async ()=>{
         const userLogin = {
          username:username,
          password:password
         }
         const user = await logIn(userLogin);
         const userJson = JSON.parse(JSON.stringify(user));
         if(userJson.username == userLogin.username){
            localStorage.setItem("username",username);
            localStorage.setItem("user_id",userJson.id)
            setNewUser();
            navigate("/");
         }
    }



  return (
    <>
    <div className='container flex flex-col pt-32 w-screen gap-y-10 lg:flex-row gap-x-16 justify-right overflow-hidden'>
            <div className='flex flex-col ml-5 gap-y-10 w-full'>
              <h1 className='text-xl font-bold'>Iniciar Sesion</h1>
              <form onSubmit={(e)=>{e.preventDefault(); submitLogin();}} className='flex flex-col p-10 w-11/12 h-100 gap-y-3 rounded-xl border-2 border-black md:w-full'>
                  <h1>Nombre de Usuario</h1>
                  <input value={username} onChange={(e)=>{setUserName(e.target.value)}} className='border border-black p-2' type="text" required={true}/>
                  <h1>Contraseña</h1>
                  <input value={password} onChange={(e)=>{setPass(e.target.value)}} className='border border-black p-2' type="password" required={true}/><button className=' mt-10 border-2 border-black p-2 rounded-lg w-60 text-white bg-black hover:bg-white hover:text-black ease-out duration-300 '>Acceder</button>
              </form>
            </div>
            <div className='bg-black w-5'>

            </div>
            <div className='flex flex-col ml-5 gap-y-10 w-full'>
              <h1 className='text-xl font-bold'>Registrarse</h1>
              <form onSubmit={(e)=> { e.preventDefault(); submitRegister();}} className='flex flex-col p-10 w-11/12 h-100 gap-y-3 rounded-xl border-2 border-black md:w-full'>
                  <h1>Nombre de Usuario</h1>
                  <input  value={usernameRegister} onChange={(e)=>{setUserNameRegister(e.target.value)}} className='border border-black p-2' type="text"/>
                  <h1>Contraseña</h1>
                  <input value={passwordRegister} onChange={(e)=>{setPassRegister(e.target.value)}} className='border border-black p-2' type="password"/><button type='submit' className=' mt-10 border-2 border-black p-2 rounded-lg w-60 text-white bg-black hover:bg-white hover:text-black ease-out duration-300 '>Registrarse</button>
              </form>
            </div>

          </div>
          <div className='mt-40 mb-10'>
          <Link to={"/admin_panel"} className='ml-5 border-2 border-black p-2 rounded-lg w-60 text-white bg-black hover:bg-white hover:text-black ease-out duration-300 '>Loguearse como admin</Link>
          </div>
      
    </>
  )
}

export default Authentication