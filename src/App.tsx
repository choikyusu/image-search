import styled from 'styled-components';
import ImageSearchPage from './components/page/ImageSearchPage';
import 'react-toastify/dist/ReactToastify.css';
import useImageApi from './hooks/useImageApi';
import { useSearchState } from './provider/SearchProvider';
import { Loading } from './components/element/Loading/Loading';
import './style.css';

function App() {
  const { apiLoading } = useImageApi();
  const { page } = useSearchState();
  return (
    <StyledApp>
      <ImageSearchPage />
      <Loading isLoading={apiLoading && page === 1} />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  text-align: center;
`;

export default App;
