import React from "react";
import styled from "styled-components";
import logo from "../images/logo.png";
import { AiOutlineHome, AiOutlineSetting } from "react-icons/ai";
import {
  MdOutlineExplore,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineHistory,
  MdOutlineLibraryMusic,
  MdOutlineSportsBasketball,
  MdOutlineHelpOutline,
  MdOutlineAccountCircle,
} from "react-icons/md";
import {
  RiMovie2Line,
  RiLiveLine,
  RiNewspaperLine,
  RiGamepadLine,
  RiFlagLine,
} from "react-icons/ri";
import { BsLightningCharge } from "react-icons/bs";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
`;

const Wrapper = styled.div`
  padding: 12px 10px 0px 10px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0px;
  gap: 20px;
  font-size: 15px;
  cursor: pointer;
  padding: 3px 0px;
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Hr = styled.hr`
  margin: 5px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div`
  padding: 3px 0px;
`;

export const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 5px;
`;

const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={logo} />
            TarantulaTube
          </Logo>
        </Link>
        <Item>
          <AiOutlineHome />
          Home
        </Item>
        <Link to="/trends" style={{ textDecoration: "none", color: "inherit" }}>
          <Item>
            <MdOutlineExplore />
            Explore
          </Item>
        </Link>
        <Link
          to="/subscriptions"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Item>
            <MdOutlineSubscriptions />
            Subsriptions
          </Item>
        </Link>
        <Hr />
        <Item>
          <MdOutlineVideoLibrary />
          Library
        </Item>
        <Item>
          <MdOutlineHistory />
          History
        </Item>
        <Hr />
        <Login>
          Sign in to like videos, comment and subscribe.
          <Link to="/signin" style={{ textDecoration: "none" }}>
            <Button style={{ marginTop: 5 }}>
              <MdOutlineAccountCircle />
              SIGN IN
            </Button>
          </Link>
        </Login>
        <Hr />
        <Title>Best of Tarantula</Title>
        <Item>
          <MdOutlineLibraryMusic />
          Music
        </Item>
        <Item>
          <MdOutlineSportsBasketball />
          Sports
        </Item>
        <Item>
          <RiGamepadLine />
          Gaming
        </Item>
        <Item>
          <RiMovie2Line />
          Movies
        </Item>
        <Item>
          <RiNewspaperLine />
          News
        </Item>
        <Item>
          <RiLiveLine />
          Live
        </Item>
        <Hr />
        <Item>
          <AiOutlineSetting />
          Settings
        </Item>
        <Item>
          <RiFlagLine />
          Report
        </Item>
        <Item>
          <MdOutlineHelpOutline />
          Help
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <BsLightningCharge />
          {darkMode ? "Light" : "Dark"} Mode
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
