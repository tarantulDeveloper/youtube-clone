import React from "react";
import styled from "styled-components";
import { Avatar } from "./Comments";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.span``;

const Comment = () => {
  return (
    <Container>
      <Avatar src="https://64.media.tumblr.com/e91f9cc2e24bdc0e3c759f7542ae0356/27838c7c5b40d628-6c/s250x250_c1/9a3407097c5031d1bb466ef65e5961d625615650.jpg" />
      <Details>
        <Name>
          Jane Doe <Date>1 day ago</Date>
        </Name>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos aut ea
          voluptatem quia, molestiae qui voluptate explicabo veritatis, eum
          doloribus repellendus magni eos optio deleniti.
        </Text>
      </Details>
    </Container>
  );
};

export default Comment;
