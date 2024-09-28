import React from 'react';
import { Svg, Path } from 'react-native-svg';

const DroneIcon = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path d="M23.7943 16.6786C23.5199 16.4043 23.0751 16.4043 22.8008 16.6786L20.9411 18.5383C20.4915 18.3526 19.9827 18.3525 19.5331 18.5383L15.4588 14.4639V9.53194L19.5282 5.46258C19.7487 5.55408 19.9872 5.60208 20.2331 5.60208C20.4791 5.60208 20.7176 5.55408 20.9381 5.46258L22.7968 7.32127C22.934 7.45843 23.1138 7.52705 23.2935 7.52705C23.4733 7.52705 23.6531 7.45843 23.7902 7.32127C24.0645 7.04696 24.0645 6.60216 23.7902 6.3278L21.9305 4.46813C22.2058 3.8018 22.0734 3.00521 21.5327 2.46446C20.9919 1.92371 20.1953 1.79133 19.5291 2.06667L17.6694 0.206955C17.3951 -0.0673574 16.9503 -0.0673574 16.6759 0.206955C16.4016 0.481268 16.4016 0.926065 16.6759 1.20042L18.5356 3.0601C18.3498 3.50972 18.3498 4.0185 18.5356 4.46817L14.6178 8.38594L12.3974 7.2541C12.1486 7.12725 11.8515 7.12725 11.6025 7.2541L9.37944 8.3873L5.46032 4.46817C5.64608 4.01855 5.64608 3.50977 5.46032 3.0601L7.31999 1.20042C7.59435 0.926111 7.59435 0.481315 7.31999 0.206955C7.04568 -0.0673574 6.60088 -0.0673574 6.32652 0.206955L4.46689 2.06663C3.80052 1.79128 3.00393 1.92375 2.46327 2.46446C1.92252 3.00525 1.79005 3.80175 2.06539 4.46813L0.20577 6.3278C-0.0685898 6.60211 -0.0685898 7.04691 0.20577 7.32127C0.342926 7.45843 0.522738 7.52705 0.702457 7.52705C0.882223 7.52705 1.06204 7.45843 1.19914 7.32127L3.05783 5.46258C3.27833 5.55408 3.51688 5.60208 3.76279 5.60208C4.00874 5.60208 4.24729 5.55408 4.46779 5.46258L8.54113 9.53592V14.4679L4.47079 18.5383C4.02116 18.3526 3.51238 18.3525 3.06275 18.5383L1.20308 16.6786C0.92877 16.4043 0.483973 16.4043 0.209613 16.6786C-0.0647461 16.9529 -0.0647461 17.3977 0.209613 17.6721L2.0683 19.5308C1.9768 19.7513 1.9288 19.9898 1.9288 20.2358C1.9288 20.7267 2.12 21.1883 2.46716 21.5354C2.82543 21.8937 3.2961 22.0729 3.76677 22.0729C4.00644 22.0729 4.24602 22.0262 4.47083 21.9333L6.33046 23.7929C6.46761 23.9301 6.64743 23.9987 6.82714 23.9987C7.00686 23.9987 7.18672 23.9301 7.32383 23.7929C7.59819 23.5186 7.59819 23.0738 7.32383 22.7994L5.46524 20.9408C5.55674 20.7203 5.60474 20.4817 5.60474 20.2358C5.60474 19.9898 5.55674 19.7513 5.46524 19.5308L9.38207 15.614L11.602 16.7455C11.7266 16.8092 11.8633 16.841 12 16.841C12.1365 16.841 12.273 16.8092 12.3973 16.7458L14.6203 15.6126L18.5385 19.5308C18.4469 19.7513 18.399 19.9898 18.399 20.2358C18.399 20.4817 18.447 20.7203 18.5385 20.9407L16.6798 22.7994C16.4054 23.0737 16.4054 23.5185 16.6798 23.7929C16.817 23.93 16.9968 23.9986 17.1765 23.9986C17.3562 23.9986 17.5361 23.93 17.6732 23.7929L19.5328 21.9332C19.7576 22.0261 19.9972 22.0728 20.2369 22.0728C20.7074 22.0727 21.1782 21.8936 21.5365 21.5353C21.8836 21.1882 22.0748 20.7266 22.0748 20.2357C22.0748 19.9897 22.0268 19.7512 21.9353 19.5307L23.794 17.672C24.0686 17.3977 24.0686 16.9529 23.7943 16.6786ZM19.9269 3.45792C20.0113 3.3735 20.1222 3.33131 20.2331 3.33131C20.3439 3.33131 20.4548 3.3735 20.5392 3.45792C20.708 3.62672 20.708 3.90146 20.5392 4.07025C20.4575 4.152 20.3487 4.1971 20.233 4.1971C20.1174 4.1971 20.0086 4.15205 19.9269 4.07025C19.7581 3.9015 19.7581 3.62672 19.9269 3.45792ZM4.06907 4.0703C3.98732 4.15205 3.87857 4.19714 3.76288 4.19714C3.64723 4.19714 3.5385 4.152 3.45674 4.0703C3.28794 3.9015 3.28794 3.62672 3.45674 3.45792C3.53746 3.3735 3.64825 3.33131 3.7629 3.33131C3.87757 3.33131 3.98732 3.3735 4.06907 3.45792C4.23786 3.62672 4.23786 3.90146 4.06907 4.0703Z" fill="#7203FF" />
    </Svg>
  );
};

export default DroneIcon;
