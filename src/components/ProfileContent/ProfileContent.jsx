import './style.css';
import PropTypes from 'prop-types';

/**
 * React component that display a paragraph greeting the user by name
 * @component
 * @param  {string} props User first name
 *
 */
function ProfileContent({ firstName }) {
  return (
    <div id="hello">
      <p id="hello_name">
        Bonjour <span>{firstName}</span>
      </p>
      <p id="hello_congrats">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  );
}

ProfileContent.propTypes = {
  firstName: PropTypes.string,
};

export default ProfileContent;
