import { useState } from 'react';
import styled from 'styled-components';
import ButtonRow from '../molecules/ButtonRow/ButtonRow';
import Card from '../molecules/Card/Card';

export default function CardGrid(props: {
  order: OrderType;
  handleClickOrder: (type: OrderType) => void;
}) {
  const { order, handleClickOrder } = props;
  const [list, setList] = useState<{ imageSrc: string; text: string }[]>([
    { imageSrc: '/images/default.png', text: 'test' },
    { imageSrc: '/images/default.png', text: 'test' },
    { imageSrc: '/images/default.png', text: 'test' },
    { imageSrc: '/images/default.png', text: 'test' },
    { imageSrc: '/images/default.png', text: 'test' },
    { imageSrc: '/images/default.png', text: 'test' },
    { imageSrc: '/images/default.png', text: 'test' },
    { imageSrc: '/images/default.png', text: 'test' },
  ]);
  return (
    <StyledCardGrid>
      <ButtonRow order={order} handleClickOrder={handleClickOrder} />
      <StyledCardList>
        {list.map(item => (
          <Card imageSrc={item.imageSrc} text={item.text} />
        ))}
      </StyledCardList>
    </StyledCardGrid>
  );
}

const StyledCardGrid = styled.div`
  z-index: 1;
  padding: 1em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1em;
`;

const StyledCardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
`;
