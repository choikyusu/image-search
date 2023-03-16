import styled from 'styled-components';

export default function Card(props: { imageSrc: string; text: string }) {
  const { imageSrc, text } = props;
  return (
    <StyledCard>
      <img src={imageSrc} alt="기본 이미지" />
      <div>{text}</div>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  max-width: 100%;
  position: relative;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  width: 290px;
  min-height: 0;
  background: #fff;
  padding: 0;
  border: none;
  border-radius: 0.28571429rem;
  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
`;
