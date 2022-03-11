import './style.css';

import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import Bord from '../Bord/Bord';

function Home() {
  return (
    <>
      <Header />

      <div id="main_box">
        <SideBar />
        <Bord />
      </div>
    </>
  );
}

export default Home;
