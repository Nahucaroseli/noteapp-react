const API = import.meta.env.VITE_API_LOCAL;

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