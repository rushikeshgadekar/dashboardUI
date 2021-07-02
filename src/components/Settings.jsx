import React from "react";
import styled from "styled-components";
const Parent = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  font-size: 80px;
  font-family: "Railway", sans-serif;
`;
const Settings = () => {
  return <Parent>Settings Section</Parent>;
};

export default Settings;
