import './style.css';
import PropTypes from 'prop-types';

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
