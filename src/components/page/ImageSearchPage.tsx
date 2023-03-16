import { useState } from 'react';
import styled from 'styled-components';
import Search from '../molecules/Search/Search';
import CardGrid from '../organisms/CardGrid';

export default function ImageSearchPage() {
  const [order, setOrder] = useState<OrderType>('ACCURATE');

  const handleClickOrder = (type: OrderType) => {
    setOrder(type);
  };

  return (
    <StyledPage>
      <Search />
      <CardGrid order={order} handleClickOrder={handleClickOrder} />
    </StyledPage>
  );
}

const StyledPage = styled.div``;
