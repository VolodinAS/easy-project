import styled from '@emotion/styled';

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: rgba(122, 82, 170, 0.2);
`;
const Form = styled.form`
    box-sizing: border-box;
    min-width: 600px;
    margin: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: #fff;
    border-radius: 15px ;
`;   
const Titel = styled.p`
    margin: auto;
    margin-top: 32px;
    min-height: 58px;
    font-size: 36px;
    font-weight: 700;
    line-height: 42px;
    text-align: center;
    color: #000000;   
`;

const Button = styled.button`
    min-width: 200px;
    min-height: 60px;
    align-self: flex-end;
    margin:32px 32px 32px 0px;
    background-color: rgba(122, 82, 170, 0.8);
    border: none;
    border-radius: 10px;
    box-shadow: none;
    font-weight: 700;
    font-size: 18px;
    color: #fff;
`;

const Fieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
    margin-bottom: 22px;
    gap: 32px;
`;

export { Section, Form, Titel, Button, Fieldset};
