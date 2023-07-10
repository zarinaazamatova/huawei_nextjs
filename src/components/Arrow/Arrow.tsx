import React, { useState } from 'react';
import { ArrowIcon } from '../../../public/assets/svgs/ArrowIcon';

export const Arrow = (props: any) => {
  const [color, setColor] = useState('grey');
  const { onClick, arrowType } = props;
  const handleMouseEnter = () => {
    setColor(`${'#fe5000'}`);
  };

  const handleMouseLeave = () => {
    setColor('grey');
  };

  return (
    <div
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-hidden="true"
      role="button"
      tabIndex={0}
    >
      <ArrowIcon
        className="arrow"
        width={44}
        height={44}
        stroke="none"
        fill={color}
        id={arrowType === 'prevArrow' ? 'prevArrow' : 'nextArrow'}
      />
    </div>
  );
};
