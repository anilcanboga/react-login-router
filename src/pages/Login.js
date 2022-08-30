import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [params] = useSearchParams();

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/home");
    }
  }, []);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  //https://ambisomecasesimulationapi-test.reaktortech.com/api/v1/auth/login
  const handleApi = () => {
    console.log({ email, password });
    axios
      .post(
        "https://reqres.in/api/login",
        {
          email: email,
          password: password,
        }
      )
      .then((resp) => {
        console.log(resp.data);
        localStorage.setItem("tokens", JSON.stringify(resp.data.tokens));
        localStorage.setItem("user-info", JSON.stringify(resp.data.user));
        if (params.get("redirect")) {
          navigate(params.get("redirect"));
        } else {
          navigate("/home");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("basarisiz");
      });
  };

  return (
    <form>
      <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
        <div className="form-outline m-4">
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            onChange={handleEmail}
          />
          <label className="form-label">Email address</label>
        </div>

        <div className="form-outline m-4">
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            onChange={handlePassword}
          />

          <label className="form-label">Password</label>
        </div>
        <button
          type="button"
          className="btn btn-primary btn-block"
          onClick={handleApi}
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default Login;
