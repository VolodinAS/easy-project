import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    color: {
      typeTask: string;
      typeFeature: string;
      typeBug: string;
      black: string;
      lightPurple: string;
      purple: string;
      lightGray: string;
      darkGray: string;
      red: string;
      white: string;
      smallText: string;
      opacityGray: string;
      landingColors: {
        mainGray: string,
        mainBlue: string,
        benefitsItemBackground: string,
        buttonStartBackground: string,
        footerBackground: string,
        headerLogo: string,
        headerBackground: string
      },
      dashboardColors: {
        overlayButtonCreate: string;
        overlayButtonYes: string;
        overlayButtonNo: string;
      }
    }
  }
}
