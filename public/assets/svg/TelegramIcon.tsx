import { JSX } from 'react';

type TelegramIconProps = {
  width: string;
  height: string;
  fill: string;
};
export const TelegramIcon = ({ width, height, fill }: TelegramIconProps): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 15"
      fill="none"
    >
      <path
        d="M15.4 1.08176L12.9957 13.6338C12.9957 13.6338 12.6593 14.5041 11.7351 14.0867L6.18767 9.68204L6.16195 9.66906C6.91128 8.97229 12.7219 3.56211 12.9759 3.31687C13.369 2.93707 13.125 2.71096 12.6685 2.99786L4.08545 8.64235L0.774123 7.48859C0.774123 7.48859 0.253018 7.29664 0.202886 6.87926C0.152095 6.4612 0.791273 6.23509 0.791273 6.23509L14.2905 0.751134C14.2905 0.751134 15.4 0.24632 15.4 1.08176Z"
        fill={fill}
      />
    </svg>
  );
};
