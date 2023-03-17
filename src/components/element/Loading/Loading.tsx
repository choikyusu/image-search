import styled from 'styled-components';

const StyledLoading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingSpinner = styled.div`
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top: 3px solid #ffffff;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;
  margin-right: 8px;
`;

const LoadingText = styled.span`
  color: white;
`;

export const Loading = (props: { isLoading: boolean }) => {
  if (!props.isLoading) return null;

  return (
    <StyledLoading>
      <LoadingSpinner />
      <LoadingText>Loading...</LoadingText>
    </StyledLoading>
  );
};
