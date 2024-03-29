import { ReactElement } from 'react';

type YouTubeIconProps = {
  width: string;
  height: string;
  fill: string;
};
export const YouTubeIcon = ({ width, height, fill }: YouTubeIconProps): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 18 12"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.01 11.6455C1.69619 11.5526 1.40986 11.3874 1.17518 11.1639C0.940491 10.9403 0.764334 10.665 0.66157 10.361C0.074349 8.78989 -0.0996426 2.22954 1.0313 0.934459C1.4077 0.513159 1.93913 0.253775 2.51023 0.212607C5.5442 -0.105856 14.918 -0.0633941 15.9946 0.318762C16.2974 0.414658 16.574 0.576205 16.8038 0.791298C17.0335 1.00639 17.2104 1.26945 17.3212 1.56077C17.9628 3.18494 17.9846 9.08713 17.2343 10.6476C17.0352 11.0538 16.702 11.3828 16.2882 11.5818C15.1572 12.1338 3.51068 12.1231 2.01 11.6455ZM6.82739 8.56697L12.2646 5.80695L6.82739 3.0257V8.56697Z"
        fill={fill}
      />
    </svg>
  );
};
