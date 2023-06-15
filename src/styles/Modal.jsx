import styled from 'styled-components';

export const ModalContent = styled.section`
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    .bg{
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: #0000005a;
    }
    .card{
        position: relative;
        width: 100%;
        max-width: 1000px;
        margin: 0 20px;
        height: auto;
        max-height: 86vh;
        min-height: 300px;
        background: #fff;
        border-radius: 10px;
        padding: 40px 20px;
        overflow-y: scroll;
        .close{
            position: absolute;
            width: 100%;
            display: flex;
            justify-content: flex-end;
            top: 20px;
            right: 20px;
            cursor: pointer;
        }
        .title-card{
            h1{
                font-size: var(--fs-sm);
                font-weight: 700;

            }
        }
        .text{
            margin-top: 20px;
            h4{
                font-size: var(--fs-xs);
                margin: 20px 0;
            }
            p{
                margin: 10px 0;
                font-size: var(--fs-xxs);
            }
            img{
                width: 100%;
                max-width: 150px;
            }
        }
    }
`;
