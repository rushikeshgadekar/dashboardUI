import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
const Parent = styled.div`
  font-family: "Railway", sans-serif;
  text-align: center;
  padding: 50px;
  display: flex;
  gap: 50px;
`;
const Manage = styled.div`
  display: grid;
  place-items: center;
  padding: 20px;
  gap: 20px;
`;
const Data = styled.div`
  display: flex;
  flex-direction: column;
  .data {
    padding: 2px;
    color: blue;
    display: flex;
    justify-content: flex-start;
  }
`;
const Clients = () => {
  const [client, setClient] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value);
    setClient(e.target.value);
  };
  const [arr, setArr] = useState([]);
  const addClient = (e) => {
    setArr([...arr, client]);
    setClient("");
  };
  return (
    <Parent>
      <form noValidate autoComplete="off">
        <h3>Add client</h3>
        <Manage>
          <TextField
            id="standard-basic"
            value={client}
            onChange={handleChange}
            label="Standard"
          />
          <Button onClick={addClient} variant="contained" color="secondary">
            Add
          </Button>
        </Manage>
      </form>
      <Data>
        <h3>Clients </h3>
        {arr.map((obj, index) => {
          return (
            <div className="data">
              <span key={index}>{obj}</span>
            </div>
          );
        })}
      </Data>
    </Parent>
  );
};

export default Clients;
