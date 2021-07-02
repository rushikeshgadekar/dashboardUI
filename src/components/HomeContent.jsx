import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Down from "../assets/icons/down.svg";
import Right from "../assets/icons/right.svg";
import Left from "../assets/icons/left.svg";
import Stats from "../assets/icons/bar.jpg";
import DebitCard from "../assets/icons/debit.png";
import PayPal from "../assets/icons/paypal.png";
import AddCard from "../assets/icons/addcard.png";
import Button from "@material-ui/core/Button";
import Dots from "../assets/icons/dots.svg";
import Plus from "../assets/icons/bx-plus.svg";

const Parent = styled.div`
  /* width: fit-content; */
`;
const Welcome = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 20px;
  padding: 30px;
  align-items: center;
`;
const Heading = styled.div`
  font-size: 34px;
  font-weight: bold;
  font-family: "Raleway", sans-serif;
  color: #3f4f75;
`;
const Lang = styled.div`
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: 100px;
`;
const Img = styled.img`
  align-items: center;
  height: 20px;
  width: 20px;
  padding: 4px;
`;
const Input = styled.div`
  justify-content: flex-end;
`;
const Sales = styled.div`
  padding: 0 40px;
`;
const SalesNav = styled.div`
  display: flex;
  justify-content: space-between;
  > span {
    font-size: 25px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 500;
    color: #000000b5;
  }
`;
const Calender = styled.div`
  display: flex;
  align-items: center;

  > span {
    font-family: "Raleway";
    font-weight: 800;
  }
  > .left {
    background-color: #c3ddf5;
    height: 20px;
    width: 20px;
    padding: 4px;
    margin-right: 5px;
    border-radius: 7px;
    opacity: 0.6;
  }
`;
const Img2 = styled.img`
  height: 20px;
  width: 20px;
  padding: 4px;
  background-color: white;
  border-radius: 7px;
  margin-left: 5px;
  opacity: 0.8;
`;
const Count = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
  > span {
    font-size: 25px;
    font-weight: bold;
  }
  > .ratio {
    padding: 5px;
    font-size: 15px;
    font-weight: 400;
  }
`;
const Month = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
`;
const SubSales = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Bar = styled.img`
  border-radius: 30px;
  height: 200px;
  width: 500px;
  box-shadow: 0 8px 18px 0 rgba(31, 38, 135, 0.3);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
`;
const Payment = styled.div`
  display: flex;
  padding: 0 20px;
`;
const Methods = styled.div`
  margin-left: 20px;
  padding-right: 50px;
  padding-top: 30px;
  flex: 0.15;
  &span {
    font-size: 10px;
  }
`;
const Title = styled.div`
  font-size: 22px;
`;
const Cards = styled.img`
  height: 8rem;
  margin: 20px;
  margin-top: 30px;
  width: 14rem;
  border-radius: 20px;
  ///
  background-color: #d9e5f0;
  box-shadow: 0 8px 18px 0 rgba(31, 38, 135, 0.3);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  transition: 0.2s ease-out;

  :hover {
    cursor: pointer;
    transform: scale(0.975);
  }
`;
const Timeline = styled.div`
  border-radius: 50px 50px 0 0;
  width: 60rem;
  padding-top: 30px;
  background-color: #f8f0f0;
  box-shadow: 0 8px 18px 0 rgba(31, 38, 135, 0.3);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);

  .calender {
    padding: 10px 40px;
  }
  > .calender > h4 {
    font-weight: lighter;
    font-family: "Railway", serif;
    margin: 0;
    padding: 5px;
  }
`;
const TimeNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  place-items: center;
  padding: 0 30px;
  .heading {
    font-size: 20px;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    padding: 0 10px;
  }
  .btn {
    display: flex;
    align-items: center;
  }
  .btn > img {
    padding: 0 10px;
    cursor: pointer;
  }
`;
const HomeContent = () => {
  return (
    <Parent>
      <Welcome>
        <Heading>Welcome to the Dashboard</Heading>
        <Lang>
          English
          <Img src={Down} alt="" />
        </Lang>
        <Input>
          <TextField
            id="standard-search"
            label="search"
            variant="outlined"
            type="search"
          />
        </Input>
      </Welcome>
      <Sales>
        <SalesNav>
          <span>Sales</span>
          <Calender>
            <img className="left" src={Left} alt="" />
            <span>December, 2020</span>
            <Img2 src={Right} alt="" />
          </Calender>
        </SalesNav>
        <SubSales>
          <div>
            <Count>
              <span>$21,800/=</span>
              <span className="ratio">+18% than last month</span>
            </Count>
            <Month>
              <span>&#11044; Last Month</span>
              <span>&#11044; Running Month</span>
            </Month>
          </div>
          <Bar src={Stats} alt="" />
        </SubSales>
      </Sales>
      <Payment>
        <Methods>
          <Title>Payment Methods</Title>
          <span>Last Modified</span>
          <span>25 Jan 2020</span>
        </Methods>
        <Cards src={DebitCard} alt=""></Cards>
        <Cards src={PayPal} alt=""></Cards>
        <Cards src={AddCard} alt=""></Cards>
      </Payment>
      <Timeline>
        <TimeNav>
          <div className="heading">Project Timeline</div>
          <div className="btn">
            <Button variant="contained" color="primary">
              <img src={Plus} alt="" /> Add Projects
            </Button>
            <img src={Dots} alt="" />
          </div>
        </TimeNav>
        <div className="calender">
          <h4>Monday</h4>
          <h4>Tuesday</h4>
          <h4>Wednesday</h4>
        </div>
      </Timeline>
    </Parent>
  );
};

export default HomeContent;
