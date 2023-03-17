import styled from 'styled-components';
import { useSearchState } from '../../provider/SearchProvider';
import NoResult from '../element/NoResult/NoResult';
import Search from '../molecules/Search/Search';
import CardGrid from '../organisms/CardGrid';

export default function ImageSearchPage() {
  const { imageInfoList } = useSearchState();

  return (
    <StyledPage>
      <Search />
      <CardGrid />
      {!imageInfoList.length && <NoResult />}
    </StyledPage>
  );
}

const StyledPage = styled.div`
  padding: 1em;
`;
