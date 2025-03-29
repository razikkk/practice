import React, { useState } from 'react'
import { register } from '../api/auth'
import { useNavigate } from 'react-router-dom'

const user = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()
    const handleRegister = async(e)=>{
        console.log('halo')
        e.preventDefault()
        try {
            console.log("before",{name,email,password})
            const response = await register({name,email,password}) 
        if(response.success){
            alert(response.message)
            navigate('/dashboard')
        }else{
            console.log(response.error)
        }
        } catch (error:any) {
            console.log(error.message)
        }
        
    }
  return (
    <div>
        <form onSubmit={handleRegister}>
            <input type="name" value={name} placeholder='enter name' onChange={(e)=>setName(e.target.value)}/>
            <input type="email" value={email} placeholder='enter email' onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" value={password} placeholder='enter password' onChange={(e)=>setPassword(e.target.value)} />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default user