import styled from 'styled-components';
import DropdownList from '../../element/DropdownList/DropdownList';
import useSearch from '../../../hooks/useSearch';
import Input from '../../element/Input/Input';

export default function Search() {
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
  } = useSearch();

  return (
    <StyledSeachWrapper>
      <Input
        inputRef={inputRef}
        keyword={keyword}
        handleInputChange={handleInputChange}
        handleInputKeyDown={handleInputKeyDown}
        handleInputClick={handleInputClick}
      />
      <DropdownList
        showList={showList}
        recentList={recentList}
        handleClickDelete={handleClickDelete}
        handleClickItem={handleClickItem}
      />
    </StyledSeachWrapper>
  );
}

const StyledSeachWrapper = styled.div`
  position: relative;
  box-sizing: inherit;
  display: inline-flex;
  align-items: center;
`;
