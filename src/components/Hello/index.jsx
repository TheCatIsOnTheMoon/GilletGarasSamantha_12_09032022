import './style.css';
import { useEffect, useState } from 'react';
import {
  MAIN_DATA,
  ACTIVITY_DATA,
  SESSIONS_DATA,
  PERF_DATA,
} from '../../DataRequests';

function Hello() {
  MAIN_DATA.then((value) => {
    console.log('value :', value.data.userInfos);
  });
  // .catch((err) => console.log('catch value :', err));
  // console.log('MAIN_DATA :', MAIN_DATA); //return promise :(
  return (
    <div id="hello">
      <p id="hello_name">
        Bonjour <span>Mathieu</span>
        {/* Bonjour <span>{value.data.userInfos.firstName}</span> */}
      </p>
      <p id="hello_congrats">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  );
}

export default Hello;
