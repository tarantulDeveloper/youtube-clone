import React from "react";
import { Button as MyButton } from "./Menu";
import styled from "styled-components";
import { MdOutlineAccountCircle } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0px 20px;
  justify-content: flex-end;
  position: relative;
`;

const Search = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  width: 40%;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  color: ${({ theme }) => theme.text};
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  width: 100%;
  color: ${({ theme }) => theme.text};
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search" />
          <AiOutlineSearch />
        </Search>
        <Link to="/signin" style={{ textDecoration: "none" }}>
          <MyButton>
            <MdOutlineAccountCircle />
            SIGN IN
          </MyButton>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
