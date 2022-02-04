import '../assets/Form.css';
import React from 'react';

// import 'quill/dist/quill.show.css';
// import {addPerson} from '../db';

class RegistrPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {login: 'pop', password: ''};

        this.updateLoginValue = this.updateLoginValue.bind(this);
        this.updatePasswordValue = this.updatePasswordValue.bind(this);
      }

    updateLoginValue(evt) {
        this.setState({
            login: evt.target.value
        });
      }

    updatePasswordValue(evt) {
        this.setState({
            password: evt.target.value
        });
      }

    createUser(event) {
        // const newPerson = addPerson({login: this.login, password: this.password})
        // alert(newPerson)
        event.preventDefault();
        console.log('submit')
    }

    
    render(){
    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={this.createUser}>
                <label htmlFor="login">Come up with a login</label>
                <input type="text" id="login" placeholder='Login' value={this.state.login} onChange={this.updateLoginValue}/>

                <label htmlFor="password">Come up with a password</label>
                <input type="password" id="password" placeholder='Password' value={this.state.password} onChange={this.updatePasswordValue}/>

                <input type="submit" />
            </form>
        </div>
    )
    }
}

export default RegistrPage;