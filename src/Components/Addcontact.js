import React, { useState } from "react";
import "./Addcontact.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Addcontact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");

  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handlesubmit = (event) => {
    event.preventDefault();

    const checkemail = contacts.find((contact) => {
      if (contact.email === email) {
        return email;
      }
    });

    if (checkemail) {
      return alert("This email already Exists!");
    }

    const checknumber = contacts.find((contact) => {
      if (contact.number === parseInt(number)) {
        return number;
      }
    });

    if (checknumber) {
      return alert("This number already Exists!");
    }

    if (!email || !number || !name) {
      return alert("please fill in all fields!");
    }

    const data = {
      id: contacts[contacts.length - 1].id + 1,
      name,
      email,
      number,
    };

    dispatch({ type: "addcontact", payload: data });
    alert("student added successfully!!");
    navigate("/");
  };

  return (
    <div className="add-main-div">
      <div className="add-heading-div">
        <h1 className="add-heading">Add Student</h1>
      </div>

      <form onSubmit={handlesubmit} className="add-input-div">
        <input
          value={name}
          type="text"
          placeholder="Name"
          className="add-input"
          onChange={(event) => setname(event.target.value)}
        />
        <input
          value={email}
          type="email"
          placeholder="Email"
          className="add-input"
          onChange={(event) => setemail(event.target.value)}
        />
        <input
          value={number}
          type="number"
          placeholder="Phone number"
          className="add-input"
          onChange={(event) => setnumber(event.target.value)}
        />
        <input type="submit" value="Add student" className="add-input-submit" />
      </form>
    </div>
  );
};

export default Addcontact;
