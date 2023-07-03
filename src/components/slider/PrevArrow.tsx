import React, { useState } from 'react';
import './slider.styles';
import ArrowIcon from '../../../public/assets/svgs/ArrowIcon';

function PrevArrow(props: any) {
  const { onClick } = props;
  const [color, setColor] = useState('grey');

  const handleMouseEnter = () => {
    setColor(`${'#fe5000'}`);
  };

  const handleMouseLeave = () => {
    setColor('grey');
  };

  return (
    <div
      className="prevArrow"
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-hidden="true"
      role="button"
      style={{ transform: 'translateY(-24px) translateX(-8px) rotate(180deg)' }}
    >
      <ArrowIcon width={44} height={44} stroke="none" fill={color} />
    </div>
  );
}
export default PrevArrow;
