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