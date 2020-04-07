import React, {useState} from "react"
import {Redirect} from "react-router-dom"

const Register = () =>{
    const[formData, setFormData] = useState({})
    const[result, setResult] = useState(false)
    const onChangeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    // console.log(formData)

    const onSubmitHandler = () => {
        fetch("http://localhost:4000/users", {
            method: "POST",
            body: JSON.stringify(formData),
            headers:{
                "Content-Type": "application/json"
            }         
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let element = document.getElementById("alert-message")
            let timeout = () =>{
                setTimeout(()=>{
                    element.classList.toggle('d-none')
                }, 3500)
            }
            if(data.status === 200){
                element.classList.remove("alert-danger")
                element.classList.toggle("alert-success")
                element.innerHTML = data.message
                timeout()
                clearTimeout(timeout)
                setFormData({})
                setResult(true)
            }else{
                element.classList.remove("alert-success")
                element.classList.toggle("alert-danger")
                element.innerHTML = data.message
                timeout()
                clearTimeout(timeout)
            }
            
        })
    }
    return(
        <div className="container col-sm-6 mx-auto">
            <h2 className="my-3">Register</h2>
            <div className="alert" id="alert-message"></div>
            <div className="form-group">
                <label htmlFor="fullname">Fullname</label>
                <input type="text" className="form-control" name="fullname" id="fullname" onChange={onChangeHandler}/>
            </div>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" name="username" id="username" onChange={onChangeHandler}/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" name="password" id="password" onChange={onChangeHandler}/>
            </div>
            <div className="form-group">
                <label htmlFor="password2">Confirm Password</label>
                <input type="password" className="form-control" name="password2" id="password2" onChange={onChangeHandler}/>
            </div>
            <button className="btn btn-success" onClick={()=>onSubmitHandler()}>Register</button>
            {result? <Redirect to="/" /> : null}
        </div>
    )
}

export default Register;