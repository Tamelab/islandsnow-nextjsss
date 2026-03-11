import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './style.css';

import TopMenu from '@/components/TopMenu';
import IslandSnowLogo from '@/components/IslandSnowLogo';
import MiddleMenu from '@/components/MiddleMenu';
import FullWidthImage from '@/components/FullWidthImage';
import FooterMenu from '@/components/FooterMenu';

const Home = () => (
  <main>
    <Container fluid>
      <TopMenu />
      <IslandSnowLogo />
      <MiddleMenu />
      <FullWidthImage />
      <FooterMenu />
    </Container>
  </main>
);

export default Home;
