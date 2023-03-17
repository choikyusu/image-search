import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';
import Icon from './InputIcon/InputIcon';
import { SEARCH_PLACEHOLDER } from '../../../constants/text.constant';

export default function Input(props: {
  keyword: string;
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleInputKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  handleInputClick: () => void;
}) {
  const {
    keyword,
    inputRef,
    handleInputChange,
    handleInputKeyDown,
    handleInputClick,
  } = props;

  return (
    <StyledWrapper>
      <StyledInput
        ref={inputRef}
        placeholder={SEARCH_PLACEHOLDER}
        value={keyword}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        onClick={handleInputClick}
      />
      <Icon>
        <BsSearch />
      </Icon>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  font-size: 16px;
  line-height: 24px;
  padding: 8px 48px 8px 16px;
  border: 1px solid #ddd;
  border-radius: 999px;
  outline: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    border-color: #aaa;
  }

  &:focus {
    border-color: #85b7d9;
    box-shadow: 0px 0px 4px #85b7d9;
  }

  &::placeholder {
    color: #999;
  }
`;
