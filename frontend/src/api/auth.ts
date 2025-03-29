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

export const addStudent  = async(studentData:any)=>{
    try {
        const response  = await api.post('/addStudent',studentData)
        return response.data
    } catch (error:any) {
        console.log(error.message)
    }
}

export const getAllStudents = async()=>{
    try {
        const response = await api.get('/getAllStudents')
        return response.data.student
    } catch (error:any) {
        console.log(error.message)
    }
}

export const deleteStudent = async(id:string)=>{
    try {
        const response = await api.delete(`/deleteStudent/${id}`)
        console.log('res',response)
        return response.data
    } catch (error:any) {
        console.log(error.message)
    }
}


