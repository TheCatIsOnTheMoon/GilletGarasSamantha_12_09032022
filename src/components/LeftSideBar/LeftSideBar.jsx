import './style.css';

import selfcare from './assets/selfcare.svg';
import swim from './assets/swim.svg';
import bike from './assets/bike.svg';
import weight from './assets/weight.svg';

function LeftSideBar() {
  return (
    <div id="side_bar">
      <ul id="side_nav">
        <li>
          <img src={selfcare} alt="" />
        </li>
        <li>
          <img src={swim} alt="" />
        </li>
        <li>
          <img src={bike} alt="" />
        </li>
        <li>
          <img src={weight} alt="" />
        </li>
      </ul>
      <div id="side_copyright">
        <p>Copiryght, SportSee 2020</p>
      </div>
    </div>
  );
}

export default LeftSideBar;
