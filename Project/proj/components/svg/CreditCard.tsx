import React from 'react';
import { Svg, G, Rect, Ellipse, Path, Defs, LinearGradient, Stop, Mask } from 'react-native-svg';

const CardIcon = () => {
  return (
    <Svg width="414" height="320" viewBox="0 0 414 320" fill="none">
      <Defs>
        <LinearGradient id="paint0_linear_95_36" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0%" stopColor="#D1BBFF" />
          <Stop offset="100%" stopColor="#C1A3FF" />
        </LinearGradient>
        <Mask id="mask0_95_36" maskUnits="userSpaceOnUse" x="20" y="28" width="374" height="240">
          <Rect x="20" y="28" width="374" height="240" rx="8" fill="#D1BBFF" />
        </Mask>
      </Defs>
      <G filter="url(#filter0_d_95_36)">
        <G mask="url(#mask0_95_36)">
          <Rect x="20" y="28" width="374" height="240" rx="8" fill="url(#paint0_linear_95_36)" />
          <Ellipse cx="311.5" cy="151.5" rx="167.5" ry="165.5" fill="white" fillOpacity="0.12" />
          <G>
            <Path d="M59.1497 150H61.8792V146.382H64.3929V143.995H61.8792V131.681H57.7659C53.64 137.647 51.5579 140.936 49.9837 143.894V146.382H59.1497V150ZM52.637 143.97C54.097 141.316 55.9505 138.46 59.1243 133.877H59.1751V144.033H52.637V143.97ZM69.6337 150H72.6171L80.5771 134.144V131.681H68.1103V134.08H77.7714V134.144L69.6337 150ZM92.4321 150H95.1616V146.382H97.6753V143.995H95.1616V131.681H91.0483C86.9224 137.647 84.8403 140.936 83.2661 143.894V146.382H92.4321V150ZM85.9194 143.97C87.3794 141.316 89.2329 138.46 92.4067 133.877H92.4575V144.033H85.9194V143.97ZM102.916 150H105.9L113.859 134.144V131.681H101.393V134.08H111.054V134.144L102.916 150ZM142.493 150H145.223V146.382H147.736V143.995H145.223V131.681H141.109C136.983 137.647 134.901 140.936 133.327 143.894V146.382H142.493V150ZM135.98 143.97C137.44 141.316 139.294 138.46 142.468 133.877H142.518V144.033H135.98V143.97ZM152.977 150H155.96L163.92 134.144V131.681H151.454V134.08H161.115V134.144L152.977 150ZM175.775 150H178.505V146.382H181.019V143.995H178.505V131.681H174.392C170.266 137.647 168.184 140.936 166.609 143.894V146.382H175.775V150ZM169.263 143.97C170.723 141.316 172.576 138.46 175.75 133.877H175.801V144.033H169.263V143.97ZM186.259 150H189.243L197.203 134.144V131.681H184.736V134.08H194.397V134.144L186.259 150ZM225.836 150H228.566V146.382H231.079V143.995H228.566V131.681H224.453C220.327 137.647 218.245 140.936 216.67 143.894V146.382H225.836V150ZM219.324 143.97C220.784 141.316 222.637 138.46 225.811 133.877H225.862V144.033H219.324V143.97ZM236.32 150H239.304L247.264 134.144V131.681H234.797V134.08H244.458V134.144L236.32 150ZM259.119 150H261.848V146.382H264.362V143.995H261.848V131.681H257.735C253.609 137.647 251.527 140.936 249.953 143.894V146.382H259.119V150ZM252.606 143.97C254.066 141.316 255.919 138.46 259.093 133.877H259.144V144.033H252.606V143.97ZM269.603 150H272.586L280.546 134.144V131.681H268.079V134.08H277.74V134.144L269.603 150ZM309.18 150H311.909V146.382H314.423V143.995H311.909V131.681H307.796C303.67 137.647 301.588 140.936 300.014 143.894V146.382H309.18V150ZM302.667 143.97C304.127 141.316 305.98 138.46 309.154 133.877H309.205V144.033H302.667V143.97ZM319.664 150H322.647L330.607 134.144V131.681H318.14V134.08H327.801V134.144L319.664 150ZM342.462 150H345.191V146.382H347.705V143.995H345.191V131.681H341.078C336.952 137.647 334.87 140.936 333.296 143.894V146.382H342.462V150ZM335.949 143.97C337.409 141.316 339.263 138.46 342.437 133.877H342.487V144.033H335.949V143.97ZM352.946 150H355.929L363.889 134.144V131.681H351.423V134.08H361.084V134.144L352.946 150Z" fill="white" />
          </G>
          <G>
            <Path d="M57.4785 230.113H59.793L54.7051 216.021H52.3418L47.2539 230.113H49.5293L50.8184 226.304H56.1895L57.4785 230.113ZM53.4746 218.365H53.5332L55.6328 224.546H51.375L53.4746 218.365ZM70.6957 228.218H64.1332V216.021H61.9457V230.113H70.6957V228.218ZM82.116 228.218H75.3582V223.843H81.7547V222.027H75.3582V217.906H82.116V216.021H73.1707V230.113H82.116V228.218ZM84.093 230.113H86.5148L90.0695 224.741H90.1379L93.6437 230.113H96.2023L91.5148 223.12V223.062L96.2902 216.021H93.8195L90.3039 221.47H90.2258L86.5908 216.021H84.093V230.113ZM113.307 230.113H116.13V216.021H113.307V230.113ZM130.613 230.113H133.249V216.021H130.613V230.113ZM147.664 230.113H150.393V216.021H147.664V230.113ZM163.766 230.113H166.637V216.021H163.766V230.113ZM180.576 230.113H183.305V216.021H180.576V230.113ZM194.194 230.113H196.167V216.021H194.194V230.113ZM214.865 230.113H217.594V216.021H214.865V230.113ZM236.307 230.113H239.036V216.021H236.307V230.113ZM253.82 230.113H256.537V216.021H253.82V230.113ZM273.792 230.113H276.528V216.021H273.792V230.113ZM293.173 230.113H295.995V216.021H293.173V230.113ZM312.421 230.113H315.273V216.021H312.421V230.113ZM331.237 230.113H334.066V216.021H331.237V230.113ZM353.703 230.113H356.432V216.021H353.703V230.113ZM373.932 230.113H376.776V216.021H373.932V230.113Z" fill="white" />
          </G>
        </G>
      </G>
    </Svg>
  );
};

export default CardIcon;
