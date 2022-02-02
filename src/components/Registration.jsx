import './../assets/Form.css';
import React from 'react';
// import "dotenv/config";
// import { Pool } from 'pg'


// new Pool({
//     user: 'postgres',
//     password: '57Felasi',
//     host: 'localhost',
//     port: 5432,
//     database:'users',
//   })
//   pool.query('SELECT NOW()', (err, res) => {
//     console.log(err, res)
//     pool.end()
//   })

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

    // createUser() {
    //     const newPerson = db.query('INSERT INTO person (login, password) value ($1, $2) RETURNING *', [this.login, this.password]) 
    //     alert(newPerson)
    // }

    
    render(){
    return (
        <div>
            <h1>Register</h1>
            <form>
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