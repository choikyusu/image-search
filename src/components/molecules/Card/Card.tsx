import styled from 'styled-components';

export default function Card(props: { imageSrc: string; text: string }) {
  const { imageSrc, text } = props;
  return (
    <StyledCard>
      <img referrerPolicy="no-referrer" src={imageSrc} alt="기본 이미지" />
      <h3>{text}</h3>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  width: 300px;
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
`;
