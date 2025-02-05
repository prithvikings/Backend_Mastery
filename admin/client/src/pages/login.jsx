import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/Auth";


const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { storeTokenInLS } = useAuth();
  const navigate = useNavigate();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response=await fetch("http://localhost:3000/api/auth/login",{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify(user)
      });
      if(response.ok){
        const responseData=await response.json();
        setUser({email:"",password:""});
        // toast.success("Registration Successful");
        storeTokenInLS(responseData.token);
        navigate("/");
        console.log(responseData);

      }else{
        console.log("error inside response","error");
      }
    }catch(err){
      console.error("Error:",err.message);
    }
  };

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image reg-img">
                <img
                  src="/images/register.png"
                  alt="a nurse with a cute look"
                  width="400"
                  height="500"
                />
              </div>
              <div className="registration-form">
                <h1 className="main-heading mb-3">Login form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                      placeholder="Email"
                    />
                  </div>

                  <div>
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                      placeholder="Password"
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Login Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Login;
