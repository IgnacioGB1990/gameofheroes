import React from "react";
import styled from "styled-components";
import { Spinner } from "react-bootstrap"

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 10000;
  background: rgba(0, 0, 0, 0.5);
  img {
    width: 50px;
  }
`;

export const Loading = () => (
  // <LoadingWrapper>
  //   <img src="https://i.pinimg.com/originals/2b/7c/f2/2b7cf21b42bccf075a5dbe1b9586d477.gif" />
  // </LoadingWrapper>
  <Spinner animation="border" />
);
