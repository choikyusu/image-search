import styled from 'styled-components';
import ImageSearchPage from './components/page/ImageSearchPage';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';

function App() {
  return (
    <StyledApp>
      <ImageSearchPage />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  text-align: center;
`;

export default App;
