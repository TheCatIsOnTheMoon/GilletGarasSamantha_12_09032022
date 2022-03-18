import './style.css';
import PropTypes from 'prop-types';
import { MAIN_DATA_URL } from '../../constants';
import { useFetch } from '../../Hooks/FetchData';

function Hello() {
  // MAIN_DATA.then((value) => {
  //   console.log('value :', value.data.userInfos);
  // });
  // .catch((err) => console.log('catch value :', err));
  // console.log('MAIN_DATA :', MAIN_DATA); //return promise :(

  const { data, isLoading, error } = useFetch(MAIN_DATA_URL);
  // console.log('MAIN_DATA 1 :', data); // OK

  const MAIN_DATA = data;
  // console.log('MAIN_DATA 2 :', MAIN_DATA); //OK

  if (isLoading) {
    return <span>Loading ...</span>;
  }

  if (error) {
    return <span>Error</span>;
  }

  // MAIN_DATA && console.log('MAIN_DATA 3 :', MAIN_DATA); //OK

  return (
    <div id="hello">
      <p id="hello_name">
        Bonjour <span>{MAIN_DATA && MAIN_DATA.data.userInfos.firstName}</span>
      </p>
      <p id="hello_congrats">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  );
}

Hello.propTypes = {
  firstName: PropTypes.string,
};

export default Hello;
