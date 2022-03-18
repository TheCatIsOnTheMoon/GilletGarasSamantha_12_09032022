import './style.css';
import energy from './assets/energy.svg';
import chicken from './assets/chicken.svg';
import apple from './assets/apple.svg';
import cheeseburger from './assets/cheeseburger.svg';

function RightDetails({ calories, proteines, glucides, lipides }) {
  return (
    <div id="rightDetails">
      <div className="rightDetails_box" id="box_calories">
        <div className="icon_box">
          <img src={energy} alt="energy icon" className="icon" />
        </div>
        <div className="info">
          <p className="infos_quantity">{calories}kCal</p>
          <p className="infos_label">Calories</p>
        </div>
      </div>

      <div className="rightDetails_box" id="box_proteines">
        <div className="icon_box">
          <img src={chicken} alt="chicken icon" className="icon" />
        </div>
        <div className="info">
          <p className="infos_quantity">{proteines}g</p>
          <p className="infos_label">Proteines</p>
        </div>
      </div>

      <div className="rightDetails_box" id="box_glucides">
        <div className="icon_box">
          <img src={apple} alt="apple icon" className="icon" />
        </div>
        <div className="info">
          <p className="infos_quantity">{glucides}g</p>
          <p className="infos_label">Glucides</p>
        </div>
      </div>

      <div className="rightDetails_box" id="box_lipides">
        <div className="icon_box">
          <img src={cheeseburger} alt="cheeseburger icon" className="icon" />
        </div>
        <div className="info">
          <p className="infos_quantity">{lipides}g</p>
          <p className="infos_label">Lipides</p>
        </div>
      </div>
    </div>
  );
}
export default RightDetails;
