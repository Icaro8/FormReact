import React, { useState } from "react";

import { Container, DivContainer } from "./style";

function App() {
  const [inputs, setInputs] = useState({});

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
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input-style"
            value={inputs.password || ""}
            onChange={handleChange}
          />
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
