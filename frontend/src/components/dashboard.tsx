import React, { useEffect, useState } from 'react'
import { addStudent, deleteStudent, getAllStudents } from '../api/auth'
import { useParams } from 'react-router-dom'

const dashboard = () => {
    const [name,setName] = useState('')
    const [age,setAge] = useState('')
    const [email,setEmail] = useState('')
    const [student,setStudent] = useState<Array<{name:string,age:string,email:string}>>([])
    const handleStudent = async(e)=>{
        e.preventDefault()
        try {
            const response = await addStudent({name,age,email})
            if(response.success){
                alert(response.message)
            }else{
                alert(response.error)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        const students = async()=>{
            try {
                const fetchedStudents = await getAllStudents()
                
                setStudent(fetchedStudents)

            } catch (error:any) {
                console.log(error.message)
            }
        }
        students()
    },[handleStudent])

    // const id = useParams()
    const handleDelete = async(id:string)=>{
        try {
            if(!id) {
                alert("not valid Id")
            }
            const response = await deleteStudent(id)
            if(response.success){
                alert(response.message)
            }else{
                alert(response.error)
            }
        } catch (error:any) {
            console.log(error.message)
        }
    }

    

  return (
    <div>
        <h1>welcome to dashboard. Create your own users here.</h1>
        <form onSubmit={handleStudent}>
            <input type="name" value={name} placeholder='enter name' onChange={(e)=>setName(e.target.value)}/>
            <input type="text" value={age} placeholder='enter age' onChange={(e)=>setAge(e.target.value)}/>
            <input type="email" value={email} placeholder='enter email' onChange={(e)=>setEmail(e.target.value)}/>
            <button>Add</button>
        </form>

        <h5>Students</h5>
        <table>
            <thead>
            <tr>

            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            </tr>
            </thead>
            <tbody>

           
                {
                    student.map((stu)=>(
                        <>
                        
                        <tr key={stu._id}>
                         <td> {stu.name}</td>
                        <td> {stu.age}</td>
                        <td> {stu.email}</td>
                        
                        
                            <button>edit</button>
                            <button onClick={()=>handleDelete(stu._id)}>delete</button>
                        
                        </tr>
                       
                        </>
                       
                    ))
                }
                 </tbody>
                
        </table>
    </div>
  )
}

export default dashboard