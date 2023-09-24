import React, { useEffect, useState } from "react";
import "./Crud.css";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link, useNavigate } from "react-router-dom";

export default function Userdata() {
  const [userdata, setUserdata] = useState(null);
  const navigate = useNavigate(false);

  const Detail = (id) => {
    navigate("/userdetail/" + id);
  };

  const Edit = (id) => {
    navigate("/useredit/" + id);
  };

  const Delete = (id) => {
    if (window.confirm("Do you want to remove?")) {
      fetch("http://localhost:5000/user" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Remove successfully.");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }} 

    useEffect(() => {
      fetch("http://localhost:5000/user").then((result) => {
        return result
          .json()
          .then((resp) => {
            console.log(resp);
            setUserdata(resp);
          })
          .catch((error) => {
            console.log(error.msg);
          });
      });
    }, []);
  
  return (
    <>
      <h1>User data</h1>
      <MDBTable align="middle">
        <MDBTableHead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Actions</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr>
            <td>
              <Link to="/useradd">
                <button className=" p-2 bg-primary bg-gradient rounded-6 mx-2">
                  ADD USER
                </button>
              </Link>
            </td>
          </tr>
          {userdata &&
            userdata.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>
                  <div className="btn-api">
                    <button
                      className=" p-2 bg-secondary bg-gradient rounded-6 mx-2"
                      onClick={() => {
                        Edit(item.id);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className=" p-2 bg-warning bg-gradient rounded-6 mx-2"
                      onClick={() => {
                        Detail(item.id);
                      }}
                    >
                      Detail
                    </button>
                    <button
                      className=" p-2 bg-danger bg-gradient rounded-6 mx-2"
                      onClick={() => {
                        Delete(item.id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </MDBTableBody>
      </MDBTable>
    </>
  );
}
