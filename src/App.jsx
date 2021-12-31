import React, { useState } from "react";

import { Container, DivContainer, Eyes, Row, Hidden } from "./style";

function App() {
  const [hidden, setHidden] = useState("display");
  const [show, setShow] = useState("");
  const [inputs, setInputs] = useState({});

  function shwoPasswords() {
    if (show === "display") {
      setShow("");
      setHidden("display");
      document.forms[0].password.type = "text";
    }
    if (hidden === "display") {
      setHidden("");
      setShow("display");
      document.forms[0].password.type = "password";
    }
  }

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  }
  function preEvent(e) {
    e.preventDefault();

    alert(`email: ${inputs.email}
password: ${inputs.password}`);
  }
  return (
    <Container>
      <DivContainer>
        <div className="content-text">
          <h1>Login Page</h1>
        </div>
        <form action="" onSubmit={preEvent}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input-style"
            value={inputs.email || ""}
            onChange={handleChange}
          />
          <Row>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input-style"
              value={inputs.password || ""}
              onChange={handleChange}
              id="password"
            />
            <div className="column">
              <div id="hidden" className={hidden} onClick={shwoPasswords}>
                <Hidden />
              </div>
              <div id="show" className={show} onClick={shwoPasswords}>
                <Eyes />
              </div>
            </div>
          </Row>
          <div className="input-btn">
            <input type="submit" value="enviar" className="btn" />
          </div>
        </form>

        <div className="remember">
          <a href="/">forgot password</a>
        </div>
      </DivContainer>
    </Container>
  );
}

export default App;
