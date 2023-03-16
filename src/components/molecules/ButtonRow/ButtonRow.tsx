import styled from 'styled-components';
import { ACCURATE_ORDER, NEWEST_ORDER } from '../../../constants/text.constant';
import Button from '../../element/Button/Button';

export default function ButtonRow(props: {
  order: OrderType;
  handleClickOrder: (type: OrderType) => void;
}) {
  const { order, handleClickOrder } = props;
  return (
    <StyledButtonRow>
      <Button
        isSelected={order === 'ACCURATE'}
        text={ACCURATE_ORDER}
        handleClickOrder={() => {
          handleClickOrder('ACCURATE');
        }}
      />
      <Button
        isSelected={order === 'NEWEST'}
        text={NEWEST_ORDER}
        handleClickOrder={() => {
          handleClickOrder('NEWEST');
        }}
      />
    </StyledButtonRow>
  );
}

const StyledButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
