import styled from 'styled-components';
import { useSelect } from '../../store/hooks';
import { DesktopChannels } from './Channels/DesktopChannels/DesktopChannels';
import { Chat } from './Chat/Chat';
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
  
  // console.log(window.navigator.onLine);
  // window.addEventListener('online', () => console.log('We online.'))
  // window.addEventListener('offline', () => console.log('We offline.'))

  return (
    <Router>
      <Wrapper>
        <Header />
        {/* DesktopChannels and MobileChannels make two unnecessary requests to fetch channels */}
        {!isMobile && <DesktopChannels />}
        <Routes>
          <Route path="/:channelId" element={<Chat />}/>
          <Route path="/create" element={<Create />} />
          <Route path="/" element={
            <>
              {/* {app.firstTime && <GuideTour />} */}
              {isMobile && <MobileChannels />}
              {/* <Feed /> */}
              <h2>No chat selected.</h2>
            </>
          } />
        </Routes>
      </Wrapper>
    </Router>
  )
}