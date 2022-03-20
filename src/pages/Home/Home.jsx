import './style.css';

import Header from '../../components/Header/Header';
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar';
import Dashbord from '../Dashbord/Dashbord';

/**
 * React component that contains the home page.
 * @component
 * @returns The `Home` component is returning the `Header`, `LeftSideBar` and `Dashbord` components.
 */
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
