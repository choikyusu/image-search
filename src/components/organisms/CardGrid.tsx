import styled from 'styled-components';
import ButtonRow from '../molecules/ButtonRow/ButtonRow';
import Card from '../molecules/Card/Card';

export default function CardGrid(props: {
  order: OrderType;
  handleClickOrder: (type: OrderType) => void;
}) {
  const { order, handleClickOrder } = props;
  return (
    <StyledCardGrid>
      <ButtonRow order={order} handleClickOrder={handleClickOrder} />
      <Card imageSrc="/images/default.png" text="test" />
    </StyledCardGrid>
  );
}

const StyledCardGrid = styled.div`
  z-index: 1;
  padding: 1em;
`;
