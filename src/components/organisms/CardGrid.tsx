import styled from 'styled-components';
import ButtonRow from '../molecules/ButtonRow/ButtonRow';
import Card from '../molecules/Card/Card';
import useCardGrid from '../../hooks/useCardGrid';
import SkeletonCard from '../molecules/SkeletonCard/SkeletonCard';
import Border from '../element/Border/Border';

export default function CardGrid() {
  const { imageInfoList, initLoading } = useCardGrid();

  const skeletonCardList = Array.from({ length: 30 }, (_, i) => (
    <SkeletonCard key={i} />
  ));

  return (
    <StyledCardGrid>
      <ButtonRow />
      <Border />
      <StyledCardList>
        {initLoading
          ? skeletonCardList
          : imageInfoList.map(item => (
              <Card
                key={item.image_url}
                imageSrc={item.image_url}
                text={item.display_sitename}
              />
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
  flex-direction: column;
`;

const StyledCardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
`;
