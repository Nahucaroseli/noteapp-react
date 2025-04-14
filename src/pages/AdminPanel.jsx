import React, { useContext, useEffect, useState } from 'react'
import { UsuarioContext } from '../context/usuario.context';
import { NoteContext } from '../context/note.context';
import { getNotes, getNotesTotal } from '../services/notes';


function AdminPanel() {

    const {users,deleteUser} = useContext(UsuarioContext);
    const {totalNotes,setTotalNotes} = useContext(NoteContext)
    const [option,setOption] = useState("Dashboard")
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [userNotes,setUserNotes] = useState([]);



    useEffect(()=>{
      let fetchNotes = async ()=>{
        let notes = await getNotes();

        setUserNotes(notes);
      }
      fetchNotes();

    },[users,totalNotes])


    const deleteUserById = async (id)=>{
      deleteUser(id);
      const notes = await getNotesTotal();
      setTotalNotes(notes);
  }


    return (
      <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">

        <aside
          className={` top-0 left-0 fixed md:static w-64 bg-black text-white transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 transition-transform duration-200 z-50 p-4 space-y-6`}
        >
          <h2 className="text-2xl font-bold text-center mb-4">Admin Panel</h2>
          <nav className="flex flex-col space-y-2">
            <a href="#" onClick={(e)=>{setOption("Dashboard"); e.preventDefault();}} className="hover:bg-gray-700 rounded px-3 py-2">
              Dashboard
            </a>
            <a href="#" className="hover:bg-gray-700 rounded px-3 py-2">
              Usuarios
            </a>
            <a href="#" onClick={(e)=>{setOption("Notes"); e.preventDefault();}} className="hover:bg-gray-700 rounded px-3 py-2">
              Notas
            </a>
            <a href="#" className="hover:bg-gray-700 rounded px-3 py-2">
              Configuracion
            </a>
            <a href="/login" className="hover:bg-gray-700 rounded px-3 py-2">
              Salir
            </a>
          </nav>
        </aside>
  

        {sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
          />
        )}
  

        <div className="flex-1 flex flex-col">

          <header className="bg-white shadow p-4 flex justify-between items-center sticky md:static top-0 z-30">
            <div className="flex items-center gap-4">
              <button
                className="md:hidden"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <h1 className="text-xl font-semibold">Dashboard</h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-600 hidden sm:inline">Admin</span>
              <img
                src="https://i.pravatar.cc/40"
                alt="avatar"
                className="w-10 h-10 rounded-full"
              />
            </div>
          </header>

          <main className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <Card title="Usuarios" value={users.length} />
              <Card title="Notas" value={totalNotes} />
            </div>
            {option == "Dashboard" && 
            <div className="bg-white p-4 shadow rounded-xl overflow-x-auto">
            <h2 className="text-xl font-semibold mb-4">Usuarios</h2>
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b">
                  <th className="py-2">N°</th>
                  <th className="py-2">Nombre de Usuario</th>
                </tr>
              </thead>
              <tbody>
              {users.map((user) => (
                    <TableRow key={user.id} id={user.id} username={user.username} onDelete={deleteUserById} />
              ))}
              </tbody>
            </table>
          </div>}
          <div className='flex flex-col flex-wrap gap-x-6 gap-y-6'>
              {option == "Notes" && userNotes.length != 0 &&
              
              users.map((user) =>(
                <div key={user.id} className='flex flex-col'>
                <h1 className='text-2xl'>{user.username}</h1>
                <div  className='flex flex-row gap-x-5 flex-wrap gap-y-5'>
  
                  {userNotes.filter(note => note.usuario.id == user.id)
                  .map((note) =>(
                    <div key={note.id} className='mt-5 flex flex-col bg-orange-300 w-60 h-60 gap-y-4 text-black rounded-2xl ease-out duration-300 hover:shadow hover:shadow-xl cursor-pointer'>
                      <h1 className='text-xl ml-3 mt-4 font-bold'>{note.title}</h1>
                      <h1 className='text-xl ml-3 w-48 h-60 overflow-hidden ... font-bold'>{note.description}</h1>
                    </div> 
                  ))}
                  </div>
                </div>
                
              ))
              }
              {userNotes.length == 0 && option == "Notes" &&
                  <h1>No hay notas</h1>
              }
          </div>
          </main>
        </div>
      </div>
    );
  };
  
  const Card = ({ title, value }) => (
    <div className="bg-white p-4 shadow rounded-xl">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-gray-500 text-sm">{value}</p>
    </div>
  );
  
  const TableRow = ({ id, username, onDelete }) => (
    <tr className="border-b hover:bg-gray-50">
      <td className="py-2">{id}</td>
      <td className="py-2">{username}</td>
      <td><button onClick={(e)=>{e.preventDefault(); onDelete(id) }} className='hover:text-red-500'>Eliminar</button></td>
    </tr>
  );




export default AdminPanel