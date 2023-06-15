import styled from 'styled-components';
import { Device } from './Device';

export const RequestContent = styled.section`
    position: relative;
    width: 100%;
    height: auto;
    max-width: 1000px;
    margin: 0 auto;
    padding-top: 10%;
    main{
        @media ${Device.mobileS}{
            display: block;
        }
        @media ${Device.tablet}{
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 30px;
        }
        .box{
            position: relative;
            width: 100%;
            @media ${Device.mobileS}{
                height: auto;
            }
            @media ${Device.tablet}{
                height: 500px;
            }
            &:nth-child(1){
                grid-column: 1/1;
                display: flex;
                justify-content: center;
                flex-direction: column;
                padding-left: 20px;
                h1{
                    font-size : var(--fs-sm);
                    font-weight: 700;
                    color: #646464;
                }
                ul{
                    margin-top: 20px;
                    padding: 20px;
                    li{
                        h3{
                            font-size : var(--fs-xs);
                            font-weight: 500;
                            color: #646464;
                        }
                    }
                }
            }
            &:nth-child(2){
                grid-column: 2/2;
                grid-row: 1;
                .form-content{
                    padding: 20px;
                    form, .panel-form{
                        padding: 30px;
                        position: relative;
                        width: 100%;
                        height: 540px;
                        background: linear-gradient(179.95deg, #FFA450 0.04%, #B8793F 117.04%);
                        border-radius: 13px;
                        .panel-content{
                            position: relative;
                            width: 100%;
                            height: 540px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            flex-direction: column;
                            padding-bottom: 80px;
                            h1{
                                font-weight: 700;
                                color: #fff;
                                font-size: var(--fs-md);
                                padding: 20px 0;
                            }
                        }
                        .title{
                            font-size: var(--fs-xs);
                            font-weight: 700;
                            color: #fff;
                        }
                        .items{
                            position: relative;
                            width: 100%;
                            height: auto;
                            padding: 15px 0;
                            input{
                                width: 100%;
                                height: 35px;
                                border: 0;
                                background: transparent;
                                border-bottom: 1px solid #fff;
                                color: #fff;
                                ::placeholder{
                                    color: #fff;
                                    outline: none;
                                }
                                :focus{
                                    outline: none;
                                }
                            }
                            p{
                                color: #fff;
                            }
                            textarea{
                                width: 100%;
                                height: 110px;
                                margin-top: 10px;
                                border-radius: 9px;
                                border: 0px;
                                padding: 10px;
                                :focus{
                                    outline: none;
                                }
                            }
                        }
                        button{
                            width: 100%;
                            height: 40px;
                            background-color: #fff;
                            border: 0;
                            border-radius: 5px;
                            color: #CD8644;
                            font-weight: 500;
                            cursor: pointer;
                            transition: .3s ease-in-out;
                            &:hover{
                                background-color: #ffba19;
                                color: #fff;
                            }
                        }
                    }
                }
            }
        }
    }
`;
