import styled from 'styled-components';

export const QuestionsContent = styled.section`
    position: relative;
    width: 100%;
    height: auto;
    margin-top: 10%;
    display: flex;
    justify-content: center;
    main{
        .title{
            text-align: center;
            h1{
                font-size: var(--fs-md);
                font-weight: 700;
                color: #646464;
            }
        }
        .question-wrap{
            position: relative;
            width: 100%;
            padding-top: 60px;
            padding-left: 20px;
            padding-right: 20px;
            max-width: 1100px;
            margin: 0 auto;
            .item{
                .title-item{
                    position: relative;
                    width: 100%;
                    height: 80px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 2px solid #E4E4E4;
                    transition: .2s ease-in-out;
                    p{
                        font-size: var(--fs-xs);
                        font-weight: 500;
                        color: #656565;
                    }
                    /* &:hover{
                        p{
                            color: #a9a9a9!important;
                        }
                    } */
                    .img{
                        cursor: pointer;
                        img{
                            cursor: pointer;
                        }
                    }
                }
                .txt-1{
                    position: relative;
                    width: 100%;
                    max-height: 0px;
                    transition: max-height 0.4s ease-in-out;
                    overflow: hidden;
                    p{
                        padding: 20px 0;
                        font-weight: 400;
                        font-size: var(--fs-xxs);
                        color: #333;
                    }
                }
                .txt-2{
                    position: relative;
                    width: 100%;
                    max-height: 0px;
                    transition: max-height 0.4s ease-in-out;
                    overflow: hidden;
                    p{
                        padding: 10px 0;
                        font-weight: 400;
                        font-size: var(--fs-xxs);
                        color: #333;
                    }
                    ul{
                        list-style: disc;
                        padding: 20px;
                    }
                }
                .txt-3{
                    position: relative;
                    width: 100%;
                    max-height: 0px;
                    transition: max-height 0.4s ease-in-out;
                    overflow: hidden;
                    p{
                        padding: 20px 0;
                        font-weight: 400;
                        font-size: var(--fs-xxs);
                        color: #333;
                    }
                }
                .txt-4{
                    position: relative;
                    width: 100%;
                    max-height: 0px;
                    transition: max-height 0.4s ease-in-out;
                    overflow: hidden;
                    p{
                        padding: 10px 0;
                        font-weight: 400;
                        font-size: var(--fs-xxs);
                        color: #333;
                    }
                    ul{
                        list-style: disc;
                        padding: 20px;
                    }
                }
                .txt-5{
                    position: relative;
                    width: 100%;
                    max-height: 0px;
                    transition: max-height 0.4s ease-in-out;
                    overflow: hidden;
                    p{
                        padding: 10px 0;
                        font-weight: 400;
                        font-size: var(--fs-xxs);
                        color: #333;
                    }
                   
                }
            }
        }
    }
`;
