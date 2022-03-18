import './style.css';

import Header from '../../components/Header/Header';
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar';
import Bord from '../Bord/Bord';

function Home() {
  return (
    <>
      <Header />

      <div id="main_box">
        <LeftSideBar />
        <Bord />
      </div>
    </>
  );
}

export default Home;
