import styled from 'styled-components';
import ButtonRow from '../molecules/ButtonRow/ButtonRow';
import Card from '../molecules/Card/Card';
import useCardGrid from '../../hooks/useCardGrid';
import SkeletonCard from '../molecules/SkeletonCard/SkeletonCard';
import Border from '../element/Border/Border';
import LoadingBar from '../element/Loading/LoadingBar';

export default function CardGrid() {
  const { imageInfoList, loadingType } = useCardGrid();

  const skeletonCardList = Array.from(
    { length: loadingType === 'InitLoading' ? 30 : 0 },
    (_, i) => <SkeletonCard key={i} />,
  );

  return (
    <StyledCardGrid>
      <ButtonRow />
      <Border />
      <StyledCardList>
        {loadingType === 'InitLoading'
          ? skeletonCardList
          : imageInfoList.map((item, index) => {
              return (
                <Card
                  index={index}
                  key={`${item.image_url}${index}`}
                  imageSrc={item.image_url}
                  text={item.display_sitename}
                  thumbnail={item.thumbnail_url}
                />
              );
            })}
        {loadingType === 'ScrollLoading' ? <LoadingBar /> : null}
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
