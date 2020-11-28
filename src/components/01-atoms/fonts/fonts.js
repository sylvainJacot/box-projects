import { createGlobalStyle } from 'styled-components';

import PlayFairWoff from './Playfair_Display/PlayfairDisplay-Black.woff';
import PlayFairWoff2 from './Playfair_Display/PlayfairDisplay-Black.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Playfair Display';
        src: local('Playfair Display'), local('PlayfairDisplay'),
        url(${PlayFairWoff2}) format('woff2'),
        url(${PlayFairWoff}) format('woff');
        /* font-weight: 300; */
        font-style: normal;
    }
`;
