import { JSX } from 'react';
type TikTokIconProps = {
  width: string;
  height: string;
  fill: string;
};
export const TikTokIcon = ({ width, height, fill }: TikTokIconProps): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 18"
      fill="none"
    >
      <path
        d="M15.981 4.40288C14.8663 4.40284 13.7973 3.96003 13.0092 3.17184C12.221 2.38365 11.7783 1.31466 11.7783 0.200012H8.7756V11.9579C8.77504 12.494 8.60577 13.0163 8.29179 13.4508C7.97781 13.8853 7.53504 14.2099 7.02624 14.3787C6.51744 14.5475 5.96841 14.5519 5.45698 14.3913C4.94555 14.2306 4.49766 13.913 4.17678 13.4836C3.85591 13.0542 3.67833 12.5347 3.66922 11.9987C3.66011 11.4627 3.81992 10.9374 4.12601 10.4973C4.4321 10.0572 4.86894 9.72463 5.37461 9.54668C5.88029 9.36872 6.42914 9.35444 6.94339 9.50584V6.58698C5.85052 6.43962 4.73871 6.62917 3.75641 7.13032C2.77411 7.63147 1.96808 8.42038 1.44594 9.39168C0.92381 10.363 0.710425 11.4705 0.834283 12.5663C0.958142 13.662 1.41335 14.6939 2.13912 15.5242C2.86489 16.3545 3.82668 16.9435 4.89606 17.2128C5.96544 17.482 7.09151 17.4186 8.12391 17.031C9.1563 16.6434 10.0459 15.9501 10.6739 15.0436C11.3019 14.1372 11.6383 13.0607 11.6384 11.9579L11.726 6.01468C12.9597 6.92035 14.4508 7.40765 15.9813 7.40537L15.981 4.40288Z"
        fill={fill}
      />
    </svg>
  );
};
