import React, { useState } from 'react';
import '../Slider';
import { ArrowIcon } from '../../../public/assets/svgs/ArrowIcon';

export const Arrow = (props: any) => {
  const [color, setColor] = useState('grey');
  const { onClick } = props;
  const handleMouseEnter = () => {
    setColor(`${'#fe5000'}`);
  };

  const handleMouseLeave = () => {
    setColor('grey');
  };

  return (
    <>
      <div
        className="arrow"
        id="arrowPrev"
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-hidden="true"
        role="button"
        tabIndex="0"
      >
        <ArrowIcon width={44} height={44} stroke="none" fill={color} />
      </div>
      <div
        className="arrow"
        id="arrowNext"
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-hidden="true"
        role="button"
        tabIndex="0"
      >
        <ArrowIcon width={44} height={44} stroke="none" fill={color} />
      </div>
    </>
  );
};
