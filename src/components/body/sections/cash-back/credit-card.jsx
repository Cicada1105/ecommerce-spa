import LightLogo from '/light-logo.svg';

function CreditCard({ color }) {
  return (
    <svg style={{ transform: 'skewX(12deg)' }} viewBox='0 0 150 100' xmlns='http://www.w3.org/2000/svg' fill='none'>
      <rect width='150' height='100' rx='5' x='0' y='0' fill={ color } />
      <g fill='#ffffff'>
        <image href={ LightLogo } x='15' y='10' width='70' />
        <text x='10' y='75' fontSize='5px'>Card Holder Name</text>
        <text x='10' y='85' fontSize='8px' fontWeight='bolder'>John Doe</text>
        <text x='75' y='75' fontSize='5px'>Expiry Date</text>
        <text x='75' y='85' fontSize='8px' fontWeight='bolder'>01/31</text>
        <circle r='8' cx='125' cy='82' fillOpacity='0.75' />
        <circle r='8' cx='133' cy='82' fillOpacity='0.25' />
      </g>
    </svg>
  )
}

export default CreditCard;