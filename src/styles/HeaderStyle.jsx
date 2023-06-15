import styled from 'styled-components';
import { Device } from './Device';

export const HeaderContent = styled.header`
    position: relative;
    width: 100%;
    height: 70px;
    background-color: #fff;
    main{
        nav{
            position: relative;
            width: 100%;
            height: 70px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 20px;
            .logo{
                img{
                    width: 100%;
                    max-width: 60px;
                }
            }
            ul{
                list-style: none;
                li{
                    display: inline-block;
                    @media ${Device.mobileS} {
                        margin-right: 0px;
                    }
                    @media ${Device.tablet} {
                        margin-right: 20px;
                    }
                    &:nth-child(1){
                        @media ${Device.mobileS} {
                            display: none;
                        }
                        @media ${Device.tablet} {
                            display: inline-block;
                        }
                    }
                    &:nth-child(2){
                        @media ${Device.mobileS} {
                            display: none;
                        }
                        @media ${Device.tablet} {
                            display: inline-block;
                        }
                    }
                    a{
                        text-decoration: none;
                        p{
                            font-size: var(--fs-xxs);
                            font-weight: 500;
                            color: var(--gray-text-color);
                        }
                        button{
                            position: relative;
                            top: -2px;
                        }
                        
                    }
                }
            }
        }
    }
`;
