import React from "react";
import axios from "axios";

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            error: ""
        }
    }

    onLoginComplete = () => {
        this.props.onLoginComplete()
    }

    onLoginSubmit = (e) => {
        e.preventDefault()
        const email = e.target.querySelector('#email').value
        const password = e.target.querySelector('#password').value

        if(!email || !password){
            this.setState({
                error: "error"
            })
        }else{
            axios
                .post(
                    'https://three-points.herokuapp.com/api/login',
                    {
                        username: `${email}`,
                        password: `${password}`
                    })
                .then(res => {
                    if(res.status === 200){
                        localStorage.setItem('token', res.data.token)
                        this.setState({
                            error: ""
                        })
                        this.onLoginComplete()
                    }else{
                        this.setState({
                            error: "error"
                        })
                    }
                })
                .catch(err => {
                    console.log(err)
                    this.setState({
                        error: err
                    })
                })
        }
    }

    render(){
        return(
            <div className="container login-form position-absolute top-50 start-50 translate-middle">
                <form onSubmit={this.onLoginSubmit}>
                    <nav className="navbar navbar-light bg-white my-2">
                        <span className="navbar-brand h1">
                            <i className="bi bi-lightning-charge-fill me-1"></i>
                            three pics
                        </span>
                    </nav>

                    {this.state.error && <div className="alert alert-danger" role="alert">Invalid email or password</div>}

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="text" className="form-control" id="email"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Login</button>
                </form>
            </div>
        )
    }
}

export default Login