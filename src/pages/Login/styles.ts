import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    padding: 21px 38px;

    background-color: #FFFFFF;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const FormText = styled.h1`
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 36px;

    line-height: 42px;

    color: #092A34;

    margin-top: calc(125px - 38px);

    span {
        display: block;
        color: #FF6900;
    }
`;

export const Form = styled.form`
    main {
        margin-top: 31px;
        margin-bottom: 30px;
    }
`;

export const CreateAccountText = styled.p`
    font-family: 'Karla', sans-serif;
    font-weight: 400;
    font-size: 15px;

    text-align: center;

    color: #748C94;

    a {
        font-weight: 700;
        color: #FF6900;
    }
`;