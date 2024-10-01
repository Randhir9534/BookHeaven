import React, { useEffect, useState } from "react";
import { end_points } from "../../Api/api";
import axiosInstanse from "../../Api/axiosInstance";
import { Link } from "react-router-dom";
import "./Admin.css";
import { IoAdd } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";

const Admin = () => {
  let api = end_points.books;
  console.log("api", api);
  let [state, setState] = useState([]);
  let [searchText, setSearchTerm] = useState("");

  const getAllData = () => {
    axiosInstanse
      .get(api)
      .then((res) => {
        console.log("res", res);
        setState(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  useEffect(() => {
    getAllData();
  }, [setState, api]);

  const deleteItem = (item_id) => {
    axiosInstanse
      .delete(`http://localhost:1000/books/${item_id}`)
      .then((res) => {
        console.log("after delete res", res);
        alert("data deleted successfully");
        getAllData();
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  return (
    <section className="addData">
      <div className="pro_Table">
        <table className="table_menu">
        <tr>
              <button className="addBtn">
                <b>
                  <IoAdd />
                  <Link to={"/add-book"}>Add Books</Link>
                </b>
              </button>
            </tr>
          <tr id="heading">
            
            <td>
              <b>Book Name</b>
              
                <input
                  className="search"
                  type="text"
                  placeholder="search.."
                  onChange={(event) => {
                    setSearchTerm(event.target.value);
                  }}
                />
            
              <hr />
            </td>
            <td>
              <b>Genre</b>
              <hr />
            </td>
            <td>
              
              <b>Operation</b>
              <hr />
            </td>
          </tr>
          
          {state
            .filter((prod) => {
              if (searchText === "") {
                return prod;
              } else if (
                prod.name.toLowerCase().includes(searchText.toLowerCase())
              ) {
                return prod;
              }
            })
            .map((prod) => (
              <tr>
                <td>{prod.name}</td>
                <td>{prod.genre}</td>
                <td>
                  <button className="editBtn bg-primary">
                    <Link to={`product_edit/${prod.id}`}> <i>Edit</i></Link>
                  </button>
                  <button>
                    <Link to={`allbook/${prod.id}`}><i>View more</i></Link>
                  </button>
                  <button
                    className="bg-danger  "
                    onClick={() => {
                      deleteItem(prod.id);
                    }}
                  >
                    <i>Delete</i>
                  </button>
                </td>
              </tr>
            ))}
        </table>
      </div>
    </section>
  );
};

export default Admin;
