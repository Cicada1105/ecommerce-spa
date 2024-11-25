import './banner.css';

import LocationSelect from './components/location-select.jsx';
import LanguageSelect from './components/language-select.jsx';

function Banner() {
  return (
    <div className='banner bg-green text-xs font-bold text-white px-10 py-2 flex items-center justify-between w-full'>
      <div>
        <a className='tel' href="tel:+12345678900">+1(234) 567-8900</a>
      </div>
      <div className='flex gap-x-4'>
        <p>Get 50% Off on Selected Items</p> |
        <a href=''>Shop Now</a>
      </div>
      <div className='flex gap-x-4'>
        <LanguageSelect />
        <LocationSelect />
      </div>
    </div>
  )
}

export default Banner;