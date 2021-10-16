import styled from 'styled-components';

export const Container = styled.label`
    display: block;

    position: relative;

    width: 100%;
    max-width: 333px;

    height: 55px;

    border: 1px solid #D2E3EF;
    border-radius: 4px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-left: 19.67px;
    padding-right: 20.89px;

    transition: border 0.3s ease;

    input {
        width: 100%;
    }

    & + & {
        margin-top: 15px;
    }

    span {
        margin-right: 17.67px;
    }

    button {
        background-color: transparent;
    }

    &:focus-within{
        border: 1px solid #FF6900;
    }
`;