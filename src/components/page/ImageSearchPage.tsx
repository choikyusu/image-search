import styled from 'styled-components';
import Search from '../molecules/Search/Search';
import CardGrid from '../organisms/CardGrid';

export default function ImageSearchPage() {
  return (
    <StyledPage>
      <Search />
      <CardGrid />
    </StyledPage>
  );
}

const StyledPage = styled.div`
  padding: 1em;
`;
