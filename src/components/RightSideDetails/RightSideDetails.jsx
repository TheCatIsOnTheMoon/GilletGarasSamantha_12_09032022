import './style.css';
import PropTypes from 'prop-types';

/**
 * React component that display a recap of the daily calories, proteines, glucides and lipides of the user.
 * @component
 * @param  {string} props type of the data
 * @param  {number} props value of the data
 * @param  {string} props unit of the data
 * @param  {string} props icon path of the data
 *
 */
function RightSideDetails({ name, value, unit, icon }) {
  return (
    <div className="rightDetails_box" id={`box_${name}`}>
      <div className="icon_box">
        <img src={icon} alt={`${name} icon`} className="icon" />
      </div>
      <div className="info">
        <p className="infos_quantity">
          {value} {unit}
        </p>
        <p className="infos_label">{name}</p>
      </div>
    </div>
  );
}

RightSideDetails.propTypes = {
  name: PropTypes.string,
  value: PropTypes.number,
  unit: PropTypes.string,
  icon: PropTypes.string,
};

export default RightSideDetails;
