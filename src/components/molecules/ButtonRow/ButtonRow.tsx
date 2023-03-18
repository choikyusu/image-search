import React from 'react';
import styled from 'styled-components';
import { ACCURATE_ORDER, NEWEST_ORDER } from '../../../constants/text.constant';
import Button from '../../element/Button/Button';

function ButtonRow() {
  return (
    <StyledButtonRow>
      <Button id="accuracy" text={ACCURATE_ORDER} />
      <Button id="recency" text={NEWEST_ORDER} />
    </StyledButtonRow>
  );
}

export default React.memo(ButtonRow);

const StyledButtonRow = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
