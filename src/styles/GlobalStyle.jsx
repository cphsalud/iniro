import { createGlobalStyle } from 'styled-components';
import { Device } from './Device';

export const GlobalStyle = createGlobalStyle`

    :root{

    --gray-text-color: #6D6D6D;
    --bluedark-text-color: #3f3e66;

    @media ${Device.mobileS}{
      --fs-lg: 2.5rem;
      --fs-mdl: 1.75rem;
      --fs-md: 1.50rem;
      --fs-sm: 1.25rem;
      --fs-xs: 1.25rem;
      --fs-xxs: .9rem;
      --fs-xxxs: 0.7rem;
    }
    @media ${Device.tablet}{
      --fs-lg: 3rem;
      --fs-mdl: 2.5rem;
      --fs-md: 2rem;
      --fs-sm: 1.5rem;
      --fs-xs: 1.2rem;
      --fs-xxs: 1rem;
      --fs-xxxs: 0.7rem;
    }
    @media ${Device.laptop}{
      --fs-lg: 4rem;
      --fs-mdl: 3rem;
      --fs-md: 2.5rem;
      --fs-sm: 2rem;
      --fs-xs: 1.2rem;
      --fs-xxs: 1rem;
      --fs-xxxs: 0.5rem;
    }
    @media ${Device.laptopL}{
      --fs-lg: 5rem;
      --fs-mdl: 3.2rem;
      --fs-md: 3rem;
      --fs-sm: 2rem;
      --fs-xs: 1.5rem;
      --fs-xxs: 1.1rem;
      --fs-xxxs: 0.7rem;
    }
    @media ${Device.desktop}{
      --fs-lg: 7rem;
      --fs-mdl: 5rem;
      --fs-md: 4rem;
      --fs-sm: 3.5rem;
      --fs-xs: 2.5rem;
      --fs-xxs: 1.5rem;
    }

  }

    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Red Hat Display', sans-serif;
      scroll-behavior: smooth;
    }

    .block-scroll{
      overflow: hidden;
    }

    main{
      width: 100%;
      max-width: 1600px;
      margin: 0 auto;
    }
    
`;
