import './style.css';

import ProfileBar from '../../components/ProfileBar/ProfileBar';
import DailyActivities from '../../components/DailyActivities/DailyActivities';
import Times from '../../components/Times/Times';
import Perfs from '../../components/Perfs/Perfs';
import Score from '../../components/Score/Score';
import RightSideRecap from '../../components/RightSideRecap/RightSideRecap';

function Bord() {
  return (
    <>
      <div id="content_box">
        <ProfileBar />

        <div id="info_box">
          <div id="details_box">
            <DailyActivities />

            <div id="graphs_box">
              <Times />
              <Perfs />
              <Score />
            </div>
          </div>

          <div id="siderecap_box">
            <RightSideRecap />
          </div>
        </div>
      </div>
    </>
  );
}

export default Bord;
