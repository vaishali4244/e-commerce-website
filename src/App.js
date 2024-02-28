
import { BrowserRouter } from 'react-router-dom';
import Screen from './screens';
import LandingPage from './screens/landingPage';

function App() {
  return (
    <>
      {/* <LandingPage/> */}
    <BrowserRouter>
  
      <Screen />
    </BrowserRouter>
    </>
  );
}

export default App;
