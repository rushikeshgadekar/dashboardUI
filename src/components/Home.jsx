import React from "react";
import HomeContent from "../components/HomeContent";
import FileManager from "../components/FileManager";
import styled from "styled-components";
const Parent = styled.div`
  background-color: #daecfc;
  display: flex;
  height: 100vh;
`;

const Content = styled.div`
  flex: 0.7;
  background-color: transparent;
`;
const File = styled.div`
  flex: 0.3;
  background-color: transparent;
`;

const Home = () => {
  return (
    <Parent>
      <Content>
        <HomeContent />
      </Content>
      <File>
        <FileManager />
      </File>
    </Parent>
  );
};

export default Home;
