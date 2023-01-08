import { createGlobalStyle } from 'styled-components';
import bg from '../public/images/wall.jpeg';

export const GlobalStyle = createGlobalStyle`
    html
    body {
        padding: 0,
        margin: 0,
        letter-spacing: -1px;
        font-size: 15px;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        background-image: url(${bg.src});
        background-size: cover;
        background-position: center;
        height: 100vh;
        width: 100vw;
        // background: black;
    }

    .txt-c {
        text-align: center;
    }
    .txt-r {
        text-align: right;
    }
    .txt-l {
        text-align: left;
    }
    p{
        margin: 0;
    }
`;
