import styled from 'styled-components';

export default function Button(props: { text: string }) {
  const { text } = props;
  return <StyledButton>{text}</StyledButton>;
}

const StyledButton = styled.button`
  cursor: pointer;
  display: inline-block;
  min-height: 1em;
  outline: 0;
  border: #e0e1e2 1px solid;
  vertical-align: baseline;
  background: #ffffff none;
  margin: 0 0.25em 0 0;
  padding: 0.78571429em 1.5em 0.78571429em;
  text-transform: none;
  text-shadow: none;
  font-weight: 700;
  font-size: 0.7em;
  line-height: 1em;
  font-style: normal;
  text-align: center;
  text-decoration: none;
  border-radius: 2rem;
  user-select: none;
  transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease,
    box-shadow 0.1s ease, background 0.1s ease, -webkit-box-shadow 0.1s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background-image: none;
    box-shadow: 0 0 0 1px transparent inset,
      0 0 0 0 rgba(34, 36, 38, 0.15) inset;
    color: rgba(0, 0, 0, 0.8);
  }
`;
