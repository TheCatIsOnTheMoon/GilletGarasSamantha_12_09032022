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
      <nav id="side_nav">
        <button>
          <img src={selfcare} alt="selfcare icon" />
        </button>
        <button>
          <img src={swim} alt="swim icon" />
        </button>
        <button>
          <img src={bike} alt="bike icon" />
        </button>
        <button>
          <img src={weight} alt="weight icon" />
        </button>
      </nav>
      <div id="side_copyright">
        <p>Copiryght, SportSee 2020</p>
      </div>
    </div>
  );
}

export default LeftSideBar;
