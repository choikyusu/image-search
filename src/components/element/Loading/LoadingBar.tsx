import React from 'react';
import styled, { keyframes } from 'styled-components';

const LoadingBarContainer = styled.div`
  width: 100%;
  height: 15px;
  background-color: #f2f2f2;
  border-radius: 5px;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
`;

const progressBarAnimation = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`;

const LoadingBarProgress = styled.div`
  height: 100%;
  background-color: #4caf50;
  animation: ${progressBarAnimation} 0.5s ease-in-out infinite;
`;

export default function LoadingBar() {
  return (
    <LoadingBarContainer>
      <LoadingBarProgress />
    </LoadingBarContainer>
  );
}
