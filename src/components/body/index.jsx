import { useContext } from 'react';

import { PageSettingsContext } from '../../context';

import Brands from './sections/brands';
import Discounts from './sections/discounts';
import WeeklyProducts from './sections/weekly-products';

function Body() {
  const PageSettings = useContext(PageSettingsContext);

  return (
    <main className='grow px-6'>
      <p>Language: { PageSettings.language }</p>
      <p>Location: { PageSettings.location }</p>
      <Brands />
      <Discounts />
      <WeeklyProducts />
    </main>
  );
}

export default Body;