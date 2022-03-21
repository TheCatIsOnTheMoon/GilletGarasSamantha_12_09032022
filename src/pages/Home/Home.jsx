import './style.css';

import Profile from '../../components/Profile/Profile';
import Daily from '../../components/Daily/Daily';
import Times from '../../components/Times/Times';
import Perfs from '../../components/Perfs/Perfs';
import Score from '../../components/Score/Score';
import RightSide from '../../components/RightSide/RightSide';

/**
 * React component that contains the dashbord of the user.
 * @component
 * @returns The `Home` page is returning the `Profile`, `Daily`, `Times`, `Perfs`, `Score`, `RightSide` components.
 */
function Home() {
  return (
    <>
      <div id="content_box">
        <Profile />

        <div id="info_box">
          <div id="details_box">
            <Daily />

            <div id="graphs_box">
              <Times />
              <Perfs />
              <Score />
            </div>
          </div>

          <div id="siderecap_box">
            <RightSide />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
