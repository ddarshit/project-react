import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Register() {
  const [justifyActive, setJustifyActive] = useState("tab2");
  const [name ,setName] = useState("")
  const [email ,setEmail] = useState("")
  const [password ,setPassword] = useState("")
  const navigate = useNavigate();

  const register = () => {
    
    let data = {name , password , email , role : 2}
    fetch("http://localhost:5000/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((result) => {
        // console.log(result);
        result.json().then((resp) => {
          console.log(resp);
        //   localStorage.setItem("id", id + 1);
          navigate("/login");
        });
      });
  }

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };


  return (
    <>
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
        <MDBTabs
          pills
          justify
          className="mb-3 d-flex flex-row justify-content-between"
        >
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleJustifyClick("tab2")}
              active={justifyActive === "tab2"}
            >
              Register
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>

        <MDBTabsContent>
          <MDBTabsPane show={justifyActive === "tab2"}>
            <div className="text-center mb-3">
              <p>Sign un with:</p>

              <div
                className="d-flex justify-content-between mx-auto"
                style={{ width: "40%" }}
              >
                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-1"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="facebook-f" size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-1"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="twitter" size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-1"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="google" size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-1"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="github" size="sm" />
                </MDBBtn>
              </div>

              <p className="text-center mt-3">or:</p>
            </div>

            <MDBInput wrapperClass="mb-4" value={name} onChange={(e) => setName(e.target.value)} label="Name" id="form1" type="text" />
            {/* <MDBInput
              wrapperClass="mb-4"
              label="Username"
              id="form1"
              type="text"
            /> */}
            <MDBInput
              wrapperClass="mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              id="form1"
              type="email"
            />
            <MDBInput
              wrapperClass="mb-4"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              label="Password"
              id="form1"
              type="password"
            />

            <div className="d-flex justify-content-center mb-4">
              <MDBCheckbox
                name="flexCheck"
                id="flexCheckDefault"
                label="I have read and agree to the terms"
              />
            </div>

            <MDBBtn className="mb-4 w-100" onClick={register}>Register</MDBBtn>
          </MDBTabsPane>
        </MDBTabsContent>
      </MDBContainer>
    </>
  );
}

export default Register;
