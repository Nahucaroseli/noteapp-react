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