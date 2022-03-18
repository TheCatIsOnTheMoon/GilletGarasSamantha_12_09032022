import './style.css';
import PropTypes from 'prop-types';

function Hello({ firstName }) {
  return (
    <p id="hello_name">
      Bonjour <span>{firstName}</span>
    </p>
  );
}

Hello.propTypes = {
  firstName: PropTypes.string,
};

export default Hello;
