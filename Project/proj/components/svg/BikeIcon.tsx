import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const IconBike = (props: SvgProps) => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M14.2666 6.26667C14.8926 6.26667 15.4 5.75926 15.4 5.13333C15.4 4.50741 14.8926 4 14.2666 4C13.6407 4 13.1333 4.50741 13.1333 5.13333C13.1333 5.75926 13.6407 6.26667 14.2666 6.26667Z"
        stroke="#2D0C57"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.0001 18.7333V14.2L8.6001 11.9333L12.0001 8.53333L14.2668 10.8L16.5334 11.9333"
        stroke="#2D0C57"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.20005 21C7.07782 21 8.60005 19.4777 8.60005 17.6C8.60005 15.7222 7.07782 14.2 5.20005 14.2C3.32228 14.2 1.80005 15.7222 1.80005 17.6C1.80005 19.4777 3.32228 21 5.20005 21Z"
        stroke="#2D0C57"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.7999 21C20.6777 21 22.1999 19.4777 22.1999 17.6C22.1999 15.7222 20.6777 14.2 18.7999 14.2C16.9221 14.2 15.3999 15.7222 15.3999 17.6C15.3999 19.4777 16.9221 21 18.7999 21Z"
        stroke="#2D0C57"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default IconBike;
