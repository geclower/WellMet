import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Gallery.css";
import InfoTag from "./InfoTag";
import Menu from "./Menu";

function Random() {
  const [art, setArt] = useState({});

  const fetchData = async () => {
    let random = Math.floor(Math.random() * 487121);

    try {
        const result = await axios(
          `https://collectionapi.metmuseum.org/public/collection/v1/objects/${random}`
        );
    
    
        if (result?.data?.isPublicDomain) {
            setArt(result.data);
        } else {
            fetchData();
        }
    } catch (error) {
        console.log(error)
        fetchData()
    }

  };

  useEffect(() => {

      fetchData();
      return () => {};

  }, []);

  return (
    <div className="Gallery">
      <h1 className="title">{art.department}</h1>
      <div className="picture">
        <img src={art.primaryImage} alt="" />
      </div>
      <div className="infoTag">
        <InfoTag art={art} />
      </div>
      <div className="buttons">
        <button onClick={fetchData} className="button">
          {" "}
          Random{" "}
        </button>
      </div>
      <div className="nav">
        <Menu />
      </div>
    </div>
  );
}

export default Random;
