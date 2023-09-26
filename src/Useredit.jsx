import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

const Useredit = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(false);
  const [errorname, setErrorname] = useState("");
  const [erroremail, setErroremail] = useState("");
  const [errorpassword, setErrorpassword] = useState("");
  const { userid } = useParams();

  useEffect(() => {
    fetch("http://localhost:5000/user/" + userid).then((result) => {
      return result
        .json()
        .then((resp) => {
          console.log(resp);
          setId(resp.id);
          setName(resp.name);
          setEmail(resp.email);
          setPassword(resp.password);
        })
        .catch((error) => {
          console.log(error.msg);
        });
    });
  }, []);

  function savedata(e) {
    // const data = { id, name, email, password }
    // console.log(name, email, password);
    e.preventDefault();

    if (name === "") {
      setErrorname("enter your name");
    } else if (email === "") {
      setErroremail("enter your email");
    } else if (password === "") {
      setErrorpassword("enter your password");
    } else {
      const data = { id, name, email, password };

      fetch("http://localhost:5000/user" + userid, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((result) => {
        // console.log(result);
        result.json().then((resp) => {
          // console.log(resp);
          localStorage.setItem("id", id + 1);
          navigate("/userdata");
        });
      });
    }
  }

  return (
    <>
      <h1>useredit</h1>
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol sm="6">
            <div className="d-flex flex-row ps-5 pt-5">
              <MDBIcon
                fas
                icon="crow fa-3x me-3"
                style={{ color: "#709085" }}
              />
              <span className="h1 fw-bold mb-0">Logo</span>
            </div>

            <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
              <h3
                className="fw-normal mb-3 ps-5 pb-3"
                style={{ letterSpacing: "1px" }}
              >
                Log in
              </h3>
              {/* <form onSubmit={handlesubmit}> */}
              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                label="Id"
                disabled
                required
                value={id}
                onChange={(e) => setId(e.target.value)}
                id="formControlLg"
                type="text"
                size="lg"
              />
              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                label="Name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
                id="formControlLg"
                type="text"
                size="lg"
              />
              {errorname && (
                <div style={{ color: "red" }} className="mx-5 my-2">
                  {errorname}
                </div>
              )}

              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                label="Email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                id="formControlLg"
                type="email"
                size="lg"
              />
              {erroremail && (
                <div style={{ color: "red" }} className="mx-5 my-2">
                  {erroremail}
                </div>
              )}

              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                label="Password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                id="formControlLg"
                type="password"
                size="lg"
              />
              {errorpassword && (
                <div style={{ color: "red" }} className="mx-5 my-2">
                  {errorpassword}
                </div>
              )}
              <MDBBtn
                className="mb-4 px-5 mx-5 w-100"
                onClick={savedata}
                color="info"
                size="lg"
              >
                Add User
              </MDBBtn>
              {/* <p className="small mb-5 pb-lg-3 ms-5"><a class="text-muted" href="#!">Forgot password?</a></p> */}
              {/* <p className='ms-5'>Don't have an account? <a href="#!" class="link-info">Register here</a></p> */}
              {/* </form> */}
            </div>
          </MDBCol>

          <MDBCol sm="6" className="d-none d-sm-block px-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
              alt="Login image"
              className="w-50"
              style={{ objectFit: "cover", objectPosition: "left" }}
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Useredit;
