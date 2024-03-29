import { ReactElement } from 'react';

type VKIconProps = {
  width: string;
  height: string;
  fill: string;
};

export const VKIcon = ({ width, height, fill }: VKIconProps): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 18 12"
      fill={fill}
    >
      <path
        d="M9.78602 11.6C3.77278 11.6 0.342923 7.39582 0.200012 0.400024H3.21213C3.31107 5.53476 5.53168 7.70973 7.29058 8.15818V0.400024H10.1268V4.82845C11.8637 4.63786 13.6886 2.61984 14.3042 0.400024H17.1404C16.9084 1.55129 16.446 2.64135 15.7821 3.60203C15.1182 4.5627 14.267 5.37333 13.2818 5.98321C14.3815 6.54047 15.3528 7.32922 16.1316 8.29742C16.9104 9.26562 17.4791 10.3912 17.8 11.6H14.678C14.3899 10.5501 13.8043 9.61027 12.9947 8.89828C12.1851 8.1863 11.1875 7.73384 10.1268 7.59762V11.6H9.78602Z"
        fill={fill}
      />
    </svg>
  );
};
