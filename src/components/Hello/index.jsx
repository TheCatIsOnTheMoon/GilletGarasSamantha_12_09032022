import './style.css';
import { getMainData } from '../../DataRequests/GetData';

function Hello() {
  const mainData = getMainData();

  return (
    <div id="hello">
      <p id="hello_name">
        Bonjour <span>{mainData.userInfos.firstName}</span>
      </p>
      <p id="hello_congrats">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  );
}

export default Hello;
