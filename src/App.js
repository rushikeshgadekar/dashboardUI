import React from "react";
import HomeNavbar from "./components/HomeNavbar";
import HomeContent from "./components/HomeContent";
import FileManager from "./components/FileManager";
import styled from "styled-components";
const Parent = styled.div`
  background-color: #daecfc;
  display: flex;
  height: 100vh;
`;
const Nav = styled.div`
  flex: 0.13;
  background-color: transparent;
`;
const Content = styled.div`
  flex: 0.6;
  background-color: transparent;
`;
const File = styled.div`
  flex: 0.3;
  background-color: transparent;
`;

const App = () => {
  return (
    <Parent>
      <Nav>
        <HomeNavbar />
      </Nav>
      <Content>
        <HomeContent />
      </Content>
      <File>
        <FileManager />
      </File>
    </Parent>
  );
};

export default App;
