const API = import.meta.env.VITE_API;


export const getNotes = async ()=>{
    const user_id = localStorage.getItem("user_id");
    try {
        const response = await fetch(API+"/users/"+user_id+"/notes");
        const data = response.json();
        return data;
    } catch (error) {
            console.log(error);
    }
};

export const getNotesTotal = async ()=>{
    try {
        const response = await fetch(API+"/notes/total");
        const data = response.json();
        return data;  
    } catch (error) {
            console.log(error);
    }
};

export const getNoteById = async (id)=>{

    try {
        const response = await fetch(API+"/notes/"+id);
        const data = response.json();
        console.log(id);
        return data;
    } catch (error) {
            console.log(error);
    }
};



export const addToNotes = async (newNote)=>{
    try {
        const note = await fetch(API+"/notes",{
            method: 'POST',
            headers:{"Content-type": "application/json;"},
            body: JSON.stringify(newNote)
        })
        return note.json();
    } catch (error) {
            console.log(error);
    }
};

export const deleteFromNotes = async (noteId)=>{
    try {
        fetch(API+"/notes/"+noteId,{
            method: 'DELETE',
            headers:{"Content-type": "application/json;"},
        })
    } catch (error) {
        console.log(error);
    }
}


export const updateNote = async (note)=>{
    try {
        fetch(API+"/notes/"+note.id,{
            method: 'PUT',
            headers:{"Content-type": "application/json;"},
            body: JSON.stringify(note)
        })
    } catch (error) {
        console.log(error);
    }
}
