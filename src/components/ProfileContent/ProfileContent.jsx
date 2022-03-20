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
    <p id="hello_name">
      Bonjour <span>{firstName}</span>
    </p>
  );
}

ProfileContent.propTypes = {
  firstName: PropTypes.string,
};

export default ProfileContent;
