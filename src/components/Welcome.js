import React from 'react'

export default class Welcome extends React.Component {
    
    componentWillMount(){
        if(localStorage.getItem('token') == null){
            this.props.history.push('/signin');
        }
    }
    logOut = () => {localStorage.removeItem('token'); this.props.history.push('/signin');}
    render(){
        return (
            <div>
                    <button onClick={this.logOut}>Déconnexion</button>
                    <h1>WELCOME TO YOUR APPLICATION</h1>
            </div>
        )
    }
}
