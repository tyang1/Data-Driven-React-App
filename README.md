RGR.js
# Data-Driven-React-App
Built with React, GraphQL, and Relay

What you will need also:
Static typing: "typescript": "^3.8.3",
Database: "mongodb": "^3.5.3",
Test: "jest": "^25.1.0",

This is a simple link sharing app that intends to help developers learn/understand more about implementing Relay with console logs and comments. In addition, applying the redux-like logic to your React app for form validation. Why redux-like? well, in my opinion, it improves testability by decoupling the logic as dependency from the view. Dependencies could themselves be asynchronous, which means by the time component is mounted and interactable, dependencies need to be fully instantiated/available. If we can establish a "Flow of Logic" (like redux's connect, to inject/provide data to the view), it can lead to better separation of concerns and thus easier to reason the behavior of the application!
```
import React from "react";
import { withLogic, login } from "./FormLogic.jsx";
import cx from "classnames";
import s from "./Login.scss";
import { withRouter } from "react-router-dom";
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
          this.props.history.push("/HomePage");
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
//3. Be able to add the logic at runtime and get the logic in an easy way
export default withLogic(loginValidtion)(withRouter(Login));

```
# References:
Flow Logic: 
https://blog.scottlogic.com/2017/02/28/relogic.html

Relay Knowledge:
https://code-cartoons.com/a-cartoon-intro-to-facebook-s-relay-part-4-aef7d819a8ed
https://relay.dev/docs/en/videos


