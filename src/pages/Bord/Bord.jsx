import './style.css';

import Hello from '../../components/Hello';
import DailyActivities from '../../components/DailyActivities';
import Times from '../../components/Times';
import Pentagraph from '../../components/Pentagraph';
import Score from '../../components/Score';
import SideRecap from '../../components/SideRecap';

function Bord() {
  return (
    <>
      <div id="content_box">
        <Hello />

        <div id="info_box">
          <div id="details_box">
            <DailyActivities />

            <div id="graphs_box">
              <Times />
              <Pentagraph />
              <Score />
            </div>
          </div>

          <div id="siderecap_box">
            <SideRecap />
          </div>
        </div>
      </div>
    </>
  );
}

export default Bord;
