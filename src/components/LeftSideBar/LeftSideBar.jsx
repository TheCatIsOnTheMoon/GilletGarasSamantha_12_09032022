import './style.css';

import selfcare from './assets/selfcare.svg';
import swim from './assets/swim.svg';
import bike from './assets/bike.svg';
import weight from './assets/weight.svg';

/**
 * It renders the left navigation bar of the application : 4 icons.
 * @component
 */
function LeftSideBar() {
  return (
    <div id="side_bar">
      <ul id="side_nav">
        <li>
          <img src={selfcare} alt="selfcare icon" />
        </li>
        <li>
          <img src={swim} alt="swim icon" />
        </li>
        <li>
          <img src={bike} alt="bike icon" />
        </li>
        <li>
          <img src={weight} alt="weight icon" />
        </li>
      </ul>
      <div id="side_copyright">
        <p>Copiryght, SportSee 2020</p>
      </div>
    </div>
  );
}

export default LeftSideBar;
