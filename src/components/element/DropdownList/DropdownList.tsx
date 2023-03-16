import styled from 'styled-components';
import { DELETE_RECENT_KEYWORD } from '../../../constants/text.constant';

export default function DropdownList(props: {
  recentList: KeywordItem[];
  showList: boolean;
  handleClickDelete: () => void;
  handleClickItem: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}) {
  const { recentList, showList, handleClickItem, handleClickDelete } = props;
  return (
    <StyledWrapper show={showList}>
      <StyledDropdownList>
        {recentList.map(item => (
          <StyleItem key={item.key} onClick={handleClickItem}>
            {item.value}
          </StyleItem>
        ))}
        {recentList.length ? (
          <StyleItem onClick={handleClickDelete}>
            {DELETE_RECENT_KEYWORD}
          </StyleItem>
        ) : null}
      </StyledDropdownList>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<{ show: boolean }>`
  display: ${props => (props.show ? 'block' : 'none')};
  position: absolute;
  z-index: 5000;
  top: 35px;
  width: 100%;
  cursor: pointer;
`;

const StyledDropdownList = styled.ul`
  border: 1px solid rgba(34, 36, 38, 0.15);
  color: rgba(0, 0, 0, 0.87);
  border-radius: 0.28571429rem;
`;

const StyleItem = styled.li`
  padding: 0.3em;
  &:hover {
    background-color: #f9fafb;
  }
`;
