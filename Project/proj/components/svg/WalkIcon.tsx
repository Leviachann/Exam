import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const IconWalk = (props: SvgProps) => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M12.8682 5.34722C13.5164 5.34722 14.0418 4.82178 14.0418 4.17361C14.0418 3.52544 13.5164 3 12.8682 3C12.22 3 11.6946 3.52544 11.6946 4.17361C11.6946 4.82178 12.22 5.34722 12.8682 5.34722Z"
        stroke="#2D0C57"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.2153 21.7778L14.2169 18.7826C14.1017 18.4369 13.9075 18.1228 13.6499 17.8651L10.5208 14.7361M10.5208 14.7361L11.6944 8.86804M10.5208 14.7361L7 21.7778M11.6944 8.86804L14.9459 12.1195C15.1243 12.2979 15.3303 12.4464 15.556 12.5592L17.5625 13.5625M11.6944 8.86804L8.8437 10.7685C8.4094 11.0581 8.084 11.4841 7.91894 11.9793L7 14.7361"
        stroke="#2D0C57"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default IconWalk;
