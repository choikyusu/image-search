import styled from 'styled-components';

const SkeletonCard = () => {
  return (
    <StyledCard className="card">
      <SkeletonImage />
      <SkeletonText />
      <SkeletonText />
    </StyledCard>
  );
};

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
`;

export const SkeletonImage = styled.div`
  width: 100%;
  height: 200px;
  background-color: #ececec;
  border-radius: 10px 10px 0 0;
`;

const SkeletonText = styled.div`
  width: 100%;
  height: 20px;
  margin: 10px 0;
  background-color: #ececec;
  border-radius: 5px;
`;

export default SkeletonCard;
