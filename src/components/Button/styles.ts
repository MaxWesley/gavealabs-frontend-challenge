import styled, { css } from 'styled-components';
interface ContainerProps {
    buttonStyle: iButtonStyle;
}

const confirm_button = css`
    background-color: #FF6900;
`;

const outline_button = css`
    background-color: transparent;
    border: 1px solid #FFFFFF;
`;

export const Container = styled.button<ContainerProps>`
    width: 100%;
    max-width: 333px;
    height: 55px;

    border-radius: 4px;

    ${props => props.buttonStyle === 'confirm' ? confirm_button : outline_button};

    color: #FFFFFF;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'Inter', sans-serif;
    font-weight: bold;
    font-size: 15px;

    & + & {
        margin-top: 15px;
    }
`;