const API = 'https://noteapp-nahucaroseli.koyeb.app';


export const getNotes = async ()=>{
    try {
        const response = await fetch(API+"/notes");
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
        fetch(API+"/",{
            method: 'POST',
            headers:{"Content-type": "application/json;"},
            body: JSON.stringify(newNote)
        })
    } catch (error) {
            console.log(error);
    }
};

export const deleteFromNotes = async (noteId)=>{
    try {
        fetch(API+"/"+noteId,{
            method: 'DELETE',
            headers:{"Content-type": "application/json;"},
        })
    } catch (error) {
        console.log(error);
    }
}


export const archiveExistingNote = async (note)=>{
    try {
        fetch(API+"/"+note.id,{
            method: 'PUT',
            headers:{"Content-type": "application/json;"},
            body: JSON.stringify(note)
        })
    } catch (error) {
        console.log(error);
    }
}