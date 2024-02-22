import React from "react";
import "./Departments.css";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Departments() {
  const [departments, setDepartments] = useState([]);

  const getDpts = async () => {

    const res = await axios(
      `https://collectionapi.metmuseum.org/public/collection/v1/departments`
    );

    const dptList = res.data.departments
    console.log(dptList)

    setDepartments(dptList)
  };

  useEffect(() => {
    getDpts(); 
    return () => {};
  }, []);

  return (
    <div className="Dpts">
      <h2 className="header2">Departments</h2>
      <ul className="List">
        {
            departments.map(({ departmentId, displayName }) => 
                <Link to={`/gallery-walk/${departmentId}`} className="dptList">
                    <li key={departmentId}>{displayName}</li>
                </Link>
            )
        }
      </ul>
      <Menu />
    </div>
  );
}

export default Departments;
