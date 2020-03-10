import React from "react";
import { withLogic, login } from "./FormLogic.jsx";
import cx from "classnames";
import s from "./Login.scss";
export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", password: "", error: null, isValidPwd: true };
  }

  render() {
    const { name, password, error, isValidPwd } = this.state;
    const { emailValidation, passwordValidation } = this.props;
    return (
      <form
        className="Login"
        onSubmit={e => {
          e.preventDefault();
          // login: not defined yet !
          // login(name, password);
        }}
      >
        <input
          type="text"
          name="name"
          value={name}
          onChange={e => {
            const value = e.target.value;
            this.setState({ name: value });
          }}
        />
        <input
          type="password"
          name="password"
          value={password}
          className={cx({ [s.InputNotValid]: !isValidPwd })}
          onChange={e => {
            const value = e.target.value;
            this.setState(
              { password: value, isValidPwd: passwordValidation(value) },
              () => {
                console.log("pwd change", this.state.isValidPwd);
              }
            );
          }}
        />
        <input type="submit" value="Login" />
      </form>
    );
  }
}

const loginValidtion = {
  email: "emailValidation",
  password: "passwordValidation"
};

//Separating the login validation from the component has a few benefits:
//1. prevents coupling a component to anything unrelated to it!
//2. allows improved testability on the component without need of stubbing imports of login logics;
export default withLogic(loginValidtion)(Login);
