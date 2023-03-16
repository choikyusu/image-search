import styled from 'styled-components';

export default function Icon(props: { children: React.ReactNode }) {
  return <StyledIcon>{props.children}</StyledIcon>;
}

const StyledIcon = styled.i`
  position: absolute;
  right: 2px;
  color: rgba(100, 100, 100, 0.8);
`;
