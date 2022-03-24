import './style.css';
import PropTypes from 'prop-types';
import energy from './assets/energy.svg';
import chicken from './assets/chicken.svg';
import apple from './assets/apple.svg';
import cheeseburger from './assets/cheeseburger.svg';

/**
 * React component that display a recap of the daily calories, proteines, glucides and lipides of the user.
 * @component
 * @param  {number} props User calories
 * @param  {number} props User proteines
 * @param  {number} props User glucides
 * @param  {number} props User lipides
 *
 */
function RightSideDetails({ calories, proteines, glucides, lipides }) {
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

RightSideDetails.propTypes = {
  calories: PropTypes.number,
  proteines: PropTypes.number,
  glucides: PropTypes.number,
  lipides: PropTypes.number,
};

export default RightSideDetails;
