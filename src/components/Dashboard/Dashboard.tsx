import styled from 'styled-components';
import { useSelect } from '../../store/hooks';
import { DesktopChannels } from './Channels/DesktopChannels/DesktopChannels';
import { Feed } from './Feed/Feed';
import { GuideTour } from './GuideTour/GuideTour';
import { Header } from './Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Create } from './Create/Create';
import { MobileChannels } from './Channels/MobileChannels/MobileChannels';
import { useMediaQuery } from '../../hooks';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 1rem;

  @media (max-width: 30em) {
    padding: 0;
  }
`;

export function Dashboard() {
  const { app } = useSelect();
  const isMobile = useMediaQuery('(max-width: 600px)');

  return (
    <Router>
      <Wrapper>
        <Header />
        {/* DesktopChannels and MobileChannels make two unnecessary requests to fetch channels */}
        {!isMobile && <DesktopChannels />}
        <Routes>
          {/* <Route path="/">
            
            <Feed />
            {app.firstTime && <GuideTour />}
          </Route> */}
          <Route path="/create" element={<Create />} />
          <Route path="/" element={
            <>
              {isMobile && <MobileChannels />}
            </>
          } />
        </Routes>
      </Wrapper>
    </Router>
  )
}