import api from "./api";

export const register = async(userData:any)=>{

    try {
        console.log("request sending",userData)
        const response = await api.post('/register',userData)
        console.log(response.data)
        if(!response.data.success){
            console.log("failed")
        }
        return response.data
    } catch (error:any) {
        console.log(error.message)
    }
}

