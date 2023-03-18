import styled from 'styled-components';
import ImageSearchPage from './components/page/ImageSearchPage';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';
import { checkAuthKey } from './auth/auth';

function App() {
  checkAuthKey();

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
