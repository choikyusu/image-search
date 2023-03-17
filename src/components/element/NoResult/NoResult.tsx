import styled from 'styled-components';
import { NO_RESULT } from '../../../constants/text.constant';

export default function NoResult() {
  return <StyledNoResults>{NO_RESULT}</StyledNoResults>;
}

const StyledNoResults = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  font-size: 1.2rem;
  color: #6c757d;
`;
