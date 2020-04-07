import React,{useState} from "react"

const Login = () =>{
    const [formData,setFormData] = useState({})
    const onChangeHandler = (e) =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const onSubmitHandler = (e) => {
        
        e.preventDefault();
        fetch("http://localhost:4000/users/login", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            localStorage.setItem("user", JSON.stringify(data.user))
            localStorage.setItem("token", JSON.stringify(data.token))
            window.location.href="/"
        })
    }

    console.log(formData)
    return(
        <div className="container col-sm-6 mx-auto">
            <h2 className="my-3">Login </h2>
            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        name="username"
                        id="username"
                        onChange={onChangeHandler}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="text"
                        className="form-control"
                        name="password"
                        id="password"
                        onChange={onChangeHandler}
                    />
                </div>
                <div className="form-group">
                    <button className="form-control btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login;