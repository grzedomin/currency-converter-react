import styled from "styled-components";

export const Button = styled.button`
    padding: 6px;
    background-color: #fff;
    border: 1px solid #485665;
    color: #485665;
    border-radius: 12px;
    width: 100%;
    max-width: 150px;
    font-size: 20px;

    &:hover{
    background-color:rgb(216, 216, 216);
    color: #485665;
    cursor: pointer;
    transition: 0.3s;
    }
`;