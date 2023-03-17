import styled, { css } from 'styled-components';

const SkeletonCard = () => {
  return (
    <CardWrapper>
      <ImageSkeleton />
      <ContentWrapper>
        <TextSkeleton />
        <TextSkeleton />
      </ContentWrapper>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  width: 250px;
  height: 350px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

const shimmer = css`
  0% {
    background-position: -500px 0;
  }
  100% {
    background-position: 500px 0;
  }
`;

const ImageSkeleton = styled.div`
  width: 100%;
  height: 200px;
  margin-bottom: 10px;
  background: linear-gradient(to right, #ececec 0%, #f7f7f7 50%, #ececec 100%);
  background-size: 1000px 200px;
  animation: ${shimmer} 1s linear infinite;
  border-radius: 10px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextSkeleton = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 5px;
  background: linear-gradient(to right, #ececec 0%, #f7f7f7 50%, #ececec 100%);
  background-size: 1000px 20px;
  animation: ${shimmer} 1s linear infinite;
  border-radius: 5px;
`;

export default SkeletonCard;
