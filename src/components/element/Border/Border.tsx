import styled from 'styled-components';

export default function Border() {
  return <StyledBorder />;
}

const StyledBorder = styled.div`
  border: 2px solid;
  border-image-slice: 1;
  border-width: 3px;
  border-image-source: linear-gradient(45deg, #fc5c7d, #6a82fb);
  border-radius: 8px;
`;
