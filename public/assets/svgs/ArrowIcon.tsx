import React from 'react';

type ArrowIconProps = {
  width: number;
  height: number;
  fill: string;
  stroke: string;
  id: string;
  className: string;
};

export const ArrowIcon = ({ width, height, fill, stroke, id, className }: ArrowIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      id={id}
      className={className}
      viewBox="0 0 35 35"
    >
      <g fill="none" fillRule="evenodd">
        <path
          fill={fill}
          d="M13.596 9.377c.369-.158 1.002-.158 1.213 0l7.593 7.594c.317.369.317.843 0 1.213l-7.593 7.593c-.37.317-.844.317-1.213 0-.317-.369-.317-.843 0-1.213l6.908-6.908-6.908-6.908c-.159-.369-.159-1.002 0-1.371z"
        />
        <circle cx="17.5" cy="17.5" r="17" stroke={stroke} />
      </g>
    </svg>
  );
};
