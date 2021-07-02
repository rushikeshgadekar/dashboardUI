import React from "react";
import styled from "styled-components";
import makeHome from "../assets/icons/makeHome.svg";
import Home from "../assets/icons/home.svg";
import Files from "../assets/icons/files.svg";
import Clients from "../assets/icons/clients.svg";
import Listings from "../assets/icons/listings.svg";
import Settings from "../assets/icons/settings.svg";
import { NavLink } from "react-router-dom";

const NavbarLink = styled(NavLink)`
  text-decoration: none;
  color: black;
`;
const Parent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 130px;
`;
const Img = styled.img`
  height: 30px;
  width: 30px;
  padding: 8px;
`;
const Logo = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 130px;
  width: 130px;
`;
const Heading = styled.h3`
  font-size: 20px;
  padding: 0;
  margin: 0;
`;
const HomeButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
`;
const Button = styled.button`
  margin: 10px;
  padding: 20px;
  height: 100px;
  width: 100px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //glass-morphism
  /* background: rgba(255, 255, 255, 0.25); */
  background-color: #d9e5f0;
  box-shadow: 0 8px 18px 0 rgba(31, 38, 135, 0.3);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: ease-in 0.15s;
  :hover {
    cursor: pointer;
    transform: scale(0.98);
  }
  &:focus {
    background-color: white;
    cursor: pointer;
    transform: scale(0.95);

    border: 1px solid rgba(255, 255, 255, 0.301);
    color: #1026b8;
  }
`;
const BtnName = styled.div`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 18px;
`;

const btn_array = [
  { id: 1, name: "Home", logo: Home, link: "/" },
  { id: 2, name: "Files", logo: Files, link: "/files" },
  { id: 3, name: "Listings", logo: Listings, link: "/listing" },
  { id: 4, name: "Clients", logo: Clients, link: "/clients" },
  { id: 5, name: "Settings", logo: Settings, link: "/settings" },
];
const handleClick = (e) => {
  console.log(e.target.getAttribute("id"));
};
const HomeNavbar = () => {
  return (
    <Parent>
      <Logo>
        <HomeButton>
          <Img alt=" " src={makeHome} />
        </HomeButton>
        <Heading> MakeHome</Heading>
      </Logo>
      {btn_array.map((button, index) => (
        <NavbarLink to={button.link}>
          <Button
            key={index}
            id={button.id}
            value={button.id}
            onClick={handleClick}
          >
            <Img src={button.logo} alt="" />
            <BtnName>{button.name}</BtnName>
          </Button>
        </NavbarLink>
      ))}
    </Parent>
  );
};

export default HomeNavbar;
