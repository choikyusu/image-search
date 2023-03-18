import styled from 'styled-components';
import { DELETE_RECENT_KEYWORD } from '../../../constants/text.constant';
import { FaTimes } from 'react-icons/fa';

export default function DropdownList(props: {
  recentList: string[];
  showList: boolean;
  handleClickDeleteAll: () => void;
  handleClickDeleteItem: (item: string) => void;
  handleClickItem: (item: string) => void;
}) {
  const {
    recentList,
    showList,
    handleClickItem,
    handleClickDeleteAll,
    handleClickDeleteItem,
  } = props;
  return (
    <StyledWrapper show={showList}>
      <StyledDropdownList>
        {recentList.map(item => (
          <StyleItem key={item}>
            <div onClick={() => handleClickItem(item)} aria-hidden>
              {item}
            </div>
            <DeleteButton onClick={() => handleClickDeleteItem(item)}>
              <FaTimes />
            </DeleteButton>
          </StyleItem>
        ))}
        {recentList.length ? (
          <StyleItem onClick={handleClickDeleteAll} deleteButton>
            {DELETE_RECENT_KEYWORD}
          </StyleItem>
        ) : null}
      </StyledDropdownList>
    </StyledWrapper>
  );
}
const StyledWrapper = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: absolute;
  z-index: 5000;
  top: 42px;
  width: 89%;
  left: 6%;
  cursor: pointer;
  background: #ffffff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`;

const StyledDropdownList = styled.ul`
  border: 1px solid rgba(34, 36, 38, 0.15);
  color: rgba(0, 0, 0, 0.87);
  border-radius: 0.28571429rem;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`;

const StyleItem = styled.li<{ deleteButton?: boolean }>`
  position: relative;
  display: flex;
  justify-content: space-between;

  padding: 0.3em;
  &:hover {
    background-color: #f9fafb;
  }
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:not(:first-child) {
    border-top: 1px solid rgba(34, 36, 38, 0.15);
  }
  &:last-child {
    border-bottom-left-radius: 0.28571429rem;
    border-bottom-right-radius: 0.28571429rem;
  }

  ${({ deleteButton }) =>
    deleteButton &&
    `
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: #db2828;
    border: none;
    border-radius: 0.28571429rem;
    font-weight: 700;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: #ff4646;
      cursor: pointer;
    }
  `}

  > div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 85%;
    flex-grow: 1;
  }
`;

const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  color: #db2828;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #ff4646;
  }
`;
