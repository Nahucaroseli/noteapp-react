const API = import.meta.env.VITE_API;



export const getUsers = async() =>{
    try{
        const response = await fetch(API+"/users")

        return response.json();
    }
    catch(error){
        console.log(error);
    }
}

export const deleteUserById = async (id)=>{
    try {
        const response = await fetch(API+"/users/"+id,{
            method: 'DELETE'
        })
        console.log(response)
        return response.json();

    } catch (error) {
        
    }
}

export const logIn = async (user)=>{
    try {
        const response = await fetch(API+"/users/login",{
            method: 'POST',
            headers:{'Content-type':'application/JSON'},
            body: JSON.stringify(user)
        })
        return response.json();
    } catch (error) {
        console.log(error);
    }
};


export const signIn = async (user)=>{
    try{
        const response = await fetch(API+"/users",{
            method: 'POST',
            headers: {"Content-type":"application/JSON"},
            body: JSON.stringify(user)
        })
        return response.json();
    }
    catch(error){
        console.log(error);
    }
}