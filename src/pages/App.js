import './style.css';

import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Hello from '../components/Hello';
import DailyActivities from '../components/DailyActivities';
import Times from '../components/Times';
import Pentagraph from '../components/Pentagraph';
import Score from '../components/Score';
import SideRecap from '../components/SideRecap';

function App() {
  return (
    <>
      <Header />

      <div id="main_box">
        <SideBar />

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
      </div>
    </>
  );
}

export default App;
