import './style.css';

import Header from '../../components/Header/Header';
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar';
import Dashbord from '../Dashbord/Dashbord';

function Home() {
  return (
    <>
      <Header />

      <div id="main_box">
        <LeftSideBar />
        <Dashbord />
      </div>
    </>
  );
}

export default Home;
