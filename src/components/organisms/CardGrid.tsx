import styled from 'styled-components';
import { useSearchState } from '../../provider/SearchProvider';
import ButtonRow from '../molecules/ButtonRow/ButtonRow';
import Card from '../molecules/Card/Card';

export default function CardGrid() {
  const { imageInfoList } = useSearchState();
  return (
    <StyledCardGrid>
      <ButtonRow />
      <StyledCardList>
        {imageInfoList.map(item => (
          <Card imageSrc={item.image_url} text={item.display_sitename} />
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
