import './style.css';
import {
  MAIN_DATA,
  ACTIVITY_DATA,
  SESSIONS_DATA,
  PERF_DATA,
} from '../../DataRequests';

function Hello() {
  console.log('MAIN_DATA :', MAIN_DATA);
  console.log('ACTIVITY_DATA :', ACTIVITY_DATA);
  console.log('SESSIONS_DATA :', SESSIONS_DATA);
  console.log('PERF_DATA :', PERF_DATA);

  return (
    <div id="hello">
      <p id="hello_name">
        Bonjour <span>Mathieu</span>
        {/* Bonjour <span>{data.userInfos.firstName}</span> */}
      </p>
      <p id="hello_congrats">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  );
}

export default Hello;
