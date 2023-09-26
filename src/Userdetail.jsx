import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Userdetail = () => {
  const [userdata, setUserdata] = useState({});
  const { userid } = useParams();

  useEffect(() => {
    fetch("http://localhost:5000/user/" + userid).then((result) => {
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
      <h1>userdetail</h1>
      <div>
        {userdata && (
          <>
            <h1>username = {userdata.name}</h1>
            <h1>useremail = {userdata.email}</h1>
            <h1>userpassword = {userdata.password}</h1>
          </>
        )}
      </div>
    </>
  );
};

export default Userdetail;
