import React from 'react';

import { IconProps } from '../IconRoot';

export const HeartBoxOutline: React.FC<IconProps> = (props) => (
    <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            d="M6.75 2C6.33579 2 6 2.33579 6 2.75C6 3.16421 6.33579 3.5 6.75 3.5H17.25C17.6642 3.5 18 3.16421 18 2.75C18 2.33579 17.6642 2 17.25 2H6.75Z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.75 11.3447C6.75 9.93611 7.9445 8.25 9.91464 8.25C10.5343 8.25 11.069 8.49352 11.4963 8.78885C11.676 8.91312 11.8442 9.05162 12 9.19519C12.1558 9.05162 12.324 8.91312 12.5037 8.78885C12.931 8.49352 13.4657 8.25 14.0854 8.25C16.0555 8.25 17.25 9.93611 17.25 11.3447C17.25 12.5488 16.6685 13.6442 15.9402 14.5632C15.2058 15.4899 14.2591 16.3165 13.3895 16.9954L13.3291 17.0428C13.0774 17.2404 12.804 17.4551 12.4586 17.5489C12.1676 17.6279 11.8324 17.6279 11.5414 17.5489C11.196 17.4551 10.9225 17.2404 10.6709 17.0428L10.6105 16.9954C9.7409 16.3165 8.7942 15.4899 8.05983 14.5632C7.33154 13.6442 6.75 12.5488 6.75 11.3447ZM9.91464 9.75C8.89201 9.75 8.25 10.6402 8.25 11.3447C8.25 12.0641 8.6033 12.8339 9.23543 13.6316C9.86149 14.4216 10.7008 15.163 11.5335 15.813C11.6996 15.9427 11.7908 16.0132 11.8632 16.061C11.8951 16.0821 11.9135 16.0919 11.923 16.0966C11.9307 16.1003 11.9335 16.101 11.9344 16.1013C11.968 16.1104 12.0319 16.1104 12.0655 16.1013C12.0664 16.101 12.0693 16.1003 12.077 16.0966C12.0865 16.0919 12.1049 16.0821 12.1368 16.061C12.2092 16.0132 12.3004 15.9427 12.4665 15.813C13.2992 15.163 14.1385 14.4216 14.7646 13.6316C15.3967 12.8339 15.75 12.0641 15.75 11.3447C15.75 10.6402 15.108 9.75 14.0854 9.75C13.8693 9.75 13.6292 9.83442 13.3566 10.0228C13.0828 10.212 12.8187 10.4772 12.5687 10.7679C12.4262 10.9336 12.2185 11.029 12 11.0289C11.7815 11.0289 11.5738 10.9336 11.4313 10.7679C11.1813 10.4772 10.9172 10.2121 10.6434 10.0228C10.3708 9.83442 10.1307 9.75 9.91464 9.75Z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.91957 5H17.0804C17.6146 4.99999 18.0604 4.99998 18.4247 5.02974C18.8046 5.06078 19.1612 5.12789 19.4985 5.29973C20.0159 5.56338 20.4366 5.98408 20.7003 6.50153C20.8721 6.83879 20.9392 7.19545 20.9703 7.57533C21 7.93956 21 8.3854 21 8.91955V17.0805C21 17.6146 21 18.0604 20.9703 18.4247C20.9392 18.8046 20.8721 19.1612 20.7003 19.4985C20.4366 20.0159 20.0159 20.4366 19.4985 20.7003C19.1612 20.8721 18.8046 20.9392 18.4247 20.9703C18.0604 21 17.6146 21 17.0805 21H6.91955C6.3854 21 5.93956 21 5.57533 20.9703C5.19545 20.9392 4.83879 20.8721 4.50153 20.7003C3.98408 20.4366 3.56339 20.0159 3.29973 19.4985C3.12789 19.1612 3.06078 18.8046 3.02974 18.4247C2.99998 18.0604 2.99999 17.6146 3 17.0805V8.91957C2.99999 8.38542 2.99998 7.93956 3.02974 7.57533C3.06078 7.19545 3.12789 6.83879 3.29973 6.50153C3.56339 5.98408 3.98408 5.56338 4.50153 5.29973C4.83879 5.12789 5.19545 5.06078 5.57533 5.02974C5.93956 4.99998 6.38542 4.99999 6.91957 5ZM5.69748 6.52476C5.41036 6.54822 5.27307 6.5901 5.18251 6.63624C4.94731 6.75608 4.75608 6.94731 4.63624 7.18251C4.5901 7.27307 4.54822 7.41035 4.52476 7.69748C4.50058 7.99336 4.5 8.37757 4.5 8.95V17.05C4.5 17.6224 4.50058 18.0066 4.52476 18.3025C4.54822 18.5896 4.5901 18.7269 4.63624 18.8175C4.75608 19.0527 4.94731 19.2439 5.18251 19.3638C5.27307 19.4099 5.41036 19.4518 5.69748 19.4752C5.99336 19.4994 6.37757 19.5 6.95 19.5H17.05C17.6224 19.5 18.0066 19.4994 18.3025 19.4752C18.5896 19.4518 18.7269 19.4099 18.8175 19.3638C19.0527 19.2439 19.2439 19.0527 19.3638 18.8175C19.4099 18.7269 19.4518 18.5896 19.4752 18.3025C19.4994 18.0066 19.5 17.6224 19.5 17.05V8.95C19.5 8.37757 19.4994 7.99336 19.4752 7.69748C19.4518 7.41035 19.4099 7.27307 19.3638 7.18251C19.2439 6.94731 19.0527 6.75608 18.8175 6.63624C18.7269 6.5901 18.5896 6.54822 18.3025 6.52476C18.0066 6.50058 17.6224 6.5 17.05 6.5H6.95C6.37757 6.5 5.99336 6.50058 5.69748 6.52476Z"
            fill="currentColor"
        />
    </svg>
);
