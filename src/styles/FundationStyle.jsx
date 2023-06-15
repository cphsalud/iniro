import styled from 'styled-components';
import { Device } from './Device';
import b1 from '../assets/pic/1.jpg';
import b2 from '../assets/pic/2.jpg';
import b3 from '../assets/pic/3.jpg';

export const FundationContent = styled.section`
    position: relative;
    width: 100%;
    height: auto;
    margin-top: 30px;
    main{
        .boxes{
            position: relative;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 30px;
            padding: 0 20px;
            @media ${Device.mobileS}{
                display: block;
            }
            @media ${Device.tablet}{
                display: grid;
                grid-template-columns: 1fr 1fr;
            }
            .box{
                width: 100%;
                border-radius: 42px;
                background-position: center;
                background-size: cover;
                background-repeat: no-repeat;
                @media ${Device.mobileS}{
                    height: auto;
                }
                @media ${Device.tablet}{
                    height: 80vh;
                }
                &:nth-child(1){
                    background-image: url(${b1});
                    display: flex;
                    justify-content: space-between;
                    flex-direction: column;
                    padding: 5%;
                    @media ${Device.mobileS}{
                        height: 500px;
                    }
                    @media ${Device.tablet}{
                        height: 80vh;
                    }
                    .text{
                        position: relative;
                        h1{
                            font-size: var(--fs-mdl);
                            font-weight: 600;
                            color: #fff;
                            strong{
                                font-weight: 800;
                            }
                        }
                        h3{
                            font-size: var(--fs-sm);
                            font-weight: 400;
                            max-width: 400px;
                            color: #fff;
                            strong{
                                font-weight: 800;
                            }
                        }
                        &:nth-child(3){
                            @media ${Device.tablet}{
                                display: block;
                            }
                            @media ${Device.tablet}{
                                display: flex;
                            }
                            img{
                                margin-right: 20px;
                            }
                            p{
                                font-size: var(--fs-xxs);
                                font-weight: 400;
                                color: #fff;
                            }
                        }
                    }
                    @media ${Device.tablet}{
                        grid-column: 1/3;
                        grid-row: 1;
                    }
                    @media ${Device.laptop}{
                        grid-column: 1/1;
                        grid-row: 1;
                    }
                }
                &:nth-child(2){
                    background-color: transparent;
                    @media ${Device.mobileS}{
                        grid-column: 1/3;
                        grid-row: 2;
                        display: block;
                        margin-top: 30px;
                    }
                    @media ${Device.tablet}{
                        grid-column: 1/3;
                        grid-row: 2;
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        margin-top: 0px;
                    }
                    @media ${Device.laptop}{
                        grid-column: 2/2;
                        grid-row: 1;
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        background-position: center;
                        background-size: cover;
                        background-repeat: no-repeat;
                    }
                    
                }
                .box-items{
                    width: 100%;
                    border-radius: 42px;
                    grid-gap: 20px;
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                    @media ${Device.mobileS}{
                        padding-left: 0;
                        height: 380px;
                    }
                    @media ${Device.tablet}{
                        padding-left: 0;
                        height: 38vh;
                    }
                    &:nth-child(1){
                        grid-column: 1/3;
                        grid-row: 1;
                        background-image: url(${b2});
                        margin-bottom: 30px;
                        .text{
                            display: flex;
                            justify-content: space-between;
                            flex-direction: column;
                            padding: 25px;
                            color: #fff;
                            .img{
                                width: 100%;
                                display: flex;
                                justify-content: flex-end;
                                img{
                                    cursor: pointer;
                                }
                            }
                            h3{
                                font-size: var(--fs-sm);
                                font-weight: 700;
                                color: #fff;
                            }
                            @media ${Device.mobileS}{
                                height: 380px;
                            }
                            @media ${Device.tablet}{
                                height: 38vh;
                            }
                        }
                    }
                    &:nth-child(2){
                        grid-column: 1/1;
                        grid-row: 2;
                        background-image: url(${b3});
                        .text{
                            display: flex;
                            justify-content: space-between;
                            flex-direction: column;
                            padding: 25px;
                            color: #fff;
                            .img{
                                width: 100%;
                                display: flex;
                                justify-content: flex-end;
                                img{
                                    cursor: pointer;
                                }
                            }
                            h3{
                                font-size: var(--fs-sm);
                                font-weight: 700;
                                color: #fff;
                            }
                            @media ${Device.mobileS}{
                                height: 380px;
                            }
                            @media ${Device.tablet}{
                                height: 38vh;
                            }
                        }
                    }
                    &:nth-child(3){
                        grid-column: 2/2;
                        grid-row: 2;
                        background-color: transparent;
                        display: flex;
                        justify-content: space-between;
                        flex-direction: column;
                        @media ${Device.mobileS}{
                            padding-left: 0;
                            margin-top: 20px;
                        }
                        @media ${Device.tablet}{
                            padding-left: 24px;
                            margin-top: 0px;
                        }
                        .items{
                            position: relative;
                            width: 100%;
                            border-radius: 16px;
                            display: flex;
                            justify-content: space-between;
                            padding: 25px;
                            color: #fff;
                            align-items: center;
                            img{
                                width: 100%;
                                display: flex;
                                justify-content: flex-end;
                                cursor: pointer;
                            }
                            h3{
                                font-size: var(--fs-xs);
                                font-weight: 700;
                                color: #fff;
                            }
                           
                            @media ${Device.mobileS}{
                                padding-left: 24px;
                                margin-top: 20px;
                                height: 200px;
                            }
                            @media ${Device.tablet}{
                                margin-top: 0px;
                                padding-left: 24px;
                                height: 12vh;
                                max-height: 80px;
                                
                            }
                            &:nth-child(1){
                                background-color: #FF7F56;
                                
                            }
                            &:nth-child(2){
                                background-color: #68D236;
                            }
                            &:nth-child(3){
                                background-color: #68A4FF;
                            }
                        }
                    }
                }
            }
        }
    }
`;
