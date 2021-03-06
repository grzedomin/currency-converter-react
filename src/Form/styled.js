import styled from "styled-components";

export const Fieldset = styled.fieldset`
    border: none;
    color: #485665;
    border-radius: 35px;
    font-size: 20px;
    margin: 20px 10px 20px 10px;
    background-color:white;
    -webkit-box-shadow: 0px 0px 3px 0px rgba(175, 175, 175, 1);
    -moz-box-shadow: 0px 0px 3px 0px rgba(175, 175, 175, 1);
    box-shadow: 0px 0px 3px 0px rgba(175, 175, 175, 1);
    padding: 35px;
`;

export const Header = styled.h1`
    font-size: 30px;
    font-weight: 800;
    color: #485665;
    text-align: center;
`;

export const SubHeader = styled.p`
    margin-left: 40px;
    margin-bottom: 15px;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 15px;

    @media (max-width: 500px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
`;

export const Title = styled.span`
    max-width: 160px;
    width: 100%;
    display: inline-block;
    margin-left: 10px;
    margin-right: 20px;
`;

export const Red = styled.span`
    color: red;
`;

export const Input = styled.input`
    border-radius: 8px;
    border: 2px solid #485665;
    max-width: 250px;
    width: 100%;
    padding: 3px;
    font-weight: 300;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    @media (max-width: 650px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 5px;  
    }
`;

export const ParagraphInfo = styled.p`
    text-align: center;
    margin-bottom: 0px;
    font-size: 18px;
`

export const StyledDate = styled.span`
    font-weight: 500;
`

export const Loading = styled.div`
    height: 170px;
    border-radius: 20px;
    margin: 10px;
    padding: 30px;
    font-size: 18px;
    text-align: center;
    background-color: white;
    color: #485665;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    -webkit-box-shadow: 0px 0px 3px 0px rgba(175, 175, 175, 1);
    -moz-box-shadow: 0px 0px 3px 0px rgba(175, 175, 175, 1);
    box-shadow: 0px 0px 3px 0px rgba(175, 175, 175, 1);
`

export const PopUpInfo = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const PopUpErrorInfo = styled.span`
    color: crimson;
`