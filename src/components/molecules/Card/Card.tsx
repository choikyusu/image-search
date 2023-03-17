import styled from 'styled-components';
import Image from '../../element/Image/Image';

export default function Card(props: { imageSrc: string; text: string }) {
  const { imageSrc, text } = props;

  return (
    <StyledCard className="card">
      <Image imageSrc={imageSrc} />
      <h3>{text}</h3>
    </StyledCard>
  );
}

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
