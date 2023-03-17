import styled, { css } from 'styled-components';
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

const selectedAnimation = css`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const hoverAnimation = css`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-0.1em);
  }
  100% {
    transform: translateY(0);
  }
`;

const StyledButton = styled.button<{ isSelected: boolean }>`
  display: inline-block;
  outline: none;
  border: none;
  background-color: ${({ isSelected }) => (isSelected ? '#252525' : '#ffffff')};
  color: ${({ isSelected }) => (isSelected ? '#ffffff' : '#252525')};
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  border-radius: 0.5rem;
  transition: all 0.2s ease-in-out;
  box-shadow: ${({ isSelected }) => {
    if (isSelected) return '0 0.5rem 1rem rgba(0, 0, 0, 0.15)';
    return 'none';
  }};

  &:hover {
    animation: ${hoverAnimation} 0.5s;
    background-color: #252525;
    color: #ffffff;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.15);
  }

  ${({ isSelected }) => isSelected && `animation: ${selectedAnimation} 1s;`}
`;
