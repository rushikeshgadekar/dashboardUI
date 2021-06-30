import React from "react";
import Boy from "../assets/icons/boy.png";
import styled from "styled-components";
import Ficon from "../assets/icons/logo.jpg";
import Button from "@material-ui/core/Button";
import Plus from "../assets/icons/bx-plus.svg";
import Dots from "../assets/icons/dots.svg";
import Folder from "../assets/icons/folder.svg";
import Folder2 from "../assets/icons/folder2.svg";
import Pdf from "../assets/icons/pdf.svg";
import Image from "../assets/icons/img.svg";
const Parent = styled.div`
  height: 100vh;
  margin-left: -10px;
  padding-right: 30px;
`;
const Top = styled.div`
  display: flex;
  padding-top: 20px;
  margin-bottom: -23px;

  .help {
    box-sizing: border-box;
    margin-left: -20px;
    position: relative;
    width: 200px;
    font-size: 20px;
    padding: 20px;
    background-color: white;
    height: 80px;
    border-radius: 25px;
    margin: auto;
    display: grid;
    place-items: center;
    ::after {
      height: 30px;
      width: 30px;
      top: 50%;
      right: -23px;
      transform: rotate(45deg) translateX(-50%);
      content: "";
      position: absolute;
      /* border-right: 2px solid red;
      border-top: 2px solid red; */
      background-color: white;
      margin-left: -20px;
    }
  }

  .help > span {
    font-size: 15px;
    color: blue;
  }
`;
const Img = styled.img`
  height: 200px;
  width: 150px;
  margin-top: -30px;
  margin-left: 30px;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
`;
const Main = styled.div`
  display: flex;

  padding: 0 20px;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  .title {
    font-size: 25px;
    padding: 20px;
    font-weight: 500;
  }
  .title > span {
    font-size: 15px;
    font-weight: normal;
    font-family: "Railway", sans-serif;
  }
`;
const F = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 15px;
`;
const Nav = styled.div`
  padding: 15px;
  max-height: 30px;
  display: flex;
  justify-content: space-between;
  .heading {
    font-size: 20px;
    font-family: "Railway", serif;
  }
  .btn {
    display: flex;
    gap: 10px;
  }
`;
const Cards = styled.div`
  padding: 15px;
  display: grid;
  padding-bottom: 20px;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 15px;
  place-items: center;
  .card {
    min-height: 50px;
    width: 120px;
    padding: 15px;
    border-radius: 20px;
    background-color: #d9e5f0;
    box-shadow: 0 8px 10px 0 rgba(31, 38, 135, 0.3);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);

    transition: ease-in 0.15s;
    :hover {
      cursor: pointer;
      transform: scale(1.02);
    }
  }
  .heading {
    font-size: 14px;
    font-family: "Railway", sans-serif;
  }
  .heading > span {
    font-size: 10px;
    font-weight: lighter;
  }
`;
const Icon = styled.img``;
const SNav = styled.div`
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  .heading {
    font-size: 20px;
    font-family: "Railway", serif;
  }
`;
const SubMain = styled.div`
  border-radius: 40px 40px 0 0;
  background-color: white;
`;
const Media = styled.div`
  font-size: 30px;
  padding: 30px;
  text-align: center;
  font-family: "Railway", sans-serif;
`;
const FileManager = () => {
  return (
    <Parent>
      <Top>
        <div className="help">
          Need help? <br />
          <span>24/7 Support Centre </span>
        </div>
        <Img src={Boy} alt="" />
      </Top>
      <SubMain>
        <Main>
          <F src={Ficon} alt="" />
          <div className="title">
            Project Peace <br />
            <span>23 Robert st MA 382. City Vill</span>
          </div>
        </Main>
        <hr />
        <Nav>
          <div className="heading">File Manager</div>
          <div className="btn">
            <Button variant="contained" color="primary">
              <img src={Plus} alt="" /> Add
            </Button>
            <img src={Dots} alt="" />
          </div>
        </Nav>
        <Cards>
          <div className="card" style={{ backgroundColor: "#f0ecfc" }}>
            <Icon src={Folder} />
            <div className="heading">
              My Folder
              <br />
              <span>created Jun 23, 2019</span>
            </div>
          </div>

          <div className="card" style={{ backgroundColor: "#ffece4" }}>
            <Icon src={Pdf} />
            <div className="heading">
              House Aggrement Paper.pdf <br />
              <span>created Jun 23, 2019</span>
            </div>
          </div>
          <div className="card" style={{ backgroundColor: "#e8fcfc" }}>
            <Icon src={Image} />
            <div className="heading">
              Image.jpg <br />
              <span>created Jun 23, 2019</span>
            </div>
          </div>
          <div className="card" style={{ backgroundColor: "#fff4f4" }}>
            <Icon src={Folder2} />
            <div className="heading">
              Project Review and Ratings <br />
              <span>created Jun 23, 2019</span>
            </div>
          </div>
        </Cards>
        <SNav>
          <div className="heading"> Media</div>
          <img src={Dots} alt="" />
        </SNav>
        <Media>
          <div className="soon">Coming Soon...</div>
        </Media>
      </SubMain>
    </Parent>
  );
};

export default FileManager;
