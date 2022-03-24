import { BASE_URL } from '../../constants/BASE_URL';
import GetUserID from '../../Hooks/GetUserID/GetUserID';
import { useFetch } from '../../Hooks/FetchData/FetchData';
import RightSideDetails from '../RightSideDetails/RightSideDetails';
import Loader from '../Loader/Loader';

import energy from './assets/energy.svg';
import chicken from './assets/chicken.svg';
import apple from './assets/apple.svg';
import cheeseburger from './assets/cheeseburger.svg';

/**
 * It takes the main data from the API and formats it into a format that the `RightSideDetails` componant can use
 * @component
 *
 */
function RightSide() {
  const { data, isLoading, error } = useFetch(BASE_URL + `${GetUserID()}`);

  if (isLoading) {
    return <Loader />;
  }
  if (error || !data) {
    return <span>Error</span>;
  }

  const KEY_DATA = data.data.keyData;

  const NEW_KEY_DATA = [
    {
      name: 'calories',
      value: KEY_DATA.calorieCount,
      unit: 'Kcal',
      icon: energy,
    },
    {
      name: 'proteines',
      value: KEY_DATA.proteinCount,
      unit: 'g',
      icon: chicken,
    },
    {
      name: 'glucides',
      value: KEY_DATA.carbohydrateCount,
      unit: 'g',
      icon: apple,
    },
    {
      name: 'lipides',
      value: KEY_DATA.lipidCount,
      unit: 'g',
      icon: cheeseburger,
    },
  ];

  return (
    <div>
      {NEW_KEY_DATA.map((e, index) => (
        <RightSideDetails
          key={`${e.name}-${index}`}
          name={e.name}
          value={e.value}
          unit={e.unit}
          icon={e.icon}
        />
      ))}
    </div>
  );
}

export default RightSide;
