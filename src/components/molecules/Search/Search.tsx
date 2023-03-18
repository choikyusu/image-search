import styled from 'styled-components';
import DropdownList from '../../element/DropdownList/DropdownList';
import useSearch from '../../../hooks/useSearch';
import Input from '../../element/Input/Input';

export default function Search() {
  const { inputProps, dropdownListProps } = useSearch();

  return (
    <StyledSeachWrapper>
      <Input {...inputProps} />
      <DropdownList {...dropdownListProps} />
    </StyledSeachWrapper>
  );
}

const StyledSeachWrapper = styled.div`
  position: relative;
  box-sizing: inherit;
  display: inline-flex;
  align-items: center;
`;
