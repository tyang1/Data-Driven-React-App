import React from 'react';
import login from '../utils/login';
class Login extends React.Component {

    constructor(props) {
      super(props);
      this.state = { name: '', password: '', error: null }
    }
  
    render() {
      const { name, password, error } = this.state;
      return (
        <form className="Login"
              onSubmit={(e) => {
                e.preventDefault(); 
                // login: not defined yet !
                login(name, password);
        }}>
  
          <input type="text" name="name" value={ name }
                 onChange={e => {
                   const value = e.target.value;
                   this.setState({ name: value });
                 }}  />			
          <input type="password" name="password" value={ password }
                 onChange={e => {
                   const value = e.target.value;
                   this.setState({ password: value });
                 }}  />
          <input type="submit" value="Login" />
        </form>
      );		
    }
  };

export default Login;