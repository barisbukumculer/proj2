import React, { useState, FormEvent } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { encrypt } from "../util";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  // /fnc login
  const fncLogin = (evt: FormEvent) => {
    evt.preventDefault();

    if (email !== " " && password !== "") {
      if (email === "baris@mail.com" && password === "12345") {
        // geçici => tarayıcı açık oldugu sürece yaşayan geçici data
        // sessionStorage.setItem("user", email);
        // 1. parametre => key
        // 2. parametre => value
        const item = {
          email: email,
          password: password,
          name: "Barış Bükümcüler",
          phone: "5367767111",
        };
        var stItem = JSON.stringify(item);
        stItem=encrypt(stItem)
        localStorage.setItem("user", stItem);
        navigate("/dashboard");
      } else {
        setErrorMessage("Kullanıcı adı yada şifre hatalı.");
      }
    } else {
      setErrorMessage("Lütfen tüm alanları doldurunuz!");
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-4 col-xxl-4"></div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-4 col-xxl-4">
          <form onSubmit={fncLogin}>
            <h2>Admin Login</h2>
            {errorMessage !== "" && (
              <div
                className="alert alert-danger alert-dismissible fade show"
                role="alert"
              >
                <strong>Hey!</strong>
                {errorMessage}
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setErrorMessage("")}
                ></button>
              </div>
            )}
            <div className="mb-3">
              <input
                required
                onChange={(evt) => setEmail(evt.target.value)}
                className="form-control"
                type="email"
                placeholder="E-Mail"
              />
              <br />
              <input
                required
                onChange={(evt) => setPassword(evt.target.value)}
                className="form-control"
                type="password"
                placeholder="Şifre"
              />
            </div>
            <button className="btn btn-success">Send</button>
          </form>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-4 col-xxl-4"></div>
      </div>
    </>
  );
}

export default Login;
