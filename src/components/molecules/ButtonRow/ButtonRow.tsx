import styled from 'styled-components';
import { ACCURATE_ORDER, NEWEST_ORDER } from '../../../constants/text.constant';
import Button from '../../element/Button/Button';

export default function ButtonRow() {
  return (
    <StyledButtonRow>
      <Button id="ACCURATE" text={ACCURATE_ORDER} />
      <Button id="NEWEST" text={NEWEST_ORDER} />
    </StyledButtonRow>
  );
}

const StyledButtonRow = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
