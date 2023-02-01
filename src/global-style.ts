import { injectGlobal } from '@emotion/css';
import styled from '@emotion/styled';

import theme from './theme';

injectGlobal`
    @import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

    html {
        font-family: 'Roboto', sans-serif;
        color: ${theme.color.black};
        font-size: 16px;
    }
    * {
        box-sizing: border-box;
    }
    *:focus {
        outline: none;
    }
    fieldset {
        border: 0;
        padding: 0;
        margin: 0;
        min-width: 0;
    }
    h1, h2, h3, h4, h5, h6, p {
        padding: 0;
        margin: 0;
    }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 0 16px;
  margin: 0 auto;
`;
