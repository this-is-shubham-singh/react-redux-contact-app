import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./Editcontact.css";

const Editcontact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");

  const { id } = useParams();

  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const currentcontact = contacts.find((contact) => {
    if (contact.id === parseInt(id)) {
      return id;
    }
  });

  useEffect(() => {
    if (currentcontact) {
      setname(currentcontact.name);
      setemail(currentcontact.email);
      setnumber(currentcontact.number);
    }
  }, [currentcontact]);

  const handlesubmit = (event) => {
    event.preventDefault();

    const checkemail = contacts.find((contact) => {
      if (contact.id !== parseInt(id) && contact.email === email) {
        return email;
      }
    });

    if (checkemail) {
      return alert("This email already Exists!");
    }

    const checknumber = contacts.find((contact) => {
      if (contact.id !== parseInt(id) && contact.number === parseInt(number)) {
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
      id: parseInt(id),
      name,
      email,
      number,
    };

    dispatch({ type: "updatecontact", payload: data });
    alert("student updated successfully!!");
    navigate("/");
  };

  return (
    <div className="add-main-div">
      {currentcontact ? (
        <>
          <div className="add-heading-div">
            <h1 className="add-heading">Edit Student {id}</h1>
          </div>
          <form onSubmit={handlesubmit}>
            <div className="add-input-div">
              <input
                type="text"
                placeholder="Name"
                className="add-input"
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
              <input
                type="Email"
                placeholder="Email"
                className="add-input"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
              <input
                type="Phone number"
                placeholder="Phone number"
                className="add-input"
                value={number}
                onChange={(e) => setnumber(e.target.value)}
              />
              <div>
                <input
                  type="submit"
                  value="Update student"
                  className="add-input-submit"
                />
                <button className="add-input-submit edit-button">
                  <Link className="edit-link" to="/">
                    Cancel
                  </Link>
                </button>
              </div>
            </div>
          </form>
        </>
      ) : (
        <h1>student with with id {id} does not exist</h1>
      )}
    </div>
  );
};

export default Editcontact;
