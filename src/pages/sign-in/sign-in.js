import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { userContext } from "../../components/context/user-context";

const SignIn = () => {
  const [formHandler, setFormHandler] = useState({ email: "", password: "" });
  const [authState, setAuthState] = useState({ success: false, error: false });
  const { signIn } = useContext(userContext);

  const loguearse = (e) => {
    e.preventDefault();
    const result = signIn(formHandler);
    result
      ? authState({ ...authState, error: result })
      : setAuthState({ ...authState, success: true });
  };

  return (
    <div className="fondoMain">
      <div className="formContainer">
        <form className="flex flex-col items-center form" onSubmit={loguearse}>
          <label htmlFor="email">Correo Electronico</label>
          <input
            type="text"
            required
            onChange={(e) =>
              setFormHandler({ ...formHandler, email: e.target.value })
            }
            value={formHandler.email}
          />
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            required
            onChange={(e) =>
              setFormHandler({ ...formHandler, password: e.target.value })
            }
            value={formHandler.password}
          />
          <input className="text-white bg-blue-500 w-4/12" type="submit" />
          <p className="text-xs text-red-500">*{authState.error}</p>
        </form>
      </div>
      {authState.success && <Navigate to="/" />}
    </div>
  );
};

export default SignIn;
