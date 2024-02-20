import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Gallery.css";
import Picture from "./Picture";
import InfoTag from "./InfoTag";
import Menu from "./Menu";

function Gallery() {
  const [artArray, setArtArray] = useState([]);
  const [index, setIndex] = useState(0);
  const [art, setArt] = useState({});

  const { department_id } = useParams();

  const getList = async () => {
    const res = await axios(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=${department_id}`
    );

    let info = res.data.objectIDs;
    setArtArray(info);

    // let object = artArray[0];
    // console.log(object);
    // const result = await axios(
    //   `https://collectionapi.metmuseum.org/public/collection/v1/objects/${object}`
    // );

    // setArt(result.data);
    // console.log(art.isPublicDomain, art.title);
  };

  useEffect(() => {
    getList();
  }, []);

  const nextClick = async () => {
    setIndex((prev) => prev + 1);

    const result = await axios(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${artArray[index]}`
    );

    if (result.data.isPublicDomain) {
      setArt(result.data);
    } else {
      nextClick();
    }
  };

  const previousClick = async () => {
    setIndex((prev) => prev - 1);

    const result = await axios(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${artArray[index]}`
    );

    if (result.data.isPublicDomain) {
      setArt(result.data);
    } else {
      previousClick();
    }
  };
  console.log(art);

  return (
    <div className="Gallery">
      <h1 className="title">{art.department}</h1>
      <div className="picture">
      <img src={art.primaryImage} alt="" />
      </div>
      <InfoTag className="infoTag" />
      <div className="buttons">
        <button onClick={nextClick}> Next </button>
        <button onClick={previousClick}> Previous </button>
      </div>
      <Menu className="nav" />
    </div>
  );
}

export default Gallery;
