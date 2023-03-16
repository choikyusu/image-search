import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';
import Icon from './InputIcon/InputIcon';
import DropdownList from './DropdownList/DropdownList';
import useInput from '../../../hooks/useInput';
import { SEARCH_PLACEHOLDER } from '../../../constants/text.constant';

export default function Input() {
  const {
    inputRef,
    keyword,
    recentList,
    showList,
    handleClickItem,
    handleClickDelete,
    handleInputChange,
    handleInputKeyDown,
    handleInputClick,
  } = useInput();

  return (
    <StyledInputWrapper>
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
      <DropdownList
        showList={showList}
        recentList={recentList}
        handleClickDelete={handleClickDelete}
        handleClickItem={handleClickItem}
      />
    </StyledInputWrapper>
  );
}

const StyledInputWrapper = styled.div`
  position: relative;
  box-sizing: inherit;
  display: inline-flex;
  align-items: center;
`;

const StyledInput = styled.input`
  margin: 0;
  max-width: 100%;
  -webkit-box-flex: 1;
  flex: 1 0 auto;
  outline: 0;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  text-align: left;
  line-height: 1.21428571em;
  padding: 0.67857143em 1em;
  background: #fafafa;
  border: 1px solid rgba(34, 36, 38, 0.15);
  color: rgba(0, 0, 0, 0.87);
  border-radius: 0.28571429rem;
  transition: box-shadow 0.1s ease, border-color 0.1s ease,
    -webkit-box-shadow 0.1s ease;
  box-shadow: none;

  &:active {
    border-color: rgba(0, 0, 0, 0.3);
    color: rgba(0, 0, 0, 0.87);
    box-shadow: none;
  }

  &:focus {
    border-color: #85b7d9;
    color: rgba(0, 0, 0, 0.8);
    box-shadow: none;

    &::placeholder {
      color: rgba(100, 100, 100, 0.8);
    }
  }
  &::placeholder {
    color: rgba(150, 150, 150, 0.8);
  }
`;
