import styled from 'styled-components';
import useButton from '../../../hooks/useButton';

export default function Button(props: { id: OrderType; text: string }) {
  const { id, text } = props;
  const { handleClickItem, isSelected } = useButton({ id });

  return (
    <StyledButton id={id} onClick={handleClickItem} isSelected={isSelected}>
      {text}
    </StyledButton>
  );
}

const StyledButton = styled.button<{ isSelected: boolean }>`
  color: ${props => (props.isSelected ? '#000000' : '#686868')};
  cursor: pointer;
  display: inline-block;
  min-height: 1em;
  outline: 0;
  border: #e0e1e2 1px solid;
  vertical-align: baseline;
  background: ${props => (props.isSelected ? '#e8e8e8' : '#ffffff')};
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
`;
