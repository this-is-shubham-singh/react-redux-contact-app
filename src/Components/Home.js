import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const contacts = useSelector((state) => state);

  const dispatch = useDispatch();

  const deletecontact = (id) => {
    dispatch({ type: "deletecontact", payload: id });
    alert("Contact deleted successfully!!");
  };

  return (
    <div className="home-container">
      <div className="home-button-main-div">
        <div className="home-button-div">
          <button className="home-button">
            <Link className="home-button-link" to="/add">
              Add contact
            </Link>
          </button>
        </div>
      </div>

      <div className="home-table-div">
        <table className="table-container">
          <thead className="table-head-thead">
            <tr className="table-heading-row">
              <th className="table-heading" scope="col">
                #
              </th>
              <th className="table-heading" scope="col">
                Name
              </th>
              <th className="table-heading" scope="col">
                Email
              </th>
              <th className="table-heading" scope="col">
                Number
              </th>
              <th className="table-heading" scope="col">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, id) => (
              <tr key={id} className="table-row">
                <td className="table-row-data">{id + 1}</td>
                <td className="table-row-data">{contact.name}</td>
                <td className="table-row-data">{contact.email}</td>
                <td className="table-row-data">{contact.number}</td>
                <td className="table-row-data home-centering">
                  <Link className="home-edit-button" to={`edit/${contact.id}`}>
                    Edit
                  </Link>
                  <button
                    type="button"
                    onClick={() => deletecontact(contact.id)}
                    className="home-delete-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
