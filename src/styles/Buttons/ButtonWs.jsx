import styled from 'styled-components';

export const ButtonWs = styled.button`
    background-color: #68D236;
    border: 0px;
    padding: 0 20px;
    height: 30px;
    color: #fff;
    display: flex;
    align-items: center;
    border-radius: 6px;
    cursor: pointer;
    transition: .2s all ease-in-out;
    &:hover{
        background-color: #3d9117;
    }
    img{
        margin-left: 8px;
        width: 22px;
        position: relative;
        top: 1px;
    }
`;
