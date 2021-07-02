import React from "react";
import Navbar from "../components/HomeNavbar";
import styled from "styled-components";
const Parent = styled.div`
  background-color: #daecfc;
  display: flex;
  height: 100vh;
`;
const Nav = styled.div`
  flex: 0.1;
`;
const ComponentWrapper = styled.div`
  flex: 0.9;
`;
const DefaultLayout = ({ children }) => {
  return (
    <Parent>
      <Nav>
        <Navbar />
      </Nav>
      <ComponentWrapper className="page-wrapper">{children}</ComponentWrapper>
    </Parent>
  );
};

export default DefaultLayout;
