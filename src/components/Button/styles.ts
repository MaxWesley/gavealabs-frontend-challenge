import styled from 'styled-components';

import { Link } from 'react-router-dom';

interface ContainerProps {
    buttonStyle: iButtonStyle;
}

export const Container = styled(Link)<ContainerProps>`
    width: 100%;
    max-width: 333px;
    height: 55px;

    border-radius: 4px;

    ${props => props.buttonStyle === 'confirm' ?
        'background-color: #FF6900;'
        :
        `
            background-color: transparent;
            border: 1px solid #FFFFFF;
        `
    }

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