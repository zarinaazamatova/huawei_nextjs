import React, { useState } from 'react';
import './slider.styles';
import ArrowIcon from '../../../public/assets/svgs/ArrowIcon';

function NextArrow(props: any) {
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
      className="nextArrow"
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-hidden="true"
      role="button"
      tabIndex="0"
    >
      <ArrowIcon width={44} height={44} stroke="none" fill={color} />
    </div>
  );
}

export default NextArrow;
