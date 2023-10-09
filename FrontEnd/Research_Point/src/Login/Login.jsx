import { useState } from 'react'
function Login() {
    const [user, setuser] = useState({ email: "", password: "" })
    const handleUser = (e) => {
        const { name, value } = e.target;
        setuser({
            ...user,
            [name]: value
        })
    }
    return (
        <div>
            <div className='container d-flex justify-content-center align-items-center flex-column' style={{ minHeight: "100vh" }}>
                <h2>Login</h2>
                <form className='p-4' style={{ width: "70%", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} action='/user/register' method='post'>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" name='email' value={user.email} onChange={handleUser} className="form-control" autoComplete='on' id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" name='password' value={user.password} onChange={handleUser} autoComplete='on' id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary" >Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
