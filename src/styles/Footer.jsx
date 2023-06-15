import styled from 'styled-components';

export const FooterContent = styled.footer`
    position: relative;
    width: 100%;
    height: auto;
    background: #FAA14F;
    margin-top: 14%;
    main{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 60px;
        padding: 0 20px;
        .box{
            p{
                font-size: var(--fs-xxs);
                color: #fff;
                font-weight: 400;
            }
            img{
                width: 100%;
                max-width: 40px;
            }
        }
    }
`;
