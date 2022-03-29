import React from 'react';

import { IconProps } from '../IconRoot';

export const GamepadFill: React.FC<IconProps> = (props) => (
    <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            d="M20.6 14.14L18.6 8.81999L18.26 7.91999C18.0739 7.4144 17.7454 6.9735 17.3142 6.65053C16.883 6.32757 16.3675 6.13636 15.83 6.09999L7.31997 5.39999C6.6305 5.34688 5.94534 5.54716 5.39301 5.96324C4.84069 6.37932 4.45915 6.98263 4.31997 7.65999L4.22997 8.37999L3.34997 16C3.31397 16.3318 3.34397 16.6674 3.43824 16.9876C3.53252 17.3077 3.6892 17.606 3.89927 17.8654C4.10934 18.1247 4.36864 18.3399 4.66224 18.4986C4.95584 18.6573 5.27793 18.7563 5.60997 18.79C6.2894 18.8694 6.97397 18.6918 7.52911 18.2921C8.08424 17.8924 8.46979 17.2995 8.60997 16.63L9.11997 14.07C9.14279 13.9534 9.20485 13.8481 9.29582 13.7717C9.38679 13.6953 9.50119 13.6524 9.61997 13.65L14.37 13.48C14.607 13.4708 14.8419 13.5276 15.0485 13.6442C15.2551 13.7607 15.4253 13.9324 15.54 14.14L16.49 15.93C16.7791 16.421 17.2349 16.792 17.7744 16.9756C18.3139 17.1591 18.9014 17.1429 19.43 16.93C19.955 16.715 20.3731 16.3004 20.5925 15.7772C20.8119 15.254 20.8146 14.6651 20.6 14.14ZM15.21 7.51999C15.3874 7.52744 15.5581 7.59028 15.698 7.69969C15.8379 7.80909 15.94 7.95958 15.99 8.12999C16.0126 8.20211 16.0174 8.2786 16.0042 8.35299C15.9909 8.42739 15.9599 8.49748 15.9138 8.55734C15.8676 8.6172 15.8078 8.66506 15.7392 8.69686C15.6707 8.72865 15.5955 8.74345 15.52 8.73999C15.3425 8.73784 15.1706 8.67819 15.03 8.57001C14.8893 8.46182 14.7876 8.31093 14.74 8.13999C14.7154 8.06729 14.7089 7.98967 14.7213 7.91392C14.7336 7.83816 14.7643 7.76657 14.8106 7.70541C14.857 7.64425 14.9176 7.59537 14.9872 7.56305C15.0569 7.53073 15.1333 7.51594 15.21 7.51999ZM8.41997 7.15999H9.27997C9.33829 7.15956 9.39603 7.17157 9.44934 7.19523C9.50265 7.21888 9.55029 7.25364 9.5891 7.29718C9.62791 7.34072 9.65698 7.39203 9.67437 7.4477C9.69176 7.50337 9.69708 7.56211 9.68997 7.61999L9.55997 8.23999C9.54142 8.31482 9.49726 8.38078 9.43515 8.42645C9.37305 8.47211 9.29692 8.4946 9.21997 8.48999H8.74997C8.66678 8.48903 8.58565 8.46395 8.51643 8.4178C8.4472 8.37166 8.39285 8.30642 8.35997 8.22999L8.09997 7.59999C8.07938 7.54954 8.07202 7.49467 8.07859 7.44058C8.08515 7.38649 8.10541 7.33497 8.13746 7.2909C8.16951 7.24683 8.21228 7.21168 8.26172 7.18877C8.31116 7.16586 8.36563 7.15596 8.41997 7.15999ZM8.16997 9.67999L7.50997 9.83999C7.45269 9.85147 7.39367 9.85115 7.33652 9.83905C7.27937 9.82696 7.22528 9.80335 7.17755 9.76966C7.12983 9.73597 7.08947 9.69291 7.05894 9.64311C7.0284 9.59331 7.00834 9.53781 6.99997 9.47999L6.91997 8.68999C6.9161 8.63442 6.92637 8.57877 6.94981 8.52824C6.97325 8.4777 7.0091 8.43392 7.05402 8.40098C7.09894 8.36803 7.15148 8.347 7.20672 8.33983C7.26197 8.33267 7.31813 8.3396 7.36997 8.35999L8.05997 8.55999C8.14039 8.57983 8.21337 8.62246 8.27013 8.68278C8.3269 8.74309 8.36504 8.81852 8.37997 8.89999V9.33999C8.39069 9.41233 8.37549 9.48613 8.33706 9.54835C8.29864 9.61057 8.23945 9.6572 8.16997 9.67999ZM9.74997 11.09H8.88997C8.83165 11.0904 8.77391 11.0784 8.7206 11.0548C8.66729 11.0311 8.61964 10.9963 8.58084 10.9528C8.54203 10.9093 8.51296 10.858 8.49557 10.8023C8.47817 10.7466 8.47285 10.6879 8.47997 10.63L8.60997 9.99999C8.61716 9.95633 8.63307 9.91456 8.65674 9.87716C8.6804 9.83977 8.71135 9.80752 8.74774 9.78233C8.78412 9.75714 8.8252 9.73952 8.86854 9.73053C8.91187 9.72154 8.95656 9.72136 8.99997 9.72999H9.46997C9.55431 9.73148 9.63653 9.75665 9.70726 9.80262C9.77798 9.8486 9.83436 9.91352 9.86997 9.98999L10.12 10.63C10.15 10.6854 10.163 10.7486 10.1574 10.8114C10.1517 10.8742 10.1275 10.9339 10.088 10.9831C10.0485 11.0322 9.99529 11.0686 9.93515 11.0876C9.875 11.1067 9.81058 11.1075 9.74997 11.09ZM10.84 9.88999L10.14 9.68999C10.0588 9.6702 9.98559 9.62607 9.93019 9.56351C9.87478 9.50096 9.83982 9.42297 9.82997 9.33999L9.77997 8.90999C9.77181 8.83664 9.78925 8.76273 9.82934 8.70077C9.86944 8.6388 9.92971 8.5926 9.99997 8.56999L10.66 8.40999C10.718 8.39698 10.778 8.39613 10.8363 8.4075C10.8947 8.41886 10.95 8.44219 10.9989 8.47602C11.0477 8.50985 11.0891 8.55343 11.1202 8.60403C11.1514 8.65463 11.1717 8.71114 11.18 8.76999L11.27 9.55999C11.2725 9.61319 11.2621 9.66621 11.2397 9.71452C11.2173 9.76283 11.1835 9.805 11.1412 9.83742C11.099 9.86984 11.0495 9.89156 10.9971 9.90072C10.9446 9.90987 10.8907 9.90619 10.84 9.88999ZM14.59 9.95999C14.413 9.95625 14.2418 9.896 14.1015 9.78806C13.9611 9.68011 13.859 9.53012 13.81 9.35999C13.7874 9.28788 13.7825 9.21139 13.7958 9.13699C13.809 9.0626 13.8401 8.9925 13.8862 8.93264C13.9323 8.87278 13.9922 8.82493 14.0607 8.79313C14.1293 8.76134 14.2045 8.74654 14.28 8.74999C14.4578 8.7505 14.6306 8.80953 14.7715 8.91797C14.9125 9.0264 15.0139 9.17822 15.06 9.34999C15.0942 9.42413 15.1081 9.50605 15.1003 9.58733C15.0924 9.66862 15.063 9.74635 15.0152 9.81253C14.9673 9.87871 14.9027 9.93096 14.828 9.9639C14.7533 9.99685 14.6711 10.0093 14.59 9.99999V9.95999ZM16.13 11.15C15.953 11.1463 15.7818 11.086 15.6415 10.9781C15.5011 10.8701 15.399 10.7201 15.35 10.55C15.3278 10.4774 15.3232 10.4005 15.3365 10.3257C15.3498 10.251 15.3807 10.1804 15.4265 10.1199C15.4724 10.0594 15.532 10.0106 15.6004 9.9776C15.6688 9.94458 15.744 9.92827 15.82 9.92999C15.9978 9.93593 16.1692 9.99821 16.3094 10.1078C16.4496 10.2175 16.5513 10.3688 16.6 10.54C16.6251 10.6122 16.6319 10.6895 16.6197 10.7649C16.6075 10.8404 16.5766 10.9116 16.53 10.9721C16.4833 11.0327 16.4223 11.0806 16.3525 11.1117C16.2826 11.1428 16.2062 11.1559 16.13 11.15ZM17.06 9.92999C16.8821 9.92949 16.7094 9.87046 16.5684 9.76202C16.4274 9.65358 16.3261 9.50176 16.28 9.32999C16.2554 9.25729 16.2489 9.17967 16.2613 9.10392C16.2736 9.02816 16.3043 8.95657 16.3506 8.89541C16.397 8.83425 16.4576 8.78537 16.5272 8.75305C16.5969 8.72073 16.6733 8.70594 16.75 8.70999C16.9274 8.71744 17.0981 8.78028 17.238 8.88969C17.3779 8.99909 17.48 9.14957 17.53 9.31999C17.5526 9.39211 17.5574 9.4686 17.5442 9.54299C17.5309 9.61739 17.4999 9.68749 17.4538 9.74734C17.4076 9.8072 17.3478 9.85506 17.2792 9.88686C17.2107 9.91865 17.1355 9.93345 17.06 9.92999Z"
            fill="currentColor"
        />
    </svg>
);
