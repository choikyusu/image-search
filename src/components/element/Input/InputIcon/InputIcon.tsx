import styled from 'styled-components';

export default function Icon(props: { children: React.ReactNode }) {
  return <StyledIcon>{props.children}</StyledIcon>;
}

const StyledIcon = styled.i`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  ont-size: 20px;
  color: #555;
`;
