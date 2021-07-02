import styled from "styled-components";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./User.css";
import FarmerDetails from "./FarmerDetails";
const Parent = styled.div`
  display: grid;
  padding: 20px;
  place-items: center;
  font-family: "Railway", sans-serif;
`;
const Listing = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://farmer-registration-portal.herokuapp.com/showall`)
      .then((res) => {
        const data = res.data;
        setUserData(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Parent>
      <div className="show-user">
        <h2 className="std-heading">Farmer Listings</h2>
        <FarmerDetails data={userData} />
      </div>
    </Parent>
  );
};

export default Listing;
