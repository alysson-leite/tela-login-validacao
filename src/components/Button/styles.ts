import styled from 'styled-components';


export const ButtonContainer = styled.button`
    width: 100%;
    height: 42px;
    background-color: #81259D;
    color: #FFF;

    border: 1px solid #81259D;
    border-radius: 21px;

    transition: .3s;

    &:hover {
        opacity: 0.8;
        cursor:pointer;
    }

    &:active {
        opacity: 0.6;
    }
`