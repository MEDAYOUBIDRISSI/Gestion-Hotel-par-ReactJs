import React, { Component } from 'react'
import './Auth.css'
 import 'bootstrap/dist/css/bootstrap.min.css'
import Axios from 'axios'
import URL from '../../URL_PATH'
// import 'font-awesome/css/font-awesome.min.css'
export default class SignIn extends Component {
    
    constructor(){
        super()
        this.state = {
            email:'',
            password:''
        }
    }

    signUp = (event)=>{
        event.preventDefault()
        Axios.post(URL + 'authenticate',this.state)
        .then(response=>{
            // save token
            // {headers: {Authorization: 'Bearer ' + localStorage.getItem("token") }}
            localStorage.setItem('token',response.data.token);
            this.props.history.push('/welcome')
        })
        .catch(error=>{
            console.log('connexion no authorized !');
            
        })
    }
    inputValueChange = e => this.setState({ [e.target.name]: e.target.value });
    render() {
        const {email,password} = this.state
        return (
           <div className="container">
               <div className="row">
                   <div className="col-xl-10">
                        <div className="card" style={{textAlign:"left"}}>
                                <div className="card-header">
                                    <h1>SIGN IN</h1>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={this.signUp}>
                                       
                                        <div className="form-group mb-1">
                                            <label htmlFor="exampleInputEmail3">Email Adresse</label>
                                            <input type="email" name="email" defaultValue={email} onChange={this.inputValueChange} className="form-control" required id="exampleInputEmail3" aria-describedby="emailHelp" placeholder="Enter votre email"/>
                                        </div>
                                        <div className="form-group mb-1">
                                            <label htmlFor="exampleInputEmail">Mot de passe </label>
                                            <input type="password" name="password" defaultValue={password} onChange={this.inputValueChange} className="form-control" required id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter votre mot de passe"/>
                                        </div>
                                        <button type="submit" className="btn btn-primary">SIGN  IN</button>
                                    </form>
                                </div>
                                <div className="card-footer text-muted">
                                    
                                </div>
                            </div>
                   </div>
               </div>
           </div>
        )
    }
}
