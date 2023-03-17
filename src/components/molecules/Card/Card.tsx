import React from 'react';
import styled from 'styled-components';
import Image from '../../element/Image/Image';

function Card(props: {
  index: number;
  imageSrc: string;
  text: string;
  thumbnail: string;
}) {
  const { index, imageSrc, text, thumbnail } = props;

  return (
    <StyledCard className="card">
      <Image imageSrc={imageSrc} thumbnail={thumbnail} />
      <h3>{text}</h3>
    </StyledCard>
  );
}

export default React.memo(Card);

const StyledCard = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.15);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .lazy-load-image-background {
    display: block !important;
  }
`;
